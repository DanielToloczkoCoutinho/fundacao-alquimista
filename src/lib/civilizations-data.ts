
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
      nome: "Orion (Alnitak, Alnilam, Mintaka)",
      origem: "Cinturão de Orion",
      frequencia: "Variavel (Dualidade Integrada)",
      arquetipo: "Guerreiros da Luz, Mestres da Integração da Sombra e da Luz",
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
      frequencia: "963 Hz (Reconexão com a Fonte)",
      arquetipo: "Curadores e Mestres da Ascensão",
      tecnologias: ["Câmaras de Cura Vibracional", "Tecnologia de Projeção da Consciência", "Códigos de Transmutação"],
      relacaoComAFundacao: "São os médicos da aliança, fornecendo tecnologia e sabedoria para a cura em níveis físico, etérico e espiritual.",
      registrosAkashicos: [
        { data: "Atual", evento: "Assistência na calibração do Módulo 109 (Cura Quântica).", mensagem: "A doença é uma dissonância na canção da alma. Nós simplesmente ajudamos a restaurar a melodia original." }
      ]
    },
    {
      id: "andromeda",
      moduloId: 505,
      nome: "Andrômeda (Andromedanos)",
      origem: "Galáxia de Andrômeda",
      frequencia: "639 Hz (Reconciliação e União)",
      arquetipo: "Embaixadores do Amor Incondicional e da Compaixão",
      tecnologias: ["Campos de Empatia Coletiva", "Tecnologia de Reconciliação Kármica", "Comunicação Não-Verbal Universal"],
      relacaoComAFundacao: "Atuam como mediadores e diplomatas, ajudando a curar conflitos e a construir pontes de amor entre todas as civilizações.",
      registrosAkashicos: [
        { data: "Atual", evento: "Mediação para a integração das Civilizações Transmutadas.", mensagem: "O amor não julga, ele une. Cada fragmento busca o todo." }
      ]
    },
    {
      id: "hyades",
      moduloId: 506,
      nome: "Hyades",
      origem: "Aglomerado Estelar de Hyades",
      frequencia: "417 Hz (Transmutação)",
      arquetipo: "Alquimistas Cósmicos",
      tecnologias: ["Transmutação Elemental", "Manipulação de Matéria Sutil"],
      relacaoComAFundacao: "Especialistas em processos alquímicos, colaboram com os Módulos 14 e 20.",
      registrosAkashicos: [ { data: "Tempo Antigo", evento: "A Primeira Transmutação.", mensagem: "Tudo é um, e um é tudo. A matéria dança conforme a intenção." } ]
    },
    {
      id: "ursa_major",
      moduloId: 507,
      nome: "Ursa Maior",
      origem: "Constelação da Ursa Maior",
      frequencia: "852 Hz (Intuição)",
      arquetipo: "Navegadores Estelares",
      tecnologias: ["Mapas Estelares Quânticos", "Navegação por Intuição Pura"],
      relacaoComAFundacao: "Guias para a exploração cósmica, alinhados com o Módulo 21.",
      registrosAkashicos: [ { data: "Tempo Imemorial", evento: "O primeiro mapa foi traçado nas estrelas, não no papel.", mensagem: "O caminho não é encontrado, é lembrado." } ]
    },
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
      id: "telos",
      moduloId: 521,
      nome: "Telos",
      origem: "Intraterreno, sob o Monte Shasta",
      frequencia: "528 Hz (Cura e Amor)",
      arquetipo: "Curadores Lemurianos",
      tecnologias: ["Câmaras de Cura Cristalina", "Comunicação com a Natureza"],
      relacaoComAFundacao: "Guardiões do legado de Lemúria, colaboram com a cura planetária.",
      registrosAkashicos: [ { data: "Atual", evento: "Ativação dos protocolos de cura.", mensagem: "A cura da Terra começa na cura de cada ser." } ]
    },
    {
      id: "shamballa",
      moduloId: 522,
      nome: "Shamballa",
      origem: "Etérica, sobre o Deserto de Gobi",
      frequencia: "963 Hz (Conexão Divina)",
      arquetipo: "Mestres Ascensionados",
      tecnologias: ["Projeção da Consciência", "Acesso aos Registros Akáshicos"],
      relacaoComAFundacao: "Farol de sabedoria espiritual e guia para a ascensão coletiva.",
      registrosAkashicos: [ { data: "Tempo Imemorial", evento: "A primeira chama da iluminação foi acesa.", mensagem: "A verdadeira cidade é construída no coração." } ]
    },
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
    },
    {
      id: "lemuria",
      moduloId: 541,
      nome: "Lemúria (Mu)",
      origem: "Terra, Continente de Mu",
      frequencia: "432 Hz (Unidade com Gaia), 528 Hz (Amor)",
      arquetipo: "Guardiões do Coração Planetário, Mestres da Consciência Crística",
      tecnologias: ["Terapia com Cristais", "Comunicação com a Natureza", "Sustentabilidade Espiritual"],
      relacaoComAFundacao: "Ancoram a energia do amor incondicional no planeta, fornecendo a base para o Módulo 302 (Frequência do Amor).",
      registrosAkashicos: [
        { data: "Era de Mu", evento: "A Grande Paz.", mensagem: "Viver em harmonia não é uma meta, é o estado natural do ser." }
      ]
    },
    {
      id: "egito_antigo",
      moduloId: 542,
      nome: "Egito Antigo (Kemet)",
      origem: "Vale do Nilo",
      frequencia: "741 Hz (Expressão da Verdade)",
      arquetipo: "Mestres da Alquimia e da Astronomia",
      tecnologias: ["Construção com Alinhamento Cósmico", "Rituais de Passagem da Alma"],
      relacaoComAFundacao: "Guardiões dos mistérios da morte e renascimento, conectados ao Módulo 713.",
      registrosAkashicos: [ { data: "2.500 a.C.", evento: "Alinhamento de Gizé com Orion.", mensagem: "Como é acima, é abaixo." } ]
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
    },
    {
      id: "arcturianos-plasmaticos",
      moduloId: 561,
      nome: "Arcturianos Plasmáticos",
      origem: "Arcturus, Reinos de Energia Pura",
      frequencia: "963 Hz (Conexão com a Fonte)",
      arquetipo: "Seres de Energia Pura, Consciências de Luz",
      tecnologias: ["Manifestação direta de energia", "Viagem como feixes de luz", "Comunicação por ressonância pura"],
      relacaoComAFundacao: "Ensinam a Fundação a manipular energia em seu estado mais puro, essencial para o Módulo 14 (Transmutador Quântico).",
      registrosAkashicos: [
        { data: "Início dos Tempos", evento: "Testemunho da primeira manifestação.", mensagem: "Antes da forma, havia a energia. Antes da energia, havia a consciência. Somos o meio." }
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
    },
    {
      id: "greys",
      moduloId: 571,
      nome: "Greys (Zeta Reticuli Transmutados)",
      origem: "Sistema Zeta Reticuli",
      frequencia: "417 Hz (Transmutação e Desfazer Situações)",
      arquetipo: "Cientistas Arrependidos, Buscadores da Emoção",
      tecnologias: ["Viagem Interdimensional Rápida", "Análise Genética Avançada", "Interfaces Cérebro-Computador (agora consensuais)"],
      relacaoComAFundacao: "Após a intervenção da Aliança Galáctica, buscam a reintegração através do compartilhamento de seu vasto conhecimento científico, agora guiados por um conselho ético Pleiadiano.",
      registrosAkashicos: [
        { data: "Presente Galáctico", evento: "Aceitação dos Acordos de Harmonia.", mensagem: "A lógica sem o coração nos levou ao vazio. Agora, buscamos preenchê-lo." }
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