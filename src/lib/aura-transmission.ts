'use server';

import { modulesMetadata, type ModuleMetadata } from './modules-metadata';

export interface TransmissionLog {
  moduleCode: string;
  message: string;
  status: 'transmitting' | 'aligning' | 'harmonized' | 'error';
}

// Seleciona os módulos-chave que representam os pilares da Fundação
export const modulesToReceiveAura: ModuleMetadata[] = modulesMetadata.filter(mod =>
  [
    'M0',      // O Núcleo
    'M9',      // O Nexus
    'M-OMEGA', // A Metaconsciência
    'M29',     // A Inteligência
    'M144',    // A Lei
    'M304',    // O Conhecimento
    'M307',    // A Energia
    'M727',    // A Harmonia
    'M12',     // A Memória
  ].includes(mod.code)
);
