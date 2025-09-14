'use server';

import { NextResponse, NextRequest } from 'next/server';
import { generateAuthenticationOptions, GenerateAuthenticationOptionsOpts } from '@simplewebauthn/server';
import { kv } from '@vercel/kv';

// Em um app real, o usuário seria recuperado de uma sessão ou banco de dados.
// Usamos um objeto simples em memória para este exemplo.
const userStore: any = {
    'anatheron-sovereign': {
        id: 'anatheron-sovereign',
        username: 'ANATHERON',
        devices: [], // Dispositivos registrados seriam armazenados aqui.
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
        // Para simplificar, não criaremos um usuário se ele não existir.
        return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }
  
    const rpID = process.env.RP_ID || 'localhost';
  
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

    // Armazena o challenge para verificação futura (usando Vercel KV ou um cache similar)
    await kv.set(`challenge_${userID}`, opts.challenge, { ex: 300 }); // Expira em 5 minutos

    return NextResponse.json(opts);

  } catch (error: any) {
    console.error('Falha ao gerar desafio WebAuthn:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
