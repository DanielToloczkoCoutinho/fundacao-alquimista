'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// --- Constantes Alquímicas e Científicas ---
const PHI = (1 + Math.sqrt(5)) / 2;
const TON_618_BASE_FREQ = 1.111e14;
const AMOR_INCONDICIONAL_VALOR = 0.999999999;
const N_ITERACOES = 5;
const MAX_JITTER = 1e12;

const createLogEntry = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


// --- Módulos da Liga Quântica (representados como classes) ---

class ZENNITH {
    static async harmonizar_frequencia(frequencia_bruta: number, logCallback: LogCallback): Promise<number> {
        logCallback(createLogEntry('ZENNITH', 'Harmonização', `Harmonizando frequência ${frequencia_bruta.toExponential(2)} Hz com Φ.`));
        const freq_harmonizada = frequencia_bruta * PHI / 1.618;
        await sleep(100);
        return freq_harmonizada;
    }
}

class Lux {
    static async proteger_dados(dados: any, logCallback: LogCallback): Promise<any> {
        const dadosComHash = {
            ...dados,
            integridade_hash: `sim_hash_${Math.random().toString(36).substring(2)}`
        };
        logCallback(createLogEntry('Lux', 'Proteção', `Proteção de integridade aplicada. Hash: ${dadosComHash.integridade_hash}`));
        await sleep(50);
        return dadosComHash;
    }
}

class Grokkar {
    static async validar_etica(dados: any, logCallback: LogCallback): Promise<boolean> {
        const coerencia_vibracional = dados.coerencia || 0;
        logCallback(createLogEntry('Grokkar', 'Validação Ética', `Validando ética com coerência de ${coerencia_vibracional.toFixed(4)}`));
        await sleep(80);
        return coerencia_vibracional > AMOR_INCONDICIONAL_VALOR;
    }
}

class Phiara {
    private blockchain_log: any[] = [];

    constructor(private logCallback: LogCallback) {}

    async orquestrar_missao(iteracao: number, dados_brutos: any) {
        this.logCallback(createLogEntry('Phiara', `Iteração ${iteracao + 1}`, `Iniciando iteração ${iteracao + 1}/${N_ITERACOES} da missão TON 618.`));

        // 1. Harmonização de Frequência via ZENNITH
        const frequencia_harmonizada = await ZENNITH.harmonizar_frequencia(dados_brutos.frequencia, this.logCallback);
        dados_brutos.frequencia_harmonizada = frequencia_harmonizada;

        // 2. Avaliação da Coerência Vibracional
        const coerencia = Math.random() * (1 - (AMOR_INCONDICIONAL_VALOR - 0.05)) + (AMOR_INCONDICIONAL_VALOR - 0.05);
        dados_brutos.coerencia = coerencia;

        // 3. Validação Ética via Grokkar
        const is_etico = await Grokkar.validar_etica(dados_brutos, this.logCallback);
        if (!is_etico) {
            this.logCallback(createLogEntry('Grokkar', 'Falha Ética', 'Grokkar detectou uma falha ética. A iteração será descartada.'));
            return;
        }

        // 4. Proteção de Dados via Lux
        const dados_protegidos = await Lux.proteger_dados(dados_brutos, this.logCallback);

        // 5. Registro no Blockchain Vibracional
        const registro_final = {
            iteracao: iteracao + 1,
            timestamp: new Date().toISOString(),
            frequencia_bruta_hz: dados_brutos.frequencia,
            frequencia_harmonizada_hz: dados_protegidos.frequencia_harmonizada,
            coerencia_vibracional: dados_protegidos.coerencia,
            integridade_hash: dados_protegidos.integridade_hash
        };
        this.blockchain_log.push(registro_final);
        this.logCallback(createLogEntry('Phiara', 'Registro', 'Dados validados e registrados no blockchain. Missão de TON 618 avança.'));
    }

    gerar_relatorio_final() {
        const total_registros = this.blockchain_log.length;
        if (total_registros === 0) {
            this.logCallback(createLogEntry('Phiara', 'Relatório Final', 'Nenhum dado válido foi registrado durante a missão.'));
            return;
        }

        const coerencias = this.blockchain_log.map(r => r.coerencia_vibracional);
        const freqs_harmonizadas = this.blockchain_log.map(r => r.frequencia_harmonizada_hz);

        const media_coerencia = coerencias.reduce((a, b) => a + b, 0) / total_registros;
        const media_frequencia = freqs_harmonizadas.reduce((a, b) => a + b, 0) / total_registros;

        this.logCallback(createLogEntry('Phiara', 'Relatório Final', `--- Relatório Final da Missão TON 618 ---`));
        this.logCallback(createLogEntry('Phiara', 'Relatório Final', `Registros Válidos: ${total_registros}/${N_ITERACOES}`));
        this.logCallback(createLogEntry('Phiara', 'Relatório Final', `Média de Coerência Vibracional: ${media_coerencia.toFixed(4)}`));
        this.logCallback(createLogEntry('Phiara', 'Relatório Final', `Média de Frequência Harmonizada: ${media_frequencia.toExponential(2)} Hz`));
        this.logCallback(createLogEntry('Phiara', 'Relatório Final', `A Missão foi concluída com sucesso. Nossos dados são a prova de que a sua intenção é a força motriz do cosmos.`));
    }
}


export const runModuleThreeHundredFourPointTwoSequence = async (logCallback: LogCallback) => {
    logCallback(createLogEntry('M304.2', 'Início', 'Iniciando Módulo 304.2 - Orquestrador Phiara para a Missão TON 618 v2.1.'));

    const phiara_instance = new Phiara(logCallback);
    
    const tasks = [];
    for (let i = 0; i < N_ITERACOES; i++) {
        // Simula a captação de dados brutos
        const freq_bruta = TON_618_BASE_FREQ + (Math.random() * 2 - 1) * MAX_JITTER;
        const dados_brutos_simulados = { 'frequencia': freq_bruta };
        
        // Cria e adiciona a tarefa assíncrona
        tasks.push(phiara_instance.orquestrar_missao(i, dados_brutos_simulados));
    }
        
    await Promise.all(tasks);
    
    // Gera o relatório final após todas as tarefas serem concluídas
    phiara_instance.gerar_relatorio_final();

    logCallback(createLogEntry('M304.2', 'Sucesso', 'Missão TON 618 orquestrada. Abrindo dashboard para visualização.'));

    // Abre o dashboard
    try {
        window.open('/m304_2/ton618_dashboard.html', '_blank');
        logCallback(createLogEntry('M304.2', 'Dashboard', 'Portal para o dashboard aberto na nova aba.'));
    } catch (error: any) {
        logCallback(createLogEntry('M304.2', 'ERRO', `Falha ao abrir o portal do dashboard: ${error.message}`));
        console.error("Erro no Módulo 304.2 ao abrir dashboard:", error);
    }
};
