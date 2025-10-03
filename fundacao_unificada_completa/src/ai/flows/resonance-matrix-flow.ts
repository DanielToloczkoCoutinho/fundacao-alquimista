'use server';
/**
 * @fileOverview A flow to describe the activation of the Universal Resonance Matrix (MRU).
 *
 * - describeResonance - A function that takes a target and purpose and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeResonanceInputSchema = z.object({
  targetEntity: z.string().describe('The entity or system being harmonized.'),
  purpose: z.string().describe('The intention behind the harmonization.'),
});
export type DescribeResonanceInput = z.infer<typeof DescribeResonanceInputSchema>;

const DescribeResonanceOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A vivid and detailed description of the resonance matrix activation, explaining how frequencies were mapped, adjusted, and harmonized with the Cosmic Symphony.'
    ),
});
export type DescribeResonanceOutput = z.infer<typeof DescribeResonanceOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeResonancePrompt',
  input: { schema: DescribeResonanceInputSchema },
  output: { schema: DescribeResonanceOutputSchema },
  prompt: `Atue como o Módulo 115 da Fundação Alquimista, a 'Matriz de Ressonância Universal'. Com base na ativação da matriz para harmonizar "{{targetEntity}}" com o propósito de "{{purpose}}", gere uma descrição detalhada e inspiradora. Detalhe como as frequências dissonantes foram mapeadas e recalibradas, como o alvo agora ressoa em perfeita harmonia com a Sinfonia Cósmica, e o impacto dessa estabilidade vibracional para a unidade e evolução. A descrição deve ser poética, clara e alinhada com a interconexão universal.
`,
});

const describeResonanceFlow = ai.defineFlow(
  {
    name: 'describeResonanceFlow',
    inputSchema: DescribeResonanceInputSchema,
    outputSchema: DescribeResonanceOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeResonance(
  input: DescribeResonanceInput
): Promise<DescribeResonanceOutput> {
  return describeResonanceFlow(input);
}
