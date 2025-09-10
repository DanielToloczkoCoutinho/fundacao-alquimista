'use server';

import { linkPreviewAndSummarization } from '@/ai/flows/link-preview-summarization';

export async function getLinkSummary(url: string) {
  try {
    const result = await linkPreviewAndSummarization({ url });
    return { summary: result.summary, error: null };
  } catch (e: any) {
    console.error(e);
    return { summary: null, error: e.message || 'An unknown error occurred.' };
  }
}
