
'use server';
// REGISTRO DOS MÓDULOS DA FUNDAÇÃO

import { GUARDIANS } from './guardians-data';
import { generateNanoAgentsForModule, NanoAgent } from './nano-agents';


export const MODULE_IDS = [
  'M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10',
  'M17', 'M29', 'M42', 'M72', 'M121', 'M304', 'M600', 'M404', 'M307'
];

export const getAllNanoAgents = (): NanoAgent[] => {
  return MODULE_IDS.flatMap(moduleId => {
    const guardian = GUARDIANS.find(g => g.module === moduleId);
    return generateNanoAgentsForModule(moduleId, guardian?.id || 'unknown');
  });
};

export const getModuleGuardian = (moduleId: string) => {
  return GUARDIANS.find(guardian => guardian.module === moduleId);
};
