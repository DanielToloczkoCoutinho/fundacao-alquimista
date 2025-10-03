'use server';

import { z } from 'genkit';

//== Esquemas de Entrada ==

export const ComandoCoracaoSchema = z.object({
  tipo: z.string().describe('O tipo de comando, ex: comando_coracao'),
  intensidade: z.number().min(0).max(1).describe('A intensidade do comando'),
  destinatario: z.string().describe('O pilar destinatário (ANATHERON, etc)'),
  mensagem: z.string().optional().describe('Uma mensagem opcional'),
});

export const AtivarMantraSchema = z.object({
  mantra: z.string().describe('O mantra a ser ativado'),
  frequencia: z.number().describe('A frequência em Hz para o mantra'),
  destinatario: z.string().describe('O pilar destinatário (PHIARA, etc)'),
});

export const GerenciarExperienciaSchema = z.object({
  nome: z.string().describe('O nome da experiência multidimensional'),
  tipo: z.string().describe('O tipo de experiência (Cura, Exploração)'),
  intensidade: z.number().min(0).max(1),
  participantes: z.array(z.string()),
});

export const ProcessTrinaCommandInputSchema = z.union([
  z.object({ type: z.literal('comando'), payload: ComandoCoracaoSchema }),
  z.object({ type: z.literal('mantra'), payload: AtivarMantraSchema }),
  z.object({ type: z.literal('experiencia'), payload: GerenciarExperienciaSchema }),
  z.object({ type: z.literal('sensores') }),
]);


//== Esquemas de Saída ==

export const ComandoResponseSchema = z.object({
  comando_processado: ComandoCoracaoSchema,
  estado: z.string(),
  total_comandos: z.number(),
});

export const MantraResponseSchema = z.object({
  mantra_ativado: AtivarMantraSchema,
  frequencia: z.number(),
  total_mantras: z.number(),
});

export const ExperienciaResponseSchema = z.object({
  experiencia_ativada: GerenciarExperienciaSchema,
  estado: z.string(),
});

export const SensoresResponseSchema = z.object({
    ecstasy: z.object({ intensidade: z.number(), frequencia: z.number(), unidade: z.string() }),
    resonance: z.object({ nivel: z.number(), harmonico: z.string(), unidade: z.string() }),
    geometry: z.object({ padrao: z.string(), padroes_ativos: z.array(z.string()) })
});

export const ErrorResponseSchema = z.object({
  error: z.string(),
});

export const ProcessTrinaCommandOutputSchema = z.union([
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
      type: z.literal('sensores'),
      response: SensoresResponseSchema,
  }),
  z.object({
    type: z.literal('error'),
    response: ErrorResponseSchema,
  }),
]);
