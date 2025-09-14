'use server';
import { NextRequest, NextResponse } from 'next/server';
import { generateAuthenticationOptions, GenerateAuthenticationOptionsOpts } from '@simplewebauthn/server';

// Esta é uma simulação em memória. Em um aplicativo real, use um banco de dados.
const userStore: any = {}; 

export async function POST(request: NextRequest) {
  const { userID, userName } = await request.json();

  if (!userStore[userID]) {
    userStore[userID] = {
      id: userID,
      username: userName,
      devices: [],
      // Adicionar armazenamento para challenges
      currentChallenge: null,
    };
  }
  
  const rpID = process.env.RP_ID || 'localhost';

  const options: GenerateAuthenticationOptionsOpts = {
    rpID,
    userID,
    userVerification: 'required',
    timeout: 60000,
    allowCredentials: userStore[userID].devices.map((dev: any) => ({
      id: dev.credentialID,
      type: 'public-key',
      transports: dev.transports,
    })),
  };

  try {
    const opts = await generateAuthenticationOptions(options);

    // Guarde o challenge para verificação futura
    userStore[userID].currentChallenge = opts.challenge;

    return NextResponse.json(opts);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
