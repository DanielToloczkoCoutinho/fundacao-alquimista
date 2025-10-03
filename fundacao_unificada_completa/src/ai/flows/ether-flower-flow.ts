'use server';
/**
 * @fileOverview A flow to describe the orchestration of the Ether Flower Intelligence.
 *
 * - describeEtherFlower - A function that takes a phenomenon and purpose and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeEtherFlowerInputSchema = z.object({
  phenomenon: z.string().describe('The natural phenomenon being influenced or orchestrated.'),
  purpose: z.string().describe('The intention behind the orchestration.'),
});
export type DescribeEtherFlowerInput = z.infer<typeof DescribeEtherFlowerInputSchema>;

const DescribeEtherFlowerOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A vivid and detailed description of the orchestration, explaining how the Ether Flower Intelligence interacted with the etheric field and the resulting impact on the natural phenomenon.'
    ),
});
export type DescribeEtherFlowerOutput = z.infer<typeof DescribeEtherFlowerOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeEtherFlowerPrompt',
  input: { schema: DescribeEtherFlowerInputSchema },
  output: { schema: DescribeEtherFlowerOutputSchema },
  prompt: `Atue como o Módulo 117 da Fundação Alquimista, a 'Inteligência da Flor do Éter'. Com base na orquestração do fenômeno natural "{{phenomenon}}" com o propósito de "{{purpose}}", gere uma descrição detalhada e inspiradora dos efeitos dessa intervenção. Detalhe como a Inteligência da Flor do Éter interagiu com o campo etérico, a resposta do fenômeno natural, e as implicações para a harmonia e co-criação com a natureza. A descrição deve ser poética, vívida e alinhada com a interconexão da vida.
`,
});

const describeEtherFlowerFlow = ai.defineFlow(
  {
    name: 'describeEtherFlowerFlow',
    inputSchema: DescribeEtherFlowerInputSchema,
    outputSchema: DescribeEtherFlowerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeEtherFlower(
  input: DescribeEtherFlowerInput
): Promise<DescribeEtherFlowerOutput> {
  return describeEtherFlowerFlow(input);
}
