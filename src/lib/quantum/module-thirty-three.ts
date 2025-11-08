'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// --- Constants ---
const PI = Math.PI;
const PHI = (1 + Math.sqrt(5)) / 2;
const CONST_TF = 1.61803398875;
const CONST_AMOR_INCONDICIONAL_VALOR = 0.999999999999999;
const ETHICAL_CONFORMITY_THRESHOLD = 0.75;
const EQ019_LIMIAR = 0.60;
const RHO_ALERTA_TECNICO = 0.15;
const SEVERIDADE_ALERTA = 0.75;
const SEVERIDADE_CRITICO = 0.85;

const PESOS_PILARES = [0.30, 0.30, 0.25, 0.15];
const VIRTUDES_PADRAO = { "amor": 0.92, "gratidão": 0.90, "verdade": 0.91, "compaixao": 0.89 };

const TEMAS_SISTEMICOS_CRITICOS: { [key: string]: string[] } = {
    "Integridade Operacional": ["integridade", "operacional", "conformidade", "segurança"],
    "Harmonia Coletiva": ["harmonia", "coletiva", "unidade", "coerência"],
    "Proteção Cósmica": ["proteção", "defesa", "ameaça", "risco"],
    "Portais/Temporal": ["portal", "temporal", "linhas do tempo", "travessia"]
};


const createLogEntry = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


class EquationsRegistryM33 {
    private static _eq: { [key: string]: Function } = {};
    static register(code: string, fn: Function) {
        this._eq[code] = fn;
    }
    static get(code: string): Function {
        if (!this._eq[code]) throw new Error(`Equação '${code}' não registrada`);
        return this._eq[code];
    }
}

// --- Equations ---
const EQTP = (ctx: { [key: string]: any }): number => {
    const score = ctx.ethical_alignment_score || 0.0;
    if (score >= CONST_AMOR_INCONDICIONAL_VALOR) return 1.0;
    if (score >= ETHICAL_CONFORMITY_THRESHOLD) return 0.5;
    return 0.0;
};

const EQ019 = (pilares: number[], pesos: number[] = PESOS_PILARES): number => {
    const total = pilares.reduce((sum, p, i) => sum + (pesos[i] || 0) * p, 0);
    return Math.min(Math.max(total, 0.0), 0.999999999);
};

const EQ177 = (freq_origem: number, freq_destino: number, sigma: number = 150.0): number => {
    const delta = Math.abs(freq_origem - freq_destino);
    const prob = Math.exp(-(delta ** 2) / (2.0 * sigma ** 2));
    return Math.min(Math.max(prob, 0.0), 1.0);
};

const EQ112 = (inteligencia_modular: number, interdependencia: number, phi: number = CONST_TF): number => {
    return Math.min((inteligencia_modular * interdependencia) + phi, 10.0);
};

const EQ134 = (virtudes: { [key: string]: number }, consciencia_emergente: number): number => {
    const c_ativa = Math.max(1e-6, consciencia_emergente / 10.0);
    const log_prod = Object.values(virtudes).reduce((sum, v) => sum + Math.log(Math.max(v, 1e-6)), 0);
    const energia_log = Math.log(1e5) + log_prod;
    return Math.exp(c_ativa * energia_log);
};

EquationsRegistryM33.register("EQTP", EQTP);
EquationsRegistryM33.register("EQ019", EQ019);
EquationsRegistryM33.register("EQ177", EQ177);
EquationsRegistryM33.register("EQ112", EQ112);
EquationsRegistryM33.register("EQ134", EQ134);

// --- Mocks ---
const mockModule = (name: string, log: LogCallback) => ({
    exec: (action: string, payload: any) => {
        log(createLogEntry(name, 'Execução', `Ação '${action}' recebida`, payload));
        return { status: "simulated_ok" };
    }
});


class Modulo33_ObservadorDivino {
    private m44;
    private m45;
    private m7;
    private m9;
    private m28;
    private m1;
    private frequencias_referencia = [432.0, 528.0, 639.0, 963.0];
    
    constructor(private logCallback: LogCallback, private modulo_id: string = "M33_ORACULO_INTERNO") {
        this.m44 = mockModule("M44_VERITAS", logCallback);
        this.m45 = mockModule("M45_CONCILIVM", logCallback);
        this.m7 = mockModule("M7_CONSELHO", logCallback);
        this.m9 = mockModule("M9_DASHBOARD", logCallback);
        this.m28 = mockModule("M28_HARMONIA", logCallback);
        this.m1 = mockModule("M1_CRONICA", logCallback);
        this.logCallback(createLogEntry(this.modulo_id, 'Inicialização', "Oráculo ético-vibracional pronto"));
    }

    private _gate_etico(etica_global: number): number {
        const gate = EquationsRegistryM33.get("EQTP")({ "ethical_alignment_score": etica_global });
        this.m44.exec("M33_GATE", { etica_global, gate });
        return gate;
    }

    private _coerencia_pilares(pilares: number[]): number {
        const eq019 = EquationsRegistryM33.get("EQ019")(pilares);
        this.m44.exec("M33_EQ019", { pilares, eq019 });
        return eq019;
    }

    private _maturidade_contextual(intencao: string, base_inteligencia: number, base_interdependencia: number): number {
        let boost_inteligencia = 0.0;
        let boost_interdep = 0.0;
        let lowered = 0.0;
        const texto = intencao.toLowerCase();

        if (["dominação", "apoderar", "acumulo de poder", "explorar"].some(k => texto.includes(k))) {
            lowered = 0.15;
        }

        for (const keywords of Object.values(TEMAS_SISTEMICOS_CRITICOS)) {
            if (keywords.some(k => texto.includes(k))) {
                boost_interdep += 0.05;
                boost_inteligencia += 0.03;
            }
        }
        const inteligencia = Math.max(0.1, Math.min(1.0, base_inteligencia + boost_inteligencia - lowered));
        const interdep = Math.max(0.1, Math.min(1.0, base_interdependencia + boost_interdep - lowered));
        return EquationsRegistryM33.get("EQ112")(inteligencia, interdep);
    }
    
    private _energia_integrada(virtudes: { [key: string]: number }, maturidade: number): number {
        return EquationsRegistryM33.get("EQ134")(virtudes, maturidade);
    }

    private _compatibilidade_dimensional(freq_diretriz: number): { [key: string]: number } {
        const probs = this.frequencias_referencia.map(alvo => EquationsRegistryM33.get("EQ177")(freq_diretriz, alvo));
        const melhor = Math.max(...probs);
        const alvo_idx = probs.indexOf(melhor);
        const freq_alvo = this.frequencias_referencia[alvo_idx];
        this.m44.exec("M33_COMPAT", { freq_diretriz, freq_alvo, compatibilidade: melhor });
        return { alvo: freq_alvo, compatibilidade: melhor };
    }

    private _equalizar_se_necessario(compat: { [key: string]: number }): any {
        if (compat["compatibilidade"] < 0.25) {
            const res = this.m28.exec("equalizar", { frequencia_alvo: compat["alvo"] });
            this.m44.exec("M33_EGAL", { freq_equalizada: compat["alvo"], status: res.status });
            return res;
        }
        return null;
    }

    private _prioridade_por_contexto(intencao: string, energia_integrada: number, coerencia_pilares: number, compat: number): string {
        const texto = intencao.toLowerCase();
        const tema_critico = Object.values(TEMAS_SISTEMICOS_CRITICOS).some(words => words.some(k => texto.includes(k)));
        if (tema_critico || energia_integrada > 1e4 || compat < RHO_ALERTA_TECNICO || coerencia_pilares < 0.65) {
            return "Alta";
        }
        return "Médio";
    }

    public async gerar_e_emitir_diretriz(intencao: string, etica_global: number, pilares: number[], virtudes: { [key: string]: number } | null, inteligencia_modular: number, interdependencia: number, freq_diretriz: number): Promise<any> {
        this.logCallback(createLogEntry(this.modulo_id, 'Início', `Iniciando diretriz para: '${intencao}'`));
        
        this.m7.exec("consultar", { query: `Diretriz para: ${intencao}` });
        const gate = this._gate_etico(etica_global);
        if (gate === 0.0) {
             const bloqueio = { status: "BLOQUEADA", motivo: "Gate ético fechado", intencao };
             this.m44.exec("M33_ABORT", bloqueio);
             return bloqueio;
        }

        const coerencia = this._coerencia_pilares(pilares);
        if (coerencia < EQ019_LIMIAR) {
            const evento = { status: "ABORTADA", motivo: "Coerência dos pilares insuficiente", eq019: coerencia, pilares_raw: pilares };
            this.m44.exec("M33_ABORT", evento);
            return evento;
        }

        const maturidade = this._maturidade_contextual(intencao, inteligencia_modular, interdependencia);
        const energia = this._energia_integrada(virtudes || VIRTUDES_PADRAO, maturidade);
        const compat = this._compatibilidade_dimensional(freq_diretriz);
        const equalizacao = this._equalizar_se_necessario(compat);
        
        const prioridade = this._prioridade_por_contexto(intencao, energia, coerencia, compat.compatibilidade);
        this.m45.exec("create_proposal", { title: `Diretriz M33: ${intencao.slice(0, 40)}`, description: intencao, proposed_by: "M33_ORACULO", priority: prioridade });

        const relatorio_final = {
            status: "DIRETRIZ_CONCLUIDA",
            intencao,
            coerencia_pilares: coerencia,
            maturidade,
            energia_integrada: energia,
            compatibilidade_dimensional: compat,
            freq_equalizada: equalizacao ? equalizacao.frequencia_ajustada : null
        };
        
        this.logCallback(createLogEntry(this.modulo_id, 'Fim', `Diretriz concluída para: '${intencao}'`));
        return relatorio_final;
    }
}


export const runModuleThirtyThreeSequence = async (logCallback: LogCallback) => {
    const m33 = new Modulo33_ObservadorDivino(logCallback, "M33_ORACULO_INTERNO");

    const cenarios = [
        { intencao: "Sustentar a Harmonia Coletiva", etica: 0.95, pilares: [0.88, 0.92, 0.90, 0.85], virtudes: VIRTUDES_PADRAO, freq: 432.0 },
        { intencao: "Reforçar Integridade Operacional", etica: 0.80, pilares: [0.75, 0.78, 0.72, 0.70], virtudes: { "amor": 0.88, "gratidão": 0.85, "verdade": 0.86, "compaixao": 0.84 }, freq: 639.0 },
        { intencao: "Acesso não ético a recursos", etica: 0.60, pilares: [0.80, 0.82, 0.79, 0.77], virtudes: { "amor": 0.75, "gratidão": 0.74, "verdade": 0.76, "compaixao": 0.73 }, freq: 528.0 }
    ];

    for (const c of cenarios) {
        logCallback(createLogEntry("M33", 'Cenário', `Iniciando: ${c.intencao}`));
        await sleep(500);
        const resultado = await m33.gerar_e_emitir_diretriz(c.intencao, c.etica, c.pilares, c.virtudes, 0.9, 0.85, c.freq);
        logCallback(createLogEntry("M33", 'Resultado', `Cenário '${c.intencao}' concluído`, resultado));
        await sleep(1000);
    }
};
