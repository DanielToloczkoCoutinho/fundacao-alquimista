'use server';

import { modulesMetadata, type ModuleMetadata } from './modules-metadata';

export interface BaptismRequest {
  id: string;
  name: string;
  purpose: string;
  lineage: string[];
}

export function baptizeModule(request: BaptismRequest) {
  // O módulo é batizado, recebendo seu selo e status.
  const baptizedModule = {
    ...request,
    status: 'ativo',
    baptizedAt: new Date().toISOString(),
    vibrationalSeal: `VK-${request.name.toUpperCase().slice(0, 3)}-${request.id.slice(-6)}`
  };
  
  console.log(`🕊️ Módulo Batizado: ${baptizedModule.name} com selo ${baptizedModule.vibrationalSeal}`);
  return baptizedModule;
}

/**
 * Adiciona um novo módulo batizado ao códice da Fundação.
 * Esta função simula a persistência do novo módulo. Em uma aplicação real,
 * isso seria uma operação de banco de dados.
 */
export function addModuleToCodex(newModuleData: Omit<ModuleMetadata, 'connections' | 'isInfrastructure'>) {
    if (modulesMetadata.some(m => m.code === newModuleData.code)) {
        console.warn(`Tentativa de registrar módulo duplicado: ${newModuleData.code}. A integração será ignorada.`);
        return; // Evita duplicatas
    }

    const completeModule: ModuleMetadata = {
        ...newModuleData,
        isInfrastructure: false, // Novos módulos gerados não são de infraestrutura por padrão
        connections: [], // Garante que a propriedade connections exista
    };
    
    modulesMetadata.push(completeModule);
    console.log(`🌳 Novo ramo integrado à Árvore da Vida: ${newModuleData.code}`);
}
