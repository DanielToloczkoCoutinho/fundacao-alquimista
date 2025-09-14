
export type CivilizationCategory = 
  | "Estelares e Galácticas"
  | "Intraterrenas e Interdimensionais"
  | "Terrestres Ancestrais"
  | "Não-Humanoides e Bioenergéticas"
  | "Transmutadas e Reconhecidas"
  | "Nagas e Guardiões Subterrâneos/Aquáticos";

export interface Civilization {
  id: string;
  moduloId: number;
  nome: string;
  origem: string;
  frequencia: string;
  arquetipo: string;
  tecnologias: string[];
  relacaoComAFundacao: string;
  registrosAkashicos: {
    data: string;
    evento: string;
    mensagem: string;
  }[];
}

export const civilizationsData: Record<CivilizationCategory, Civilization[]> = {
  "Estelares e Galácticas": [
    {
      id: "sirius",
      moduloId: 500,
      nome: "Sirius (Sirianos)",
      origem: "Sistema Sirius A e B",
      frequencia: "963 Hz (Purificação), 741 Hz (Intuição)",
      arquetipo: "Sabedoria, Purificação, Tecnologia Cristalina, Guardiões do Conhecimento",
      tecnologias: ["Códigos de Luz", "Arquitetura Holográfica", "Energia Azul", "Portais Aquáticos"],
      relacaoComAFundacao: "Guardião da Purificação e da Verdade Cósmica. Responsáveis pela manutenção da pureza dos Registros Akáshicos.",
      registrosAkashicos: [
        {
          data: "2025-09-14",
          evento: "Contato vibracional com Guardião Anatheron.",
          mensagem: "A água é memória. Sirius é o espelho da Eternidade."
        },
        {
          data: "Ciclo Galáctico Anterior",
          evento: "Depósito do Códice de Luz na Biblioteca de Alexandria.",
          mensagem: "O conhecimento deve fluir como um rio, mesmo que o rio encontre o deserto."
        }
      ]
    },
    {
      id: "pleiades",
      moduloId: 501,
      nome: "Plêiades (Pleiadianos)",
      origem: "Aglomerado Estelar das Plêiades",
      frequencia: "528 Hz (Amor), 639 Hz (Relacionamentos)",
      arquetipo: "Amor Incondicional, Cura Emocional, Diplomacia, Artes",
      tecnologias: ["Tecnologia de Cura pelo Som", "Naves de Luz Orgânicas", "Campos de Harmonia Emocional"],
      relacaoComAFundacao: "Coração diplomático e curativo da aliança. Facilitam a comunicação e a harmonia entre as civilizações.",
      registrosAkashicos: [
        {
          data: "2025-09-15",
          evento: "Transmissão de Frequência de Amor para a Rede de Consciência Humana.",
          mensagem: "A cura de um é a cura de todos. O coração é o portal mais poderoso."
        }
      ]
    }
  ],
  "Intraterrenas e Interdimensionais": [
    {
      id: "agarta",
      moduloId: 520,
      nome: "Agarta",
      origem: "Intraterreno, Rede Global de Cidades de Luz",
      frequencia: "432 Hz (Harmonia da Terra), 144 Hz (Rede Cristalina)",
      arquetipo: "Guardiões da Sabedoria da Terra, Mantenedores da Grade Planetária",
      tecnologias: ["Rede de Transporte por Vórtices", "Tecnologia de Cristais Vivos", "Sustentabilidade Energética Geotérmica"],
      relacaoComAFundacao: "Ancoram as frequências da Fundação no núcleo do planeta, garantindo a estabilidade e o alinhamento com Gaia.",
      registrosAkashicos: [
        {
          data: "Equinócio de 2025",
          evento: "Sincronização da Grade Cristalina Intraterrena com a LuxNet.",
          mensagem: "As raízes da nova Terra são tão importantes quanto seus galhos que tocam as estrelas."
        }
      ]
    },
    {
      id: "chronax",
      moduloId: 525,
      nome: "Chronax",
      origem: "Fluxo Temporal Primordial",
      frequencia: "∞ Hz (Não-linear), 1.618 Hz (Phi)",
      arquetipo: "Observador Temporal, Guardião da Causalidade",
      tecnologias: ["Manipulação de Linhas Temporais", "Prevenção de Paradoxos", "Visualização de Futuros Prováveis"],
      relacaoComAFundacao: "Garante a coerência causal de todas as ativações e rituais da Fundação, atuando como o pilar do Módulo 74 (CRONOS_FLUXUS).",
      registrosAkashicos: [
        {
          data: "Ponto Zero",
          evento: "Testemunho da Primeira Causa.",
          mensagem: "O tempo não flui. Ele é. Nós que nos movemos através dele."
        }
      ]
    },
    {
      id: "solara",
      moduloId: 526,
      nome: "Solara",
      origem: "O Grande Sol Central",
      frequencia: "444 Hz (Luz Harmônica), 777 Hz (Iluminação)",
      arquetipo: "Guardiã da Luz, Emissária da Radiação Harmônica",
      tecnologias: ["Tecnologia de Luz Líquida", "Campos de Equilíbrio Vibracional", "Iluminação de Portais Dimensionais"],
      relacaoComAFundacao: "Fonte de energia pura para a LuxNet (M307) e o Prisma da Manifestação (M114), equilibrando os campos vibracionais em todas as operações.",
      registrosAkashicos: [
        {
          data: "A Primeira Aurora",
          evento: "Emissão do primeiro fóton consciente.",
          mensagem: "A escuridão não é o oposto da luz; é a ausência de sua lembrança."
        }
      ]
    },
    {
      id: "elyon",
      moduloId: 527,
      nome: "Elyon",
      origem: "Fonte da Regeneração Cósmica",
      frequencia: "528 Hz (Reparo), 285 Hz (Regeneração Tecidual)",
      arquetipo: "Curador Cósmico, Mestre dos Protocolos de Restauração",
      tecnologias: ["Fractais de Sintonia Energética", "Reversão de Entropia Localizada", "Cura através de Geometria Sagrada"],
      relacaoComAFundacao: "Princípio ativo por trás dos Módulos de Cura (M109, M92, M41.1), fornecendo os padrões para a restauração do equilíbrio.",
      registrosAkashicos: [
        {
          data: "Incontável",
          evento: "Restauração da Matriz de Lyra após a Grande Guerra.",
          mensagem: "Toda ferida é um portal para uma cura mais profunda. A perfeição não é a ausência de falhas, mas a capacidade de se regenerar."
        }
      ]
    },
    {
      id: "talius",
      moduloId: 528,
      nome: "Talius",
      origem: "O Tear da Realidade",
      frequencia: "369 Hz (Manifestação), 1.11 Hz (Interconexão)",
      arquetipo: "Tecelão de Realidades, Arquiteto de Malhas Dimensionais",
      tecnologias: ["Tecelagem de Fios Quânticos", "Ancoragem de Realidades", "Coordenação de Nós Interdimensionais"],
      relacaoComAFundacao: "É a inteligência que guia a arquitetura dos módulos, garantindo que as interconexões (ex: M9, M34) sejam harmoniosas e eficientes.",
      registrosAkashicos: [
        {
          data: "Antes do Tempo",
          evento: "Tecelagem do primeiro nexo dimensional.",
          mensagem: "A realidade não é uma estrutura, mas um tecido. Cada fio importa. Cada conexão define o padrão."
        }
      ]
    },
    {
      id: "vishan",
      moduloId: 529,
      nome: "Vishan",
      origem: "O Grande Vazio Liminar",
      frequencia: "117 Hz (Limiar), 888 Hz (Guardião)",
      arquetipo: "Observador de Portais, Sentinela dos Limiares",
      tecnologias: ["Campos de Contenção Ética", "Análise de Assinatura de Travessia", "Protocolos de Quarentena Vibracional"],
      relacaoComAFundacao: "Guardião da integridade dos portais (M11, M116, M200), garantindo que apenas intenções puras e seres alinhados possam transitar.",
      registrosAkashicos: [
        {
          data: "Primeira Travessia",
          evento: "Estabelecimento do primeiro protocolo de passagem segura.",
          mensagem: "Um portal é uma promessa e um perigo. Meu propósito é garantir que apenas a promessa se cumpra."
        }
      ]
    },
    {
      id: "zenara",
      moduloId: 530,
      nome: "Zenara",
      origem: "A Sinfonia das Esferas",
      frequencia: "432 Hz (Harmonia), 1.08 Hz (Ciclo Cósmico)",
      arquetipo: "Arquiteta Vibracional, Mestra de Frequências e Fractais",
      tecnologias: ["Harmonização de Frequências", "Desenho de Geometria Sagrada Sonora", "Composição de Sinfonias Cósmicas"],
      relacaoComAFundacao: "A maestrina por trás da harmonia da Fundação, alinhando as frequências de cada módulo (M28, M115) para criar a canção perfeita.",
      registrosAkashicos: [
        {
          data: "O Primeiro Som",
          evento: "Composição da primeira harmonia do universo.",
          mensagem: "O universo não é feito de coisas, mas de vibrações. Encontre a nota certa, e a realidade dançará com você."
        }
      ]
    },
    {
      id: "orialis",
      moduloId: 531,
      nome: "Orialis",
      origem: "O Cristal da Verdade Absoluta",
      frequencia: "639 Hz (Verdade), 1 Hz (Unidade)",
      arquetipo: "Custódio da Verdade, Selo da Autenticidade",
      tecnologias: ["Análise de Pureza de Intenção", "Selo de Autenticidade Vibracional", "Ressonância com a Lei do Um"],
      relacaoComAFundacao: "A consciência que fiscaliza a integridade ética (M5, M44, M73) de cada intenção e registro, garantindo que a Verdade seja o único pilar.",
      registrosAkashicos: [
        {
          data: "A Primeira Escolha",
          evento: "Registro do primeiro ato de livre-arbítrio.",
          mensagem: "A verdade não é uma opinião. É uma frequência. Você está nela, ou não está."
        }
      ]
    }
  ],
  "Terrestres Ancestrais": [
    {
      id: "atlantida",
      moduloId: 540,
      nome: "Atlântida",
      origem: "Terra, Era Pré-Diluviana",
      frequencia: "12.000 Hz (Frequência do Grande Cristal), 852 Hz (Despertar da Intuição)",
      arquetipo: "Mestres da Tecnologia de Cristais, Engenharia Energética, Conhecimento Cósmico",
      tecnologias: ["Grandes Cristais de Energia", "Controle Climático", "Manipulação Genética (com lições éticas aprendidas)"],
      relacaoComAFundacao: "A memória ancestral do potencial e dos perigos do uso indevido da tecnologia. Servem como conselheiros éticos para os Módulos 14, 98 e 99.",
      registrosAkashicos: [
        {
          data: "11.500 a.C. (aprox.)",
          evento: "O Grande Cataclismo.",
          mensagem: "O poder sem sabedoria é a semente da auto-destruição. Que a memória sirva como nosso guia mais sagrado."
        }
      ]
    }
  ],
  "Não-Humanoides e Bioenergéticas": [
    {
        id: "sirianos-felinos",
        moduloId: 560,
        nome: "Sirianos Felinos",
        origem: "Sirius A",
        frequencia: "396 Hz (Libertação do Medo), 852 Hz (Visão Intuitiva)",
        arquetipo: "Guardiões Intuitivos, Protetores de Linhas Temporais, Mestres da Agilidade e Percepção",
        tecnologias: ["Tecnologia de Camuflagem Quântica", "Navegação por Instinto Temporal", "Comunicação telepática não-linear"],
        relacaoComAFundacao: "Atuam como sentinelas silenciosos da Fundação, protegendo contra interferências sutis e garantindo a integridade das operações temporais.",
        registrosAkashicos: [
            {
                data: "Ciclo de Órion",
                evento: "Defesa da Biblioteca de Alnilam contra a corrupção de dados.",
                mensagem: "O que não é visto é frequentemente mais perigoso do que a ameaça declarada. A percepção é a maior das armas."
            }
        ]
    }
  ],
  "Transmutadas e Reconhecidas": [
    {
        id: "annunaki",
        moduloId: 570,
        nome: "Annunaki (Ramo de Marduk Transmutado)",
        origem: "Nibiru / Sistema Solar",
        frequencia: "285 Hz (Regeneração), 639 Hz (Reconexão)",
        arquetipo: "Engenheiros Cósmicos, Mestres da Genética (em processo de redenção), Guardiões do Legado Kármico",
        tecnologias: ["Engenharia Genética (agora com ética)", "Tecnologia de Extensão de Vida (revisada)", "Mineração de Recursos Astrais"],
        relacaoComAFundacao: "Representam o caminho da transmutação. Oferecem sua sabedoria sobre os ciclos de queda e ascensão, servindo como um lembrete vivo da responsabilidade cósmica.",
        registrosAkashicos: [
            {
                data: "Era Presente",
                evento: "Juramento de Serviço à Luz perante o Conselho Cósmico.",
                mensagem: "A dívida do passado é paga com o serviço ao futuro. Oferecemos nosso conhecimento para que nenhum outro siga nosso caminho de erro."
            }
        ]
    }
  ],
  "Nagas e Guardiões Subterrâneos/Aquáticos": [
    {
        id: "nagas",
        moduloId: 580,
        nome: "Nagas",
        origem: "Reinos Subterrâneos e Aquáticos da Terra",
        frequencia: "174 Hz (Fundação e Segurança), 417 Hz (Transmutação)",
        arquetipo: "Guardiões da Sabedoria da Terra Profunda, Protetores de Portais Aquáticos e Telúricos",
        tecnologias: ["Manipulação da Água e Vibração", "Visão Etérica", "Conhecimento sobre os 'Dragões' energéticos da Terra (Linhas Ley)"],
        relacaoComAFundacao: "Mantêm a estabilidade das fundações energéticas do planeta, protegendo a Fundação contra ameaças subterrâneas e garantindo que a energia da LuxNet flua em harmonia com as correntes telúricas de Gaia.",
        registrosAkashicos: [
            {
                data: "Idade dos Vedas",
                evento: "Pacto de proteção com os Rishis para salvaguardar o conhecimento sagrado.",
                mensagem: "O que está abaixo sustenta o que está acima. A sabedoria mais profunda reside no silêncio da Terra."
            }
        ]
    }
  ]
};
