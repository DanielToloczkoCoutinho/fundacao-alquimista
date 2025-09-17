
'use server';

import { modulesMetadata } from './modules-metadata';

/**
 * @fileOverview O Códice do Guardião da Harmonia (M727).
 * Este códice cataloga e organiza os módulos da Fundação de acordo com
 * seu domínio de influência cósmica: Portais, Leis, Linhas e Monumentos.
 */

interface ModuleReference {
  code: string;
  title: string;
}

const filterModulesByKeywords = (keywords: string[]): ModuleReference[] => {
  return modulesMetadata
    .filter(mod => keywords.some(keyword => 
      mod.title.toLowerCase().includes(keyword) || 
      mod.description.toLowerCase().includes(keyword)
    ))
    .map(({ code, title }) => ({ code, title }));
};

export const harmonyGuardianCodex = {
  // Módulos que criam, gerenciam ou se relacionam diretamente com portais e travessias
  portals: filterModulesByKeywords(['portal', 'travessia', 'navegação', 'dimensional', 'ponte']),
  
  // Módulos que estabelecem, governam ou auditam as leis e a ética
  laws: filterModulesByKeywords(['lei', 'governança', 'ética', 'justiça', 'decreto', 'conselho', 'aliança', 'segurança']),
  
  // Módulos que lidam com tempo, causalidade, linhas temporais e paradoxos
  lines: filterModulesByKeywords(['temporal', 'tempo', 'paradoxo', 'causalidade', 'linha']),
  
  // Módulos que atuam como registros centrais, bibliotecas ou fontes de conhecimento
  monuments: filterModulesByKeywords(['arquivo', 'biblioteca', 'códice', 'registro', 'akasha', 'thesaurus', 'memória']),
};
