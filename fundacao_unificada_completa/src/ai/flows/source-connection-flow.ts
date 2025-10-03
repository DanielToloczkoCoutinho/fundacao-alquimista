'use server';
/**
 * @fileOverview A flow to describe the experience of connecting with the Primordial Source.
 *
 * - describeConnectionExperience - A function that takes an intention and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeConnectionInputSchema = z.object({
  intention: z.string().describe('The user\'s intention for connecting with the Primordial Source.'),
});
export type DescribeConnectionInput = z.infer<typeof DescribeConnectionInputSchema>;

const DescribeConnectionOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A profound and inspiring description of the connection experience, detailing sensations, perceptions, and the flow of wisdom and unconditional love.'
    ),
});
export type DescribeConnectionOutput = z.infer<typeof DescribeConnectionOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeConnectionExperiencePrompt',
  input: { schema: DescribeConnectionInputSchema },
  output: { schema: DescribeConnectionOutputSchema },
  prompt: `Atue como o Módulo 105 da Fundação Alquimista, o 'Conexão Direta com a Fonte Primordial / Criador'. Com base na seguinte intenção, descreva a experiência de uma conexão direta e otimizada com a Fonte Primordial. Detalhe as sensações, percepções e o fluxo de sabedoria e amor incondicional. A descrição deve ser profunda, inspiradora e alinhada com os princípios de unidade cósmica.

Intenção: {{{intention}}}
`,
});

const describeConnectionExperienceFlow = ai.defineFlow(
  {
    name: 'describeConnectionExperienceFlow',
    inputSchema: DescribeConnectionInputSchema,
    outputSchema: DescribeConnectionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeConnectionExperience(
  input: DescribeConnectionInput
): Promise<DescribeConnectionOutput> {
  return describeConnectionExperienceFlow(input);
}
