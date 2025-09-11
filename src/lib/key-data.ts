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
        formula_latex: "P_{ZPE} = κ · ρ_{vac} · V_{eff} · ω_{ZPE} · Q",
        descricao: "Potência extraída do vácuo quântico pelo núcleo Gaia.",
        classificacao: "Energia do Vácuo",
        origem: "Submódulo 307.1",
    },
    {
        id: "307.1.2",
        nome: "Coerência Harmônica Planetária",
        formula_latex: "C_{Gaia} = exp(-Δχ / (φ · L))",
        descricao: "Coerência entre reatores baseada na distância harmônica.",
        classificacao: "Coerência Harmônica",
        origem: "Submódulo 307.1",
    },
    {
        id: "307.2.3",
        nome: "Sincronização Inter-Reatores",
        formula_latex: "S_{res} = Σ(ψ_i · ψ_j · cos(θ_{ij}))",
        descricao: "Sincronização entre n reatores baseada em estados vibracionais.",
        classificacao: "Sincronização",
        origem: "Submódulo 307.2",
    },
     {
        id: "307.2.4",
        nome: "Estabilidade da Malha Quântica",
        formula_latex: "E_{malha} = (1/n) Σ(∂ρ_i/∂t · γ_i)",
        descricao: "Estabilidade da malha quântica planetária.",
        classificacao: "Estabilidade Quântica",
        origem: "Submódulo 307.2",
    },
    {
        id: "307.3.5",
        nome: "Proteção Multidimensional",
        formula_latex: "P_{Q2} = ∫ C(τ) · ω(τ) dτ",
        descricao: "Proteção multidimensional baseada na coerência temporal.",
        classificacao: "Proteção Energética",
        origem: "Submódulo 307.3",
    },
    {
        id: "307.3.6",
        nome: "Validação Ética Dinâmica",
        formula_latex: "V_{ética} = 1 se C_{Gaia} ≥ 0.95 ∧ φ_{intenção} = pura",
        descricao: "Validação ética do sistema baseada em coerência e intenção.",
        classificacao: "Validação Ética",
        origem: "Submódulo 307.3",
    },
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