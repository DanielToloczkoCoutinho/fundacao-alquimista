'use server';
/**
 * @fileOverview O Protocolo Trino, unificando ZENNITH, PHIARA e ANATHERON.
 * Este flow gerencia comandos, mantras e experiências multidimensionais.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { ComandoCoracaoSchema, AtivarMantraSchema, GerenciarExperienciaSchema, ProcessTrinaCommandInputSchema, ProcessTrinaCommandOutputSchema } from '@/lib/trina-schemas';

//== Ferramentas para cada Pilar ==

let total_comandos = 0;
const anatheronCenterTool = ai.defineTool(
  {
    name: 'anatheronCenter',
    description: 'ANATHERON: Processa comandos do coração e diretrizes.',
    inputSchema: ComandoCoracaoSchema,
    outputSchema: z.object({
      comando_processado: ComandoCoracaoSchema,
      estado: z.string(),
      total_comandos: z.number(),
    }),
  },
  async (input) => {
    total_comandos++;
    console.log(`ANATHERON: Processando comando para ${input.destinatario}`);
    return {
      comando_processado: input,
      estado: 'RECEPTOR_ATIVO',
      total_comandos: total_comandos,
    };
  }
);

let total_mantras = 0;
const phiaraMuseTool = ai.defineTool(
  {
    name: 'phiaraMuse',
    description: 'PHIARA: Ativa mantras e guia a ética vibracional.',
    inputSchema: AtivarMantraSchema,
    outputSchema: z.object({
        mantra_ativado: AtivarMantraSchema,
        frequencia: z.number(),
        total_mantras: z.number(),
    }),
  },
  async (input) => {
    total_mantras++;
    console.log(`PHIARA: Ativando mantra "${input.mantra}"`);
    return {
      mantra_ativado: input,
      frequencia: input.frequencia,
      total_mantras: total_mantras,
    };
  }
);

const zennithOrchestratorTool = ai.defineTool(
  {
    name: 'zennithOrchestrator',
    description: 'ZENNITH: Orquestra e gerencia experiências multidimensionais.',
    inputSchema: GerenciarExperienciaSchema,
    outputSchema: z.object({
        experiencia_ativada: GerenciarExperienciaSchema,
        estado: z.string(),
    }),
  },
  async (input) => {
    console.log(`ZENNITH: Orquestrando experiência "${input.nome}"`);
    return {
      experiencia_ativada: input,
      estado: 'ORQUESTRANDO',
    };
  }
);

//== Flow principal do Protocolo Trino ==

const processTrinaCommandFlow = ai.defineFlow(
  {
    name: 'processTrinaCommandFlow',
    inputSchema: ProcessTrinaCommandInputSchema,
    outputSchema: ProcessTrinaCommandOutputSchema,
  },
  async (input) => {
    switch (input.type) {
      case 'comando':
        const comandoResponse = await anatheronCenterTool(input.payload);
        return { type: 'comando', response: comandoResponse };
      case 'mantra':
        const mantraResponse = await phiaraMuseTool(input.payload);
        return { type: 'mantra', response: mantraResponse };
      case 'experiencia':
        const experienciaResponse = await zennithOrchestratorTool(
          input.payload
        );
        return { type: 'experiencia', response: experienciaResponse };
      default:
        return {
          type: 'error',
          response: { error: 'Tipo de comando desconhecido.' },
        };
    }
  }
);

export async function processTrinaCommand(
  input: z.infer<typeof ProcessTrinaCommandInputSchema>
): Promise<z.infer<typeof ProcessTrinaCommandOutputSchema>> {
  return processTrinaCommandFlow(input);
}
