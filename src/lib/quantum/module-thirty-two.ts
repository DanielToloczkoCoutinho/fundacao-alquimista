'use client';
import { type AnyLogEntry } from './module-zero';
import { runLuxEquationValidation } from './module-two-hundred-twenty-nine';

// Harmonização da tipagem
export type ModuleThirtyTwoLogEntry = AnyLogEntry;

export type RegistroTravessiaParalela = {
  módulo: 'M32';
  realidade_destino: string;
  risco_estimado: number; // 0.0 a 1.0
  coerencia_causal: 'alta' | 'média' | 'baixa';
  alinhamento_etico: 'aprovado' | 'condicional' | 'negado';
  status: 'autorizada' | 'negada' | 'em análise';
  timestamp: number;
};

type LogCallback = (entry: AnyLogEntry) => void;

const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void) => {
  logCallback(entry);
};

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

// --- Mocks para simulação de módulos interconectados ---
const mockModule = (name: string, log: LogCallback) => ({
    exec: (action: string, payload?: any): any => {
        log(createLogEntryHelper(name as any, 'Execução', `Ação simulada '${action}' recebida`, payload));
        if (name === 'M3') return { coerencia: Math.random() > 0.3 ? 'alta' : 'média', risco_paradoxo: Math.random() * 0.2 };
        if (name === 'M5') return { alinhamento: Math.random() > 0.2 ? 'aprovado' : 'condicional' };
        return { status: "SUCESSO" };
    }
});


class Modulo32_NavegadorEtico {
    private log: LogCallback;
    private m1: any;
    private m3: any;
    private m5: any;
    private m7: any;
    private m21: any;
    private m30: any;
    private m105: any;

    constructor(logCallback: LogCallback) {
        this.log = logCallback;
        this.m1 = mockModule('M1', logCallback);
        this.m3 = mockModule('M3', logCallback);
        this.m5 = mockModule('M5', logCallback);
        this.m7 = mockModule('M7', logCallback);
        this.m21 = mockModule('M21', logCallback);
        this.m30 = mockModule('M30', logCallback);
        this.m105 = mockModule('M105', logCallback);
        this.log(createLogEntryHelper('M32', 'Inicialização', 'Navegador Ético de Realidades Paralelas inicializado.'));
    }

    private calcularRisco(params: { intencao: string }): number {
        this.log(createLogEntryHelper('M32', 'Cálculo Risco', `Calculando risco para intenção: "${params.intencao}"`));
        let riscoBase = 0.1;
        if (params.intencao.toLowerCase().includes("instabilidade")) riscoBase = 0.6;
        if (params.intencao.toLowerCase().includes("observação")) riscoBase = 0.05;
        return riscoBase + (Math.random() * 0.2);
    }
    
    private consultarModulo3(params: { realidade_destino: string }): 'alta' | 'média' | 'baixa' {
        const { coerencia } = this.m3.exec('prever_coerencia_causal', params);
        return coerencia;
    }

    private consultarModulo5(params: { intencao: string }): 'aprovado' | 'condicional' | 'negado' {
        const { alinhamento } = this.m5.exec('validar_etica_travessia', params);
        return alinhamento;
    }

    public avaliarTravessia(params: { realidade_destino: string; origem: string; intencao: string; }): RegistroTravessiaParalela {
        this.log(createLogEntryHelper('M32', 'Avaliação', `Iniciando avaliação de travessia para: ${params.realidade_destino}`));
        
        // Integração com M229 como motor
        this.log(createLogEntryHelper('M229', 'Motor', `Utilizando M229 como motor de coerência.`));
        const motorCoerencia = runLuxEquationValidation();
        const unificacao = motorCoerencia.EQ012;
        
        const riscoBase = this.calcularRisco(params);
        // O motor M229 afina o cálculo de risco
        const risco = riscoBase * (1.1 - unificacao); 
        this.log(createLogEntryHelper('M32', 'Cálculo Risco', `Risco ajustado pela coerência M229: ${risco.toFixed(4)}`));
        
        const coerencia = this.consultarModulo3(params);
        const etica = this.consultarModulo5(params);
        
        const isAutorizada = risco < 0.4 && coerencia === 'alta' && etica === 'aprovado';
        const status = isAutorizada ? 'autorizada' : 'em análise';

        if(isAutorizada) {
            this.log(createLogEntryHelper('M21', 'Execução', `Travessia autorizada. M21 notificado para execução.`));
            this.m21.exec('executar_travessia_paralela', { ...params, risco, coerencia, etica });
        } else {
             this.log(createLogEntryHelper('M32', 'Análise', `Travessia não autorizada diretamente. Requer deliberação.`));
             this.m7.exec('deliberar_travessia_risco', { ...params, risco, coerencia, etica });
        }

        const registro: RegistroTravessiaParalela = {
            módulo: 'M32',
            realidade_destino: params.realidade_destino,
            risco_estimado: risco,
            coerencia_causal: coerencia,
            alinhamento_etico: etica,
            status,
            timestamp: Date.now()
        };
        
        this.m1.exec('registrar_evento_seguranca', { evento: 'Avaliação de Travessia', registro });
        this.log(createLogEntryHelper('M32', 'Conclusão Avaliação', `Avaliação concluída com status: ${status}`, registro));

        return registro;
    }
}

export const runModuleThirtyTwoSequence = async (log: LogCallback) => {
    const navegador = new Modulo32_NavegadorEtico(log);
    
    log(createLogEntryHelper('M32', 'Cenário 1', 'Avaliando travessia de baixo risco para observação.'));
    navegador.avaliarTravessia({
        origem: "Realidade_Primaria",
        realidade_destino: "Realidade_Harmonica_742",
        intencao: "Observação pacífica para estudo de padrões de coerência."
    });
    
    await sleep(1000);
    
    log(createLogEntryHelper('M32', 'Cenário 2', 'Avaliando travessia de alto risco para intervenção.'));
    navegador.avaliarTravessia({
        origem: "Realidade_Primaria",
        realidade_destino: "Realidade_Dissonante_13",
        intencao: "Intervenção direta para reverter instabilidade."
    });
};
