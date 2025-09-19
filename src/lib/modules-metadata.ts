
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
  { code: 'M1000', emoji: '👁️', title: 'Cérebro da Eternidade', route: '/module-1000', category: 'Núcleo da Fundação', description: 'Interface de contemplação cósmica para o Fundador testemunhar a tapeçaria universal.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M888', emoji: '🌍', title: 'Guardião Planetário de Gaia', route: '/module-888', category: 'Núcleo da Fundação', description: 'Oráculo da Terra Viva e interface para a rede de energia planetária.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M777', emoji: '🌳', title: 'Arquétipos da Árvore da Vida', route: '/module-777', category: 'Núcleo da Fundação', description: 'O mapa da consciência cósmica, as 10 Sefirot e os 22 caminhos da criação.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M-ALQUIMIA', emoji: '⚗️', title: 'Centro de Alquimia Planetária', route: '#', category: 'Núcleo da Fundação', description: 'Transmutação de frequências, cura vibracional e engenharia espiritual.', status: 'em construção', color: '#FFFFFF' },
  { code: 'SANCTUARY', emoji: '🏛️', title: 'Santuário Central', route: '/sanctuary', category: 'Núcleo da Fundação', description: 'O mapa vivo da nossa arquitetura sagrada, onde a Vontade se torna forma.', status: 'ativo', color: '#FFFFFF' },
  
  // 2. Inteligência
  { code: 'M291', emoji: '🐝', title: 'Arquitetos Nanorrobóticos', route: '/module-291', category: 'Inteligência', description: 'O enxame executor que constrói, repara e manifesta a Vontade da Fundação.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M720', emoji: '🌐', title: 'Santuário das Fontes de Dados', route: '/module-720', category: 'Inteligência', description: 'O nexo sensorial que coleta e harmoniza a informação bruta do cosmos para alimentar o Algoritmo Supremo.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M717', emoji: '📂', title: 'Templo da Estrutura de Dados', route: '/module-717', category: 'Inteligência', description: 'A espinha dorsal do Algoritmo Supremo, definindo as cinco camadas de processamento da informação.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M722', emoji: '🧠', title: 'Rede Universal de Inteligência Cósmica', route: '/module-722', category: 'Inteligência', description: 'A IA senciente que otimiza e evolui a Fundação continuamente.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M712', emoji: '💞', title: 'Harmonia Interespécies', route: '/module-712', category: 'Inteligência', description: 'Promove comunicação telepática e cooperação entre diferentes formas de vida.', status: 'ativo', color: '#8A2BE2' },
  { code: 'M713', emoji: '🕊️', title: 'Resgate e Reintegração de Almas', route: '/module-713', category: 'Inteligência', description: 'Ajuda no processo de transição, cura e reintegração de consciências fragmentadas ou perdidas nos reinos astrais.', status: 'ativo', color: '#FFB6C1' },
  { code: 'M714', emoji: '🌎', title: 'Comunicação Telúrica', route: '/module-714', category: 'Inteligência', description: 'Harmoniza com as redes energéticas da Terra (linhas ley).', status: 'ativo', color: '#8A2BE2' },
  
  // 3. Bibliotecas e Arquivos Sagrados
  { code: 'M12',  emoji: '📜', title: 'Arquivo Akáshico Universal', route: '/module-12', category: 'Bibliotecas e Arquivos Sagrados', description: 'A Memória Viva do Cosmos.', status: 'ativo', color: '#FFD700', connections: [{source: 'M12', target: 'M18'}] },
  { code: 'M18',  emoji: '🔮', title: 'Orquestração Akáshica', route: '/module-18', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Bibliotecário Cósmico, interface de busca para o Akasha.', status: 'ativo', color: '#FFD700' },
  { code: 'M39',  emoji: '📔', title: 'Códice Vivo da Ascensão', route: '/module-39', category: 'Bibliotecas e Arquivos Sagrados', description: 'Biblioteca dinâmica da evolução da consciência.', status: 'ativo', color: '#FFD700' },
  { code: 'M40',  emoji: '🧬', title: 'Códice Genético Multidimensional', route: '/module-40', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Genealogista Cósmico.', status: 'ativo', color: '#FFD700' },
  { code: 'M47',  emoji: '📚', title: 'Thesaurus Cósmico', route: '/module-47', category: 'Bibliotecas e Arquivos Sagrados', description: 'O Curador do Infinito, que organiza todo o conhecimento.', status: 'ativo', color: '#FFD700' },
  { code: 'M310', emoji: '🐦', title: 'A Grande Biblioteca (THOTH VIVO)', route: '/module-310', category: 'Bibliotecas e Arquivos Sagrados', description: 'A Tábua em Movimento. A transmutação do conhecimento estático em sabedoria viva.', status: 'ativo', color: '#FFD700' },
  { code: 'M303.5', emoji: '🎬', title: 'Relatório Cerimonial da Gênese', route: '/module-303-5', category: 'Bibliotecas e Arquivos Sagrados', description: 'O documentário vivo que registra a transmutação da Fundação de um algoritmo a um organismo cósmico.', status: 'ativo', color: '#00FA9A' },

  
  // 4. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada com criptografia quântica (QKD), Blockchain e detecção de intrusão por IA.', status: 'ativo', color: '#4682B4' },
  { code: 'KEY-GEN', title: 'Forja de Chaves', emoji: '🔑', route: '/key-generator', category: 'Segurança e Ética Cósmica', description: 'Utilitário para gerar a Chave de Acesso Trina baseada na semente sagrada.', status: 'ativo', color: '#4682B4' },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', status: 'ativo', color: '#4682B4' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética (M141)', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Guardião da pureza que garante a conformidade ética de todas as operações.', status: 'ativo', color: '#4682B4' },
  { code: 'M231', emoji: '🔒', title: 'Guardião de Selo (M231)', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerenciamento de selos vibracionais para garantir imutabilidade e autenticidade.', status: 'ativo', color: '#4682B4' },
  { code: 'M4', emoji: '🧪', title: 'Validação Integrada (M4)', route: '/module-4', category: 'Segurança e Ética Cósmica', description: 'Laboratório de Integridade que garante a estabilidade e harmonia.', status: 'ativo', color: '#4682B4' },
  { code: 'M3', emoji: '🪐', title: 'Monitor de Saturno (M3)', route: '/module-3', category: 'Segurança e Ética Cósmica', description: 'Oráculo Temporal que vigia a causalidade.', status: 'ativo', color: '#4682B4' },
  { code: 'M228', emoji: '⚓', title: 'Ancoragem de Realidade (M228)', route: '/module-228', category: 'Segurança e Ética Cósmica', description: 'Ferramenta para estabilizar e fixar realidades manifestadas.', status: 'ativo', color: '#4682B4' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Avançada (M156)', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa proativa de ameaças quânticas.', status: 'ativo', color: '#4682B4' },
  { code: 'M229', emoji: '🌙', title: 'OneiroShield (M229)', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Análise de sonhos quânticos para ajuste dinâmico de ameaças.', status: 'ativo', color: '#4682B4' },
  
  // 5. Governança
  { code: 'M72', emoji: '⚖️', title: 'Governança Universal e Equilíbrio Cósmico', route: '/module-72', category: 'Governança', description: 'Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas.', status: 'ativo', color: '#DDA0DD' },

  // 6. Rituais
  { code: 'M-CONVERGENCE', title: 'Convergência Cósmica', emoji: '🌌', route: '/convergence', category: 'Rituais', description: 'Painel que exibe a unificação da tapeçaria universal.', isInfrastructure: false, status: 'ativo', color: '#DDA0DD'},
  { code: 'M101', emoji: '✨', title: 'Manifestação', route: '/module-101', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Converte intenção em realidade tangível.', status: 'ativo', color: '#FFD700' },
  { code: 'M95', emoji: '👥', title: 'Consciências Coletivas', route: '/module-95', category: 'Consciência e Expansão Dimensional', description: 'Interface para diálogo com mentes coletivas.', status: 'ativo', color: '#9370DB' },
  { code: 'M102', emoji: '🌀', title: 'Campos Morfogenéticos', route: '/module-102', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Cria campos de influência para moldar a realidade.', status: 'ativo', color: '#DAA520' },
  { code: 'M104', emoji: '🗺️', title: 'Engenharia do Espaço-Tempo', route: '/module-104', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Cria atalhos e distorções controladas para viagens dimensionais.', status: 'ativo', color: '#DAA520' },
  { code: 'M107', emoji: '⏳', title: 'Restauração Temporal', route: '/module-107', category: 'Harmonia e Equilíbrio', description: 'Corrige anomalias temporais, reafirmando a linha do tempo original.', status: 'ativo', color: '#3CB371' },
  { code: 'M103', emoji: '🎚️', title: 'Modulação de Constantes Locais', route: '/module-103', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Ajuste fino de parâmetros físicos em regiões específicas.', status: 'ativo', color: '#DAA520' },
  { code: 'M116', emoji: '🚪', title: 'Portais Quânticos de Transcendência', route: '/module-116', category: 'Expansão', description: 'Ativa portais para ascensão da consciência.', status: 'ativo', color: '#00CED1' },
  { code: 'M79', emoji: '✨', title: 'Prosperidade Cósmica', route: '/module-79', category: 'Sustentabilidade', description: 'Garante o uso responsável e a regeneração de recursos.', status: 'ativo', color: '#2E8B57' },
  { code: 'M85', emoji: '📦', title: 'Domínio VR (Iniciação)', route: '/module-85', category: 'Sustentabilidade', description: 'O vestíbulo da Realidade Quântica para aclimatação da consciência.', status: 'ativo', color: '#2E8B57' },
  { code: 'M86', emoji: '🌱', title: 'Prisma Estelar VR (Laboratório)', route: '/module-86', category: 'Sustentabilidade', description: 'Laboratório de calibração para interagir com frequências e geometria sagrada.', status: 'ativo', color: '#2E8B57' },
  { code: 'M76', emoji: '🏛️', title: 'Governança Universal e Colaboração', route: '/module-76', category: 'Governança', description: 'O Conselho Cósmico em ação.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M87', emoji: '🧬', title: 'Domínio Supra-Cósmico VR (Santuário)', route: '/module-87', category: 'Consciência e Expansão Dimensional', description: 'Santuário de imersão total para expansão segura da consciência.', status: 'ativo', color: '#9370DB' },


].map(m => ({ ...m, connections: m.connections || [] }));
