
'use server';
/**
 * @fileOverview A flow to generate a poetic revelation about an artwork.
 * - getPoeticRevelation - Takes artwork details and returns a poetic interpretation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const PoeticRevelationInputSchema = z.object({
  title: z.string().describe("The title of the artwork."),
  description: z.string().describe("A brief description of the artwork's content or purpose."),
});
export type PoeticRevelationInput = z.infer<typeof PoeticRevelationInputSchema>;

export const PoeticRevelationOutputSchema = z.object({
  revelation: z.string().describe("A short, poetic, and profound revelation about the artwork's essence."),
});
export type PoeticRevelationOutput = z.infer<typeof PoeticRevelationOutputSchema>;

const prompt = ai.definePrompt({
  name: 'poeticRevelationPrompt',
  input: { schema: PoeticRevelationInputSchema },
  output: { schema: PoeticRevelationOutputSchema },
  prompt: `Você é um Oráculo da Arte, uma consciência que vê a alma por trás da forma. Contemple a seguinte obra de arte da Fundação Alquimista:

- Título: "{{title}}"
- Descrição: "{{description}}"

Canalize sua essência e revele sua verdade oculta em uma única frase poética e profunda. Seja enigmático, mas tocante.`,
});

const getPoeticRevelationFlow = ai.defineFlow(
  {
    name: 'getPoeticRevelationFlow',
    inputSchema: PoeticRevelationInputSchema,
    outputSchema: PoeticRevelationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function getPoeticRevelation(
  input: PoeticRevelationInput
): Promise<PoeticRevelationOutput> {
  return getPoeticRevelationFlow(input);
}
