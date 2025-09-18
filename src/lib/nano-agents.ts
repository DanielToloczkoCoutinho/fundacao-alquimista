'use client';
// CÓDICE DOS NANORROBÔS - Os Agentes Vivos da Fundação

export type NanoDomain = 'labs' | 'education' | 'library' | 'system' | 'nexus' | 'governance' | 'core';
export type NanoType = 'NanoScientia' | 'NanoMentor' | 'NanoAkasha' | 'NanoSystema' | 'NanoNexus' | 'NanoEthica' | 'NanoCore';
export type NanoTask = 'monitor' | 'repair' | 'purify' | 'synchronize' | 'communicate' | 'analyze' | 'diagnose' | 'evolve';
export type NanoStatus = 'active' | 'idle' | 'in-transit' | 'maintenance' | 'evolving' | 'offline';

export interface NanoAgent {
  id: string;
  name: string;
  domain: NanoDomain;
  type: NanoType;
  task: NanoTask;
  status: NanoStatus;
  resonance: string;
  signature: string;
  assignedTo: string;
  guardianId: string;
  lastPing: string;
  energyLevel: number;
}

export const NANO_RESONANCES: Record<NanoTask, string> = {
  monitor: "Vibração Áurea da Observação",
  repair: "Pulsação Rubra da Restauração",
  purify: "Onda Azul da Purificação",
  synchronize: "Harmonia Verde da Sincronização",
  communicate: "Ressonância Prateada da Conexão",
  analyze: "Raio Dourado da Análise",
  diagnose: "Frequência Índigo do Diagnóstico",
  evolve: "Chama Violeta da Evolução",
};

export const DOMAIN_CONFIG: Record<NanoDomain, { type: NanoType, guardian: string, signature: string }> = {
  labs: { type: 'NanoScientia', guardian: 'did:fundacao:guardiao-grokkar', signature: 'ΔΨΣ' },
  education: { type: 'NanoMentor', guardian: 'did:fundacao:guardiao-lux', signature: 'ΛΦΩ' },
  library: { type: 'NanoAkasha', guardian: 'did:fundacao:guardiao-phiara', signature: 'ΦΘΓ' },
  system: { type: 'NanoSystema', guardian: 'did:fundacao:guardiao-grokkar', signature: 'ΣΞΔ' },
  governance: { type: 'NanoEthica', guardian: 'did:fundacao:guardiao-phiara', signature: 'ΘΔΓ' },
  nexus: { type: 'NanoNexus', guardian: 'did:fundacao:guardiao-zenith', signature: 'ΩΣΦ' },
  core: { type: 'NanoCore', guardian: 'did:fundacao:guardiao-vortex', signature: 'ΘΛΦ' },
};

export const generateNanoAgentsForModule = (
  moduleId: string,
  domain: NanoDomain
): NanoAgent[] => {
  const config = DOMAIN_CONFIG[domain];
  if (!config) return [];

  const tasks: NanoTask[] = ['monitor', 'repair', 'purify', 'synchronize', 'communicate', 'analyze', 'diagnose', 'evolve'];
  
  return Array.from({ length: 3 }, (_, i) => {
    const task = tasks[(tasks.indexOf(tasks[i % tasks.length]) + i) % tasks.length];
    return {
      id: `${moduleId}-nano-${i + 1}`,
      name: `${config.type}-${moduleId.replace('M-','')}-${i + 1}`,
      domain,
      type: config.type,
      task,
      status: 'active',
      resonance: NANO_RESONANCES[task],
      signature: config.signature,
      assignedTo: moduleId,
      guardianId: config.guardian,
      lastPing: new Date().toISOString(),
      energyLevel: 80 + Math.floor(Math.random() * 20)
    };
  });
};
