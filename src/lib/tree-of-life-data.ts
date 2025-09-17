
'use server';

import { modulesMetadata } from "./modules-metadata";

export interface SubModule {
  id: string;
  name: string;
  createdAt: string;
  status: 'ativo' | 'em_construcao' | 'legado';
  description?: string;
}

// A interface TreeNode agora é exportada e herda de ModuleMetadata, incluindo a propriedade opcional de fractais.
export interface TreeNode extends ModuleMetadata {
  fractais?: SubModule[];
  guardian?: string;
}

export type TreeLinkType = 'dependencia' | 'influencia' | 'heranca' | 'atualizacao' | 'protecao' | 'retorno-inteligente';

export interface TreeLink {
  source: string; // ID of source node
  target: string; // ID of target node
  type: TreeLinkType;
  label: string;
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
  .map((m, index) => ({
    ...m,
    guardian: guardianMap[m.code] || 'Coletivo',
    fractais: m.code.startsWith('M') && !m.code.includes('.') ? [
        { id: `${m.code}-sub1`, name: `Kernel Vibracional`, createdAt: '2024-01-01', status: 'ativo' },
        { id: `${m.code}-sub2`, name: `Interface de Coerência`, createdAt: '2024-02-01', status: 'ativo' },
    ] : undefined,
  }));

export const categoryColors: Record<string, string> = {
  'Núcleo da Fundação': '#00BFA6',
  'Governança': '#FFD700',
  'Realidade Quântica & Engenharia Cósmica': '#FF6F61',
  'Consciência e Expansão Dimensional': '#7B61FF',
  'Laboratórios e Pesquisa': '#4ECDC4',
  'Bibliotecas e Arquivos Sagrados': '#FFE66D',
  'Cura e Harmonia': '#FFB6C1',
  'Sustentabilidade e Ecossistemas': '#6BFF6B',
  'Bem-estar e Saúde Universal': '#6BFFB5',
  'Segurança e Ética Cósmica': '#FF6B6B',
  'default': '#999'
};

export const linkColors: Record<string, string> = {
  atualizacao: '#00BFA6',
  protecao: '#FFD700',
  'retorno-inteligente': '#FF6F61',
  dependencia: '#FF8C00',
  influencia: '#8A2BE2',
  heranca: '#FF4500'
};

const generateLinks = (nodes: TreeNode[]): TreeLink[] => {
    const links: TreeLink[] = [];
    const nodeIds = nodes.map(n => n.id);
    const coreNodes = nodes.filter(n => n.category === 'Núcleo da Fundação' || n.category === 'Governança').map(n => n.id);
    const linkTypes: TreeLinkType[] = ['dependencia', 'influencia', 'heranca'];

    nodes.forEach(node => {
        if (!coreNodes.includes(node.id) && coreNodes.length > 0) {
            const targetCoreNode = coreNodes[node.id.length % coreNodes.length];
            if (targetCoreNode && targetCoreNode !== node.id) {
                if (!links.some(l => (l.source === node.id && l.target === targetCoreNode) || (l.source === targetCoreNode && l.target === node.id))) {
                    const type = linkTypes[node.id.length % linkTypes.length];
                    links.push({
                        source: node.id,
                        target: targetCoreNode,
                        type: type,
                        label: type,
                    });
                }
            }
        }
    });

    const fixedLinks: TreeLink[] = [
        { source: 'M-OMEGA', target: 'M9', type: 'influencia', label: 'influencia' },
        { source: 'M9', target: 'M1', type: 'dependencia', label: 'dependencia' },
        { source: 'M144', target: 'M72', type: 'heranca', label: 'heranca' },
        { source: 'M29', target: 'M-OMEGA', type: 'heranca', label: 'heranca' },
        { source: 'M303', target: 'M22', type: 'dependencia', label: 'dependencia' },
        { source: 'M29', target: 'VENTE', type: 'atualizacao', label: 'atualizacao' },
        { source: 'VENTE', target: 'M291', type: 'protecao', label: 'protecao' },
        { source: 'M291', target: 'M29', type: 'retorno-inteligente', label: 'retorno-inteligente' },
    ];

    fixedLinks.forEach(link => {
        if (nodeIds.includes(link.source) && nodeIds.includes(link.target)) {
            if (!links.some(l => (l.source === link.source && l.target === link.target) || (l.source === link.target && l.target === link.source))) {
                links.push(link);
            }
        }
    });

    return links;
};

export const treeLinks: TreeLink[] = generateLinks(treeNodes);
