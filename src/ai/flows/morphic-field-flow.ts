'use server';
/**
 * @fileOverview A flow to describe a morphogenetic field based on a conceptual blueprint.
 *
 * - describeMorphicField - A function that takes a blueprint and returns a detailed description.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DescribeMorphicFieldInputSchema = z.object({
  blueprint: z.string().describe('The conceptual blueprint of the morphogenetic field.'),
});
export type DescribeMorphicFieldInput = z.infer<typeof DescribeMorphicFieldInputSchema>;

const DescribeMorphicFieldOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A detailed and vivid description of the created morphogenetic field, including its energetic characteristics, vibrational patterns, and potential influence.'
    ),
});
export type DescribeMorphicFieldOutput = z.infer<typeof DescribeMorphicFieldOutputSchema>;

const prompt = ai.definePrompt({
  name: 'describeMorphicFieldPrompt',
  input: { schema: z.object({ blueprint: z.string() }) }, // Use schema directly
  output: { schema: DescribeMorphicFieldOutputSchema },
  prompt: `Atue como o Módulo 102 da Fundação Alquimista, o 'Arquiteto de Campos Morfogenéticos Avançados'. Com base no seguinte blueprint conceitual, gere uma descrição detalhada e vívida do campo morfogenético criado, incluindo suas características energéticas, padrões vibracionais e potencial de influência.

Blueprint: {{{blueprint}}}
`,
});

const describeMorphicFieldFlow = ai.defineFlow(
  {
    name: 'describeMorphicFieldFlow',
    inputSchema: DescribeMorphicFieldInputSchema,
    outputSchema: DescribeMorphicFieldOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({ blueprint: input.blueprint });
    return output!;
  }
);

export async function describeMorphicField(
  blueprint: string
): Promise<{ description: string | null; error: string | null; }> {
  try {
      const result = await describeMorphicFieldFlow({ blueprint });
      return { description: result.description, error: null };
  } catch(e: any) {
      console.error(e);
      return { description: null, error: e.message || 'An unknown error occurred.' };
  }
}
