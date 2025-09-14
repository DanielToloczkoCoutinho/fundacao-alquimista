'use server';

import { NextResponse, NextRequest } from 'next/server';
import { verifyAuthenticationResponse, VerifiedAuthenticationResponse } from '@simplewebauthn/server';
import type { AuthenticationResponseJSON } from '@simplewebauthn/types';
import { kv } from '@vercel/kv';
import jwt from 'jsonwebtoken';

// Simulação em memória. Em um aplicativo real, use um banco de dados (ex: Redis, Firestore).
const userStore: any = {
    'anatheron-sovereign': {
        id: 'anatheron-sovereign',
        username: 'ANATHERON',
        devices: [], // Dispositivos registrados seriam armazenados aqui.
    }
};

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
    const { credential, userId } = await request.json();
    
    const user = userStore[userId];
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }
  
    const expectedChallenge = await kv.get<string>(`webauthn:challenge:${userId}`);
    if (!expectedChallenge) {
      return NextResponse.json({ error: 'Challenge expirado ou não encontrado' }, { status: 400 });
    }
    
    const rpID = process.env.RP_ID || 'localhost';
    const expectedOrigin = process.env.ORIGIN || (process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    
    // Em uma implementação real, você recuperaria o dispositivo do seu banco de dados
    const device = user.devices.find((d: any) => d.credentialID === credential.id);
    if (!device) {
       console.warn(`Dispositivo com ID ${credential.id} não encontrado para o usuário ${userId}. Em uma aplicação real, isso deveria ser um erro.`);
       // Para fins de demonstração, continuaremos sem o authenticator exato.
    }

    const verification: VerifiedAuthenticationResponse = await verifyAuthenticationResponse({
        response: credential,
        expectedChallenge,
        expectedOrigin,
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
      // Limpe o challenge usado
      await kv.del(`webauthn:challenge:${userId}`);
      
      const token = jwt.sign(
        { 
          sub: userId,
          auth_time: Math.floor(Date.now() / 1000)
        },
        process.env.JWT_SECRET as string,
        { 
          expiresIn: '1h',
          issuer: 'fundacao-omega',
          audience: 'fundacao-omega-web'
        }
      );
      
      return NextResponse.json({ 
        verified: true, 
        token,
        user: {
          id: userId,
          name: await kv.get<string>(`user:${userId}:name`) || 'Guardião Anônimo'
        }
      });
    } else {
      return NextResponse.json({ error: "Falha na verificação de autenticação" }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Erro na verificação WebAuthn:', error);
    return NextResponse.json({ error: 'Erro interno do servidor', details: error.message }, { status: 500 });
  }
}
