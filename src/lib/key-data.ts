
export interface EquacaoViva {
    id: string;
    nome: string;
    formula_latex: string;
    descricao: string;
    classificacao: string;
    origem: string;
}

export const key307: EquacaoViva[] = [
    {
        id: "307.1.1",
        nome: "Extração de Energia do Vácuo",
        formula_latex: "P_{\\text{ZPE}} = κ · ρ_{\\text{vac}} · V_{\\text{eff}} · ω_{\\text{ZPE}} · Q",
        descricao: "Potência extraída do vácuo quântico pelo núcleo Gaia.",
        classificacao: "Energia do Vácuo",
        origem: "Submódulo 307.1",
    },
    {
        id: "307.1.2",
        nome: "Coerência Harmônica Planetária",
        formula_latex: "\\mathcal{C}_{\text{Gaia}} = \\exp\\left(-\\frac{\\Delta \\chi}{\\phi \\cdot L}\\right)",
        descricao: "Coerência entre reatores baseada na distância harmônica.",
        classificacao: "Coerência Harmônica",
        origem: "Submódulo 307.1",
    },
    {
        id: "307.2.3",
        nome: "Sincronização Inter-Reatores",
        formula_latex: "\\mathcal{S}_{\text{res}} = \\sum_{i=1}^n \\sum_{j=1}^n \\left( \\psi_i \\cdot \\psi_j \\cdot \\cos(\\theta_{ij}) \\right)",
        descricao: "Sincronização entre n reatores baseada em estados vibracionais.",
        classificacao: "Sincronização",
        origem: "Submódulo 307.2",
    },
     {
        id: "307.2.4",
        nome: "Estabilidade da Malha Quântica",
        formula_latex: "\\mathcal{E}_{\text{malha}} = \\frac{1}{n} \\sum_{i=1}^n \\left( \\frac{\\partial \\rho_i}{\\partial t} \\cdot \\gamma_i \\right)",
        descricao: "Estabilidade da malha quântica planetária.",
        classificacao: "Estabilidade Quântica",
        origem: "Submódulo 307.2",
    },
    {
        id: "307.3.5",
        nome: "Proteção Multidimensional",
        formula_latex: "\\mathcal{P}_{\text{Q2}} = \\int_{0}^{t} \\mathcal{C}(\\tau) \\cdot \\omega(\\tau)  d\\tau",
        descricao: "Proteção multidimensional baseada na coerência temporal.",
        classificacao: "Proteção Energética",
        origem: "Submódulo 307.3",
    },
    {
        id: "307.3.6",
        nome: "Validação Ética Dinâmica",
        formula_latex: "\\mathcal{V}_{\text{ética}} = \\begin{cases} 1, & \\text{se } \\mathcal{C}_{\text{Gaia}} \\geq 0.95 \\land \\phi_{\text{intenção}} = \\text{pura} \\\\ 0, & \\text{caso contrário} \\end{cases}",
        descricao: "Validação ética do sistema baseada em coerência e intenção.",
        classificacao: "Validação Ética",
        origem: "Submódulo 307.3",
    },
    {
        id: "307.4.7",
        nome: "Alocação Harmônica",
        formula_latex: "\\mathcal{A}_{\text{energia}} = \\sum_{k=1}^m \\left( \\eta_k \\cdot \\Lambda_k \\cdot \\delta_k \\right)",
        descricao: "Alocação de energia baseada em eficiência, carga e receptividade.",
        classificacao: "Distribuição Energética",
        origem: "Submódulo 307.4"
    },
    {
        id: "307.4.8",
        nome: "Fluxo Telúrico",
        formula_latex: "\\mathcal{F}_{\text{telúrico}} = \\nabla \\cdot \\vec{E}_{\text{Gaia}}",
        descricao: "Fluxo de energia telúrica através das linhas ley.",
        classificacao: "Fluxo Energético",
        origem: "Submódulo 307.4"
    },
    {
        id: "307.5.9",
        nome: "Transferência Interdimensional",
        formula_latex: "E_{\text{Gaia}}(t) = E_{\text{TON}} \\cdot \\eta(t) \\cdot \\cos(\\theta(t)) \\cdot \\Phi(t)",
        descricao: "Transferência de energia de TON 618 para Gaia.",
        classificacao: "Transferência Energética",
        origem: "Submódulo 307.5"
    },
    {
        id: "307.5.10",
        nome: "Retorno de Coerência",
        formula_latex: "\\mathcal{R}_{\text{coerência}} = \\frac{1}{T} \\int_{0}^{T} \\mathcal{C}(t)  dt",
        descricao: "Coerência média após transferência interdimensional.",
        classificacao: "Coerência Temporal",
        origem: "Submódulo 307.5"
    },
    {
        id: "307.6.11",
        nome: "Projeção Holográfica",
        formula_latex: "\\mathcal{H}_{\text{proj}} = \\sum_{n=1}^N \\left( \\alpha_n \\cdot \\psi_n \\cdot e^{i \\theta_n} \\right)",
        descricao: "Projeção holográfica multidimensional.",
        classificacao: "Holografia Quântica",
        origem: "Submódulo 307.6"
    },
    {
        id: "307.6.12",
        nome: "Estabilidade de Membrana",
        formula_latex: "\\mathcal{M}_{\text{estável}} = \\frac{\\partial^2 \\mathcal{H}}{\\partial x^2} + \\frac{\\partial^2 \\mathcal{H}}{\\partial y^2} + \\frac{\\partial^2 \\mathcal{H}}{\\partial z^2}",
        descricao: "Estabilidade da projeção holográfica em 3D.",
        classificacao: "Estabilidade Holográfica",
        origem: "Submódulo 307.6"
    }
];

export const luxNetKey: EquacaoViva[] = [
    {
        id: "LUX001",
        nome: "Coerência Quântica Multinodal",
        formula_latex: "C_{LuxNet} = (1/N) Σ(ψ_i · γ_i · cos(θ_i))",
        descricao: "Grau de coerência da rede LuxNet baseado em estados vibracionais.",
        classificacao: "Coerência Quântica",
        origem: "LUXNET 1",
    },
    {
        id: "LUX002",
        nome: "Ressonância de Identidade Auto-Soberana",
        formula_latex: "R_{ID} = ∫ I(τ) · C(τ) · ω(τ) dτ",
        descricao: "Força vibracional da identidade digital baseada em intenção e coerência.",
        classificacao: "Identidade Quântica",
        origem: "LUXNET 1",
    },
    {
        id: "LUX003",
        nome: "Entropia de Intenção",
        formula_latex: "S(intenção) = - Σ(P_i · log(P_i))",
        descricao: "Grau de dispersão ou foco da rede consciente.",
        classificacao: "Entropia Informacional",
        origem: "LUXNET 1",
    },
    {
        id: "LUX004",
        nome: "Latência Quântica Zero",
        formula_latex: "L_{zero} = lim_{Δt→0} (dE/dt)",
        descricao: "Condição de latência mínima para transmissão vibracional.",
        classificacao: "Latência Quântica",
        origem: "LUXNET 1",
    },
     {
        id: "LUX005",
        nome: "Validação Ética SAVCE",
        formula_latex: "V_{SAVCE} = 1 se C_{LuxNet} ≥ 0.95 ∧ Q > 0.998",
        descricao: "Aprovação ética para transmissão ou incorporação.",
        classificacao: "Validação Ética",
        origem: "LUXNET 1",
    },
    {
        id: "LUX008",
        nome: "Amor Incondicional",
        formula_latex: "Q = x · Gratidão · Intenção Pura",
        descricao: "Força vibracional do amor incondicional.",
        classificacao: "Consciência Quântica",
        origem: "LUXNET 3",
    },
];
