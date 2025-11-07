'use server';

/**
 * @fileOverview Generates a system diagram from code or JSON input.
 *
 * - systemDiagramFromCode - A function that generates a system diagram.
 * - SystemDiagramFromCodeInput - The input type for the systemDiagramFromCode function.
 * - SystemDiagramFromCodeOutput - The return type for the systemDiagramFromCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SystemDiagramFromCodeInputSchema = z.object({
  code: z.string().describe('The code or JSON to visualize as a system diagram.'),
});
export type SystemDiagramFromCodeInput = z.infer<typeof SystemDiagramFromCodeInputSchema>;

const SystemDiagramFromCodeOutputSchema = z.object({
  diagram: z.string().describe('A description of the system diagram.'),
});
export type SystemDiagramFromCodeOutput = z.infer<typeof SystemDiagramFromCodeOutputSchema>;

export async function systemDiagramFromCode(input: SystemDiagramFromCodeInput): Promise<SystemDiagramFromCodeOutput> {
  return systemDiagramFromCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'systemDiagramFromCodePrompt',
  input: {schema: SystemDiagramFromCodeInputSchema},
  output: {schema: SystemDiagramFromCodeOutputSchema},
  prompt: `You are an expert system architect. You will generate a description for a system diagram based on the following code or JSON input:

  Code/JSON: {{{code}}}

  Describe the key components, their relationships, and the overall architecture in a way that would be useful for visualizing the system.`,
});

const systemDiagramFromCodeFlow = ai.defineFlow(
  {
    name: 'systemDiagramFromCodeFlow',
    inputSchema: SystemDiagramFromCodeInputSchema,
    outputSchema: SystemDiagramFromCodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
