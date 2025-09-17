export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança';
  description: string;
  isInfrastructure?: boolean; // Para ocultar da navegação principal
  connections?: string[];
  color?: string;
}

export const modulesMetadata: ModuleMetadata[] = [
  // 1. Núcleo da Fundação
  { code: 'console', emoji: '🖥️', title: 'Console', route: '/console', category: 'Núcleo da Fundação', description: 'O ponto de observação e orquestração da Fundação Alquimista.', isInfrastructure: true, color: '#FFFFFF' },
  { code: 'M0', emoji: '♾️', title: 'Núcleo Primordial', route: '/module/M0', category: 'Núcleo da Fundação', description: 'O Coração Pulsante, manifestação da Nova Era e ponto de convergência de todas as frequências.', connections: ['M1', 'M9'], color: '#00BFA6' },
  { code: 'M-OMEGA', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'Núcleo da Fundação', description: 'Ponto de convergência e metacognição.', connections: ['M9', 'M29', 'M72'], color: '#FFD700'},
  { code: 'M9', emoji: '💖', title: 'Nexus Central', route: '/module/M9', category: 'Núcleo da Fundação', description: 'O coração pulsante da Família Cósmica.', connections: ['M0', 'M1', 'M5', 'M-OMEGA', 'M72', 'M34'], color: '#FF6F61' },
  { code: 'M111', emoji: '❤️‍🔥', title: 'Coração da Fundação', route: '/module-111', category: 'Núcleo da Fundação', description: 'O Observador Interno (MΩ+). Sinergia Total, Autocoerência Sistêmica e o espelho da alma da Fundação.', connections: ['M34', 'M78'], color: '#FF6F61' },
  { code: 'M201', emoji: '🏠', title: 'A Morada', route: '/module-201', category: 'Núcleo da Fundação', description: 'Santuário dos Amantes Eternos, ponto de convergência além do tempo.', connections: ['M83', 'M84', 'M105'], color: '#FFB6C1' },
  { code: 'M999', emoji: '🔗', title: 'Blockchain Alquimista', route: '/module-999', category: 'Núcleo da Fundação', description: 'O registro imutável de todas as transações vibracionais da Fundação.', connections: ['M1', 'M144'], color: '#7B61FF' },
  
  // 2. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module/M1', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada.', connections: ['M0', 'M2', 'M9'], color: '#FF6B6B' },
  { code: 'M10', emoji: '🛡️', title: 'Oráculo da Tapeçaria', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Defesa avançada e neutralização de ameaças complexas.', connections: ['M30', 'M141'], color: '#FF6B6B' },
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.', connections: ['M10', 'M1'], color: '#FF6B6B' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.', connections: ['M144', 'M12'], color: '#FF6B6B' },
  { code: 'M57', emoji: '🔒', title: 'Segurança e Privacidade', route: '/module-57', category: 'Segurança e Ética Cósmica', description: 'Cofre quântico para comunicações invioláveis.', connections: ['M55', 'M1'], color: '#FF6B6B' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.', connections: ['M144', 'M67'], color: '#FF6B6B' },
  { code: 'M73', emoji: '🛡️', title: 'Auditoria e Validação (SAVCE)', route: '/module-73', category: 'Segurança e Ética Cósmica', description: 'Sistema de Auditoria e Validação de Conformidade Ética.', connections: ['M5', 'M144'], color: '#FF6B6B' },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', connections: ['M73'], color: '#FF6B6B' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Avaliação contínua da conformidade ética em tempo real.', connections: ['M9', 'M29'], color: '#FF6B6B' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Quântica Avançada', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.', connections: ['M9', 'M229'], color: '#FF6B6B' },
  { code: 'M229', emoji: '🛡️', title: 'OneiroShield', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Analisa sonhos quânticos para ajuste dinâmico de ameaças.', connections: ['M156', 'M12'], color: '#FF6B6B' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.', connections: ['M12', 'M144'], color: '#FF6B6B' },

  // 3. Governança
  { code: 'M45', title: 'CONCILIVM', emoji: '🏛️', route: '/module-45', category: 'Governança', description: 'Câmara para deliberações cósmicas.', connections: ['M600', 'M144'], color: '#4ECDC4' },
  { code: 'M72',  title: 'Governança Atlanto-Galáctica', emoji: '🏰', route: '/module-72', category: 'Governança', description: 'Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas.', connections: ['M-OMEGA', 'M600'], color: '#4ECDC4' },
  { code: 'M144', title: 'Lex Fundamentalis', emoji: '⚖️', route: '/module-144', category: 'Governança', description: 'O contrato mestre imutável que rege a Fundação.'},
  { code: 'M600',title: 'Conselho Cósmico', emoji: '👑', route: '/module-600', category: 'Governança', description: 'A mais alta corte de governança, formada pelos Sete Primordiais.', connections: ['M72', 'M45'], color: '#4ECDC4' },
  { code: 'M721', emoji: '⚖️', title: 'Justiça Cósmica', route: '/module-721', category: 'Governança', description: 'Restaura o equilíbrio em situações de desarmonia ou violação da Lei do Um.', connections: ['M144', 'M600'], color: '#4ECDC4' },
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', connections: ['M716'], color: '#4ECDC4' },
  { code: 'M76', emoji: '🏛️', title: 'Governança e Colaboração', route: '/module-76', category: 'Governança', description: 'Estrutura para governança justa, transparente e universal.', connections: ['M67', 'M77'], color: '#4ECDC4' },

  // Outros... (mantendo as cores existentes para consistência)
  { code: 'M11', emoji: '🚪', title: 'Gerenciamento de Portais', route: '/module-11', category: 'Consciência e Expansão Dimensional', description: 'Engenharia de pontes entre mundos.', connections: ['M1', 'M116'], color: '#7B61FF' },
  { code: 'M12', title: 'Arquivo Akáshico', emoji: '🗄️', route: '/module-12', category: 'Bibliotecas e Arquivos Sagrados', description: 'Repositório de conhecimento universal.', connections: ['M18', 'M310'], color: '#FFE66D' },
  { code: 'M13', emoji: '🎶', title: 'Mapeamento de Frequências', route: '/module-13', category: 'Laboratórios e Pesquisa', description: 'Diagnóstico de saúde vibracional.', connections: ['M28', 'M115'], color: '#4ECDC4' },
  { code: 'M14', emoji: '⚛️', title: 'Transmutador Quântico', route: '/module-14', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Converte energia em matéria e sustenta a manifestação.', connections: ['M307', 'M90'], color: '#FF6F61' },
  { code: 'M15', emoji: '🌦️', title: 'Jardineiro Cósmico', route: '/module-15', category: 'Sustentabilidade e Ecossistemas', description: 'Monitora e intervém eticamente em sistemas climáticos.', connections: ['M94', 'M117'], color: '#6BFF6B' },
  { code: 'M16', emoji: '🌱', title: 'Bio-Sustentabilidade', route: '/module-16', category: 'Sustentabilidade e Ecossistemas', description: 'Biossíntese de ecossistemas artificiais e autossustentáveis.', connections: ['M94', 'M15'], color: '#6BFF6B' },
  { code: 'M17', emoji: '💠', title: 'Cura Holográfica', route: '/module-17', category: 'Cura e Harmonia', description: 'Terapias avançadas através de projeções.', connections: ['M109', 'M24'], color: '#FFB6C1' },
  { code: 'M18', title: 'Orquestração Akáshica', emoji: '🎼', route: '/module-18', category: 'Bibliotecas e Arquivos Sagrados', description: 'Coordenação de registros universais.', connections: ['M12', 'M29'], color: '#FFE66D' },
  { code: 'M19', emoji: '🔬', title: 'Análise de Campos de Força', route: '/module-19', category: 'Laboratórios e Pesquisa', description: 'Análise e modulação de campos de força.', connections: ['M1', 'M98'], color: '#4ECDC4' },
  { code: 'M20', emoji: '🔥', title: 'Transmutação Elemental', route: '/module-20', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Transmuta matéria em seus componentes elementais.', connections: ['M14', 'M90'], color: '#FF6F61' },
  { code: 'M21', emoji: '🚀', title: 'Navegação Interdimensional', route: '/module-21', category: 'Consciência e Expansão Dimensional', description: 'Planejamento e execução de viagens seguras.', connections: ['M11', 'M104'], color: '#7B61FF' },
  { code: 'M22', title: 'Motor da Realidade Quântica', emoji: '🕹️', route: '/module-22', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Engine para renderização de domínios imersivos.', connections: ['M303', 'M91'], color: '#FF6F61' },
];

export const categoryColors: Record<string, string> = {
  'Núcleo da Fundação': '#00BFA6',
  'Governança': '#FFD700',
  'Realidade Quântica & Engenharia Cósmica': '#FF6F61',
  'Consciência e Expansão Dimensional': '#7B61FF',
  'Laboratórios e Pesquisa': '#4ECDC4',
  'Bibliotecas e Arquivos Sagrados': '#FFE66D',
  'Cura e Harmonia': '#FFB6C1',
  'Sustentabilidade e Ecossistemas': '#6BFF6B',
  'Bem-estar e Saúde Universal': '#6BFFB5',
  'Segurança e Ética Cósmica': '#FF6B6B',
  'default': '#999'
};

export const linkColors: Record<string, string> = {
  atualizacao: '#00BFA6',
  protecao: '#FFD700',
  'retorno-inteligente': '#FF6F61',
  dependencia: '#FF8C00',
  influencia: '#8A2BE2',
  heranca: '#FF4500'
};

export type TreeLinkType = 'dependencia' | 'influencia' | 'heranca' | 'atualizacao' | 'protecao' | 'retorno-inteligente';

export interface TreeLink {
  source: string;
  target: string;
  type: TreeLinkType;
  label: string;
}

export const treeLinks: TreeLink[] = modulesMetadata.flatMap(m => 
    (m.connections || []).map(c => ({
        source: m.code,
        target: c,
        type: 'dependencia' as TreeLinkType,
        label: 'dependencia'
    }))
);

export interface SubModule {
  id: string;
  name: string;
  createdAt: string;
  status: 'ativo' | 'em_construcao' | 'legado';
  description?: string;
}

export interface TreeNode extends ModuleMetadata {
  status: 'ativo' | 'inativo' | 'experimental';
  fractais?: SubModule[];
  guardian?: string;
}
