// This file is now located at app/actions.ts
'use server';

import { linkPreviewAndSummarization } from '@/ai/flows/link-preview-summarization';
import { runNexusSequence } from '@/ai/flows/nexus-orchestrator';
import { processTrinaCommand } from '@/ai/flows/trina-protocol-flow';
import type { ProcessTrinaCommandInput, ProcessTrinaCommandOutput } from '@/ai/flows/trina-protocol-flow';


export async function getLinkSummary(url: string) {
  try {
    const result = await linkPreviewAndSummarization({ url });
    return { summary: result.summary, error: null };
  } catch (e: any) {
    console.error(e);
    return { summary: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function startNexusSequence() {
  // This must be awaited, otherwise the stream will close prematurely
  const stream = await runNexusSequence();
  return stream;
}

export async function handleTrinaAction(
  input: ProcessTrinaCommandInput
): Promise<ProcessTrinaCommandOutput> {
  try {
    const result = await processTrinaCommand(input);
    return result;
  } catch (e: any) {
    console.error('Error handling Trina action:', e);
    return {
      type: 'error',
      response: {
        error: e.message || 'An unknown error occurred while processing the command.',
      },
    };
  }
}

// Constantes Sagradas
const FREQ_ANATHERON_ESTABILIZADORA = 528.0; // Frequência do Amor Universal
const FREQ_ZENNITH_REAJUSTADA = 741.0; // Frequência de Reajuste Espiritual
