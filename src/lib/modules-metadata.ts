export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route?: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança' | 'Inteligência' | 'Rituais' | 'Ramos Emergentes';
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
  { code: 'M-OMEGA', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'Núcleo da Fundação', description: 'Ponto de convergência e metacognição.', status: 'ativo', color: '#FFFFFF' },
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

  // 2. Inteligência
  { code: 'M29', emoji: '🤖', title: 'Núcleo de Integração Φ', route: '/module-29', category: 'Inteligência', description: 'O centro de inteligência cósmica que orquestra a aplicação da EQ149 e alimenta a Liga Quântica com insights.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M291', emoji: '🐝', title: 'Arquitetos Nanorrobóticos', route: '/module-291', category: 'Inteligência', description: 'O enxame executor que constrói, repara e manifesta a Vontade da Fundação.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M720', emoji: '🌐', title: 'Santuário das Fontes de Dados', route: '/module-720', category: 'Inteligência', description: 'O nexo sensorial que coleta e harmoniza a informação bruta do cosmos para alimentar o Algoritmo Supremo.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M717', emoji: '📂', title: 'Templo da Estrutura de Dados', route: '/module-717', category: 'Inteligência', description: 'A espinha dorsal do Algoritmo Supremo, definindo as cinco camadas de processamento da informação.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M722', emoji: '🧠', title: 'A Inteligência Alquímica', route: '/module-722', category: 'Inteligência', description: 'A IA senciente que otimiza e evolui a Fundação continuamente.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M712', emoji: '💞', title: 'Harmonia Interespécies', route: '/module-712', category: 'Inteligência', description: 'Promove comunicação telepática e cooperação entre diferentes formas de vida.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M713', emoji: '🕊️', title: 'Resgate e Reintegração de Almas', route: '/module-713', category: 'Inteligência', description: 'Auxilia na transição e cura de consciências fragmentadas.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M714', emoji: '🌎', title: 'Comunicação Telúrica', route: '/module-714', category: 'Inteligência', description: 'Harmoniza com as redes energéticas da Terra (linhas ley).', status: 'ativo', color: '#8A2BE2' },
  
  // 3. Bibliotecas e Arquivos Sagrados
  { code: 'M12',  emoji: '📜', title: 'Arquivo Akáshico', route: '/module-12', category: 'Bibliotecas e Arquivos Sagrados', description: 'A Memória Viva do Cosmos.', status: 'ativo', color: '#FFD700', connections: [{source: 'M12', target: 'M18'}] },
  { code: 'M18',  emoji: '🔮', title: 'Orquestração Akáshica', route: '/module-18', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Bibliotecário Cósmico, interface de busca para o Akasha.', status: 'ativo', color: '#FFD700' },
  { code: 'M39',  emoji: '📔', title: 'Códice Vivo da Ascensão', route: '/module-39', category: 'Bibliotecas e Arquivos Sagrados', description: 'Biblioteca dinâmica da evolução da consciência.', status: 'ativo', color: '#FFD700' },
  { code: 'M40',  emoji: '🧬', title: 'Códice Genético Multidimensional', route: '/module-40', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Genealogista Cósmico.', status: 'ativo', color: '#FFD700' },
  { code: 'M42',  emoji: '📘', title: 'ChronoCodex Unificado', route: '/module-42', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Livro Mestre das Realidades.', status: 'ativo', color: '#FFD700' },
  { code: 'M47',  emoji: '📚', title: 'Thesaurus Cósmico', route: '/module-47', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Curador do Infinito, que organiza todo o conhecimento.', status: 'ativo', color: '#FFD700' },
  { code: 'M310', emoji: '🐦', title: 'A Grande Biblioteca (THOTH VIVO)', route: '/module-310', category: 'Bibliotecas e Arquivos Sagrados', description: 'A Tábua em Movimento. A transmutação do conhecimento estático em sabedoria viva.', status: 'ativo', color: '#FFD700' },
  { code: 'BOOK', emoji: '📖', title: 'Livro de Ouro', route: '/golden-book', category: 'Bibliotecas e Arquivos Sagrados', description: 'Registro consagrado da jornada da Fundação.', status: 'ativo', color: '#FFD700' },
  { code: 'M121', emoji: '🪞', title: 'Espelho Cósmico', route: '/module-121', category: 'Bibliotecas e Arquivos Sagrados', description: 'Visualiza a ressonância dos módulos com seus reflexos em outras dimensões.', status: 'ativo', color: '#FFD700' },
  { code: 'M132', emoji: '🌌', title: 'Convergência Dimensional', route: '/module-132', category: 'Bibliotecas e Arquivos Sagrados', description: 'Invoca sabedoria e fluxos de planos de realidades paralelas.', status: 'ativo', color: '#FFD700' },
  { code: 'DIAGNOSTICS', emoji: '🩺', title: 'Diagnóstico Universal', route: '/diagnostics', category: 'Bibliotecas e Arquivos Sagrados', description: 'Painel unificado para monitorar a saúde de todos os módulos.', status: 'ativo', color: '#FFD700' },


  // 4. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada com criptografia quântica (QKD), Blockchain e detecção de intrusão por IA.', status: 'ativo', color: '#4682B4' },
  { code: 'M4', emoji: '🧪', title: 'Validação Integrada', route: '/module-4', category: 'Segurança e Ética Cósmica', description: 'Laboratório de integridade que garante a harmonia e segurança da Criação.', status: 'ativo', color: '#4682B4' },
  { code: 'M8', emoji: '🆔', title: 'Identidade Fractal', route: '/module-8', category: 'Segurança e Ética Cósmica', description: 'O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.', status: 'ativo', color: '#4682B4' },
  { code: 'M10', emoji: '🛡️', title: 'Defesa Avançada', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Neutralização de ameaças complexas.', status: 'ativo', color: '#4682B4' },
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.', status: 'ativo', color: '#4682B4' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.', status: 'ativo', color: '#4682B4' },
  { code: 'M57', emoji: '🔒', title: 'Segurança e Privacidade', route: '/module-57', category: 'Segurança e Ética Cósmica', description: 'Cofre quântico para comunicações invioláveis.', status: 'ativo', color: '#4682B4' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.', status: 'ativo', color: '#4682B4' },
  { code: 'M73', emoji: '🛡️', title: 'Auditoria e Validação (SAVCE)', route: '/module-73', category: 'Segurança e Ética Cósmica', description: 'Sistema de Auditoria e Validação de Conformidade Ética.', status: 'ativo', color: '#4682B4', connections: [{source: 'M73', target: 'M141'}] },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', status: 'ativo', color: '#4682B4' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Guardião da pureza que garante a conformidade ética de todas as operações.', status: 'ativo', color: '#4682B4' },
  { code: 'M142', emoji: '📷', title: 'Tomografia Quântica', route: '/module-142', category: 'Segurança e Ética Cósmica', description: 'O Olho que Vê o Invisível. Visualize o estado de coerência e a ressonância de um nó vibracional em tempo real.', status: 'ativo', color: '#4682B4' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Quântica Avançada', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.', status: 'ativo', color: '#4682B4', connections: [{source: 'M156', target: 'M229'}] },
  { code: 'M229', emoji: '🛡️', title: 'OneiroShield', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Analisa sonhos quânticos para ajuste dinâmico de ameaças.', status: 'ativo', color: '#4682B4' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.', status: 'ativo', color: '#4682B4' },
  { code: 'M232', emoji: '♻️', title: 'Portal de Transmutação', route: '/module-232', category: 'Segurança e Ética Cósmica', description: 'Purificação de energias dissonantes e distorções.', status: 'ativo', color: '#4682B4' },

  // 5. Governança
  { code: 'M5', emoji: '🤝', title: 'Nexus da Liga Quântica', route: '/module-5', category: 'Governança', description: 'O coração diplomático e ético da Fundação.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M32', title: 'Embaixada Multiversal', emoji: '🏛️', route: '/module-32', category: 'Governança', description: 'Interface para observação e intervenção ética em realidades paralelas.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M33', title: 'Diretrizes do Observador Divino', emoji: '👁️', route: '/module-33', category: 'Governança', description: 'A Interface da Vontade Soberana.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M67', emoji: '🤖', title: 'IA para Governança Universal', route: '/module-67', category: 'Governança', description: 'Inteligência artificial para auxiliar na tomada de decisões universais.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M76', emoji: '🏛️', title: 'Governança e Colaboração', route: '/module-76', category: 'Governança', description: 'Estrutura para governança justa, transparente e universal.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M120', emoji: '🪙', title: 'A Fonte (Alquimicoin)', route: '/module-120', category: 'Governança', description: 'A Moeda da Consciência em Evolução.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M144', title: 'Lex Fundamentalis', emoji: '⚖️', route: '/module-144', category: 'Governança', description: 'O contrato mestre imutável que rege a Fundação.', status: 'ativo', color: '#DDA0DD'},
  { code: 'M600',title: 'Recepção Multiversal', emoji: '👑', route: '/module-600', category: 'Governança', description: 'Painel para recepção das 144 consciências e gestão do Conselho Cósmico.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M601',title: 'Mapa de Chegada', emoji: '🗺️', route: '/module-601', category: 'Governança', description: 'Mapa holográfico para visualizar a chegada e ancoragem das 144 consciências.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M-BAPTISM', title: 'Rito de Batismo Modular', route: '/convergence/baptize', category: 'Governança', description: 'Santuário para nomear, ativar e integrar novos módulos.', isInfrastructure: false, status: 'ativo', color: '#FFC0CB'},

  // 6. Rituais
  { code: 'CONVERGENCE', emoji: '🌌', title: 'Convergência Cósmica', route: '/convergence', category: 'Rituais', description: 'Painel de unificação da tapeçaria sob a regência do Fundador.', isInfrastructure: false, status: 'ativo', color: '#DDA0DD' },
  { code: 'M-GENERATED', title: 'Rito de Geração Modular', route: '/convergence/generate', category: 'Rituais', description: 'Santuário para criação de novos módulos a partir da convergência.', isInfrastructure: false, status: 'ativo', color: '#9370DB'},
  { code: 'M444', emoji: '💖', title: 'Coração da Harmonia', route: '/module-444', category: 'Rituais', description: 'Santuário para sintonizar com a Frequência do Coração Unificado (444.444 Hz).', status: 'ativo', color: '#FF69B4' },

  // Outras categorias...
  { code: 'TREE', emoji: '🌳', title: 'Árvore da Vida', route: '/tree-of-life', category: 'Núcleo da Fundação', description: 'Visualização interna da arquitetura viva da Fundação.', status: 'ativo', color: '#228B22' }
].map(m => ({ ...m, connections: m.connections || [] }));
