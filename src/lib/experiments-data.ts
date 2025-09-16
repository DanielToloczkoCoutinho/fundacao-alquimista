
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
export const experimentsData: Experiment[] = [];
