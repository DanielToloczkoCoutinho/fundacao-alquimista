'use server';
/**
 * @fileOverview A flow to describe the activation of a quantum interdimensional portal.
 *
 * - describePortalActivation - A function that takes portal details and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribePortalActivationInputSchema = z.object({
  portalName: z.string().describe('The name or designation of the portal.'),
  destination: z.string().describe('The target dimension or reality.'),
  purpose: z.string().describe('The intention or purpose for opening the portal.'),
});
export type DescribePortalActivationInput = z.infer<typeof DescribePortalActivationInputSchema>;

const DescribePortalActivationOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A vivid and detailed description of the portal activation, its visual characteristics, energetic signature, and the implications of its opening.'
    ),
});
export type DescribePortalActivationOutput = z.infer<typeof DescribePortalActivationOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describePortalActivationPrompt',
  input: { schema: DescribePortalActivationInputSchema },
  output: { schema: DescribePortalActivationOutputSchema },
  prompt: `Atue como o Módulo 116 da Fundação Alquimista, o 'Abridor de Caminhos do Multiverso'. Com base na ativação do portal quântico interdimensional "{{portalName}}", destinado a "{{destination}}" com o propósito de "{{purpose}}", gere uma descrição detalhada e inspiradora dos efeitos dessa ativação. Detalhe as características do portal, a segurança da travessia, as implicações para a exploração multidimensional e a harmonia cósmica. A descrição deve ser profunda, vívida e alinhada com a estabilidade e a ética da Fundação.
`,
});

const describePortalActivationFlow = ai.defineFlow(
  {
    name: 'describePortalActivationFlow',
    inputSchema: DescribePortalActivationInputSchema,
    outputSchema: DescribePortalActivationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describePortalActivation(
  input: DescribePortalActivationInput
): Promise<DescribePortalActivationOutput> {
  return describePortalActivationFlow(input);
}
