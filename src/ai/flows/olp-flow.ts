'use server';
/**
 * @fileOverview A flow to describe the orchestration of the Primordial Light Vibrational Order (OLP).
 *
 * - describeOlP - A function that takes a light source and purpose and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeOlpInputSchema = z.object({
  lightSource: z.string().describe('The primordial light source being organized.'),
  purpose: z.string().describe('The intention behind the organization.'),
});
export type DescribeOlpInput = z.infer<typeof DescribeOlpInputSchema>;

const DescribeOlpOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A vivid and detailed description of the orchestration, explaining how the Primordial Light Vibrational Order interacted with the light field and the resulting impact on reality.'
    ),
});
export type DescribeOlpOutput = z.infer<typeof DescribeOlpOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeOlppPrompt',
  input: { schema: DescribeOlpInputSchema },
  output: { schema: DescribeOlpOutputSchema },
  prompt: `Atue como o Módulo 118 da Fundação Alquimista, o 'Guardião da Chama Primordial'. Com base na organização da luz primordial da fonte "{{lightSource}}" com o propósito de "{{purpose}}", gere uma descrição detalhada e inspiradora dos efeitos dessa orquestração. Detalhe como a Ordem Vibracional da Luz Primordial interagiu com o campo de luz, as implicações para a manifestação da realidade e a sustentação da existência. A descrição deve ser poética, vívida e alinhada com a pureza e a coerência da Criação.
`,
});

const describeOlpFlow = ai.defineFlow(
  {
    name: 'describeOlpFlow',
    inputSchema: DescribeOlpInputSchema,
    outputSchema: DescribeOlpOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeOlP(
  input: DescribeOlpInput
): Promise<DescribeOlpOutput> {
  return describeOlpFlow(input);
}
