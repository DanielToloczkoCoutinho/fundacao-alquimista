'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const PHI = (1 + Math.sqrt(5)) / 2;
const CONST_TF = 1.61803398875;
const CONST_UNIVERSAL = 13.0;
const ETHICAL_CONFORMITY_THRESHOLD = 0.75;


// Harmonização da tipagem
export type ModuleTwentyFiveLogEntry = AnyLogEntry;

const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void) => {
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

// --- Mocks dos Módulos Externos ---
const Modulo1_SegurancaUniversal = (log: LogCallback) => ({
    ReceberAlertaDeViolacao: (alerta: any) => createLogEntry(createLogEntryHelper('M1', 'ALERTA', `Projeção da Consciência: ${alerta.mensagem}`), log),
    RegistrarNaCronicaDaFundacao: (registro: any) => createLogEntry(createLogEntryHelper('M1', 'CRÔNICA', `Registrando evento: ${registro.evento}`), log),
});

const Modulo2_IntegracaoDimensional = (log: LogCallback) => ({
    EstabelecerCanalEntrelaçado: (origem: string, destino: string, seguranca_hash: string) => {
        createLogEntry(createLogEntryHelper('M2', 'Canal', `Estabelecendo canal: '${origem}' -> '${destino}'`), log);
        return { status: "SUCESSO", canal_id: `canal_${Math.random().toString(36).substring(2, 10)}` };
    },
});

const Modulo7_AlinhamentoDivino = (log: LogCallback) => ({
    ConsultarConselho: (query: string) => {
        createLogEntry(createLogEntryHelper('M7', 'Consulta Conselho', `Consultando para: "${query.slice(0, 40)}..."`), log);
        return "Diretriz: Expansão consciente deve ser voluntária, ética e alinhada ao bem maior.";
    },
});

const Modulo8_PIRC = (log: LogCallback) => ({
    IniciarProtocoloCura: (alvo_id: string, tipo_cura: string) => createLogEntry(createLogEntryHelper('M8', 'Cura', `Iniciando cura '${tipo_cura}' para '${alvo_id}'`), log),
});

const Modulo98_ModulacaoExistencia = (log: LogCallback) => ({
    SugerirModulacaoExistencia: (params: any) => createLogEntry(createLogEntryHelper('M98', 'Sugestão Modulação', `Sugerindo modulação: ${params.tipo}`), log),
});


class ModuloAlquimiaConsciencia {
    private m1;
    private m2;
    private m7;
    private m8;
    private m98;
    private registros_projecao: any[] = [];

    constructor(private logCallback: LogCallback) {
        createLogEntry(createLogEntryHelper('M25', 'Inicialização', 'Módulo 25 - Alquimia da Consciência Expandida inicializado.'), this.logCallback);
        this.m1 = Modulo1_SegurancaUniversal(logCallback);
        this.m2 = Modulo2_IntegracaoDimensional(logCallback);
        this.m7 = Modulo7_AlinhamentoDivino(logCallback);
        this.m8 = Modulo8_PIRC(logCallback);
        this.m98 = Modulo98_ModulacaoExistencia(logCallback);
    }
    
    private _log(step: string, message: string, data?: any) {
        createLogEntry(createLogEntryHelper('M25', step, message, data), this.logCallback);
    }

    private _calcular_coerencia_interna_projetor(frequencias: number[], pureza: number): number {
        this._log('Cálculo', 'Calculando Coerência Interna do Projetor...');
        if (!frequencias || frequencias.length === 0) return 0.0;
        const soma = frequencias.reduce((a, b) => a + b, 0);
        const eci = (soma * pureza) / PHI;
        this._log('Resultado', `ECI: ${eci.toFixed(2)}`);
        return eci;
    }
    
    private _equacao_estabilidade_psiquica(estresse: number, coerencia_emocional: number): number {
        this._log('Cálculo', 'Calculando Estabilidade Psíquica...');
        const estabilidade = CONST_TF / (estresse + (1 - coerencia_emocional) + 1e-9);
        this._log('Resultado', `Estabilidade: ${estabilidade.toFixed(2)}`);
        return estabilidade;
    }

    private _equacao_probabilidade_colapso(eci: number, estabilidade: number): number {
        this._log('Cálculo', 'Calculando Probabilidade de Colapso...');
        const prob = 1 / (eci * estabilidade + 1e-9);
        this._log('Resultado', `Prob. Colapso: ${prob.toFixed(4)}`);
        return prob;
    }
    
    private _equacao_intervencao_alquimica(risco: number, potencial: number): number {
        this._log('Cálculo', 'Calculando Eficácia da Intervenção...');
        const eficacia = (potencial / (risco + 1e-9)) * CONST_TF;
        this._log('Resultado', `Eficácia: ${eficacia.toFixed(2)}`);
        return eficacia;
    }

    private _equacao_resiliencia_consciencia(eci: number, estabilidade: number, pureza: number): number {
        const resiliencia = (eci * estabilidade * pureza * CONST_UNIVERSAL) / 10000;
        return Math.max(0.0, Math.min(1.0, resiliencia));
    }
    
    async avaliar_preparacao_projetor(projetor_id: string, dados_psiquicos: any, intencao: any): Promise<any> {
        this._log('Avaliação', `Avaliando preparação de '${projetor_id}'`);
        
        const { frequencias_cerebrais, nivel_estresse, coerencia_emocional } = dados_psiquicos;
        const { pureza } = intencao;

        const eci = this._calcular_coerencia_interna_projetor(frequencias_cerebrais, pureza);
        const estabilidade = this._equacao_estabilidade_psiquica(nivel_estresse, coerencia_emocional);
        const probColapso = this._equacao_probabilidade_colapso(eci, estabilidade);

        await this.m7.ConsultarConselho(`Projeção de ${projetor_id}`);

        if (pureza < ETHICAL_CONFORMITY_THRESHOLD) {
            this.m1.ReceberAlertaDeViolacao({ tipo: "INTENCAO_NAO_ETICA", mensagem: `Pureza insuficiente: ${pureza.toFixed(2)}` });
            return { status: "FALHA", mensagem: "Intenção não ética." };
        }

        let status = "APTO";
        if (probColapso > 0.01) {
            status = "ALTO_RISCO";
            this.m1.ReceberAlertaDeViolacao({ tipo: "RISCO_COLAPSO", mensagem: `Probabilidade: ${probColapso.toFixed(4)}` });
        }
        
        const registro = { projetor_id, eci, estabilidade, probColapso, status, timestamp: new Date().toISOString() };
        this.registros_projecao.push(registro);
        this.m1.RegistrarNaCronicaDaFundacao({ evento: "AvaliacaoProjecao", ...registro });
        
        this._log('Conclusão Avaliação', `Status: ${status}`);
        return { status: "SUCESSO", detalhes: registro };
    }

    async monitorar_projecao(projetor_id: string, duracao: number) {
        this._log('Monitoramento', `Monitorando projeção de '${projetor_id}' por ${duracao}s.`);
        for (let i = 0; i < duracao; i++) {
            const eci = this._calcular_coerencia_interna_projetor([Math.random() * 400 + 300], Math.random() * 0.3 + 0.7);
            const estabilidade = this._equacao_estabilidade_psiquica(Math.random() * 0.3, Math.random() * 0.3 + 0.7);
            const probColapso = this._equacao_probabilidade_colapso(eci, estabilidade);

            this._log(`Iteração ${i + 1}`, `ECI: ${eci.toFixed(1)}, Estab: ${estabilidade.toFixed(1)}, Risco: ${probColapso.toFixed(4)}`);
            
            if (probColapso > 0.05) {
                this._log('INTERVENÇÃO', `Risco elevado detectado. Iniciando estabilização.`);
                const eficacia = this._equacao_intervencao_alquimica(probColapso, Math.random() * 0.2 + 0.8);
                this.m8.IniciarProtocoloCura(projetor_id, "Estabilizacao_Urgente");
                this.m98.SugerirModulacaoExistencia({ tipo: "Estabilizacao_Campo", projetor_id, eficacia });
            }
            await sleep(500);
        }
    }
}

export const runModuleTwentyFiveSequence = async (logCallback: LogCallback) => {
    const modulo25 = new ModuloAlquimiaConsciencia(logCallback);

    const dadosProjetor = {
        frequencias_cerebrais: [528.0, 432.0, 741.0, 852.0, 963.0],
        nivel_estresse: 0.05,
        coerencia_emocional: 0.95
    };
    const intencao = {
        proposito: "Exploracao_Conhecimento",
        pureza: 0.98
    };

    const avaliacao = await modulo25.avaliar_preparacao_projetor("CONSCIENCIA_LUMINOSA_001", dadosProjetor, intencao);

    if (avaliacao.status === "SUCESSO") {
        await modulo25.monitorar_projecao("CONSCIENCIA_LUMINOSA_001", 5);
        createLogEntry(createLogEntryHelper('M25', 'Fim', 'Projeção concluída com sucesso.'), logCallback);
    } else {
        createLogEntry(createLogEntryHelper('M25', 'Fim', `Projeção abortada: ${avaliacao.mensagem}`), logCallback);
    }
};
