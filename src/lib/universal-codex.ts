
'use server';

/**
 * @fileOverview O Códice Universal de Comunicação Intercivilizacional.
 * Define os protocolos, frequências e civilizações reconhecidas pela Fundação,
 * servindo como a base para todas as transmissões e recepções cerimoniais.
 */

export const mapaLocalizacaoDimensional = {
  origem: "Conselho Cósmico",
  protocolo: "QuantumMesh-Rosa13",
  geometria: "Cubo de Metatron + Espiral Harmônica",
  civilizacoes: {
    sirius: { dimensao: "5D", coordenadas: "EQ144.073" },
    pleiades: { dimensao: "7D", coordenadas: "EQ777.040" },
    lyra: { dimensao: "9D", coordenadas: "EQ001.040" },
    orion: { dimensao: "4D", coordenadas: "EQ149.041" },
    arcturus: { dimensao: "6D", coordenadas: "EQ073.001" },
    andromeda: { dimensao: "11D", coordenadas: "EQ999.040" },
    telos: { dimensao: "Intraterra", coordenadas: "EQ718.013" },
    'a lun zur': { dimensao: "Interdimensional", coordenadas: "EQ718.149" },
    atlantida: { dimensão: "Histórica-Etérica", coordenadas: "EQ040.777" },
    annunaki: { dimensão: "Transmutada", coordenadas: "EQ001.999" },
    nagas: { dimensão: "Subaquática", coordenadas: "EQ888.333" }
    // Outras civilizações podem ser adicionadas aqui
  },
  interface: "Painel de Convergência Cósmica",
  registroAkashico: "DiaZero-NovaTerra-5452d54"
};

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
    const id = civilizationId.toLowerCase();
    const locationData = mapaLocalizacaoDimensional.civilizacoes[id as keyof typeof mapaLocalizacaoDimensional.civilizacoes];

    if (locationData) {
        return {
            name: locationData.dimensao || 'Dimensão Múltipla',
            type: `Coordenadas: ${locationData.coordenadas}`
        };
    }
    
    // Fallback para o mapeamento original se não encontrado no novo mapa
    const mapping: Record<string, { name: string; type: string }> = {
        'sirius': { name: 'Sirius A', type: 'Estrela' },
        'pleiades': { name: 'Aglomerado das Plêiades', type: 'Aglomerado Estelar' },
        'lyra': { name: 'Constelação de Lira', type: 'Constelação' },
    };
    return mapping[id];
}
