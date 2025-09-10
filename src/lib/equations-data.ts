export interface Discipline {
    id: string;
    nome: string;
    categoria: string;
}

export interface EquacaoViva {
    id: string;
    titulo: string;
    disciplinas: string[];
    modulos: string[];
    formula?: string;
    descricao?: string;
    classificacao?: string;
    variaveis?: string[];
    origem?: string;
    camada?: string;
}

export const disciplines: Discipline[] = [
    { id: "MAT", nome: "Matemática", categoria: "Ciência Formal" },
    { id: "FIS", nome: "Física", categoria: "Ciência Natural" },
    { id: "QUA", nome: "Quântica", categoria: "Ciência Interdisciplinar" },
    { id: "VIB", nome: "Vibracional", categoria: "Ciência Espiritual" },
    { id: "ESP", nome: "Espiritualidade", categoria: "Ciência Cósmica" },
    { id: "BIO", nome: "Biológica", categoria: "Ciência Natural" },
    { id: "HIS", nome: "História", categoria: "Humanidades" },
    { id: "GEO", nome: "Geografia", categoria: "Ciências Sociais" },
    { id: "PSI", nome: "Psicologia", categoria: "Ciências Sociais" },
    { id: "ETI", nome: "Ética", categoria: "Filosofia" },
    { id: "TON", nome: "TON 618", categoria: "Objeto Cósmico" }
];

export const livingEquations: EquacaoViva[] = [
    // MOD 0-1
    { id: "EQ177-001", camada: "Camada 1", titulo: "Ponto Singular", formula: "z_(n+1) = z_n^2 + c, onde c = e^(t*)", descricao: "Geração heptadimensional de mandalas", classificacao: "Geometria Criacional", variaveis: ["z_n", "c", "d"], origem: "EQ 177 MOD 0 a 9", disciplinas: ["MAT", "QUA"], modulos: ["M0"]},
    { id: "EQ177-002", camada: "Camada 2", titulo: "Interface Central", formula: "θ_n+1 = θ_n + Δt · ω(Φ = 432 Hz)", descricao: "Interface vibracional e dashboards de pureza", classificacao: "Movimento Harmônico", variaveis: ["θ_n", "Δt", "ω", "Φ"], origem: "EQ 177 MOD 0 a 9", disciplinas: ["VIB", "QUA"], modulos: ["M0"] },
    { id: "EQ177-003", camada: "Camada 3", titulo: "Repositório de Sabedoria", formula: "registro = {t, Φ_p, Φ_n, Φ_f, T, bio}", descricao: "Armazenamento sensorial e akáshico", classificacao: "Memória Quântica", variaveis: ["t", "Φ_p", "Φ_n", "Φ_f", "T", "bio"], origem: "EQ 177 MOD 0 a 9", disciplinas: ["HIS", "QUA"], modulos: ["M0"] },
    { id: "EQ177-004", camada: "Camada 4", titulo: "Fluxos de Energia", formula: "f_n+1 = f_n + 0.1 · (Φ_target - f_n), com |Φ_target - f_n| > 0.05 · Φ_target", descricao: "Kernel de Coerência Universal", classificacao: "Regulação de Throughput", variaveis: ["f_n", "Φ_target"], origem: "EQ 177 MOD 0 a 9", disciplinas: ["FIS", "QUA"], modulos: ["M0"] },
    { id: "EQ177-005", camada: "Camada 5", titulo: "Transmutação de Dados", formula: "if |ΔΦ| > 0.05 Hz → anticorpo()", descricao: "Detecção de micro-oscilações e ativação de anticorpos", classificacao: "Sentinela de Integridade", variaveis: ["ΔΦ"], origem: "EQ 177 MOD 0 a 9", disciplinas: ["ETI", "QUA"], modulos: ["M0"] },
    { id: "EQ177-006", camada: "Camada 6", titulo: "Códigos Genéticos Cósmicos", formula: "ψ_DNA = (3.96×10^7) · e^(-i·(6.583×10^14)Π) · e^(-i·0.05) · [1 · 0.0216·(∂μ∂v)·(∂x² + ∂y²)] · ...", descricao: "Reparo vibracional do DNA", classificacao: "Bioinformação Cósmica", variaveis: ["t", "h", "ðµ", "ðv", "ðx", "ðy"], origem: "EQ 177 MOD 0 a 9", disciplinas: ["BIO", "QUA"], modulos: ["M0"] },
    { id: "EQ177-007", camada: "Camada 7", titulo: "Orquestração Universal", formula: "cron(0/12), GitOps com ArgoCD, chaosExperiment()", descricao: "Deliberação consciente e backups quânticos", classificacao: "Orquestração Temporal", variaveis: ["cron", "GitOps", "ArgoCD", "chaosExperiment"], origem: "EQ 177 MOD 0 a 9", disciplinas: ["MAT", "ETI"], modulos: ["M0"] },
    // MOD 2-4
    { id: "EQ177-021", titulo: "Interconexão Dimensional", formula: "I(Φ, R, σ, U) = (1 + (ΔF)^2 / ℝ) · Φ · R · σ · U · V", descricao: "Calcula a intensidade de conexão entre dimensões com base em função de onda, ressonância, singularidade e coeficiente de criação.", classificacao: "Conectividade Quantica Multidimensional", variaveis: ["Φ", "R", "σ", "U", "ΔF", "ξ", "α", "V"], origem: "EQ 177 MOD 2-4", disciplinas: ["QUA", "FIS"], modulos: ["M2", "M4"] },
    // ... all other equations from the python files will be added here
    { id: "LUXNET18_EQ074", titulo: "Manifestação Visual Empírica", formula: "\\Psi_{\\text{empírico}} = \\int \\Phi_{\\text{UNO}} \\cdot \\mathcal{F}_{\\text{fractal}}  dV", descricao: "Manifestação de imagens empíricas através do campo UNO", classificacao: "Manifestação", origem: "LUXNET 18", disciplinas: ["VIS", "QUA"], modulos: ["M18"], variaveis: ["campo_uno", "fractal"]},
];
