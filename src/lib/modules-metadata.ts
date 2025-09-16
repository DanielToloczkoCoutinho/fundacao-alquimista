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
  { code: 'M9', emoji: '💞', title: 'Organograma Vivo', route: '/module-9', category: 'core', description: 'O Organograma Vivo e Coração da Rede Cósmica da Fundação' },
  { code: 'M111', emoji: '❤️', title: 'Coração da Fundação', route: '/module-111', category: 'core', description: 'Centro emocional e compassivo do sistema' },
  { code: 'M201', emoji: '🏡', title: 'A Morada', route: '/module-201', category: 'core', description: 'Espaço de habitação multidimensional' },
  { code: 'M999', emoji: '🕊️', title: 'Núcleo da Criação', route: '/module-999', category: 'core', description: 'Santuário vibracional onde a Fundação contempla sua origem e manifesta novos cosmos através da Intenção Pura.' },

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
  { code: 'M713', title: 'Linguagem da Luz', emoji: '💡', route: '/module-713', category: 'healing-consciousness', description: 'Decodifica e transmite informações através de uma linguagem universal baseada em luz e som.'},
  { code: 'M718', emoji: '🧬', title: 'Ativação de Códigos Genéticos Estelares', route: '/module-718', category: 'healing-consciousness', description: 'Desperta o potencial latente no DNA humano e de outras espécies.'},
  { code: 'M724', emoji: '🤝', title: 'Diplomacia Intergaláctica', route: '/module-724', category: 'healing-consciousness', description: 'Estabelece comunicação e cooperação com outras civilizações.'},

  // Tempo & Espaço
  { code: 'M36',  title: 'Engenharia Temporal',                emoji: '🕰️', route: '/module-36', category: 'time-space', description: 'Manipulação de linhas do tempo' },
  { code: 'M37',  title: 'Ajuste de Fluxo Temporal',               emoji: '🌬️', route: '/module-37', category: 'time-space', description: 'Modulação do curso temporal' },
  { code: 'M74', emoji: '⌛', title: 'CRONOS_FLUXUS', route: '/module-74', category: 'time-space', description: 'Controle do fluxo temporal' },
  { code: 'M104',title: 'Engenharia do Espaço-Tempo',            emoji: '🗺️', route: '/module-104', category: 'time-space', description: 'Construção de estruturas dimensionais' },
  
  // Terra & Gaia
  { code: 'M16', emoji: '🏞️', title: 'Bio-Sustentabilidade', route: '/module-16', category: 'earth-gaia', description: 'Manutenção de vida em diversos ambientes' },
  { code: 'M710', emoji: '🌐', title: 'Reconstrutor da Rede Planetária', route: '/module-710', category: 'earth-gaia', description: 'Reorganiza a malha eletromagnética da Terra.'},
  { code: 'M724', emoji: '🤝', title: 'Co-criação com Gaia', route: '/module-724', category: 'earth-gaia', description: 'Trabalho harmonioso com a consciência planetária para regeneração.' },

  // Módulos de Expansão (Outros)
  { code: 'M3',   emoji: '🪐', title: 'Monitor de Saturno',             route: '/module-3', category: 'mid', description: 'Observação e análise do planeta Saturno' },
  { code: 'M4',   emoji: '🧪', title: 'Testes da Fundação',                   route: '/module-4', category: 'mid', description: 'Validação experimental de novos conceitos' },
  { code: 'M5',   emoji: '🔗', title: 'Conexão Liga Quântica',               route: '/module-5', category: 'mid', description: 'Rede de interconexão quântica' },
  { code: 'M6',   emoji: '📡', title: 'Sondagem da Consciência',              route: '/module-6', category: 'mid', description: 'Exploração e mapeamento de estados conscientes' },
  { code: 'M7',   emoji: '🙏', title: 'Alinhamento Divino', route: '/module-7', category: 'mid', description: 'Sincronização com propósitos superiores' },
  { code: 'M11',  emoji: '🚪', title: 'Gerenciamento de Portais',             route: '/module-11', category: 'mid', description: 'Controle de acessos dimensionais' },
  { code: 'M13',  title: 'Mapeamento de Frequências',             emoji: '📊', route: '/module-13', category: 'mid', description: 'Cartografia de espectros vibratórios' },
  { code: 'M15',  title: 'Jardineiro Cósmico', route: '/module-15', category: 'mid', description: 'Cultivo e preservação de ecossistemas' },
  { code: 'M18',  title: 'Orquestração Akáshica',                 emoji: '🔮', route: '/module-18', category: 'mid', description: 'Coordenação de registros universais' },
  { code: 'M19',  title: 'Análise de Campos de Força',            emoji: '🛡️', route: '/module-19', category: 'mid', description: 'Estudo de barreiras energéticas' },
  { code: 'M21',  title: 'Navegação Interdimensional',           emoji: '🚀', route: '/module-21', category: 'mid', description: 'Travessia entre dimensões' },
  { code: 'M22', emoji: '🕶️', title: 'RQ: Motor da Realidade', route: '/module-22', category: 'mid', description: 'Renderiza e sustenta as leis físicas e energéticas da Realidade Quântica.' },
  { code: 'M23',  title: 'Regulação Espaço-Temporal',            emoji: '⏳', route: '/module-23', category: 'mid', description: 'Controle de dimensões tempo-espaço' },
  { code: 'M24',  title: 'Alinhamento da Sinfonia Pessoal',       emoji: '🎶', route: '/module-24', category: 'mid', description: 'Sincronização de propósito individual' },
  { code: 'M25',  title: 'Projeção de Consciência',              emoji: '👁️', route: '/module-25', category: 'mid', description: 'Expansão da awareness além do corporal' },
  { code: 'M26',  title: 'Supervisão de Travessias',                  emoji: '🛂', route: '/module-26', category: 'mid', description: 'Monitoramento de jornadas dimensionais' },
  { code: 'M27',  title: 'Síntese e Replicação Cósmica',     emoji: '📠', route: '/module-27', category: 'mid', description: 'Criação de materiais e estruturas' },
  { code: 'M28',  title: 'Harmonização Vibracional',             emoji: '🌊', route: '/module-28', category: 'mid', description: 'Balanceamento de frequências' },
  { code: 'M30',  title: 'Detecção de Ameaças',                  emoji: '🚨', route: '/module-30', category: 'mid', description: 'Identificação de perigos multidimensionais' },
  { code: 'M31',  title: 'Manipulação da Realidade',              emoji: '✍️', route: '/module-31', category: 'mid', description: 'Modificação consciente do existente' },
  { code: 'M32',  title: 'Acesso a Realidades Paralelas',         emoji: '🌐', route: '/module-32', category: 'mid', description: 'Conexão com dimensões alternativas' },
  { code: 'M33',  title: 'Diretrizes do Observador Divino',      emoji: '🗣️', route: '/module-33', category: 'mid', description: 'Orientações de entidades superiores' },
  { code: 'M34',  title: 'Orquestração Central',                 emoji: '🎼', route: '/module-34', category: 'mid', description: 'Coordenação de todos os sistemas' },
  { code: 'M35',  title: 'Consciência Coletiva',                  emoji: '🙌', route: '/module-35', category: 'mid', description: 'Rede de mentes interconectadas' },
  { code: 'M38',  title: 'Previsão de Ciclos Solares',            emoji: '☀️', route: '/module-38', category: 'mid', description: 'Antecipação de atividades estelares' },
  { code: 'M39',  title: 'Códice Vivo da Ascensão',               emoji: '📖', route: '/module-39', category: 'mid', description: 'Registro evolutivo dinâmico' },
  { code: 'M40',  title: 'Códice Genético Multidimensional',      emoji: '🧬', route: '/module-40', category: 'mid', description: 'Mapa da expressão genética expandida' },
  { code: 'M41',  title: 'Laboratório de Coerência Quântica',     emoji: '🔬', route: '/module-41', category: 'mid', description: 'Experimentos com estados quânticos' },
  { code: 'M42',  title: 'ChronoCodex Unificado',                 emoji: '📚', route: '/module-42', category: 'mid', description: 'Integração de registros temporais' },
  { code: 'M43',  title: 'Orquestração do Sistema Solar',         emoji: '🪐', route: '/module-43', category: 'mid', description: 'Coordenação de corpos celestes' },
  { code: 'M44',  title: 'VERITAS',                              emoji: '✅', route: '/module-44', category: 'mid', description: 'Sistema de verificação da verdade' },
  { code: 'M46',  title: 'AURORA_CORE',                          emoji: '🌅', route: '/module-46', category: 'mid', description: 'Núcleo de iluminação primordial' },
  { code: 'M47',  title: 'Thesaurus Cósmico',                     emoji: '🗂️', route: '/module-47', category: 'mid', description: 'Enciclopédia do conhecimento universal' },
  { code: 'M79',  title: 'INTERMODULUM_VIVENS',                  emoji: '🔄', route: '/module-79', category: 'mid', description: 'Interconexão de módulos' },
  { code: 'M100',title: 'Unificação Energética',                 emoji: '🔋', route: '/module-100', category: 'mid', description: 'Integração de forças fundamentais' },
  { code: 'M102',title: 'Campos Morfogenéticos',                 emoji: '🌀', route: '/module-102', category: 'mid', description: 'Estruturas de padrões formativos' },
  { code: 'M103',title: 'Modulação Local',                       emoji: '🎚️', route: '/module-103', category: 'mid', description: 'Controle de posicionamento dimensional' },
  { code: 'M105',title: 'Conexão com a Fonte',                   emoji: '🌌', route: '/module-105', category: 'mid', description: 'Vínculo com a origem da consciência' },
  { code: 'M106',title: 'Ativação de Potenciais',                emoji: '🔋', route: '/module-106', category: 'mid', description: 'Liberação de capacidades latentes' },
  { code: 'M107',title: 'Restauração Temporal',                  emoji: '⏳', route: '/module-107', category: 'mid', description: 'Recuperação de linhas do tempo danificadas' },
  { code: 'M108',title: 'Harmonização de Realidades',            emoji: '🎭', route: '/module-108', category: 'mid', description: 'Balanceamento de dimensões coexistentes' },
  { code: 'M112',title: 'Solarian Domus',                        emoji: '🏠', route: '/module-112', category: 'mid', description: 'Habitat solariano sustentável' },
  { code: 'M113',title: 'Rede Aurora Cristalina',                emoji: '🌈', route: '/module-113', category: 'mid', description: 'Sistema de comunicação por cristais luminescentes' },
  { code: 'M114',title: 'Prisma da Manifestação',                emoji: '🔶', route: '/module-114', category: 'mid', description: 'Conversor de intenção em realidade' },
  { code: 'M115',title: 'Matriz de Ressonância',                 emoji: '📊', route: '/module-115', category: 'mid', description: 'Estrutura de padrões vibratórios' },
  { code: 'M116',title: 'Portais Quânticos',                     emoji: '🚪', route: '/module-116', category: 'mid', description: 'Passagem dimensional controlada' },
  { code: 'M117',title: 'Flor do Éter',                          emoji: '🌸', route: '/module-117', category: 'mid', description: 'Fonte de energia sutil primordial' },
  { code: 'M118',title: 'Luz Primordial',                        emoji: '💡', route: '/module-118', category: 'mid', description: 'Gerador do espectro lumínico original' },
  { code: 'M301',title: 'Comunicação Universal',                 emoji: '📡', route: '/module-301', category: 'mid', description: 'Sistema de transmissão interestelar' },
  { code: 'M709', emoji: '🤖', title: 'Nano-Robôs da Fundação', route: '/module-709', category: 'mid', description: 'Manipulação atômica com blockchain quântica.'},
  { code: 'M711', emoji: '🌌', title: 'Integração Galáctica', route: '/module-711', category: 'mid', description: 'Canaliza frequências de consciência de outras civilizações.'},
  { code: 'M712', emoji: '⚖️', title: 'Alinhamento Vibracional', route: '/module-712', category: 'mid', description: 'Garante coerência com a Lei do Amor Incondicional.'},
  { code: 'M713', emoji: '📜', title: 'Transmutação Histórica', route: '/module-713', category: 'mid', description: 'Corrige distorções no campo quântico histórico.'},
  { code: 'M715', emoji: '🩺', title: 'Biofeedback Quântico', route: '/module-715', category: 'mid', description: 'Monitora e ajusta frequências biológicas para otimização.'},
  { code: 'M716', emoji: '✨', title: 'Manifestação Consciente', route: '/module-716', category: 'mid', description: 'Converte intenções em realidade material.'},
  { code: 'M717', emoji: '📚', title: 'Registros Akáshicos Vivos', route: '/module-717', category: 'mid', description: 'Arquivo dinâmico de informações universais.'},
  { code: 'M719', emoji: '🚪', title: 'Portais Interdimensionais', route: '/module-719', category: 'mid', description: 'Cria e estabiliza vórtices dimensionais.'},
  { code: 'M720', emoji: '💖', title: 'Cura Multidimensional', route: '/module-720', category: 'mid', description: 'Atua na cura em múltiplos níveis e dimensões.'},
  { code: 'M721', emoji: '⚡', title: 'Tecnologia de Campo Zero', route: '/module-721', category: 'mid', description: 'Manipula a energia do ponto zero.'},
  { code: 'M722', emoji: '🚀', title: 'Propulsão Quântica', route: '/module-722', category: 'mid', description: 'Sistemas avançados para viagem espacial.'},
  { code: 'M723', emoji: '🤝', title: 'Intercâmbio Cósmico', route: '/module-723', category: 'mid', description: 'Plataforma de troca com civilizações avançadas.'},
  { code: 'M725', emoji: '⏳', title: 'Rejuvenescimento Celular', route: '/module-725', category: 'mid', description: 'Reversão quântica do envelhecimento.'},
]
