'use server';

export interface Experiment {
  id: string;
  title: string;
  description: string;
  equation: string; // ID of the related equation
  parameters: Record<string, number>;
  result: {
    coherence: number;
    outcome: string;
    vibrationalPattern: string;
  };
  timestamp: string;
  guardian: string;
}

// Este arquivo servirá como o Códice das Experiências,
// registrando cada simulação executada no Laboratório de Ressonância.
export const experimentsData: Experiment[] = [
  {
    id: "EXP-20250915-001",
    title: "Teste de Ressonância Harmônica com EQ001",
    description: "Primeiro teste para validar a resposta do motor de simulação à equação de Harmonia Primordial.",
    equation: "EQ001",
    parameters: {
      "Intenção": 80,
      "Coerência": 95,
      "Frequência": 60
    },
    result: {
      coherence: 0.985,
      outcome: "Ressonância Harmônica Perfeita",
      vibrationalPattern: "Padrão Fractal-777"
    },
    timestamp: "2025-09-15T10:00:00Z",
    guardian: "LUX"
  }
];