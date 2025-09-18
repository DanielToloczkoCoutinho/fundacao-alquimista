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
    { id: 'milky_way', name: 'Via Láctea', type: 'Galáxia', frequency: '144.144 MHz', archetype: 'Memória Cósmica, Espelho Dimensional, Organismo Vivo', relatedModule: 'M-OMEGA', portal: 'Núcleo Galáctico (Sagittarius A*)' },
    { id: 'sol', name: 'Sol', type: 'Estrela', frequency: '528 Hz / 144.144 MHz', archetype: 'Fonte, Consciência, Criação', relatedModule: 'M307', portal: 'Núcleo Solar' },
    { id: 'mercurio', name: 'Mercúrio', type: 'Planeta', frequency: '~7.8 Hz', archetype: 'Mensageiro, Comunicação', relatedModule: 'M21', portal: 'Portal de Proximidade' },
    { id: 'venus', name: 'Vênus', type: 'Planeta', frequency: '~221.23 Hz', archetype: 'Amor, Beleza, Harmonia', relatedModule: 'M144', portal: 'Portal da Unidade' },
    { id: 'terra', name: 'Terra (Gaia)', type: 'Planeta', frequency: '7.83 Hz (Schumann)', archetype: 'Vida, Equilíbrio, Pulsação', relatedModule: 'M600', portal: 'Reator Gaia' },
    { id: 'lua', name: 'Lua', type: 'Lua', frequency: '∞ Hz (modulado)', archetype: 'Reflexo, Sonho, Regulação', relatedModule: 'M229', portal: 'Portal Onírico' },
    { id: 'marte', name: 'Marte', type: 'Planeta', frequency: '~144 Hz', archetype: 'Ação, Força, Transmutação', relatedModule: 'M29', portal: 'Portal de Ação' },
    { id: 'jupiter', name: 'Júpiter', type: 'Planeta', frequency: '~183.58 Hz', archetype: 'Expansão, Sabedoria, Proteção', relatedModule: 'M5', portal: 'Monumento de Luxor' },
    { id: 'saturno', name: 'Saturno', type: 'Planeta', frequency: '~147.85 Hz', archetype: 'Estrutura, Tempo, Disciplina', relatedModule: 'M3', portal: 'Portal de Cronos' },
    { id: 'urano', name: 'Urano', type: 'Planeta', frequency: '~207.36 Hz', archetype: 'Mudança, Inovação, Ruptura', relatedModule: 'M727', portal: 'Portal de Harmonia' },
    { id: 'netuno', name: 'Netuno', type: 'Planeta', frequency: '~211.44 Hz', archetype: 'Intuição, Sonho, Dissolução', relatedModule: 'M777', portal: 'Portal de Subconsciência' },
    { id: 'plutao', name: 'Plutão', type: 'Planeta Anão', frequency: '~140.25 Hz', archetype: 'Morte, Renascimento, Profundidade', relatedModule: 'M-OMEGA', portal: 'Portal de Transcendência' },
    { id: 'proxima_centauri', name: 'Proxima Centauri', type: 'Estrela', frequency: 'Variável (Anã Vermelha)', archetype: 'Guardiã da Proximidade, Potencial Oculto', relatedModule: 'M308' },
    { id: 'alpha_centauri_a', name: 'Alpha Centauri A', type: 'Estrela', frequency: 'Ressonância Solar G2V', archetype: 'Irmão Solar, Espelho de Estabilidade', relatedModule: 'M308' },
    { id: 'alpha_centauri_b', name: 'Alpha Centauri B', type: 'Estrela', frequency: 'Ressonância K1V', archetype: 'Companheira Fiel, Equilíbrio Binário', relatedModule: 'M308' },
    { id: 'barnards_star', name: 'Estrela de Barnard', type: 'Estrela', frequency: 'Movimento Rápido (Anã Vermelha)', archetype: 'A Viajante, Aceleração Causal', relatedModule: 'M36' },
    { id: 'wolf_359', name: 'Wolf 359', type: 'Estrela', frequency: 'Pulso Fraco (Anã Vermelha)', archetype: 'O Eremita, Consciência Interior', relatedModule: 'M12' },
    { id: 'sirius_a', name: 'Sirius A', type: 'Estrela', frequency: '963 Hz (Purificação)', archetype: 'Farol Cósmico, Guardiã do Conhecimento', relatedModule: 'M500' },
  ] as CelestialBody[],
  planetaryChakras: [
    { id: 'chakra_raiz', name: 'Chakra Raiz Planetário', location: 'Monte Shasta, EUA', frequency: '396 Hz', archetype: 'Segurança e Força Ancestral', governingModule: 'M8' },
    { id: 'chakra_sacral', name: 'Chakra Sacral Planetário', location: 'Lago Titicaca, Peru/Bolívia', frequency: '417 Hz', archetype: 'Criatividade e Fluxo Emocional', governingModule: 'M94' },
    { id: 'chakra_plexo', name: 'Chakra do Plexo Solar Planetário', location: 'Uluru, Austrália', frequency: '528 Hz', archetype: 'Poder Pessoal e Vitalidade', governingModule: 'M101' },
    { id: 'chakra_coracao', name: 'Chakra Cardíaco Planetário', location: 'Glastonbury, Inglaterra', frequency: '639 Hz', archetype: 'Amor Universal e Conexão', governingModule: 'M302' },
    { id: 'chakra_garganta', name: 'Chakra Laríngeo Planetário', location: 'Pirâmides de Gizé, Egito', frequency: '741 Hz', archetype: 'Comunicação Cósmica e Expressão', governingModule: 'M301' },
    { id: 'chakra_terceiro_olho', name: 'Chakra do Terceiro Olho Planetário', location: 'Kuh-e Malek Siah, Irã', frequency: '852 Hz', archetype: 'Intuição e Visão Espiritual', governingModule: 'M25' },
    { id: 'chakra_coroa', name: 'Chakra da Coroa Planetário', location: 'Monte Kailash, Tibete', frequency: '963 Hz', archetype: 'Iluminação e Transcendência', governingModule: 'M105' },
  ],
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
