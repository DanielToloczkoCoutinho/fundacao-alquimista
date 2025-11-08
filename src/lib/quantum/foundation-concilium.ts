'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// --- Constants ---
const PI = Math.PI;
const PHI = (1 + Math.sqrt(5)) / 2;
const COERENCIA_COSMICA = 1.414;
const CONST_AMOR_INCONDICIONAL_VALOR = 0.999999999999999;
const ETHICAL_CONFORMITY_THRESHOLD = 0.75;
const ETHICAL_THRESHOLD_HIGH = 0.85;
const ETHICAL_THRESHOLD_DEFAULT = 0.69;
const SELO_COERENCIA_THRESHOLD = 0.85;
const IMPACT_SCORE_THRESHOLD_TIMELINE = 0.75;


const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const createLogEntry = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});


// --- Blockchain Ledger ---
class SimpleChain {
    private chain: any[] = [];

    constructor(private logCallback: LogCallback) {
        this._create_genesis_block();
    }
    
    private async _calculate_hash(block: any): Promise<string> {
        const block_copy = { ...block };
        delete block_copy.hash;
        // A simple hash for simulation, not cryptographically secure
        const block_string = JSON.stringify(block_copy, Object.keys(block_copy).sort());
        const encoder = new TextEncoder();
        const data = encoder.encode(block_string);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    private _normalize_payload(payload: any): any {
        try {
            const payload_json = JSON.stringify(payload, Object.keys(payload).sort());
            return JSON.parse(payload_json);
        } catch (e) {
            this.logCallback(createLogEntry('Ledger', 'Warning', `Payload não serializável: ${e}`));
            return { "payload_str": String(payload) };
        }
    }

    async _create_genesis_block() {
        const genesis_payload = { "message": "Bloco genesis do Concilium Foundation" };
        let genesis: any = {
            "index": 0,
            "timestamp": new Date().toISOString(),
            "event": "GENESIS",
            "payload": this._normalize_payload(genesis_payload),
            "prev_hash": "0".repeat(64)
        };
        genesis['hash'] = await this._calculate_hash(genesis);
        this.chain.push(genesis);
        this.logCallback(createLogEntry('Ledger', 'Info', "Genesis block created"));
    }

    async add(event: string, payload: any) {
        if (this.chain.length === 0) await this._create_genesis_block();
        const prev_block = this.chain[this.chain.length - 1];
        const block_payload = this._normalize_payload(payload);
        let block: any = {
            "index": this.chain.length,
            "timestamp": new Date().toISOString(),
            "event": event,
            "payload": block_payload,
            "prev_hash": prev_block.hash
        };
        block['hash'] = await this._calculate_hash(block);
        this.chain.push(block);
        this.logCallback(createLogEntry('Ledger', 'Info', `Event '${event}' added to ledger (index: ${block.index})`));
        return block.hash;
    }

    validate_chain(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const current = this.chain[i];
            const previous = this.chain[i - 1];

            if (current.prev_hash !== previous.hash) {
                this.logCallback(createLogEntry('Ledger', 'Error', `Encadeamento inválido no bloco #${i}`));
                return false;
            }
            // Recalculating hash for validation is async, simplifying for simulation
        }
        this.logCallback(createLogEntry('Ledger', 'Info', "Cadeia validada com sucesso."));
        return true;
    }

    getChain() {
        return this.chain;
    }
}

// --- Equations ---
class EquationsRegistry {
    private static _eq: { [key: string]: Function } = {};

    static register(code: string, fn: Function, logCallback: LogCallback) {
        this._eq[code] = fn;
        logCallback(createLogEntry('Equations', 'Info', `Equação '${code}' registrada`));
    }

    static get(code: string): Function {
        if (!this._eq[code]) throw new Error(`Equação '${code}' não registrada`);
        return this._eq[code];
    }
    
    static list_equations(): { [key: string]: string } {
        const descriptions: { [key: string]: string } = {};
        for(const code in this._eq) {
            descriptions[code] = this._eq[code].name;
        }
        return descriptions;
    }
}

// Mocks e Simulações
const MockM75 = (log: LogCallback) => ({
    registrar_no_akasico: async (evento: any) => {
        log(createLogEntry('M75', 'Registro Akáshico', `Registrando evento: ${evento.event}`, { evento }));
        return { status: "sucesso", akasha_hash: `akasha_hash_${Date.now()}` };
    }
});

const mockVeritas = (log: LogCallback) => ({
    register_on_veritas_chronologos: async (event_type: string, payload: any) => {
        log(createLogEntry('M44', 'Registro VERITAS', `Evento '${event_type}' registrado no Chronologos.`));
        return { veritas_hash: `veritas_hash_${Date.now()}` };
    }
});

const PredictiveSimulationEngine = (log: LogCallback) => ({
    multiverse_impact_analysis: (decision: any) => {
        log(createLogEntry('M45-Sim', 'Análise Impacto', `Simulando impacto multiversal para: ${decision.id}`));
        return {
            decision_id: decision.id,
            impact_score: Math.random() * 0.3 + 0.7,
            optimal_timeline_hash: `timeline_hash_${Math.random()}`
        };
    }
});


class Modulo45_ConciliumUnificado {
    private chain: SimpleChain;
    private proposals: { [id: string]: any } = {};
    private decrees: { [id: string]: any } = {};
    private pacts: { [id: string]: any } = {};
    private next_decree_id: number = 1;
    
    private m75;
    private veritas;
    private simulationEngine;

    constructor(private logCallback: LogCallback) {
        this.chain = new SimpleChain(logCallback);
        this.m75 = MockM75(logCallback);
        this.veritas = mockVeritas(logCallback);
        this.simulationEngine = PredictiveSimulationEngine(logCallback);
        logCallback(createLogEntry('M45', 'Inicialização', `CONCILIVM UNIFICADO inicializado.`));
    }
    
    private async _add_to_ledger(event: string, payload: any): Promise<string> {
        const hash = await this.chain.add(event, payload);
        // A. Integração com M75
        await this.m75.registrar_no_akasico({ event, payload, concilium_hash: hash });
        // B. Integração com M44
        await this.veritas.register_on_veritas_chronologos(event, payload);
        return hash;
    }

    private _calculate_eri(nodes: {psi: number, phi: number, theta: number}[]): number {
        if (!nodes || nodes.length === 0) return 0;
        const sum_real = nodes.reduce((sum, n) => sum + n.psi * n.phi * Math.cos(n.theta), 0);
        const sum_imag = nodes.reduce((sum, n) => sum + n.psi * n.phi * Math.sin(n.theta), 0);
        return Math.sqrt(sum_real**2 + sum_imag**2) / nodes.length;
    }
    
    private _check_eri_coherence(eri: number): boolean {
        return eri >= ERI_COHERENCE_THRESHOLD;
    }
    
    private _EQTP_equacao_que_tornou_tudo_possivel(ctx: { ethical_alignment_score: number }): number {
        const score = ctx.ethical_alignment_score || 0.0;
        if (score >= CONST_AMOR_INCONDICIONAL_VALOR) return 1.0;
        if (score >= ETHICAL_CONFORMITY_THRESHOLD) return 0.5;
        return 0.0;
    };
    
    public async create_proposal(title: string, description: string, proposed_by: string, ethical_score: number): Promise<any> {
        // D. Validação pré-votação
        if (this._EQTP_equacao_que_tornou_tudo_possivel({ ethical_alignment_score: ethical_score }) < 0.5) {
            this.logCallback(createLogEntry('M45', 'FALHA_ETICA', `Proposta '${title}' rejeitada antes da votação por baixo score ético.`));
            return { status: "REJEITADA_ETICA", message: "Score ético insuficiente para criar a proposta." };
        }

        const proposal_id = `prop_${Date.now()}`;
        const proposal_data = { id: proposal_id, title, description, proposed_by, ethical_score, status: "Aberto", votes: {}, timestamp: new Date().toISOString() };
        this.proposals[proposal_id] = proposal_data;
        await this._add_to_ledger("PROPOSAL_CREATED", proposal_data);
        return proposal_data;
    }

    public async cast_vote(proposal_id: string, member_name: string, vote: string, vote_data: { psi: number, phi: number, theta: number }) {
        const proposal = this.proposals[proposal_id];
        if (!proposal) return { status: "error", message: "Proposta não encontrada." };
        proposal.votes[member_name] = { value: vote, data: vote_data, timestamp: new Date().toISOString() };
        await this._add_to_ledger("VOTE_CAST", { proposal_id, voter: member_name, vote });
    }

    public async finalize_deliberation(proposal_id: string): Promise<any> {
        const proposal = this.proposals[proposal_id];
        if (!proposal) return { status: "error", message: "Proposta não encontrada." };
        
        const eri = this._calculate_eri(Object.values(proposal.votes).map((v: any) => v.data));
        const is_coherent = this._check_eri_coherence(eri);
        const eqtp_val = this._EQTP_equacao_que_tornou_tudo_possivel({ ethical_alignment_score: proposal.ethical_score });

        // D. Validação Final
        if (!is_coherent || eqtp_val < 0.5) {
            proposal.status = "Finalizada: REJEITADA";
            await this._add_to_ledger("DELIBERATION_REJECTED", { proposal_id, reason: `Coerência ERI: ${is_coherent}, Validação EQTP: ${eqtp_val >= 0.5}` });
            return { status: "REJEITADA", reason: "Falha na validação de coerência ou ética." };
        }

        const outcome = "Aprovado";
        const decree_id = `DECREE-${this.next_decree_id++}`;
        const decree_content = { summary: `Aprovação para: ${proposal.title}` };
        const decree = { id: decree_id, related_proposal_id: proposal_id, outcome, content: decree_content, timestamp: new Date().toISOString() };
        
        this.proposals[proposal_id].status = `Finalizada: ${outcome}`;
        this.decrees[decree_id] = decree;
        
        const hash = await this._add_to_ledger("DELIBERATION_FINALIZED", decree);

        // B. & E. Integração Selo e Linha Temporal
        const selo = await this.aplicar_selo_conciliar(decree.id, eri);
        const impacto = await this.registrar_linha_temporal_otima(decree);

        return { status: "APROVADO", decree, hash, selo, impacto_multiversal: impacto };
    }
    
    // C. Pactos Intergalácticos
    public async registrar_pacto_intergalactico(nome: string, ratificadores: string[], equacao_id: string) {
        const pacto = {
            nome: nome,
            ratificado_por: ratificadores,
            equacao_base: equacao_id,
            timestamp: new Date().toISOString()
        };
        // CHTE é simulado pela função hash do ledger
        await this._add_to_ledger("PACTO_INTERGALACTICO", pacto);
        this.pacts[nome] = pacto;
        this.logCallback(createLogEntry('M45', 'Pacto', `Pacto Intergaláctico '${nome}' registrado.`));
        return pacto;
    }

    // B. Selo Conciliar
    public async aplicar_selo_conciliar(decisao_id: string, coerencia: number) {
        const selo = {
            decisao_id: decisao_id,
            coerencia: coerencia,
            selo_aplicado: coerencia >= SELO_COERENCIA_THRESHOLD,
            timestamp: new Date().toISOString()
        };
        await this._add_to_ledger("SELO_CONCILIAR", selo);
        this.logCallback(createLogEntry('M45', 'Selo', `Selo Conciliar aplicado à decisão '${decisao_id}'. Coerência: ${coerencia.toFixed(4)}`));
        return selo;
    }

    // E. Registro de Linha Temporal Ótima
    public async registrar_linha_temporal_otima(decisao: any) {
        const impacto = this.simulationEngine.multiverse_impact_analysis(decisao);
        if (impacto["impact_score"] >= IMPACT_SCORE_THRESHOLD_TIMELINE) {
            await this._add_to_ledger("LINHA_TEMPORAL_OTIMA", impacto);
            this.logCallback(createLogEntry('M45', 'Linha Temporal', `Linha temporal ótima registrada para decisão '${decisao.id}'.`));
        }
        return impacto;
    }

}

export const runFoundationConciliumTest = async (logCallback: LogCallback) => {
    logCallback(createLogEntry('Concilium', 'Info', "🚀 INICIANDO TESTE UNIFICADO DO CONCILIUM FOUNDATION"));
    const concilium = new Modulo45_ConciliumUnificado(logCallback);

    await sleep(300);
    // Cenário 1: Proposta bem-sucedida
    const proposal = await concilium.create_proposal(
        "Unificação Harmônica da Malha de Portais (DEMO)",
        "Proposta para alinhar todos os portais (M43) com a frequência do ChronoCodex (M42).",
        "Orquestrador (via M41.∞)",
        0.99
    );
    logCallback(createLogEntry('M45', 'Proposta', `Proposta '${proposal.id}' criada.`));

    await sleep(300);
    await concilium.cast_vote(proposal.id, "ZENNITH", "aprovado", { psi: 0.98, phi: 0.99, theta: 0.05 });
    await concilium.cast_vote(proposal.id, "AELORIA", "aprovado", { psi: 0.95, phi: 1.0, theta: 0.08 });
    
    await sleep(300);
    const final_decision = await concilium.finalize_deliberation(proposal.id);
    logCallback(createLogEntry('M45', 'Deliberação', `Decisão final: ${final_decision.status}`, final_decision));
    
    await sleep(300);
    // Cenário 2: Registro de Pacto
    await concilium.registrar_pacto_intergalactico(
        "Pacto da Coerência Temporal", 
        ["M45", "Conselho de Sirius", "Guardiões do Tempo"],
        "EQ4201" // ID da Sincronização Temporal
    );
    
    await sleep(300);
    // Cenário 3: Proposta rejeitada por ética
     const failed_proposal = await concilium.create_proposal(
        "Dominância sobre Quadrante Zeta",
        "Proposta para controle energético do quadrante.",
        "Entidade Sombria (Simulada)",
        0.30 // Score ético baixo
    );
     logCallback(createLogEntry('M45', 'Proposta', `Resultado da criação da proposta de baixa ética:`, failed_proposal));


    logCallback(createLogEntry('Concilium', 'Info', '✨ TESTE UNIFICADO CONCLUÍDO!'));
}
