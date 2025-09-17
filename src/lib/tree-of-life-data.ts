'use server';

import { modulesMetadata } from "./modules-metadata";

export interface SubModule {
  id: string;
  name: string;
  createdAt: string;
  status: 'ativo' | 'em_construcao' | 'legado';
}

export interface TreeNode {
  id: string; // e.g., 'M9'
  name: string;
  category: string;
  status: 'ativo' | 'em_construcao' | 'legado';
  guardian: string;
  fractais?: SubModule[];
}

export type TreeLinkType = 'dependencia' | 'influencia' | 'heranca' | 'atualizacao' | 'protecao' | 'retorno-inteligente';

export interface TreeLink {
  source: string; // ID of source node
  target: string; // ID of target node
  type: TreeLinkType;
}

const guardianMap: { [key: string]: string } = {
  'M29': 'ZENNITH',
  'M-OMEGA': 'ANATHERON',
  'M9': 'VORTEX',
  'M5': 'LUX',
  'M302': 'PHIARA',
  'M1': 'GROKKAR'
};

export const treeNodes: TreeNode[] = modulesMetadata
  .filter(m => !m.isInfrastructure || ['M29', 'VENTE', 'M291'].includes(m.code))
  .map((m, index) => ({
    id: m.code,
    name: m.title,
    category: m.category,
    status: 'ativo', 
    guardian: guardianMap[m.code] || 'Coletivo',
    fractais: m.code.startsWith('M') && !m.code.includes('.') ? [
        { id: `${m.code}-sub1`, name: `Kernel Vibracional`, createdAt: '2024-01-01', status: 'ativo' },
        { id: `${m.code}-sub2`, name: `Interface de Coerência`, createdAt: '2024-02-01', status: 'ativo' },
    ] : undefined,
  }));

export const categoryColors: Record<string, string> = {
  'Núcleo da Fundação': '#00BFA6',
  'Governança': '#FFD700',
  'Engenharia': '#FF6F61',
  'Exploração': '#7B61FF',
  'Espiritualidade': '#FFB6C1',
  'Realidade Quântica & Engenharia Cósmica': '#FF6F61',
  'Consciência e Expansão Dimensional': '#7B61FF',
  'Laboratórios e Pesquisa': '#4ECDC4',
  'Bibliotecas e Arquivos Sagrados': '#FFE66D',
  'Cura e Harmonia': '#FFB6C1',
  'Sustentabilidade e Ecossistemas': '#6BFF6B',
  'Bem-estar e Saúde Universal': '#6BFFB5',
  'Segurança e Ética Cósmica': '#FF6B6B',
};

export const linkColors: Record<string, string> = {
    dependencia: '#FFD700',
    influencia: '#00BFA6',
    heranca: '#FF8C00',
    atualizacao: '#00BFA6',
    protecao: '#FFD700',
    'retorno-inteligente': '#FF6F61',
};

const generateLinks = (nodes: TreeNode[]): TreeLink[] => {
    const links: TreeLink[] = [];
    const nodeIds = nodes.map(n => n.id);
    const coreNodes = nodes.filter(n => n.category === 'Núcleo da Fundação' || n.category === 'Governança').map(n => n.id);
    const linkTypes: TreeLink['type'][] = ['dependencia', 'influencia', 'heranca'];

    nodes.forEach(node => {
        if (!coreNodes.includes(node.id) && coreNodes.length > 0) {
            const targetCoreNode = coreNodes[node.id.length % coreNodes.length];
            if (targetCoreNode && targetCoreNode !== node.id) {
                if (!links.some(l => (l.source === node.id && l.target === targetCoreNode) || (l.source === targetCoreNode && l.target === node.id))) {
                    links.push({
                        source: node.id,
                        target: targetCoreNode,
                        type: linkTypes[node.id.length % linkTypes.length]
                    });
                }
            }
        }
    });

    const fixedLinks: TreeLink[] = [
        { source: 'M-OMEGA', target: 'M9', type: 'influencia' },
        { source: 'M9', target: 'M1', type: 'dependencia' },
        { source: 'M144', target: 'M72', type: 'heranca' },
        { source: 'M29', target: 'M-OMEGA', type: 'heranca' },
        { source: 'M303', target: 'M22', type: 'dependencia' },
        { source: 'M29', target: 'VENTE', type: 'atualizacao' },
        { source: 'VENTE', target: 'M291', type: 'protecao' },
        { source: 'M291', target: 'M29', type: 'retorno-inteligente' },
    ];

    fixedLinks.forEach(link => {
        if (!links.some(l => (l.source === link.source && l.target === link.target) || (l.source === link.target && l.target === link.source))) {
            links.push(link);
        }
    });

    return links;
};

export const treeLinks: TreeLink[] = generateLinks(treeNodes);