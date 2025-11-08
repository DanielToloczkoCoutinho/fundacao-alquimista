'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// Harmonização da tipagem
export type ModuleThirtySixLogEntry = AnyLogEntry;

// Definição do novo tipo de registro
export type RegistroManifestacaoLuzPrimordial = {
  módulo: 'M36',
  origem: string,
  tipo_estrutura: 'cristal' | 'ambiente' | 'ecossistema' | 'artefato' | 'campo',
  intenção_fundadora: string,
  energia_utilizada: number, // escala 0.0 a 1.0
  alinhamento_etico: 'neutro' | 'harmônico' | 'divino',
  status: 'manifestado' | 'em formação' | 'reabsorvido',
  timestamp: number
};


// ───────── Constantes ─────────
const PHI = (1 + Math.sqrt(5)) / 2;
const CONST_TF = 1.61803398875;
const IDEAL_COERENCIA_MATERIA = 0.99;
const LIMIAR_PUREZA_INTENCAO_BASE = 0.85;
const LIMIAR_RESSONANCIA_MINIMA = 0.75;
const LIMIAR_DISSONANCIA_CRITICA = 0.20;

// ───────── Utils ─────────

const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void => {
  logCallback(entry);
};

// Refinamento da função de registro
export function createLogEntry(entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void {
  registrarEventoUniversal(entry, logCallback);
}

const createLogEntryHelper = (source: AnyLogEntry['source'], step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source,
});


const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const median = (dados: number[]): number => {
    const n = dados.length;
    if (n === 0) return 0.0;
    const s = [...dados].sort((a, b) => a - b);
    const mid = Math.floor(n / 2);
    return n % 2 === 0 ? (s[mid - 1] + s[mid]) / 2.0 : s[mid];
}

const iqr = (dados: number[]): number => {
    const n = dados.length;
    if (n < 4) return 0.0;
    const s = [...dados].sort((a, b) => a - b);
    const q1 = median(s.slice(0, Math.floor(n / 2)));
    const q3 = median(s.slice(Math.ceil(n / 2)));
    return Math.max(0.0, q3 - q1);
}

const FAIXA_ESPERADA: Record<string, [number, number]> = {
    "Criação de um Campo de Abundância Universal": [90.0, 110.0],
    "Elevação Vibracional Planetária": [50.0, 150.0],
    "Domínio sobre Outras Realidades": [90.0, 110.0],
    "Proteção Cósmica": [80.0, 120.0],
    "Ascensão Consciente da Humanidade": [70.0, 130.0],
};


// ───────── Equações vivas base (EQ001–EQ012) ─────────
const EQ008_VerdadeDimensional = (dominio: string, intencao: any): boolean => {
    return (intencao?.descricao || "").toLowerCase().includes(dominio.toLowerCase());
}

const EQ020_Pcreation = (complexidade: number): number => {
    return Math.exp(-0.15 * Math.max(0.0, complexidade - 1.0));
}

const EQ024_Euniverse = (t: number): number => {
    return 1.0 + 0.03 * Math.sin(t * 0.05);
}

const EQ029_Wcreation = (t: number, r: number = 1.0): number => {
    const x = Math.min(Math.max(0.0, 0.02 * t), 2.0);
    return (Math.cosh(x) / Math.max(1.0, r ** 2)) * 0.02 + 1.0;
}

const EQ035_Rcreation = (complexidade: number, omega: number = 1.0): number => {
    return Math.min(1.15, 1.0 + 0.05 * (complexidade * omega));
}

const EQ0085_VibratumQuanticum = (): number => {
    return 0.92;
}

const EQ030_Eharmony = (spread: number): number => {
    return Math.min(0.10, Math.max(0.0, (1.5 - spread) * 0.06));
}

const EQ038_Sharmony = (med: number, low: number, high: number): number => {
    const center = (low + high) / 2.0;
    const prox = 1.0 - Math.min(1.0, Math.abs(med - center) / ((high - low) / 2.0 + 1e-6));
    return 0.04 * prox;
}

const EQ0082_MatrizHarmonica = (): number => {
    return 0.03;
}

const EQ0086_CoherentiumExpansum = (): number => {
    return 0.02;
}

const EQ0097_EthicaLux = (): number => {
    return 0.02;
}

const EQ0093_IntentioRealitas = (pureza: number): boolean => {
    return pureza >= 0.90;
}

const EQ0095_UnitasOmega = (dissonancia_media: number): number => {
    return dissonancia_media < 0.30 ? -0.02 : 0.0;
}

const EQ0043_RessonanciaPrimordial = (): number => {
    return 0.50;
}

const EQ0052_SinteseVibracional = (pureza: number, coerencia: number): number => {
    return (pureza >= 0.85 && coerencia >= 0.85) ? 0.05 : 0.0;
}

const EQ0099_LuxGenesis = (ressonancia: number): number => {
    return Math.min(0.03, Math.max(0.0, (0.80 - ressonancia) * 0.05));
}

const EQ0041_ExpansaoTotal = (dominio: string): number => {
    const altruistas = new Set([
        "Criação de um Campo de Abundância Universal",
        "Proteção Cósmica",
        "Ascensão Consciente da Humanidade",
        "Elevação Vibracional Planetária",
    ]);
    return altruistas.has(dominio) ? 0.02 : 0.0;
}

const EQ0042_ModeloIntegradoFinal = (unificacao: number, energia: number, etica_ok: boolean): number => {
    const base = Math.min(1.0, Math.max(0.0, 0.5 * unificacao + 0.5 * Math.min(1.0, energia / 10000.0)));
    return etica_ok ? base : base * 0.85;
}

const EQ0096_StructuraOmega = (resumo: any): string => {
    const payload = JSON.stringify(resumo, Object.keys(resumo).sort());
    // Simplified hash for client-side
    let hash = 0;
    for (let i = 0; i < payload.length; i++) {
        const char = payload.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return `STRUCTΩ_${hash.toString(16).substring(0, 16)}`;
}

const coerencia_calibrada_suave_v36 = (dados: number[], dominio?: string | null): number => {
    if (!dados || dados.length === 0) return 0.0;
    const med = median(dados);
    const spread = iqr(dados);
    let dist_faixa = 0.0;
    if (dominio && FAIXA_ESPERADA[dominio]) {
        const [low, high] = FAIXA_ESPERADA[dominio];
        const span = Math.max(1e-6, (high - low));
        if (med < low) dist_faixa = ((low - med) / span) * 0.32;
        else if (med > high) dist_faixa = ((med - high) / span) * 0.32;
    }
    let erro = spread * 0.50 + dist_faixa + 1e-6;
    let base = 1.0 / (1.0 + erro);
    base = Math.min(1.0, base + EQ030_Eharmony(spread));
    if (spread < 1.8) {
        base = Math.min(1.0, base + EQ0082_MatrizHarmonica() + EQ0086_CoherentiumExpansum());
    }
    if (dominio && FAIXA_ESPERADA[dominio]) {
        const [low, high] = FAIXA_ESPERADA[dominio];
        base = Math.min(1.0, base + EQ038_Sharmony(med, low, high));
    }
    return Math.max(0.0, Math.min(1.0, base));
};


// Mocks
const mockModule = (name: string, log: LogCallback) => ({
    exec: (action: string, payload?: any) => {
        createLogEntry(createLogEntryHelper(name as AnyLogEntry['source'], 'Execução', `Ação '${action}' recebida`, payload), log);
        return { status: `simulated_ok_${action}` };
    }
});


class Modulo36_ArquitetoLuzPrimordial {
    private modulo01: any;
    private modulo07: any;
    private modulo08: any;
    private modulo09: any;
    private modulo20: any;
    private modulo27: any;
    private modulo34: any;
    private modulo35: any;
    private energia_primordial_disponivel = 1.0e6;
    private historico_dissonancia: number[] = [];
    private mttr_reajuste: number[] = [];

    constructor(private logCallback: LogCallback, private modulo_id: string) {
        createLogEntry(createLogEntryHelper('M36', 'Inicialização', `Arquiteto da Luz Primordial '${this.modulo_id}' inicializado.`), this.logCallback);
        this.modulo01 = mockModule('M1', logCallback);
        this.modulo07 = mockModule('M7', logCallback);
        this.modulo08 = mockModule('M8', logCallback);
        this.modulo09 = mockModule('M9', logCallback);
        this.modulo20 = mockModule('M20', logCallback);
        this.modulo27 = mockModule('M27', logCallback);
        this.modulo34 = mockModule('M34', logCallback);
        this.modulo35 = mockModule('M35', logCallback);
    }
    
    private validar_etica_adaptativa(intencao: any): any {
        const descricao = intencao.descricao || 'Intenção';
        const pureza = intencao.pureza || 0.0;

        if (!EQ008_VerdadeDimensional(descricao, intencao)) {
            return { status: "FALHA_ETICA", mensagem: "Intenção desalinhada ao domínio (Verdade Dimensional)." };
        }

        if (EQ0093_IntentioRealitas(pureza)) {
            return { status: "SUCESSO", mensagem: "Aprovado por intenção pura (EQ0093)." };
        }
        
        const media_diss = this.historico_dissonancia.length > 0 ? median(this.historico_dissonancia.slice(-50)) : 0.0;
        const ajuste = 0.2 * Math.min(0.1, Math.max(0.0, media_diss));
        const delta_ethica = EQ0097_EthicaLux();
        const delta_unitas = EQ0095_UnitasOmega(media_diss);
        const limiar_base = LIMIAR_PUREZA_INTENCAO_BASE + ajuste + delta_ethica + delta_unitas;
        const limiar = Math.min(0.95, Math.max(LIMIAR_PUREZA_INTENCAO_BASE, limiar_base));

        if (pureza >= 0.80 && pureza < limiar) {
            this.ciclos_refino_etico += 1;
            this.modulo08.exec("iniciar_protocolo_cura", { tipo: "Refino_Intencao_Etico", intensidade: 0.58, descricao });
            return { status: "REFINO_ETICO", mensagem: "Intenção em refino ético (ajustar pureza)." };
        }

        return this.modulo34.exec("avaliar_alinhamento_etico_geral", { intencao_operacao: descricao, nivel_pureza: pureza });
    }

    private analisar_consciencia_por_dominio(dados: number[], dominio: string): any {
        createLogEntry(createLogEntryHelper('M35', 'Análise', 'Analisando dados da consciência coletiva...'), this.logCallback);
        if (!dados || dados.length === 0) {
            return { status: "FALHA", mensagem: "Nenhum dado." };
        }

        const c = coerencia_calibrada_suave_v36(dados, dominio);
        const d = 1.0 - c;
        this.historico_dissonancia.push(d);
        if (d >= LIMIAR_DISSONANCIA_CRITICA) {
            this.modulo09.exec("GerarAlertaVisual", { tipo: "CRÍTICO", mensagem: `Dissonância elevada (${d.toFixed(2)}) em ${dominio}` });
            this.ciclos_recuperando += 1;
        }
        return { coerencia: c, dissonancia: d };
    }

    private calcular_energia_manifestacao(complexidade: number, pureza_intencao: number, dominio: string): [number, number, number] {
        const pureza_ajustada = Math.max(0.05, Math.min(1.0, pureza_intencao));
        const tnow = Date.now() / 1000;
        let complexidade_adapt = complexidade;
        const p_anom = Math.random() * 0.8 + 0.05;

        // ... complex energy calculation logic ...
        const energia_requerida = (1000 * (1 + 0.8 * complexidade_adapt) / pureza_ajustada) * (1 + p_anom * 0.1);

        return [Math.min(5.0e6, energia_requerida), complexidade_adapt, p_anom];
    }

    private calcular_ressonancia(pureza: number, coerencia: number, dados_cc: number[]): number {
        const spread = iqr(dados_cc);
        const span = dados_cc.length > 1 ? Math.max(1e-6, Math.max(...dados_cc) - Math.min(...dados_cc)) : 1.0;
        const estabilidade = Math.max(0.0, 1.0 - Math.min(1.0, spread / span));
        const comp_cristalina_raw = Math.sin(coerencia);
        const comp_cristalina = Math.max(0.0, Math.min(0.05, 0.08 * (comp_cristalina_raw + 1.0) / 2.0));
        const piso = EQ0043_RessonanciaPrimordial();
        let r = Math.max(piso, 0.35 * pureza + 0.45 * coerencia + 0.20 * estabilidade);
        r += EQ0052_SinteseVibracional(pureza, coerencia);
        r = Math.min(1.0, Math.max(0.0, r + comp_cristalina));
        return r;
    }
    
    private reajuste_ressonancia_progressivo(r: number, material_id: string, dominio: string, dados_cc: number[]) {
        const start = Date.now();
        let r_atual = r;
        for (let p = 0; p < 3; p++) {
            if (r_atual >= LIMIAR_RESSONANCIA_MINIMA) break;
            const intensidade = 0.6 + 0.2 * Math.max(0.0, (LIMIAR_RESSONANCIA_MINIMA - r_atual));
            this.modulo08.exec("iniciar_protocolo_cura", { tipo: "Reajuste_Ressonancia_Material", intensidade });
            r_atual = Math.min(1.0, r_atual + (0.05 + 0.05 * intensidade) + EQ0099_LuxGenesis(r_atual));
        }
        this.mttr_reajuste.push((Date.now() - start) / 1000);
        return { ressonancia_final: r_atual };
    }

    private ciclos_recuperando: number = 0;
    private ciclos_refino_etico: number = 0;

    async executar_ciclo_manifestacao(especificacao_materia: any, intencao_manifestacao: any) {
        createLogEntry(createLogEntryHelper('M36', 'Ciclo', `Iniciando ciclo: ${intencao_manifestacao.descricao}`), this.logCallback);

        const validacao = this.validar_etica_adaptativa(intencao_manifestacao);
        if (validacao.status !== "SUCESSO") {
            createLogEntry(createLogEntryHelper('M36', 'FALHA', `Ciclo abortado: ${validacao.mensagem}`), this.logCallback);
            return validacao;
        }

        const analise_cc = this.analisar_consciencia_por_dominio(intencao_manifestacao.consciencia_coletiva_dados, intencao_manifestacao.descricao);
        const [energia_requerida, comp_adapt, p_anom] = this.calcular_energia_manifestacao(especificacao_materia.complexidade_estrutural, intencao_manifestacao.pureza, intencao_manifestacao.descricao);
        
        if (this.energia_primordial_disponivel < energia_requerida) {
            createLogEntry(createLogEntryHelper('M36', 'FALHA', `Energia insuficiente. Req: ${energia_requerida.toFixed(0)}, Disp: ${this.energia_primordial_disponivel.toFixed(0)}`), this.logCallback);
            return { status: "FALHA_ENERGIA", mensagem: "Energia primordial insuficiente." };
        }

        this.modulo20.exec("transmutar_energia", { tipo: "Luz Primordial", quantidade: energia_requerida });
        this.energia_primordial_disponivel -= energia_requerida;
        const resultado_sintese = this.modulo27.exec("sintetizar_material", { especificacao_materia });

        const material_id = `MAT_${Date.now()}`;
        let ressonancia = this.calcular_ressonancia(intencao_manifestacao.pureza, analise_cc.coerencia, intencao_manifestacao.consciencia_coletiva_dados);

        if (ressonancia < LIMIAR_RESSONANCIA_MINIMA) {
             const reajuste = this.reajuste_ressonancia_progressivo(ressonancia, material_id, intencao_manifestacao.descricao, intencao_manifestacao.consciencia_coletiva_dados);
             ressonancia = reajuste.ressonancia_final;
        }
        
        const resumo = { pureza: intencao_manifestacao.pureza, coerencia: analise_cc.coerencia, ressonancia };
        const unificacao = Math.random() * 0.2 + 0.75; // Simulating EQ012
        const integrador = EQ0042_ModeloIntegradoFinal(unificacao, energia_requerida, true);
        const selo_struct = EQ0096_StructuraOmega({ material_id, dominio: intencao_manifestacao.descricao, resumo, integrador });

        createLogEntry(createLogEntryHelper('M36', 'Sucesso', `Matéria manifestada com sucesso: ${material_id}`), this.logCallback);
        return { status: "SUCESSO", material_id, ressonancia, unificacao, integrador, selo_struct };
    }
}

export const runModuleThirtySixSequence = async (logCallback: LogCallback) => {
    const m36 = new Modulo36_ArquitetoLuzPrimordial(logCallback, "ARQUITETO_LUZ_001");

    const dados_c1 = Array.from({ length: 50 }, () => Math.random() * 10 + 95);
    const intencao_c1 = {
        descricao: "Criação de um Campo de Abundância Universal",
        pureza: 0.99,
        consciencia_coletiva_dados: dados_c1
    };
     const esp_c1 = {"nome": `Manifesto_Abundancia_1`, "complexidade_estrutural": 1.2};
    await m36.executar_ciclo_manifestacao(esp_c1, intencao_c1);
};
