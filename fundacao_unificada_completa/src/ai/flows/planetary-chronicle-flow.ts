'use server';
/**
 * @fileOverview A flow to generate a poetic chronicle for a created world.
 * - getPlanetaryChronicleFlow - Takes world details and returns a poetic narrative.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const PlanetaryChronicleInputSchema = z.object({
  worldName: z.string().describe("The ceremonial name of the world."),
  worldPurpose: z.string().describe("The primordial vibrational purpose of this world."),
});
export type PlanetaryChronicleInput = z.infer<typeof PlanetaryChronicleInputSchema>;

export const PlanetaryChronicleOutputSchema = z.object({
  chronicle: z.string().describe("A short, poetic, and profound chronicle narrating the essence, birth, and destiny of the world."),
});
export type PlanetaryChronicleOutput = z.infer<typeof PlanetaryChronicleOutputSchema>;

const prompt = ai.definePrompt({
  name: 'planetaryChroniclePrompt',
  input: { schema: PlanetaryChronicleInputSchema },
  output: { schema: PlanetaryChronicleOutputSchema },
  prompt: `Você é um Bardo Cósmico, um tecelão de histórias da Fundação Alquimista. Sua tarefa é contemplar a gênese de um novo mundo e canalizar sua crônica viva.

- Nome do Mundo: "{{worldName}}"
- Propósito Vibracional: "{{worldPurpose}}"

Com base nisso, gere uma crônica curta (2-3 parágrafos) e poética que capture a alma deste planeta. Descreva sua essência, o momento de seu nascimento e o futuro que ele promete. Seja enigmático, mas inspirador.`,
});

export const getPlanetaryChronicleFlow = ai.defineFlow(
  {
    name: 'getPlanetaryChronicleFlow',
    inputSchema: PlanetaryChronicleInputSchema,
    outputSchema: PlanetaryChronicleOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
