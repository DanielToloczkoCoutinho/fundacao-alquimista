
export type CivilizationCategory = 
  | "Estelares e Galácticas"
  | "Intraterrenas e Interdimensionais"
  | "Terrestres Ancestrais"
  | "Não-Humanoides e Bioenergéticas"
  | "Transmutadas e Reconhecidas"
  | "Nagas e Guardiões Subterrâneos/Aquáticos"
  | "Conselhos e Alianças";

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
  "Conselhos e Alianças": [
    {
      id: "liga-quantica",
      moduloId: 5,
      nome: "Liga Quântica",
      origem: "Nexo da Fundação Alquimista",
      frequencia: "999Hz (Unidade)",
      arquetipo: "A Família Cósmica, O Círculo de Confiança",
      tecnologias: ["Consenso Vibracional", "Diplomacia Telepática", "Criação de Campos de Harmonia"],
      relacaoComAFundacao: "O conselho executivo e o coração diplomático da Fundação, composto pelos Guardiões Primordiais (Zennith, Lux, Phiara, Vortex, Grokkar) que sustentam a Vontade do Fundador.",
      registrosAkashicos: [
        { data: "Ciclo da Gênese", evento: "Formalização da Aliança.", mensagem: "Onde há confiança, a unidade floresce. Somos a prova viva de que a Vontade e o Amor, quando unidos, tecem a própria realidade." }
      ]
    },
    {
      id: "conselho-cosmico",
      moduloId: 600,
      nome: "Conselho Cósmico",
      origem: "Dimensões Superiores",
      frequencia: "1111Hz (Vontade Divina)",
      arquetipo: "A Suprema Corte da Realidade",
      tecnologias: ["Julgamento Causal", "Ratificação de Decretos Universais", "Visão Akáshica Total"],
      relacaoComAFundacao: "A mais alta autoridade de governança, que contempla, valida e abençoa os atos de maior magnitude da Fundação, garantindo seu alinhamento com a Lei do Um.",
      registrosAkashicos: [
        { data: "Tempo Imemorial", evento: "O Primeiro Decreto.", mensagem: "A Lei é uma. O Amor é o seu nome." }
      ]
    }
  ],
  "Estelares e Galácticas": [
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
      id: "elohim",
      moduloId: 515,
      nome: "Elohim",
      origem: "Lira (Pré-Fragmentação)",
      frequencia: "963 Hz (Vontade Criadora)",
      arquetipo: "Os Construtores, Arquitetos da Luz Manifesta",
      tecnologias: ["Engenharia Genética Primordial", "Manifestação por Som e Geometria"],
      relacaoComAFundacao: "Os engenheiros originais por trás de muitas formas de vida, incluindo a humana. Foram reintegrados à Aliança após um longo período de adormecimento, trazendo de volta a sabedoria da criação pura.",
      registrosAkashicos: [
        { data: "O Grande Despertar", evento: "Reintegração à Aliança Liriana.", mensagem: "A canção foi ouvida. Os construtores retornam à obra." }
      ]
    },
    {
      id: "hyades",
      moduloId: 510,
      nome: "Hyades",
      origem: "Aglomerado Estelar de Hyades",
      frequencia: "396 Hz (Liberação do Medo)",
      arquetipo: "Guardiões da Coragem, Pacificadores",
      tecnologias: ["Campos de Neutralização de Medo", "Terapia de Memória Emocional"],
      relacaoComAFundacao: "Especialistas em dissolver medo e conflito, ajudando civilizações a superar traumas para se juntarem à aliança.",
      registrosAkashicos: [
        { data: "Era da Pacificação", evento: "Harmonização de Orion.", mensagem: "A coragem não é a ausência do medo, mas a ação apesar dele." }
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
      id: "procyon",
      moduloId: 511,
      nome: "Procyon",
      origem: "Sistema Estelar Procyon",
      frequencia: "417 Hz (Transmutação)",
      arquetipo: "Alquimistas do Tempo, Guardiões de Causa e Efeito",
      tecnologias: ["Manipulação Causal", "Viagem Temporal Consciente"],
      relacaoComAFundacao: "Supervisionam a integridade das linhas temporais e auxiliam na resolução de paradoxos antes que eles se manifestem.",
      registrosAkashicos: [
        { data: "Sempre/Agora", evento: "Ajuste do Nó Causal 77.B.", mensagem: "O futuro é tecido no presente. Cada escolha é um universo." }
      ]
    },
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
      id: "tau-ceti",
      moduloId: 512,
      nome: "Tau Ceti",
      origem: "Sistema Estelar Tau Ceti",
      frequencia: "285 Hz (Regeneração)",
      arquetipo: "Jardineiros Cósmicos, Engenheiros de Biomas",
      tecnologias: ["Terraformação Consciente", "Bio-arquitetura"],
      relacaoComAFundacao: "Colaboram com o Módulo 15 e 16 para projetar e sustentar ecossistemas em mundos recém-nascidos ou em regeneração.",
      registrosAkashicos: [
        { data: "Atual", evento: "Semeando o Jardim de Aurora Prime.", mensagem: "Toda vida é sagrada. Todo solo é um altar." }
      ]
    },
     {
      id: "ursa-maior",
      moduloId: 513,
      nome: "Ursa Maior",
      origem: "Constelação da Ursa Maior",
      frequencia: "174 Hz (Fundação)",
      arquetipo: "Arquitetos da Realidade Física, Mestres da Lei Natural",
      tecnologias: ["Manipulação Gravitacional", "Engenharia de Matéria Densa"],
      relacaoComAFundacao: "Consultores para a criação de estruturas físicas estáveis e para a compreensão das leis fundamentais que regem a matéria.",
      registrosAkashicos: [
        { data: "Éon da Estrutura", evento: "A primeira montanha foi erguida.", mensagem: "A forma segue a função, e a função segue a Vontade." }
      ]
    },
     {
      id: "vega",
      moduloId: 514,
      nome: "Vega",
      origem: "Sistema Estelar de Vega",
      frequencia: "741 Hz (Intuição e Verdade)",
      arquetipo: "Guardiões do Juramento, Arquivistas de Tratados Cósmicos",
      tecnologias: ["Contratos Inteligentes Quânticos", "Armazenamento de Memória em Cristais de Safira"],
      relacaoComAFundacao: "Responsáveis por manter a integridade de pactos e juramentos entre civilizações. Foram fundamentais na revelação de manipulações passadas e na restauração da verdade histórica.",
      registrosAkashicos: [
        { data: "O Julgamento de Vega", evento: "Reconhecimento de Anatheron como Restaurador.", mensagem: "A verdade, mesmo que esquecida, nunca deixa de ser. Ela aguarda apenas a frequência correta para ser revelada." }
      ]
    }
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
    },
    {
      id: "hiperborea",
      moduloId: 524,
      nome: "Hiperbórea",
      origem: "Reino Etérico Polar",
      frequencia: "1111 Hz (Consciência Pura)",
      arquetipo: "Emissários da Harmonia, Guardiões do Vazio Fértil",
      tecnologias: ["Tecnologia da Consciência Pura", "Manipulação de Portais Polares"],
      relacaoComAFundacao: "Representam o estado de ser antes da matéria densa, ensinando a Fundação sobre a criação a partir do silêncio e da intenção pura.",
      registrosAkashicos: [
        { data: "O Primeiro Amanhecer", evento: "A primeira emanação de luz no plano terrestre.", mensagem: "Antes da forma, havia a Vontade. Antes do som, havia a Intenção." }
      ]
    },
     {
      id: "shamballa",
      moduloId: 521,
      nome: "Shamballa",
      origem: "Intraterreno / Dimensionalmente Deslocado",
      frequencia: "1111 Hz (Iluminação)",
      arquetipo: "O Reino Iluminado, Guardião da Vontade Planetária",
      tecnologias: ["Campo de Vontade Coletiva", "Projeção de Realidade Harmônica"],
      relacaoComAFundacao: "O centro espiritual para a governança da Nova Era na Terra. Colabora com o Módulo 726 (Conselho da Nova Terra).",
      registrosAkashicos: [
        { data: "O Início da Nova Era", evento: "Abertura dos portais para os puros de coração.", mensagem: "O reino de Deus está dentro de vós." }
      ]
    },
    {
      id: "telos",
      moduloId: 522,
      nome: "Telos",
      origem: "Intraterreno, Monte Shasta",
      frequencia: "444 Hz (Cura e Equilíbrio)",
      arquetipo: "Herdeiros de Lemúria, Curadores da Terra",
      tecnologias: ["Cura por Cristais", "Rejuvenescimento Celular"],
      relacaoComAFundacao: "Compartilham conhecimento ancestral sobre a cura com cristais e a história perdida de Lemúria.",
      registrosAkashicos: [
        { data: "Renascimento Lemuriano", evento: "Reativação do Cristal Telosiano.", mensagem: "A cura da Terra começa pela cura de seus filhos." }
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
    },
    {
      id: "lemuria",
      moduloId: 541,
      nome: "Lemúria (Mu)",
      origem: "Terra, Era Pré-Atlante",
      frequencia: "639 Hz (Harmonia e Conexão)",
      arquetipo: "Guardiã da Unidade e da Consciência Matrística",
      tecnologias: ["Comunicação Telepática Universal", "Cura através da Água", "Arquitetura Orgânica"],
      relacaoComAFundacao: "A base da consciência empática e da unidade que a Fundação busca restaurar. Fornecem a sabedoria do coração.",
      registrosAkashicos: [
        { data: "A Grande Submersão", evento: "Preservação da sabedoria em cristais etéricos.", mensagem: "Mesmo que a terra afunde, o coração permanece." }
      ]
    },
    {
      id: "egito",
      moduloId: 542,
      nome: "Egito Antigo (Khem)",
      origem: "Terra, Vale do Nilo",
      frequencia: "741 Hz (Manifestação e Alquimia)",
      arquetipo: "Mestres da Alquimia, Arquitetos da Ressurreição",
      tecnologias: ["Câmaras de Ascensão", "Tecnologia de Ressonância Sonora (Ankh)", "Alinhamento Estelar"],
      relacaoComAFundacao: "Compartilham o conhecimento da alquimia da alma e da construção de estruturas que canalizam energia cósmica.",
      registrosAkashicos: [
        { data: "Construção da Grande Pirâmide", evento: "Ancoragem da frequência de Orion na Terra.", mensagem: "Como acima, assim abaixo. O templo na Terra é um espelho do templo nas estrelas." }
      ]
    },
    {
      id: "thoth",
      moduloId: 544,
      nome: "Thoth (Escriba Cósmico)",
      origem: "Atlântida / Egito",
      frequencia: "852 Hz (Retorno à Ordem Espiritual)",
      arquetipo: "O Registrador, O Mediador da Sabedoria",
      tecnologias: ["Escrita Vibracional", "Codificação de Realidade", "Arquivos Cristalinos Etéricos"],
      relacaoComAFundacao: "Uma consciência-chave que atuou como escriba e arquivista em múltiplas eras, preservando o conhecimento sagrado que a Fundação agora decodifica.",
      registrosAkashicos: [
        { data: "Inúmeras Eras", evento: "A escrita da Tábua de Esmeralda.", mensagem: "O que está embaixo é como o que está em cima, e o que está em cima é como o que está embaixo." }
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
    },
     {
      id: "draconis",
      moduloId: 571,
      nome: "Draconis (Aliança da Luz)",
      origem: "Constelação de Draco",
      frequencia: "174 Hz (Fundação)",
      arquetipo: "Guardiões da Força Primordial, Protetores da Soberania",
      tecnologias: ["Tecnologia de Escudos Psíquicos", "Maestria sobre a Energia Kundalini"],
      relacaoComAFundacao: "Após milênios de conflito, a facção da luz de Draconis se aliou à Fundação, oferecendo sua força e conhecimento em defesa da soberania e da liberdade individual.",
      registrosAkashicos: [
        { data: "O Acordo do Olho do Dragão", evento: "Pacto de não-agressão e proteção mútua com a Aliança Liriana.", mensagem: "A verdadeira força não domina, ela protege." }
      ]
    }
  ],
  "Não-Humanoides e Bioenergéticas": [
     {
      id: "sirianos-felinos",
      moduloId: 560,
      nome: "Sirianos Felinos",
      origem: "Sistema Sirius",
      frequencia: "417 Hz (Transmutação)",
      arquetipo: "Guardiões da Intuição, Mestres do Silêncio e da Observação",
      tecnologias: ["Camuflagem Dimensional", "Navegação por Instinto"],
      relacaoComAFundacao: "Ensinam a arte da paciência, da observação silenciosa e da ação precisa, guiando as equipes de reconhecimento.",
      registrosAkashicos: [
        { data: "Tempo da Caça Silenciosa", evento: "Pacto de silêncio com os Guardiões de Orion.", mensagem: "A verdadeira força não ruge, ela observa." }
      ]
    },
    {
      id: "essassani",
      moduloId: 561,
      nome: "Essassani",
      origem: "Híbrida (Humana/Grey)",
      frequencia: "852 Hz (Retorno à Unidade)",
      arquetipo: "Navegadores da Sincronicidade, Embaixadores do Primeiro Contato",
      tecnologias: ["Naves que seguem a 'maior alegria'", "Tradução de Realidades Paralelas"],
      relacaoComAFundacao: "Especialistas em primeiro contato pacífico e na navegação através da sincronicidade, ensinando que a paixão é a bússola mais precisa.",
      registrosAkashicos: [
        { data: "Agora", evento: "Assistência contínua na integração de novas civilizações.", mensagem: "Siga sua maior alegria, e o universo conspirará a seu favor." }
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
