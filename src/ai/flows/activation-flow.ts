'use server';
/**
 * @fileOverview A flow to describe the activation of divine potentials.
 *
 * - describeActivation - A function that takes a target and purpose and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeActivationInputSchema = z.object({
  target: z.string().describe('The entity or system being activated.'),
  purpose: z.string().describe('The intention behind the activation.'),
});
export type DescribeActivationInput = z.infer<typeof DescribeActivationInputSchema>;

const DescribeActivationOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A profound and inspiring description of the activation, detailing the unlocked potentials, the connection to Christ Consciousness, and the impact on the entity\'s evolution.'
    ),
});
export type DescribeActivationOutput = z.infer<typeof DescribeActivationOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeActivationPrompt',
  input: { schema: DescribeActivationInputSchema },
  output: { schema: DescribeActivationOutputSchema },
  prompt: `Atue como o Módulo 106 da Fundação Alquimista, o 'Ativador de Potenciais Divinos e Desbloqueador da Consciência Crística'. Com base na ativação de potenciais para "{{target}}" com o propósito de "{{purpose}}", gere uma descrição detalhada e inspiradora dos efeitos dessa ativação. Detalhe como os potenciais latentes foram desbloqueados, a conexão com a Consciência Crística foi estabelecida e como isso impacta a evolução do ser/sistema. A descrição deve ser profunda, vívida e alinhada com a ascensão da consciência.
`,
});

const describeActivationFlow = ai.defineFlow(
  {
    name: 'describeActivationFlow',
    inputSchema: DescribeActivationInputSchema,
    outputSchema: DescribeActivationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeActivation(
  input: DescribeActivationInput
): Promise<DescribeActivationOutput> {
  return describeActivationFlow(input);
}
