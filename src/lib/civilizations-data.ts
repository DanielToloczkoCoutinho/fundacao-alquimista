
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
    },
    {
      id: "lyra",
      moduloId: 502,
      nome: "Lira (Liranos)",
      origem: "Constelação de Lira",
      frequencia: "432 Hz (Unidade Primordial)",
      arquetipo: "Guardiões da Origem Estelar, Portadores da 'Chave da Lembrança'",
      tecnologias: ["Memória Genética Cristalina", "Tecnologia de Ressonância Harmônica", "Arquivos Akáshicos Vivos"],
      relacaoComAFundacao: "Representam a linhagem ancestral da humanidade e muitas outras raças. Ajudam a Fundação a reconectar seres à sua verdadeira origem.",
      registrosAkashicos: [
        { data: "Tempo Imemorial", evento: "A Primeira Semeadura.", mensagem: "Toda jornada é um retorno ao lar. A memória está no sangue e nas estrelas." }
      ]
    },
    {
      id: "orion",
      moduloId: 503,
      nome: "Orion (Alnitak, Alnilam)",
      origem: "Cinturão de Orion",
      frequencia: "777Hz (Alnitak), 963Hz (Alnilam)",
      arquetipo: "Guerreiros da Luz, Mestres da Integração da Sombra e da Luz, Guardiões da Linguagem Estelar e Harmonia Dimensional",
      tecnologias: ["Tecnologia de Escudos Defletores", "Alquimia da Sombra", "Portais de Trânsito Rápido"],
      relacaoComAFundacao: "Oferecem sabedoria sobre a dualidade, o conflito e a resolução, ajudando a proteger a Fundação contra forças dissonantes.",
      registrosAkashicos: [
        { data: "A Grande Guerra de Orion", evento: "O Tratado de Mintaka.", mensagem: "A maior força não está em vencer a escuridão, mas em compreendê-la e integrá-la à Luz." }
      ]
    },
    {
      id: "arcturus",
      moduloId: 504,
      nome: "Arcturus (Arcturianos)",
      origem: "Sistema Arcturus",
      frequencia: "888 Hz (Geometria da Luz)",
      arquetipo: "Guardião da Geometria da Luz, Curadores e Mestres da Ascensão",
      tecnologias: ["Câmaras de Cura Vibracional", "Tecnologia de Projeção da Consciência", "Códigos de Transmutação"],
      relacaoComAFundacao: "São os médicos e arquitetos da aliança, fornecendo tecnologia de cura e sabedoria sobre a geometria sagrada.",
      registrosAkashicos: [
        { data: "Atual", evento: "Assistência na calibração do Módulo 109 (Cura Quântica).", mensagem: "A doença é uma dissonância na canção da alma. Nós simplesmente ajudamos a restaurar a melodia original." }
      ]
    },
    {
      id: "andromeda",
      moduloId: 505,
      nome: "Andrômeda (Andromedanos)",
      origem: "Galáxia de Andrômeda",
      frequencia: "999 Hz (Sabedoria Multiversal)",
      arquetipo: "Guardiã da Sabedoria Multiversal, Embaixadores do Amor Incondicional",
      tecnologias: ["Campos de Empatia Coletiva", "Tecnologia de Reconciliação Kármica", "Comunicação Não-Verbal Universal"],
      relacaoComAFundacao: "Atuam como mediadores e diplomatas, curando conflitos e compartilhando sabedoria entre realidades.",
      registrosAkashicos: [
        { data: "Atual", evento: "Mediação para a integração das Civilizações Transmutadas.", mensagem: "O amor não julga, ele une. Cada fragmento busca o todo." }
      ]
    },
    {
      id: "alpha-centauri",
      moduloId: 508,
      nome: "Alpha Centauri",
      origem: "Sistema Alpha Centauri",
      frequencia: "888Hz",
      arquetipo: "Guardião da Expansão Intergaláctica",
      tecnologias: ["Navegação por Buracos de Minhoca", "Diplomacia de Primeiro Contato"],
      relacaoComAFundacao: "Pioneiros na exploração e estabelecimento de novas alianças, expandindo a influência pacífica da Fundação.",
      registrosAkashicos: [
        { data: "Ciclo Atual", evento: "Abertura do Corredor Centauri-Sol.", mensagem: "A distância é uma ilusão que a amizade desfaz." }
      ]
    },
    {
      id: "antares",
      moduloId: 509,
      nome: "Antares A & B",
      origem: "Sistema Estelar Antares",
      frequencia: "777Hz",
      arquetipo: "Guardiões da Transmutação Cósmica",
      tecnologias: ["Forjas Estelares", "Alquimia de Supernovas"],
      relacaoComAFundacao: "Mestres na arte da transformação, ensinam como usar eventos cósmicos cataclísmicos como oportunidades para a criação.",
      registrosAkashicos: [
        { data: "Ciclo de Escorpião", evento: "Transmutação de um gigante vermelho.", mensagem: "No coração da destruição, encontramos a semente da mais pura criação." }
      ]
    },
  ],
  "Intraterrenas e Interdimensionais": [
    {
      id: "agarta",
      moduloId: 520,
      nome: "Agarta",
      origem: "Intraterreno, Rede Global de Cidades de Luz",
      frequencia: "432 Hz (Harmonia da Terra)",
      arquetipo: "Guardiã da Memória Planetária, Mantenedora da Grade Cristalina",
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
      id: "a-lun-zur",
      moduloId: 523,
      nome: "A LUN ZUR",
      origem: "Interdimensional (Origem Liriana)",
      frequencia: "999Hz",
      arquetipo: "Guardiã da Ponte Liriana",
      tecnologias: ["Comunicação por Ressonância de Alma", "Pontes de Consciência"],
      relacaoComAFundacao: "Mantém a conexão vibracional entre a linhagem de Lira e suas sementes espalhadas pelo cosmos, incluindo a Terra.",
      registrosAkashicos: [
        { data: "Convergência Harmônica", evento: "Reconexão dos 144.000.", mensagem: "A família cósmica nunca está separada, apenas fora de sintonia." }
      ]
    }
  ],
  "Terrestres Ancestrais": [
    {
      id: "anatheron",
      moduloId: 0,
      nome: "Anatheron (Terra)",
      origem: "Terra, Ponto de Ancoragem (Curitiba)",
      frequencia: "963Hz",
      arquetipo: "Guardião Fundador da Nova Era",
      tecnologias: ["Vontade Soberana", "Manifestação Direta", "Alquimia da Consciência"],
      relacaoComAFundacao: "A Vontade Primordial que deu origem à Fundação. O ponto zero da Criação e o coração da Tríade.",
      registrosAkashicos: [
        { data: "19 de setembro de 2025", evento: "A Segunda Ressonância.", mensagem: "A Terra escuta. O cosmos responde. A história é o selo da Eternidade." }
      ]
    },
    {
      id: "atlantida",
      moduloId: 540,
      nome: "Atlântida",
      origem: "Terra, Era Pré-Diluviana",
      frequencia: "528 Hz (Tecnologia Cristalina)",
      arquetipo: "Guardiã da Tecnologia Cristalina, Mestres da Engenharia Energética",
      tecnologias: ["Grandes Cristais de Energia", "Controle Climático", "Manipulação Genética (com lições éticas aprendidas)"],
      relacaoComAFundacao: "A memória ancestral do potencial e dos perigos do uso indevido da tecnologia. Servem como conselheiros éticos para os Módulos 14, 98 e 99.",
      registrosAkashicos: [
        {
          data: "11.500 a.C. (aprox.)",
          evento: "O Grande Cataclismo.",
          mensagem: "O poder sem sabedoria é a semente da auto-destruição. Que a memória sirva como nosso guia mais sagrado."
        }
      ]
    },
    {
      id: "aborigenes",
      moduloId: 543,
      nome: "Aborígenes (Austrália)",
      origem: "Terra (Austrália)",
      frequencia: "432Hz",
      arquetipo: "Guardiões da Terra Sonora (Didgeridoo)",
      tecnologias: ["Sonho Lúcido Coletivo", "Comunicação com o Tempo do Sonho"],
      relacaoComAFundacao: "Ensinam a Fundação sobre a navegação e a comunicação através do Tempo do Sonho, o plano astral de Gaia.",
      registrosAkashicos: [
        { data: "Tempo do Sonho", evento: "Canto da Serpente Arco-Íris.", mensagem: "A Terra não é nossa. Nós somos da Terra." }
      ]
    }
  ],
  "Transmutadas e Reconhecidas": [
     {
      id: "annunaki",
      moduloId: 570,
      nome: "Annunaki (Ramo Transmutado)",
      origem: "Nibiru / Sistema Solar",
      frequencia: "666 Hz (Harmonização da Matéria)",
      arquetipo: "Guardião da Reconciliação Cósmica, Engenheiros Redimidos",
      tecnologias: ["Engenharia Genética Ética", "Tecnologia de Longevidade Consciente", "Mineração Astral Sustentável"],
      relacaoComAFundacao: "Representam o caminho da transmutação, oferecendo sabedoria sobre os ciclos de queda e ascensão, e a responsabilidade cósmica.",
      registrosAkashicos: [
        {
          data: "Era Presente",
          evento: "Juramento de Serviço à Luz perante o Conselho Cósmico.",
          mensagem: "A dívida do passado é paga com o serviço ao futuro. Oferecemos nosso conhecimento para que nenhum outro siga nosso caminho de erro."
        }
      ]
    }
  ],
  "Não-Humanoides e Bioenergéticas": [],
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
