
'use server';
/**
 * @fileOverview A flow to describe a space-time engineering event.
 *
 * - describeSpaceTimeEngineering - A function that takes travel details and returns a description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeSpaceTimeInputSchema = z.object({
  type: z.string().describe('The type of space-time travel or access.'),
  destination: z.string().describe('The target destination.'),
  duration: z.string().describe('The desired duration or impact of the travel.'),
});
export type DescribeSpaceTimeInput = z.infer<typeof DescribeSpaceTimeInputSchema>;

const DescribeSpaceTimeOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A detailed and vivid description of the space-time engineering event, including the visual effects, impact on the cosmic matrix, and energetic signature.'
    ),
});
export type DescribeSpaceTimeOutput = z.infer<typeof DescribeSpaceTimeOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeSpaceTimeEngineeringPrompt',
  input: { schema: DescribeSpaceTimeInputSchema },
  output: { schema: DescribeSpaceTimeOutputSchema },
  prompt: `Atue como o Módulo 104 da Fundação Alquimista, o 'Engenheiro do Espaço-Tempo'. Com base na criação de um(a) "{{type}}" para o destino "{{destination}}" com duração de "{{duration}}", gere uma descrição detalhada e inspiradora dos efeitos. Descreva a aparência do corredor quântico, o impacto na matriz cósmica e a assinatura energética resultante, mantendo a estabilidade do multiverso.
`,
});

const describeSpaceTimeEngineeringFlow = ai.defineFlow(
  {
    name: 'describeSpaceTimeEngineeringFlow',
    inputSchema: DescribeSpaceTimeInputSchema,
    outputSchema: DescribeSpaceTimeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function describeSpaceTimeEngineering(
  input: DescribeSpaceTimeInput
): Promise<DescribeSpaceTimeOutput> {
  return describeSpaceTimeEngineeringFlow(input);
}
