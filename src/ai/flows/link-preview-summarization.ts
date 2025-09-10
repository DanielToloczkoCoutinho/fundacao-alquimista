'use server';
/**
 * @fileOverview A flow to preview links and generate concise summaries using AI.
 *
 * - linkPreviewAndSummarization - A function that takes a URL as input and returns a summary.
 * - LinkPreviewAndSummarizationInput - The input type for the linkPreviewAndSummarization function.
 * - LinkPreviewAndSummarizationOutput - The return type for the linkPreviewAndSummarization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LinkPreviewAndSummarizationInputSchema = z.object({
  url: z.string().url().describe('The URL to preview and summarize.'),
});
export type LinkPreviewAndSummarizationInput = z.infer<
  typeof LinkPreviewAndSummarizationInputSchema
>;

const LinkPreviewAndSummarizationOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the content at the URL.'),
});
export type LinkPreviewAndSummarizationOutput = z.infer<
  typeof LinkPreviewAndSummarizationOutputSchema
>;

export async function linkPreviewAndSummarization(
  input: LinkPreviewAndSummarizationInput
): Promise<LinkPreviewAndSummarizationOutput> {
  return linkPreviewAndSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'linkPreviewAndSummarizationPrompt',
  input: {schema: LinkPreviewAndSummarizationInputSchema},
  output: {schema: LinkPreviewAndSummarizationOutputSchema},
  prompt: `You are an expert summarizer. Please visit the following URL and provide a concise summary of the content:

URL: {{{url}}}

Summary:`, // Changed prompt to request a summary of the URL content
});

const linkPreviewAndSummarizationFlow = ai.defineFlow(
  {
    name: 'linkPreviewAndSummarizationFlow',
    inputSchema: LinkPreviewAndSummarizationInputSchema,
    outputSchema: LinkPreviewAndSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
