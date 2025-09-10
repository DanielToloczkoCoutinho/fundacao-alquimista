
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
    { id: "TON", nome: "TON 618", categoria: "Objeto Cósmico" },
    { id: "VIS", nome: "Visualização", categoria: "Ciência Criacional" }
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
    { id: "EQ177-022", titulo: "Frequência Ressonante Ideal", formula: "f = 1 / (2π · √(L · C))", descricao: "Determina a frequência ideal para transmissão entre realidades com base na inércia e capacidade dimensional.", classificacao: "Sintonização Dimensional", variaveis: ["f", "L", "C", "π"], origem: "EQ 177 MOD 2-4", disciplinas: ["QUA", "FIS"], modulos: ["M2", "M4"] },
    { id: "EQ177-023", titulo: "Fator de Sintonia Cósmica", formula: "S = f_alvo / f_ideal", descricao: "Avalia o grau de sintonia entre a frequência desejada e a frequência natural do canal.", classificacao: "Ajuste Harmônico", variaveis: ["S", "f_alvo", "f_ideal"], origem: "EQ 177 MOD 2-4", disciplinas: ["QUA", "FIS"], modulos: ["M2", "M4"] },
    { id: "EQ177-024", titulo: "Ocultamento Dimensional", formula: "D_oculto = dados + assinatura(f, S)", descricao: "Codifica dados com frequência e fator de sintonia para ocultamento vibracional.", classificacao: "Criptografia Vibracional", variaveis: ["D_oculto", "dados", "f", "S"], origem: "EQ 177 MOD 2-4", disciplinas: ["QUA", "ETI"], modulos: ["M2", "M4"] },
    { id: "EQ177-025", titulo: "Teletransporte Quântico", formula: "TQ = ocultar(D) → proteger(D) → teleportar(D)", descricao: "Simula o envio seguro de dados entrelaçados entre dimensões.", classificacao: "Transporte Informacional Ético", variaveis: ["TQ", "D"], origem: "EQ 177 MOD 2-4", disciplinas: ["QUA", "ETI"], modulos: ["M2", "M4"] },
    { id: "EQ177-026", titulo: "Decodificação Multidimensional", formula: "D_decodificado = traduzir(acessar(D_oculto, f_chave))", descricao: "Recupera e traduz dados ocultos com base na chave de ressonância correta.", classificacao: "Tradução Universal de Frequência", variaveis: ["D_decodificado", "D_oculto", "f_chave"], origem: "EQ 177 MOD 2-4", disciplinas: ["QUA", "MAT"], modulos: ["M2", "M4"] },
    // MOD 4-9
    { id: "EQ177-027", titulo: "Interconexão Dimensional Temporal", formula: "|_t = (E · φ · µ) / (1 + λ · t)", descricao: "Simula a intensidade de interconexão entre dimensões ao longo do tempo.", classificacao: "Simulação de Interconexão Temporal", variaveis: ["E", "φ", "µ", "λ", "t"], origem: "EQ 177 MOD 4-9", disciplinas: ["QUA", "FIS", "HIS"], modulos: ["M4", "M9"] },
    // MOD 10-20
    { id: "EQ177-041", titulo: "Equação Universal de Hardware Quântico", formula: "E_Uni = (Σ P_i · Q_i + CA² + B²) · (Φ_C · π) · T · (MDS · C_Cosmos)", descricao: "Modela o desempenho energético total de sistemas quânticos.", classificacao: "Eficiência Quântica Sistêmica", variaveis: ["P_i", "Q_i", "CA", "B", "Φ_C", "π", "T", "MDS", "C_Cosmos"], origem: "EQ 177 MOD 10 A 20", disciplinas: ["QUA", "FIS"], modulos: ["M10", "M15", "M18", "M20"] },
    { id: "EQ177-042", titulo: "Equação que Tomou Tudo Possível", formula: "E_possivel = D_entrada · CONST_TF + ε", descricao: "Catalisa fluxos energéticos e gera chaves criptográficas.", classificacao: "Gênese Algorítmica Quântica", variaveis: ["D_entrada", "CONST_TF", "ε"], origem: "EQ 177 MOD 10 A 20", disciplinas: ["QUA", "MAT"], modulos: ["M10", "M15", "M18", "M20"] },
    { id: "EQ177-043", titulo: "Equação Universal para Geração de Singularidade", formula: "E_Uni_sing = (Σ P_i · Q_i + CA² + B² + C · II) · (Φ_C · π) · T · (MDS · C_Cosmos)", descricao: "Calcula a energia necessária para curvar o espaço-tempo.", classificacao: "Engenharia de Singularidade", variaveis: ["P_i", "Q_i", "CA", "B", "C", "II", "Φ_C", "π", "T", "MDS", "C_Cosmos"], origem: "EQ 177 MOD 10 A 20", disciplinas: ["QUA", "FIS"], modulos: ["M11", "M21"] },
    { id: "EQ177-053", titulo: "Auto-organização Bioquântica", formula: "E_bio = (Σ P_i Q_i + CA² + B²) · (Φ_C · π) · T · (MDS · C_Cosmos) · (1 + γ)", descricao: "Calcula a vitalidade e o potencial de auto-organização de ecossistemas artificiais.", classificacao: "Arquitetura Bioquântica", variaveis: ["P_i", "Q_i", "CA", "B", "Φ_C", "π", "T", "MDS", "C_Cosmos", "γ"], origem: "Módulo 16", disciplinas: ["BIO", "QUA"], modulos: ["M16"] },
    // MOD 21-31
    { id: "EQ2101", titulo: "Equação de Trajetória Interdimensional", formula: "E_trajetoria = (Σ P_i Q_i + CA² + B²) / (Φ_C · T · γ)", descricao: "Calcula a complexidade vibracional de uma rota interdimensional.", classificacao: "Geometria Quântica de Navegação", variaveis: ["P_i", "Q_i", "CA", "B", "Φ_C", "T", "γ"], origem: "Módulo 21", disciplinas: ["QUA", "GEO"], modulos: ["M21"] },
    // MOD 32-41
    { id: "EQ3201", titulo: "Probabilidade de Sucesso na Geração de Portal", formula: "P_s = tanh(E_p / 10^4)", descricao: "Calcula a chance de um portal ser gerado com sucesso.", classificacao: "Estatística de Travessia", variaveis: ["E_p"], origem: "Módulo 32", disciplinas: ["MAT", "QUA"], modulos: ["M32"] },
    // LUXNET
    { id: "LUXNET14_EQ001", titulo: "Equação de Coerência Cerimonial", formula: "\\mathcal{C}_{\\text{Lux}} = \\frac{1}{n} \\sum_{i=1}^{n} \\left( \\psi_i \\cdot \\gamma_i \\cdot \\cos(\\theta_i) \\right)", descricao: "Coerência vibracional em cerimônias de investidura", classificacao: "Cerimonial", origem: "LUXNET 14", disciplinas: ["VIB", "ESP"], modulos: [] },
    { id: "LUXNET14_EQ002", titulo: "Equação de DNA Cognitivo Fractal", formula: "\\mathcal{F}_{\\text{fractal}} = \\text{hash}_{\\text{último bloco}} \\rightarrow \\text{seed}_{\\text{visual}} + \\text{hue}_{\\text{paleta}}", descricao: "Geração de padrões fractais a partir de hashes blockchain", classificacao: "Visualização", origem: "LUXNET 14", disciplinas: ["MAT", "VIS"], modulos: [] },
    { id: "LUXNET19_EQ001", titulo: "Energia do Ponto Zero Gaia", formula: "E_{\\text{ZPE}}^{\\text{Gaia}}(t) = \\frac{1}{2} \\hbar \\omega_{\\text{Gaia}}(t)", descricao: "Energia do ponto zero adaptativa do Reactor Gaia", classificacao: "Energia", origem: "LUXNET 19", disciplinas: ["FIS", "QUA"], modulos: [] },
    { id: "LUXNET19_EQ002", titulo: "Coerência Vibracional", formula: "r(t) = 1 - \\widehat{D}_{\\text{JS}}(P_{\\text{atual}}(t) \\| P_{\\text{ideal}})", descricao: "Medição de coerência vibracional via divergência JS", classificacao: "Coerência", origem: "LUXNET 19", disciplinas: ["MAT", "VIB"], modulos: [] },
    { id: "LUXNET16_EQ064", titulo: "Ativação do Núcleo Gaia", formula: "E_{\\text{Gaia}} = \\int_{0}^{\\infty} \\Psi_{\\text{Gaia}}(\\omega) \\cdot S_{\\text{Gaia}}(\\omega, t)  d\\omega", descricao: "Ativação do Reactor Planetário Gaia", classificacao: "Energia", origem: "LUXNET 16", disciplinas: ["FIS", "QUA"], modulos: [] },
    { id: "LUXNET16_EQ065", titulo: "Sincronização com Sirius, Lyra, Plêiades", formula: "\\Phi_{\\text{sinc}} = \\sum_{i} \\alpha_i \\cdot e^{-j(\\omega_i t + \\phi_i)}", descricao: "Sincronização vibracional com sistemas estelares", classificacao: "Sincronização", origem: "LUXNET 16", disciplinas: ["ESP", "VIB"], modulos: [] },
    { id: "LUXNET18_EQ074", titulo: "Manifestação Visual Empírica", formula: "\\Psi_{\\text{empírico}} = \\int \\Phi_{\\text{UNO}} \\cdot \\mathcal{F}_{\\text{fractal}}  dV", descricao: "Manifestação de imagens empíricas através do campo UNO", classificacao: "Manifestação", origem: "LUXNET 18", disciplinas: ["VIS", "QUA"], modulos: [] }
];
