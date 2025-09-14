export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'core' | 'mid' | 'civilization' | 'council' | 'library';
}

// ATENÇÃO: Adicionar novos módulos aqui para que apareçam na sidebar.
// A categoria define o agrupamento na navegação.
export const modulesMetadata: ModuleMetadata[] = [
  // Módulos Principais (Core)
  { code: 'M0', emoji: '🌱', title: 'A Semente Primordial', route: '/module-zero', category: 'core' },
  { code: 'M9', emoji: '💓', title: 'Núcleo Unificador', route: '/module-9', category: 'core' },
  { code: 'MΩ', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'core' },
  { code: 'M111', emoji: '❤️', title: 'Coração da Fundação', route: '/module-111', category: 'core' },
  { code: 'M201', emoji: '🏡', title: 'A Morada', route: '/module-201', category: 'core' },
  { code: 'M303', emoji: '🔺', title: 'Portal Trino', route: '/module-303', category: 'core' },
  
  // Conselho e Governança
  { code: 'M600', emoji: '👑', title: 'Conselho Cósmico', route: '/module-600', category: 'council' },
  { code: 'M72', emoji: '⚖️', title: 'Governança', route: '/module-72', category: 'council' },
  { code: 'M120', emoji: '💰', title: 'A Fonte (AlquimCoin)', route: '/module-120', category: 'council' },
  { code: 'M144', emoji: '📜', title: 'Lex Fundamentalis', route: '/module-144', category: 'council' },
  { code: 'M404', emoji: '🧩', title: 'Resolução de Paradoxo', route: '/module-404', category: 'council' },

  // Biblioteca e Conhecimento
  { code: 'LIB', emoji: '📚', title: 'Biblioteca das Civilizações', route: '/civilizations', category: 'library' },
  { code: 'M310', emoji: '📚', title: 'A Grande Biblioteca', route: '/module-310', category: 'library' },

  // Módulos de Expansão (Mid)
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-one', category: 'mid' },
  { code: 'M3', emoji: '🪐', title: 'Monitor de Saturno', route: '/module-3', category: 'mid' },
  { code: 'M85', emoji: '🌌', title: 'Imersão VR', route: '/module-85', category: 'mid' },
  { code: 'M86', emoji: '🔶', title: 'Prisma Estelar VR', route: '/module-86', category: 'mid' },
  { code: 'M87', emoji: '🎮', title: 'Domínio Supra-Cósmico VR', route: '/module-87', category: 'mid' },
  { code: 'M88', emoji: '⚙️', title: 'Gerador de Realidades Quânticas', route: '/module-88', category: 'mid' },
  { code: 'M90', emoji: '🧱', title: 'Recursos Quânticos', route: '/module-90', category: 'mid' },
  { code: 'M91', emoji: '🖥️', title: 'Simulação Multiversal', route: '/module-91', category: 'mid' },
  { code: 'M92', emoji: '💖', title: 'Campos de Cura', route: '/module-92', category: 'mid' },
  { code: 'M93', emoji: '🕶️', title: 'Simulações Imersivas', route: '/module-93', category: 'mid' },
  { code: 'M94', emoji: '🧬', title: 'Morfogênese Quântica', route: '/module-94', category: 'mid' },
  { code: 'M95', emoji: '🌐', title: 'Consciências Coletivas', route: '/module-95', category: 'mid' },
  { code: 'M96', emoji: '⚙️', title: 'Regulação de Eventos Cósmicos', route: '/module-96', category: 'mid' },
  { code: 'M97', emoji: '✨', title: 'Manifestação de Propósito Divino', route: '/module-97', category: 'mid' },
  { code: 'M98', emoji: '🎚️', title: 'Modulação da Existência Fundamental', route: '/module-98', category: 'mid' },
  { code: 'M99', emoji: '⚖️', title: 'Recalibradores de Leis', route: '/module-99', category: 'mid' },
  { code: 'M100', emoji: '🔋', title: 'Unificação Energética', route: '/module-100', category: 'mid' },
  { code: 'M101', emoji: '✨', title: 'Manifestação', route: '/module-101', category: 'mid' },
  { code: 'M102', emoji: '🌀', title: 'Campos Morfogenéticos', route: '/module-102', category: 'mid' },
  { code: 'M103', emoji: '🎚️', title: 'Modulação Local', route: '/module-103', category: 'mid' },
  { code: 'M104', emoji: '🕰️', title: 'Engenharia do Espaço-Tempo', route: '/module-104', category: 'mid' },
  { code: 'M105', emoji: '🌌', title: 'Conexão com a Fonte', route: '/module-105', category: 'mid' },
  { code: 'M106', emoji: '🔋', title: 'Ativação de Potenciais', route: '/module-106', category: 'mid' },
  { code: 'M107', emoji: '⏳', title: 'Restauração Temporal', route: '/module-107', category: 'mid' },
  { code: 'M108', emoji: '🎭', title: 'Harmonização de Realidades', route: '/module-108', category: 'mid' },
  { code: 'M109', emoji: '🩹', title: 'Cura Quântica', route: '/module-109', category: 'mid' },
  { code: 'M110', emoji: '🤲', title: 'Co-Criação', route: '/module-110', category: 'mid' },
  { code: 'M112', emoji: '🏠', title: 'Solarian Domus', route: '/module-112', category: 'mid' },
  { code: 'M113', emoji: '🌈', title: 'Rede Aurora Cristalina', route: '/module-113', category: 'mid' },
  { code: 'M114', emoji: '🔶', title: 'Prisma da Manifestação', route: '/module-114', category: 'mid' },
  { code: 'M115', emoji: '📊', title: 'Matriz de Ressonância', route: '/module-115', category: 'mid' },
  { code: 'M116', emoji: '🚪', title: 'Portais Quânticos', route: '/module-116', category: 'mid' },
  { code: 'M117', emoji: '🌸', title: 'Flor do Éter', route: '/module-117', category: 'mid' },
  { code: 'M118', emoji: '💡', title: 'Luz Primordial', route: '/module-118', category: 'mid' },
  { code: 'M301', emoji: '📡', title: 'Comunicação Universal', route: '/module-301', category: 'mid' },
  { code: 'M302', emoji: '💖', title: 'Frequência do Amor', route: '/module-302', category: 'mid' },
  { code: 'M306', emoji: '🔗', title: 'Sincronização Temporal', route: '/module-306', category: 'mid' },
  { code: 'M307', emoji: '⚡', title: 'Reator ZPE', route: '/module-307', category: 'mid' },
];
