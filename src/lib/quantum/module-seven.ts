'use client';
/**
 * MÓDULO 7: SOFA (Sistema de Orquestração da Fundação Anatheron) (Simulação TypeScript)
 * Versão 7.3.Ω
 */
import { runModuleThreeSequence } from './module-three';
import { runModuleFourSequence } from './module-four';
import { runModuleFiveSequence } from './module-five';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

type Step = {
    modulo: string;
    funcao: string;
    parametros: any;
};

type Sinfonia = {
    nome: string;
    sequencia: Step[];
};

const createLogEntry = (source: 'M7' | 'M0', step: string, message: string, data?: any): AnyLogEntry => ({
    step,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const PARTITURAS = {
    "GENESIS": {
        nome: "Sinfonia Gênesis",
        sequencia: [
            { modulo: "M3_Temporal", funcao: "runModuleThreeSequence", parametros: {} },
            { modulo: "M4_Geometrico", funcao: "runModuleFourSequence", parametros: {} },
            { modulo: "M5_Consciencia", funcao: "runModuleFiveSequence", parametros: {} },
        ]
    }
};

export class MaestroDaRealidade {
    private logCallback: LogCallback;

    constructor(logCallback: LogCallback) {
        this.logCallback = logCallback;
    }

    private _log(level: 'INFO' | 'CRÍTICO' | 'ERRO', message: string, data?: any) {
        // Simple mapping to a single log type for the UI
        this.logCallback(createLogEntry('M7', `${level}: ${message}`, data));
    }
    
    async executar_sinfonia(nome_sinfonia: keyof typeof PARTITURAS): Promise<void> {
        const partitura = PARTITURAS[nome_sinfonia];
        if (!partitura) {
            this._log('ERRO', `Sinfonia não encontrada: ${nome_sinfonia}`);
            return;
        }

        this._log('CRÍTICO', `INICIANDO SINFONIA: '${partitura.nome}'`);
        
        for (const [index, passo] of partitura.sequencia.entries()) {
            this._log('INFO', `Passo ${index + 1}: Executando ${passo.modulo}.${passo.funcao}`);
            
            try {
                switch (passo.modulo) {
                    case "M3_Temporal":
                        await runModuleThreeSequence(this.logCallback);
                        this.logCallback(createLogEntry('M0', `M3 Concluído`, `Previsão Temporal concluída.`));
                        break;
                    case "M4_Geometrico":
                        await runModuleFourSequence(this.logCallback);
                         this.logCallback(createLogEntry('M0', `M4 Concluído`, `Autenticação Cósmica concluída.`));
                        break;
                    case "M5_Consciencia":
                        await runModuleFiveSequence(this.logCallback);
                        this.logCallback(createLogEntry('M0', `M5 Concluído`, `Ponte de Comunicação estabelecida.`));
                        break;
                    default:
                        this._log('ERRO', `Módulo desconhecido no passo ${index + 1}: ${passo.modulo}`);
                }
            } catch (e: any) {
                this._log('ERRO', `Falha ao executar o passo ${index + 1}: ${e.message}`);
                // Stop the sinfonia on error
                return;
            }
        }
        
        this._log('CRÍTICO', `SINFONIA '${partitura.nome}' CONCLUÍDA`);
    }
}
