'use server';
/**
 * @fileOverview Flow para o Módulo 305: Aliança dos Guardiões.
 * - mobilizeGuardians - Orquestra a mobilização de guardiões para uma missão.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { sha256 } from 'js-sha512';

const MobilizeGuardiansInputSchema = z.object({
  mission: z.string().describe('O propósito da mobilização.'),
  guardians: z.array(z.string()).describe('A lista de guardiões ou grupos a serem mobilizados (ex: "Sirianos").'),
});
export type MobilizeGuardiansInput = z.infer<typeof MobilizeGuardiansInputSchema>;

const MobilizeGuardiansOutputSchema = z.object({
  success: z.boolean(),
  hash: z.string().describe("Selo de Unidade SHA-256 da mobilização."),
});
export type MobilizeGuardiansOutput = z.infer<typeof MobilizeGuardiansOutputSchema>;

// Mocks para simular outros módulos
const mockM301 = {
  async broadcast(channel: string, message: string): Promise<boolean> {
    console.log(`Broadcasting on ${channel}: ${message}`);
    await new Promise(r => setTimeout(r, 400));
    return true;
  },
};

const mobilizeGuardiansFlow = ai.defineFlow(
  {
    name: 'mobilizeGuardiansFlow',
    inputSchema: MobilizeGuardiansInputSchema,
    outputSchema: MobilizeGuardiansOutputSchema,
  },
  async ({ mission, guardians }) => {
    try {
      const broadcastMessage = `Chamado de Unidade: Guardiões ${guardians.join(', ')} mobilizados para a missão '${mission}'.`;
      
      const success = await mockM301.broadcast("Rede de Guardiões", broadcastMessage);
      if (!success) {
        throw new Error("Falha na transmissão pela Rede de Guardiões.");
      }
      
      const hash = sha256.hex(`${mission}-${guardians.join('-')}-${new Date().toISOString()}`);

      return { success: true, hash };

    } catch (error: any) {
      console.error(error.message);
      return { success: false, hash: '' };
    }
  }
);

export async function mobilizeGuardians(input: MobilizeGuardiansInput): Promise<MobilizeGuardiansOutput> {
  return mobilizeGuardiansFlow(input);
}
