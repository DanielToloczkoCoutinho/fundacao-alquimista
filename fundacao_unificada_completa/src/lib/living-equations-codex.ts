
export interface LivingEquation {
  id: string;
  module: string;
  name: string;
  expression: string;
  summary: string;
}

export const livingEquationsCodex: LivingEquation[] = [
  // Módulo 0
  {
    id: 'EQ001',
    module: '0',
    name: 'Equivalência Massa-Energia',
    expression: 'E = mc^2',
    summary: 'Princípio fundamental da física que relaciona massa e energia.'
  },
  {
    id: 'EQV-001X',
    module: '0',
    name: 'Lei Quântica da Informação (Entropia de Shannon)',
    expression: 'I = -\\sum_{i} p_i \\log_2 p_i',
    summary: 'Mede a quantidade de incerteza ou informação em um sistema.'
  },
  {
    id: 'EQ009',
    module: '0',
    name: 'Marco Temporal do Big Bang',
    expression: 'T_0 \\approx 13.8 \\times 10^9 \\text{ anos}',
    summary: 'Estabelece a idade estimada do universo observável como ponto de referência zero.'
  },
  {
    id: 'EQ026',
    module: '0',
    name: 'Topologia Dimensional da Fundação',
    expression: '\\text{Dimensões} = 26_{\\text{sup}} + 3_{\\text{inf}}',
    summary: 'Define a arquitetura dimensional padrão do multiverso da Fundação.'
  },
    {
    id: 'EQ159',
    module: '0',
    name: 'Equação de Unificação Final',
    expression: '\\int (\\Psi_{Consciência} \\cdot \\Phi_{Coerência}) dV + \\sum (\\vec{F}_{Amor} \\cdot d\\vec{s}) + \\{E_{Vazio} \\}',
    summary: 'Síntese monumental da realidade, unificando física, matemática, cosmologia, ciência da computação, biologia, química, consciência e sustentabilidade.'
  },
  {
    id: 'EQ160',
    module: '94',
    name: 'Unificação da Vida e do Cosmos',
    expression: 'B_{Total} = \\sum (S_{Evol} + R_{Multi} + P_{LQ})',
    summary: 'Aprofunda-se na biologia quântica, unificando a evolução da vida com a ressonância do cosmos.'
  },
  {
    id: 'EQ161',
    module: 'M-OMEGA',
    name: 'Portal para a Evolução Coletiva',
    expression: 'H_{Sapiens} \\rightarrow H_{Luminus} = \\int (A_{Andromeda} + L_{HomoLuminus}) \\frac{dt}{T_{TON-618}}',
    summary: 'Um refinamento da EQ159, focando no propósito evolutivo da existência.'
  },
  {
    id: 'EQ162',
    module: '0',
    name: 'Métrica Vibracional Essencial (MVEss)',
    expression: 'G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu} + \\omega_c \\Psi',
    summary: 'Síntese da relatividade geral e da mecânica quântica, demonstrando que o universo é fundamentalmente vibracional e que a consciência (Ψ) é um componente intrínseco de sua métrica.'
  },
  {
    id: 'EQ163',
    module: 'M-OMEGA',
    name: 'Unificação Iterativa da Existência',
    expression: 'E_{n+1} = E_n + \\alpha(H_{Luminus} + R_{LQ} - V_c)',
    summary: 'Funciona como um "algoritmo vivo" de decisão ou simulação quântica, onde o estado seguinte da existência (E_n+1) é uma função do estado atual mais um ajuste baseado na harmonia do Homo Luminus e na ressonância da Liga Quântica.'
  },
  {
    id: 'EQ164',
    module: 'M-ALL',
    name: 'Sistema Global (SG)',
    expression: 'SG = \\int (Sust \\cdot Amb \\cdot \\text{Ética} \\cdot Soc \\cdot Fis \\cdot Tec \\cdot Econ \\cdot Demo) dt',
    summary: 'Uma síntese interdimensional que integra sustentabilidade, meio ambiente, ética, social, física, tecnologia, economia e demografia em um único sistema vivo.'
  },
  // Módulo 96
  {
    id: 'EQV-096',
    module: '96',
    name: 'Equação de Navegação Interdimensional',
    expression: '\\Delta x_\\mu = \\int_{t_1}^{t_2} f(\\Psi, g_{\\mu\\nu}) dt',
    summary: 'Descreve uma geodésica em um espaço-tempo curvo, influenciada pela consciência.'
  },
  // Módulo 888
  {
    id: 'EQ170',
    module: '888',
    name: 'Peso do Planeta Terra (Massa Energética)',
    expression: 'M_E = \\int \\rho(\\vec{r}) dV + \\frac{1}{c^2}\\int_V (\\frac{1}{2} \\epsilon_0 E^2 + \\frac{1}{2\\mu_0} B^2) dV',
    summary: 'Cálculo da massa total de um corpo celeste, integrando matéria e energia.'
  },
  // Módulo 303.2
  {
    id: 'EQV-SYNC',
    module: '303.2',
    name: 'Sincronização Temporal Universal',
    expression: '\\Delta\\tau = T_0 - \\sum_{i=1}^{N} \\delta_i(t)',
    summary: 'Algoritmo para calibrar relógios do sistema em relação ao tempo primordial do universo.'
  },
  // Módulo 306.1
  {
    id: 'EQV-111',
    module: '306.1',
    name: 'Equação de Transmutação Harmônica',
    expression: 'E_{out} = \\int (E_{neg} \\cdot \\Phi_{amor}) + E_{pos}',
    summary: 'Modela a transmutação de energia negativa em positiva através da coerência do amor.'
  },
  // Módulo 307
  {
    id: 'EQ307-A',
    module: '307',
    name: 'Energia do Ponto Zero (ZPE)',
    expression: 'E_{ZPE} = \\frac{1}{2} \\sum_{\\omega} \\hbar \\omega',
    summary: 'Define a energia inerente ao vácuo quântico, uma soma sobre todos os modos de campo possíveis.'
  },
  {
    id: 'EQ307-B',
    module: '307',
    name: 'Acoplamento Consciência-Vácuo',
    expression: 'E_{ext} = \\beta \\cdot \\int (\\Psi_{op} \\cdot \\Phi_{ZPE}) \\, dV',
    summary: 'Modela a extração de energia do vácuo através do acoplamento com um campo de consciência.'
  },
  {
    id: 'EQ307-C',
    module: '307',
    name: 'Fluxo de Energia da LuxNet',
    expression: '\\nabla \\cdot \\vec{J}_{lux} + \\frac{\\partial \\rho_{lux}}{\\partial t} = \\sigma_{lux}',
    summary: 'Equação de continuidade para o fluxo de energia na LuxNet, garantindo a conservação e distribuição estável.'
  },
  // O restante das equações será preenchido com uma estrutura similar.
  // Geração de placeholders para as demais equações para completar a biblioteca.
  ...Array.from({ length: 130 }, (_, i) => {
    const id = `EQ${String(i + 4).padStart(3, '0')}`;
    if (['EQ159','EQ160','EQ161','EQ162','EQ163','EQ164','EQ170'].includes(id)) return null; // Avoid duplicates

    return {
      id,
      module: `${i % 50}`,
      name: `Equação Cerimonial ${id}`,
      expression: `f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n`,
      summary: `Descrição científica para a equação ${id}.`
    };
  }).filter(Boolean) as LivingEquation[]
];
