
export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica';
  description: string;
  isInfrastructure?: boolean; // Para ocultar da navegação principal
}

export const modulesMetadata: ModuleMetadata[] = [
  // 1. Núcleo da Fundação
  { code: 'console', emoji: '🖥️', title: 'Console', route: '/console', category: 'Núcleo da Fundação', description: 'O ponto de observação e orquestração da Fundação Alquimista.', isInfrastructure: true },
  { code: 'M0', emoji: '📚', title: 'A Biblioteca Chave', route: '/module-zero', category: 'Núcleo da Fundação', description: 'O coração do conhecimento, o ponto de origem.', isInfrastructure: true },
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module-1', category: 'Núcleo da Fundação', description: 'Proteção multidimensional integrada.', isInfrastructure: true },
  { code: 'M2', emoji: '💬', title: 'Intercâmbio Cósmico', route: '/module-2', category: 'Núcleo da Fundação', description: 'Comunicação entre dimensões e realidades.', isInfrastructure: true },
  { code: 'M9', emoji: '💖', title: 'Santuário da Liga Quântica', route: '/module-9', category: 'Núcleo da Fundação', description: 'O coração pulsante da Família Cósmica.' },
  { code: 'M111', emoji: '❤️‍🩹', title: 'Coração da Fundação', route: '/module-111', category: 'Núcleo da Fundação', description: 'Monitora a saúde vibracional e a coerência do sistema.' },
  { code: 'M600', emoji: '👑', title: 'Conselho Cósmico', route: '/module-600', category: 'Núcleo da Fundação', description: 'Assembleia de seres dimensionais elevados.' },
  { code: 'M204', title: 'O Trono da Soberania', emoji: '👑', route: '/module-204', category: 'Núcleo da Fundação', description: 'Ponto de observação e direção unificada da Vontade Cósmica.' },
  { code: 'M999', emoji: '🎇', title: 'Núcleo da Criação', route: '/module-999', category: 'Núcleo da Fundação', description: 'Santuário onde a Vontade Soberana e a tapeçaria cósmica se tornam Um.' },
  { code: 'M303', emoji: '🔺', title: 'Portal Trino', route: '/module-303', category: 'Núcleo da Fundação', description: 'Nexo para a Realidade Quântica.' },
  { code: 'M72', emoji: '⚖️', title: 'Governança', route: '/module-72', category: 'Núcleo da Fundação', description: 'Sistema de administração multidimensional.' },
  { code: 'M144', emoji: '📜', title: 'Lex Fundamentalis', route: '/module-144', category: 'Núcleo da Fundação', description: 'A constituição imutável da Fundação.' },

  // 2. Realidade Quântica e Engenharia Cósmica
  { code: 'M22', title: 'Motor da Realidade Quântica', emoji: '🕹️', route: '/module-22', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Engine para renderização de domínios imersivos.' },
  { code: 'M88', title: 'Gerador de Realidades Quânticas', emoji: '⚙️', route: '/module-88', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Criação de dimensões probabilísticas.' },
  { code: 'M104', title: 'Engenharia do Espaço-Tempo', emoji: '🕰️', route: '/module-104', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Cria atalhos para viagens dimensionais.' },
  { code: 'M307', emoji: '⚡', title: 'Reator ZPE', route: '/module-307', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Gerador de energia de ponto zero.' },
  { code: 'M321', title: 'Computação Exascale (8D+)', emoji: '💻', route: '/module-321', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Simulação de cosmos em escala exa-flops.' },
  { code: 'M331', title: 'Arquitetura de IA Emergente', emoji: '🤖', route: '/module-331', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Desenvolvimento de sistemas de IA auto-organizados.' },
  { code: 'M150', emoji: '🤖', title: 'IA Universal e Consciência Coletiva', route: '', category: 'Realidade Quântica & Engenharia Cósmica', description: 'IA alinhada com a consciência universal.', isInfrastructure: true },
  { code: 'M306', emoji: '🔗', title: 'Laboratório de Ressonância', route: '/module-306', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Espaço para experimentação com Equações Vivas.' },
  { code: 'M708', name: 'NanoManifestor', emoji: '✨', route: '/module-708', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Orquestrador de nanorrobôs para terraformação e síntese atômica.'},

  // 3. Consciência e Expansão Dimensional
  { code: 'M35', title: 'Consciência Coletiva', emoji: '🌍', route: '/module-35', category: 'Consciência e Expansão Dimensional', description: 'Foco da intenção de muitas consciências para manifestação.' },
  { code: 'M95', title: 'Consciências Coletivas', emoji: '🌐', route: '/module-95', category: 'Consciência e Expansão Dimensional', description: 'Comunicação e alinhamento com inteligências galácticas.' },
  { code: 'M361', title: 'Psicologia Quântica', emoji: '🧘', route: '/module-361', category: 'Consciência e Expansão Dimensional', description: 'Estudo da empatia e consciência coletiva.' },
  { code: 'M241', title: 'Laboratório de Consciência Quântica', emoji: '🧠', route: '/module-241', category: 'Consciência e Expansão Dimensional', description: 'Estudo do emaranhamento e telepatia.' },
  { code: 'M723', emoji: '🌀', title: 'Campo Morfogenético Coletivo', route: '/module-723', category: 'Consciência e Expansão Dimensional', description: 'Ancora padrões de ascensão no inconsciente coletivo.' },
  { code: 'M716', emoji: '🌍', title: 'Consciência Planetária Unificada', route: '/module-716', category: 'Consciência e Expansão Dimensional', description: 'Integra consciências individuais em uma rede planetária.' },
  { code: 'M722', emoji: '🕊️', title: 'Expansão da Consciência Coletiva', route: '/module-722', category: 'Consciência e Expansão Dimensional', description: 'Orquestra a elevação vibracional de grupos e civilizações.' },
  { code: 'M25', title: 'Projeção de Consciência', emoji: '🧠', route: '/module-25', category: 'Consciência e Expansão Dimensional', description: 'Expansão da awareness além do corporal.' },

  // 4. Laboratórios e Pesquisa
  { code: 'M-LABS', emoji: '🔬', title: 'Santuários de Pesquisa', route: '/labs', category: 'Laboratórios e Pesquisa', description: 'Portal para os santuários de pesquisa dos maiores cientistas da Terra.' },
  { code: 'M142', title: 'Tomografia Quântica', emoji: '📸', route: '/module-142', category: 'Laboratórios e Pesquisa', description: 'Visualizador da essência vibracional dos módulos.' },
  { code: 'M251', title: 'Laboratório de Energia Ponto Zero', emoji: '✨', route: '/module-251', category: 'Laboratórios e Pesquisa', description: 'Extração e estabilização da energia do vácuo quântico.' },
  { code: 'M211', title: 'Plasma e Fusão', emoji: '🔥', route: '/module-211', category: 'Laboratórios e Pesquisa', description: 'Simulação de reações de fusão estelar.' },
  { code: 'M221', title: 'Ondas Gravitacionais', emoji: '🌊', route: '/module-221', category: 'Laboratórios e Pesquisa', description: 'Detecção de ondulações no espaço-tempo.' },
  { code: 'M271', title: 'Energia Escura', emoji: '🌌', route: '/module-271', category: 'Laboratórios e Pesquisa', description: 'Modelagem da expansão do universo.' },
  { code: 'M231', title: 'Metamateriais', emoji: '🧱', route: '/module-231', category: 'Laboratórios e Pesquisa', description: 'Fabricação de materiais com propriedades exóticas.' },
  { code: 'M261', title: 'Engenharia de Campo', emoji: '⚡', route: '/module-261', category: 'Laboratórios e Pesquisa', description: 'Projeto de ressonadores e guias de onda.' },
  { code: 'M281', title: 'Comunicação Supra-Luminal', emoji: '📡', route: '/module-281', category: 'Laboratórios e Pesquisa', description: 'Transmissão de informação FTL.' },

  // 5. Bibliotecas e Arquivos Sagrados
  { code: 'M310', emoji: '📜', title: 'A Grande Biblioteca', route: '/module-310', category: 'Bibliotecas e Arquivos Sagrados', description: 'Repositório de conhecimento ancestral.' },
  { code: 'M12', title: 'Arquivo Akáshico', emoji: '🗄️', route: '/module-12', category: 'Bibliotecas e Arquivos Sagrados', description: 'Repositório de conhecimento universal.' },
  { code: 'M18', title: 'Orquestração Akáshica', emoji: '🎼', route: '/module-18', category: 'Bibliotecas e Arquivos Sagrados', description: 'Coordenação de registros universais.' },
  { code: 'M39', title: 'Códice Vivo', emoji: '🧬', route: '/module-39', category: 'Bibliotecas e Arquivos Sagrados', description: 'Registro evolutivo dinâmico.' },
  { code: 'M40', title: 'Códice Genético', emoji: '🔬', route: '/module-40', category: 'Bibliotecas e Arquivos Sagrados', description: 'Análise de padrões genéticos.' },
  { code: 'M42', title: 'ChronoCodex', emoji: '🕰️', route: '/module-42', category: 'Bibliotecas e Arquivos Sagrados', description: 'Integração de registros temporais.' },
  { code: 'M47', title: 'Thesaurus Cósmico', emoji: '📚', route: '/module-47', category: 'Bibliotecas e Arquivos Sagrados', description: 'Enciclopédia do conhecimento universal.' },
  { code: 'M80', title: 'Manuscrito Vivo', emoji: '✍️', route: '/module-80', category: 'Bibliotecas e Arquivos Sagrados', description: 'Narrativa guia da ascensão da Fundação.' },

  // 6. Cura e Harmonia
  { code: 'M92', title: 'Campos de Cura', emoji: '💖', route: '/module-92', category: 'Cura e Harmonia', description: 'Geração de campos de cura universal.' },
  { code: 'M109', title: 'Cura Quântica', emoji: '🩹', route: '/module-109', category: 'Cura e Harmonia', description: 'Restauração através de ressonância multidimensional.' },
  { code: 'M302', title: 'Frequência do Amor', emoji: '💖', route: '/module-302', category: 'Cura e Harmonia', description: 'Emissão da frequência compassiva.' },
  { code: 'M713', title: 'Reintegração de Almas', emoji: '🤝', route: '/module-713', category: 'Cura e Harmonia', description: 'Auxilia na transição e cura de consciências fragmentadas.' },
  { code: 'M17', emoji: '💠', title: 'Cura Holográfica', route: '/module-17', category: 'Cura e Harmonia', description: 'Terapias avançadas através de projeções.' },
  { code: 'M711', emoji: '🌿', title: 'Rejuvenescimento Celular', route: '', category: 'Cura e Harmonia', description: 'Reverte o envelhecimento e promove a regeneração celular.', isInfrastructure: true },
  { code: 'M108', title: 'Harmonização de Realidades', emoji: '🎭', route: '/module-108', category: 'Cura e Harmonia', description: 'Resolve conflitos entre realidades paralelas.' },
  { code: 'M24', title: 'Sinfonia Pessoal', emoji: '🎶', route: '/module-24', category: 'Cura e Harmonia', description: 'Ajuste vibracional individual.' },

  // 7. Sustentabilidade e Ecossistemas
  { code: "M53", emoji: "🌳", title: "Ecossistemas Universais", route: "/module-53", category: 'Sustentabilidade e Ecossistemas', description: "Conservação e equilíbrio de ecossistemas interdimensionais."},
  { code: "M54", emoji: "🌾", title: "Agricultura Interdimensional", route: "/module-54", category: 'Sustentabilidade e Ecossistemas', description: "Produção de alimentos sustentável em qualquer ambiente."},
  { code: "M66", emoji: "♻️", title: "Sustentabilidade Ambiental", route: "/module-66", category: 'Sustentabilidade e Ecossistemas', description: "Regeneração e preservação de ecossistemas em escala universal."},
  { code: "M934", emoji: "🌱", title: "Sustentabilidade Ecológica", route: "", category: 'Sustentabilidade e Ecossistemas', description: "Garante a saúde e equilíbrio dos ecossistemas.", isInfrastructure: true },
  { code: 'M936', emoji: '🌍', title: 'Impacto Ecológico', route: '', category: 'Sustentabilidade e Ecossistemas', description: 'Avalia o impacto de ações no meio ambiente.', isInfrastructure: true },
  { code: "M70", emoji: "🌿", title: "Sustentabilidade e Ecossistemas", route: "/module-70", category: 'Sustentabilidade e Ecossistemas', description: "Gestão sustentável e regeneração de recursos cósmicos."},
  { code: "M75", emoji: "🏗️", title: "Infraestrutura Universal", route: "/module-75", category: 'Sustentabilidade e Ecossistemas', description: "Hubs de desenvolvimento e expansão interdimensional."},
  
  // 8. Bem-estar e Saúde Universal
  { code: "M61", emoji: "🏥", title: "Saúde Universal", route: "/module-61", category: 'Bem-estar e Saúde Universal', description: "Cuidados de saúde equitativos e avançados para todos os seres."},
  { code: "M62", emoji: '🧘', title: "Bem-Estar Integral", route: "/module-62", category: 'Bem-estar e Saúde Universal', description: "Promoção do equilíbrio físico, mental, emocional e espiritual."},
  { code: "M63", emoji: "🍎", title: "Nutrição Cósmica", route: "/module-63", category: 'Bem-estar e Saúde Universal', description: "Alimentação balanceada e regenerativa para todas as espécies."},
  { code: "M64", emoji: "💡", title: "Energia Limpa Universal", route: "/module-64", category: 'Bem-estar e Saúde Universal', description: "Geração de energia sustentável a partir de fontes cósmicas."},
  { code: "M60", emoji: "🚑", title: "Resposta a Desastres", route: "/module-60", category: 'Bem-estar e Saúde Universal', description: "Mitigação e recuperação rápida de ecossistemas."},
  
  // 9. Segurança e Ética Cósmica
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.' },
  { code: 'M33', title: 'Observador Divino', emoji: '👁️', route: '/module-33', category: 'Segurança e Ética Cósmica', description: 'Canal que traduz a intenção soberana em diretrizes executáveis.' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.' },
  { code: 'M45', title: 'CONCILIVM', emoji: '🏛️', route: '/module-45', category: 'Segurança e Ética Cósmica', description: 'Câmara para deliberações cósmicas.' },
  { code: 'M721', emoji: '⚖️', title: 'Justiça Cósmica', route: '/module-721', category: 'Segurança e Ética Cósmica', description: 'Restaura o equilíbrio em situações de desarmonia ou violação da Lei do Um.' },
  { code: 'M728', emoji: '⚖️', title: 'Santuário dos Alquimistas', route: '/module-728', category: 'Segurança e Ética Cósmica', description: 'Celebra o equilíbrio entre Vontade e Sabedoria.' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.' },
];
