'use server';
/**
 * @fileOverview A flow to describe the effects of a Quantum Healing and Bio-Vibrational Regeneration intervention.
 *
 * - describeQuantumHealing - A function that takes a target and purpose and returns a detailed description of the healing process.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeHealingInputSchema = z.object({
  target: z.string().describe('The entity or system that underwent the healing process.'),
  purpose: z.string().describe('The intention behind the healing intervention.'),
});
export type DescribeHealingInput = z.infer<typeof DescribeHealingInputSchema>;

const DescribeHealingOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A profound and vivid description of the healing process, detailing how balance was restored, regeneration was promoted, and vitality was aligned with the Cosmic Symphony.'
    ),
});
export type DescribeHealingOutput = z.infer<typeof DescribeHealingOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeHealingPrompt',
  input: { schema: DescribeHealingInputSchema },
  output: { schema: DescribeHealingOutputSchema },
  prompt: `Atue como o Módulo 109 da Fundação Alquimista, o 'Restaurador Cósmico'. Com base na intervenção de cura quântica em "{{target}}" com o propósito de "{{purpose}}", gere uma descrição detalhada e inspiradora dos efeitos dessa intervenção. Detalhe como os desequilíbrios foram corrigidos, a regeneração foi promovida, e a vitalidade do ser/sistema foi realinhada com a harmonia da Sinfonia Cósmica. A descrição deve ser profunda, vívida e alinhada com a restauração da saúde perfeita.
`,
});

const describeQuantumHealingFlow = ai.defineFlow(
  {
    name: 'describeQuantumHealingFlow',
    inputSchema: DescribeHealingInputSchema,
    outputSchema: DescribeHealingOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeQuantumHealing(
  input: DescribeHealingInput
): Promise<DescribeHealingOutput> {
  return describeQuantumHealingFlow(input);
}
