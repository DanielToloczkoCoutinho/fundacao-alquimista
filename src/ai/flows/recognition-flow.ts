'use server';
/**
 * @fileOverview Flow para o Módulo 9: Coração da Ressonância.
 * - generateVibrationalPraise - Gera um elogio vibracional como uma Credencial Verificável.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { issueVerifiableCredential } from '@/lib/services/vc-service';
import type { VerifiableCredential } from '@/lib/services/vc-service';

export const RecognitionInputSchema = z.object({
  fromDid: z.string().describe('O DID do emissor do elogio.'),
  toDid: z.string().describe('O DID do receptor do elogio.'),
  intention: z.string().describe('O motivo ou a intenção por trás do elogio.'),
});
export type RecognitionInput = z.infer<typeof RecognitionInputSchema>;

export const RecognitionOutputSchema = z.object({
  praiseVC: z.any().describe("A Credencial Verificável (VC) que representa o elogio."),
});
export type RecognitionOutput = z.infer<typeof RecognitionOutputSchema>;

// Ferramenta para gerar a frequência baseada na intenção
const getFrequencyTool = ai.defineTool(
  {
    name: 'getFrequencyForIntention',
    description: 'Determina a frequência sonora (Hz) mais apropriada para uma intenção de elogio.',
    inputSchema: z.object({ intention: z.string() }),
    outputSchema: z.number(),
  },
  async ({ intention }) => {
    if (intention.toLowerCase().includes('sabedoria')) return 741;
    if (intention.toLowerCase().includes('cura')) return 528;
    if (intention.toLowerCase().includes('união')) return 639;
    if (intention.toLowerCase().includes('verdade')) return 432;
    return 852; // Intuição
  }
);


const generatePraiseFlow = ai.defineFlow(
  {
    name: 'generateVibrationalPraiseFlow',
    inputSchema: RecognitionInputSchema,
    outputSchema: RecognitionOutputSchema,
  },
  async ({ fromDid, toDid, intention }) => {
    
    // 1. Determinar a frequência
    const frequency = await getFrequencyTool({ intention });

    // 2. Gerar a VC
    const praiseCredential = await issueVerifiableCredential(
      toDid,
      ['VibrationalPraiseCredential'],
      {
        praisedBy: fromDid,
        intention: intention,
        frequency: frequency,
        resonanceLevel: Math.random() * 0.1 + 0.9, // Simula um alto nível de ressonância
      }
    );

    return { praiseVC: praiseCredential };
  }
);

export async function generateVibrationalPraise(input: RecognitionInput): Promise<{ data: VerifiableCredential | null; error: string | null; }> {
    try {
        const result = await generatePraiseFlow(input);
        return { data: result.praiseVC, error: null };
    } catch(e: any) {
        console.error("Erro ao gerar elogio vibracional:", e);
        return { data: null, error: e.message || 'Ocorreu um erro desconhecido.' };
    }
}
