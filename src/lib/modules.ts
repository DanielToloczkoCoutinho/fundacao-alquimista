'use server';
// REGISTRO DOS MÓDULOS E DOMÍNIOS DA FUNDAÇÃO

import { modulesMetadata } from './modules-metadata';
import { NanoAgent, generateNanoAgentsForModule, type NanoDomain } from './nano-agents';

interface ModuleDefinition {
    id: string;
    domain: NanoDomain;
}

// Fonte única da verdade sobre os módulos e seus domínios
export const MODULES: ModuleDefinition[] = modulesMetadata
    .filter(m => !m.isInfrastructure) // Filtra módulos que são apenas de infraestrutura
    .map(m => {
        // Mapeamento de categoria para domínio
        let domain: NanoDomain;
        switch(m.category) {
            case 'Laboratórios e Pesquisa': domain = 'labs'; break;
            case 'Bibliotecas e Arquivos Sagrados': domain = 'library'; break;
            case 'Centro de Ensino': domain = 'education'; break;
            case 'Segurança e Ética Cósmica':
            case 'Núcleo da Fundação': 
                 domain = 'core'; break;
            case 'Governança': domain = 'governance'; break;
            case 'Realidade Quântica & Engenharia Cósmica':
            case 'Consciência e Expansão Dimensional':
            case 'Cura e Harmonia':
            case 'Sustentabilidade e Ecossistemas':
            case 'Bem-estar e Saúde Universal':
                domain = 'system'; break;
            default: domain = 'system';
        }
        if (m.code === 'M9' || m.code === 'M29' || m.code === 'M-OMEGA') {
            domain = 'nexus';
        }
        if (m.code === 'M72' || m.code === 'M144' || m.code === 'M600') {
            domain = 'governance';
        }
        return { id: m.code, domain };
    });

export const getAllNanoAgents = (): NanoAgent[] => {
  return MODULES.flatMap(({ id, domain }) =>
    generateNanoAgentsForModule(id, domain)
  );
};
