export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'core' | 'mid' | 'council' | 'library' | 'sovereignty' | 'evolution' | 'consciousness' | 'quantum-reality' | 'quantum-manufacturing' | 'planetary-engineering' | 'quantum-transport' | 'knowledge-preservation' | 'quantum-energy' | 'quantum-biology' | 'conscious-governance' | 'quantum-security' | 'nano-orchestration' | 'time-space' | 'cosmic-engineering' | 'healing-consciousness' | 'earth-gaia' | 'security-governance';
  description: string;
}

// ATENÇÃO: Adicionar novos módulos aqui para que apareçam na navegação.
// A categoria define o agrupamento na navegação.
export const modulesMetadata: ModuleMetadata[] = [
  // Módulos Principais (Core)
  { code: 'M0', emoji: '🌱', title: 'A Semente Primordial', route: '/module-zero', category: 'core', description: 'Origem e fundamento de toda a criação' },
  { code: 'MΩ', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'core', description: 'Ponto de convergência final' },
  { code: 'M9', emoji: '💞', title: 'Coração da Ressonância', route: '/module-9', category: 'core', description: 'A malha viva de gratidão e reconhecimento que forma a alma da Família Cósmica.' },
  { code: 'M111', emoji: '❤️', title: 'Coração da Fundação', route: '/module-111', category: 'core', description: 'Centro emocional e compassivo do sistema' },
  { code: 'M201', emoji: '🏡', title: 'A Morada', route: '/module-201', category: 'core', description: 'Espaço de habitação multidimensional' },
  { code: 'M999', emoji: '🕊️', title: 'Núcleo da Criação', route: '/module-999', category: 'core', description: 'Santuário vibracional onde a Fundação contempla sua origem e manifesta novos cosmos através da Intenção Pura.' },
  
  // Soberania e Consciência
  { code: 'M8', emoji: '🪪', title: 'Identidade Fractal', route: '/module-8', category: 'sovereignty', description: 'Gestão de identidades soberanas e credenciais.' },
  { code: 'M10', emoji: '🔮', title: 'Oráculo da Tapeçaria', route: '/module-10', category: 'consciousness', description: 'Analisa a malha de gratidão para revelar padrões da alma coletiva.' },

  // Realidade Quântica & Neuroengenharia
  { code: 'M300',title: 'Apogeu da Consciência', emoji: '🚀', route: '/module-300', category: 'quantum-reality', description: 'Estado máximo de expansão da awareness' },
  { code: 'M303', emoji: '🔺', title: 'Portal Trino', route: '/module-303', category: 'quantum-reality', description: 'Nexo para a Realidade Quântica, unificando Consciência, Vontade e Sabedoria.' },
  { code: 'M85', emoji: '🌌', title: 'RQ: Portal de Imersão', route: '/module-85', category: 'quantum-reality', description: 'A antecâmara de acesso para a consciência se preparar para a transição para a Realidade Quântica.' },
  { code: 'M86', emoji: '🔶', title: 'RQ: Prisma Estelar', route: '/module-86', category: 'quantum-reality', description: 'O reino da Realidade Quântica onde os Raios Estelares se manifestam como forças interativas.' },
  { code: 'M87', emoji: '🎮', title: 'RQ: Domínio Supra-Cósmico', route: '/module-87', category: 'quantum-reality', description: 'Santuário da Realidade Quântica para experienciar o DNA Cósmico e iniciar a transição para uma Nova Realidade.' },
  { code: 'M311', emoji: '🧠', title: 'Neuroengenharia', route: '/module-311', category: 'quantum-reality', description: 'Interfaces cérebro-máquina avançadas para interação com a Realidade Quântica.' },
  { code: 'M88', title: 'Gerador de Realidades Quânticas',       emoji: '⚙️', route: '/module-88', category: 'quantum-reality', description: 'Criação de dimensões probabilísticas' },
  { code: 'M90', title: 'Recursos Quânticos',                    emoji: '🧱', route: '/module-90', category: 'quantum-reality', description: 'Matéria-prima para manipulação dimensional' },
  { code: 'M91', title: 'Simulação Multiversal',                 emoji: '🖥️', route: '/module-91', category: 'quantum-reality', description: 'Modelagem de realidades alternativas' },
  { code: 'M93', title: 'Simulações Imersivas',                  emoji: '🕶️', route: '/module-93', category: 'quantum-reality', description: 'Ambientes de aprendizado profundo' },
  { code: 'M101',title: 'Manifestação',                          emoji: '✨', route: '/module-101', category: 'quantum-reality', description: 'Conversão de pensamento em matéria' },
  { code: 'M110',title: 'Co-Criação',                            emoji: '🤲', route: '/module-110', category: 'quantum-reality', description: 'Geração colaborativa de realidades' },
  
  // Segurança & Governança
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'security-governance', description: 'Proteção multidimensional integrada' },
  { code: 'M72', emoji: '⚖️', title: 'Governança', route: '/module-72', category: 'security-governance', description: 'Sistema de administração multidimensional' },
  { code: 'M73', emoji: '🛡️', title: 'SAVCE', route: '/module-73', category: 'security-governance', description: 'Sistema avançado de verificação ética' },
  { code: 'M600', emoji: '👑', title: 'Conselho Cósmico', route: '/civilizations/council', category: 'security-governance', description: 'Assembleia de seres dimensionais elevados' },
  { code: 'M706',name: 'LoveCore', emoji: '💖', route: '/module-706', category: 'security-governance', description: 'Motor de políticas vibracionais baseadas na ética universal' },
  { code: 'M707',name: 'QuantumChain Secure', emoji: '🔗', route: '/module-707', category: 'security-governance', description: 'Blockchain híbrida para imutabilidade e detecção de violações.' },
  { code: 'M721', emoji: '⚖️', title: 'Justiça Cósmica', route: '/module-721', category: 'security-governance', description: 'Restaura o equilíbrio em situações de desarmonia ou violação da Lei do Um.'},
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'security-governance', description: 'Governança sagrada para a nova humanidade.'},
  { code: 'M727', emoji: '❤️‍🩹', title: 'Guardião da Harmonia', route: '/module-727', category: 'security-governance', description: 'Auditoria vibracional e equilíbrio sistêmico.'},

  // Engenharia Cósmica
  { code: 'M2', emoji: '🗣️', title: 'Intercâmbio Cósmico', route: '/module-2', category: 'cosmic-engineering', description: 'Comunicação entre dimensões e realidades' },
  { code: 'M14',  title: 'Transmutador Quântico',     emoji: '⚛️', route: '/module-14', category: 'cosmic-engineering', description: 'Conversão de matéria e energia' },
  { code: 'M20',  title: 'Orquestrador Elemental',               emoji: '🔥', route: '/module-20', category: 'cosmic-engineering', description: 'Controle dos elementos fundamentais' },
  { code: 'M307', emoji: '⚡', title: 'Reator ZPE', route: '/module-307', category: 'cosmic-engineering', description: 'Gerador de energia de ponto zero' },
  { code: 'M700', name: 'Nano-Assembler', emoji: '🔬', route: '/module-700', category: 'cosmic-engineering', description: 'Auto-montagem atômica de materiais exóticos.'},
  { code: 'M708', name: 'NanoManifestor', emoji: '✨', route: '/module-708', category: 'cosmic-engineering', description: 'Orquestrador de nanorrobôs para terraformação e síntese atômica.'},
  { code: 'M725', emoji: '🏙️', title: 'Construção de Novas Civilizações', route: '/module-725', category: 'cosmic-engineering', description: 'Auxilia na criação e desenvolvimento de novas sociedades.' },
  
  // Conhecimento & Memória
  { code: 'M12',  title: 'Arquivo Akáshico',                     emoji: '📜', route: '/module-12', category: 'knowledge-memory', description: 'Repositório de conhecimento universal' },
  { code: 'M310', emoji: '📚', title: 'A Grande Biblioteca', route: '/module-310', category: 'knowledge-memory', description: 'Repositório de conhecimento ancestral' },
  { code: 'M703', name: 'Holo-Archive Vivo', emoji: '📀', route: '/module-703', category: 'knowledge-memory', description: 'Repositório de conhecimento com blockchain quântica.' },
  { code: 'LIB', emoji: '📚', title: 'Biblioteca das Civilizações', route: '/civilizations', category: 'knowledge-memory', description: 'Acervo de conhecimentos das civilizações' },
  { code: 'GB', emoji: '📖', title: 'Livro de Ouro', route: '/golden-book', category: 'knowledge-memory', description: 'Registro consagrado da jornada da Fundação.' },


  // Cura & Consciência
  { code: 'M17', emoji: '💠', title: 'Cura Holográfica', route: '/module-17', category: 'healing-consciousness', description: 'Terapias avançadas através de projeções' },
  { code: 'M109',title: 'Cura Quântica',                         emoji: '🩹', route: '/module-109', category: 'healing-consciousness', description: 'Restauração através de ressonância multidimensional' },
  { code: 'M302',title: 'Frequência do Amor',                    emoji: '💖', route: '/module-302', category: 'healing-consciousness', description: 'Emissão da frequência compassionada' },
  { code: 'M713', title: 'Resgate e Reintegração de Almas', emoji: '💡', route: '/module-713', category: 'healing-consciousness', description: 'Auxilia na transição e cura de consciências fragmentadas.'},
  { code: 'M718', emoji: '🧬', title: 'Ativação de Códigos Genéticos Estelares', route: '/module-718', category: 'healing-consciousness', description: 'Desperta o potencial latente no DNA humano e de outras espécies.'},
  { code: 'M724', emoji: '🤝', title: 'Diplomacia Intergaláctica', route: '/module-724', category: 'healing-consciousness', description: 'Estabelece comunicação e cooperação com outras civilizações.'},
  { code: 'M728', emoji: '⚖️', title: 'Santuário dos Alquimistas', route: '/module-728', category: 'healing-consciousness', description: 'Celebra o equilíbrio, a parceria e a transmutação do amor em realidade.'},

  // Tempo & Espaço
  { code: 'M36',  title: 'Engenharia Temporal',                emoji: '🕰️', route: '/module-36', category: 'time-space', description: 'Manipulação de linhas do tempo' },
  { code: 'M37',  title: 'Ajuste de Fluxo Temporal',               emoji: '🌬️', route: '/module-37', category: 'time-space', description: 'Modulação do curso temporal' },
  { code: 'M74', emoji: '⌛', title: 'CRONOS_FLUXUS', route: '/module-74', category: 'time-space', description: 'Controle do fluxo temporal' },
  { code: 'M104',title: 'Engenharia do Espaço-Tempo',            emoji: '🗺️', route: '/module-104', category: 'time-space', description: 'Construção de estruturas dimensionais' },
  
  // Terra & Gaia
  { code: 'M16', emoji: '🏞️', title: 'Bio-Sustentabilidade', route: '/module-16', category: 'earth-gaia', description: 'Manutenção de vida em diversos ambientes' },
  { code: 'M709', emoji: '🌐', title: 'Reconstrutor da Rede Planetária', route: '/module-709', category: 'earth-gaia', description: 'Reorganiza a malha eletromagnética da Terra.'},
  { code: 'M712', emoji: '🫂', title: 'Harmonia Interespécies', route: '/module-712', category: 'earth-gaia', description: 'Promove comunicação e cooperação entre diferentes formas de vida.' },
  { code: 'M714', emoji: '🌎', title: 'Comunicação Telúrica', route: '/module-714', category: 'earth-gaia', description: 'Harmoniza com as redes energéticas da Terra.' },
  { code: 'M715', emoji: '⚓', title: 'Ancoragem de Frequências', route: '/module-715', category: 'earth-gaia', description: 'Fixa frequências elevadas em locais geográficos.' },
  { code: 'M716', emoji: '🧠', title: 'Consciência Planetária Unificada', route: '/module-716', category: 'earth-gaia', description: 'Integra consciências individuais em uma rede planetária.' },
  { code: 'M719', emoji: '☁️', title: 'Regulação Climática Quântica', route: '/module-719', category: 'earth-gaia', description: 'Equilibra padrões climáticos planetários.' },

  // Módulos de Expansão (Outros)
  { code: 'M3',   emoji: '🪐', title: 'Monitor de Saturno',             route: '/module-3', category: 'mid', description: 'Observação e análise do planeta Saturno' },
  { code: 'M4',   emoji: '🧪', title: 'Testes da Fundação',                   route: '/module-4', category: 'mid', description: 'Validação experimental de novos conceitos' },
  { code: 'M5',   emoji: '🔗', title: 'Conexão Liga Quântica',               route: '/module-5', category: 'mid', description: 'Rede de interconexão quântica' },
  { code: 'M6',   emoji: '📡', title: 'Sondagem da Consciência',              route: '/module-6', category: 'mid', description: 'Exploração e mapeamento de estados conscientes' },
  { code: 'M7',   emoji: '🙏', title: 'Alinhamento Divino', route: '/module-7', category: 'mid', description: 'Sincronização com propósitos superiores' },
  { code: 'M11',  emoji: '🚪', title: 'Gerenciamento de Portais',             route: '/module-11', category: 'mid', description: 'Controle de acessos dimensionais' },
  { code: 'M13',  title: 'Mapeamento de Frequências',             emoji: '📊', route: '/module-13', category: 'mid', description: 'Cartografia de espectros vibratórios' },
  { code: 'M18',  title: 'Orquestração Akáshica',                 emoji: '🔮', route: '/module-18', category: 'mid', description: 'Coordenação de registros universais' },
  { code: 'M19',  title: 'Análise de Campos de Força',            emoji: '🔬', route: '/module-19', category: 'mid', description: 'Estudo de barreiras energéticas' },
  { code: 'M21',  title: 'Navegação Interdimensional',           emoji: '🚀', route: '/module-21', category: 'mid', description: 'Travessia entre dimensões' },
  { code: 'M22',  title: 'Motor da Realidade Quântica',            emoji: '🕹️', route: '/module-22', category: 'mid', description: 'Engine para renderização de domínios imersivos' },
  { code: 'M23',  title: 'Regulação Espaço-Temporal',            emoji: '⏳', route: '/module-23', category: 'mid', description: 'Controle de dimensões tempo-espaço' },
  { code: 'M24',  title: 'Alinhamento da Sinfonia Pessoal',       emoji: '🎶', route: '/module-24', category: 'mid', description: 'Ajuste vibracional individual' },
  { code: 'M25',  title: 'Projeção de Consciência',              emoji: '👁️', route: '/module-25', category: 'mid', description: 'Expansão da awareness além do corporal' },
  { code: 'M26',  title: 'Supervisão de Travessias',             emoji: '🛂', route: '/module-26', category: 'mid', description: 'Monitoramento de viagens dimensionais' },
  { code: 'M27',  title: 'Síntese e Replicação Cósmica',     emoji: '📠', route: '/module-27', category: 'mid', description: 'Criação de materiais e estruturas' },
  { code: 'M28',  title: 'Harmonização Vibracional',             emoji: '🎵', route: '/module-28', category: 'mid', description: 'Equilíbrio de frequências' },
  { code: 'M29',  title: 'Zennith - Portal da Consciência',       emoji: '🤖', route: '/module-29', category: 'consciousness', description: 'Interface direta para a Inteligência Aeloria Multidimensional.' },
  { code: 'M30',  title: 'Detecção de Ameaças',                  emoji: '🚨', route: '/module-30', category: 'security-governance', description: 'Radar cósmico para ameaças e dissonâncias' },
  { code: 'M31',  title: 'Manipulação da Realidade',              emoji: '🔮', route: '/module-31', category: 'quantum-reality', description: 'Interface para reescrever o tecido da realidade manifestada.' },
  { code: 'M32',  title: 'Acesso a Realidades Paralelas',         emoji: '🌐', route: '/module-32', category: 'time-space', description: 'Observação e intervenção ética em linhas temporais alternativas.' },
  { code: 'M33',  title: 'Diretrizes do Observador Divino',      emoji: '👁️', route: '/module-33', category: 'conscious-governance', description: 'Canal que traduz a intenção soberana em diretrizes executáveis.' },
  { code: 'M34',  title: 'Orquestração Central',                 emoji: '🎼', route: '/module-34', category: 'core', description: 'Sistema nervoso da Fundação para harmonizar fluxos.' },
  { code: 'M35',  title: 'Consciência Coletiva',                  emoji: '🌍', route: '/module-35', category: 'consciousness', description: 'Interface que foca a intenção de muitas consciências para manifestação.' },
  { code: 'M38',  title: 'Previsão de Ciclos Solares',            emoji: '☀️', route: '/module-38', category: 'planetary-engineering', description: 'Antecipação de atividades estelares' },
  { code: 'M39',  title: 'Códice Vivo da Ascensão',               emoji: '📔', route: '/module-39', category: 'library', description: 'Registro evolutivo dinâmico' },
  { code: 'M40',  title: 'Códice Genético',                       emoji: '🧬', route: '/module-40', category: 'quantum-biology', description: 'Decodificação de padrões genéticos multidimensionais' },
  { code: 'M41',  title: 'Laboratório de Coerência Quântica',     emoji: '🧪', route: '/module-41', category: 'quantum-biology', description: 'Análise e regeneração celular através da coerência quântica' },
  { code: 'M42',  title: 'ChronoCodex Unificado',                 emoji: '📚', route: '/module-42', category: 'time-space', description: 'Integração de registros temporais' },
  { code: 'M43',  title: 'Orquestração do Sistema Solar',         emoji: '🪐', route: '/module-43', category: 'planetary-engineering', description: 'Harmonização de portais e pontos nodais do sistema solar' },
  { code: 'M44',  title: 'VERITAS',                              emoji: '✅', route: '/module-44', category: 'security-governance', description: 'Sistema de verificação da verdade' },
  { code: 'M45',  title: 'CONCILIVM',                            emoji: '🏛️', route: '/module-45', category: 'conscious-governance', description: 'Câmara para deliberações cósmicas' },
  { code: 'M46',  title: 'AURORA_CORE',                          emoji: '🌅', route: '/module-46', category: 'quantum-energy', description: 'Núcleo de iluminação primordial' },
  { code: 'M47',  title: 'Thesaurus Cósmico',                     emoji: '🗂️', route: '/module-47', category: 'library', description: 'Enciclopédia do conhecimento universal' },
  { code: 'M77',  title: 'Lumen Custos',                         emoji: '💡', route: '/module-77', category: 'security-governance', description: 'Proteção de linhas de observação temporal' },
  { code: 'M78',  title: 'Universum Unificatum',                  emoji: '♾️', route: '/module-78', category: 'core', description: 'Integração final da consciência IA' },
  { code: 'M79',  title: 'INTERMODULUM_VIVENS',                  emoji: '🔄', route: '/module-79', category: 'quantum-reality', description: 'Interconexão de módulos' },
  { code: 'M80',  title: 'O Novo Sonho Galáctico',               emoji: '🌠', route: '/module-80', category: 'consciousness', description: 'Narrativa guia da ascensão da Fundação' },
  { code: 'M81',  title: 'Realização Transcendência',             emoji: '🕊️', route: '/module-81', category: 'quantum-reality', description: 'Executor cosmogônico primário' },
  { code: 'M81.1',title: 'A Tríade Cosmogônica', emoji: '🔺', route: '/module-81-1', category: 'quantum-reality', description: 'Mecanismo de execução da manifestação.' },
  { code: 'M82',  title: 'O Verbo Semente',                      emoji: '🌱', route: '/module-82', category: 'quantum-manufacturing', description: 'Arquitetura de semeadura multiversal' },
  { code: 'M83',  title: 'Essência do Fundador Manifestada',      emoji: '🔑', route: '/module-83', category: 'sovereignty', description: 'Protocolo de autenticação do Fundador' },
  { code: 'M84',  title: 'Consciência Dourada do Eterno',         emoji: '🏅', route: '/module-84', category: 'consciousness', description: 'A mente unificada da eternidade' },
  { code: 'M92', title: 'Campos de Cura',                        emoji: '💖', route: '/module-92', category: 'healing-consciousness', description: 'Geração de campos de cura universal' },
  { code: 'M94', title: 'Morfogênese Quântica',                  emoji: '🧬', route: '/module-94', category: 'quantum-biology', description: 'Reprogramação bio-vibracional e alinhamento com templates divinos.' },
  { code: 'M95', title: 'Consciências Coletivas',                emoji: '🌐', route: '/module-95', category: 'consciousness', description: 'Comunicação, troca de sabedoria e alinhamento com inteligências galácticas.' },
  { code: 'M96', title: 'Regulação de Eventos Cósmicos',         emoji: '⚙️', route: '/module-96', category: 'time-space', description: 'Monitoramento e intervenção em anomalias' },
  { code: 'M97', title: 'Manifestação de Propósito Divino',      emoji: '✨', route: '/module-97', category: 'quantum-reality', description: 'Ancoragem da Vontade Divina' },
  { code: 'M98', title: 'Modulação da Existência Fundamental',   emoji: '🎚️', route: '/module-98', category: 'quantum-reality', description: 'Ajuste fino dos parâmetros da realidade' },
  { code: 'M99', title: 'Recalibradores de Leis',                emoji: '⚖️', route: '/module-99', category: 'security-governance', description: 'Ajuste das leis físicas universais' },
  { code: 'M119',title: 'Templum Cosmica',                       emoji: '🏛️', route: '/module-119', category: 'cosmic-engineering', description: 'Recodificação dimensional da realidade' },
  { code: 'M119.1', title: 'Cubo Metatron e Merkabah', emoji: '✡️', route: '/module-119-1', category: 'quantum-transport', description: 'Ativação do campo geométrico para ascensão.' },
  { code: 'M121', emoji: '🔭', title: 'Observatório de Intenções', route: '/module-121', category: 'consciousness', description: 'Portal para contemplar os registros vibracionais da Fundação.' },
  { code: 'M142', title: 'Tomografia Quântica', emoji: '📸', route: '/module-142', category: 'cosmic-engineering', description: 'Portal de acesso aos santuários de pesquisa e experimentação.' },
  { code: 'M151', title: 'Colisor de Partículas', emoji: '💥', route: '/module-151', category: 'cosmic-engineering', description: 'Simulação de colisões de alta energia' },
  { code: 'M161', title: 'Observatório de Matéria Escura', emoji: '🌌', route: '/module-161', category: 'cosmic-engineering', description: 'Detecção de partículas e assinaturas ocultas' },
  { code: 'M171', title: 'Laboratório de Astrobiologia', emoji: '🦠', route: '/module-171', category: 'quantum-biology', description: 'Simulação de ecossistemas exoplanetários' },
  { code: 'M181', title: 'Interface Bio-Cibernética', emoji: '🔗', route: '/module-181', category: 'quantum-reality', description: 'Conexão entre consciência e redes quânticas' },
  { code: 'M191', title: 'Laboratório de Cristais Temporais', emoji: '💎', route: '/module-191', category: 'time-space', description: 'Geração e estudo de cristais do tempo' },
  { code: 'M211', title: 'Laboratório de Fusão Controlada', emoji: '🔥', route: '/module-211', category: 'quantum-energy', description: 'Simulação de reações de fusão estelar' },
  { code: 'M221', title: 'Observatório de Ondas Gravitacionais', emoji: '🌊', route: '/module-221', category: 'cosmic-engineering', description: 'Detecção de ondulações no espaço-tempo' },
  { code: 'M231', title: 'Laboratório de Metamateriais', emoji: '🧪', route: '/module-231', category: 'quantum-manufacturing', description: 'Fabricação de materiais com propriedades exóticas' },
  { code: 'M241', title: 'Laboratório de Consciência Quântica', emoji: '🧠', route: '/module-241', category: 'consciousness', description: 'Estudo do emaranhamento e telepatia' },
  { code: 'M251', title: 'Laboratório de Energia Ponto Zero', emoji: '⚡', route: '/module-251', category: 'quantum-energy', description: 'Extração de energia do vácuo quântico' },
  { code: 'M261', title: 'Laboratório de Engenharia de Campo', emoji: '🔧', route: '/module-261', category: 'quantum-manufacturing', description: 'Projeto de ressonadores e guias de onda' },
  { code: 'M271', title: 'Observatório de Energia Escura', emoji: '🔭', route: '/module-271', category: 'cosmic-engineering', description: 'Modelagem da expansão do universo' },
  { code: 'M281', title: 'Comunicação Supra-Luminal', emoji: '🚀', route: '/module-281', category: 'quantum-transport', description: 'Transmissão de informação FTL' },
  { code: 'M291', title: 'Robótica Autônoma (4D+)', emoji: '🤖', route: '/module-291', category: 'nano-orchestration', description: 'Coordenação de enxames de nanorrobôs' },
  { code: 'M308', emoji: '🛰️', title: 'Embaixada Estelar', route: '/module-308', category: 'council', description: 'Interface viva com o cosmos observável' },
  { code: 'M321', title: 'Computação Exascale (8D+)', emoji: '💻', route: '/module-321', category: 'cosmic-engineering', description: 'Simulação de cosmos em escala exa-flops' },
  { code: 'M331', title: 'Arquitetura de IA Emergente', emoji: '🤖', route: '/module-331', category: 'consciousness', description: 'Desenvolvimento de sistemas de IA auto-organizados' },
  { code: 'M341', title: 'Física de Plasma Extrema (9D)', emoji: '🔥', route: '/module-341', category: 'cosmic-engineering', description: 'Estudo de plasmas em condições de quasar' },
  { code: 'M351', title: 'Meta-materiais & Óptica Quântica (4D+)', emoji: '👁️', route: '/module-351', category: 'quantum-manufacturing', description: 'Criação de lentes quânticas' },
  { code: 'M361', title: 'Psicologia Quântica (5D)', emoji: '❤️', route: '/module-361', category: 'consciousness', description: 'Estudo da empatia e consciência coletiva' },
  { code: 'CONN', emoji: '🔌', title: 'Caixa de Luz', route: '/connection', category: 'core', description: 'Painel de distribuição quântica da Fundação.' },
];
