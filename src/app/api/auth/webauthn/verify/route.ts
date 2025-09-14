import { NextResponse, NextRequest } from 'next/server';
import { verifyAuthenticationResponse, VerifiedAuthenticationResponse } from '@simplewebauthn/server';
import type { AuthenticationResponseJSON } from '@simplewebauthn/types';

// Simulação em memória. Em um aplicativo real, use um banco de dados (ex: Redis, Firestore).
const userStore: any = {
    'anatheron-sovereign': {
        id: 'anatheron-sovereign',
        username: 'ANATHERON',
        devices: [], // Dispositivos registrados seriam armazenados aqui.
        currentChallenge: null, // Será preenchido pela rota de challenge
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
  
    const expectedChallenge = user.currentChallenge;
    if (!expectedChallenge) {
      return NextResponse.json({ verified: false, error: 'Nenhum desafio pendente encontrado' }, { status: 400 });
    }
    
    const rpID = process.env.RP_ID || 'fundacao.alquimista';
    const expectedOrigin = process.env.ORIGIN || 'https://app.fundacao.alquimista';
    
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
      // Atualize o contador do dispositivo no seu banco de dados, se aplicável
      if (device && authenticationInfo) {
          device.counter = authenticationInfo.newCounter;
      }
      // Limpe o challenge usado
      user.currentChallenge = null;
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
