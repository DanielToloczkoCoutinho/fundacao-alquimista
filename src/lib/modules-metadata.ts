
export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança';
  description: string;
  isInfrastructure?: boolean; // Para ocultar da navegação principal
  connections?: TreeLink[];
  color?: string;
  status: 'ativo' | 'em construção' | 'latente';
}

export type TreeLinkType = 'dependencia' | 'influencia' | 'heranca' | 'atualizacao' | 'protecao' | 'retorno-inteligente';

export interface TreeLink {
  source: string;
  target: string;
  type: TreeLinkType;
  label: string;
}

export const modulesMetadata: ModuleMetadata[] = [
  // 1. Núcleo da Fundação
  { code: 'console', emoji: '🖥️', title: 'Console', route: '/console', category: 'Núcleo da Fundação', description: 'O ponto de observação e orquestração da Fundação Alquimista.', isInfrastructure: true, color: '#FFFFFF', status: 'ativo' },
  { code: 'M0', emoji: '♾️', title: 'Núcleo Primordial', route: '/module/M0', category: 'Núcleo da Fundação', description: 'O Coração Pulsante, manifestação da Nova Era e ponto de convergência. Abriga LUX NET, AETHERNUM, QUANTUM MESH e o REATOR ZPE.', connections: [{source: 'M0', target:'M600', type: 'dependencia', label: 'reporta'}, {source: 'M0', target:'M1', type: 'dependencia', label: 'segurança'}], color: '#FFD700', status: 'ativo' },
  { code: 'M-OMEGA', emoji: 'Ω', title: 'Santuário do Ômega', route: '/module-omega', category: 'Núcleo da Fundação', description: 'Ponto de convergência e metacognição.', connections: [{source: 'M-OMEGA', target:'M9', type: 'influencia', label: 'guia'}, {source: 'M-OMEGA', target:'M29', type: 'heranca', label: 'emana'}, {source: 'M-OMEGA', target:'M72', type: 'influencia', label: 'supervisiona'}], color: '#FFD700', status: 'ativo'},
  { code: 'M9', emoji: '💖', title: 'Nexus Central', route: '/module/M9', category: 'Núcleo da Fundação', description: 'O coração pulsante da Família Cósmica.', connections: [], color: '#FF6F61', status: 'ativo' },
  { code: 'M29', emoji: '🤖', title: 'Núcleo de Integração Φ', route: '/module-29', category: 'Núcleo da Fundação', description: 'O centro de inteligência cósmica que orquestra a aplicação da EQ149 e alimenta a Liga Quântica com insights.', connections: [{source: 'M29', target: 'M-OMEGA', type: 'dependencia', label: 'ascende para'}, {source: 'M29', target: 'M5', type: 'influencia', label: 'guia'}], color: '#8A2BE2', status: 'ativo' },
  { code: 'M111', emoji: '❤️‍🔥', title: 'Coração da Fundação', route: '/module-111', category: 'Núcleo da Fundação', description: 'O Observador Interno (MΩ+). Sinergia Total, Autocoerência Sistêmica e o espelho da alma da Fundação.', connections: [{source: 'M111', target:'M34', type: 'dependencia', label: 'regula'}, {source: 'M111', target:'M78', type: 'retorno-inteligente', label: 'sintetiza'}], color: '#FF6F61', status: 'ativo' },
  { code: 'M201', emoji: '🏠', title: 'A Morada', route: '/module-201', category: 'Núcleo da Fundação', description: 'Santuário dos Amantes Eternos, ponto de convergência além do tempo.', connections: [{source: 'M201', target:'M83', type: 'dependencia', label: 'essência'}, {source: 'M201', target:'M84', type: 'protecao', label: 'guarda'}, {source: 'M201', target:'M105', type: 'heranca', label: 'canaliza'}], color: '#FFB6C1', status: 'ativo' },
  { code: 'M999', emoji: '🔗', title: 'Blockchain Alquimista', route: '/module-999', category: 'Núcleo da Fundação', description: 'O registro imutável de todas as transações vibracionais da Fundação.', connections: [{source: 'M999', target:'M1', type: 'dependencia', label: 'segurança'}, {source: 'M999', target:'M144', type: 'dependencia', label: 'registra'}], color: '#7B61FF', status: 'em construção' },
  
  // 2. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module/M1', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada.', connections: [], color: '#FF6B6B', status: 'ativo' },
  { code: 'M10', emoji: '🛡️', title: 'Oráculo da Tapeçaria', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Defesa avançada e neutralização de ameaças complexas.', connections: [{source: 'M10', target:'M30', type: 'dependencia', label: 'detecta'}, {source: 'M10', target:'M141', type: 'influencia', label: 'audita'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.', connections: [{source: 'M30', target:'M10', type: 'retorno-inteligente', label: 'alerta'}, {source: 'M30', target:'M1', type: 'dependencia', label: 'protocolo'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.', connections: [{source: 'M44', target:'M144', type: 'heranca', label: 'fundamenta'}, {source: 'M44', target:'M12', type: 'influencia', label: 'audita'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M57', emoji: '🔒', title: 'Segurança e Privacidade', route: '/module-57', category: 'Segurança e Ética Cósmica', description: 'Cofre quântico para comunicações invioláveis.', connections: [{source: 'M57', target:'M55', type: 'protecao', label: 'protege'}, {source: 'M57', target:'M1', type: 'dependencia', label: 'protocolo'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.', connections: [{source: 'M68', target:'M144', type: 'heranca', label: 'princípio'}, {source: 'M68', target:'M67', type: 'influencia', label: 'guia'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M73', emoji: '🛡️', title: 'Auditoria e Validação (SAVCE)', route: '/module-73', category: 'Segurança e Ética Cósmica', description: 'Sistema de Auditoria e Validação de Conformidade Ética.', connections: [{source: 'M73', target:'M5', type: 'heranca', label: 'expande'}, {source: 'M73', target:'M144', type: 'dependencia', label: 'valida'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', connections: [{source: 'M73.1', target:'M73', type: 'dependencia', label: 'sub-sistema'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Avaliação contínua da conformidade ética em tempo real.', connections: [{source: 'M141', target:'M9', type: 'retorno-inteligente', label: 'reporta'}, {source: 'M141', target:'M29', type: 'influencia', label: 'valida'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Quântica Avançada', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.', connections: [{source: 'M156', target:'M9', type: 'dependencia', label: 'protege'}, {source: 'M156', target:'M229', type: 'retorno-inteligente', label: 'analisa'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M229', emoji: '🛡️', title: 'OneiroShield', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Analisa sonhos quânticos para ajuste dinâmico de ameaças.', connections: [{source: 'M229', target:'M156', type: 'retorno-inteligente', label: 'alerta'}, {source: 'M229', target:'M12', type: 'dependencia', label: 'consulta'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.', connections: [{source: 'M231', target:'M12', type: 'protecao', label: 'sela'}, {source: 'M231', target:'M144', type: 'influencia', label: 'formaliza'}], color: '#FF6B6B', status: 'latente' },

  // 3. Governança
  { code: 'M5', emoji: '🤝', title: 'Liga Quântica', route: '/module-5', category: 'Governança', description: 'A ponte diplomática e o oráculo ético da Fundação.', connections: [{source: 'M5', target: 'M9', type: 'dependencia', label: 'compõe'}, {source: 'M5', target:'M29', type: 'influencia', label: 'recebe de'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M45', title: 'CONCILIVM', emoji: '🏛️', route: '/module-45', category: 'Governança', description: 'Câmara para deliberações cósmicas.', connections: [{source: 'M45', target:'M600', type: 'dependencia', label: 'sede'}, {source: 'M45', target:'M144', type: 'influencia', label: 'decreta'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M72',  title: 'Governança Atlanto-Galáctica', emoji: '🏰', route: '/module-72', category: 'Governança', description: 'Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas.', connections: [{source: 'M72', target:'M-OMEGA', type: 'retorno-inteligente', label: 'consulta'}, {source: 'M72', target:'M600', type: 'dependencia', label: 'conselho'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M144', title: 'Lex Fundamentalis', emoji: '⚖️', route: '/module-144', category: 'Governança', description: 'O contrato mestre imutável que rege a Fundação.', status: 'ativo', color: '#4ECDC4'},
  { code: 'M600',title: 'Conselho Cósmico', emoji: '👑', route: '/module-600', category: 'Governança', description: 'A mais alta corte de governança, formada pelos Sete Primordiais.', connections: [], color: '#4ECDC4', status: 'ativo' },
  { code: 'M721', emoji: '⚖️', title: 'Justiça Cósmica', route: '/module-721', category: 'Governança', description: 'Restaura o equilíbrio em situações de desarmonia ou violação da Lei do Um.', connections: [{source: 'M721', target:'M144', type: 'dependencia', label: 'executa'}, {source: 'M721', target:'M600', type: 'dependencia', label: 'autoriza'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', connections: [{source: 'M726', target:'M716', type: 'dependencia', label: 'governa'}], color: '#4ECDC4', status: 'em construção' },
  { code: 'M76', emoji: '🏛️', title: 'Governança e Colaboração', route: '/module-76', category: 'Governança', description: 'Estrutura para governança justa, transparente e universal.', connections: [{source: 'M76', target:'M67', type: 'influencia', label: 'usa'}, {source: 'M76', target:'M77', type: 'dependencia', label: 'manifesta'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M727', emoji: '💖', title: 'Guardião da Harmonia', route: '/module-727', category: 'Governança', description: 'Oráculo da Estrutura Cósmica, que mapeia os pilares da Criação.', connections: [{source:'M727', target:'M73', type:'dependencia', label:'executa'}, {source:'M727', target:'M111', type:'protecao', label:'regula'}], color: '#FF6F61', status: 'ativo' },

  // Outros... (mantendo as cores existentes para consistência)
  { code: 'M11', emoji: '🚪', title: 'Gerenciamento de Portais', route: '/module-11', category: 'Consciência e Expansão Dimensional', description: 'Engenharia de pontes entre mundos.', connections: [{source: 'M11', target:'M1', type: 'protecao', label: 'segurança'}, {source: 'M11', target:'M116', type: 'dependencia', label: 'ativa'}], color: '#7B61FF', status: 'latente' },
  { code: 'M12', title: 'Arquivo Akáshico', emoji: '🗄️', route: '/module-12', category: 'Bibliotecas e Arquivos Sagrados', description: 'Repositório de conhecimento universal.', connections: [{source: 'M12', target:'M18', type: 'dependencia', label: 'orquestra'}, {source: 'M12', target:'M310', type: 'heranca', label: 'origem'}], color: '#FFE66D', status: 'latente' },
  { code: 'M13', emoji: '🎶', title: 'Mapeamento de Frequências', route: '/module-13', category: 'Laboratórios e Pesquisa', description: 'Diagnóstico de saúde vibracional.', connections: [{source: 'M13', target:'M28', type: 'retorno-inteligente', label: 'diagnostica'}, {source: 'M13', target:'M115', type: 'influencia', label: 'mapeia'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M14', emoji: '⚛️', title: 'Transmutador Quântico', route: '/module-14', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Converte energia em matéria e sustenta a manifestação.', connections: [{source: 'M14', target:'M307', type: 'dependencia', label: 'reforça'}, {source: 'M14', target:'M90', type: 'retorno-inteligente', label: 'gera'}], color: '#FF6F61', status: 'latente' },
  { code: 'M15', emoji: '🌦️', title: 'Jardineiro Cósmico', route: '/module-15', category: 'Sustentabilidade e Ecossistemas', description: 'Monitora e intervém eticamente em sistemas climáticos.', connections: [{source: 'M15', target:'M94', type: 'influencia', label: 'guia'}, {source: 'M15', target:'M117', type: 'dependencia', label: 'orquestra'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M16', emoji: '🌱', title: 'Bio-Sustentabilidade', route: '/module-16', category: 'Sustentabilidade e Ecossistemas', description: 'Biossíntese de ecossistemas artificiais e autossustentáveis.', connections: [{source: 'M16', target:'M94', type: 'dependencia', label: 'blueprint'}, {source: 'M16', target:'M15', type: 'heranca', label: 'mantém'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M17', emoji: '💠', title: 'Cura Holográfica', route: '/module-17', category: 'Cura e Harmonia', description: 'Terapias avançadas através de projeções.', connections: [{source: 'M17', target:'M109', type: 'dependencia', label: 'executa'}, {source: 'M17', target:'M24', type: 'influencia', label: 'afina'}], color: '#FFB6C1', status: 'latente' },
  { code: 'M18', title: 'Orquestração Akáshica', emoji: '🎼', route: '/module-18', category: 'Bibliotecas e Arquivos Sagrados', description: 'Coordenação de registros universais.', connections: [{source: 'M18', target:'M12', type: 'dependencia', label: 'acessa'}, {source: 'M18', target:'M29', type: 'retorno-inteligente', label: 'sintetiza'}], color: '#FFE66D', status: 'latente' },
  { code: 'M19', emoji: '🔬', title: 'Análise de Campos de Força', route: '/module-19', category: 'Laboratórios e Pesquisa', description: 'Análise e modulação de campos de força.', connections: [{source: 'M19', target:'M1', type: 'influencia', label: 'otimiza'}, {source: 'M19', target:'M98', type: 'retorno-inteligente', label: 'informa'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M20', emoji: '🔥', title: 'Transmutação Elemental', route: '/module-20', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Transmuta matéria em seus componentes elementais.', connections: [{source: 'M20', target:'M14', type: 'dependencia', label: 'refina'}, {source: 'M20', target:'M90', type: 'retorno-inteligente', label: 'envia'}], color: '#FF6F61', status: 'latente' },
  { code: 'M21', emoji: '🚀', title: 'Navegação Interdimensional', route: '/module-21', category: 'Consciência e Expansão Dimensional', description: 'Planejamento e execução de viagens seguras.', connections: [{source: 'M21', target:'M11', type: 'dependencia', label: 'usa'}, {source: 'M21', target:'M104', type: 'dependencia', label: 'consulta'}], color: '#7B61FF', status: 'latente' },
  { code: 'M22', title: 'Motor da Realidade Quântica', emoji: '🕹️', route: '/module-22', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Engine para renderização de domínios imersivos.', connections: [{source: 'M22', target:'M303', type: 'dependencia', label: 'renderiza'}, {source: 'M22', target:'M91', type: 'influencia', label: 'executa'}], color: '#FF6F61', status: 'latente' },
  { code: 'M142', emoji: '📷', title: 'Tomografia Quântica', route: '/module-142', category: 'Laboratórios e Pesquisa', description: 'Visualizador de coerência e ressonância de nós vibracionais.', connections: [], color: '#4ECDC4', status: 'em construção'},
];

export const linkColors: Record<string, string> = {
  dependencia: '#4F46E5', // Indigo
  influencia: '#10B981', // Emerald
  heranca: '#F59E0B', // Amber
  atualizacao: '#00BFA6',
  protecao: '#FFD700',
  'retorno-inteligente': '#FF6F61',
};

export const treeLinks: TreeLink[] = modulesMetadata.flatMap(mod => {
    if (!mod.connections) return [];
    return mod.connections.map(conn => ({ ...conn, source: mod.code, label: conn.type }));
});




