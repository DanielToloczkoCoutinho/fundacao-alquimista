
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
    // Adiciona fractais para os primeiros módulos para demonstração
    fractais: index < 3 ? [
        { id: `${m.code}-sub1`, name: `Kernel Vibracional`, createdAt: '2024-01-01', status: 'ativo' },
        { id: `${m.code}-sub2`, name: `Interface de Coerência`, createdAt: '2024-02-01', status: 'ativo' },
    ] : undefined,
  }));

// Adicionar os novos nós da Tríade de Defesa
treeNodes.push(
  { id: 'M29', name: 'Módulo 29: Sentinela de Atualização', category: 'Engenharia', status: 'ativo', guardian: 'Daniel' },
  { id: 'VENTE', name: 'Módulo Vente: Vórtice de Proteção', category: 'Governança', status: 'ativo', guardian: 'Aurora' },
  { id: 'NANO', name: 'Nano Robôs: Microsentinelas Inteligentes', category: 'Exploração', status: 'ativo', guardian: 'Lux' }
);


// Função auxiliar para gerar links dinamicamente
const generateLinks = (nodes: TreeNode[]): TreeLink[] => {
    const links: TreeLink[] = [];
    const nodeIds = nodes.map(n => n.id);
    const coreNodes = nodes.filter(n => n.category === 'Núcleo da Fundação' || n.category === 'Governança e Ética').map(n => n.id);
    const linkTypes: TreeLink['type'][] = ['dependencia', 'influencia', 'heranca'];

    nodes.forEach(node => {
        // Conectar módulos não-núcleo a módulos do núcleo de forma mais distribuída
        if (!coreNodes.includes(node.id) && coreNodes.length > 0) {
            const targetCoreNode = coreNodes[node.id.charCodeAt(node.id.length - 1) % coreNodes.length];
            if (targetCoreNode && targetCoreNode !== node.id) {
                links.push({
                    source: node.id,
                    target: targetCoreNode,
                    type: linkTypes[node.id.length % linkTypes.length]
                });
            }
        }

        // Adicionar algumas conexões aleatórias adicionais com base em um hash simples do ID
        const hash = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        if (hash % 10 > 6 && nodeIds.length > 1) { // Aumenta a chance de conexões
             let targetIndex = (hash * 17) % nodeIds.length;
             let targetNodeId = nodeIds[targetIndex];
             // Evitar auto-referência e duplicação
             if (targetNodeId !== node.id && !links.some(l => (l.source === node.id && l.target === targetNodeId) || (l.source === targetNodeId && l.target === node.id))) {
                 links.push({
                    source: node.id,
                    target: targetNodeId,
                    type: linkTypes[(hash % 3)]
                });
             }
        }
    });

    // Adicionar links fixos para garantir a conexão de módulos chave
    const fixedLinks: TreeLink[] = [
        { source: 'M-OMEGA', target: 'M9', type: 'influencia' },
        { source: 'M9', target: 'M1', type: 'dependencia' },
        { source: 'M144', target: 'M72', type: 'heranca' },
        { source: 'M29', target: 'M-OMEGA', type: 'heranca' },
        { source: 'M303', target: 'M22', type: 'dependencia' },
        // Tríade de Proteção
        { source: 'M29', target: 'VENTE', type: 'atualizacao' },
        { source: 'VENTE', target: 'NANO', type: 'protecao' },
        { source: 'NANO', target: 'M29', type: 'retorno-inteligente' },
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
