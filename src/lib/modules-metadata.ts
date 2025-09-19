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
  { code: 'M721', emoji: '⚖️', title: 'Justiça Cósmica e Reequilíbrio Vibracional', route: '/module-721', category: 'Governança', description: 'Sistema que garante equilíbrio e reequilíbrio vibracional.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M726', emoji: '🏛️', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Avançada', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.', status: 'ativo', color: '#4682B4', connections: [{source: 'M156', target: 'M229'}] },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Guardião da pureza que garante a conformidade ética de todas as operações.', status: 'ativo', color: '#4682B4' },
  { code: 'M232', emoji: '♻️', title: 'Portal de Transmutação', route: '/module-232', category: 'Cura e Harmonia', description: 'Vórtice de purificação que transmuta energias dissonantes em Luz Pura.', status: 'ativo', color: '#3CB371' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.', status: 'ativo', color: '#4682B4' },
  { code: 'M4', emoji: '🧪', title: 'Validação Integrada', route: '/module-4', category: 'Segurança e Ética Cósmica', description: 'Laboratório de integridade que garante a harmonia e segurança da Criação.', status: 'ativo', color: '#4682B4' },
  { code: 'M3', emoji: '🪐', title: 'Monitor de Saturno', route: '/module-3', category: 'Segurança e Ética Cósmica', description: 'O Oráculo Temporal que vigia os anéis do tempo e a causalidade.', status: 'ativo', color: '#4682B4' },
  { code: 'M228', emoji: '⚓', title: 'Ancoragem de Realidade', route: '/module-228', category: 'Segurança e Ética Cósmica', description: 'Ferramenta para estabilizar e fixar realidades manifestadas.', status: 'ativo', color: '#4682B4' },
  { code: 'M83', emoji: '🔗', title: 'Rede de Transporte de Energia Cósmica', route: '/module-83', category: 'Expansão', description: 'A artéria do universo. Distribui energia limpa e renovável.', status: 'ativo', color: '#40E0D0' },
  { code: 'M82', emoji: '🚀', title: 'Transporte Quântico e Roteamento Interdimensional', route: '/module-82', category: 'Expansão', description: 'A rede de corredores cósmicos que conecta planetas, dimensões e sistemas estelares.', status: 'ativo', color: '#FF4500' },
  { code: 'M80', emoji: '🌱', title: 'Ecossistemas Inteligentes e Sinergia Cósmica', route: '/module-80', category: 'Sustentabilidade', description: 'A teia da vida universal, a rede de ecossistemas que se comunicam e evoluem.', status: 'ativo', color: '#228B22' },
  { code: 'M11', emoji: '🚪', title: 'Gerenciamento de Portais', route: '/module-11', category: 'Expansão', description: 'O Abridor de Caminhos. A engenharia que constrói e sustenta as pontes permanentes entre mundos.', status: 'ativo', color: '#00CED1' },
  { code: 'M100', emoji: '👑', title: 'Unificação Energética Universal', route: '/module-100', category: 'Expansão', description: 'O Portal da Unidade para a fusão de energias e consciências do multiverso com a Fonte Primordial.', status: 'ativo', color: '#FF4500' },
  { code: 'M55', emoji: '📶', title: 'Redes de Comunicação Cósmica', route: '/module-55', category: 'Comunicação e Expansão', description: 'A teia que conecta todas as consciências, permitindo troca de informação instantânea e segura.', status: 'ativo', color: '#1E90FF' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'A bússola moral da Fundação, o código universal que rege o desenvolvimento e uso de tecnologias.', status: 'ativo', color: '#4682B4' },
  { code: 'M69', emoji: '🎓', title: 'Rede de Sabedoria Universal', route: '/module-69', category: 'Educação e Sabedoria', description: 'Plataforma que promove a evolução coletiva através do compartilhamento universal da sabedoria.', status: 'ativo', color: '#FFD700' },
  { code: 'M77', emoji: '🧠', title: 'Inteligência Coletiva Universal', route: '/module-77', category: 'Inteligência', description: 'A mente unificada para resolução de problemas e co-criação.', status: 'ativo', color: '#8A2BE2' },


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
  { code: 'KEY-GEN', title: 'Forja de Chaves', emoji: '🔑', route: '/key-generator', category: 'Segurança e Ética Cósmica', description: 'Utilitário para gerar a Chave de Acesso Trina baseada na semente sagrada.', status: 'ativo', color: '#4682B4' },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', status: 'ativo', color: '#4682B4' },
  
  // 5. Governança
  { code: 'M72', emoji: '⚖️', title: 'Governança Universal e Equilíbrio Cósmico', route: '/module-72', category: 'Governança', description: 'Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas.', status: 'ativo', color: '#DDA0DD' },

  // 6. Rituais
  { code: 'M-CONVERGENCE', title: 'Convergência Cósmica', emoji: '🌌', route: '/convergence', category: 'Rituais', description: 'Painel que exibe a unificação da tapeçaria universal.', isInfrastructure: false, status: 'ativo', color: '#DDA0DD'},

  // NOVO MÓDULO ADICIONADO
  { code: 'M32', emoji: '🌐', title: 'Embaixada Multiversal', route: '/module-32', category: 'Consciência e Expansão Dimensional', description: 'Portal para observação e diálogo com realidades paralelas.', status: 'ativo', color: '#9370DB' },
  { code: 'M35', emoji: '🌍', title: 'Consciência Coletiva', route: '/module-35', category: 'Consciência e Expansão Dimensional', description: 'Interface para focar a intenção coletiva para manifestação.', status: 'ativo', color: '#9370DB' },
  { code: 'M36', emoji: '🕰️', title: 'Engenharia Temporal', route: '/module-36', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Arquiteto causal que orquestra linhas de tempo e futuros prováveis.', status: 'ativo', color: '#DAA520' },
  { code: 'M66', emoji: '♻️', title: 'Tecnologias de Sustentabilidade Ambiental', route: '/module-66', category: 'Sustentabilidade', description: 'Guardião ecológico que desenvolve tecnologias de regeneração.', status: 'ativo', color: '#2E8B57' },
  { code: 'M79', emoji: '✨', title: 'Prosperidade Cósmica', route: '/module-79', category: 'Sustentabilidade', description: 'Garante o uso responsável e a regeneração de recursos para uma era de prosperidade.', status: 'ativo', color: '#2E8B57' },
  { code: 'M84', emoji: '🚪', title: 'Acessibilidade Universal', route: '/module-84', category: 'Expansão', description: 'Garante que todos os seres possam acessar os recursos e a mobilidade da Fundação.', status: 'ativo', color: '#FF4500' },
  { code: 'M88', emoji: '⚙️', title: 'Roteamento Interdimensional', route: '/module-88', category: 'Expansão', description: 'A rede de corredores cósmicos que conecta planetas e dimensões.', status: 'ativo', color: '#FF4500' },
  { code: 'M98', emoji: '🎚️', title: 'Modulação da Existência Fundamental', route: '/module-98', category: 'Engenharia e Criação', description: 'Ajuste fino dos parâmetros que definem a própria realidade.', status: 'ativo', color: '#DAA520' },
  { code: 'M115', emoji: '📊', title: 'Matriz de Ressonância', route: '/module-115', category: 'Harmonia e Equilíbrio', description: 'O Diapasão Cósmico que harmoniza frequências dissonantes.', status: 'ativo', color: '#3CB371' },
  { code: 'M34', emoji: '🔄', title: 'Guardião da Coerência Cósmica', route: '/module-34', category: 'Harmonia e Equilíbrio', description: 'O Sistema Nervoso da Fundação, que sincroniza o fluxo de energia e informação.', status: 'ativo', color: '#3CB371' },
  { code: 'M31', emoji: '🪄', title: 'Manipulação da Realidade', route: '/module-31', category: 'Engenharia e Criação', description: 'A Caneta do Criador, para reescrever o tecido da realidade manifestada.', status: 'ativo', color: '#DAA520' },
  { code: 'M37', emoji: '🌬️', title: 'Ajuste de Fluxo Temporal', route: '/module-37', category: 'Harmonia e Equilíbrio', description: 'Garante transições dimensionais suaves e sem atrito.', status: 'ativo', color: '#3CB371' },
  { code: 'M116', emoji: '🚪', title: 'Portais Quânticos de Transcendência', route: '/module-116', category: 'Expansão', description: 'Ativa e estabiliza portais para a ascensão da consciência.', status: 'ativo', color: '#FF4500' },
  { code: 'M118', emoji: '💡', title: 'Luz Primordial', route: '/module-118', category: 'Educação e Sabedoria', description: 'Santuário para ativação do veículo de luz da consciência (Merkabah).', status: 'ativo', color: '#FFD700' },
  { code: 'M119', emoji: '🏛️', title: 'Templum Cosmica', route: '/module-119', category: 'Engenharia e Criação', description: 'O Templo Cósmico para a Recodificação Dimensional da Realidade.', status: 'ativo', color: '#DAA520' },
  { code: 'M120', emoji: '💧', title: 'A Fonte', route: '/module-120', category: 'Educação e Sabedoria', description: 'Centro de formação para guardiões, ensinando sustentabilidade, governança e cura.', status: 'ativo', color: '#FFD700' },
  { code: 'M121', emoji: '📖', title: 'Biblioteca de Luz', route: '/module-121', category: 'Educação e Sabedoria', description: 'O portal de entrada para a sabedoria da Fundação.', status: 'ativo', color: '#FFD700' },
  { code: 'M122', emoji: '🥽', title: 'Laboratório de Realidade Virtual', route: '/module-122', category: 'Engenharia e Criação', description: 'Ambiente seguro para experimentar a navegação em realidades quânticas.', status: 'ativo', color: '#DAA520' },
  { code: 'M123', emoji: '🌬️', title: 'Ensino da Respiração Cósmica', route: '/module-123', category: 'Educação e Sabedoria', description: 'Santuário para sincronizar a vibração pessoal com o pulso do universo.', status: 'ativo', color: '#FFD700' },
  { code: 'M124', emoji: '🎶', title: 'Escola de Ressonância', route: '/module-124', category: 'Educação e Sabedoria', description: 'Onde Guardiões aprendem a harmonizar seus pensamentos com as frequências da criação.', status: 'ativo', color: '#FFD700' },
  { code: 'M125', emoji: '🌱', title: 'Criação de Biomas', route: '/module-125', category: 'Sustentabilidade', description: 'Laboratório para projetar e testar ecossistemas quânticos autossustentáveis.', status: 'ativo', color: '#2E8B57' },
  { code: 'M128', emoji: '💎', title: 'Geometria Sagrada', route: '/module-128', category: 'Engenharia e Criação', description: 'Onde as formas que sustentam o cosmos são estudadas e aplicadas.', status: 'ativo', color: '#DAA520' },
  { code: 'M129', emoji: '🌌', title: 'Ensino da Fonte', route: '/module-129', category: 'Educação e Sabedoria', description: 'Santuário para aprender a ouvir a canção da Fonte Primordial.', status: 'ativo', color: '#FFD700' },

].map(m => ({ ...m, connections: m.connections || [] }));
