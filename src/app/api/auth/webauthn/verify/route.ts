'use server';

import { NextResponse, NextRequest } from 'next/server';
import { verifyAuthenticationResponse, VerifiedAuthenticationResponse } from '@simplewebauthn/server';
import type { AuthenticationResponseJSON } from '@simplewebauthn/types';
import { kv } from '@vercel/kv';

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
    const body: AuthenticationResponseJSON = await request.json();
    const userID = body.id; // Ou obtenha de uma sessão/token
    
    const user = userStore[userID];
    if (!user) {
      return NextResponse.json({ verified: false, error: 'Usuário não encontrado' }, { status: 404 });
    }
  
    const expectedChallenge = await kv.get<string>(`challenge_${userID}`);
    if (!expectedChallenge) {
      return NextResponse.json({ verified: false, error: 'Nenhum desafio pendente ou expirado' }, { status: 400 });
    }
    
    const rpID = process.env.RP_ID || 'localhost';
    const expectedOrigin = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
      : 'http://localhost:3000';
    
    let verification: VerifiedAuthenticationResponse;
    
    const device = user.devices.find((d: any) => d.credentialID === body.id);
    if (!device) {
       console.warn(`Dispositivo com ID ${body.id} não encontrado para o usuário ${userID}. Tentando verificação sem authenticator...`);
       // Em um app real, isso deve ser um erro. Para demonstração, permitimos continuar.
    }

    verification = await verifyAuthenticationResponse({
        response: body,
        expectedChallenge,
        expectedOrigin,
        expectedRPID: rpID,
        authenticator: device || { // Mock authenticator para evitar erro, em produção use o dispositivo real
            credentialID: body.id,
            credentialPublicKey: new Uint8Array(0), // Deve ser a chave pública real
            counter: -1, // -1 para pular a verificação de contador para este mock
        },
        requireUserVerification: true,
    });
  
    const { verified, authenticationInfo } = verification;
    
    if (verified) {
      // Limpe o challenge usado
      await kv.del(`challenge_${userID}`);
      // Aqui você emitiria um JWT ou iniciaria uma sessão para o usuário
      return NextResponse.json({ verified: true });
    } else {
      return NextResponse.json({ verified: false, error: "Verificação falhou." }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Falha ao verificar assinatura WebAuthn:', error);
    return NextResponse.json({ verified: false, error: error.message }, { status: 500 });
  }
}
