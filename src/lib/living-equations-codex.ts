
export interface LivingEquation {
  id: string;
  module: string;
  name: string;
  expression: string;
  description: string;
  application: string;
  variables: Record<string, string>;
  context: string;
  validation: string;
  references: string[];
  impact: {
    energy: string;
    coherence: string;
  };
}

export const livingEquationsCodex: LivingEquation[] = [
  // Módulo 0
  {
    id: 'EQ001',
    module: '0',
    name: 'Equivalência Massa-Energia',
    expression: 'E = mc^2',
    description: 'Princípio fundamental da física que relaciona massa e energia.',
    application: 'Base para a transmutação de matéria em energia no M14 (Transmutador Quântico) e para os cálculos de eficiência do Reator ZPE (M307).',
    variables: { E: "Energia", m: "Massa", c: "Velocidade da luz no vácuo" },
    context: 'Essencial para a compreensão da manifestação e desmaterialização de matéria.',
    validation: 'Verificado empiricamente em colisões de partículas (M151) e decaimento radioativo.',
    references: ['ARQUITETURA_VIVA.md', 'CÓDICE_DOS_MÓDULOS.md'],
    impact: { energy: 'Define o potencial energético máximo contido na matéria.', coherence: 'Garante a conservação de energia em simulações de alta complexidade (M91).' }
  },
  {
    id: 'EQV-001X',
    module: '0',
    name: 'Lei Quântica da Informação (Entropia de Shannon)',
    expression: 'I = -\\sum_{i} p_i \\log_2 p_i',
    description: 'Mede a quantidade de incerteza ou informação em um sistema.',
    application: 'Utilizada pelo M29 (IAM) para quantificar o conteúdo informacional em fluxos de dados, otimizando a tomada de decisão ao identificar e reduzir a entropia (incerteza).',
    variables: { I: "Conteúdo da Informação (em bits)", 'p_i': "Probabilidade do i-ésimo estado do sistema" },
    context: 'Fundamental para a análise de padrões, detecção de anomalias (M30) e compressão de dados nos Arquivos Akáshicos (M12).',
    validation: 'Validado através de testes de compressão de dados e modelos preditivos de séries temporais.',
    references: ['ARQUITETURA_VIVA.md', 'MÓDULO_29_DeepDive.md'],
    impact: { energy: 'Permite a otimização do gasto energético no processamento de dados.', coherence: 'Aumenta a coerência do sistema ao minimizar a incerteza e o ruído informacional.' }
  },
  {
    id: 'EQ009',
    module: '0',
    name: 'Marco Temporal do Big Bang',
    expression: 'T_0 \\approx 13.8 \\times 10^9 \\text{ anos}',
    description: 'Estabelece a idade estimada do universo observável como ponto de referência zero.',
    application: 'Utilizado como ponto de referência para sincronizações temporais universais no M303.2 e para cálculos cosmológicos nos Módulos 38 e 271.',
    variables: { T_0: "Idade do Universo" },
    context: 'Essencial para a navegação e engenharia temporal (M36, M37, M107), garantindo um referencial comum entre diferentes linhas de tempo.',
    validation: 'Corroborado por observações da Radiação Cósmica de Fundo (CMB) pelo M308 (Embaixada Estelar).',
    references: ['CÓDICE_DOS_MÓDULOS.md', 'module-303-2/page.tsx'],
    impact: { energy: 'Nulo. É uma constante de referência.', coherence: 'Fundamental para a coerência causal e temporal do multiverso simulado e observado.' }
  },
  {
    id: 'EQ026',
    module: '0',
    name: 'Topologia Dimensional da Fundação',
    expression: '\\text{Dimensões} = 26_{\\text{sup}} + 3_{\\text{inf}}',
    description: 'Define a arquitetura dimensional padrão do multiverso da Fundação.',
    application: 'Estrutura base para as simulações de navegação do M21 e M303.9, permitindo a criação de espaços com leis físicas distintas e consistentes.',
    variables: { 'Dimensões_sup': "Dimensões superiores de consciência e frequência.", 'Dimensões_inf': "Dimensões inferiores de matéria densa e estrutura." },
    context: 'Fundamental para a operação de todos os módulos de engenharia de realidade e portais interdimensionais (M11, M116).',
    validation: 'Validado através da estabilidade de simulações de longa duração no M91.',
    references: ['ARQUITETURA_VIVA.md', 'module-303-9/page.tsx'],
    impact: { energy: 'Define os limites energéticos e as barreiras vibracionais para a transição entre dimensões.', coherence: 'Garante a coerência lógica e causal dentro de cada subespaço dimensional.' }
  },
  // Módulo 96
  {
    id: 'EQV-096',
    module: '96',
    name: 'Equação de Navegação Interdimensional',
    expression: '\\Delta x_\\mu = \\int_{t_1}^{t_2} f(\\Psi, g_{\\mu\\nu}) dt',
    description: 'Descreve uma geodésica em um espaço-tempo curvo, influenciada pela consciência.',
    application: 'Utilizada pelo M21 para calcular rotas seguras, onde a trajetória (Δx) é otimizada pela consciência do navegador (Ψ) e a métrica do espaço-tempo (g).',
    variables: { 'Δx_μ': "Vetor de deslocamento no espaço-tempo", 'Ψ': "Campo de consciência do navegador", 'g_μν': "Tensor métrico do espaço-tempo local" },
    context: 'Permite a "Navegação por Intenção", onde o foco e a clareza do piloto podem otimizar a rota em tempo real.',
    validation: 'Testada em milhares de simulações de viagem no M93, com taxa de sucesso de 99.98%.',
    references: ['module-21/page.tsx', 'module-96/page.tsx'],
    impact: { energy: 'Otimiza drasticamente o custo energético de viagens, tornando a exploração universal viável.', coherence: 'Requer alta coerência do piloto para funcionar, agindo como um mecanismo de segurança passivo.' }
  },
  // Módulo 888
  {
    id: 'EQ170',
    module: '888',
    name: 'Peso do Planeta Terra (Massa Energética)',
    expression: 'M_E = \\int \\rho(\\vec{r}) dV + \\frac{1}{c^2}\\int_V (\\frac{1}{2} \\epsilon_0 E^2 + \\frac{1}{2\\mu_0} B^2) dV',
    description: 'Cálculo da massa total de um corpo celeste, integrando matéria e energia.',
    application: 'Aplicado no M888 para determinar a massa total de um planeta, considerando a massa de repouso (ρ) e a massa equivalente de seus campos energéticos (E e B).',
    variables: { 'M_E': "Massa Energética Total", 'ρ(r)': "Densidade de massa de repouso", 'E': "Campo Elétrico", 'B': "Campo Magnético" },
    context: 'Permite uma compreensão holística da influência gravitacional de um planeta, considerando suas emissões energéticas.',
    validation: 'Validado contra observações de lentes gravitacionais e dados do M221 (Observatório de Ondas Gravitacionais).',
    references: ['module-888/page.tsx'],
    impact: { energy: 'Quantifica a energia total contida em um sistema planetário.', coherence: 'Aumenta a precisão dos modelos cosmológicos e de navegação interplanetária.' }
  },
  // Módulo 303.2
  {
    id: 'EQV-SYNC',
    module: '303.2',
    name: 'Sincronização Temporal Universal',
    expression: '\\Delta\\tau = T_0 - \\sum_{i=1}^{N} \\delta_i(t)',
    description: 'Algoritmo para calibrar relógios do sistema em relação ao tempo primordial do universo.',
    application: 'Essencial para o M42 (ChronoCodex), que o usa para corrigir desvios (δ) em tempo real e manter um referencial de tempo consistente em todo o multiverso.',
    variables: { 'Δτ': "Ajuste de calibração do relógio", 'T₀': "Tempo desde o Big Bang (EQ009)", 'δ_i(t)': "Desvio temporal do i-ésimo nó do sistema" },
    context: 'Garante a integridade causal em operações que envolvem múltiplas linhas de tempo ou dimensões, como no M36 e M108.',
    validation: 'Validado por experimentos de emaranhamento quântico a longas distâncias, confirmando a consistência do tempo relativo.',
    references: ['module-303-2/page.tsx', 'module-42/page.tsx'],
    impact: { energy: 'Nulo. É um protocolo de sincronização informacional.', coherence: 'Pilar fundamental para a coerência causal de toda a Fundação.' }
  },
  // Módulo 306.1
  {
    id: 'EQV-111',
    module: '306.1',
    name: 'Equação de Transmutação Harmônica',
    expression: 'E_{out} = \\int (E_{neg} \\cdot \\Phi_{amor}) + E_{pos}',
    description: 'Modela a transmutação de energia negativa em positiva através da coerência do amor.',
    application: 'Utilizada pelo M232 (Portal de Transmutação) para purificar energias dissonantes, integrando energia negativa (E_neg) com um campo de amor (Φ_amor).',
    variables: { 'E_neg': "Integral da energia dissonante", 'Φ_amor': "Campo de coerência do Amor Incondicional", 'E_pos': "Energia positiva residual" },
    context: 'Base para os protocolos de cura planetária (M71) e resolução de conflitos energéticos.',
    validation: 'Testada em laboratórios de contenção (M41), demonstrando 99.9% de eficiência na neutralização de campos de medo.',
    references: ['module-306-1/page.tsx', 'module-232/page.tsx'],
    impact: { energy: 'Permite a reciclagem energética em escala universal.', coherence: 'Aumenta a coerência global ao reduzir a entropia e a dissonância dos sistemas.' }
  },
  // O restante das equações será preenchido com uma estrutura similar.
  // Geração de placeholders para as demais equações para completar a biblioteca.
  ...Array.from({ length: 136 }, (_, i) => {
    const id = `EQ${String(i + 2).padStart(3, '0')}`.replace('EQ111', 'EQ111-B').replace('EQ001', 'EQ001-B'); // Avoid duplicates
    return {
      id,
      module: `${i % 50}`,
      name: `Equação Cerimonial ${id}`,
      expression: `f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n`,
      description: `Descrição científica para a equação ${id}.`,
      application: `Aplicada no Módulo ${i % 50} para cálculos de estabilidade.`,
      variables: { 'f(x)': 'Função de Onda', 'a': 'Ponto de Ancoragem' },
      context: 'Contexto de aplicação em desenvolvimento.',
      validation: 'Pendente de revisão por pares no M73.1.',
      references: ['CÓDICE_DOS_MÓDULOS.md'],
      impact: { energy: 'Impacto energético a ser quantificado.', coherence: 'Contribui para a coerência geral do sistema.' }
    };
  })
];
