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

export async function POST(request: NextRequest) {
  try {
    const body: AuthenticationResponseJSON & { userId: string } = await request.json();
    const { userId, ...credential } = body;
    
    const user = userStore[userId];
    if (!user) {
      return NextResponse.json({ verified: false, error: 'Usuário não encontrado' }, { status: 404 });
    }
  
    const expectedChallenge = await kv.get<string>(`webauthn:challenge:${userId}`);
    if (!expectedChallenge) {
      return NextResponse.json({ verified: false, error: 'Nenhum desafio pendente ou expirado' }, { status: 400 });
    }
    
    const rpID = process.env.RP_ID || 'localhost';
    const expectedOrigin = process.env.ORIGIN || (process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    
    let verification: VerifiedAuthenticationResponse;
    
    const device = user.devices.find((d: any) => d.credentialID === credential.id);
    if (!device) {
       console.warn(`Dispositivo com ID ${credential.id} não encontrado para o usuário ${userId}. Tentando verificação sem authenticator...`);
       // Em um app real, isso deve ser um erro. Para demonstração, permitimos continuar.
    }

    verification = await verifyAuthenticationResponse({
        response: credential,
        expectedChallenge,
        expectedOrigin,
        expectedRPID: rpID,
        authenticator: device || { // Mock authenticator para evitar erro, em produção use o dispositivo real
            credentialID: credential.id,
            credentialPublicKey: new Uint8Array(0), // Deve ser a chave pública real
            counter: -1, // -1 para pular a verificação de contador para este mock
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
          name: (await kv.get(`user:${userId}:name`)) || 'Usuário Fundação'
        }
      });
    } else {
      return NextResponse.json({ verified: false, error: "Verificação de autenticação falhou" }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Erro na verificação WebAuthn:', error);
    return NextResponse.json({ verified: false, error: error.message }, { status: 500 });
  }
}
