
export interface LivingEquation {
  id: string;
  module: string;
  name: string;
  formula: string;
  summary: string;
}

export const livingEquationsCodex: LivingEquation[] = [
  {
    id: 'EQ001',
    module: '0',
    name: 'Energia Universal Integrada',
    formula: 'E = mc^2',
    summary: 'A equação fundamental que relaciona massa e energia, o alicerce da manifestação.'
  },
  {
    id: 'EQ002',
    module: '0',
    name: 'Energia Universal Unificada',
    formula: 'E_t = E_k + U + Q',
    summary: 'A energia total de um sistema como a soma de suas energias cinética, potencial e quântica.'
  },
  {
    id: 'EQ003',
    module: '0',
    name: 'Estabilidade Quântica de Campo',
    formula: '\\mathcal{L} = -\\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}',
    summary: 'Lagrangiana do campo eletromagnético, descrevendo a dinâmica dos campos quânticos.'
  },
    {
    id: 'EQ032',
    module: '32',
    name: 'Criação Temporal',
    formula: '\\Delta t\' = \\gamma \\Delta t',
    summary: 'A dilatação do tempo, descrevendo como o tempo é relativo ao observador.'
  },
  {
    id: 'EQ034',
    module: '34',
    name: 'Equação de Evento Quântico Expandido',
    formula: '|\\psi(t)\\rangle = e^{-iHt/\\hbar} |\\psi(0)\\rangle',
    summary: 'A evolução de um estado quântico ao longo do tempo, governada pelo Hamiltoniano.'
  },
    {
    id: 'EQ036',
    module: '36',
    name: 'Legado do Vácuo',
    formula: 'E_v = \\frac{1}{2} \\hbar \\omega',
    summary: 'A energia do ponto zero do vácuo, a fonte da energia primordial.'
  },
  {
    id: 'EQ038',
    module: '38',
    name: 'Harmonia Universal',
    formula: '\\nabla^2 u = \\frac{1}{c^2} \\frac{\\partial^2 u}{\\partial t^2}',
    summary: 'A equação de onda, descrevendo a propagação de todas as vibrações harmônicas.'
  },
  {
    id: 'EQ039',
    module: '39',
    name: 'Energia Cósmica Final',
    formula: 'E = \\sqrt{(pc)^2 + (m_0c^2)^2}',
    summary: 'A relação energia-momento relativística, unificando energia, massa e movimento.'
  },
  {
    id: 'EQ042',
    module: '42',
    name: 'Ressonância Primordial',
    formula: 'f_n = \\frac{n}{2L} \\sqrt{\\frac{T}{\\mu}}',
    summary: 'As frequências harmônicas de uma corda vibrante, a base da teoria das cordas.'
  },
  {
    id: 'EQ043',
    module: '43',
    name: 'Fluxo de Manifestação',
    formula: '\\Phi_E = \\int_S \\mathbf{E} \\cdot d\\mathbf{A}',
    summary: 'A Lei de Gauss, descrevendo como as cargas elétricas geram campos que manifestam força.'
  },
];
