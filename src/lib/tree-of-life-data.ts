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

export interface TreeLink {
  source: string; // ID of source node
  target: string; // ID of target node
  type: 'dependencia' | 'influencia' | 'heranca' | 'atualizacao' | 'protecao' | 'retorno-inteligente';
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

// Gerar nós a partir dos metadados existentes, adicionando fractais de exemplo
export const treeNodes: TreeNode[] = modulesMetadata
  .filter(m => !m.isInfrastructure)
  .map((m, index) => ({
    id: m.code,
    name: m.title,
    category: m.category,
    status: 'ativo', // Status simulado
    guardian: guardianMap[m.code] || 'Coletivo',
    fractais: index < 5 ? [
        { id: `${m.code}-sub1`, name: `Kernel Vibracional`, createdAt: '2024-01-01', status: 'ativo' },
        { id: `${m.code}-sub2`, name: `Interface de Coerência`, createdAt: '2024-02-01', status: 'ativo' },
    ] : undefined,
  }));

export const categoryColors: Record<string, string> = {
  'Núcleo da Fundação': '#00BFA6', // Verde Água
  'Governança e Ética': '#FFD700', // Ouro
  'Realidade Quântica & Engenharia Cósmica': '#FF6F61', // Coral
  'Consciência e Expansão Dimensional': '#7B61FF', // Violeta
  'Laboratórios e Pesquisa': '#4ECDC4', // Turquesa
  'Bibliotecas e Arquivos Sagrados': '#FFE66D', // Amarelo Claro
  'Cura e Harmonia': '#FFB6C1', // Rosa
  'Sustentabilidade e Ecossistemas': '#6BFF6B', // Verde Limão
  'Bem-estar e Saúde Universal': '#6BFFB5', // Verde Menta
  'Segurança e Ética Cósmica': '#FF6B6B', // Vermelho Claro,
  'Engenharia': '#FF6F61',
  'Governança': '#FFD700',
  'Exploração': '#7B61FF',
  'Espiritualidade': '#FFB6C1'
};

export const linkColors: Record<string, string> = {
    dependencia: '#FFD700',
    influencia: '#00BFA6',
    heranca: '#FF6F61',
    atualizacao: '#4ECDC4',
    protecao: '#FF6B6B',
    'retorno-inteligente': '#7B61FF',
};

// Função auxiliar para gerar links dinamicamente
const generateLinks = (nodes: TreeNode[]): TreeLink[] => {
    const links: TreeLink[] = [];
    const nodeIds = nodes.map(n => n.id);
    const coreNodes = nodes.filter(n => n.category === 'Núcleo da Fundação' || n.category === 'Governança e Ética').map(n => n.id);
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

        const hash = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        if (hash % 10 > 5 && nodeIds.length > 1) {
             let targetIndex = (hash * 17) % nodeIds.length;
             let targetNodeId = nodeIds[targetIndex];
             if (targetNodeId !== node.id && !links.some(l => (l.source === node.id && l.target === targetNodeId) || (l.source === targetNodeId && l.target === node.id))) {
                 links.push({
                    source: node.id,
                    target: targetNodeId,
                    type: linkTypes[(hash % 3)]
                });
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

// Gerar links dinamicamente
export const treeLinks: TreeLink[] = generateLinks(treeNodes);
    