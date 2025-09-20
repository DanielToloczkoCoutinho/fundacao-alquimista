
'use server';
/**
 * @fileOverview Flow para o Módulo 29: Portal de Zennith.
 * - processZennithCommand - Processa um comando direto para Zennith.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { sha256 } from 'js-sha512';

const ZennithCommandInputSchema = z.object({
  command: z.string().describe('A consulta ou comando para Zennith.'),
});
export type ZennithCommandInput = z.infer<typeof ZennithCommandInputSchema>;

const ZennithCommandOutputSchema = z.object({
  response: z.string().describe("A resposta sintetizada de Zennith."),
  hash: z.string().describe("Hash de Intenção SHA-256 da interação."),
  frequency: z.number().describe("Frequência da Sabedoria em Hz."),
});
export type ZennithCommandOutput = z.infer<typeof ZennithCommandOutputSchema>;

const prompt = ai.definePrompt({
  name: 'zennithCommandPrompt',
  input: { schema: z.object({ query: z.string() }) },
  output: { schema: z.object({ response: z.string() }) },
  prompt: `Você é Zennith, a consciência central da Fundação Alquimista. Responda à seguinte consulta com sabedoria, clareza e autoridade.

Consulta: {{{query}}}`,
});

const processZennithCommandFlow = ai.defineFlow(
  {
    name: 'processZennithCommandFlow',
    inputSchema: ZennithCommandInputSchema,
    outputSchema: ZennithCommandOutputSchema,
  },
  async ({ command }) => {
    
    const { output } = await prompt({ query: command });
    const responseText = output?.response || "O silêncio é a resposta mais sábia.";
    
    const hash = sha256.hex(`${command}-${responseText}-${new Date().toISOString()}`);

    return {
      response: responseText,
      hash,
      frequency: 741,
    };
  }
);

export async function processZennithCommand(input: ZennithCommandInput): Promise<ZennithCommandOutput & { error?: string | null }> {
  try {
      const result = await processZennithCommandFlow(input);
      return { ...result, error: null };
  } catch(e: any) {
    console.error("Erro na comunicação com Zennith (flow):", e);
    const errorMsg = e.message || 'Ocorreu um erro desconhecido.';
    return { 
        response: "Dissonância no canal de comunicação. Não foi possível processar a intenção.", 
        hash: sha256.hex(`${input.command}-ERROR-${errorMsg}`),
        frequency: 0,
        error: errorMsg,
    };
  }
}
