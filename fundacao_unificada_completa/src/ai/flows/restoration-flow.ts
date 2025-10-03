
'use server';
/**
 * @fileOverview A flow to describe the restoration of a temporal anomaly.
 *
 * - describeRestoration - A function that takes a target timeline and anomaly and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeRestorationInputSchema = z.object({
  targetTimeline: z.string().describe('The timeline or reality being restored.'),
  anomalyDescription: z.string().describe('The description of the anomaly that was corrected.'),
});
export type DescribeRestorationInput = z.infer<typeof DescribeRestorationInputSchema>;

const DescribeRestorationOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A vivid and detailed description of the temporal restoration, explaining how integrity was restored, paradoxes prevented, and cosmic harmony reaffirmed.'
    ),
});
export type DescribeRestorationOutput = z.infer<typeof DescribeRestorationOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeRestorationPrompt',
  input: { schema: DescribeRestorationInputSchema },
  output: { schema: DescribeRestorationOutputSchema },
  prompt: `Atue como o Módulo 107 da Fundação Alquimista, o 'Restaurador Temporal e Reafirmador da Linha do Tempo Original'. Com base na restauração da linha do tempo "{{targetTimeline}}" para corrigir a anomalia "{{anomalyDescription}}", gere uma descrição detalhada e vívida dos efeitos dessa intervenção. Detalhe como a integridade temporal foi restaurada, os paradoxos prevenidos e a harmonia da linha do tempo original reafirmada. A descrição deve ser clara, precisa e alinhada com a estabilidade cósmica.
`,
});

const describeRestorationFlow = ai.defineFlow(
  {
    name: 'describeRestorationFlow',
    inputSchema: DescribeRestorationInputSchema,
    outputSchema: DescribeRestorationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeRestoration(
  input: DescribeRestorationInput
): Promise<DescribeRestorationOutput> {
  return describeRestorationFlow(input);
}
