'use server';

import { modulesMetadata } from './modules-metadata';

// Simula a decodificação da intenção para uma frequência base
// Em um sistema real, isso poderia envolver análise de linguagem natural por IA
function getPhiFrequency(intent: string): number {
  const hash = intent.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  if (intent.toLowerCase().includes('cura') || intent.toLowerCase().includes('amor')) {
    return 528 + (hash % 10); // Frequência da cura
  }
  if (intent.toLowerCase().includes('sabedoria') || intent.toLowerCase().includes('verdade')) {
    return 741 + (hash % 10); // Frequência da intuição
  }
  if (intent.toLowerCase().includes('unidade') || intent.toLowerCase().includes('paz')) {
    return 432 + (hash % 10); // Frequência da harmonia
  }
  return 963 + (hash % 10); // Frequência da conexão divina
}

// Simula o cálculo de alinhamento harmônico
// Módulos do núcleo e de governança teriam melhor ressonância
function calculateHarmonicAlignment(moduleId: string, baseFrequency: number): number {
  const module = modulesMetadata.find(m => m.code === moduleId);
  let alignmentFactor = 0.95; // Base de alinhamento

  if (module) {
    if (['Núcleo da Fundação', 'Governança'].includes(module.category)) {
      alignmentFactor = 0.99;
    }
    if (['Laboratórios e Pesquisa', 'Segurança e Ética Cósmica'].includes(module.category)) {
      alignmentFactor = 0.97;
    }
  }

  // A harmonia final é uma combinação do fator do módulo e uma pequena variação aleatória
  return baseFrequency * (alignmentFactor + (Math.random() - 0.5) * 0.02);
}

/**
 * Orquestrador de Frequência Φ
 * Ajusta um componente da tapeçaria à frequência correta para comunicação interdimensional.
 */
export function tuneInstrument(moduleId: string, intent: string): {
  moduleId: string;
  intent: string;
  frequency: number;
  harmonic: number;
  signature: string;
} {
  console.log(`Afinação requisitada para ${moduleId} com intenção: "${intent}"`);
  const baseFrequency = getPhiFrequency(intent);
  const harmonic = calculateHarmonicAlignment(moduleId, baseFrequency);
  const signature = `${moduleId}:${baseFrequency.toFixed(2)}:${harmonic.toFixed(2)}`;
  
  console.log(`Assinatura Vibracional Gerada: ${signature}`);
  return {
    moduleId,
    intent,
    frequency: baseFrequency,
    harmonic,
    signature,
  };
}
