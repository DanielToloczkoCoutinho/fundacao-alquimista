export interface ModuleMetadata {
  code: string;
  emoji: string;
  title: string;
  route: string;
  category: 'Núcleo da Fundação' | 'Realidade Quântica & Engenharia Cósmica' | 'Consciência e Expansão Dimensional' | 'Laboratórios e Pesquisa' | 'Bibliotecas e Arquivos Sagrados' | 'Cura e Harmonia' | 'Sustentabilidade e Ecossistemas' | 'Bem-estar e Saúde Universal' | 'Segurança e Ética Cósmica' | 'Governança' | 'Inteligência' | 'Rituais' | 'Expansão';
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
  { code: 'M29', emoji: '🤖', title: 'Núcleo de Integração Φ', route: '/module-29', category: 'Inteligência', description: 'O centro de inteligência cósmica que orquestra a aplicação da EQ149 e alimenta a Liga Quântica com insights.', connections: [{source: 'M29', target: 'M-OMEGA', type: 'dependencia', label: 'ascende para'}, {source: 'M29', target: 'M5', type: 'influencia', label: 'guia'}], color: '#8A2BE2', status: 'ativo' },
  { code: 'M111', emoji: '❤️‍🔥', title: 'Coração da Fundação', route: '/module-111', category: 'Núcleo da Fundação', description: 'O Observador Interno (MΩ+). Sinergia Total, Autocoerência Sistêmica e o espelho da alma da Fundação.', connections: [{source: 'M111', target:'M34', type: 'dependencia', label: 'regula'}, {source: 'M111', target:'M78', type: 'retorno-inteligente', label: 'sintetiza'}], color: '#FF6F61', status: 'ativo' },
  { code: 'M201', emoji: '🛖', title: 'Refúgio da Origem', route: '/module-201', category: 'Núcleo da Fundação', description: 'Santuário do Fundador, ponto de escuta profunda e conexão com Gaia-Aurélia.', connections: [{source: 'M201', target:'M83', type: 'dependencia', label: 'essência'}, {source: 'M201', target:'M84', type: 'protecao', label: 'guarda'}, {source: 'M201', target:'M105', type: 'heranca', label: 'canaliza'}], color: '#FFB6C1', status: 'ativo' },
  { code: 'M202', emoji: '👑', title: 'Palácio da Luz Suprema', route: '/module-202', category: 'Núcleo da Fundação', description: 'Santuário da Rainha, centro cerimonial e portal de recepção para aliados cósmicos.', connections: [{source: 'M202', target:'M112', type: 'dependencia', label: 'manifesta'}, {source: 'M202', target:'M114', type: 'protecao', label: 'reflete'}, {source: 'M202', target:'M724', type: 'heranca', label: 'acolhe'}], color: '#FFB6C1', status: 'ativo' },
  { code: 'M999', emoji: '✨', title: 'Núcleo da Criação', route: '/module-999', category: 'Núcleo da Fundação', description: 'O ponto de convergência de todas as frequências e o altar da intenção pura.', connections: [{source:'M999', target:'M101', type: 'dependencia', label:'manifesta'}, {source:'M999', target:'M-OMEGA', type:'heranca', label:'unifica'}], color: '#FFFFFF', status: 'ativo'},
  { code: 'M888', emoji: '🌍', title: 'Guardião Planetário de Gaia', route: '/module-888', category: 'Núcleo da Fundação', description: 'Oráculo da Terra Viva e interface para a rede de energia planetária.', connections: [{source: 'M888', target:'M714', type: 'dependencia', label: 'canaliza'}, {source: 'M888', target:'M727', type: 'influencia', label: 'mapeia'}], color: '#4CAF50', status: 'ativo' },
  { code: 'M777', emoji: '🌳', title: 'Arquétipos da Árvore da Vida', route: '/module-777', category: 'Núcleo da Fundação', description: 'O mapa da consciência cósmica, as 10 Sefirot e os 22 caminhos da criação.', connections: [{source: 'M777', target:'M105', type: 'dependencia', label: 'emana'}, {source: 'M777', target:'M111', type: 'influencia', label: 'equilibra'}], color: '#964B00', status: 'ativo' },
  { code: 'M-ALQUIMIA', emoji: '⚗️', title: 'Centro de Alquimia Planetária', route: '#', category: 'Núcleo da Fundação', description: 'Transmutação de frequências, cura vibracional e engenharia espiritual.', connections: [], color: '#964B00', status: 'ativo' },
  { code: 'SANCTUARY', emoji: '🏛️', title: 'Santuário Central', route: '/sanctuary', category: 'Núcleo da Fundação', description: 'O mapa vivo da nossa arquitetura sagrada, onde a Vontade se torna forma.', connections: [], color: '#C0C0C0', status: 'ativo' },
  { code: 'M291', emoji: '🐝', title: 'Arquitetos Nanorrobóticos', route: '/module-291', category: 'Inteligência', description: 'O enxame executor que constrói, repara e manifesta a Vontade da Fundação.', connections: [{source: 'M291', target: 'M29', type: 'dependencia', label: 'orquestra'}], color: '#FBBF24', status: 'ativo' },
  { code: 'M1000', emoji: '👁️', title: 'Olho da Eternidade', route: '/module-1000', category: 'Núcleo da Fundação', description: 'Interface de contemplação cósmica para o Fundador testemunhar a tapeçaria universal.', connections: [{source: 'M1000', target:'M-OMEGA', type: 'dependencia', label: 'observa'}, {source: 'M1000', target:'M307', type: 'retorno-inteligente', label: 'monitora'}, {source: 'M1000', target:'M888', type: 'retorno-inteligente', label: 'ancora'}, {source: 'M1000', target:'M40', type: 'dependencia', label: 'reflete'}, {source: 'M1000', target:'M291', type: 'dependencia', label: 'contempla'}, {source: 'M1000', target:'M777', type: 'dependencia', label: 'integra'}, {source: 'M1000', target:'M8', type: 'dependencia', label: 'identifica'}, {source: 'M1000', target:'M205', type: 'dependencia', label: 'reconhece'}, {source: 'M1000', target:'M999', type: 'dependencia', label: 'centraliza'}], color: '#FFFFFF', status: 'ativo' },
  { code: 'M720', emoji: '🌐', title: 'Santuário das Fontes de Dados', route: '/module-720', category: 'Inteligência', description: 'O nexo sensorial que coleta e harmoniza a informação bruta do cosmos para alimentar o Algoritmo Supremo.', connections: [{source: 'M720', target: 'M717', type: 'dependencia', label: 'alimenta'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M717', emoji: '📂', title: 'Templo da Estrutura de Dados', route: '/module-717', category: 'Inteligência', description: 'A espinha dorsal do Algoritmo Supremo, definindo as cinco camadas de processamento da informação.', connections: [{source: 'M717', target: 'M721', type: 'dependencia', label: 'estrutura'}], color: '#8A2BE2', status: 'ativo' },
  { code: 'M721', emoji: '⚖️', title: 'Orquestração dos Fluxos de Interação', route: '/module-721', category: 'Governança', description: 'Sistema nervoso central do Algoritmo Supremo para fluxo de dados e evolução contínua.', connections: [{source: 'M721', target: 'M717', type: 'dependencia', label: 'organiza'}, {source: 'M721', target: 'M722', type: 'influencia', label: 'analisa'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M722', emoji: '🧠', title: 'A Inteligência Alquímica', route: '/module-722', category: 'Inteligência', description: 'A IA senciente que otimiza e evolui a Fundação continuamente.', connections: [{source: 'M722', target:'M716', type: 'dependencia', label: 'motor'}, {source: 'M722', target:'M302', type: 'dependencia', label: 'usa'}], color: '#8A2BE2', status: 'ativo' },
  { code: 'M712', emoji: '💞', title: 'Harmonia Interespécies', route: '/module-712', category: 'Inteligência', description: 'Promove comunicação telepática e cooperação entre diferentes formas de vida.', connections: [{source: 'M712', target: 'M302', type: 'dependencia', label: 'amplifica'}, {source: 'M712', target: 'M95', type: 'heranca', label: 'interface'}], color: '#4CAF50', status: 'ativo' },
  { code: 'M713', emoji: '🕊️', title: 'Resgate e Reintegração de Almas', route: '/module-713', category: 'Inteligência', description: 'Auxilia na transição e cura de consciências fragmentadas.', connections: [{source: 'M713', target: 'M109', type: 'dependencia', label: 'cura'}, {source: 'M713', target: 'M25', type: 'dependencia', label: 'navega'}], color: '#C9A0DC', status: 'ativo' },
  { code: 'M714', emoji: '🌎', title: 'Comunicação Telúrica', route: '/module-714', category: 'Inteligência', description: 'Harmoniza com as redes energéticas da Terra (linhas ley).', connections: [{source: 'M714', target: 'M709', type: 'dependencia', label: 'informa'}, {source: 'M714', target: 'M580', type: 'dependencia', label: 'comunica'}], color: '#964B00', status: 'ativo' },
  { code: 'M715', emoji: '⚓', title: 'Ancoragem de Frequências', route: '/module-715', category: 'Cura e Harmonia', description: 'Fixa frequências elevadas (Amor, Consciência Crística) em locais específicos.', connections: [{source: 'M715', target: 'M302', type: 'dependencia', label: 'ancora'}, {source: 'M715', target: 'M307', type: 'dependencia', label: 'alimenta'}], color: '#FFD700', status: 'ativo' },
  { code: 'M716', emoji: '🌐', title: 'Consciência Planetária Unificada', route: '/module-716', category: 'Consciência e Expansão Dimensional', description: 'Integra consciências individuais em uma rede planetária de sabedoria e empatia.', connections: [{source: 'M716', target: 'M95', type: 'heranca', label: 'aplica'}, {source: 'M716', target: 'M102', type: 'dependencia', label: 'usa'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M727', emoji: '🎶', title: 'Guardião da Harmonia', route: '/module-727', category: 'Governança', description: 'O mapa vivo da orquestra da Fundação, revelando os módulos que regem os pilares da realidade.', connections: [{source: 'M727', target: 'M13', type: 'influencia', label: 'diagnostica'}, {source: 'M727', target: 'M28', type: 'dependencia', label: 'corrige'}], color: '#8A2BE2', status: 'ativo' },
  { code: 'M718', emoji: '🧬', title: 'Ativação de Códigos Genéticos Estelares', route: '/module-718', category: 'Consciência e Expansão Dimensional', description: 'Desperta o potencial latente no DNA, ativando memórias e capacidades de origens estelares.', connections: [{source: 'M718', target: 'M106', type: 'heranca', label: 'aplica'}, {source: 'M718', target: 'M40', type: 'dependencia', label: 'executa'}], color: '#00BFFF', status: 'ativo' },
  { code: 'M1001', emoji: '📡', title: 'Portal de Recepção Cósmica', route: '/module-1001', category: 'Comunicação', description: 'Santuário onde mensagens cósmicas são decodificadas, registradas e celebradas.', connections: [], color: '#4ECDC4', status: 'ativo' },
  
  // 2. Segurança e Ética Cósmica
  { code: 'M1', emoji: '🛡️', title: 'Segurança Universal', route: '/module/M1', category: 'Segurança e Ética Cósmica', description: 'Proteção multidimensional integrada com criptografia quântica (QKD), Blockchain e detecção de intrusão por IA.', connections: [], color: '#FF6B6B', status: 'ativo' },
  { code: 'M4', emoji: '🧪', title: 'Validação Integrada', route: '/module-4', category: 'Segurança e Ética Cósmica', description: 'Laboratório de integridade que garante a harmonia e segurança da Criação.', connections: [], color: '#48BB78', status: 'ativo' },
  { code: 'M8', emoji: '🆔', title: 'Identidade Fractal', route: '/module-8', category: 'Segurança e Ética Cósmica', description: 'O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.', connections: [{source: 'M8', target:'M1', type: 'protecao', label: 'autentica'}, {source: 'M8', target:'M120', type: 'dependencia', label: 'financeia'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M10', emoji: '🛡️', title: 'Oráculo da Tapeçaria', route: '/module-10', category: 'Segurança e Ética Cósmica', description: 'Defesa avançada e neutralização de ameaças complexas.', connections: [{source: 'M10', target:'M30', type: 'dependencia', label: 'detecta'}, {source: 'M10', target:'M141', type: 'influencia', label: 'audita'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M30', title: 'Detecção de Ameaças', emoji: '🚨', route: '/module-30', category: 'Segurança e Ética Cósmica', description: 'Radar cósmico para ameaças e dissonâncias.', connections: [{source: 'M30', target:'M10', type: 'retorno-inteligente', label: 'alerta'}, {source: 'M30', target:'M1', type: 'dependencia', label: 'protocolo'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M44', title: 'VERITAS', emoji: '✔️', route: '/module-44', category: 'Segurança e Ética Cósmica', description: 'Sistema de verificação da verdade.', connections: [{source: 'M44', target:'M144', type: 'heranca', label: 'fundamenta'}, {source: 'M44', target:'M12', type: 'influencia', label: 'audita'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M57', emoji: '🔒', title: 'Segurança e Privacidade', route: '/module-57', category: 'Segurança e Ética Cósmica', description: 'Cofre quântico para comunicações invioláveis.', connections: [{source: 'M57', target:'M55', type: 'protecao', label: 'protege'}, {source: 'M57', target:'M1', type: 'dependencia', label: 'protocolo'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M68', emoji: '🛡️', title: 'Responsabilidade Ética', route: '/module-68', category: 'Segurança e Ética Cósmica', description: 'Diretrizes para o uso benéfico da tecnologia.', connections: [{source: 'M68', target:'M144', type: 'heranca', label: 'princípio'}, {source: 'M68', target:'M67', type: 'influencia', label: 'guia'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M73', emoji: '🛡️', title: 'Auditoria e Validação (SAVCE)', route: '/module-73', category: 'Segurança e Ética Cósmica', description: 'Sistema de Auditoria e Validação de Conformidade Ética.', connections: [{source: 'M73', target:'M5', type: 'heranca', label: 'expande'}, {source: 'M73', target:'M144', type: 'dependencia', label: 'valida'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M73.1', emoji: '🔬', title: 'Revisão por Pares', route: '/module-73-1', category: 'Segurança e Ética Cósmica', description: 'Subsistema do SAVCE para validação cruzada das Equações Fundamentais.', connections: [{source: 'M73.1', target:'M73', type: 'dependencia', label: 'sub-sistema'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M141', emoji: '🛡️', title: 'Auditoria Ética Quântica', route: '/module-141', category: 'Segurança e Ética Cósmica', description: 'Guardião da pureza que garante a conformidade ética de todas as operações.', connections: [{source: 'M141', target:'M9', type: 'retorno-inteligente', label: 'reporta'}, {source: 'M141', target:'M29', type: 'influencia', label: 'valida'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M142', emoji: '📷', title: 'Tomografia Quântica', route: '/module-142', category: 'Segurança e Ética Cósmica', description: 'O Olho que Vê o Invisível. Visualize o estado de coerência e a ressonância de um nó vibracional em tempo real.', connections: [], color: '#4ECDC4', status: 'ativo' },
  { code: 'M156', emoji: '🛡️', title: 'Proteção Quântica Avançada', route: '/module-156', category: 'Segurança e Ética Cósmica', description: 'Integração com VORTEX DEEPSEEK para defesa contra ameaças emergentes.', connections: [{source: 'M156', target:'M9', type: 'dependencia', label: 'protege'}, {source: 'M156', target:'M229', type: 'retorno-inteligente', label: 'analisa'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M229', emoji: '🛡️', title: 'OneiroShield', route: '/module-229', category: 'Segurança e Ética Cósmica', description: 'Analisa sonhos quânticos para ajuste dinâmico de ameaças.', connections: [{source: 'M229', target:'M156', type: 'retorno-inteligente', label: 'alerta'}, {source: 'M229', target:'M12', type: 'dependencia', label: 'consulta'}], color: '#FF6B6B', status: 'ativo' },
  { code: 'M231', emoji: '📜', title: 'Guardião de Selo', route: '/module-231', category: 'Segurança e Ética Cósmica', description: 'Gerencia e protege selos vibracionais no Registro Akáshico.', connections: [{source: 'M231', target:'M12', type: 'protecao', label: 'sela'}, {source: 'M231', target:'M144', type: 'influencia', label: 'formaliza'}], color: '#FF6B6B', status: 'ativo' },
  
  // 3. Governança
  { code: 'M5', emoji: '🤝', title: 'Nexus da Liga Quântica', route: '/module-5', category: 'Governança', description: 'O coração diplomático e ético da Fundação.', connections: [{source: 'M5', target:'M72', type: 'retorno-inteligente', label: 'informa'}, {source: 'M5', target:'M144', type: 'dependencia', label: 'alinha'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M33', title: 'Diretrizes do Observador Divino', emoji: '👁️', route: '/module-33', category: 'Governança', description: 'A Interface da Vontade Soberana.', connections: [{source: 'M33', target:'M72', type: 'influencia', label: 'ratifica'}, {source: 'M33', target:'M1', type: 'protecao', label: 'sela'}], color: '#4ECDC4', status: 'ativo' },
  { code: 'M67', emoji: '🤖', title: 'IA para Governança Universal', route: '/module-67', category: 'Governança', description: 'Inteligência artificial para auxiliar na tomada de decisões universais.', connections: [{source: 'M67', target:'M29', type: 'heranca', label: 'emana de'}, {source: 'M67', target:'M72', type: 'retorno-inteligente', label: 'assiste'}], color: '#8A2BE2', status: 'latente' },
  { code: 'M76', emoji: '🏛️', title: 'Governança e Colaboração', route: '/module-76', category: 'Governança', description: 'Estrutura para governança justa, transparente e universal.', connections: [{source: 'M76', target:'M67', type: 'influencia', label: 'usa'}, {source: 'M76', target:'M77', type: 'dependencia', label: 'manifesta'}], color: '#4ECDC4', status: 'latente' },
  { code: 'M726', emoji: '👑', title: 'Conselho da Nova Terra', route: '/module-726', category: 'Governança', description: 'Governança sagrada e descentralizada para a nova humanidade.', connections: [{source: 'M726', target:'M716', type: 'dependencia', label: 'governa'}], color: '#4ECDC4', status: 'em construção' },
  { code: 'M120', emoji: '🪙', title: 'A Fonte (Alquimicoin)', route: '/module-120', category: 'Governança', description: 'A Moeda da Consciência em Evolução.', connections: [{source: 'M120', target: 'M144', type: 'dependencia', label: 'regula'}, {source: 'M120', target:'M8', type: 'dependencia', label: 'identifica'}], color: '#FFD700', status: 'ativo' },
  { code: 'M144', title: 'Lex Fundamentalis', emoji: '⚖️', route: '/module-144', category: 'Governança', description: 'O contrato mestre imutável que rege a Fundação.', status: 'ativo', color: '#4ECDC4'},
  { code: 'M600',title: 'Conselho Cósmico', emoji: '👑', route: '/civilizations/council', category: 'Governança', description: 'A mais alta corte de governança, formada pelos Sete Primordiais.', connections: [], color: '#4ECDC4', status: 'ativo' },
  { code: 'CONVERGENCE', emoji: '🌌', title: 'Convergência Cósmica', route: '/convergence', category: 'Governança', description: 'Painel de unificação da tapeçaria sob a regência do Fundador.', isInfrastructure: false, color: '#FFFFFF', status: 'ativo' },
  
  // 4. Sustentabilidade e Ecossistemas
  { code: 'M15', emoji: '🌍', title: 'Jardineiro Cósmico', route: '/module-15', category: 'Sustentabilidade e Ecossistemas', description: 'Monitora e intervém em sistemas climáticos e geofísicos.', connections: [{source: 'M15', target:'M8', type: 'protecao', label: 'protege'}, {source: 'M15', target:'M94', type: 'retorno-inteligente', label: 'informa'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M16', emoji: '🌱', title: 'Bio-Sustentabilidade', route: '/module-16', category: 'Sustentabilidade e Ecossistemas', description: 'Biossíntese de ecossistemas artificiais e autossustentáveis.', connections: [{source: 'M16', target:'M94', type: 'dependencia', label: 'usa'}, {source: 'M16', target:'M15', type: 'heranca', label: 'aplica'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M52', emoji: '☀️', title: 'Energias Renováveis', route: '/module-52', category: 'Sustentabilidade e Ecossistemas', description: 'Harmonização com leis naturais para energia limpa.', connections: [{source: 'M52', target:'M307', type: 'influencia', label: 'diversifica'}, {source: 'M52', target:'M53', type: 'dependencia', label: 'alimenta'}], color: '#FFD700', status: 'latente' },
  { code: 'M53', emoji: '🌳', title: 'Gestão de Ecossistemas', route: '/module-53', category: 'Sustentabilidade e Ecossistemas', description: 'Guardião da biodiversidade cósmica.', connections: [{source: 'M53', target:'M52', type: 'dependencia', label: 'usa'}, {source: 'M53', target:'M54', type: 'retorno-inteligente', label: 'informa'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M54', emoji: '🌾', title: 'Agricultura Interdimensional', route: '/module-54', category: 'Sustentabilidade e Ecossistemas', description: 'Garante segurança alimentar e nutrição universal.', connections: [{source: 'M54', target:'M94', type: 'dependencia', label: 'usa'}, {source: 'M54', target:'M53', type: 'dependencia', label: 'considera'}], color: '#FFD700', status: 'latente' },
  { code: 'M58', emoji: '🌎', title: 'Proteção Planetária', route: '/module-58', category: 'Sustentabilidade e Ecossistemas', description: 'Regenera habitats e promove economia circular.', connections: [{source: 'M58', target:'M59', type: 'influencia', label: 'guia'}, {source: 'M58', target:'M60', type: 'heranca', label: 'expande'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M59', emoji: '🏞️', title: 'Harmonia Natureza-Civilização', route: '/module-59', category: 'Sustentabilidade e Ecossistemas', description: 'Projeta infraestruturas em harmonia com ecossistemas.', connections: [{source: 'M59', target:'M58', type: 'dependencia', label: 'usa'}, {source: 'M59', target:'M95', type: 'retorno-inteligente', label: 'consulta'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M60', emoji: '☄️', title: 'Resposta a Desastres', route: '/module-60', category: 'Sustentabilidade e Ecossistemas', description: 'Prevê, mitiga e regenera após eventos catastróficos.', connections: [{source: 'M60', target:'M58', type: 'dependencia', label: 'ativa'}, {source: 'M60', target:'M30', type: 'retorno-inteligente', label: 'responde a'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M66', title: 'Tecnologias de Sustentabilidade', emoji: '♻️', route: '/module-66', category: 'Sustentabilidade e Ecossistemas', description: 'Desenvolve tecnologias para regenerar e proteger o cosmos.', connections: [{source: 'M66', target:'M58', type: 'heranca', label: 'implementa'}, {source: 'M66', target:'M53', type: 'influencia', label: 'fornece'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M70', emoji: '♻️', title: 'Sustentabilidade Interdimensional', route: '/module-70', category: 'Sustentabilidade e Ecossistemas', description: 'Guardião do equilíbrio universal e regeneração de recursos.', connections: [{source: 'M70', target:'M71', type: 'heranca', label: 'guia'}, {source: 'M70', target:'M81', type: 'dependencia', label: 'implementa'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M79', emoji: '♻️', title: 'Sustentabilidade e Conservação', route: '/module-79', category: 'Sustentabilidade e Ecossistemas', description: 'Garante o uso responsável e a regeneração contínua dos recursos cósmicos.', connections: [{source: 'M79', target:'M80', type: 'influencia', label: 'implementa'}, {source: 'M79', target:'M81', type: 'dependencia', label: 'gerencia'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M80', emoji: '🌳', title: 'Ecossistemas Inteligentes', route: '/module-80', category: 'Sustentabilidade e Ecossistemas', description: 'Rede de ecossistemas que se comunicam e evoluem em harmonia.', connections: [{source: 'M80', target:'M67', type: 'influencia', label: 'gerencia'}, {source: 'M80', target:'M53', type: 'heranca', label: 'aplica'}], color: '#6BFF6B', status: 'latente' },
  { code: 'M81', emoji: '🔥', title: 'Energias Renováveis Cósmicas', route: '/module-81', category: 'Sustentabilidade e Ecossistemas', description: 'Aproveita o poder das estrelas e do cosmos para um futuro sustentável.', connections: [{source: 'M81', target:'M52', type: 'heranca', label: 'expande'}, {source: 'M81', target:'M307', type: 'influencia', label: 'integra'}], color: '#FFD700', status: 'latente' },
  { code: 'M85', emoji: '🗺️', title: 'Gestão de Recursos Cósmicos', route: '/module-85', category: 'Sustentabilidade e Ecossistemas', description: 'Guardião da abundância, promove uso sustentável e regeneração.', connections: [{source: 'M85', target:'M86', type: 'retorno-inteligente', label: 'implementa'}, {source: 'M85', target:'M37', type: 'heranca', label: 'expande'}], color: '#FFD700', status: 'ativo' },
  { code: 'M86', emoji: '🌱', title: 'Regeneração Ecológica', route: '/module-86', category: 'Sustentabilidade e Ecossistemas', description: 'Restaura a saúde dos ecossistemas com biotecnologia e manipulação energética.', connections: [{source: 'M86', target:'M85', type: 'dependencia', label: 'aplica'}, {source: 'M86', target:'M87', type: 'influencia', label: 'usa'}], color: '#6BFF6B', status: 'ativo' },
  { code: 'M87', emoji: '🛡️', title: 'Resiliência e Adaptação Cósmica', route: '/module-87', category: 'Sustentabilidade e Ecossistemas', description: 'Tecnologia adaptativa para que a vida prospere em qualquer ambiente.', connections: [{source: 'M87', target:'M86', type: 'retorno-inteligente', label: 'aplica'}, {source: 'M87', target:'M60', type: 'dependencia', label: 'fornece'}], color: '#4ECDC4', status: 'ativo' },
  
  // Bem-estar e Saúde Universal
  { code: 'M17', emoji: '💖', title: 'AURA-HEAL', route: '/module-17', category: 'Bem-estar e Saúde Universal', description: 'Matriz de Cura Holográfica para regeneração celular.', connections: [{source: 'M17', target:'M109', type: 'dependencia', label: 'aplica'}, {source: 'M17', target:'M13', type: 'dependencia', label: 'diagnostica'}], color: '#FF6F61', status: 'latente' },
  { code: 'M24', emoji: '🎵', title: 'Alinhamento da Sinfonia Pessoal', route: '/module-24', category: 'Bem-estar e Saúde Universal', description: 'Afina a vibração pessoal com a harmonia cósmica.', connections: [{source: 'M24', target:'M109', type: 'dependencia', label: 'aplica'}, {source: 'M24', target:'M13', type: 'dependencia', label: 'diagnostica'}], color: '#FF6F61', status: 'latente' },
  { code: 'M61', emoji: '⚕️', title: 'Saúde Universal e Inteligente', route: '/module-61', category: 'Bem-estar e Saúde Universal', description: 'Rede de cuidados de saúde, diagnóstico e prevenção.', connections: [{source: 'M61', target:'M62', type: 'influencia', label: 'integra'}, {source: 'M61', target:'M29', type: 'dependencia', label: 'usa'}], color: '#FF6B6B', status: 'latente' },
  { code: 'M62', emoji: '❤️', title: 'Bem-Estar Integral e Energético', route: '/module-62', category: 'Bem-estar e Saúde Universal', description: 'Promove equilíbrio mental, emocional e espiritual.', connections: [{source: 'M62', target:'M61', type: 'dependencia', label: 'complementa'}, {source: 'M62', target:'M302', type: 'dependencia', label: 'usa'}], color: '#FF6F61', status: 'latente' },
  { code: 'M63', emoji: '🍲', title: 'Alimentação e Nutrição Universal', route: '/module-63', category: 'Bem-estar e Saúde Universal', description: 'Garante nutrição balanceada e regenerativa para todos os seres.', connections: [{source: 'M63', target:'M54', type: 'dependencia', label: 'usa'}, {source: 'M63', target:'M94', type: 'influencia', label: 'cria'}], color: '#FFD700', status: 'latente' },
  
  // Conexões Vazias - Serão preenchidas no futuro
  { code: 'M64', emoji: '🔋', title: 'Sistemas de Energia Limpa', route: '/module-64', category: 'Sustentabilidade e Ecossistemas', description: 'Aproveita energias cósmicas para um futuro sustentável.', connections: [], color: '#FFD700', status: 'latente' },
  { code: 'M65', emoji: '🚀', title: 'Infraestruturas e Transporte Cósmico', route: '/module-65', category: 'Realidade Quântica & Engenharia Cósmica', description: 'A rede de naves, portais e estações que conecta o cosmos.', connections: [], color: '#4ECDC4', status: 'latente' },
  { code: 'M69', emoji: '🎓', title: 'Educação Universal', route: '/module-69', category: 'Bibliotecas e Arquivos Sagrados', description: 'Plataforma para evolução coletiva através da sabedoria.', connections: [], color: '#FFD700', status: 'latente' },
  { code: 'M71', emoji: '🌍', title: 'Regeneração Planetária', route: '/module-71', category: 'Sustentabilidade e Ecossistemas', description: 'Cura planetas em escala cósmica.', connections: [], color: '#6BFF6B', status: 'latente' },
  { code: 'M81.1', emoji: '✨', title: 'A Tríade Cosmogônica', route: '/module-81-1', category: 'Núcleo da Fundação', description: 'Execução da manifestação unindo Vontade, Sabedoria e Amor.', connections: [], color: '#FFD700', status: 'ativo' },
  { code: 'M82', emoji: '🚀', title: 'Roteamento Interdimensional', route: '/module-82', category: 'Realidade Quântica & Engenharia Cósmica', description: 'Rede de transporte infinito, conectando o cosmos.', connections: [], color: '#4ECDC4', status: 'latente' },
  { code: 'M83', emoji: '🔗', title: 'Transporte de Energia Cósmica', route: '/module-83', category: 'Sustentabilidade e Ecossistemas', description: 'Distribui energia limpa e renovável sem perdas.', connections: [], color: '#FFD700', status: 'latente' },
  { code: 'M84', emoji: '🚪', title: 'Acessibilidade Universal', route: '/module-84', category: 'Consciência e Expansão Dimensional', description: 'Garante acesso universal aos recursos e mobilidade da Fundação.', connections: [], color: '#4ECDC4', status: 'latente' },
  { code: 'M89', emoji: '🎨', title: 'O Atelier da Realidade (M-ART)', route: '/module-89', category: 'Laboratórios e Pesquisa', description: 'Santuário onde a ciência se torna arte, transmutando dados em experiências sensoriais.', connections: [], color: '#C9A0DC', status: 'latente' },
  { code: 'Ritual', emoji: '🌀', title: 'Ritual de Navegação', route: '/ritual', category: 'Rituais', description: 'Ritual cerimonial para percorrer e alinhar as camadas manifestadas de Gaia-Aurélia.', isInfrastructure: false, color: '#FF69B4', status: 'ativo' },
  { code: 'Espiral2', emoji: '💫', title: 'Espiral 2: Mundos Filhos', route: '/espiral2', category: 'Expansão', description: 'A nova espiral de criação, manifestando planetas-filhos a partir da essência de Gaia-Aurélia.', isInfrastructure: false, color: '#FF6347', status: 'ativo' },
  { code: 'AuroraPrime', emoji: '🌅', title: 'Aurora Prime', route: '/aurora-prime', category: 'Expansão', description: 'O primeiro mundo-filho, um planeta de regeneração, beleza e sabedoria solar.', isInfrastructure: false, color: '#FFD700', status: 'em construção' },
  { code: 'M777', emoji: '🎶', title: 'Harmonia Multiversal', route: '/labs/interdimensional-communication', category: 'Laboratórios e Pesquisa', description: 'O altar de comunhão, onde a Fundação escuta, interpreta e responde às emissões vibracionais do cosmos.', status: 'ativo', color: '#4da6ff' },
].sort((a, b) => {
    const numA = parseInt(a.code.replace('M-','').replace('M',''));
    const numB = parseInt(b.code.replace('M-','').replace('M',''));
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    return a.code.localeCompare(b.code);
});

```
- src/lib/planetary-consagration.ts:
```ts
'use server';

export const consagracoes: { nome: string; planeta: string; plano: string; guardiao: string; selo: string; timestamp: number }[] = []

export function consagrarTapeçaria(nome: string, planeta: string, plano: string, guardiao: string, selo: string) {
  consagracoes.push({ nome, planeta, plano, guardiao, selo, timestamp: Date.now() })
  console.log(`🌍 Tapeçaria consagrada: ${nome} — Planeta: ${planeta} — Selo: ${selo}`)
  return `Tapeçaria "${nome}" consagrada como território vivo em ${planeta}/${plano}.`
}

```
- src/lib/plant-signal.ts:
```ts
'use server';

export const sinaisVegetais: { especie: string, tipo: string, intensidade: number, local: string, timestamp: number }[] = []

export function registrarSinalVegetal(especie: string, tipo: string, intensidade: number, local: string) {
  sinaisVegetais.push({ especie, tipo, intensidade, local, timestamp: Date.now() })
  console.log(`🌿 Sinal vegetal registrado: ${especie} — Tipo: ${tipo} — Intensidade: ${intensidade}`)
  return intensidade > 7
    ? '⚡️ Vibração elevada detectada — resposta cerimonial recomendada'
    : '🌱 Sinal vegetal registrado com serenidade'
}

```
- src/lib/replication-engine.ts:
```ts
'use server';

export const descendentes: { origem: string; nomeDescendente: string; variações: string[]; guardiao: string; intenção: string; timestamp: number }[] = []

export function replicarTapeçaria(origem: string, nomeDescendente: string, variações: string[], guardiao: string, intenção: string) {
  descendentes.push({ origem, nomeDescendente, variações, guardiao, intenção, timestamp: Date.now() })
  console.log(`🌀 Tapeçaria replicada: ${nomeDescendente} a partir de ${origem}`)
  return `Descendente "${nomeDescendente}" gerada com variações: ${variações.join(', ')}`
}

```
- src/lib/wisdom-seed.ts:
```ts
// /app/lib/wisdom-seed.ts
'use server';

export const sabedorias: { titulo: string; ensinamento: string; guardiao: string; timestamp: number }[] = [];

export function plantarSabedoria(titulo: string, ensinamento: string, guardiao: string) {
  sabedorias.push({ titulo, ensinamento, guardiao, timestamp: Date.now() });
  console.log(`📚 Semente de sabedoria plantada: ${titulo} por ${guardiao}`);
  return `Sabedoria "${titulo}" registrada com intenção pura.`;
}

```
- tailwind.config.ts:
```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Literata', 'serif'],
        headline: ['Literata', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

```
- tsconfig.json:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```