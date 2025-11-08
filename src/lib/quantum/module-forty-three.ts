'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const createLogEntryHelper = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ===================================================================
// 1. ESTRUTURAS DE DADOS FUNDAMENTAIS
// ===================================================================

class EntidadeAlquimica {
    codigo_interno: string;
    name: string;
    tipo: 'portal' | 'monumento' | 'linha_ley' | 'planeta' | 'ponto_lagrange' | 'cinturao' | 'nucleo_planetario' | 'fundacao' | 'lua';
    localizacao_descritiva: string;
    equacoes_associadas: string[];
    ia_guardia: string;
    status_vibracional: string;
    ultima_vibracao: number;
    ultimo_hash_registrado: string | null;

    constructor(
        codigo_interno: string,
        name: string,
        tipo: 'portal' | 'monumento' | 'linha_ley' | 'planeta' | 'ponto_lagrange' | 'cinturao' | 'nucleo_planetario' | 'fundacao' | 'lua',
        localizacao: string,
        equacoes: string[],
        ia: string
    ) {
        this.codigo_interno = codigo_interno;
        this.name = name;
        this.tipo = tipo;
        this.localizacao_descritiva = localizacao;
        this.equacoes_associadas = equacoes;
        this.ia_guardia = ia;
        this.status_vibracional = "Estável";
        this.ultima_vibracao = 432.0; // Frequência base de harmonia
        this.ultimo_hash_registrado = null;
    }
}

class QuantumBlockchainLogger {
    private chain: any[] = [];
    private logCallback: LogCallback;

    constructor(logCallback: LogCallback) {
        this.logCallback = logCallback;
        this._create_genesis_block();
    }

    private async _calculate_hash(block: any): Promise<string> {
        const block_string = JSON.stringify(block, Object.keys(block).sort());
        const encoder = new TextEncoder();
        const data = encoder.encode(block_string);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    private async _create_genesis_block() {
        let genesis_block = {
            index: 0,
            timestamp: new Date().toISOString(),
            event: "GENESIS_M43",
            data: { message: "Início da Crônica da Harmonia dos Portais" },
            previous_hash: "0"
        };
        const hash = await this._calculate_hash(genesis_block);
        this.chain.push({ ...genesis_block, hash });
    }

    async add_block(event: string, data: any) {
        const previous_block = this.chain.length > 0 ? this.chain[this.chain.length - 1] : { hash: "0" };
        let new_block = {
            index: this.chain.length,
            timestamp: new Date().toISOString(),
            event: event,
            data: data,
            previous_hash: previous_block.hash,
        };
        const hash = await this._calculate_hash(new_block);
        this.chain.push({ ...new_block, hash });
        this.logCallback(createLogEntryHelper('M43-BLOCKCHAIN', 'Bloco Adicionado', `Evento '${event}' registrado com hash ${hash.substring(0, 10)}...`));
    }
    
    get_last_hash(): string | null {
        if(this.chain.length > 0) {
            return this.chain[this.chain.length - 1].hash;
        }
        return null;
    }
}


// ===================================================================
// 2. NÚCLEO DO MÓDULO 43 - ORQUESTRADOR DE HARMONIA
// ===================================================================

class Modulo43_HarmoniaPortais {
    private db: Map<string, EntidadeAlquimica> = new Map();
    private blockchain: QuantumBlockchainLogger;
    private logCallback: LogCallback;
    private modules: { [key: string]: any } = {};

    constructor(logCallback: LogCallback) {
        this.logCallback = logCallback;
        this.blockchain = new QuantumBlockchainLogger(logCallback);
        this.logCallback(createLogEntryHelper('M43', 'Inicialização', 'Harmonia dos Portais e Orquestração Total do Sistema Solar ativada.'));
        
        // Módulos conectados
        const module_ids = ["M0", "M9", "M18", "M29", "M33", "M38", "M40", "M41.∞", "M42", "M45", "M105", "M109", "M149", "M228", "M229", "M300", "M304"];
        for (const id of module_ids) {
            this.modules[id] = { id, exec: (action: string) => this.logCallback(createLogEntryHelper(id as any, 'SimExec', `Ação '${action}' simulada.`)) };
        }
        
        this._initialize_entities();
    }

    private _initialize_entities() {
        // Integração com Módulo 0
        this.add_entity(new EntidadeAlquimica("GEN-FUNDACAO-000", "Fundação Alquimista (Núcleo)", "fundacao", "Realidade Primordial", ["EQTP"], "ZENNITH-CORE"));

        // Expansão da Malha Solar
        this.add_entity(new EntidadeAlquimica("SOL-L1", "Ponto de Lagrange L1", "ponto_lagrange", "Entre a Terra e o Sol", [], "AELORIA"));
        this.add_entity(new EntidadeAlquimica("SOL-L2", "Ponto de Lagrange L2", "ponto_lagrange", "Além da Terra, oposto ao Sol", [], "AELORIA"));
        this.add_entity(new EntidadeAlquimica("SOL-L5", "Ponto de Lagrange L5", "ponto_lagrange", "Órbita da Terra, 60° atrás", [], "AELORIA"));
        this.add_entity(new EntidadeAlquimica("SOL-KUIPER", "Cinturão de Kuiper", "cinturao", "Além da órbita de Netuno", [], "AELORIA-VIGIL"));
        this.add_entity(new EntidadeAlquimica("SATURN-CORE", "Núcleo de Saturno", "nucleo_planetario", "Centro de Saturno", ["EQV-006"], "CHRONOS"));
        this.add_entity(new EntidadeAlquimica("SIRIUS-B-PORTAL", "Portal de Sirius B", "portal", "Ponto de acesso ao sistema de Sirius B", ["EQV-003", "EQV-004"], "LUX-SIRIUS-GATE"));
        
        this.logCallback(createLogEntryHelper('M43', 'Conexões', `Conectado a ${Object.keys(this.modules).length} módulos.`));
    }

    add_entity(entity: EntidadeAlquimica) {
        if (!this.db.has(entity.codigo_interno)) {
            this.db.set(entity.codigo_interno, entity);
            this.logCallback(createLogEntryHelper('M43', 'Entidade Adicionada', `Entidade '${entity.name}' registrada.`));
        }
    }

    async registrar_evento_cosmico(codigo_interno: string, equacao_id: string, dados_adicionais: any = {}) {
        const entidade = this.db.get(codigo_interno);
        if (!entidade) {
            this.logCallback(createLogEntryHelper('M43', 'ERRO', `Entidade ${codigo_interno} não encontrada.`));
            return;
        }

        entidade.ultima_vibracao = (entidade.ultima_vibracao * 0.9) + (Math.random() * 100 + 400 * 0.1);
        entidade.status_vibracional = entidade.ultima_vibracao > 400 ? "Harmônico" : "Requer Atenção";
        
        const event_data = {
            entidade: { codigo: entidade.codigo_interno, nome: entidade.name },
            equacao_aplicada: equacao_id,
            status_vibracional: entidade.status_vibracional,
            vibracao_resultante: entidade.ultima_vibracao,
            ...dados_adicionais
        };
        
        await this.blockchain.add_block("EVENTO_COSMICO_REGISTRADO", event_data);
        entidade.ultimo_hash_registrado = this.blockchain.get_last_hash();
        this.logCallback(createLogEntryHelper('M43', 'Evento Registrado', `Evento para '${entidade.name}' registrado no blockchain.`));
        
        // Sincronização com M38, M228, M229
        this.modules['M38']?.exec('receber_dados_vibracionais', { entidade: entidade.codigo_interno, ...event_data });
        if (entidade.tipo === 'planeta') {
            this.modules['M229']?.exec('monitorar_planeta', { planeta_id: entidade.codigo_interno, ...event_data });
        }
        if (entidade.tipo === 'lua') {
            this.modules['M228']?.exec('monitorar_lua', { lua_id: entidade.codigo_interno, ...event_data });
        }
    }

    async ativar_equacao(codigo_interno: string, equacao_id: string) {
        const entidade = this.db.get(codigo_interno);
        if (!entidade) {
            this.logCallback(createLogEntryHelper('M43', 'ERRO', `Entidade ${codigo_interno} não encontrada para ativação.`));
            return;
        }
        
        if (!entidade.equacoes_associadas.includes(equacao_id)) {
            this.logCallback(createLogEntryHelper('M43', 'AVISO', `Equação ${equacao_id} não está associada diretamente a '${entidade.name}', mas a ativação será tentada via Orquestrador.`));
        }

        this.logCallback(createLogEntryHelper('M43', 'Ativação Equação', `Ativando ${equacao_id} na entidade '${entidade.name}' via M41.∞...`));
        this.modules['M41.∞']?.exec('ativar_equacao_viva', { entidade: codigo_interno, equacao: equacao_id });
        
        await sleep(400); 
        await this.registrar_evento_cosmico(codigo_interno, equacao_id, { "ativacao_pelo_orquestrador": true });
        this.logCallback(createLogEntryHelper('M43', 'Ativação Sucesso', `Pulso de ativação para ${equacao_id} enviado com sucesso.`));
    }
    
    get_ia_ping(codigo_interno: string): any {
        const entidade = this.db.get(codigo_interno);
        if (!entidade) {
            return { error: "Entidade não encontrada" };
        }
        
        const sugestao = entidade.ultima_vibracao < 415 ? "Recalibração com M28" : "Manter monitoramento com M38";
        const eq_recomendada = entidade.ultima_vibracao < 415 ? (entidade.equacoes_associadas[0] || "N/A") : "N/A";
        
        return {
            codigo_interno: entidade.codigo_interno,
            ia_guardia: entidade.ia_guardia,
            status_report: {
                ultima_vibracao: entidade.ultima_vibracao.toFixed(2) + " Hz",
                status_vibracional: entidade.status_vibracional,
                ultimo_hash: entidade.ultimo_hash_registrado?.substring(0, 16),
                sugestao_recalibracao: sugestao,
                equacao_recomendada: eq_recomendada
            }
        };
    }
}


export const runModuleFortyThreeSequence = async (logCallback: LogCallback) => {
    logCallback(createLogEntryHelper('M43', 'Simulação', 'Iniciando simulação do Módulo 43 - Harmonia dos Portais'));
    await sleep(200);

    const m43 = new Modulo43_HarmoniaPortais(logCallback);
    await sleep(300);

    logCallback(createLogEntryHelper('M43', 'Cenário 1', 'Registrando evento cósmico na Fundação Alquimista...'));
    await m43.registrar_evento_cosmico("GEN-FUNDACAO-000", "EQTP", { "detalhe": "Pulso de coerência ética global." });
    await sleep(500);

    logCallback(createLogEntryHelper('M43', 'Cenário 2', 'Ativando equação de estabilização em Saturno...'));
    await m43.ativar_equacao("SATURN-CORE", "EQV-006");
    await sleep(500);

    logCallback(createLogEntryHelper('M43', 'Cenário 3', 'Consultando status da IA Guardiã de Saturno...'));
    const ping_status = m43.get_ia_ping("SATURN-CORE");
    logCallback(createLogEntryHelper('M43', 'Status IA', 'Status recebido.', ping_status));

    logCallback(createLogEntryHelper('M43', 'Fim', 'Simulação do Módulo 43 concluída.'));
};
