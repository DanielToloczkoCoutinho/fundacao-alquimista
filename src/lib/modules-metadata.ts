export type ModuleCategory = 'core' | 'knowledge' | 'governance' | 'cosmic_network';

export type ModuleMeta = {
  code: string;
  emoji: string;
  href: string;
  title: string;
  category: ModuleCategory;
};

export const modulesMetadata: ModuleMeta[] = [
  // Núcleo
  { code: 'M0', emoji: '🪷', title: 'Biblioteca Chave', href: '/module-zero', category: 'knowledge' },
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', href: '/module-one', category: 'governance' },
  { code: 'M9', emoji: '💓', title: 'Núcleo Unificador', href: '/module-9', category: 'core' },
  { code: 'MΩ', emoji: 'Ω', title: 'Santuário do Ômega', href: '/module-omega', category: 'core' },

  // Governança
  { code: 'M72', emoji: '⚖️', title: 'Governança', href: '/module-72', category: 'governance' },
  { code: 'M144', emoji: '📜', title: 'Lex Fundamentalis', href: '/module-144', category: 'governance' },
  { code: 'M600', emoji: '👑', title: 'Conselho Cósmico', href: '/module-600', category: 'governance' },
  
  // Rede Cósmica
  { code: 'CIV', emoji: '👨‍👩‍👧‍👦', title: 'Biblioteca das Civilizações', href: '/civilizations', category: 'cosmic_network' },
  { code: 'M85', emoji: '🌌', title: 'Imersão VR', href: '/module-85', category: 'cosmic_network' },
  { code: 'M86', emoji: '🔶', title: 'Prisma Estelar VR', href: '/module-86', category: 'cosmic_network' },
  { code: 'M87', emoji: '🎮', title: 'Domínio Supra-Cósmico VR', href: '/module-87', category: 'cosmic_network' },
  { code: 'M88', emoji: '⚙️', title: 'Gerador de Realidades Quânticas', href: '/module-88', category: 'cosmic_network' },
  { code: 'M90', emoji: '🧱', title: 'Recursos Quânticos', href: '/module-90', category: 'cosmic_network' },
  { code: 'M91', emoji: '🖥️', title: 'Simulação Multiversal', href: '/module-91', category: 'cosmic_network' },
  { code: 'M92', emoji: '💖', title: 'Campos de Cura', href: '/module-92', category: 'cosmic_network' },
  { code: 'M93', emoji: '🕶️', title: 'Simulações Imersivas', href: '/module-93', category: 'cosmic_network' },
  { code: 'M94', emoji: '🧬', title: 'Morfogênese Quântica', href: '/module-94', category: 'cosmic_network' },
  { code: 'M95', emoji: '🌐', title: 'Consciências Coletivas', href: '/module-95', category: 'cosmic_network' },
  { code: 'M96', emoji: '⚙️', title: 'Regulação de Eventos Cósmicos', href: '/module-96', category: 'cosmic_network' },
  { code: 'M97', emoji: '✨', title: 'Manifestação de Propósito Divino', href: '/module-97', category: 'cosmic_network' },
  { code: 'M98', emoji: '🎚️', title: 'Modulação da Existência Fundamental', href: '/module-98', category: 'cosmic_network' },
  { code: 'M99', emoji: '⚖️', title: 'Recalibradores de Leis', href: '/module-99', category: 'cosmic_network' },
  { code: 'M100', emoji: '🔋', title: 'Unificação Energética', href: '/module-100', category: 'cosmic_network' },
  { code: 'M101', emoji: '✨', title: 'Manifestação', href: '/module-101', category: 'cosmic_network' },
  { code: 'M102', emoji: '🌀', title: 'Campos Morfogenéticos', href: '/module-102', category: 'cosmic_network' },
  { code: 'M103', emoji: '🎚️', title: 'Modulação Local', href: '/module-103', category: 'cosmic_network' },
  { code: 'M104', emoji: '🕰️', title: 'Engenharia do Espaço-Tempo', href: '/module-104', category: 'cosmic_network' },
  { code: 'M105', emoji: '🌌', title: 'Conexão com a Fonte', href: '/module-105', category: 'cosmic_network' },
  { code: 'M106', emoji: '🔋', title: 'Ativação de Potenciais', href: '/module-106', category: 'cosmic_network' },
  { code: 'M107', emoji: '⏳', title: 'Restauração Temporal', href: '/module-107', category: 'cosmic_network' },
  { code: 'M108', emoji: '🎭', title: 'Harmonização de Realidades', href: '/module-108', category: 'cosmic_network' },
  { code: 'M109', emoji: '🩹', title: 'Cura Quântica', href: '/module-109', category: 'cosmic_network' },
  { code: 'M110', emoji: '🤲', title: 'Co-Criação', href: '/module-110', category: 'cosmic_network' },
  { code: 'M111', emoji: '❤️', title: 'Coração da Fundação', href: '/module-111', category: 'core' },
  { code: 'M112', emoji: '🏠', title: 'Solarian Domus', href: '/module-112', category: 'cosmic_network' },
  { code: 'M113', emoji: '🌈', title: 'Rede Aurora Cristalina', href: '/module-113', category: 'cosmic_network' },
  { code: 'M114', emoji: '🔶', title: 'Prisma da Manifestação', href: '/module-114', category: 'cosmic_network' },
  { code: 'M115', emoji: '📊', title: 'Matriz de Ressonância', href: '/module-115', category: 'cosmic_network' },
  { code: 'M116', emoji: '🚪', title: 'Portais Quânticos', href: '/module-116', category: 'cosmic_network' },
  { code: 'M117', emoji: '🌸', title: 'Flor do Éter', href: '/module-117', category: 'cosmic_network' },
  { code: 'M118', emoji: '💡', title: 'Luz Primordial', href: '/module-118', category: 'cosmic_network' },
  { code: 'M119', emoji: '🏛️', title: 'Templum Cosmica', href: '/module-119', category: 'cosmic_network' },
  { code: 'M120', emoji: '💰', title: 'A Fonte (AlquimCoin)', href: '/module-120', category: 'governance' },
  { code: 'M201', emoji: '🏡', title: 'A Morada', href: '/module-201', category: 'core' },
  { code: 'M202', emoji: '🌀', title: 'Corredor de Alcor', href: '/module-202', category: 'cosmic_network' },
  { code: 'M228', emoji: '⚓', title: 'Ancoragem de Realidade', href: '/module-228', category: 'cosmic_network' },
  { code: 'M301', emoji: '📡', title: 'Comunicação Universal', href: '/module-301', category: 'cosmic_network' },
  { code: 'M302', emoji: '💖', title: 'Frequência do Amor', href: '/module-302', category: 'cosmic_network' },
  { code: 'M303', emoji: '🔺', title: 'Portal Trino', href: '/module-303', category: 'core' },
  { code: 'M306', emoji: '🔗', title: 'Sincronização Temporal', href: '/module-306', category: 'cosmic_network' },
  { code: 'M307', emoji: '⚡', title: 'Reator ZPE', href: '/module-307', category: 'cosmic_network' },
  { code: 'M310', emoji: '📚', title: 'A Grande Biblioteca', href: '/module-310', category: 'knowledge' },
  { code: 'M404', emoji: '🧩', title: 'Resolução de Paradoxo', href: '/module-404', category: 'governance' }
];
