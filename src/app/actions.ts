// This file is now located at src/app/actions.ts
'use server';

import { linkPreviewAndSummarization } from '@/ai/flows/link-preview-summarization';
import { startNexusSequence as runNexusSequence } from '@/ai/flows/nexus-orchestrator';
import { processTrinaCommand } from '@/ai/flows/trina-protocol-flow';
import type { ProcessTrinaCommandInput, ProcessTrinaCommandOutput } from '@/ai/flows/trina-protocol-flow';
import { runStellarSync as performStellarSync } from '@/lib/stellar-sync';
import { executarCicloOperacionalIAM as runIAMCycle } from '@/ai/flows/iam-flow';
import type { CicloOperacionalIAMInput } from '@/ai/flows/iam-flow';


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

export async function runStellarSync() {
    const result = await performStellarSync();
    return result;
}


export async function executarCicloOperacionalIAM(input: CicloOperacionalIAMInput): Promise<any> {
    try {
        const result = await runIAMCycle(input);
        return result;
    } catch (e: any) {
        console.error('Error executing IAM cycle:', e);
        return { status: 'FALHA', detalhes: { error: e.message || 'An unknown error occurred.' } };
    }
}
