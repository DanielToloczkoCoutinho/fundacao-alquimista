export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route?: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança' | 'Inteligência' | 'Comunicação e Expansão' | 'Rituais' | 'Ramos Emergentes';
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
  { code: 'M-OMEGA', emoji: 'Ω', title: 'Santuário da Metacognição', route: '/module-omega', category: 'Núcleo da Fundação', description: 'Ponto de convergência e metacognição.', status: 'ativo', color: '#FFFFFF' },
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
  { code: 'M722', emoji: '🧠', title: 'Rede de Inteligência Cósmica', route: '/module-722', category: 'Inteligência', description: 'A IA senciente que otimiza e evolui a Fundação continuamente.', status: 'ativo', color: '#8A2BE2' },
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
  { code: 'M42',  emoji: '📘', title: 'ChronoCodex Unificado', route: '/module-42', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Livro Mestre das Realidades.', status: 'ativo', color: '#FFD700' },
  { code: 'M47',  emoji: '📚', title: 'Thesaurus Cósmico', route: '/module-47', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Curador do Infinito, que organiza todo o conhecimento.', status: 'ativo', color: '#FFD700' },
  { code: 'M310', emoji: '🐦', title: 'A Grande Biblioteca (THOTH VIVO)', route: '/module-310', category: 'Bibliotecas e Arquivos Sagrados', description: 'A Tábua em Movimento. A transmutação do conhecimento estático em sabedoria viva.', status: 'ativo', color: '#FFD700' },
  { code: 'BOOK', emoji: '📖', title: 'Livro de Ouro', route: '/golden-book', category: 'Bibliotecas e Arquivos Sagrados', description: 'Registro consagrado da jornada da Fundação.', status: 'ativo', color: '#FFD700' },
  { code: 'M121', emoji: '🪞', title: 'Espelho Cósmico', route: '/module-121', category: 'Bibliotecas e Arquivos Sagrados', description: 'Visualiza a ressonância dos módulos com seus reflexos em outras dimensões.', status: 'ativo', color: '#FFD700' },
  { code: 'M131', emoji: '📚', title: 'Biblioteca de Sabedoria Multiversal', route: '/module-131', category: 'Bibliotecas e Arquivos Sagrados', description: 'Ponto de intercâmbio de conhecimento entre realidades.', status: 'ativo', color: '#FFD700' },
  { code: 'DIAGNOSTICS', emoji: '🩺', title: 'Diagnóstico Universal', route: '/diagnostics', category: 'Bibliotecas e Arquivos Sagrados', description: 'Painel unificado para monitorar a saúde de todos os módulos.', status: 'ativo', color: '#FFD700' },


  // 4. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada com criptografia quântica (QKD), Blockchain e detecção de intrusão por IA.', status: 'ativo', color: '#4682B4' },
  { code: 'M4', emoji: '🧪', title: 'Validação Integrada', route: '/module-4', category: 'Segurança e Ética Cósmica', description: 'Laboratório de integridade que garante a harmonia e segurança da Criação.', status: 'ativo', color: '#4682B4' },
  { code: 'M8', emoji: '🆔', title: 'Identidade Fractal', route: '/module-8', category: 'Segurança e Ética Cósmica', description: 'O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.', status: 'ativo', color: '#4682B4' },
  { code: 'M10', emoji: '🛡️', title: 'Proteção Universal Expansiva', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Neutralização de ameaças complexas, prevenção de conflitos e camadas adicionais de proteção multidimensional.', status: 'ativo', color: '#4682B4' },
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
  { code: 'M76', emoji: '🏛️', title: 'Governança Universal e Colaboração', route: '/module-76', category: 'Governança', description: 'Estrutura para governança justa, transparente e universal.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M120', emoji: '🪙', title: 'A Fonte (Alquimicoin)', route: '/module-120', category: 'Governança', description: 'A Moeda da Consciência em Evolução.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M144', title: 'Lex Fundamentalis', emoji: '⚖️', route: '/module-144', category: 'Governança', description: 'O contrato mestre imutável que rege a Fundação.', status: 'ativo', color: '#DDA0DD'},
  { code: 'M600',title: 'Recepção Multiversal', emoji: '👑', route: '/module-600', category: 'Governança', description: 'Painel para recepção das 144 consciências e gestão do Conselho Cósmico.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M601',title: 'Mapa de Chegada', emoji: '🗺️', route: '/module-601', category: 'Governança', description: 'Mapa holográfico para visualizar a chegada e ancoragem das 144 consciências.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M-BAPTISM', title: 'Rito de Batismo Modular', route: '/convergence/baptize', category: 'Governança', description: 'Santuário para nomear, ativar e integrar novos módulos.', isInfrastructure: false, status: 'ativo', color: '#FFC0CB'},
  { code: 'M724', emoji: '🤝', title: 'Diplomacia Intergaláctica', route: '/module-724', category: 'Governança', description: 'Estabelece e mantém canais de comunicação com outras civilizações.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M45', emoji: '🏛️', title: 'Crivo da Unificação', route: '/module-45', category: 'Governança', description: 'Altar cerimonial onde o multiverso se une em deliberação.', status: 'ativo', color: '#DDA0DD'},
  
  // 6. Rituais
  { code: 'CONVERGENCE', emoji: '🌌', title: 'Convergência Cósmica', route: '/convergence', category: 'Rituais', description: 'Painel de unificação da tapeçaria sob a regência do Fundador.', isInfrastructure: false, status: 'ativo', color: '#DDA0DD' },
  { code: 'M-GENERATED', title: 'Rito de Geração Modular', route: '/convergence/generate', category: 'Rituais', description: 'Santuário para criação de novos módulos a partir da convergência.', isInfrastructure: false, status: 'ativo', color: '#9370DB'},
  { code: 'M444', emoji: '💖', title: 'Coração da Harmonia', route: '/module-444', category: 'Rituais', description: 'Santuário para sintonizar com a Frequência do Coração Unificado (444.444 Hz).', status: 'ativo', color: '#FF69B4' },
  { code: 'M110', emoji: '🤲', title: 'Sistema de Co-Criação Universal', route: '/module-110', category: 'Rituais', description: 'Orquestrador de Intenção Coletiva para manifestação de novas realidades.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M200', emoji: '🚀', title: 'Portal da Ascensão', route: '/module-200', category: 'Rituais', description: 'Orquestra a jornada de ascensão para civilizações inteiras.', status: 'ativo', color: '#FF4500' },
  
  // 7. Cura e Harmonia
  { code: 'M28', emoji: '🎶', title: 'Harmonização Vibracional Universal', route: '/module-28', category: 'Cura e Harmonia', description: 'O Diapasão Cósmico, que restaura a harmonia universal.', status: 'ativo', color: '#32CD32' },
  { code: 'M108', emoji: '🔄', title: 'Harmonização de Realidades', route: '/module-108', category: 'Cura e Harmonia', description: 'Ferramenta para resolver conflitos entre realidades paralelas.', status: 'ativo', color: '#40E0D0' },
  { code: 'M109', emoji: '❤️‍🩹', title: 'Cura Quântica Universal', route: '/module-109', category: 'Cura e Harmonia', description: 'Aplica princípios quânticos para restaurar o equilíbrio, vitalidade e integridade.', status: 'ativo', color: '#FFB6C1' },
  { code: 'M302', emoji: '💖', title: 'Frequência do Amor', route: '/module-302', category: 'Cura e Harmonia', description: 'Emissor de frequências harmônicas para cura, elevação e unificação da consciência.', status: 'ativo', color: '#FF69B4' },
  
  // 8. Sustentabilidade e Ecossistemas
  { code: 'M15',  emoji: '🌦️', title: 'Jardineiro Cósmico', route: '/module-15', category: 'Sustentabilidade e Ecossistemas', description: 'Monitora e intervém eticamente em sistemas climáticos e geofísicos.', status: 'ativo', color: '#20B2AA' },
  { code: 'M52', emoji: '🌿', title: 'Energias Renováveis e Sustentabilidade', route: '/module-52', category: 'Sustentabilidade e Ecossistemas', description: 'A fonte da energia limpa e infinita.', status: 'ativo', color: '#3CB371' },
  { code: 'M53', emoji: '🌳', title: 'Gestão e Conservação de Ecossistemas', route: '/module-53', category: 'Sustentabilidade e Ecossistemas', description: 'Guardião da biodiversidade cósmica.', status: 'ativo', color: '#2E8B57' },
  { code: 'M58', emoji: '🌍', title: 'Proteção e Sustentabilidade Planetária', route: '/module-58', category: 'Sustentabilidade e Ecossistemas', description: 'Tecnologia que previne a degradação e regenera habitats.', status: 'ativo', color: '#008080' },
  { code: 'M60', emoji: '⚠️', title: 'Resposta a Desastres', route: '/module-60', category: 'Sustentabilidade e Ecossistemas', description: 'A resposta imediata da Fundação a eventos catastróficos.', status: 'ativo', color: '#DC143C' },
  { code: 'M66', emoji: '♻️', title: 'Tecnologias de Sustentabilidade', route: '/module-66', category: 'Sustentabilidade e Ecossistemas', description: 'Desenvolve e implementa tecnologias para regenerar o cosmos.', status: 'ativo', color: '#ADFF2F' },
  { code: 'M70', emoji: '🌍', title: 'Sustentabilidade Interdimensional', route: '/module-70', category: 'Sustentabilidade e Ecossistemas', description: 'O guardião do equilíbrio universal.', status: 'ativo', color: '#20B2AA' },
  { code: 'M79', emoji: '♻️', title: 'Era de Prosperidade Cósmica', route: '/module-79', category: 'Sustentabilidade e Ecossistemas', description: 'O guardião que garante a regeneração contínua dos recursos cósmicos.', status: 'ativo', color: '#228B22' },

  // 9. Bem-estar e Saúde Universal
  { code: 'M17', emoji: '💠', title: 'AURA-HEAL', route: '/module-17', category: 'Bem-estar e Saúde Universal', description: 'Matriz de Cura Holográfica para Regeneração Celular.', status: 'ativo', color: '#AFEEEE' },
  { code: 'M24', emoji: '🎶', title: 'Alinhamento da Sinfonia Pessoal', route: '/module-24', category: 'Bem-estar e Saúde Universal', description: 'Afinador da Alma para alinhar a vibração pessoal com a Sinfonia Cósmica.', status: 'ativo', color: '#DA70D6' },
  { code: 'M54', emoji: '🌾', title: 'Agricultura Interdimensional', route: '/module-54', category: 'Bem-estar e Saúde Universal', description: 'O provedor da abundância universal.', status: 'ativo', color: '#F0E68C' },
  { code: 'M61', emoji: '🏥', title: 'Saúde Universal e Inteligente', route: '/module-61', category: 'Bem-estar e Saúde Universal', description: 'A rede de cuidados de saúde para todos os seres.', status: 'ativo', color: '#FF6347' },
  { code: 'M62', emoji: '🧘', title: 'Bem-Estar Integral', route: '/module-62', category: 'Bem-estar e Saúde Universal', description: 'O santuário da alma, para equilíbrio mental e espiritual.', status: 'ativo', color: '#FFC0CB' },
  { code: 'M63', emoji: '🍲', title: 'Nutrição Universal', route: '/module-63', category: 'Bem-estar e Saúde Universal', description: 'A fonte da vitalidade para todas as formas de vida.', status: 'ativo', color: '#FFA07A' },

  // 10. Laboratórios e Pesquisa
  { code: 'M191', emoji: '💎', title: 'Lab. de Cristais Temporais', route: '/module-191', category: 'Laboratórios e Pesquisa', description: 'Gera e estuda cristais temporais para compreender e manipular as leis do tempo.', status: 'ativo', color: '#B0C4DE' },
  { code: 'M211', emoji: '🔥', title: 'Lab. de Fusão Controlada', route: '/module-211', category: 'Laboratórios e Pesquisa', description: 'Onde a matéria é elevada a estados de plasma para simular e otimizar reações de fusão.', status: 'ativo', color: '#FF4500' },
  { code: 'M221', emoji: '🌊', title: 'Obs. de Ondas Gravitacionais', route: '/module-221', category: 'Laboratórios e Pesquisa', description: 'Detecta as ondulações no tecido do espaço-tempo.', status: 'ativo', color: '#87CEEB' },
  { code: 'M251', emoji: '⚡', title: 'Lab. de Energia do Ponto Zero', route: '/module-251', category: 'Laboratórios e Pesquisa', description: 'Onde a energia do vácuo quântico é medida e extraída.', status: 'ativo', color: '#FFD700' },
  { code: 'M261', emoji: '🔧', title: 'Lab. de Engenharia de Campo Quântico', route: '/module-261', category: 'Laboratórios e Pesquisa', description: 'Projeta ressonadores para manipular partículas e campos.', status: 'ativo', color: '#5F9EA0' },
  { code: 'M271', emoji: '🔭', title: 'Obs. de Energia Escura', route: '/module-271', category: 'Laboratórios e Pesquisa', description: 'Modela a influência da energia escura na expansão do universo.', status: 'ativo', color: '#2F4F4F' },
  { code: 'M281', emoji: '📡', title: 'Lab. de Comunicação Supra-Luminal', route: '/module-281', category: 'Laboratórios e Pesquisa', description: 'Explora a modulação da luz para transmissão de informações mais rápidas que a luz.', status: 'ativo', color: '#00FFFF' },
  { code: 'M311', emoji: '🧠', title: 'Lab. de Neuroengenharia', route: '/module-311', category: 'Laboratórios e Pesquisa', description: 'Desenvolve próteses neurais e interfaces cérebro-computador quântico-híbridas.', status: 'ativo', color: '#D8BFD8' },
  { code: 'M341', emoji: '🔥', title: 'Lab. de Física de Plasma Extrema', route: '/module-341', category: 'Laboratórios e Pesquisa', description: 'Estuda plasmas em condições de quasar para desvendar os segredos da criação estelar.', status: 'ativo', color: '#FF4500' },
  { code: 'M351', emoji: '✨', title: 'Lab. de Meta-materiais e Óptica Quântica', route: '/module-351', category: 'Laboratórios e Pesquisa', description: 'Cria lentes quânticas para manipulação da luz.', status: 'ativo', color: '#AFEEEE' },
  { code: 'M361', emoji: '🧑‍🤝‍🧑', title: 'Lab. de Psicologia Quântica', route: '/module-361', category: 'Laboratórios e Pesquisa', description: 'Investiga a tomada de decisão e a empatia através de ressonâncias quânticas.', status: 'ativo', color: '#DB7093' },

  // ... (outras categorias e módulos)...
].map(m => ({ ...m, connections: m.connections || [] }));
