// REGISTRO DOS MÓDULOS DA FUNDAÇÃO

import { generateNanoAgentsForModule, NanoAgent } from './nano-agents';

export type ModuleDomain = 'core' | 'labs' | 'education' | 'library' | 'governance';

export const MODULES: { id: string; domain: ModuleDomain }[] = [
  { id: 'M0', domain: 'core' },
  { id: 'M1', domain: 'core' },
  { id: 'M2', domain: 'core' },
  { id: 'M3', domain: 'core' },
  { id: 'M4', domain: 'core' },
  { id: 'M5', domain: 'governance' },
  { id: 'M6', domain: 'core' },
  { id: 'M7', domain: 'core' },
  { id: 'M8', domain: 'governance' },
  { id: 'M9', domain: 'governance' },
  { id: 'M10', domain: 'core' },
  { id: 'M17', domain: 'labs' },
  { id: 'M29', domain: 'governance' },
  { id: 'M42', domain: 'library' },
  { id: 'M72', domain: 'governance' },
  { id: 'M121', domain: 'library' },
  { id: 'M304', domain: 'education' },
  { id: 'M600', domain: 'governance' },
  { id: 'M404', domain: 'core' },
  { id: 'M307', domain: 'core' },
];

export const getAllNanoAgents = (): NanoAgent[] => {
  return MODULES.flatMap(({ id, domain }) =>
    generateNanoAgentsForModule(id, domain)
  );
};
