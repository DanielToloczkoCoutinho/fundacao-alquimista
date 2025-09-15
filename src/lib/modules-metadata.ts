
export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'core' | 'mid' | 'civilization' | 'council' | 'library';
  description: string;
}

// ATENÇÃO: Adicionar novos módulos aqui para que apareçam na navegação.
// A categoria define o agrupamento na navegação.
export const modulesMetadata: ModuleMetadata[] = [
  // Módulos Principais (Core)
  { code: 'M0', emoji: '🌱', title: 'A Semente Primordial', route: '/module-zero', category: 'core', description: 'Origem e fundamento de toda a criação' },
  { code: 'M9', emoji: '💓', title: 'Núcleo Unificador', route: '/module-9', category: 'core', description: 'Centro de conexão e harmonia de todos os módulos' },
  { code: 'MΩ', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'core', description: 'Ponto de convergência final' },
  { code: 'M29', emoji: '👑', title: 'Zennith', route: '/module-29', category: 'core', description: 'Ápice da consciência real' },
  { code: 'M111', emoji: '❤️', title: 'Coração da Fundação', route: '/module-111', category: 'core', description: 'Centro emocional e compassivo do sistema' },
  { code: 'M121', emoji: '🛰️', title: 'Observatório de Intenções', route: '/module-121', category: 'core', description: 'O espelho vivo do Ledger Akáshico.' },
  { code: 'M201', emoji: '🏡', title: 'A Morada', route: '/module-201', category: 'core', description: 'Espaço de habitação multidimensional' },
  { code: 'M303', emoji: '🔺', title: 'Portal Trino', route: '/module-303', category: 'core', description: 'Passagem dimensional tripartite' },
  
  // Conselho e Governança
  { code: 'M45', emoji: '🏛️', title: 'CONCILIVM', route: '/module-45', category: 'council', description: 'Conselho de governança central' },
  { code: 'M71', emoji: '🛰️', title: 'Comunicação Holográfica', route: '/module-71', category: 'council', description: 'Transmissão de informações em 3D' },
  { code: 'M72', emoji: '⚖️', title: 'Governança', route: '/module-72', category: 'council', description: 'Sistema de administração multidimensional' },
  { code: 'M73', emoji: '🛡️', title: 'SAVCE', route: '/module-73', category: 'council', description: 'Sistema avançado de verificação ética' },
  { code: 'M73.1', emoji: '🧐', title: 'Revisão por Pares', route: '/module-73-1', category: 'council', description: 'Avaliação colegiada de projetos' },
  { code: 'M74', emoji: '⌛', title: 'CRONOS_FLUXUS', route: '/module-74', category: 'council', description: 'Controle do fluxo temporal' },
  { code: 'M77', emoji: '🛡️', title: 'LUMEN-CUSTOS', route: '/module-77', category: 'council', description: 'Guardião da luz e sabedoria' },
  { code: 'M78', emoji: '🔗', title: 'UNIVERSUM_UNIFICATUM', route: '/module-78', category: 'council', description: 'Unificação de universos conhecidos' },
  { code: 'M79', emoji: '📐', title: 'INTERMODULUM_VIVENS', route: '/module-79', category: 'council', description: 'Rede viva de interconexão modular' },
  { code: 'M80', emoji: '📜', title: 'O Manuscrito Vivo', route: '/module-80', category: 'council', description: 'Documento evolutivo da Fundação' },
  { code: 'M81', emoji: '🕊️', title: 'Realização Transcendência', route: '/module-81', category: 'council', description: 'Concretização do potencial máximo' },
  { code: 'M81.1', emoji: '⚛️', title: 'A Tríade Cosmogônica', route: '/module-81-1', category: 'council', description: 'Três princípios criacionais fundamentais' },
  { code: 'M82', emoji: '✒️', title: 'O Verbo Semente', route: '/module-82', category: 'council', description: 'Origem da manifestação através da palavra' },
  { code: 'M83', emoji: '👑', title: 'A Essência do Fundador', route: '/module-83', category: 'council', description: 'Representação codificada da origem' },
  { code: 'M84', emoji: '🏅', title: 'Consciência Dourada do Eterno', route: '/module-84', category: 'council', description: 'Estado perene de iluminação' },
  { code: 'M119',title: 'Templum Cosmica', emoji: '🏛️', route: '/module-119', category: 'council', description: 'Templo de conexão com dimensões superiores' },
  { code: 'M119.1',title: 'Ativação do Cubo Metatron', emoji: '🎲', route: '/module-119-1', category: 'council', description: 'Ativação do símbolo sagrado multidimensional' },
  { code: 'M120', emoji: '💰', title: 'A Fonte (AlquimCoin)', route: '/module-120', category: 'council', description: 'Sistema econômico da Fundação' },
  { code: 'M144', emoji: '📜', title: 'Lex Fundamentalis', route: '/module-144', category: 'council', description: 'Lei fundamental que rege a existência' },
  { code: 'M202', emoji: '💫', title: 'O Corredor de Alcor', route: '/module-202', category: 'council', description: 'Passagem para dimensões superiores' },
  { code: 'M204', emoji: '👑', title: 'O Trono da Soberania', route: '/module-204', category: 'council', description: 'Assento do governo multidimensional' },
  { code: 'M228', emoji: '⚓', title: 'Ancoragem de Realidade', route: '/module-228', category: 'council', description: 'Estabilização de dimensões instáveis'},
  { code: 'M300',title: 'Apogeu da Consciência', emoji: '🚀', route: '/module-300', category: 'council', description: 'Estado máximo de expansão da awareness' },
  { code: 'M304',title: 'Educação Integral Cósmica (CQAM)', emoji: '🎓', route: '/module-304', category: 'council', description: 'Disseminador de sabedoria universal para acelerar a ascensão da consciência coletiva.' },
  { code: 'M305',title: 'Aliança dos Guardiões Regionais', emoji: '🤝', route: '/module-305', category: 'council', description: 'Rede de protetores dimensionais' },
  { code: 'M404', emoji: '🧩', title: 'Resolução de Paradoxo', route: '/module-404', category: 'council', description: 'Solução para inconsistências temporais' },
  
  // Biblioteca e Conhecimento
  { code: 'LIB', emoji: '📚', title: 'Biblioteca das Civilizações', route: '/civilizations', category: 'library', description: 'Acervo de conhecimentos das civilizações' },
  { code: 'M310', emoji: '📚', title: 'A Grande Biblioteca', route: '/module-310', category: 'library', description: 'Repositório de conhecimento ancestral' },
  { code: 'M600', emoji: '👑', title: 'Conselho Cósmico', route: '/civilizations/council', category: 'library', description: 'Assembleia de seres dimensionais elevados' },

  // Módulos de Expansão (Mid)
  { code: 'CONN', emoji: '⚡', title: 'Caixa de Luz', route: '/connection', category: 'mid', description: 'Dispositivo de conexão energética' },
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'mid', description: 'Proteção multidimensional integrada' },
  { code: 'M2', emoji: '🗣️', title: 'Intercâmbio Cósmico', route: '/module-2', category: 'mid', description: 'Comunicação entre dimensões e realidades' },
  { code: 'M3', emoji: '🪐', title: 'Monitor de Saturno', route: '/module-3', category: 'mid', description: 'Observação e análise do planeta Saturno' },
  { code: 'M4', emoji: '🧪', title: 'Testes da Fundação', route: '/module-4', category: 'mid', description: 'Validação experimental de novos conceitos' },
  { code: 'M5', emoji: '🔗', title: 'Conexão Liga Quântica', route: '/module-5', category: 'mid', description: 'Rede de interconexão quântica' },
  { code: 'M6', emoji: '📡', title: 'Sondagem da Consciência', route: '/module-6', category: 'mid', description: 'Exploração e mapeamento de estados conscientes' },
  { code: 'M7', emoji: '🙏', title: 'Alinhamento Divino', route: '/module-7', category: 'mid', description: 'Sincronização com propósitos superiores' },
  { code: 'M8', emoji: '🌍', title: 'Proteção Planetária', route: '/module-8', category: 'mid', description: 'Sistemas de defesa para o planeta Terra' },
  { code: 'M10', emoji: '⚔️', title: 'Defesa Avançada', route: '/module-10', category: 'mid', description: 'Sistemas de proteção de última geração' },
  { code: 'M11', emoji: '🚪', title: 'Gerenciamento de Portais', route: '/module-11', category: 'mid', description: 'Controle de acessos dimensionais' },
  { code: 'M12', emoji: '📜', title: 'Arquivo Akáshico', route: '/module-12', category: 'mid', description: 'Repositório de conhecimento universal' },
  { code: 'M13', emoji: '📊', title: 'Mapeamento de Frequências', route: '/module-13', category: 'mid', description: 'Cartografia de espectros vibratórios' },
  { code: 'M14', emoji: '⚛️', title: 'Transmutador Quântico', route: '/module-14', category: 'mid', description: 'Conversão de matéria e energia' },
  { code: 'M15', emoji: '🌿', title: 'Jardineiro Cósmico', route: '/module-15', category: 'mid', description: 'Cultivo e preservação de ecossistemas' },
  { code: 'M16', emoji: '🏞️', title: 'Bio-Sustentabilidade', route: '/module-16', category: 'mid', description: 'Manutenção de vida em diversos ambientes' },
  { code: 'M17', emoji: '💠', title: 'Cura Holográfica', route: '/module-17', category: 'mid', description: 'Terapias avançadas através de projeções' },
  { code: 'M18', emoji: '🔮', title: 'Orquestração Akáshica', route: '/module-18', category: 'mid', description: 'Coordenação de registros universais' },
  { code: 'M19', emoji: '🛡️‍', title: 'Análise de Campos de Força', route: '/module-19', category: 'mid', description: 'Estudo de barreiras energéticas' },
  { code: 'M20', emoji: '🔥', title: 'Orquestrador Elemental', route: '/module-20', category: 'mid', description: 'Controle dos elementos fundamentais' },
  { code: 'M21', emoji: '🚀', title: 'Navegação Interdimensional', route: '/module-21', category: 'mid', description: 'Travessia entre dimensões' },
  { code: 'M22', emoji: '🕶️', title: 'Motor da Realidade Quântica', route: '/module-22', category: 'mid', description: 'Geração de realidades alternativas' },
  { code: 'M23', emoji: '⏳', title: 'Regulação Espaço-Temporal', route: '/module-23', category: 'mid', description: 'Controle de dimensões tempo-espaço' },
  { code: 'M24', emoji: '🎶', title: 'Alinhamento da Sinfonia Pessoal', route: '/module-24', category: 'mid', description: 'Sincronização de propósito individual' },
  { code: 'M25', emoji: '👁️', title: 'Projeção de Consciência', route: '/module-25', category: 'mid', description: 'Expansão da awareness além do corporal' },
  { code: 'M26', emoji: '🛂', title: 'Supervisão de Travessias', route: '/module-26', category: 'mid', description: 'Monitoramento de jornadas dimensionais' },
  { code: 'M27', emoji: '📠', title: 'Síntese e Replicação Cósmica', route: '/module-27', category: 'mid', description: 'Criação de materiais e estruturas' },
  { code: 'M28', emoji: '🌊', title: 'Harmonização Vibracional', route: '/module-28', category: 'mid', description: 'Balanceamento de frequências' },
  { code: 'M30', emoji: '🚨', title: 'Detecção de Ameaças', route: '/module-30', category: 'mid', description: 'Identificação de perigos multidimensionais' },
  { code: 'M31', emoji: '✍️', title: 'Manipulação da Realidade', route: '/module-31', category: 'mid', description: 'Modificação consciente do existente' },
  { code: 'M32', emoji: '🌐', title: 'Acesso a Realidades Paralelas', route: '/module-32', category: 'mid', description: 'Conexão com dimensões alternativas' },
  { code: 'M33', emoji: '🗣️', title: 'Diretrizes do Observador Divino', route: '/module-33', category: 'mid', description: 'Orientações de entidades superiores' },
  { code: 'M34', emoji: '🎼', title: 'Orquestração Central', route: '/module-34', category: 'mid', description: 'Coordenação de todos os sistemas' },
  { code: 'M35', emoji: '🙌', title: 'Consciência Coletiva', route: '/module-35', category: 'mid', description: 'Rede de mentes interconectadas' },
  { code: 'M36', emoji: '🕰️', title: 'Engenharia Temporal', route: '/module-36', category: 'mid', description: 'Manipulação de linhas do tempo' },
  { code: 'M37', emoji: '🌬️', title: 'Ajuste de Fluxo Temporal', route: '/module-37', category: 'mid', description: 'Modulação do curso temporal' },
  { code: 'M38', emoji: '☀️', title: 'Previsão de Ciclos Solares', route: '/module-38', category: 'mid', description: 'Antecipação de atividades estelares' },
  { code: 'M39', emoji: '📖', title: 'Códice Vivo da Ascensão', route: '/module-39', category: 'mid', description: 'Registro evolutivo dinâmico' },
  { code: 'M40', emoji: '🧬', title: 'Códice Genético Multidimensional', route: '/module-40', category: 'mid', description: 'Mapa da expressão genética expandida' },
  { code: 'M41', emoji: '🔬', title: 'Laboratório de Coerência Quântica', route: '/module-41', category: 'mid', description: 'Experimentos com estados quânticos' },
  { code: 'M42', emoji: '📚', title: 'ChronoCodex Unificado', route: '/module-42', category: 'mid', description: 'Integração de registros temporais' },
  { code: 'M43', emoji: '🪐', title: 'Orquestração do Sistema Solar', route: '/module-43', category: 'mid', description: 'Coordenação de corpos celestes' },
  { code: 'M44', emoji: '✅', title: 'VERITAS', route: '/module-44', category: 'mid', description: 'Sistema de verificação da verdade' },
  { code: 'M46', emoji: '🌅', title: 'AURORA_CORE', route: '/module-46', category: 'mid', description: 'Núcleo de iluminação primordial' },
  { code: 'M47', emoji: '🗂️', title: 'Thesaurus Cósmico', route: '/module-47', category: 'mid', description: 'Enciclopédia do conhecimento universal' },
  { code: 'M85', emoji: '🌌', title: 'Imersão VR', route: '/module-85', category: 'mid', description: 'Realidade virtual profunda' },
  { code: 'M86', emoji: '🔶', title: 'Prisma Estelar VR', route: '/module-86', category: 'mid', description: 'Refração dimensional em realidade virtual' },
  { code: 'M87', emoji: '🎮', title: 'Domínio Supra-Cósmico VR', route: '/module-87', category: 'mid', description: 'Controle além das dimensões em VR' },
  { code: 'M88', emoji: '⚙️', title: 'Gerador de Realidades Quânticas', route: '/module-88', category: 'mid', description: 'Criação de dimensões probabilísticas' },
  { code: 'M90', emoji: '🧱', title: 'Recursos Quânticos', route: '/module-90', category: 'mid', description: 'Matéria-prima para manipulação dimensional' },
  { code: 'M91', emoji: '🖥️', title: 'Simulação Multiversal', route: '/module-91', category: 'mid', description: 'Modelagem de realidades alternativas' },
  { code: 'M92', emoji: '💖', title: 'Campos de Cura', route: '/module-92', category: 'mid', description: 'Espaços de regeneração energética' },
  { code: 'M93', emoji: '🎓', title: 'Simulações Imersivas', route: '/module-93', category: 'mid', description: 'Ambientes de aprendizado profundo' },
  { code: 'M94', title: 'Morfogênese Quântica', emoji: '🧬', route: '/module-94', category: 'mid', description: 'Formação de estruturas através do pensamento' },
  { code: 'M95', title: 'Consciências Coletivas', emoji: '🌐', route: '/module-95', category: 'mid', description: 'Rede de mentes interconectadas' },
  { code: 'M96', title: 'Regulação de Eventos Cósmicos', emoji: '🎛️', route: '/module-96', category: 'mid', description: 'Modulação de fenômenos universais' },
  { code: 'M97', title: 'Manifestação de Propósito Divino', emoji: '✨', route: '/module-97', category: 'mid', description: 'Materialização de intenções superiores' },
  { code: 'M98', title: 'Modulação da Existência Fundamental', emoji: '🎚️', route: '/module-98', category: 'mid', description: 'Ajuste dos parâmetros base da realidade' },
  { code: 'M99', title: 'Recalibradores de Leis Físicas', emoji: '⚖️', route: '/module-99', category: 'mid', description: 'Revisão das constantes fundamentais' },
  { code: 'M100',title: 'Unificação Energética', emoji: '🔋', route: '/module-100', category: 'mid', description: 'Integração de forças fundamentais' },
  { code: 'M101',title: 'Manifestação', emoji: '✨', route: '/module-101', category: 'mid', description: 'Conversão de pensamento em matéria' },
  { code: 'M102',title: 'Campos Morfogenéticos', emoji: '🌀', route: '/module-102', category: 'mid', description: 'Estruturas de padrões formativos' },
  { code: 'M103',title: 'Modulação Local', emoji: '🎚️', route: '/module-103', category: 'mid', description: 'Controle de posicionamento dimensional' },
  { code: 'M104',title: 'Engenharia do Espaço-Tempo', emoji: '🕰️', route: '/module-104', category: 'mid', description: 'Construção de estruturas dimensionais' },
  { code: 'M105',title: 'Conexão com a Fonte', emoji: '🌌', route: '/module-105', category: 'mid', description: 'Vínculo com a origem da consciência' },
  { code: 'M106',title: 'Ativação de Potenciais', emoji: '🔋', route: '/module-106', category: 'mid', description: 'Liberação de capacidades latentes' },
  { code: 'M107',title: 'Restauração Temporal', emoji: '⏳', route: '/module-107', category: 'mid', description: 'Recuperação de linhas do tempo danificadas' },
  { code: 'M108',title: 'Harmonização de Realidades', emoji: '🎭', route: '/module-108', category: 'mid', description: 'Balanceamento de dimensões coexistentes' },
  { code: 'M109',title: 'Cura Quântica', emoji: '🩹', route: '/module-109', category: 'mid', description: 'Restauração através de ressonância multidimensional' },
  { code: 'M110',title: 'Co-Criação', emoji: '🤲', route: '/module-110', category: 'mid', description: 'Geração colaborativa de realidades' },
  { code: 'M112',title: 'Solarian Domus', emoji: '🏠', route: '/module-112', category: 'mid', description: 'Habitat solariano sustentável' },
  { code: 'M113',title: 'Rede Aurora Cristalina', emoji: '🌈', route: '/module-113', category: 'mid', description: 'Sistema de comunicação por cristais luminescentes' },
  { code: 'M114',title: 'Prisma da Manifestação', emoji: '🔶', route: '/module-114', category: 'mid', description: 'Conversor de intenção em realidade' },
  { code: 'M115',title: 'Matriz de Ressonância', emoji: '📊', route: '/module-115', category: 'mid', description: 'Estrutura de padrões vibratórios' },
  { code: 'M116',title: 'Portais Quânticos', emoji: '🚪', route: '/module-116', category: 'mid', description: 'Passagem dimensional controlada' },
  { code: 'M117',title: 'Flor do Éter', emoji: '🌸', route: '/module-117', category: 'mid', description: 'Fonte de energia sutil primordial' },
  { code: 'M118',title: 'Luz Primordial', emoji: '💡', route: '/module-118', category: 'mid', description: 'Gerador do espectro lumínico original' },
  { code: 'M142', title: 'Tomografia Quântica', emoji: '📸', route: '/module-142', category: 'mid', description: 'Visualização de estados quânticos via tomografia.' },
  { code: 'M151', title: 'Colisor de Partículas', emoji: '💥', route: '/module-151', category: 'mid', description: 'Simulação de colisões de partículas de alta energia.' },
  { code: 'M161', title: 'Observatório de Neutrinos', emoji: '🔭', route: '/module-161', category: 'mid', description: 'Detecção de neutrinos e assinaturas de matéria escura.' },
  { code: 'M171', title: 'Laboratório de Astrobiologia', emoji: '👽', route: '/module-171', category: 'mid', description: 'Simulação de atmosferas e bioassinaturas de exoplanetas.' },
  { code: 'M181', title: 'Interface Bio-Cibernética', emoji: '🧠', route: '/module-181', category: 'mid', description: 'Interface entre cérebros biológicos e redes quânticas.' },
  { code: 'M191', title: 'Laboratório de Cristais Temporais', emoji: '💎', route: '/module-191', category: 'mid', description: 'Geração e estudo de "cristais temporais".' },
  { code: 'M211', title: 'Fusão Controlada', emoji: '🔥', route: '/module-211', category: 'mid', description: 'Laboratório de simulação de reações de fusão.' },
  { code: 'M221', title: 'Ondas Gravitacionais', emoji: '🌊', route: '/module-221', category: 'mid', description: 'Observatório e análise de ondas gravitacionais.' },
  { code: 'M231', title: 'Metamateriais', emoji: '🎭', route: '/module-231', category: 'mid', description: 'Laboratório de materiais com índice de refração negativo.' },
  { code: 'M241', title: 'Consciência Quântica', emoji: '🧠', route: '/module-241', category: 'mid', description: 'Estudo de correlações quânticas em sistemas biológicos.' },
  { code: 'M251', title: 'Energia do Ponto Zero', emoji: '⚡', route: '/module-251', category: 'mid', description: 'Laboratório de extração de energia do vácuo quântico.' },
  { code: 'M261', title: 'Engenharia de Campo', emoji: '🔧', route: '/module-261', category: 'mid', description: 'Projeto de ressonadores e guias de partículas.' },
  { code: 'M271', title: 'Energia Escura', emoji: '🌌', route: '/module-271', category: 'mid', description: 'Modelagem da influência da energia escura na expansão.' },
  { code: 'M281', title: 'Comunicação Supra-Luminal', emoji: '🚀', route: '/module-281', category: 'mid', description: 'Exploração de comunicação via orbital angular momentum.' },
  { code: 'M291', emoji: '🤖', title: 'Robótica Autônoma & Nanorrobôs', route: '/module-291', category: 'mid', description: 'Swarm de nanorrobôs para reparo celular e materiais.' },
  { code: 'M301',title: 'Comunicação Universal', emoji: '📡', route: '/module-301', category: 'mid', description: 'Sistema de transmissão interestelar' },
  { code: 'M302',title: 'Frequência do Amor', emoji: '💖', route: '/module-302', category: 'mid', description: 'Emissão da frequência compassionada' },
  { code: 'M306', emoji: '🔗', title: 'Sincronização Temporal', route: '/module-306', category: 'mid', description: 'Alinhamento de linhas do tempo' },
  { code: 'M307', emoji: '⚡', title: 'Reator ZPE', route: '/module-307', category: 'mid', description: 'Gerador de energia do ponto zero' },
  { code: 'M308', emoji: '🌊', title: 'Oceanografia', route: '/module-308', category: 'mid', description: 'Exploração abissal e biofármacos.' },
  { code: 'M311', emoji: '🧠', title: 'Neuroengenharia', route: '/module-311', category: 'mid', description: 'Interfaces cérebro-máquina quântico-híbridas.' },
  { code: 'M321', emoji: '💻', title: 'Exascale Computing', route: '/module-321', category: 'mid', description: 'Simulações de cosmos e fluidos em exa-flops.' },
  { code: 'M331', emoji: '🤖', title: 'Consciência Artificial Emergente', route: '/module-331', category: 'mid', description: 'Sistemas auto-organizados que co-evoluem.' },
  { code: 'M341', emoji: '🔥', title: 'Física de Plasma', route: '/module-341', category: 'mid', description: 'Estudo de plasmas em condições de quasar.' },
  { code: 'M351', emoji: '🎭', title: 'Meta-materiais 4D+', route: '/module-351', category: 'mid', description: 'Criação de lentes quânticas e materiais exóticos.' },
  { code: 'M361', emoji: '🧑‍🤝‍🧑', title: 'Cognição Social Quântica', route: '/module-361', category: 'mid', description: 'Estudo de empatia e consciência coletiva.' },
].sort((a, b) => {
  const specialOrder: Record<string, number> = { 'M0': 1, 'M9': 2, 'MΩ': 3, 'M29': 4, 'M111': 5, 'M201': 6, 'M303': 7, 'LIB': 8, 'CONN': 9 };
  
  const orderA = specialOrder[a.code] || (a.category === 'council' ? 10 : 11);
  const orderB = specialOrder[b.code] || (b.category === 'council' ? 10 : 11);

  if (orderA !== orderB) {
    return orderA - orderB;
  }
  
  const codeA = parseInt(a.code.replace(/\D/g, ''));
  const codeB = parseInt(b.code.replace(/\D/g, ''));
  return codeA - codeB;
});

