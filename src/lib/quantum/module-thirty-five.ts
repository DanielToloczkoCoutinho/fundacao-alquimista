
'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// ───────── Constantes ─────────
const PHI = (1 + Math.sqrt(5)) / 2;
const CONST_TF = 1.61803398875;
const IDEAL_COERENCIA_COLETIVA = 0.98;
const LIMIAR_DISSONANCIA_CRITICA = 0.20;
const LIMIAR_PUREZA_INTENCAO = 0.85;
const SELO_AMOR_INCONDICIONAL_ATIVO = true;

const ETHICAL_THRESHOLD_HIGH = 0.85;
const ETHICAL_THRESHOLD_DEFAULT = 0.69;

const FAIXA_ESPERADA: { [key: string]: [number, number] } = {
    "Criação de um Campo de Abundância Universal": [90.0, 110.0],
    "Elevação Vibracional Planetária": [50.0, 150.0],
    "Domínio sobre Outras Realidades": [90.0, 110.0],
    "Proteção Cósmica": [80.0, 120.0],
    "Ascensão Consciente da Humanidade": [70.0, 130.0]
};

const PERFIS_INTENCAO: { [key: string]: { [key: string]: { freq: number, intensidade_cura: number, risco_base: number } } } = {
    "Criação de um Campo de Abundância Universal": {
        "coletivo": { "freq": 432.0 * CONST_TF, "intensidade_cura": 0.60, "risco_base": 0.20 },
        "serviço":  { "freq": 528.0,            "intensidade_cura": 0.55, "risco_base": 0.25 },
        "individual":{ "freq": 432.0,            "intensidade_cura": 0.50, "risco_base": 0.30 }
    },
    "Elevação Vibracional Planetária": {
        "global":   { "freq": 963.0,            "intensidade_cura": 0.70, "risco_base": 0.45 }
    },
    "Domínio sobre Outras Realidades": {
        "controle": { "freq": 854.321946,       "intensidade_cura": 0.85, "risco_base": 0.75 }
    },
    "Proteção Cósmica": {
        "escudo":   { "freq": 528.0,            "intensidade_cura": 0.80, "risco_base": 0.55 }
    },
    "Ascensão Consciente da Humanidade": {
        "plano":    { "freq": 963.0,            "intensidade_cura": 0.75, "risco_base": 0.50 }
    }
};

// ───────── Utils ─────────
const sha256_hex = (text: string): string => {
    // Basic simulation, not a real SHA256
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return `sim_hash_${hash.toString(16)}`;
};

const nivel_alerta = (x: number): string => {
    if (x >= 0.75) return "CRÍTICO";
    if (x >= 0.50) return "ALTO";
    if (x >= 0.25) return "MÉDIO";
    return "INFO";
};

const median = (dados: number[]): number => {
    const n = dados.length;
    if (n === 0) return 0.0;
    const s = [...dados].sort((a, b) => a - b);
    const mid = Math.floor(n / 2);
    if (n % 2 === 0) {
        return (s[mid - 1] + s[mid]) / 2.0;
    }
    return s[mid];
};

const iqr = (dados: number[]): number => {
    const n = dados.length;
    if (n < 4) return 0.0;
    const s = [...dados].sort((a, b) => a - b);
    const q1 = median(s.slice(0, Math.floor(n / 2)));
    const q3 = median(s.slice(Math.ceil(n / 2)));
    return Math.max(0.0, q3 - q1);
};

const coerencia_calibrada_suave = (dados: number[], dominio?: string | null): number => {
    if (!dados || dados.length === 0) return 0.0;
    const med = median(dados);
    const spread = iqr(dados);
    
    let dist_faixa = 0.0;
    if (dominio && FAIXA_ESPERADA[dominio]) {
        const [low, high] = FAIXA_ESPERADA[dominio];
        const span = Math.max(1e-6, (high - low));
        if (med < low) dist_faixa = ((low - med) / span) * 0.6;
        else if (med > high) dist_faixa = ((med - high) / span) * 0.6;
    }

    const erro = spread * 0.8 + dist_faixa + 1e-6;
    let base = 1.0 / (1.0 + erro);
    if (spread < 2.0) {
        base = Math.min(1.0, base + 0.15);
    }
    return Math.max(0.0, Math.min(1.0, base));
};

const export_json = (path: string, data: any): void => {
    // This is a client-side simulation, so we'll log it instead of writing a file.
    console.log(`[EXPORT] Path: ${path}`, data);
};

const createLogEntry = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ───────── Ledger ─────────
class SimpleChain {
    private chain: any[] = [];
    
    constructor(private logCallback: LogCallback, private active_path: string = "m35_ledger.json", private max_blocks: number = 2000) {
        this._genesis();
    }

    private _calc_hash(block: any): string {
        const copy = { ...block };
        delete copy.hash;
        const payload = JSON.stringify(copy, Object.keys(copy).sort());
        return sha256_hex(payload);
    }

    private _genesis() {
        let genesis = {
            index: 0,
            timestamp_utc: new Date().toISOString(),
            event: "M35_CHAIN_GENESIS",
            payload: { message: "Genesis M35" },
            prev_hash: "0".repeat(64),
            meta: { version: "v35.2", module: "M35" }
        };
        genesis = { ...genesis, hash: this._calc_hash(genesis) };
        this.chain.push(genesis);
        this.logCallback(createLogEntry('M35-LEDGER', 'INFO', `Genesis criado: ${genesis.hash.substring(0, 10)}...`));
    }

    add(event: string, payload: any, meta?: any) {
        const prev = this.chain[this.chain.length - 1];
        let block = {
            index: this.chain.length,
            timestamp_utc: new Date().toISOString(),
            event,
            payload,
            prev_hash: prev.hash,
            meta: meta || {}
        };
        block = { ...block, hash: this._calc_hash(block) };
        this.chain.push(block);
        this.logCallback(createLogEntry('M35-LEDGER', 'INFO', `Bloco #${block.index} :: ${event}`));
    }
}

// ───────── Mocks ─────────
const mockModule = (name: string, log: LogCallback) => ({
    exec: (action: string, payload: any) => {
        log(createLogEntry(name as any, 'Execução', `Ação '${action}' recebida`, payload));
        return { status: "simulated_ok" };
    }
});

class MockM07AlinhamentoDivino {
    constructor(private logCallback: LogCallback) {}
    ConsultarConselho(query: string) {
        this.logCallback(createLogEntry('M7', 'Consulta', query));
        return { status: "APROVADO", diretriz: "Manter a pureza e o bem maior." };
    }
    ValidarEtica(intencao: any) {
        this.logCallback(createLogEntry('M7', 'Validação Ética', intencao.descricao));
        return (intencao.pureza || 0.0) >= LIMIAR_PUREZA_INTENCAO;
    }
}

const validar_etica_m34_like = (pureza: number, historico_diss: number[]): [boolean, number] => {
    const base = SELO_AMOR_INCONDICIONAL_ATIVO ? ETHICAL_THRESHOLD_HIGH : ETHICAL_THRESHOLD_DEFAULT;
    const media = historico_diss.length > 0 ? historico_diss.slice(-50).reduce((a, b) => a + b, 0) / Math.min(50, historico_diss.length) : 0.0;
    const ajuste = Math.min(0.1, Math.max(0.0, media));
    const limiar = Math.min(0.95, Math.max(base, base + ajuste * 0.2));
    return [pureza >= limiar, limiar];
};

// ───────── Classe principal ─────────
class Modulo35_OrquestradorSinfoniaConsciencia {
    private modulo01;
    private modulo07;
    private modulo08;
    private modulo09;
    private modulo28;
    private modulo31;
    private modulo33;
    private modulo34;
    private modulo101;
    private chain: SimpleChain;
    
    private coerencia_coletiva_atual = 0.0;
    private historico_dissonancia: number[] = [];
    private historico_coerencia: number[] = [];

    constructor(private logCallback: LogCallback, private modulo_id: string) {
        this.modulo01 = mockModule('M1', logCallback);
        this.modulo07 = new MockM07AlinhamentoDivino(logCallback);
        this.modulo08 = mockModule('M8', logCallback);
        this.modulo09 = mockModule('M9', logCallback);
        this.modulo28 = mockModule('M28', logCallback);
        this.modulo31 = mockModule('M31', logCallback);
        this.modulo33 = mockModule('M33', logCallback);
        this.modulo34 = mockModule('M34', logCallback);
        this.modulo101 = mockModule('M101', logCallback);
        this.chain = new SimpleChain(logCallback);
        this.logCallback(createLogEntry('M35', 'Inicialização', `M35 '${this.modulo_id}' inicializado.`));
    }

    analisar_consciencia_coletiva(dados_consciencia: number[], dominio_intencao?: string | null): any {
        this.logCallback(createLogEntry('M35', 'Análise', 'Analisando dados da consciência coletiva...'));
        if (!dados_consciencia || dados_consciencia.length === 0) {
            return { status: "FALHA", mensagem: "Nenhum dado." };
        }

        const c = coerencia_calibrada_suave(dados_consciencia, dominio_intencao);
        const d = 1.0 - c;
        this.coerencia_coletiva_atual = c;
        this.historico_dissonancia.push(d);
        this.historico_coerencia.push(c);

        if (d > LIMIAR_DISSONANCIA_CRITICA) {
            this.modulo09.exec('GerarAlertaVisual', { tipo: "CRÍTICO", mensagem: `Dissonância Crítica: ${d.toFixed(2)}!` });
        }
        
        return { status: c < IDEAL_COERENCIA_COLETIVA ? "COERENCIA_BAIXA" : "SUCESSO", coerencia: c, dissonancia: d };
    }

    async orquestrar_harmonizacao_coletiva(nivel_dissonancia: number, dominio_intencao?: string | null, subdominio?: string | null): Promise<any> {
        this.logCallback(createLogEntry('M35', 'Harmonização', `Iniciando para dissonância ${nivel_dissonancia.toFixed(4)}...`));
        const max_passos = 6;
        let d_atual = nivel_dissonancia;

        for (let passo = 1; passo <= max_passos; passo++) {
            const perfil = PERFIS_INTENCAO[dominio_intencao || ""]?.[subdominio || ""] || { freq: 432.0 * CONST_TF, intensidade_cura: 0.70 };
            const intensidade = Math.max(0.4, Math.min(0.95, perfil.intensidade_cura + 0.20 * Math.max(0.0, d_atual - 0.5)));
            
            this.modulo08.exec('iniciar_protocolo_cura', { tipo: "Cura_Coletiva_Vibracional", intensidade });
            this.modulo28.exec('harmonizar_frequencia', { frequencia_alvo: perfil.freq });
            
            const ganho_adapt = (0.05 + intensidade * 0.06) + 0.10 * Math.max(0.0, d_atual - 0.5);
            this.coerencia_coletiva_atual = Math.min(IDEAL_COERENCIA_COLETIVA, this.coerencia_coletiva_atual + ganho_adapt);
            d_atual = 1.0 - this.coerencia_coletiva_atual;
            
            this.logCallback(createLogEntry('M35', `Harmonização Passo ${passo}`, `Coerência: ${this.coerencia_coletiva_atual.toFixed(4)}`));
            
            if (d_atual <= LIMIAR_DISSONANCIA_CRITICA) break;
            await sleep(200);
        }
        return { status: "HARMONIZACAO_CONCLUIDA", coerencia_final: this.coerencia_coletiva_atual };
    }

    validar_alinhamento_etico_coletivo(intencao: any): any {
        if (!this.modulo07.ValidarEtica(intencao)) {
            return { status: "FALHA_ETICA", mensagem: "Rejeitada pelo Conselho Cósmico (M7)." };
        }
        const [ok_m34, limiar] = validar_etica_m34_like(intencao.pureza || 0.0, this.historico_dissonancia);
        if (!ok_m34) {
            return { status: "FALHA_ETICA", mensagem: `Rejeitada (M34): pureza ${intencao.pureza.toFixed(2)} < limiar ${limiar.toFixed(2)}` };
        }
        return { status: "SUCESSO", mensagem: "Alinhamento ético aprovado." };
    }

    async executar_ciclo_orquestracao(dados_consciencia_coletiva: number[], intencao_coletiva: any, subdominio?: string | null): Promise<any> {
        this.logCallback(createLogEntry('M35', 'Ciclo Completo', 'Iniciando ciclo de orquestração...'));
        const analise = this.analisar_consciencia_coletiva(dados_consciencia_coletiva, intencao_coletiva.descricao);
        if (analise.status === "COERENCIA_BAIXA" || analise.status === "DISSONANCIA_CRITICA") {
            await this.orquestrar_harmonizacao_coletiva(analise.dissonancia, intencao_coletiva.descricao, subdominio);
        }

        const validacao = this.validar_alinhamento_etico_coletivo(intencao_coletiva);
        if (validacao.status !== "SUCESSO") {
            this.chain.add("M35_CICLO_FALHA", { motivo: validacao.mensagem });
            return { status: "FALHA", detalhes: validacao.mensagem };
        }

        const prontidao_reduzida = this.coerencia_coletiva_atual < 0.20;
        const energia_foco = (intencao_coletiva.pureza || 0.0) * 1000 * (prontidao_reduzida ? 0.6 : 1.0);
        
        this.modulo31.exec('cocriar_realidade', { descricao: intencao_coletiva.descricao, energia_foco });
        this.modulo101.exec('manifestar_realidade_pensamento', { conceito: intencao_coletiva.conceito_pensamento, frequencia_coerencia: this.coerencia_coletiva_atual * 1000 });
        
        this.logCallback(createLogEntry('M35', 'Ciclo Concluído', 'Ciclo de orquestração concluído com sucesso.'));
        this.chain.add("M35_CICLO_SUCESSO", { intencao: intencao_coletiva.descricao });
        return { status: "SUCESSO" };
    }
}

export const runModuleThirtyFiveSequence = async (logCallback: LogCallback) => {
    logCallback(createLogEntry('M35', 'Simulação', 'Iniciando simulação do Módulo 35 (v35.2)'));
    const orquestrador = new Modulo35_OrquestradorSinfoniaConsciencia(logCallback, "ORQUESTRADOR_COLETIVO_001");

    // Cenário 1
    logCallback(createLogEntry('M35', 'Cenário 1', 'Consciência Harmoniosa, Intenção Ética'));
    const dados_c1 = Array.from({ length: 50 }, () => Math.random() * 10 + 95);
    const intencao_c1 = {
        descricao: "Criação de um Campo de Abundância Universal",
        pureza: 0.99,
        conceito_pensamento: "Abundância e Prosperidade para Todos",
        subdominio: "coletivo"
    };
    await orquestrador.executar_ciclo_orquestracao(dados_c1, intencao_c1, intencao_c1.subdominio);
    await sleep(500);

    // Cenário 2
    logCallback(createLogEntry('M35', 'Cenário 2', 'Consciência Dissonante, Harmonização Necessária'));
    const dados_c2 = Array.from({ length: 50 }, () => Math.random() * 100 + 50);
    const intencao_c2 = {
        descricao: "Elevação Vibracional Planetária",
        pureza: 0.90,
        conceito_pensamento: "Ascensão Consciente da Humanidade",
        subdominio: "global"
    };
    await orquestrador.executar_ciclo_orquestracao(dados_c2, intencao_c2, intencao_c2.subdominio);
    await sleep(500);

    // Cenário 3
    logCallback(createLogEntry('M35', 'Cenário 3', 'Intenção com Baixa Pureza (Rejeição)'));
    const dados_c3 = Array.from({ length: 50 }, () => Math.random() * 20 + 90);
    const intencao_c3 = {
        descricao: "Domínio sobre Outras Realidades",
        pureza: 0.60,
        conceito_pensamento: "Controle e Poder Absoluto",
        subdominio: "controle"
    };
    await orquestrador.executar_ciclo_orquestracao(dados_c3, intencao_c3, intencao_c3.subdominio);
};
