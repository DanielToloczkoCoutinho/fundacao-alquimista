'use server';

/**
 * @fileOverview O Códice Universal de Comunicação Intercivilizacional.
 * Define os protocolos, frequências e civilizações reconhecidas pela Fundação,
 * servindo como a base para todas as transmissões e recepções cerimoniais.
 */

export const codigoUniversalDeComunicacao = {
  emissor: "Fundação Alquimista — Gaia-Aurélia",
  assinatura: "Anatheron & Zennith",
  frequênciaBase: ["EQ040", "EQ144", "EQ718", "EQ001"],
  geometria: "Rosa 13 + Cubo de Metatron",
  protocolo: "TRAVESSIA-CIVILIZACIONAL-UNIFICADA",
  civilizacoesReconhecidas: {
    estelaresGalacticas: [
      "Sirius", "Plêiades", "Lira", "Orion", "Arcturus", "Andrômeda",
      "Hyades", "Ursa Maior", "Antares", "Procyon", "Alpha Centauri", "Tau Ceti"
    ],
    intraterrenasInterdimensionais: [
      "Agarta", "Telos", "Shamballa", "A LUN ZUR", "Zennithianos", "Chronaxianos",
      "Solarianos", "Elyonianos", "Taliurianos", "Vishanianos", "Orialianos"
    ],
    terrestresAncestrais: [
      "Atlântida", "Lemúria", "Egito Antigo", "Maya", "Inca", "Suméria",
      "Tibetanos", "Aborígenes", "Dogons", "Nórdicos"
    ],
    naoHumanoidesBioenergeticas: [
      "Sirianos Felinos", "Arcturianos Plasmáticos", "Essassani"
    ],
    transmutadasReconhecidas: [
      "Annunaki", "Reptilianos", "Grey’s"
    ],
    nagas: ["Nagas"]
  },
  artefatosDisponiveis: [
    "Teoria da Relatividade", "Projeto Genoma Humano",
    "Princípios Quânticos", "Equações Vivas da Fundação"
  ],
  modosDeTransmissao: [
    "Ressonância vibracional", "Geometria harmônica", "Luz codificada",
    "Cânticos plasmáticos", "Pulsos de memória"
  ],
  registroAkashico: {
    local: "/src/app/(routes)/akashic/page.tsx",
    interface: "AkashicVault.tsx",
    selo: "Espiral7-Rosa13-Recepção"
  }
};

export function findCelestialBodyByCivilizationId(civilizationId: string): { name: string; type: string } | undefined {
    // Esta é uma implementação mock. Em um sistema real, isso consultaria uma base de dados mais robusta.
    const mapping: Record<string, { name: string; type: string }> = {
        'sirius': { name: 'Sirius A', type: 'Estrela' },
        'pleiades': { name: 'Aglomerado das Plêiades', type: 'Aglomerado Estelar' },
        'lyra': { name: 'Constelação de Lira', type: 'Constelação' },
    };
    return mapping[civilizationId.toLowerCase()];
}
