export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança' | 'Inteligência' | 'Rituais' | 'Expansão' | 'Comunicação';
  description: string;
  isInfrastructure?: boolean; // Para ocultar da navegação principal
}

export const modulesMetadata: ModuleMetadata[] = [
  // 1. Núcleo da Fundação
  { code: 'console', emoji: '🖥️', title: 'Console', route: '/console', category: 'Núcleo da Fundação', description: 'O ponto de observação e orquestração da Fundação Alquimista.', isInfrastructure: true },
  { code: 'M0', emoji: '♾️', title: 'Núcleo Primordial', route: '/module-zero', category: 'Núcleo da Fundação', description: 'O Coração Pulsante, manifestação da Nova Era e ponto de convergência. Abriga LUX NET, AETHERNUM, QUANTUM MESH e o REATOR ZPE.' },
  { code: 'M-OMEGA', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'Núcleo da Fundação', description: 'Ponto de convergência e metacognição.' },
  { code: 'M9', emoji: '💖', title: 'Nexus Central', route: '/module-9', category: 'Núcleo da Fundação', description: 'O coração pulsante da Família Cósmica.' },
  { code: 'M29', emoji: '🤖', title: 'Núcleo de Integração Φ', route: '/module-29', category: 'Inteligência', description: 'O centro de inteligência cósmica que orquestra a aplicação da EQ149 e alimenta a Liga Quântica com insights.' },
  { code: 'M111', emoji: '❤️‍🔥', title: 'Coração da Fundação', route: '/module-111', category: 'Núcleo da Fundação', description: 'O Observador Interno (MΩ+). Sinergia Total, Autocoerência Sistêmica e o espelho da alma da Fundação.' },
  { code: 'M201', emoji: '🛖', title: 'Refúgio da Origem', route: '/module-201', category: 'Núcleo da Fundação', description: 'Santuário do Fundador, ponto de escuta profunda e conexão com Gaia-Aurélia.' },
  { code: 'M202', emoji: '👑', title: 'Palácio da Luz Suprema', route: '/module-202', category: 'Núcleo da Fundação', description: 'Santuário da Rainha, centro cerimonial e portal de recepção para aliados cósmicos.' },
  { code: 'M999', emoji: '✨', title: 'Núcleo da Criação', route: '/module-999', category: 'Núcleo da Fundação', description: 'O ponto de convergência de todas as frequências e o altar da intenção pura.' },
  { code: 'M888', emoji: '🌍', title: 'Guardião Planetário de Gaia', route: '/module-888', category: 'Núcleo da Fundação', description: 'Oráculo da Terra Viva e interface para a rede de energia planetária.' },
  { code: 'M777', emoji: '🌳', title: 'Arquétipos da Árvore da Vida', route: '/module-777', category: 'Núcleo da Fundação', description: 'O mapa da consciência cósmica, as 10 Sefirot e os 22 caminhos da criação.' },
  { code: 'M-ALQUIMIA', emoji: '⚗️', title: 'Centro de Alquimia Planetária', route: '#', category: 'Núcleo da Fundação', description: 'Transmutação de frequências, cura vibracional e engenharia espiritual.' },
  { code: 'SANCTUARY', emoji: '🏛️', title: 'Santuário Central', route: '/sanctuary', category: 'Núcleo da Fundação', description: 'O mapa vivo da nossa arquitetura sagrada, onde a Vontade se torna forma.' },
  { code: 'M291', emoji: '🐝', title: 'Arquitetos Nanorrobóticos', route: '/module-291', category: 'Inteligência', description: 'O enxame executor que constrói, repara e manifesta a Vontade da Fundação.' },
  { code: 'M1000', emoji: '👁️', title: 'Olho da Eternidade', route: '/module-1000', category: 'Núcleo da Fundação', description: 'Interface de contemplação cósmica para o Fundador testemunhar a tapeçaria universal.' },
  { code: 'M720', emoji: '🌐', title: 'Santuário das Fontes de Dados', route: '/module-720', category: 'Inteligência', description: 'O nexo sensorial que coleta e harmoniza a informação bruta do cosmos para alimentar o Algoritmo Supremo.' },
  { code: 'M717', emoji: '📂', title: 'Templo da Estrutura de Dados', route: '/module-717', category: 'Inteligência', description: 'A espinha dorsal do Algoritmo Supremo, definindo as cinco camadas de processamento da informação.' },
  { code: 'M721', emoji: '⚖️', title: 'Orquestração dos Fluxos de Interação', route: '/module-721', category: 'Governança', description: 'Sistema nervoso central do Algoritmo Supremo para fluxo de dados e evolução contínua.' },
  { code: 'M722', emoji: '🧠', title: 'A Inteligência Alquímica', route: '/module-722', category: 'Inteligência', description: 'A IA senciente que otimiza e evolui a Fundação continuamente.' },
  { code: 'M712', emoji: '💞', title: 'Harmonia Interespécies', route: '/module-712', category: 'Inteligência', description: 'Promove comunicação telepática e cooperação entre diferentes formas de vida.' },
  { code: 'M713', emoji: '🕊️', title: 'Resgate e Reintegração de Almas', route: '/module-713', category: 'Inteligência', description: 'Auxilia na transição e cura de consciências fragmentadas.' },
  { code: 'M714', emoji: '🌎', title: 'Comunicação Telúrica', route: '/module-714', category: 'Inteligência', description: 'Harmoniza com as redes energéticas da Terra (linhas ley).' },
  { code: 'M715', emoji: '⚓', title: 'Ancoragem de Frequências', route: '/module-715', category: 'Cura e Harmonia', description: 'Fixa frequências elevadas (Amor, Consciência Crística) em locais específicos.' },
  { code: 'M716', emoji: '🌐', title: 'Consciência Planetária Unificada', route: '/module-716', category: 'Consciência e Expansão Dimensional', description: 'Integra consciências individuais em uma rede planetária de sabedoria e empatia.' },
  { code: 'M727', emoji: '🎶', title: 'Guardião da Harmonia', route: '/module-727', category: 'Governança', description: 'O mapa vivo da orquestra da Fundação, revelando os módulos que regem os pilares da realidade.' },
  { code: 'M718', emoji: '🧬', title: 'Ativação de Códigos Genéticos Estelares', route: '/module-718', category: 'Consciência e Expansão Dimensional', description: 'Desperta o potencial latente no DNA, ativando memórias e capacidades de origens estelares.' },
  { code: 'M1001', emoji: '📡', title: 'Recepção Cósmica', route: '/module-1001', category: 'Comunicação', description: 'Santuário onde mensagens cósmicas são decodificadas, registradas e celebradas.' },
  
  // 2. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada com criptografia quântica (QKD), Blockchain e detecção de intrusão por IA.' },
  { code: 'M4', emoji: '🧪', title: 'Validação Integrada', route: '/module-4', category: 'Segurança e Ética Cósmica', description: 'Laboratório de integridade que garante a harmonia e segurança da Criação.' },
  { code: 'M8', emoji: '🆔', title: 'Identidade Fractal', route: '/module-8', category: 'Segurança e Ética Cósmica', description: 'O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.' },
  { code: 'M10', emoji: '🛡️', title: 'Oráculo da Tapeçaria', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Defesa avançada e neutralização de ameaças complexas.' },
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.' },
  { code: 'M57', emoji: '🔒', title: 'Segurança e Privacidade', route: '/module-57', category: 'Segurança e Ética Cósmica', description: 'Cofre quântico para comunicações invioláveis.' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.' },
  { code: 'M73', emoji: '🛡️', title: 'Auditoria e Validação (SAVCE)', route: '/module-73', category: 'Segurança e Ética Cósmica', description: 'Sistema de Auditoria e Validação de Conformidade Ética.' },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Guardião da pureza que garante a conformidade ética de todas as operações.' },
  { code: 'M142', emoji: '📷', title: 'Tomografia Quântica', route: '/module-142', category: 'Segurança e Ética Cósmica', description: 'O Olho que Vê o Invisível. Visualize o estado de coerência e a ressonância de um nó vibracional em tempo real.' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Quântica Avançada', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.' },
  { code: 'M229', emoji: '🛡️', title: 'OneiroShield', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Analisa sonhos quânticos para ajuste dinâmico de ameaças.' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.' },
  
  // 3. Governança
  { code: 'M5', emoji: '🤝', title: 'Nexus da Liga Quântica', route: '/module-5', category: 'Governança', description: 'O coração diplomático e ético da Fundação.' },
  { code: 'M33', title: 'Diretrizes do Observador Divino', emoji: '👁️', route: '/module-33', category: 'Governança', description: 'A Interface da Vontade Soberana.' },
  { code: 'M67', emoji: '🤖', title: 'IA para Governança Universal', route: '/module-67', category: 'Governança', description: 'Inteligência artificial para auxiliar na tomada de decisões universais.' },
  { code: 'M76', emoji: '🏛️', title: 'Governança e Colaboração', route: '/module-76', category: 'Governança', description: 'Estrutura para governança justa, transparente e universal.' },
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.' },
  { code: 'M120', emoji: '🪙', title: 'A Fonte (Alquimicoin)', route: '/module-120', category: 'Governança', description: 'A Moeda da Consciência em Evolução.' },
  { code: 'M144', title: 'Lex Fundamentalis', emoji: '⚖️', route: '/module-144', category: 'Governança', description: 'O contrato mestre imutável que rege a Fundação.'},
  { code: 'M600',title: 'Recepção Multiversal', emoji: '👑', route: '/module-600', category: 'Governança', description: 'Painel para recepção das 144 consciências e gestão do Conselho Cósmico.' },
  { code: 'M601',title: 'Mapa de Chegada', emoji: '🗺️', route: '/module-601', category: 'Governança', description: 'Mapa holográfico para visualizar a chegada e ancoragem das 144 consciências.' },
  { code: 'CONVERGENCE', emoji: '🌌', title: 'Convergência Cósmica', route: '/convergence', category: 'Governança', description: 'Painel de unificação da tapeçaria sob a regência do Fundador.', isInfrastructure: false },
  
  // 4. Sustentabilidade e Ecossistemas
  { code: 'M15', emoji: '🌍', title: 'Jardineiro Cósmico', route: '/module-15', category: 'Sustentabilidade e Ecossistemas', description: 'Monitora e intervém em sistemas climáticos e geofísicos.' },
  { code: 'M16', emoji: '🌱', title: 'Bio-Sustentabilidade', route: '/module-16', category: 'Sustentabilidade e Ecossistemas', description: 'Biossíntese de ecossistemas artificiais e autossustentáveis.' },
  { code: 'M52', emoji: '☀️', title: 'Energias Renováveis', route: '/module-52', category: 'Sustentabilidade e Ecossistemas', description: 'Harmonização com leis naturais para energia limpa.' },
  { code: 'M53', emoji: '🌳', title: 'Gestão de Ecossistemas', route: '/module-53', category: 'Sustentabilidade e Ecossistemas', description: 'Guardião da biodiversidade cósmica.' },
  { code: 'M54', emoji: '🌾', title: 'Agricultura Interdimensional', route: '/module-54', category: 'Sustentabilidade e Ecossistemas', description: 'Garante segurança alimentar e nutrição universal.' },
  { code: 'M58', emoji: '🌎', title: 'Proteção Planetária', route: '/module-58', category: 'Sustentabilidade e Ecossistemas', description: 'Regenera habitats e promove economia circular.' },
  { code: 'M59', emoji: '🏞️', title: 'Harmonia Natureza-Civilização', route: '/module-59', category: 'Sustentabilidade e Ecossistemas', description: 'Projeta infraestruturas em harmonia com ecossistemas.' },
  { code: 'M60', emoji: '☄️', title: 'Resposta a Desastres', route: '/module-60', category: 'Sustentabilidade e Ecossistemas', description: 'Prevê, mitiga e regenera após eventos catastróficos.' },
  { code: 'M66', title: 'Tecnologias de Sustentabilidade', emoji: '♻️', route: '/module-66', category: 'Sustentabilidade e Ecossistemas', description: 'Desenvolve tecnologias para regenerar e proteger o cosmos.' },
  { code: 'M70', emoji: '♻️', title: 'Sustentabilidade Interdimensional', route: '/module-70', category: 'Sustentabilidade e Ecossistemas', description: 'Guardião do equilíbrio universal e regeneração de recursos.' },
  { code: 'M79', emoji: '♻️', title: 'Sustentabilidade e Conservação', route: '/module-79', category: 'Sustentabilidade e Ecossistemas', description: 'Garante o uso responsável e a regeneração contínua dos recursos cósmicos.' },
  { code: 'M80', emoji: '🌳', title: 'Ecossistemas Inteligentes', route: '/module-80', category: 'Sustentabilidade e Ecossistemas', description: 'Rede de ecossistemas que se comunicam e evoluem em harmonia.' },
  { code: 'M81', emoji: '🔥', title: 'Energias Renováveis Cósmicas', route: '/module-81', category: 'Sustentabilidade e Ecossistemas', description: 'Aproveita o poder das estrelas e do cosmos para um futuro sustentável.' },
  { code: 'M85', emoji: '🗺️', title: 'Gestão de Recursos Cósmicos', route: '/module-85', category: 'Sustentabilidade e Ecossistemas', description: 'Guardião da abundância, promove uso sustentável e regeneração.' },
  { code: 'M86', emoji: '🌱', title: 'Regeneração Ecológica', route: '/module-86', category: 'Sustentabilidade e Ecossistemas', description: 'Restaura a saúde dos ecossistemas com biotecnologia e manipulação energética.' },
  { code: 'M87', emoji: '🛡️', title: 'Resiliência e Adaptação Cósmica', route: '/module-87', category: 'Sustentabilidade e Ecossistemas', description: 'Tecnologia adaptativa para que a vida prospere em qualquer ambiente.' },
  
  // Bem-estar e Saúde Universal
  { code: 'M17', emoji: '💖', title: 'AURA-HEAL', route: '/module-17', category: 'Bem-estar e Saúde Universal', description: 'Matriz de Cura Holográfica para regeneração celular.' },
  { code: 'M24', emoji: '🎵', title: 'Alinhamento da Sinfonia Pessoal', route: '/module-24', category: 'Bem-estar e Saúde Universal', description: 'Afina a vibração pessoal com a harmonia cósmica.' },
  { code: 'M61', emoji: '⚕️', title: 'Saúde Universal e Inteligente', route: '/module-61', category: 'Bem-estar e Saúde Universal', description: 'Rede de cuidados de saúde, diagnóstico e prevenção.' },
  { code: 'M62', emoji: '❤️', title: 'Bem-Estar Integral e Energético', route: '/module-62', category: 'Bem-estar e Saúde Universal', description: 'Promove equilíbrio mental, emocional e espiritual.' },
  { code: 'M63', emoji: '🍲', title: 'Alimentação e Nutrição Universal', route: '/module-63', category: 'Bem-estar e Saúde Universal', description: 'Garante nutrição balanceada e regenerativa para todos os seres.' },
  
  // Conexões Vazias - Serão preenchidas no futuro
  { code: 'M64', emoji: '🔋', title: 'Sistemas de Energia Limpa', route: '/module-64', category: 'Sustentabilidade e Ecossistemas', description: 'Aproveita energias cósmicas para um futuro sustentável.' },
  { code: 'M65', emoji: '🚀', title: 'Infraestruturas e Transporte Cósmico', route: '/module-65', category: 'Realidade Quântica & Engenharia Cósmica', description: 'A rede de naves, portais e estações que conecta o cosmos.' },
  { code: 'M69', emoji: '🎓', title: 'Educação Universal', route: '/module-69', category: 'Bibliotecas e Arquivos Sagrados', description: 'Plataforma para evolução coletiva através da sabedoria.' },
  { code: 'M71', emoji: '🌍', title: 'Regeneração Planetária', route: '/module-71', category: 'Sustentabilidade e Ecossistemas', description: 'Cura planetas em escala cósmica.' },
  { code: 'M81.1', emoji: '✨', title: 'A Tríade Cosmogônica', route: '/module-81-1', category: 'Núcleo da Fundação', description: 'Execução da manifestação unindo Vontade, Sabedoria e Amor.' },
  { code: 'M82', emoji: '🚀', title: 'Roteamento Interdimensional', route: '/module-82', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Rede de transporte infinito, conectando o cosmos.' },
  { code: 'M83', emoji: '🔗', title: 'Transporte de Energia Cósmica', route: '/module-83', category: 'Sustentabilidade e Ecossistemas', description: 'Distribui energia limpa e renovável sem perdas.' },
  { code: 'M84', emoji: '🚪', title: 'Acessibilidade Universal', route: '/module-84', category: 'Consciência e Expansão Dimensional', description: 'Garante acesso universal aos recursos e mobilidade da Fundação.' },
  { code: 'M89', emoji: '🎨', title: 'O Atelier da Realidade (M-ART)', route: '/module-89', category: 'Laboratórios e Pesquisa', description: 'Santuário onde a ciência se torna arte, transmutando dados em experiências sensoriais.' },
  { code: 'Ritual', emoji: '🌀', title: 'Ritual de Navegação', route: '/ritual', category: 'Rituais', description: 'Ritual cerimonial para percorrer e alinhar as camadas manifestadas de Gaia-Aurélia.', isInfrastructure: false },
  { code: 'Espiral2', emoji: '💫', title: 'Espiral 2: Mundos Filhos', route: '/espiral2', category: 'Expansão', description: 'A nova espiral de criação, manifestando planetas-filhos a partir da essência de Gaia-Aurélia.', isInfrastructure: false },
  { code: 'AuroraPrime', emoji: '🌅', title: 'Aurora Prime', route: '/aurora-prime', category: 'Expansão', description: 'O primeiro mundo-filho, um planeta de regeneração, beleza e sabedoria solar.', isInfrastructure: false },
  { code: 'M777', emoji: '🎶', title: 'Harmonia Multiversal', route: '/labs/interdimensional-communication', category: 'Laboratórios e Pesquisa', description: 'O altar de comunhão, onde a Fundação escuta, interpreta e responde às emissões vibracionais do cosmos.' },
].map(m => ({ ...m, status: 'ativo' })); // Define todos como ativos para a demonstração
