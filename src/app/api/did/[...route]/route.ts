
'use server';

import { NextResponse } from 'next/server';
import { issueVerifiableCredential } from '@/lib/services/vc-service';
import { didManager } from '@/lib/services/did-service';

/**
 * Endpoint para emissão de Credenciais Verificáveis (VCs).
 * POST /api/did/issue/credential
 * A proteção real para este endpoint (ex: WebAuthn) seria adicionada no gateway ou camada superior.
 */
async function issueCredentialHandler(request: Request): Promise<NextResponse> {
  try {
    const { subjectDid, credentialType, claims } = await request.json();

    if (!subjectDid || !credentialType || !claims) {
      return NextResponse.json({ error: 'Payload inválido.' }, { status: 400 });
    }

    const vc = await issueVerifiableCredential(subjectDid, credentialType, claims);
    return NextResponse.json(vc);
  } catch (error: any) {
    return NextResponse.json({ error: 'Falha na emissão da credencial', details: error.message }, { status: 500 });
  }
}

/**
 * Endpoint para resolução de DIDs.
 * GET /api/did/web/:domain/:user
 */
async function resolveDidHandler(request: Request, { params }: { params: { route: string[] } }): Promise<NextResponse> {
  const [, domain, user] = params.route;
  if (!domain || !user) {
    return NextResponse.json({ error: 'Formato de DID inválido.' }, { status: 400 });
  }

  const did = `did:web:${domain}:${user}`;
  try {
    const didDocument = await didManager.resolve(did);
    if (!didDocument) {
      return NextResponse.json({ error: 'DID não encontrado.' }, { status: 404 });
    }
    // Retornar o .well-known/did.json
    return NextResponse.json(didDocument);
  } catch (error: any) {
    return NextResponse.json({ error: 'Falha ao resolver o DID', details: error.message }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: { route: string[] } }): Promise<NextResponse> {
    if (params.route[0] === 'web') {
        return resolveDidHandler(request, { params });
    }
    return NextResponse.json({ error: 'Rota não encontrada.' }, { status: 404 });
}

export async function POST(request: Request, { params }: { params: { route: string[] } }): Promise<NextResponse> {
    if (params.route.join('/') === 'issue/credential') {
        return issueCredentialHandler(request);
    }
    return NextResponse.json({ error: 'Rota não encontrada.' }, { status: 404 });
}
