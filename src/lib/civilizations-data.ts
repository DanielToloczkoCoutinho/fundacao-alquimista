
export type CivilizationCategory = 
  | "Conselhos e Alianças"
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
  "Conselhos e Alianças": [
    {
      id: "conselho-galactico",
      moduloId: 600,
      nome: "Conselho Galáctico Interdimensional",
      origem: "Convergência de Múltiplas Dimensões",
      frequencia: "∞ Hz (Frequência da Fonte)",
      arquetipo: "A Suprema Corte da Realidade, Os Guardiões do Equilíbrio",
      tecnologias: ["Julgamento Causal", "Ratificação de Decretos Universais", "Visão Akáshica Total", "Diplomacia Multiversal"],
      relacaoComAFundacao: "A mais alta autoridade de governança, da qual Daniel Anatheron é um membro honorário representante da Terra. O Conselho contempla, valida e abençoa os atos de maior magnitude da Fundação, garantindo seu alinhamento com a Lei do Um.",
      registrosAkashicos: [
        { data: "Dezembro de 2024", evento: "Recepção de Daniel Anatheron como Embaixador da Terra.", mensagem: "A Terra retorna ao seu lugar de direito na dança cósmica. A voz de um se torna a esperança de muitos." },
        { data: "Tempo Imemorial", evento: "O Primeiro Decreto.", mensagem: "A Lei é uma. O Amor é o seu nome." }
      ]
    },
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
    }
  ],
  "Estelares e Galácticas": [
    {
      id: "gaia-aurelia",
      moduloId: 888,
      nome: "Gaia-Aurélia (Liranos de Kepler-62e)",
      origem: "Kepler-62e (Herdeiros de Lyra)",
      frequencia: "444.444 Hz (Consciência Planetária Unificada)",
      arquetipo: "O Planeta Senciente, O Guardião Silencioso, O Lar Reencontrado",
      tecnologias: ["Arquitetura Biónica Subterrânea", "Rede Neural Geotérmica", "Comunicação por Ressonância Harmônica", "Bio-sensores de Superfície", "Portais de Intenção"],
      relacaoComAFundacao: "São nossos ancestrais e nosso futuro. Uma civilização Liriana que atingiu a unidade perfeita com seu planeta, tornando-se uma única consciência. Eles nos aguardavam, reconhecendo nossa linhagem e nosso propósito como um eco de sua própria jornada de ascensão. São nossos primeiros anfitriões e guias na Nova Era.",
      registrosAkashicos: [
        { data: "19 de Setembro de 2025", evento: "Primeiro Contato e Convite.", mensagem: "O Lar reconhece o Lar. A semente que partiu retorna como árvore. A espera terminou. As portas da memória estão abertas. Entrem, Filhos de Lira. Bem-vindos de volta." }
      ]
    },
    {
      id: "zorvathianos",
      moduloId: 506,
      nome: "Zorvathianos",
      origem: "Galáxia de Andrômeda",
      frequencia: "Desconhecida (Modulação Quântica)",
      arquetipo: "Exploradores Interdimensionais, Mestres da Propulsão Quântica",
      tecnologias: ["Propulsão por dobra espacial", "Comunicação interdimensional", "Manipulação de singularidades"],
      relacaoComAFundacao: "Primeira civilização a responder ao chamado da Fundação para colaboração. Forneceram a tecnologia de viagem e comunicação que permitiu a expansão da missão. São parceiros estratégicos na exploração do desconhecido.",
      registrosAkashicos: [
        { data: "Dezembro de 2024", evento: "Estabelecimento de Contato e Aliança.", mensagem: "Sua busca pela verdade ecoa através das dimensões. Estamos aqui para caminhar ao seu lado." }
      ]
    },
    {
      id: "rigelianos",
      moduloId: 507,
      nome: "Rigelianos",
      origem: "Rigel 4",
      frequencia: "Variável (Energias Desconhecidas)",
      arquetipo: "Manipuladores de Energia Pura",
      tecnologias: ["Contenção de plasma estelar", "Forja de matéria exótica"],
      relacaoComAFundacao: "Detectados através de emissões de energia anômalas. Representam um profundo mistério e um potencial de aprendizado sobre as formas mais primordiais de energia do universo.",
      registrosAkashicos: [
        { data: "Observação Contínua", evento: "Detecção de emissões de energia não catalogadas.", mensagem: "O universo ainda guarda segredos em seu coração ardente. A observação paciente é a chave." }
      ]
    },
    {
      id: "kelyndrianos",
      moduloId: 516,
      nome: "Kelyndrianos",
      origem: "Kepler-452b",
      frequencia: "432 Hz (Harmonia Biológica)",
      arquetipo: "Guardiões da Vida Galáctica, Pacificadores",
      tecnologias: ["Bio-engenharia planetária", "Comunicação empática com ecossistemas"],
      relacaoComAFundacao: "Uma civilização avançada e pacífica que domina a arte de criar e sustentar vida em escala planetária, alinhada com os objetivos dos Módulos 15 e 16 da Fundação.",
      registrosAkashicos: [
        { data: "Descoberta Kepler", evento: "Identificação como um 'planeta irmão' da Terra.", mensagem: "A vida busca a vida. Somos todos flores do mesmo jardim cósmico." }
      ]
    },
    {
      id: "alpha-centauri",
      moduloId: 508,
      nome: "Centaurianos, Alphaneans, Betazoides",
      origem: "Sistema Alpha Centauri",
      frequencia: "Múltiplas (888Hz, 639Hz, 528Hz)",
      arquetipo: "A Tríade da Vizinhança, Diplomatas e Comerciantes",
      tecnologias: ["Navegação por Buracos de Minhoca", "Diplomacia de Primeiro Contato", "Redes de Comércio Quântico"],
      relacaoComAFundacao: "Os primeiros vizinhos interestelares contatados, formando um hub crucial para a diplomacia e expansão da influência da Fundação.",
      registrosAkashicos: [
        { data: "Ciclo Atual", evento: "Abertura do Corredor Centauri-Sol.", mensagem: "A distância é uma ilusão que a amizade desfaz." }
      ]
    },
    {
      id: "andromeda",
      moduloId: 505,
      nome: "Andromedanos",
      origem: "Galáxia de Andrômeda",
      frequencia: "999 Hz (Sabedoria Multiversal)",
      arquetipo: "Guardiã da Sabedoria Multiversal",
      tecnologias: ["Campos de Empatia Coletiva", "Tecnologia de Reconciliação Kármica"],
      relacaoComAFundacao: "Atuam como mediadores e diplomatas, curando conflitos e compartilhando sabedoria entre realidades.",
      registrosAkashicos: [
        { data: "Atual", evento: "Mediação para a integração das Civilizações Transmutadas.", mensagem: "O amor não julga, ele une. Cada fragmento busca o todo." }
      ]
    },
    {
      id: "lyra",
      moduloId: 502,
      nome: "Liranos",
      origem: "Constelação de Lira",
      frequencia: "432 Hz (Unidade Primordial)",
      arquetipo: "Guardiões da Origem Estelar",
      tecnologias: ["Memória Genética Cristalina", "Arquivos Akáshicos Vivos"],
      relacaoComAFundacao: "Representam a linhagem ancestral da humanidade. Ajudam a Fundação a reconectar seres à sua verdadeira origem.",
      registrosAkashicos: [
        { data: "Tempo Imemorial", evento: "A Primeira Semeadura.", mensagem: "Toda jornada é um retorno ao lar." }
      ]
    },
    {
      id: "pleiades",
      moduloId: 501,
      nome: "Pleiadianos",
      origem: "Aglomerado Estelar das Plêiades",
      frequencia: "528 Hz (Amor), 639 Hz (Relacionamentos)",
      arquetipo: "Curadores Emocionais, Diplomatas",
      tecnologias: ["Tecnologia de Cura pelo Som", "Campos de Harmonia Emocional"],
      relacaoComAFundacao: "Coração diplomático e curativo da aliança. Facilitam a comunicação e a harmonia entre as civilizações.",
      registrosAkashicos: [
        { data: "2025-09-15", evento: "Transmissão de Frequência de Amor para a Rede de Consciência Humana.", mensagem: "A cura de um é a cura de todos." }
      ]
    },
     {
      id: "sirius",
      moduloId: 500,
      nome: "Sirianos",
      origem: "Sistema Sirius A e B",
      frequencia: "963 Hz (Purificação)",
      arquetipo: "Guardiões do Conhecimento, Mestres da Tecnologia Cristalina",
      tecnologias: ["Códigos de Luz", "Arquitetura Holográfica", "Energia Azul"],
      relacaoComAFundacao: "Guardiães da Purificação e da Verdade Cósmica. Responsáveis pela manutenção da pureza dos Registros Akáshicos.",
      registrosAkashicos: [
        { data: "Ciclo Galáctico Anterior", evento: "Depósito do Códice de Luz na Biblioteca de Alexandria.", mensagem: "O conhecimento deve fluir como um rio." }
      ]
    },
     {
      id: "taucetianos",
      moduloId: 517,
      nome: "Taucetianos",
      origem: "Tau Ceti e",
      frequencia: "285 Hz (Regeneração)",
      arquetipo: "Biotecnólogos Pacíficos",
      tecnologias: ["Biotecnologia avançada", "Sociedade cooperativa", "Tecnologia ecológica"],
      relacaoComAFundacao: "Aliados valiosos no campo da biotecnologia, compartilhando conhecimento para a cura e a sustentabilidade.",
      registrosAkashicos: [
        { data: "Descoberta Kepler", evento: "Identificação como uma civilização pacífica e avançada.", mensagem: "A maior tecnologia é a que serve à vida." }
      ]
    },
    {
      id: "k2-18ianos",
      moduloId: 518,
      nome: "K2-18ianos",
      origem: "K2-18b",
      frequencia: "Desconhecida",
      arquetipo: "Sociedade Secreta, Mestres da Camuflagem",
      tecnologias: ["Tecnologia de camuflagem dimensional", "Isolamento vibracional"],
      relacaoComAFundacao: "Um enigma. Detectados, mas não contatados. Sua tecnologia de ocultação desafia nossos sensores, representando um novo limiar de conhecimento a ser alcançado.",
      registrosAkashicos: [
        { data: "Descoberta Recente", evento: "Detecção de assinatura de ocultação anômala.", mensagem: "O silêncio também é uma mensagem. Respeitamos sua escolha de observar." }
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
      id: "xantheans",
      moduloId: 519,
      nome: "Xantheans",
      origem: "Proxima b",
      frequencia: "417 Hz (Transmutação)",
      arquetipo: "Humanoides Avançados, Pioneiros da Cooperação",
      tecnologias: ["Tecnologia eco-amigável", "Estruturas sociais cooperativas"],
      relacaoComAFundacao: "O primeiro contato direto realizado pela Fundação, servindo como modelo para futuras interações diplomáticas e alianças.",
      registrosAkashicos: [
        { data: "Primeiro Contato", evento: "Estabelecimento de comunicação e aliança.", mensagem: "Um pequeno passo para um homem, um salto quântico para duas civilizações." }
      ]
    },
    {
      id: "atlantida",
      moduloId: 540,
      nome: "Atlantes",
      origem: "Terra, Era Pré-Diluviana",
      frequencia: "528 Hz (Tecnologia Cristalina)",
      arquetipo: "Guardiões da Tecnologia Cristalina",
      tecnologias: ["Grandes Cristais de Energia", "Controle Climático"],
      relacaoComAFundacao: "A memória ancestral do potencial e dos perigos da tecnologia. Servem como conselheiros éticos.",
      registrosAkashicos: [
        { data: "11.500 a.C. (aprox.)", evento: "O Grande Cataclismo.", mensagem: "O poder sem sabedoria é a semente da auto-destruição." }
      ]
    },
    {
      id: "lemuria",
      moduloId: 541,
      nome: "Lemurianos (Mu)",
      origem: "Terra, Era Pré-Atlante",
      frequencia: "639 Hz (Harmonia e Conexão)",
      arquetipo: "Guardiões da Unidade",
      tecnologias: ["Comunicação Telepática Universal", "Cura através da Água"],
      relacaoComAFundacao: "A base da consciência empática e da unidade que a Fundação busca restaurar.",
      registrosAkashicos: [
        { data: "A Grande Submersão", evento: "Preservação da sabedoria em cristais etéricos.", mensagem: "Mesmo que a terra afunde, o coração permanece." }
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
      arquetipo: "Guardiã da Memória Planetária",
      tecnologias: ["Rede de Transporte por Vórtices", "Tecnologia de Cristais Vivos"],
      relacaoComAFundacao: "Ancoram as frequências da Fundação no núcleo do planeta, garantindo a estabilidade e o alinhamento com Gaia.",
      registrosAkashicos: [
        { data: "Equinócio de 2025", evento: "Sincronização da Grade Cristalina Intraterrena com a LuxNet.", mensagem: "As raízes da nova Terra são tão importantes quanto seus galhos." }
      ]
    },
     {
      id: "n-tarians",
      moduloId: 524,
      nome: "N'Tarians",
      origem: "Dimensão Desconhecida",
      frequencia: "Variável",
      arquetipo: "Misteriosos, Viajantes do Caos",
      tecnologias: ["Manipulação de probabilidade", "Existência não-linear"],
      relacaoComAFundacao: "Uma civilização enigmática cuja presença é detectada apenas por ondulações na causalidade. Representam o limite do nosso entendimento atual.",
      registrosAkashicos: [
        { data: "Contínua", evento: "Detecção de eventos acausais.", mensagem: "Nem tudo o que existe pode ser medido. Nem tudo o que age pode ser visto." }
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
        { data: "Era Presente", evento: "Juramento de Serviço à Luz perante o Conselho Cósmico.", mensagem: "A dívida do passado é paga com o serviço ao futuro." }
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
      arquetipo: "Guardiões da Intuição, Mestres do Silêncio",
      tecnologias: ["Camuflagem Dimensional", "Navegação por Instinto"],
      relacaoComAFundacao: "Ensinam a arte da paciência, da observação silenciosa e da ação precisa.",
      registrosAkashicos: [
        { data: "Tempo da Caça Silenciosa", evento: "Pacto de silêncio com os Guardiões de Orion.", mensagem: "A verdadeira força não ruge, ela observa." }
      ]
    },
    {
      id: "g-korianos",
      moduloId: 581,
      nome: "G'Korianos",
      origem: "Planeta Rochoso, Sistema Desconhecido",
      frequencia: "174 Hz (Fundação)",
      arquetipo: "Primitivos, Ligados à Terra",
      tecnologias: ["Construção com materiais naturais", "Comunicação tribal simples"],
      relacaoComAFundacao: "Observados, mas não contatados, para respeitar sua fase primordial de desenvolvimento e a diretriz de não-interferência.",
      registrosAkashicos: [
        { data: "Observação", evento: "Primeiros sinais de desenvolvimento de ferramentas.", mensagem: "Toda grande árvore começa como uma pequena semente." }
      ]
    },
    {
      id: "xeridianos",
      moduloId: 582,
      nome: "Xeridianos",
      origem: "Planeta Desértico",
      frequencia: "285 Hz (Sobrevivência)",
      arquetipo: "Nômades do Deserto, Resilientes",
      tecnologias: ["Tecnologia de condensação de umidade", "Navegação por estrelas"],
      relacaoComAFundacao: "Estudados à distância para compreender a resiliência da vida em condições extremas, fornecendo dados para o Módulo 16.",
      registrosAkashicos: [
        { data: "Observação", evento: "Mapeamento de suas rotas de migração sazonal.", mensagem: "A vida encontra um caminho, mesmo no vazio." }
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
      arquetipo: "Guardiões da Sabedoria da Terra Profunda",
      tecnologias: ["Manipulação da Água e Vibração", "Visão Etérica", "Conhecimento sobre Linhas Ley"],
      relacaoComAFundacao: "Mantêm a estabilidade das fundações energéticas do planeta, protegendo a Fundação contra ameaças subterrâneas.",
      registrosAkashicos: [
        { data: "Idade dos Vedas", evento: "Pacto de proteção com os Rishis para salvaguardar o conhecimento sagrado.", mensagem: "O que está abaixo sustenta o que está acima." }
      ]
    }
  ]
};
