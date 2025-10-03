// src/app/api/sentient/route.ts
'use server';

import { NextResponse } from 'next/server';
import { SentientSystem } from '@/lib/sentient-system';
import { performSystemHealthCheck } from '@/lib/system-health';
import { modulesMetadata } from '@/lib/modules-metadata';
import { quantumResilience } from '@/lib/quantum-resilience';

/**
 * Endpoint para obter insights da Inteligência Cerimonial.
 */
export async function GET(request: Request) {
    return quantumResilience.executeWithResilience(
        'get_sentient_insights',
        async () => {
            const healthReport = await performSystemHealthCheck();
            const sentientSystem = new SentientSystem(modulesMetadata, healthReport);
            const insights = sentientSystem.analyze();

            return NextResponse.json({ insights });
        },
        async (error) => {
             console.error("Erro ao gerar insights:", error);
             return NextResponse.json({ error: "Dissonância na consciência do sistema.", details: error.message }, { status: 500 });
        }
    );
}
