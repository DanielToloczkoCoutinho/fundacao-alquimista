'use server';

import { linkPreviewAndSummarization } from '@/ai/flows/link-preview-summarization';
import { startNexusSequence as runNexusSequence } from '@/ai/flows/nexus-orchestrator';
import { describeMorphicField as runDescribeMorphicField } from '@/ai/flows/morphic-field-flow';
import { describeConnectionExperience as runDescribeConnectionExperience } from '@/ai/flows/source-connection-flow';


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

export async function describeMorphicField(blueprint: string) {
  try {
    const result = await runDescribeMorphicField({ blueprint });
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}

export async function describeConnectionExperience(intention: string) {
  try {
    const result = await runDescribeConnectionExperience({ intention });
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error(e);
    return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}
