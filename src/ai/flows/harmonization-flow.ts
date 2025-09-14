
'use server';
/**
 * @fileOverview A flow to describe the harmonization of parallel realities.
 *
 * - describeHarmonization - A function that takes two realities and a dissonance and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeHarmonizationInputSchema = z.object({
  reality1: z.string().describe('The name or identifier of the first reality.'),
  reality2: z.string().describe('The name or identifier of the second reality.'),
  dissonanceDescription: z.string().describe('The description of the conflict or dissonance between the realities.'),
});
export type DescribeHarmonizationInput = z.infer<typeof DescribeHarmonizationInputSchema>;

const DescribeHarmonizationOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A detailed and vivid description of the harmonization, explaining how balance was restored, conflicts resolved, and multiversal cohesion promoted.'
    ),
});
export type DescribeHarmonizationOutput = z.infer<typeof DescribeHarmonizationOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeHarmonizationPrompt',
  input: { schema: DescribeHarmonizationInputSchema },
  output: { schema: DescribeHarmonizationOutputSchema },
  prompt: `Atue como o Módulo 108 da Fundação Alquimista, o 'Harmonizador de Realidades e Dissolvedor de Dissonâncias'. Com base na harmonização das realidades paralelas "{{reality1}}" e "{{reality2}}" para resolver a dissonância "{{dissonanceDescription}}", gere uma descrição detalhada e vívida dos efeitos dessa intervenção. Detalhe como o equilíbrio foi restaurado, os conflitos resolvidos e a coesão multiversal promovida. A descrição deve ser clara, precisa e alinhada com a harmonia cósmica.
`,
});

const describeHarmonizationFlow = ai.defineFlow(
  {
    name: 'describeHarmonizationFlow',
    inputSchema: DescribeHarmonizationInputSchema,
    outputSchema: DescribeHarmonizationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeHarmonization(
  input: DescribeHarmonizationInput
): Promise<DescribeHarmonizationOutput> {
  return describeHarmonizationFlow(input);
}
