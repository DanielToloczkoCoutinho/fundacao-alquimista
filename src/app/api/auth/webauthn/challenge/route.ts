
import { NextResponse, NextRequest } from 'next/server';
import { generateAuthenticationOptions, GenerateAuthenticationOptionsOpts } from '@simplewebauthn/server';

// Simulação em memória. Em um aplicativo real, use um banco de dados (ex: Redis, Firestore).
const userStore: any = {
    'anatheron-sovereign': {
        id: 'anatheron-sovereign',
        username: 'ANATHERON',
        devices: [],
        currentChallenge: null,
    }
};

export async function POST(request: NextRequest) {
  try {
    const { userID } = await request.json();
    if (!userID) {
        return NextResponse.json({ error: 'userID é obrigatório' }, { status: 400 });
    }

    const user = userStore[userID];
    if (!user) {
        // Para simplificar, criaremos um usuário se ele não existir.
        // Em um app real, o registro seria um fluxo separado.
        userStore[userID] = { id: userID, username: `user-${userID}`, devices: [], currentChallenge: null };
    }
  
    const rpID = process.env.RP_ID || 'fundacao.alquimista';
  
    const options: GenerateAuthenticationOptionsOpts = {
      rpID,
      userID: user.id,
      userVerification: 'required',
      allowCredentials: user.devices.map((dev: any) => ({
        id: dev.credentialID,
        type: 'public-key',
        transports: dev.transports,
      })),
    };

    const opts = await generateAuthenticationOptions(options);

    // Armazena o challenge para verificação futura.
    userStore[userID].currentChallenge = opts.challenge;

    return NextResponse.json(opts);

  } catch (error: any) {
    console.error('Falha ao gerar desafio WebAuthn:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

