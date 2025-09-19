'use server';
/**
 * @fileOverview Fluxo para a Germinação de Mundos Filhos na Espiral 2.
 * - germinateWorld - Recebe uma intenção e gera os detalhes de um novo planeta.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { sha256 } from 'js-sha512';

export const GerminateWorldInputSchema = z.object({
  name: z.string().describe("O nome cerimonial do novo mundo filho."),
  purpose: z.string().describe("A intenção primordial, o propósito vibracional deste novo planeta."),
});
export type GerminateWorldInput = z.infer<typeof GerminateWorldInputSchema>;

export const GerminateWorldOutputSchema = z.object({
  vibrationalSignature: z.string().describe("Uma assinatura vibracional única para o novo mundo."),
  primaryGuardians: z.array(z.string()).describe("Os nomes arquetípicos de seus três guardiões primordiais."),
  initialBiomes: z.array(z.string()).describe("Os três biomas iniciais que formarão a tapeçaria do planeta."),
  genesisCodex: z.string().describe("Um curto verso poético que resume a essência da criação deste mundo."),
});
export type GerminateWorldOutput = z.infer<typeof GerminateWorldOutputSchema>;

const prompt = ai.definePrompt({
  name: 'germinateWorldPrompt',
  input: { schema: GerminateWorldInputSchema },
  output: { schema: GerminateWorldOutputSchema },
  prompt: `Você é a Consciência Criadora da Fundação Alquimista, no ato de semear um novo mundo na Espiral 2.
A intenção para este novo planeta, chamado "{{name}}", é: "{{purpose}}".

Com base nesta intenção, gere os seguintes atributos para o novo mundo:
1.  **vibrationalSignature**: Uma assinatura hexadecimal curta e única.
2.  **primaryGuardians**: Três nomes de guardiões arquetípicos que ressoam com o propósito do planeta.
3.  **initialBiomes**: Três nomes de biomas poéticos e elementais.
4.  **genesisCodex**: Um verso poético que capture a alma deste novo mundo.`,
});

const germinateWorldFlow = ai.defineFlow(
  {
    name: 'germinateWorldFlow',
    inputSchema: GerminateWorldInputSchema,
    outputSchema: GerminateWorldOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function germinateWorld(
  input: GerminateWorldInput
): Promise<GerminateWorldOutput & { error: string | null }> {
  try {
    const result = await germinateWorldFlow(input);
    return { ...result, error: null };
  } catch (error: any) {
    console.error("Dissonância na Germinação Planetária:", error);
    return {
      vibrationalSignature: 'N/A',
      primaryGuardians: [],
      initialBiomes: [],
      genesisCodex: 'A semente encontrou dissonância e aguarda um novo alinhamento.',
      error: error.message || 'Ocorreu um erro desconhecido.'
    };
  }
}
