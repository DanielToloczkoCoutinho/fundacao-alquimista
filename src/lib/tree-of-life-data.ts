'use server';

import { modulesMetadata, ModuleMetadata } from "./modules-metadata";

export interface TreeNode {
  id: string; // e.g., 'M9'
  name: string;
  category: string;
  status: 'ativo' | 'em_construcao' | 'legado';
  guardian: string;
}

export interface TreeLink {
  source: string; // ID of source node
  target: string; // ID of target node
  type: 'dependencia' | 'influencia' | 'heranca';
}

// Mapeamento de guardiões para simplificação
const guardianMap: { [key: string]: string } = {
  'M29': 'ZENNITH',
  'M-OMEGA': 'ANATHERON',
  'M9': 'VORTEX',
  'M5': 'LUX',
  'M302': 'PHIARA',
  'M1': 'GROKKAR'
};

// Gerar nós a partir dos metadados existentes
export const treeNodes: TreeNode[] = modulesMetadata
  .filter(m => !m.isInfrastructure)
  .map(m => ({
    id: m.code,
    name: m.title,
    category: m.category,
    status: 'ativo', // Status simulado
    guardian: guardianMap[m.code] || 'Coletivo',
  }));

// Gerar links de exemplo baseados no conhecimento da arquitetura
export const treeLinks: TreeLink[] = [
  { source: 'M-OMEGA', target: 'M9', type: 'influencia' },
  { source: 'M9', target: 'M1', type: 'dependencia' },
  { source: 'M9', target: 'M2', type: 'dependencia' },
  { source: 'M144', target: 'M72', type: 'heranca' },
  { source: 'M600', target: 'M72', type: 'influencia' },
  { source: 'M29', target: 'M-OMEGA', type: 'heranca' },
  { source: 'M72', target: 'M-OMEGA', type: 'dependencia' },
  { source: 'M303', target: 'M22', type: 'dependencia' },
  { source: 'M303', target: 'M85', type: 'influencia' },
  { source: 'M85', target: 'M86', type: 'heranca' },
  { source: 'M86', target: 'M87', type: 'heranca' },
];