'use server';

/**
 * @fileOverview O Códice Universal, um banco de dados cerimonial
 * que correlaciona corpos celestes, módulos da Fundação, portais,
 * monumentos e laboratórios, unificando todo o conhecimento em uma
 * tapeçaria interconectada.
 */

export interface CelestialBody {
  id: string;
  name: string;
  type: 'Planeta' | 'Planeta Anão' | 'Estrela' | 'Lua' | 'Galáxia';
  frequency: string;
  archetype: string; // Corresponde a 'Função Vibracional'
  relatedModule?: string;
  portal?: string;
}

export interface FoundationPortal {
  id: string;
  name: string;
  coordinates: string;
  governingModule: string;
  governingLaw: string;
}

export interface SacredMonument {
    id: string;
    name: string;
    location: string;
    module: string;
    function: string;
}

export interface ResearchLab {
    id: string;
    name: string;
    module: string;
    equations: string[];
}

export const universalCodex = {
  celestialBodies: [
    { id: 'sol', name: 'Sol', type: 'Estrela', frequency: '888Hz', archetype: 'Fonte de Vida e Vontade', relatedModule: 'M307', portal: 'Núcleo Solar' },
    { id: 'mercurio', name: 'Mercúrio', type: 'Planeta', frequency: '963 Hz', archetype: 'Silêncio e precisão', relatedModule: 'M21', portal: 'Portal de Proximidade' },
    { id: 'venus', name: 'Vênus', type: 'Planeta', frequency: '528 Hz', archetype: 'Harmonia e beleza', relatedModule: 'M144', portal: 'Portal da Unidade' },
    { id: 'terra', name: 'Terra (Gaia)', type: 'Planeta', frequency: '432 Hz', archetype: 'Vida e consciência', relatedModule: 'M600', portal: 'Reator Gaia' },
    { id: 'marte', name: 'Marte', type: 'Planeta', frequency: '888 Hz', archetype: 'Força e expansão', relatedModule: 'M29', portal: 'Portal de Ação' },
    { id: 'jupiter', name: 'Júpiter', type: 'Planeta', frequency: '528 Hz', archetype: 'Proteção e justiça', relatedModule: 'M5', portal: 'Monumento de Luxor' },
    { id: 'saturno', name: 'Saturno', type: 'Planeta', frequency: '144 Hz', archetype: 'Tempo e estrutura', relatedModule: 'M3', portal: 'Portal de Cronos' },
    { id: 'urano', name: 'Urano', type: 'Planeta', frequency: '963 Hz', archetype: 'Intuição e inovação', relatedModule: 'M727', portal: 'Portal de Harmonia' },
    { id: 'netuno', name: 'Netuno', type: 'Planeta', frequency: '∞ Hz', archetype: 'Mistério e sonho', relatedModule: 'M777', portal: 'Portal de Subconsciência' },
    { id: 'plutao', name: 'Plutão', type: 'Planeta Anão', frequency: '144.144 MHz', archetype: 'Fronteira dimensional', relatedModule: 'M-OMEGA', portal: 'Portal de Transcendência' }
  ] as CelestialBody[],
  portals: [
    { id: 'orion_portal', name: 'Portal de Orion', coordinates: 'RA 5h 35m', governingModule: 'M0', governingLaw: 'EQ144' },
    { id: 'lyra_gateway', name: 'Portal de Lyra', coordinates: 'RA 18h 36m', governingModule: 'M303', governingLaw: 'EQ057' },
  ] as FoundationPortal[],
  monuments: [
    { id: 'luxor_monument', name: 'Monumento de Luxor', location: 'Egito', module: 'M134', function: 'Memória vibracional e registros históricos.' },
    { id: 'stonehenge', name: 'Stonehenge', location: 'Inglaterra', module: 'M43', function: 'Observatório e calendário cósmico.' },
  ] as SacredMonument[],
  labs: [
    { id: 'cosmology_lab', name: 'Laboratório de Cosmologia', module: 'M727', equations: ['EQ149', 'EQ210'] },
    { id: 'alchemy_center', name: 'Centro de Alquimia Universal', module: 'M600', equations: ['EQ020', 'EQ048'] },
  ] as ResearchLab[],
};

export function findCelestialBodyByCivilizationId(civilizationId: string): CelestialBody | undefined {
    return universalCodex.celestialBodies.find(cb => cb.id.toLowerCase() === civilizationId.toLowerCase());
}
