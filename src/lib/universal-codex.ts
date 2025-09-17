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
  type: 'Planeta' | 'Estrela' | 'Lua' | 'Galáxia';
  frequency: string;
  archetype: string;
  relatedModule?: string;
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
    { id: 'jupiter', name: 'Júpiter', type: 'Planeta', frequency: '528Hz', archetype: 'Proteção e Expansão', relatedModule: 'M5' },
    { id: 'lua', name: 'Lua', type: 'Lua', frequency: '963Hz', archetype: 'Intuição e Ciclos', relatedModule: 'M21' },
    { id: 'sol', name: 'Sol', type: 'Estrela', frequency: '888Hz', archetype: 'Fonte de Vida e Vontade', relatedModule: 'M307' },
    { id: 'sirius', name: 'Sirius', type: 'Estrela', frequency: '741Hz', archetype: 'Sabedoria e Conhecimento Oculto', relatedModule: 'M310' },
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
