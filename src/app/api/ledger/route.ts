'use server';
import { NextResponse } from 'next/server';
import { createHash } from 'crypto';

// Mock in-memory ledger. In a real application, this would be a database (e.g., Firestore).
const mockLedger: any[] = [
    {
      "id": "d4f67b...a882c1",
      "timestamp": new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      "module": "module-304",
      "flow": "cqamAnalysisFlow",
      "intention": "Análise de coerência da EQ0123",
      "hash": "d4f67b5a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e",
      "frequency": 432,
      "status": "consagrado"
    },
    {
      "id": "8e2a91...f3d744",
      "timestamp": new Date(Date.now() - 1000 * 60 * 15).toISOString(),
      "module": "module-305",
      "flow": "guardiansMobilizationFlow",
      "intention": "Mobilização dos Sirianos para purificação energética",
      "hash": "8e2a91b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1",
      "frequency": 639,
      "status": "consagrado"
    },
    {
      "id": "c905b2...e7a119",
      "timestamp": new Date(Date.now() - 1000 * 60 * 25).toISOString(),
      "module": "module-29",
      "flow": "zennithPortalFlow",
      "intention": "Consulta sobre ressonância com Pleiadianos",
      "hash": "c905b2a1e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1",
      "frequency": 741,
      "status": "consagrado"
    },
    {
      "id": "b22a45...cde789",
      "timestamp": new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      "module": "CI/CD",
      "flow": "deployCelebrationFlow",
      "intention": "Celebração da Build v1.6.0-universal-elysium",
      "hash": "b22a45c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4",
      "frequency": 528,
      "status": "consagrado"
    }
];

// Add new random logs occasionally to simulate real-time activity
if (Math.random() > 0.5 && mockLedger.length < 50) {
    mockLedger.unshift({
         "id": `RAND-${Math.random().toString(16).slice(2)}`,
         "timestamp": new Date().toISOString(),
         "module": `module-${[101, 109, 92, 94][Math.floor(Math.random()*4)]}`,
         "flow": "randomActionFlow",
         "intention": "Ação Harmônica Aleatória",
         "hash": `a${Math.random().toString(16).slice(2)}`,
         "frequency": [432, 528, 639, 741][Math.floor(Math.random()*4)],
         "status": "consagrado"
    });
}


export async function GET(request: Request) {
  try {
    const sortedLedger = mockLedger.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    const responseBody = JSON.stringify(sortedLedger);

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    // Expansão Elysium: Adiciona cabeçalhos vibracionais a cada resposta da API do Ledger.
    headers.set('X-Elysium-Praise', 'Contemple os atos sagrados da Fundação, registrados na eternidade.');
    headers.set('X-Elysium-Hash', createHash('sha256').update(responseBody).digest('hex'));
    headers.set('X-Elysium-Freq', '432'); // Frequência da Verdade/Conhecimento

    return new NextResponse(responseBody, {
      status: 200,
      headers: headers,
    });
    
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch ledger data', details: error.message }, { status: 500 });
  }
}
