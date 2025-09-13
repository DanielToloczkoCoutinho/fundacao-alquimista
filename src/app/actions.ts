'use server';

import { linkPreviewAndSummarization } from '@/ai/flows/link-preview-summarization';
import { startNexusSequence as runNexusSequence } from '@/ai/flows/nexus-orchestrator';

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
