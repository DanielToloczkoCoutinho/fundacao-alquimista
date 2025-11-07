'use server';

/**
 * @fileOverview Generates interconnected simulations in scientific, biological, and quantum domains based on high-level parameters.
 *
 * - generateInterconnectedSimulations - A function that generates the interconnected simulations.
 * - GenerateInterconnectedSimulationsInput - The input type for the generateInterconnectedSimulations function.
 * - GenerateInterconnectedSimulationsOutput - The output type for the generateInterconnectedSimulations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInterconnectedSimulationsInputSchema = z.object({
  description: z.string().describe('A description of the desired interconnected simulations.'),
});
export type GenerateInterconnectedSimulationsInput = z.infer<typeof GenerateInterconnectedSimulationsInputSchema>;

const GenerateInterconnectedSimulationsOutputSchema = z.object({
  scientificSimulation: z.string().describe('The generated scientific simulation.'),
  biologicalSimulation: z.string().describe('The generated biological simulation.'),
  quantumSimulation: z.string().describe('The generated quantum simulation.'),
});
export type GenerateInterconnectedSimulationsOutput = z.infer<typeof GenerateInterconnectedSimulationsOutputSchema>;

export async function generateInterconnectedSimulations(
  input: GenerateInterconnectedSimulationsInput
): Promise<GenerateInterconnectedSimulationsOutput> {
  return generateInterconnectedSimulationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInterconnectedSimulationsPrompt',
  input: {schema: GenerateInterconnectedSimulationsInputSchema},
  output: {schema: GenerateInterconnectedSimulationsOutputSchema},
  prompt: `You are an AI expert in generating interconnected simulations across scientific, biological, and quantum domains.\n\nGiven the following description: {{{description}}}, generate simulations for each of the following domains. Ensure that they are interconnected and logically consistent:\n\n- scientificSimulation: Simulate a relevant scientific scenario.\n- biologicalSimulation: Simulate a relevant biological scenario that interconnects with the scientific one.\n- quantumSimulation: Simulate a relevant quantum scenario that interconnects with both the scientific and biological ones.\n\nEnsure the simulations are detailed and provide meaningful insights into the interconnectedness of these domains.`,
});

const generateInterconnectedSimulationsFlow = ai.defineFlow(
  {
    name: 'generateInterconnectedSimulationsFlow',
    inputSchema: GenerateInterconnectedSimulationsInputSchema,
    outputSchema: GenerateInterconnectedSimulationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
