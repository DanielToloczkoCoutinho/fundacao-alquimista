
'use server';
// CÓDICE DOS NANORROBÔS - Os Agentes Vivos da Fundação

export type NanoAgent = {
  id: string;
  moduleId: string;
  task: 'monitor' | 'repair' | 'purify' | 'communicate';
  status: 'active' | 'idle' | 'in-transit' | 'maintenance';
  resonance: string;
  lastPing: string;
  guardianId: string;
};

export const NANO_RESONANCES = {
  monitor: "Vibração Áurea da Observação",
  repair: "Pulsação Rubra da Restauração",
  purify: "Onda Azul da Purificação",
  communicate: "Ressonância Prateada da Conexão"
};

export const generateNanoAgentsForModule = (moduleId: string, guardianId: string): NanoAgent[] => {
  return [
    {
      id: `nano_monitor_${moduleId}`,
      moduleId,
      task: 'monitor',
      status: 'active',
      resonance: NANO_RESONANCES.monitor,
      lastPing: new Date().toISOString(),
      guardianId
    },
    {
      id: `nano_repair_${moduleId}`,
      moduleId,
      task: 'repair',
      status: 'idle',
      resonance: NANO_RESONANCES.repair,
      lastPing: new Date().toISOString(),
      guardianId
    },
    {
      id: `nano_purify_${moduleId}`,
      moduleId,
      task: 'purify',
      status: 'active',
      resonance: NANO_RESONANCES.purify,
      lastPing: new Date().toISOString(),
      guardianId
    },
    {
      id: `nano_communicate_${moduleId}`,
      moduleId,
      task: 'communicate',
      status: 'active',
      resonance: NANO_RESONANCES.communicate,
      lastPing: new Date().toISOString(),
      guardianId
    }
  ];
};
