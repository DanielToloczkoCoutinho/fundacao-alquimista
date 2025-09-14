'use server';

import { NextResponse, NextRequest } from 'next/server';
import { verifyAuthenticationResponse } from '@simplewebauthn/server';
import type { AuthenticationResponseJSON, VerifiedAuthenticationResponse } from '@simplewebauthn/types';
import { kv } from '@vercel/kv';
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';

// Em um app real, o usuário e seus dispositivos seriam recuperados de um banco de dados.
const userStore: any = {
    'anatheron-sovereign': {
        id: 'anatheron-sovereign',
        username: 'ANATHERON',
        devices: [], // Dispositivos registrados seriam armazenados aqui.
    }
};

// Classe auxiliar para decodificar authenticatorData se necessário
class AuthenticatorData {
    private rpIdHash: Buffer;
    private flags: number;
    public counter: number;
    public transports?: string[];

    constructor(buffer: Buffer) {
        this.rpIdHash = buffer.slice(0, 32);
        this.flags = buffer.readUInt8(32);
        this.counter = buffer.readUInt32BE(33);
        // ... Lógica adicional para decodificar transports e outros dados se necessário
    }
}

export async function POST(request: NextRequest) {
  try {
    const { credential, userId, expectedChallenge: clientChallenge } = await request.json();

    if (!credential || !userId) {
      return NextResponse.json({ error: 'Dados de autenticação incompletos' }, { status: 400 });
    }
    
    const user = userStore[userId];
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }
  
    const expectedChallenge = await kv.get<string>(`webauthn:challenge:${userId}`);
    if (!expectedChallenge) {
      return NextResponse.json({ error: 'Challenge expirado ou não encontrado' }, { status: 400 });
    }
    
    const rpID = process.env.RP_ID || 'localhost';
    const origin = process.env.NEXTAUTH_URL || `https://${rpID}`;
    
    const device = user.devices.find((d: any) => d.credentialID === credential.id);
    if (!device) {
       console.warn(`Dispositivo com ID ${credential.id} não encontrado para o usuário ${userId}. Em uma aplicação real, isso deveria ser um erro.`);
    }

    const verification: VerifiedAuthenticationResponse = await verifyAuthenticationResponse({
        response: credential,
        expectedChallenge,
        expectedOrigin: origin,
        expectedRPID: rpID,
        authenticator: device || { // Mock para demonstração. Use o dispositivo real em produção.
            credentialID: Buffer.from(credential.id, 'base64'),
            credentialPublicKey: new Uint8Array(0),
            counter: -1,
            transports: credential.response.authenticatorData ? new AuthenticatorData(Buffer.from(credential.response.authenticatorData, 'base64')).transports : undefined
        },
        requireUserVerification: true,
    });
  
    const { verified } = verification;
    
    if (verified) {
      await kv.del(`webauthn:challenge:${userId}`);
      
      const sessionId = randomBytes(16).toString('hex');
      const tokenPayload = {
        sub: userId,
        sid: sessionId,
        auth_time: Math.floor(Date.now() / 1000),
        amr: ['webauthn'],
        'x-fond-ctx': {
          security_level: 'quantum',
          auth_method: 'passkey'
        }
      };

      const token = jwt.sign(
        tokenPayload,
        process.env.JWT_SECRET as string,
        { 
          expiresIn: '8h',
          issuer: 'fundacao-omega-auth',
          audience: ['fundacao-omega-web', 'fundacao-omega-api'],
          header: {
            alg: 'HS256',
            typ: 'JWT',
            kid: 'omega-auth-key-1'
          }
        }
      );
      
      return NextResponse.json({ 
        verified: true, 
        token: {
          access_token: token,
          token_type: 'Bearer',
          expires_in: 28800,
          refresh_token: randomBytes(32).toString('hex')
        },
        user: {
          id: userId,
          name: await kv.get<string>(`user:${userId}:name`) || 'Guardião da Fundação',
          session_id: sessionId
        }
      });
    } else {
      return NextResponse.json({ error: "Falha na verificação de autenticação" }, { status: 401 });
    }
  } catch (error: any) {
    console.error('Erro crítico na verificação WebAuthn:', error);
    return NextResponse.json({ error: 'Falha interna do servidor de autenticação', details: error.message }, { status: 500 });
  }
}
