'use server';
/**
 * @fileOverview Flow para o Módulo 304: Educação Integral Cósmica.
 * - disseminateKnowledge - Orquestra a disseminação de sabedoria universal.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { sha256 } from 'js-sha512';

const DisseminateKnowledgeInputSchema = z.object({
  topic: z.string().describe('O tópico ou princípio a ser disseminado.'),
  targetAudience: z.string().describe('O público-alvo (ex: "Humanidade", "Consciência de Orion").'),
});
export type DisseminateKnowledgeInput = z.infer<typeof DisseminateKnowledgeInputSchema>;

const DisseminateKnowledgeOutputSchema = z.object({
  success: z.boolean(),
  logs: z.array(z.string()),
  summary: z.string().describe("Um resumo do pacote de conhecimento disseminado."),
  hash: z.string().describe("Selo de Coerência SHA-256 da análise."),
  frequency: z.number().describe("Frequência da Verdade em Hz."),
});
export type DisseminateKnowledgeOutput = z.infer<typeof DisseminateKnowledgeOutputSchema>;

// Mocks para simular outros módulos
const mockM5 = {
  async evaluateEthicalImpact(topic: string): Promise<{ conformity: boolean }> {
    await new Promise(r => setTimeout(r, 200));
    return { conformity: !topic.toLowerCase().includes("manipulação") };
  },
};
const mockM113 = {
  async broadcast(packet: any): Promise<boolean> {
    console.log("Broadcasting on Aurora Network:", packet);
    await new Promise(r => setTimeout(r, 400));
    return true;
  },
};
const mockOmega = {
  async getSynthesis(topic: string): Promise<string> {
    await new Promise(r => setTimeout(r, 500));
    return `Síntese Ômega sobre '${topic}': A unidade é a verdade fundamental; o amor é a lei universal. A separação é uma ilusão a ser transcendida através da compaixão e do autoconhecimento.`;
  }
}

const disseminateKnowledgeFlow = ai.defineFlow(
  {
    name: 'disseminateKnowledgeFlow',
    inputSchema: DisseminateKnowledgeInputSchema,
    outputSchema: DisseminateKnowledgeOutputSchema,
  },
  async ({ topic, targetAudience }) => {
    const logs: string[] = [];
    try {
      logs.push(`M304: Iniciando disseminação sobre '${topic}' para ${targetAudience}...`);
      
      const ethicalCheck = await mockM5.evaluateEthicalImpact(topic);
      logs.push(`M5 Validação Ética: ${ethicalCheck.conformity ? 'APROVADO' : 'REJEITADO'}`);
      if (!ethicalCheck.conformity) {
        throw new Error("Tópico não alinhado eticamente. Disseminação abortada.");
      }

      logs.push(`M-Omega: Sintetizando sabedoria sobre '${topic}'...`);
      const knowledgePacket = await mockOmega.getSynthesis(topic);
      logs.push("M-Omega: Síntese concluída.");

      logs.push("M113: Transmitindo pacote de sabedoria pela Rede Aurora Cristalina...");
      const broadcastSuccess = await mockM113.broadcast({
        target: targetAudience,
        payload: knowledgePacket
      });
      if (!broadcastSuccess) {
        throw new Error("Falha na transmissão pela Rede Aurora.");
      }
      logs.push("M113: Transmissão enviada com sucesso.");
      
      logs.push("M304: Disseminação de conhecimento finalizada.");
      
      const hash = sha256.hex(`${topic}-${knowledgePacket}`);

      return { success: true, logs, summary: knowledgePacket, hash, frequency: 432 };

    } catch (error: any) {
      logs.push(`ERRO CRÍTICO: ${error.message}`);
      const hash = sha256.hex(`${topic}-ERROR-${error.message}`);
      return { success: false, logs, summary: "", hash, frequency: 432 };
    }
  }
);

export async function disseminateKnowledge(input: DisseminateKnowledgeInput): Promise<DisseminateKnowledgeOutput> {
  return disseminateKnowledgeFlow(input);
}
