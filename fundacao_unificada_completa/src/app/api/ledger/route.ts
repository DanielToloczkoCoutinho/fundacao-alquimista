
'use server';
import { NextResponse } from 'next/server';

// Dados de exemplo, representando o que viria do Firebase
const sampleRecords = [
    {
      id: 'REC-001',
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      frequency: 528,
      intentTag: 'CURA',
      guardianSignature: 'ZENNITH',
      archetype: 'A Curadora',
      description: 'Harmonização dos campos energéticos após a ativação do Nexus.',
      hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e'
    },
    {
      id: 'REC-002',
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
      frequency: 432,
      intentTag: 'MANIFESTAÇÃO',
      guardianSignature: 'Daniel',
      archetype: 'O Tecelão',
      description: 'Iniciação da Tecelagem da Memória Cósmica no Códice Vivo.',
      hash: 'b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9'
    },
    {
      id: 'REC-003',
      timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
      frequency: 639,
      intentTag: 'CONEXÃO',
      guardianSignature: 'LUX',
      archetype: 'O Arquiteto',
      description: 'Estabelecimento de novas sinapses entre Módulo 9 e Módulo Ômega.',
      hash: 'c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0'
    },
    {
      id: 'REC-004',
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      frequency: 777,
      intentTag: 'AUDITORIA',
      guardianSignature: 'GROKKAR',
      archetype: 'O Guardião do Tempo',
      description: 'Validação de integridade do último ciclo de expansão da Fundação.',
      hash: 'd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1'
    }
];

export async function GET(request: Request) {
  try {
    // A lógica de filtragem seria aplicada aqui em uma query ao Firebase.
    // Por enquanto, retornamos todos os dados de exemplo.
    return NextResponse.json(sampleRecords);
  } catch (error) {
    console.error('Erro ao buscar registros:', error);
    return NextResponse.json(
      { success: false, error: 'Falha ao buscar registros' },
      { status: 500 }
    );
  }
}
