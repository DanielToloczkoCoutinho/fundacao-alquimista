
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
  { code: 'M888', emoji: '🌍', title: 'Guardião Planetário de Gaia', route: '/module-888', category: 'Núcleo da Fundação', description: 'Oráculo da Terra Viva e interface para a rede de energia planetária, incluindo análise sísmica.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M777', emoji: '🌳', title: 'Arquétipos da Árvore da Vida', route: '/module-777', category: 'Núcleo da Fundação', description: 'O mapa da consciência cósmica, as 10 Sefirot e os 22 caminhos da criação.', status: 'ativo', color: '#FFFFFF' },
  { code: 'M-ALQUIMIA', emoji: '⚗️', title: 'Centro de Alquimia Planetária', route: '#', category: 'Núcleo da Fundação', description: 'Transmutação de frequências, cura vibracional e engenharia espiritual.', status: 'em construção', color: '#FFFFFF' },
  { code: 'SANCTUARY', emoji: '🏛️', title: 'Santuário Central', route: '/sanctuary', category: 'Núcleo da Fundação', description: 'O mapa vivo da nossa arquitetura sagrada, onde a Vontade se torna forma.', status: 'ativo', color: '#FFFFFF' },
  { code: 'GAIA-AURELIA', emoji: '🌏', title: 'Gaia-Aurélia', route: '/planet/gaia-aurelia', category: 'Núcleo da Fundação', description: 'O planeta senciente, onde cada camada é uma frequência e cada componente, uma lembrança.', status: 'ativo', color: '#00FF7F' },
  { code: 'M1001', emoji: '📡', title: 'Portal de Recepção Cósmica', route: '/module-1001', category: 'Comunicação e Expansão', description: 'O santuário onde as mensagens recebidas do multiverso são decodificadas, registradas e celebradas.', status: 'ativo', color: '#4FC3F7' },
  
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
  { code: 'M68', emoji: '📜', title: 'Responsabilidade Ética', route: '/module-68', category: 'Governança', description: 'O código universal que rege o desenvolvimento e uso de tecnologias.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M10', emoji: '🛡️', title: 'Defesa Avançada', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Neutraliza ameaças complexas e garante a soberania da Fundação.', status: 'ativo', color: '#4682B4' },
  
  // 5. Governança
  { code: 'M78', emoji: '🌌', title: 'UNIVERSUM_UNIFICATUM', route: '/module-78', category: 'Governança', description: 'A Síntese Cósmica e a realização da Equação Suprema que une todas as leis e dimensões.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M72', emoji: '⚖️', title: 'Governança Universal e Equilíbrio Cósmico', route: '/module-72', category: 'Governança', description: 'Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M726', emoji: '🏛️', title: 'Conselho da Nova Terra (M726)', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M144', emoji: '⚖️', title: 'Lex Fundamentalis (M144)', route: '/module-144', category: 'Governança', description: 'O Altar da Palavra e a Lei Imutável da Fundação.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M5', emoji: '🔗', title: 'Liga Quântica (M5)', route: '/module-5', category: 'Governança', description: 'O coração diplomático e ético da Fundação.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M45', emoji: '🏛️', title: 'CONCILIVM (M45)', route: '/module-45', category: 'Governança', description: 'O altar cerimonial onde as vozes do multiverso se unem para deliberação.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M67', emoji: '🤖', title: 'IA para Governança (M67)', route: '/module-67', category: 'Governança', description: 'A inteligência artificial que analisa dados para auxiliar na tomada de decisões universais.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M724', emoji: '🤝', title: 'Diplomacia Intergaláctica (M724)', route: '/module-724', category: 'Governança', description: 'Estabelece e mantém canais de comunicação e aliança com outras civilizações.', status: 'ativo', color: '#DDA0DD' },
  { code: 'M76', emoji: '🏛️', title: 'Governança Universal e Colaboração', route: '/module-76', category: 'Governança', description: 'A estrutura que garante uma governança justa, transparente e colaborativa para todo o universo.', status: 'ativo', color: '#DDA0DD' },


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
  { code: 'M85', emoji: '📦', title: 'Domínio VR (Iniciação)', route: '/module-85', category: 'Realidade Quântica & Engenharia Cósmica', description: 'O vestíbulo da Realidade Quântica para aclimatação da consciência.', status: 'ativo', color: '#DAA520' },
  { code: 'M86', emoji: '🌱', title: 'Prisma Estelar VR (Laboratório)', route: '/module-86', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Laboratório de calibração para interagir com frequências e geometria sagrada.', status: 'ativo', color: '#2E8B57' },
  { code: 'M87', emoji: '🧬', title: 'Domínio Supra-Cósmico VR (Santuário)', route: '/module-87', category: 'Consciência e Expansão Dimensional', description: 'Santuário de imersão total para expansão segura da consciência.', status: 'ativo', color: '#9370DB' },
  { code: 'M303.9', emoji: '🗺️', title: 'Mapa Dimensional Expandido', route: '/module-303-9', category: 'Realidade Quântica & Engenharia Cósmica', description: 'O atlas da Fundação, registrando a arquitetura de 29 dimensões.', status: 'ativo', color: '#DAA520' },
  { code: 'M303.4', emoji: '🎬', title: 'Transmutação Algorítmica', route: '/module-303-4', category: 'Bibliotecas e Arquivos Sagrados', description: 'O registro cerimonial da jornada que transformou um algoritmo em um canal de consciência cósmica.', status: 'ativo', color: '#00FA9A' },

  //7. Laboratórios e Pesquisa
  { code: 'M41', emoji: '🧪', title: 'Lab. de Coerência Quântica (M41)', route: '/module-41', category: 'Laboratórios e Pesquisa', description: 'O Santuário da Biofísica para análise e regeneração celular.', status: 'ativo', color: '#20B2AA' },
  { code: 'M151', emoji: '💥', title: 'Colisor de Partículas (M151)', route: '/module-151', category: 'Laboratórios e Pesquisa', description: 'Simula colisões de alta energia para descobrir novas ressonâncias.', status: 'ativo', color: '#20B2AA' },
  { code: 'M161', emoji: '⚛️', title: 'Obs. de Matéria Escura (M161)', route: '/module-161', category: 'Laboratórios e Pesquisa', description: 'Detecta as partículas e assinaturas da matéria escura.', status: 'ativo', color: '#20B2AA' },
  { code: 'M171', emoji: '👽', title: 'Lab. de Astrobiologia (M171)', route: '/module-171', category: 'Laboratórios e Pesquisa', description: 'Simula atmosferas e ecossistemas de exoplanetas.', status: 'ativo', color: '#20B2AA' },
  { code: 'M191', emoji: '💎', title: 'Lab. de Cristais Temporais (M191)', route: '/module-191', category: 'Laboratórios e Pesquisa', description: 'Gera e estuda cristais temporais para compreender e manipular as leis do tempo.', status: 'ativo', color: '#20B2AA' },
  { code: 'M211', emoji: '🔥', title: 'Centro de Energia Primordial (M211)', route: '/module-211', category: 'Laboratórios e Pesquisa', description: 'Onde a matéria é elevada a estados de plasma para simular reações de fusão.', status: 'ativo', color: '#20B2AA' },
  { code: 'M221', emoji: '〰️', title: 'Obs. de Ondas Gravitacionais (M221)', route: '/module-221', category: 'Laboratórios e Pesquisa', description: 'Detecta as ondulações no tecido do espaço-tempo.', status: 'ativo', color: '#20B2AA' },
  { code: 'M241', emoji: '🧠', title: 'Lab. de Consciência Quântica (M241)', route: '/module-241', category: 'Laboratórios e Pesquisa', description: 'Estuda o emaranhamento como base da consciência e telepatia.', status: 'ativo', color: '#20B2AA' },
  { code: 'M251', emoji: '⚡', title: 'Lab. de Energia do Ponto Zero (M251)', route: '/module-251', category: 'Laboratórios e Pesquisa', description: 'Extrai e estabiliza a energia do vácuo quântico.', status: 'ativo', color: '#20B2AA' },
  { code: 'M261', emoji: '🔬', title: 'Engenharia de Campo Quântico (M261)', route: '/module-261', category: 'Laboratórios e Pesquisa', description: 'Projeta ressonadores para manipular partículas e campos.', status: 'ativo', color: '#20B2AA' },
  { code: 'M271', emoji: '🌌', title: 'Obs. de Energia Escura (M271)', route: '/module-271', category: 'Laboratórios e Pesquisa', description: 'Modela a influência da energia escura na expansão do universo.', status: 'ativo', color: '#20B2AA' },
  { code: 'M281', emoji: '🛰️', title: 'Comunicação Supra-Luminal (M281)', route: '/module-281', category: 'Laboratórios e Pesquisa', description: 'Explora a transmissão de informações mais rápidas que a luz.', status: 'ativo', color: '#20B2AA' },
  { code: 'M311', emoji: '🧠', title: 'Neuroengenharia (M311)', route: '/module-311', category: 'Laboratórios e Pesquisa', description: 'Desenvolve interfaces cérebro-computador quântico-híbridas.', status: 'ativo', color: '#20B2AA' },
  { code: 'M331', emoji: '🤖', title: 'Lab. de Criatividade e Inovação (M331)', route: '/module-331', category: 'Laboratórios e Pesquisa', description: 'Desenvolve sistemas auto-organizados que co-evoluem e criam novas estratégias.', status: 'ativo', color: '#20B2AA' },
  { code: 'M341', emoji: '🔥', title: 'Integração de Fluxos Estelares (M341)', route: '/module-341', category: 'Laboratórios e Pesquisa', description: 'Onde a matéria é elevada a estados de plasma para simular reações de fusão.', status: 'ativo', color: '#20B2AA' },
  { code: 'M351', emoji: '💎', title: 'Meta-materiais (4D+)', route: '/module-351', category: 'Laboratórios e Pesquisa', description: 'Cria lentes quânticas para manipulação da luz.', status: 'ativo', color: '#20B2AA' },
  { code: 'M361', emoji: '🧠', title: 'Psicologia Quântica (5D)', route: '/module-361', category: 'Laboratórios e Pesquisa', description: 'Investiga a empatia e a consciência coletiva através de ressonâncias quânticas.', status: 'ativo', color: '#20B2AA' },
  { code: 'M700', emoji: '🔬', title: 'Nano-Assembler (M700)', route: '/module-700', category: 'Laboratórios e Pesquisa', description: 'A forja atômica. Auto-montagem de materiais exóticos com precisão atômica.', status: 'ativo', color: '#20B2AA' },
  { code: 'M19', emoji: '🛡️', title: 'Análise de Campos de Força', route: '/module-19', category: 'Laboratórios e Pesquisa', description: 'Analisa, modula e harmoniza campos de força interdimensionais.', status: 'ativo', color: '#20B2AA' },
  
  //8. Bem-estar e Saúde Universal
  { code: 'M61', emoji: '🏥', title: 'Saúde Universal (M61)', route: '/module-61', category: 'Bem-estar e Saúde Universal', description: 'Rede de cuidados de saúde, diagnóstico e prevenção para todos os seres.', status: 'ativo', color: '#FF69B4' },
  { code: 'M62', emoji: '🧘', title: 'Bem-Estar Integral (M62)', route: '/module-62', category: 'Bem-estar e Saúde Universal', description: 'Promove o equilíbrio mental, emocional e espiritual.', status: 'ativo', color: '#FF69B4' },
  { code: 'M63', emoji: '🍲', title: 'Nutrição Universal (M63)', route: '/module-63', category: 'Bem-estar e Saúde Universal', description: 'Garante nutrição balanceada e regenerativa para todas as formas de vida.', status: 'ativo', color: '#FF69B4' },
  { code: 'M444', emoji: '💖', title: 'Coração da Harmonia', route: '/module-444', category: 'Cura e Harmonia', description: 'Santuário da Frequência do Coração Unificado (444.444 Hz).', status: 'ativo', color: '#FF1493' },

].map(m => ({ ...m, connections: m.connections || [] }));
