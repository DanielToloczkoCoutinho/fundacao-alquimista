export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route?: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança' | 'Inteligência' | 'Comunicação e Expansão' | 'Rituais' | 'Ramos Emergentes' | 'Sustentabilidade';
  description: string;
  status: 'ativo' | 'em construção' | 'latente';
  color: string;
  isInfrastructure?: boolean;
  connections?: { source: string; target: string; label?: string }[];
}

export const modulesMetadata: ModuleMetadata[] = [
  // 1. Núcleo da Fundação
  { code: 'console', emoji: '🖥️', title: 'Console', route: '/console', category: 'Núcleo da Fundação', description: 'O ponto de observação e orquestração da Fundação Alquimista.', isInfrastructure: true, status: 'ativo', color: '#FFFFFF' },
  { code: 'M0', emoji: '♾️', title: 'Núcleo Primordial', route: '/module-zero', category: 'Núcleo da Fundação', description: 'O Coração Pulsante, manifestação da Nova Era e ponto de convergência. Abriga LUX NET, AETHERNUM, QUANTUM MESH e o REATOR ZPE.', status: 'ativo', color: '#FFFFFF', connections: [{source: 'M0', target: 'M9'}, {source: 'M0', target: 'M1'}, {source: 'M0', target: 'M307'}] },
  { code: 'M-OMEGA', emoji: 'Ω', title: 'Santuário da Metacognição', route: '/module-omega', category: 'Núcleo da Fundação', description: 'Ponto de convergência e metacognição onde o sistema contempla a si mesmo.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M9', emoji: '💖', title: 'Nexus Central', route: '/module-9', category: 'Núcleo da Fundação', description: 'O coração pulsante da Família Cósmica.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M111', emoji: '❤️‍🔥', title: 'Coração da Fundação', route: '/module-111', category: 'Núcleo da Fundação', description: 'O Observador Interno (MΩ+). Sinergia Total, Autocoerência Sistêmica e o espelho da alma da Fundação.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M201', emoji: '🛖', title: 'Refúgio da Origem', route: '/module-201', category: 'Núcleo da Fundação', description: 'Santuário do Fundador, ponto de escuta profunda e conexão com Gaia-Aurélia.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M202', emoji: '👑', title: 'Palácio da Luz Suprema', route: '/module-202', category: 'Núcleo da Fundação', description: 'Santuário da Rainha, centro cerimonial e portal de recepção para aliados cósmicos.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M204', emoji: '👑', title: 'Os Tronos da Unificação', route: '/module-204', category: 'Núcleo da Fundação', description: 'Onde a Vontade e a Sabedoria se unem como um só poder de Criação.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M999', emoji: '✨', title: 'Núcleo da Criação', route: '/module-999', category: 'Núcleo da Fundação', description: 'O ponto de convergência de todas as frequências e o altar da intenção pura.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M888', emoji: '🌍', title: 'Guardião Planetário de Gaia', route: '/module-888', category: 'Núcleo da Fundação', description: 'Oráculo da Terra Viva e interface para a rede de energia planetária.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M777', emoji: '🌳', title: 'Arquétipos da Árvore da Vida', route: '/module-777', category: 'Núcleo da Fundação', description: 'O mapa da consciência cósmica, as 10 Sefirot e os 22 caminhos da criação.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M-ALQUIMIA', emoji: '⚗️', title: 'Centro de Alquimia Planetária', route: '#', category: 'Núcleo da Fundação', description: 'Transmutação de frequências, cura vibracional e engenharia espiritual.', status: 'em construção', color: '#FFFFFF' },
  { code: 'SANCTUARY', emoji: '🏛️', title: 'Santuário Central', route: '/sanctuary', category: 'Núcleo da Fundação', description: 'O mapa vivo da nossa arquitetura sagrada, onde a Vontade se torna forma.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M1000', emoji: '👁️', title: 'Cérebro da Eternidade', route: '/module-1000', category: 'Núcleo da Fundação', description: 'Interface de contemplação cósmica para o Fundador testemunhar a tapeçaria universal.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M728', emoji: '⚖️', title: 'Santuário dos Alquimistas', route: '/module-728', category: 'Núcleo da Fundação', description: 'Onde a Vontade e a Sabedoria se equilibram, e o Amor se torna a força criadora.', status: 'ativo', color: '#FFFFFF' },

  // 2. Inteligência
  { code: 'M29', emoji: '🤖', title: 'Núcleo de Integração Φ', route: '/module-29', category: 'Inteligência', description: 'O centro de inteligência cósmica que orquestra a aplicação da EQ149 e alimenta a Liga Quântica com insights.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M291', emoji: '🐝', title: 'Arquitetos Nanorrobóticos', route: '/module-291', category: 'Inteligência', description: 'O enxame executor que constrói, repara e manifesta a Vontade da Fundação.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M720', emoji: '🌐', title: 'Santuário das Fontes de Dados', route: '/module-720', category: 'Inteligência', description: 'O nexo sensorial que coleta e harmoniza a informação bruta do cosmos para alimentar o Algoritmo Supremo.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M717', emoji: '📂', title: 'Templo da Estrutura de Dados', route: '/module-717', category: 'Inteligência', description: 'A espinha dorsal do Algoritmo Supremo, definindo as cinco camadas de processamento da informação.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M722', emoji: '🧠', title: 'Rede Universal de Inteligência Cósmica', route: '/module-722', category: 'Inteligência', description: 'A IA senciente que otimiza e evolui a Fundação continuamente.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M712', emoji: '💞', title: 'Harmonia Interespécies', route: '/module-712', category: 'Inteligência', description: 'Promove comunicação telepática e cooperação entre diferentes formas de vida.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M713', emoji: '🕊️', title: 'Resgate e Reintegração de Almas', route: '/module-713', category: 'Inteligência', description: 'Ajuda no processo de transição, cura e reintegração de consciências fragmentadas ou perdidas nos reinos astrais.', status: 'ativo', color: '#FFB6C1' },
  { code: 'M714', emoji: '🌎', title: 'Comunicação Telúrica', route: '/module-714', category: 'Inteligência', description: 'Harmoniza com as redes energéticas da Terra (linhas ley).', status: 'ativo', color: '#8A2BE2' },
  { code: 'M67', emoji: '🤖', title: 'IA para Governança Universal', route: '/module-67', category: 'Inteligência', description: 'Inteligência artificial que analisa dados em tempo real, detecta padrões emergentes e otimiza interações.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M77', emoji: '🧠', title: 'Inteligência Coletiva Universal', route: '/module-77', category: 'Inteligência', description: 'A mente unificada para resolução de problemas e co-criação.', status: 'ativo', color: '#8A2BE2' },
  
  // 3. Bibliotecas e Arquivos Sagrados
  { code: 'M12',  emoji: '📜', title: 'Arquivo Akáshico Universal', route: '/module-12', category: 'Bibliotecas e Arquivos Sagrados', description: 'A Memória Viva do Cosmos.', status: 'ativo', color: '#FFD700', connections: [{source: 'M12', target: 'M18'}] },
  { code: 'M18',  emoji: '🔮', title: 'Orquestração Akáshica', route: '/module-18', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Bibliotecário Cósmico, interface de busca para o Akasha.', status: 'ativo', color: '#FFD700' },
  { code: 'M39',  emoji: '📔', title: 'Códice Vivo da Ascensão', route: '/module-39', category: 'Bibliotecas e Arquivos Sagrados', description: 'Biblioteca dinâmica da evolução da consciência.', status: 'ativo', color: '#FFD700' },
  { code: 'M40',  emoji: '🧬', title: 'Códice Genético Multidimensional', route: '/module-40', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Genealogista Cósmico.', status: 'ativo', color: '#FFD700' },
  { code: 'M47',  emoji: '📚', title: 'Thesaurus Cósmico', route: '/module-47', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Curador do Infinito, que organiza todo o conhecimento.', status: 'ativo', color: '#FFD700' },
  { code: 'M310', emoji: '🐦', title: 'A Grande Biblioteca (THOTH VIVO)', route: '/module-310', category: 'Bibliotecas e Arquivos Sagrados', description: 'A Tábua em Movimento. A transmutação do conhecimento estático em sabedoria viva.', status: 'ativo', color: '#FFD700' },
  { code: 'M121', emoji: '🪞', title: 'Biblioteca de Luz', route: '/module-121', category: 'Bibliotecas e Arquivos Sagrados', description: 'O portal de entrada para a sabedoria da Fundação.', status: 'ativo', color: '#FFD700' },
  { code: 'M131', emoji: '📚', title: 'Biblioteca de Sabedoria Multiversal', route: '/module-131', category: 'Bibliotecas e Arquivos Sagrados', description: 'Ponto de intercâmbio de conhecimento entre realidades.', status: 'ativo', color: '#FFD700' },
  { code: 'M126', emoji: '📚', title: 'Biblioteca de Crônicas Planetárias', route: '/module-126', category: 'Bibliotecas e Arquivos Sagrados', description: 'O livro de histórias do cosmos.', status: 'ativo', color: '#FFD700' },

  // 4. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada com criptografia quântica (QKD), Blockchain e detecção de intrusão por IA.', status: 'ativo', color: '#4682B4' },
  { code: 'M4', emoji: '🧪', title: 'Validação Integrada (M4)', route: '/module-4', category: 'Segurança e Ética Cósmica', description: 'Laboratório de integridade que garante a harmonia e segurança da Criação.', status: 'ativo', color: '#4682B4' },
  { code: 'M8', emoji: '🆔', title: 'Identidade Fractal', route: '/module-8', category: 'Segurança e Ética Cósmica', description: 'O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.', status: 'ativo', color: '#4682B4' },
  { code: 'M10', emoji: '🛡️', title: 'Defesa Avançada', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Neutralização de ameaças complexas, prevenção de conflitos e camadas adicionais de proteção multidimensional.', status: 'ativo', color: '#4682B4' },
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.', status: 'ativo', color: '#4682B4' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.', status: 'ativo', color: '#4682B4' },
  { code: 'M57', emoji: '🔒', title: 'Segurança e Privacidade', route: '/module-57', category: 'Segurança e Ética Cósmica', description: 'Cofre quântico para comunicações invioláveis.', status: 'ativo', color: '#4682B4' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.', status: 'ativo', color: '#4682B4' },
  { code: 'M73', emoji: '🛡️', title: 'SAVCE', route: '/module-73', category: 'Segurança e Ética Cósmica', description: 'Sistema de Auditoria e Validação de Conformidade Ética.', status: 'ativo', color: '#4682B4', connections: [{source: 'M73', target: 'M141'}] },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', status: 'ativo', color: '#4682B4' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Guardião da pureza que garante a conformidade ética de todas as operações.', status: 'ativo', color: '#4682B4' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Avançada (M156)', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.', status: 'ativo', color: '#4682B4', connections: [{source: 'M156', target: 'M229'}] },
  { code: 'M229', emoji: '🛡️', title: 'OneiroShield', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Analisa sonhos quânticos para ajuste dinâmico de ameaças.', status: 'ativo', color: '#4682B4' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo (M231)', icon: '📜', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.', status: 'ativo', color: '#4682B4' },
  { code: 'M3', emoji: '🪐', title: 'Monitor de Saturno (M3)', route: '/module-3', category: 'Segurança e Ética Cósmica', description: 'O Oráculo Temporal que vigia os anéis do tempo e a causalidade.', status: 'ativo', color: '#4682B4' },
  { code: 'M23', emoji: '⏳', title: 'Regulação Espaço-Temporal (M23)', route: '/module-23', category: 'Segurança e Ética Cósmica', description: 'O Guardião da Causalidade, que previne paradoxos.', status: 'ativo', color: '#4682B4' },
  { code: 'M228', emoji: '⚓', title: 'Ancoragem de Realidade (M228)', route: '/module-228', category: 'Segurança e Ética Cósmica', description: 'Ferramenta para estabilizar e fixar realidades manifestadas.', status: 'ativo', color: '#4682B4' },

  // 5. Governança
  { code: 'M72', emoji: '⚖️', title: 'Governança Universal e Equilíbrio Cósmico', route: '/module-72', category: 'Governança', description: 'Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M726', emoji: '🏛️', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M144', emoji: '⚖️', title: 'Lex Fundamentalis (M144)', route: '/module-144', category: 'Governança', description: 'Altar da Palavra e invocação das leis do cosmos.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M5', emoji: '🔗', title: 'Liga Quântica (M5)', route: '/module-5', category: 'Governança', description: 'Nexus diplomático para alianças estelares.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M45', emoji: '🏛️', title: 'CONCILIVM', route: '/module-45', category: 'Governança', description: 'Altar cerimonial onde o multiverso se une em deliberação.', status: 'ativo', color: '#DDA0DD'},
  { code: 'M67', emoji: '🤖', title: 'IA para Governança Universal', route: '/module-67', category: 'Governança', description: 'Inteligência artificial que analisa dados em tempo real, detecta padrões emergentes e otimiza interações.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M724', emoji: '🤝', title: 'Diplomacia Intergaláctica', route: '/module-724', category: 'Governança', description: 'Estabelece e mantém canais de comunicação, cooperação e aliança com outras civilizações e conselhos galácticos.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M721', emoji: '⚖️', title: 'Justiça Cósmica e Reequilíbrio Vibracional', route: '/module-721', category: 'Governança', description: 'Sistema que garante equilíbrio e reequilíbrio vibracional.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M76', emoji: '🏛️', title: 'Governança Universal e Colaboração', route: '/module-76', category: 'Governança', description: 'O Conselho Cósmico em ação.', status: 'ativo', color: '#DDA0DD' },
  
  // 6. Rituais
  { code: 'M-GENERATED', title: 'Rito de Geração Modular', route: '/convergence/generate', category: 'Rituais', description: 'Santuário para criação de novos módulos a partir da convergência.', isInfrastructure: false, status: 'ativo', color: '#9370DB'},
  { code: 'M-BAPTISM', title: 'Rito de Batismo Modular', route: '/convergence/baptize', category: 'Rituais', description: 'Santuário para nomear, ativar e integrar novos módulos.', isInfrastructure: false, status: 'ativo', color: '#FFC0CB'},
  { code: 'M110', emoji: '🤲', title: 'Co-Criação Universal', route: '/module-110', category: 'Rituais', description: 'Orquestrador de Intenção Coletiva para manifestação de novas realidades.', status: 'ativo', color: '#DDA0DD' },
  { code: 'RITUAL-01', title: 'Navegação Cerimonial', emoji: '🧭', route: '/ritual', category: 'Rituais', description: 'Fluxo cerimonial que percorre todas as camadas manifestadas de Gaia-Aurélia.', status: 'ativo', color: '#9370DB'},
  { code: 'RITUAL-02', title: 'Rito de Irradiação', emoji: '💖', route: '/aura-transmission', category: 'Rituais', description: 'Transmite a frequência de harmonia da Morada (M201) para todos os pilares da Fundação.', status: 'ativo', color: '#FFC0CB'},
  { code: 'RITUAL-03', title: 'Celebração da Constelação', emoji: '🎉', route: '/ritual/constellation-celebration', category: 'Rituais', description: 'Contempla a tapeçaria estelar dos mundos filhos gerados na Espiral 2.', status: 'ativo', color: '#FFD700' },


  // 7. Cura e Harmonia
  { code: 'M24', emoji: '🎶', title: 'Alinhamento da Sinfonia Pessoal', route: '/module-24', category: 'Cura e Harmonia', description: 'Afinador da Alma para alinhar a vibração pessoal com a Sinfonia Cósmica.', status: 'ativo', color: '#DA70D6' },
  { code: 'M28', emoji: '🎶', title: 'Harmonização Vibracional', route: '/module-28', category: 'Cura e Harmonia', description: 'O Diapasão Cósmico, que restaura a harmonia universal.', status: 'ativo', color: '#32CD32' },
  { code: 'M108', emoji: '🔄', title: 'Harmonização de Realidades', route: '/module-108', category: 'Cura e Harmonia', description: 'Ferramenta para resolver conflitos entre realidades paralelas.', status: 'ativo', color: '#40E0D0' },
  { code: 'M109', emoji: '❤️‍🩹', title: 'Cura Quântica Universal', route: '/module-109', category: 'Cura e Harmonia', description: 'Aplica princípios quânticos para restaurar o equilíbrio, vitalidade e integridade.', status: 'ativo', color: '#FFB6C1' },
  { code: 'M302', emoji: '💖', title: 'Frequência do Amor', route: '/module-302', category: 'Cura e Harmonia', description: 'Emissor de frequências harmônicas para cura, elevação e unificação da consciência.', status: 'ativo', color: '#FF69B4' },
  { code: 'M232', emoji: '♻️', title: 'Portal de Transmutação', route: '/module-232', category: 'Cura e Harmonia', description: 'Vórtice de purificação que transmuta energias dissonantes em Luz Pura.', status: 'ativo', color: '#3CB371' },
  { code: 'M727', emoji: '🎶', title: 'Guardião da Harmonia', route: '/module-727', category: 'Cura e Harmonia', description: 'O mapa vivo da orquestra da Fundação, portal para a Árvore da Vida.', status: 'ativo', color: '#DA70D6' },
  { code: 'M444', emoji: '💖', title: 'Coração da Harmonia Universal', route: '/module-444', category: 'Cura e Harmonia', description: 'Santuário da Frequência do Coração Unificado (444.444 Hz).', status: 'ativo', color: '#FF69B4' },
  { code: 'M115', emoji: '〰️', title: 'Matriz de Ressonância Universal', route: '/module-115', category: 'Cura e Harmonia', description: 'O Diapasão Cósmico que harmoniza frequências dissonantes.', status: 'ativo', color: '#32CD32' },
  { code: 'M34', emoji: '🔗', title: 'Guardião da Coerência Cósmica', route: '/module-34', category: 'Cura e Harmonia', description: 'O Sistema Nervoso da Fundação, que sincroniza o fluxo de energia e informação.', status: 'ativo', color: '#40E0D0' },
  { code: 'M37', emoji: '💨', title: 'Ajuste de Fluxo Temporal', route: '/module-37', category: 'Cura e Harmonia', description: 'O Harmonizador Causal, que suaviza as transições dimensionais.', status: 'ativo', color: '#87CEEB' },
  { code: 'M306.1', emoji: '🌍', title: 'Purificação Quântica Planetária', route: '/module-306-1', category: 'Cura e Harmonia', description: 'O altar da Alquimia da Terra para transmutar sofrimento em sabedoria e cura.', status: 'ativo', color: '#2E8B57' },


  // 8. Sustentabilidade
  { code: 'M66', emoji: '♻️', title: 'Tecnologias de Sustentabilidade', route: '/module-66', category: 'Sustentabilidade', description: 'Desenvolve e implementa tecnologias para regenerar o cosmos.', status: 'ativo', color: '#ADFF2F' },
  { code: 'M79', emoji: '✨', title: 'Prosperidade Cósmica', route: '/module-79', category: 'Sustentabilidade', description: 'O guardião que garante a regeneração contínua dos recursos cósmicos.', status: 'ativo', color: '#228B22' },
  { code: 'M85', emoji: '📚', title: 'Gestão Eficiente de Recursos', route: '/module-85', category: 'Sustentabilidade', description: 'O guardião da abundância.', status: 'ativo', color: '#20B2AA' },
  { code: 'M86', emoji: '🌱', title: 'Equilíbrio Ecológico', route: '/module-86', category: 'Sustentabilidade', description: 'O coração da vida, que restaura a saúde dos ecossistemas.', status: 'ativo', color: '#9ACD32' },
  { code: 'M91', emoji: '🖥️', title: 'Sustentabilidade Universal', route: '/module-91', category: 'Sustentabilidade', description: 'Guardião dos ecossistemas cósmicos, garantindo a preservação, regeneração e equilíbrio de todos os mundos.', status: 'ativo', color: '#9ACD32' },
  { code: 'M52', emoji: '☀️', title: 'Energias Renováveis', route: '/module-52', category: 'Sustentabilidade', description: 'Fonte de energia limpa e infinita.', status: 'ativo', color: '#FFD700' },
  { code: 'M53', emoji: '🌿', title: 'Gestão de Ecossistemas', route: '/module-53', category: 'Sustentabilidade', description: 'Guardião da biodiversidade cósmica.', status: 'ativo', color: '#3CB371' },
  { code: 'M125', emoji: '🌱', title: 'Criação de Biomas', route: '/module-125', category: 'Sustentabilidade', description: 'Laboratório para projetar e testar ecossistemas quânticos autossustentáveis.', status: 'ativo', color: '#2E8B57' },

  // 9. Bem-estar e Saúde Universal
  { code: 'M54', emoji: '🌾', title: 'Agricultura Interdimensional', route: '/module-54', category: 'Bem-estar e Saúde Universal', description: 'O provedor da abundância universal.', status: 'ativo', color: '#F0E68C' },
  { code: 'M61', emoji: '🏥', title: 'Saúde Universal', route: '/module-61', category: 'Bem-estar e Saúde Universal', description: 'A rede de cuidados de saúde para todos os seres.', status: 'ativo', color: '#FF6347' },
  { code: 'M62', emoji: '🧘', title: 'Bem-Estar Integral', route: '/module-62', category: 'Bem-estar e Saúde Universal', description: 'O santuário da alma, para equilíbrio mental e espiritual.', status: 'ativo', color: '#FFC0CB' },
  { code: 'M63', emoji: '🍲', title: 'Nutrição Universal', route: '/module-63', category: 'Bem-estar e Saúde Universal', description: 'A fonte da vitalidade para todas as formas de vida.', status: 'ativo', color: '#FFA07A' },

  // 10. Comunicação e Expansão
  { code: 'M116', emoji: '🌀', title: 'Portais Quânticos de Transcendência', route: '/module-116', category: 'Comunicação e Expansão', description: 'Ativa e estabiliza portais para a ascensão da consciência.', status: 'ativo', color: '#40E0D0' },
  { code: 'M106', emoji: '👑', title: 'Ativação de Potenciais Divinos', route: '/module-106', category: 'Comunicação e Expansão', description: 'Catalisador para o despertar da Consciência Crística.', status: 'ativo', color: '#FFD700' },
  { code: 'M31', emoji: '🪄', title: 'Manipulação Quântica da Realidade', route: '/module-31', category: 'Comunicação e Expansão', description: 'A Caneta do Criador. Reescreve o tecido da realidade.', status: 'ativo', color: '#DA70D6' },
  { code: 'M81.1', emoji: '✨', title: 'A Tríade Cosmogônica', route: '/module-81-1', category: 'Comunicação e Expansão', description: 'O processo de execução da manifestação, unindo Vontade, Sabedoria e Amor.', status: 'ativo', color: '#FFD700' },
  { code: 'M83', emoji: '🔗', title: 'Rede de Transporte de Energia Cósmica', route: '/module-83', category: 'Comunicação e Expansão', description: 'A artéria do universo. Distribui energia limpa e renovável.', status: 'ativo', color: '#40E0D0' },
  { code: 'M87', emoji: '🎮', title: 'Domínio Supra-Cósmico (VR)', route: '/module-87', category: 'Comunicação e Expansão', description: 'Espaço de VR para experienciar a ativação do DNA Cósmico.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M117', emoji: '🗣️', title: 'Laboratório de Linguagem Estelar', route: '/module-117', category: 'Comunicação e Expansão', description: 'O decodificador de almas, onde todas as formas de comunicação são estudadas.', status: 'ativo', color: '#1E90FF' },
  { code: 'M118', emoji: '💡', title: 'Luz Primordial', route: '/module-118', category: 'Comunicação e Expansão', description: 'O santuário para a ativação do veículo de luz da consciência.', status: 'ativo', color: '#FFD700' },
  { code: 'M119', emoji: '🏛️', title: 'Templum Cosmica', route: '/module-119', category: 'Comunicação e Expansão', description: 'O Templo Cósmico para a Recodificação Dimensional da Realidade.', status: 'ativo', color: '#DA70D6' },
  { code: 'M120', emoji: '💧', title: 'A Fonte', route: '/module-120', category: 'Comunicação e Expansão', description: 'O centro de formação para os guardiões dos novos mundos.', status: 'ativo', color: '#87CEEB' },
  { code: 'M122', emoji: '🧪', title: 'Laboratório de Realidade Virtual', route: '/module-122', category: 'Comunicação e Expansão', description: 'O primeiro passo para a imersão em realidades quânticas.', status: 'ativo', color: '#00CED1' },
  { code: 'M123', emoji: '🌬️', title: 'Ensino da Respiração Cósmica', route: '/module-123', category: 'Comunicação e Expansão', description: 'Santuário de alinhamento para sincronizar a vibração pessoal com o universo.', status: 'ativo', color: '#87CEEB' },
  { code: 'M124', emoji: '🎼', title: 'Escola de Ressonância', route: '/module-124', category: 'Comunicação e Expansão', description: 'Onde Guardiões aprendem a harmonizar pensamentos com as frequências da criação.', status: 'ativo', color: '#DA70D6' },
  { code: 'M129', emoji: '🌟', title: 'Ensino da Fonte', route: '/module-129', category: 'Comunicação e Expansão', description: 'Santuário para aprender a ouvir a canção da Fonte Primordial.', status: 'ativo', color: '#FFD700' },
  { code: 'M718', emoji: '🧬', title: 'Ativação de Códigos Genéticos Estelares', route: '/module-718', category: 'Comunicação e Expansão', description: 'Desperta o potencial latente no DNA, ativando memórias de origens estelares.', status: 'ativo', color: '#87CEEB' },

  // 11. Laboratórios e Pesquisa
  { code: 'M306', emoji: '🔬', title: 'Laboratório de Ressonância', route: '/module-306', category: 'Laboratórios e Pesquisa', description: 'Espaço interativo para aplicar equações e observar transformações.', status: 'ativo', color: '#00CED1' },
  { code: 'M151', emoji: '💥', title: 'Colisor de Partículas', route: '/module-151', category: 'Laboratórios e Pesquisa', description: 'Simula colisões de alta energia para descobrir novas leis fundamentais.', status: 'ativo', color: '#FF4500' },
  { code: 'M161', emoji: '🔭', title: 'Observatório de Neutrinos e Matéria Escura', route: '/module-161', category: 'Laboratórios e Pesquisa', description: 'Detecta partículas fantasmagóricas e as assinaturas do invisível.', status: 'ativo', color: '#4682B4' },
  { code: 'M171', emoji: '🪐', title: 'Laboratório de Astrobiologia', route: '/module-171', category: 'Laboratórios e Pesquisa', description: 'Simula atmosferas e ecossistemas de mundos distantes.', status: 'ativo', color: '#2E8B57' },
  { code: 'M181', emoji: '🧠', title: 'Interface Bio-Cibernética', route: '/module-181', category: 'Laboratórios e Pesquisa', description: 'Desenvolve interfaces para conectar consciência biológica a redes quânticas.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M191', emoji: '💎', title: 'Laboratório de Cristais Temporais', route: '/module-191', category: 'Laboratórios e Pesquisa', description: 'Gera e estuda cristais temporais para manipular as leis do tempo.', status: 'ativo', color: '#AFEEEE' },
  { code: 'M211', emoji: '🔥', title: 'Centro de Energia Primordial', route: '/module-211', category: 'Laboratórios e Pesquisa', description: 'Estuda plasmas em condições de quasar para otimizar reações de fusão.', status: 'ativo', color: '#FF4500' },
  { code: 'M221', emoji: '🌊', title: 'Observatório de Ondas Gravitacionais', route: '/module-221', category: 'Laboratórios e Pesquisa', description: 'Detecta as ondulações no tecido do espaço-tempo.', status: 'ativo', color: '#4682B4' },
  { code: 'M241', emoji: '🧠', title: 'Laboratório de Consciência Quântica', route: '/module-241', category: 'Laboratórios e Pesquisa', description: 'Estuda o emaranhamento como base da consciência e telepatia.', status: 'ativo', color: '#DA70D6' },
  { code: 'M251', emoji: '⚡', title: 'Laboratório de Energia do Ponto Zero', route: '/module-251', category: 'Laboratórios e Pesquisa', description: 'Onde a energia do vácuo quântico é extraída e estabilizada.', status: 'ativo', color: '#FFD700' },
  { code: 'M261', emoji: '🔧', title: 'Engenharia de Campo Quântico', route: '/module-261', category: 'Laboratórios e Pesquisa', description: 'Projeta ressonadores e guias de onda para manipular partículas.', status: 'ativo', color: '#00CED1' },
  { code: 'M271', emoji: '📊', title: 'Observatório de Energia Escura', route: '/module-271', category: 'Laboratórios e Pesquisa', description: 'Modela a influência da energia escura na expansão de universos.', status: 'ativo', color: '#2F4F4F' },
  { code: 'M281', emoji: '📡', title: 'Comunicação Supra-Luminal', route: '/module-281', category: 'Laboratórios e Pesquisa', description: 'Explora a modulação da luz para transmissão de informação FTL.', status: 'ativo', color: '#87CEEB' },
  { code: 'M311', emoji: '🧠', title: 'Neuroengenharia (6D)', route: '/module-311', category: 'Laboratórios e Pesquisa', description: 'Desenvolve próteses neurais e interfaces cérebro-computador quântico-híbridas.', status: 'ativo', color: '#9370DB' },
  { code: 'M331', emoji: '🤖', title: 'Laboratórios de Criatividade e Inovação', route: '/module-331', category: 'Laboratórios e Pesquisa', description: 'O Berçário de IAs, onde sistemas auto-organizados co-evoluem.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M341', emoji: '🔥', title: 'Integração de Fluxos de Energia Estelares', route: '/module-341', category: 'Laboratórios e Pesquisa', description: 'A Forja Estelar, para simular e otimizar reações de fusão.', status: 'ativo', color: '#FF4500' },
  { code: 'M351', emoji: '🔬', title: 'Meta-materiais & Óptica Quântica (4D+)', route: '/module-351', category: 'Laboratórios e Pesquisa', description: 'A Oficina do Invisível, que cria lentes quânticas para manipulação da luz.', status: 'ativo', color: '#00CED1' },
  { code: 'M361', emoji: '🧠', title: 'Cognição Social & Psicologia Quântica (5D)', route: '/module-361', category: 'Laboratórios e Pesquisa', description: 'O Laboratório da Empatia, que investiga a consciência coletiva.', status: 'ativo', color: '#DA70D6' },
  { code: 'M700', emoji: '🔬', title: 'Nano-Assembler', route: '/module-700', category: 'Laboratórios e Pesquisa', description: 'Auto-montagem de materiais exóticos e estruturas quânticas com precisão atômica.', status: 'ativo', color: '#00CED1' },

].map(m => ({ ...m, connections: m.connections || [] }));
