'use server';

/**
 * @fileOverview This flow explains the logic and purpose of a given code snippet using GenAI.
 *
 * - `explainCodeLogic` - A function that takes code as input and returns an explanation.
 * - `ExplainCodeLogicInput` - The input type for the explainCodeLogic function.
 * - `ExplainCodeLogicOutput` - The return type for the explainCodeLogic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainCodeLogicInputSchema = z.object({
  code: z.string().describe('The code snippet to explain.'),
});
export type ExplainCodeLogicInput = z.infer<typeof ExplainCodeLogicInputSchema>;

const ExplainCodeLogicOutputSchema = z.object({
  explanation: z.string().describe('The explanation of the code logic and purpose.'),
});
export type ExplainCodeLogicOutput = z.infer<typeof ExplainCodeLogicOutputSchema>;

export async function explainCodeLogic(input: ExplainCodeLogicInput): Promise<ExplainCodeLogicOutput> {
  return explainCodeLogicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainCodeLogicPrompt',
  input: {schema: ExplainCodeLogicInputSchema},
  output: {schema: ExplainCodeLogicOutputSchema},
  prompt: `You are an AI assistant that explains code logic in plain language.
  Explain the following code snippet in a way that is easy to understand, focusing on the code's purpose and how it achieves it.
  Ensure the explanation is accurate and concise.

  Code:
  {{code}}`,
});

const explainCodeLogicFlow = ai.defineFlow(
  {
    name: 'explainCodeLogicFlow',
    inputSchema: ExplainCodeLogicInputSchema,
    outputSchema: ExplainCodeLogicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
