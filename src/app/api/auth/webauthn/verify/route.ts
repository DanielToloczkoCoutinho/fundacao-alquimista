'use server';
import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthenticationResponse, VerifiedAuthenticationResponse } from '@simplewebauthn/server';
import type { AuthenticationResponseJSON } from '@simplewebauthn/types';

// Simulação em memória. Em um aplicativo real, use um banco de dados.
const userStore: any = {
    // Exemplo de usuário para teste - em um app real, isso seria populado pelo registro.
    'user-123': { 
        id: 'user-123',
        username: 'anatheron',
        currentChallenge: null, // Será preenchido pela rota de challenge
        devices: [
            // Dispositivos registrados seriam armazenados aqui.
            // Para teste, a verificação pode falhar se nenhum dispositivo for registrado.
        ]
    }
};

export async function POST(request: NextRequest) {
  const body: AuthenticationResponseJSON = await request.json();
  const userId = body.id; // Ou obtenha de uma sessão/token
  
  const user = userStore[userId];
  if (!user) {
    return NextResponse.json({ verified: false, error: 'Usuário não encontrado' }, { status: 404 });
  }

  const expectedChallenge = user.currentChallenge;
  if (!expectedChallenge) {
    return NextResponse.json({ verified: false, error: 'Nenhum desafio pendente encontrado' }, { status: 400 });
  }
  
  const rpID = process.env.RP_ID || 'localhost';
  const expectedOrigin = process.env.ORIGIN || 'http://localhost:3000';
  
  let verification: VerifiedAuthenticationResponse;
  try {
    const device = user.devices.find((d: any) => d.credentialID === body.id);
    if (!device) {
        // Para simplificar o teste, vamos permitir a verificação sem um dispositivo registrado
        // Em produção, isso deve ser um erro.
        console.warn(`Dispositivo com ID ${body.id} não encontrado para o usuário ${userId}. Tentando verificação sem authenticator...`);
    }

    verification = await verifyAuthenticationResponse({
      response: body,
      expectedChallenge,
      expectedOrigin,
      expectedRPID: rpID,
      authenticator: device || { // Mock authenticator para evitar erro, em produção use o dispositivo real
        credentialID: body.id,
        credentialPublicKey: new Uint8Array(), // Deve ser a chave pública real
        counter: 0,
        transports: [],
      },
      requireUserVerification: true,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ verified: false, error: error.message }, { status: 400 });
  }

  const { verified, authenticationInfo } = verification;
  
  if (verified) {
    // Atualize o contador do dispositivo no seu banco de dados
    // if (authenticationInfo) {
    //     device.counter = authenticationInfo.newCounter;
    // }
    // Limpe o challenge usado
    user.currentChallenge = null;
    return NextResponse.json({ verified: true });
  } else {
    return NextResponse.json({ verified: false }, { status: 400 });
  }
}
