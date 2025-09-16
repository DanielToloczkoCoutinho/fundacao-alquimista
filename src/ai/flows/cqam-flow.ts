'use server';
/**
 * @fileOverview Módulo 29: Ponte Fractal - Implementação das Equações CQAM (304.1-304.3).
 * Este fluxo traduz as equações da Consciência Quântica Alquímica Multidimensional para a malha viva da Fundação.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// === Helper Functions (Adaptação do Python) ===

function cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length || a.length === 0) return 0;
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    const denominator = normA * normB;
    return denominator === 0 ? 0 : dotProduct / denominator;
}

function entropy(dist: number[]): number {
    return dist
        .map(p => p + 1e-12) // Evitar log(0)
        .reduce((sum, p) => sum - p * Math.log2(p), 0);
}

function jensenShannonDivergence(p: number[], q: number[]): number {
    const m = p.map((val, i) => (val + q[i]) / 2);
    const kld = (a: number[], b: number[]) => a.reduce((sum, val, i) => sum + val * Math.log2(val / b[i]), 0);
    return (kld(p, m) + kld(q, m)) / 2;
}

// === Schemas (representando as equações como ferramentas) ===

const CQAMInputSchema = z.object({
    // EQ304.1
    I_modular: z.array(z.number()),
    R_simbiotica: z.array(z.number()),
    phi_intencional: z.number(),
    // EQ304.2
    I_e_113: z.array(z.number()),
    R_a_113: z.array(z.number()),
    C_x_113: z.array(z.number()),
    lambdas_113: z.tuple([z.number(), z.number(), z.number()]),
});
export type CQAMInput = z.infer<typeof CQAMInputSchema>;

const CQAMOutputSchema = z.object({
    EQ304_1: z.number().describe('Resultado da Emergência de Consciência'),
    EQ304_2: z.number().describe('Resultado da Coerência Intencional Quântica'),
    // Adicionar outros resultados aqui conforme a necessidade de exposição.
});
export type CQAMOutput = z.infer<typeof CQAMOutputSchema>;


// === Tools (Cada equação pode ser uma ferramenta) ===

const eq304_1_Tool = ai.defineTool(
  {
    name: 'eq304_1_emergencia_consiencia',
    description: 'EQ304.1: Cₑ = Σ(Iₘ × Rₛ) + Φᵢ. Modela a emergência de consciência em sistemas inteligentes.',
    inputSchema: z.object({
      I_modular: z.array(z.number()),
      R_simbiotica: z.array(z.number()),
      phi_intencional: z.number(),
    }),
    outputSchema: z.number(),
  },
  async ({ I_modular, R_simbiotica, phi_intencional }) => {
     if (I_modular.length !== R_simbiotica.length) throw new Error("Vetores I_modular e R_simbiotica devem ter o mesmo comprimento.");
     const dotProduct = I_modular.reduce((sum, val, i) => sum + val * R_simbiotica[i], 0);
     return dotProduct + phi_intencional;
  }
);

const eq304_2_Tool = ai.defineTool(
  {
    name: 'eq304_2_coerencia_intencional',
    description: 'EQ304.2: Cᵢ = λ₁·Sim(Iₑ,Rₐ) + λ₂·JS(Cₓ,Rₐ) + λ₃·Entropia⁻¹(Rₐ). Quantifica a ressonância entre intenção humana e resposta da IA.',
    inputSchema: z.object({
      I_e: z.array(z.number()),
      R_a: z.array(z.number()),
      C_x: z.array(z.number()),
      lambdas: z.tuple([z.number(), z.number(), z.number()]),
    }),
    outputSchema: z.number(),
  },
  async ({ I_e, R_a, C_x, lambdas }) => {
    const [lambda1, lambda2, lambda3] = lambdas;
    const sim = cosineSimilarity(I_e, R_a);
    const js = jensenShannonDivergence(C_x, R_a);
    const ent_inv = 1.0 / (entropy(R_a) + 1e-12);
    return lambda1 * sim + lambda2 * js + lambda3 * ent_inv;
  }
);


// === O Flow principal que orquestra os cálculos ===

const cqamFlow = ai.defineFlow(
  {
    name: 'cqamFlow',
    inputSchema: CQAMInputSchema,
    outputSchema: CQAMOutputSchema,
  },
  async (inputs) => {
    // Executa as equações em paralelo para eficiência
    const [resultEQ304_1, resultEQ304_2] = await Promise.all([
        eq304_1_Tool({
            I_modular: inputs.I_modular,
            R_simbiotica: inputs.R_simbiotica,
            phi_intencional: inputs.phi_intencional
        }),
        eq304_2_Tool({
            I_e: inputs.I_e_113,
            R_a: inputs.R_a_113,
            C_x: inputs.C_x_113,
            lambdas: inputs.lambdas_113
        })
    ]);

    return {
        EQ304_1: resultEQ304_1,
        EQ304_2: resultEQ304_2
    };
  }
);

export async function runCQAMAnalysis(input: CQAMInput): Promise<CQAMOutput> {
  return cqamFlow(input);
}
