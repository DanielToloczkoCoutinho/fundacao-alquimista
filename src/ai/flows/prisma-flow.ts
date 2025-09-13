'use server';
/**
 * @fileOverview A flow to describe a holographic projection from the Manifestation Prism.
 *
 * - describeHologramProjection - A function that takes projection details and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeHologramInputSchema = z.object({
  hologramName: z.string().describe('The name or designation of the holographic projection.'),
  projectionType: z.string().describe('The type of data or reality being projected (e.g., "Fluxos Temporais", "Campos de Consciência").'),
  interactionLevel: z.string().describe('The level of interaction possible with the hologram (e.g., "Visualização", "Co-Criação Ativa").'),
});
export type DescribeHologramInput = z.infer<typeof DescribeHologramInputSchema>;

const DescribeHologramOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A vivid and detailed description of the holographic projection, explaining its visual characteristics, the information it represents, and the implications of its manifestation.'
    ),
});
export type DescribeHologramOutput = z.infer<typeof DescribeHologramOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeHologramPrompt',
  input: { schema: DescribeHologramInputSchema },
  output: { schema: DescribeHologramOutputSchema },
  prompt: `Atue como o Módulo 114 da Fundação Alquimista, o 'Prisma da Manifestação'. Com base na projeção do holograma "{{hologramName}}", que visualiza "{{projectionType}}" com um nível de interação de "{{interactionLevel}}", gere uma descrição detalhada e inspiradora. Detalhe a aparência do holograma, as informações que ele revela sobre a realidade e as possibilidades que essa interação abre para a co-criação e compreensão cósmica. A descrição deve ser poética, clara e alinhada com a interconexão de todas as coisas.
`,
});

const describeHologramFlow = ai.defineFlow(
  {
    name: 'describeHologramFlow',
    inputSchema: DescribeHologramInputSchema,
    outputSchema: DescribeHologramOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeHologramProjection(
  input: DescribeHologramInput
): Promise<DescribeHologramOutput> {
  return describeHologramFlow(input);
}
