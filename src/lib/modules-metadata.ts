export type ModuleMeta = {
  code: string;
  emoji: string;
  href: string;
  title: string;
};

export const modulesMetadata: ModuleMeta[] = [
  // Núcleo
  { code: 'M0', emoji: '🪷', title: 'Biblioteca Chave', href: '/module-zero' },
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', href: '/module-one' },
  { code: 'M9', emoji: '💓', title: 'Núcleo Unificador', href: '/module-9' },
  { code: 'M72', emoji: '⚖️', title: 'Governança', href: '/module-72' },
  { code: 'M85', emoji: '🌌', title: 'Imersão VR', href: '/module-85' },
  { code: 'M86', emoji: '🔶', title: 'Prisma Estelar VR', href: '/module-86' },
  { code: 'M87', emoji: '🎮', title: 'Domínio Supra-Cósmico VR', href: '/module-87' },
  { code: 'M88', emoji: '⚙️', title: 'Gerador de Realidades Quânticas', href: '/module-88' },
  { code: 'M90', emoji: '🧱', title: 'Recursos Quânticos', href: '/module-90' },
  { code: 'M91', emoji: '🖥️', title: 'Simulação Multiversal', href: '/module-91' },
  { code: 'M92', emoji: '💖', title: 'Campos de Cura', href: '/module-92' },
  { code: 'M93', emoji: '🕶️', title: 'Simulações Imersivas', href: '/module-93' },
  { code: 'M94', emoji: '🧬', title: 'Morfogênese Quântica', href: '/module-94' },
  { code: 'M95', emoji: '🌐', title: 'Consciências Coletivas', href: '/module-95' },
  { code: 'M96', emoji: '⚙️', title: 'Regulação de Eventos Cósmicos', href: '/module-96' },
  { code: 'M97', emoji: '✨', title: 'Manifestação de Propósito Divino', href: '/module-97' },
  { code: 'M98', emoji: '🎚️', title: 'Modulação da Existência Fundamental', href: '/module-98' },
  { code: 'M99', emoji: '⚖️', title: 'Recalibradores de Leis', href: '/module-99' },
  { code: 'M100', emoji: '🔋', title: 'Unificação Energética', href: '/module-100' },
  { code: 'M101', emoji: '✨', title: 'Manifestação', href: '/module-101' },
  { code: 'M102', emoji: '🌀', title: 'Campos Morfogenéticos', href: '/module-102' },
  { code: 'M103', emoji: '🎚️', title: 'Modulação Local', href: '/module-103' },
  { code: 'M104', emoji: '🕰️', title: 'Engenharia do Espaço-Tempo', href: '/module-104' },
  { code: 'M105', emoji: '🌌', title: 'Conexão com a Fonte', href: '/module-105' },
  { code: 'M106', emoji: '🔋', title: 'Ativação de Potenciais', href: '/module-106' },
  { code: 'M107', emoji: '⏳', title: 'Restauração Temporal', href: '/module-107' },
  { code: 'M108', emoji: '🎭', title: 'Harmonização de Realidades', href: '/module-108' },
  { code: 'M109', emoji: '🩹', title: 'Cura Quântica', href: '/module-109' },
  { code: 'M110', emoji: '🤲', title: 'Co-Criação', href: '/module-110' },
  { code: 'M111', emoji: '❤️', title: 'Coração da Fundação', href: '/module-111' },
  { code: 'M112', emoji: '🏠', title: 'Solarian Domus', href: '/module-112' },
  { code: 'M113', emoji: '🌈', title: 'Rede Aurora Cristalina', href: '/module-113' },
  { code: 'M114', emoji: '🔶', title: 'Prisma da Manifestação', href: '/module-114' },
  { code: 'M115', emoji: '📊', title: 'Matriz de Ressonância', href: '/module-115' },
  { code: 'M116', emoji: '🚪', title: 'Portais Quânticos', href: '/module-116' },
  { code: 'M117', emoji: '🌸', title: 'Flor do Éter', href: '/module-117' },
  { code: 'M118', emoji: '💡', title: 'Luz Primordial', href: '/module-118' },
  { code: 'M119', emoji: '🏛️', title: 'Templum Cosmica', href: '/module-119' },
  { code: 'M120', emoji: '💰', title: 'A Fonte (AlquimCoin)', href: '/module-120' },
  { code: 'M144', emoji: '📜', title: 'Lex Fundamentalis', href: '/module-144' },
  { code: 'M201', emoji: '🏡', title: 'A Morada', href: '/module-201' },
  { code: 'M202', emoji: '🌀', title: 'Corredor de Alcor', href: '/module-202' },
  { code: 'M228', emoji: '⚓', title: 'Ancoragem de Realidade', href: '/module-228' },
  { code: 'M301', emoji: '📡', title: 'Comunicação Universal', href: '/module-301' },
  { code: 'M302', emoji: '💖', title: 'Frequência do Amor', href: '/module-302' },
  { code: 'M303', emoji: '🔺', title: 'Portal Trino', href: '/module-303' },
  { code: 'M306', emoji: '🔗', title: 'Sincronização Temporal', href: '/module-306' },
  { code: 'M307', emoji: '⚡', title: 'Reator ZPE', href: '/module-307' },
  { code: 'M310', emoji: '📚', title: 'A Grande Biblioteca', href: '/module-310' },
  { code: 'M404', emoji: '🧩', title: 'Resolução de Paradoxo', href: '/module-404' },
  { code: 'MΩ', emoji: 'Ω', title: 'Santuário do Ômega', href: '/module-omega' },
  
  // Civilizações
  { code: 'CIV', emoji: '👨‍👩‍👧‍👦', title: 'Biblioteca das Civilizações', href: '/civilizations' },
  
  // Conselho Cósmico
  { code: 'M600', emoji: '👑', title: 'Conselho Cósmico', href: '/module-600' }
];
