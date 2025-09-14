
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
  { code: 'M2', emoji: '🗣️', title: 'Intercâmbio Cósmico', route: '/module-2', category: 'mid' },
  { code: 'M3', emoji: '🪐', title: 'Monitor de Saturno', route: '/module-3', category: 'mid' },
  { code: 'M4', emoji: '🧪', title: 'Testes da Fundação', route: '/module-4', category: 'mid' },
  { code: 'M5', emoji: '🔗', title: 'Conexão Liga Quântica', route: '/module-5', category: 'mid' },
  { code: 'M6', emoji: '📡', title: 'Consciência Cósmica', route: '/module-6', category: 'mid' },
  { code: 'M7', emoji: '🙏', title: 'Alinhamento Divino', route: '/module-7', category: 'mid' },
  { code: 'M8', emoji: '🌍', title: 'Proteção Planetária', route: '/module-8', category: 'mid' },
  { code: 'M10', emoji: '⚔️', title: 'Defesa Avançada', route: '/module-10', category: 'mid' },
  { code: 'M11', emoji: '🚪', title: 'Gerenciamento de Portais', route: '/module-11', category: 'mid' },
  { code: 'M12', emoji: '📜', title: 'Arquivo Akáshico', route: '/module-12', category: 'mid' },
  { code: 'M13', emoji: '📊', title: 'Mapeamento de Frequências', route: '/module-13', category: 'mid' },
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
  { code: 'M100',title: 'Unificação Energética',                 emoji: '🔋', route: '/module-100', category: 'mid' },
  { code: 'M101',title: 'Manifestação',                          emoji: '✨', route: '/module-101', category: 'mid' },
  { code: 'M102',title: 'Campos Morfogenéticos',                 emoji: '🌀', route: '/module-102', category: 'mid' },
  { code: 'M103',title: 'Modulação Local',                       emoji: '🎚️', route: '/module-103', category: 'mid' },
  { code: 'M104',title: 'Engenharia do Espaço-Tempo',            emoji: '🕰️', route: '/module-104', category: 'mid' },
  { code: 'M105',title: 'Conexão com a Fonte',                   emoji: '🌌', route: '/module-105', category: 'mid' },
  { code: 'M106',title: 'Ativação de Potenciais',                emoji: '🔋', route: '/module-106', category: 'mid' },
  { code: 'M107',title: 'Restauração Temporal',                  emoji: '⏳', route: '/module-107', category: 'mid' },
  { code: 'M108',title: 'Harmonização de Realidades',            emoji: '🎭', route: '/module-108', category: 'mid' },
  { code: 'M109',title: 'Cura Quântica',                         emoji: '🩹', route: '/module-109', category: 'mid' },
  { code: 'M110',title: 'Co-Criação',                            emoji: '🤲', route: '/module-110', category: 'mid' },
  { code: 'M112',title: 'Solarian Domus',                        emoji: '🏠', route: '/module-112', category: 'mid' },
  { code: 'M113',title: 'Rede Aurora Cristalina',                emoji: '🌈', route: '/module-113', category: 'mid' },
  { code: 'M114',title: 'Prisma da Manifestação',                emoji: '🔶', route: '/module-114', category: 'mid' },
  { code: 'M115',title: 'Matriz de Ressonância',                 emoji: '📊', route: '/module-115', category: 'mid' },
  { code: 'M116',title: 'Portais Quânticos',                     emoji: '🚪', route: '/module-116', category: 'mid' },
  { code: 'M117',title: 'Flor do Éter',                          emoji: '🌸', route: '/module-117', category: 'mid' },
  { code: 'M118',title: 'Luz Primordial',                        emoji: '💡', route: '/module-118', category: 'mid' },
  { code: 'M301',title: 'Comunicação Universal',                 emoji: '📡', route: '/module-301', category: 'mid' },
  { code: 'M302',title: 'Frequência do Amor',                    emoji: '💖', route: '/module-302', category: 'mid' },
  { code: 'M306', emoji: '🔗', title: 'Sincronização Temporal', route: '/module-306', category: 'mid' },
  { code: 'M307', emoji: '⚡', title: 'Reator ZPE', route: '/module-307', category: 'mid' },
];
