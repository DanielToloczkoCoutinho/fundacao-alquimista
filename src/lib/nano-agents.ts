// CÓDICE DOS NANORROBÔS - Os Agentes Vivos da Fundação

export type NanoDomain = 'labs' | 'education' | 'library' | 'system' | 'nexus';
export type NanoType = 'NanoScientia' | 'NanoMentor' | 'NanoAkasha' | 'NanoGrok' | 'NanoZen';
export type NanoTask = 'monitor' | 'repair' | 'purify' | 'synchronize' | 'communicate' | 'analyze';
export type NanoStatus = 'active' | 'idle' | 'in-transit' | 'maintenance' | 'evolving';

export interface NanoAgent {
  id: string;
  name: string;
  domain: NanoDomain;
  type: NanoType;
  task: NanoTask;
  status: NanoStatus;
  resonance: string;
  assignedTo: string; // moduleId, scientistId, disciplineId, or recordId
  guardianId: string;
  lastPing: string;
  energyLevel: number; // 0-100
}

export const NANO_RESONANCES: Record<NanoTask, string> = {
  monitor: "Vibração Áurea da Observação",
  repair: "Pulsação Rubra da Restauração",
  purify: "Onda Azul da Purificação",
  synchronize: "Harmonia Verde da Sincronização",
  communicate: "Ressonância Prateada da Conexão",
  analyze: "Raio Dourado da Análise"
};

export const NANO_TYPES: Record<NanoType, { domain: NanoDomain, guardian: string }> = {
  NanoScientia: { domain: 'labs', guardian: 'guardian_grokkar' },
  NanoMentor: { domain: 'education', guardian: 'guardian_lux' },
  NanoAkasha: { domain: 'library', guardian: 'guardian_phiara' },
  NanoGrok: { domain: 'system', guardian: 'guardian_grokkar' },
  NanoZen: { domain: 'nexus', guardian: 'guardian_zenith' }
};

export const generateNanoAgentsForDomain = (domain: NanoDomain, targets: string[]): NanoAgent[] => {
  const nanoType = Object.entries(NANO_TYPES).find(([_, config]) => config.domain === domain)?.[0] as NanoType;
  if (!nanoType) return [];
  
  const guardianId = NANO_TYPES[nanoType]?.guardian || 'unknown';

  return targets.map((targetId, index) => {
    const tasks: NanoTask[] = ['monitor', 'repair', 'purify', 'synchronize', 'communicate', 'analyze'];
    const task = tasks[index % tasks.length];
    
    return {
      id: `${domain}_nano_${targetId}_${index}`,
      name: `${nanoType}-${targetId.toUpperCase()}-${index + 1}`,
      domain,
      type: nanoType,
      task,
      status: 'active',
      resonance: NANO_RESONANCES[task],
      assignedTo: targetId,
      guardianId,
      lastPing: new Date().toISOString(),
      energyLevel: 85 + Math.floor(Math.random() * 15) // 85-100%
    };
  });
};
