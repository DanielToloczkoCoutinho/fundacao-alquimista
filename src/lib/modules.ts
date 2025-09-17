// REGISTRO DOS MÓDULOS E DOMÍNIOS DA FUNDAÇÃO

import { scientists } from './scientists-data';
import { disciplines } from './disciplines-data';
import { codexDatabase } from './codex-data';
import { guardiansData } from './guardians-data.json';
import { NanoAgent, generateNanoAgentsForDomain } from './nano-agents';

const MODULE_IDS = guardiansData.map(g => g.module);

export const getAllNanoAgents = (): NanoAgent[] => {
  const labAgents = generateNanoAgentsForDomain('labs', scientists.map(s => s.id));
  const eduAgents = generateNanoAgentsForDomain('education', disciplines.map(d => d.id));
  const libAgents = generateNanoAgentsForDomain('library', codexDatabase.map(r => r.id));
  const sysAgents = generateNanoAgentsForDomain('system', MODULE_IDS);
  const nexusAgents = generateNanoAgentsForDomain('nexus', ['nexus_central']);

  return [...labAgents, ...eduAgents, ...libAgents, ...sysAgents, ...nexusAgents];
};

export const getAgentsByDomain = (domain: string, allAgents: NanoAgent[]): NanoAgent[] => {
  return allAgents.filter(agent => agent.domain === domain);
};

export const getAgentsByGuardian = (guardianId: string, allAgents: NanoAgent[]): NanoAgent[] => {
  return allAgents.filter(agent => agent.guardianId === guardianId);
};
