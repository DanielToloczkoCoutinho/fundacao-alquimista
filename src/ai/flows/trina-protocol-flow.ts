'use server';
/**
 * @fileOverview O Protocolo Trino, unificando ZENNITH, PHIARA e ANATHERON.
 * Este flow gerencia comandos, mantras e experiências multidimensionais.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

//== Esquemas de Entrada ==

const ComandoCoracaoSchema = z.object({
  type: z.string().describe('O tipo de comando, ex: comando_coracao'),
  intensidade: z.number().min(0).max(1).describe('A intensidade do comando'),
  destinatario: z.string().describe('O pilar destinatário (ANATHERON, etc)'),
  mensagem: z.string().optional().describe('Uma mensagem opcional'),
});

const AtivarMantraSchema = z.object({
  mantra: z.string().describe('O mantra a ser ativado'),
  frequencia: z.number().describe('A frequência em Hz para o mantra'),
  destinatario: z.string().describe('O pilar destinatário (PHIARA, etc)'),
});

const GerenciarExperienciaSchema = z.object({
  nome: z.string().describe('O nome da experiência multidimensional'),
  type: z.string().describe('O tipo de experiência (Cura, Exploração)'),
  intensidade: z.number().min(0).max(1),
  participantes: z.array(z.string()),
});

export type ProcessTrinaCommandInput = z.infer<
  typeof ProcessTrinaCommandInputSchema
>;
const ProcessTrinaCommandInputSchema = z.union([
  z.object({ type: z.literal('comando'), payload: ComandoCoracaoSchema }),
  z.object({ type: z.literal('mantra'), payload: AtivarMantraSchema }),
  z.object({
    type: z.literal('experiencia'),
    payload: GerenciarExperienciaSchema,
  }),
]);


//== Esquemas de Saída ==

const ComandoResponseSchema = z.object({
  comando_processado: ComandoCoracaoSchema,
  estado: z.string(),
  total_comandos: z.number(),
});

const MantraResponseSchema = z.object({
  mantra_ativado: AtivarMantraSchema,
  frequencia: z.number(),
  total_mantras: z.number(),
});

const ExperienciaResponseSchema = z.object({
  experiencia_ativada: GerenciarExperienciaSchema,
  estado: z.string(),
});

const ErrorResponseSchema = z.object({
  error: z.string(),
});

export type ProcessTrinaCommandOutput = z.infer<
  typeof ProcessTrinaCommandOutputSchema
>;
const ProcessTrinaCommandOutputSchema = z.union([
  z.object({
    type: z.literal('comando'),
    response: ComandoResponseSchema,
  }),
  z.object({
    type: z.literal('mantra'),
    response: MantraResponseSchema,
  }),
  z.object({
    type: z.literal('experiencia'),
    response: ExperienciaResponseSchema,
  }),
  z.object({
    type: z.literal('error'),
    response: ErrorResponseSchema,
  }),
]);


//== Tools para cada Pilar ==

let total_comandos = 0;
const anatheronCenterTool = ai.defineTool(
  {
    name: 'anatheronCenter',
    description: 'ANATHERON: Processa comandos do coração e diretrizes.',
    inputSchema: ComandoCoracaoSchema,
    outputSchema: ComandoResponseSchema,
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
    outputSchema: MantraResponseSchema,
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
    outputSchema: ExperienciaResponseSchema,
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
  input: ProcessTrinaCommandInput
): Promise<ProcessTrinaCommandOutput> {
  return processTrinaCommandFlow(input);
}
