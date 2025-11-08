'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const CONST_TF = 1.61803398875;
const IDEAL_SINPHONY_ALIGNMENT_SCORE = 0.95;

const createLogEntry = (source: AnyLogEntry['source'], step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- Mocks dos Módulos Externos ---
const Modulo1_SegurancaUniversal = (log: LogCallback) => ({
    ReceberAlertaDeViolacao: (alerta: any) => log(createLogEntry('M1', 'ALERTA', `Calibração/Vibração: ${alerta.mensagem}`)),
    RegistrarNaCronicaDaFundacao: (registro: any) => log(createLogEntry('M1', 'CRÔNICA', `Registrando evento: ${registro.evento}`)),
});

const Modulo7_AlinhamentoDivino = (log: LogCallback) => ({
    ConsultarConselho: (query: string) => {
        log(createLogEntry('M7', 'Consulta Conselho', `Consultando diretriz para: "${query.slice(0, 50)}..."`));
        return "Diretriz: A calibração precisa é fundamental para a integridade da realidade.";
    },
});


class ModuloAfinadorSupremo {
    private modulo1;
    private modulo7;
    private campos_vibracionais_monitorados: { [id: string]: any } = {};

    constructor(private logCallback: LogCallback) {
        this.logCallback(createLogEntry('M17', 'Inicialização', 'Módulo 17 - Afinador Supremo da Realidade ativado.'));
        this.modulo1 = Modulo1_SegurancaUniversal(logCallback);
        this.modulo7 = Modulo7_AlinhamentoDivino(logCallback);
    }

    private _equacao_calibracao_campo_vibracional(frequencia_alvo: number, frequencia_atual: number): number {
        this.logCallback(createLogEntry('M17', 'Cálculo', 'Calculando Equação de Calibração...'));
        const diferenca_frequencia = Math.abs(frequencia_alvo - frequencia_atual);
        const ajuste_necessario = (diferenca_frequencia * (Math.random() + 0.5)) / (0.95 * 0.98 * 1.0);
        this.logCallback(createLogEntry('M17', 'Resultado Cálculo', `Ajuste necessário: ${ajuste_necessario.toFixed(4)}`));
        return ajuste_necessario;
    }
    
    private _equacao_deteccao_dissonancia(score_alinhamento: number): boolean {
        this.logCallback(createLogEntry('M17', 'Cálculo', 'Calculando Equação de Detecção de Dissonância...'));
        const is_dissonante = score_alinhamento < IDEAL_SINPHONY_ALIGNMENT_SCORE;
        this.logCallback(createLogEntry('M17', 'Resultado Dissonância', `Dissonante: ${is_dissonante}`));
        return is_dissonante;
    }

    async calibrar_campo_vibracional(id_campo: string, frequencia_alvo: number, tipo_campo: string): Promise<{ campo_id?: string }> {
        this.logCallback(createLogEntry('M17', 'Calibração', `Calibrando '${id_campo}' para ${frequencia_alvo.toFixed(2)} Hz.`));
        await sleep(500);

        const frequencia_atual = frequencia_alvo * (Math.random() * 0.4 + 0.8);
        this.logCallback(createLogEntry('M17', 'Info', `Frequência atual: ${frequencia_atual.toFixed(2)} Hz.`));
        await sleep(500);

        this.modulo7.ConsultarConselho(`Calibração do campo '${id_campo}'`);
        await sleep(500);

        const ajuste_necessario = this._equacao_calibracao_campo_vibracional(frequencia_alvo, frequencia_atual);
        const nova_frequencia = frequencia_atual + ajuste_necessario * (Math.random() + 0.5);
        const score_alinhamento = 1.0 - (Math.abs(frequencia_alvo - nova_frequencia) / frequencia_alvo) * 0.5;

        const is_dissonante = this._equacao_deteccao_dissonancia(score_alinhamento);
        if (is_dissonante) {
            this.modulo1.ReceberAlertaDeViolacao({ tipo: "DISSONANCIA_VIBRACIONAL", mensagem: `Dissonância em '${id_campo}'.` });
        }
        await sleep(500);

        const campo_id = `campo_${Date.now()}`;
        this.campos_vibracionais_monitorados[campo_id] = { id_campo, tipo_campo, frequencia_alvo, frequencia_final: nova_frequencia, score_alinhamento };

        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "CalibracaoCampoVibracional", campo_id });
        this.logCallback(createLogEntry('M17', 'Sucesso', `Campo '${id_campo}' calibrado. Score: ${score_alinhamento.toFixed(4)}.`));
        return { campo_id };
    }

    async otimizar_fluxo_energetico(campo_id: string) {
        if (!this.campos_vibracionais_monitorados[campo_id]) {
            this.logCallback(createLogEntry('M17', 'FALHA', `Campo ${campo_id} não encontrado para otimização.`));
            return;
        }
        const campo = this.campos_vibracionais_monitorados[campo_id];
        this.logCallback(createLogEntry('M17', 'Otimização', `Otimizando fluxo para '${campo.id_campo}'.`));
        await sleep(500);

        this.modulo7.ConsultarConselho(`Otimização do fluxo de '${campo.id_campo}'`);
        await sleep(500);

        const fator_otimizacao = Math.random() * 0.15 + 0.05;
        campo.frequencia_final *= (1 + fator_otimizacao);
        campo.score_alinhamento = Math.min(1.0, campo.score_alinhamento + 0.05);

        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "OtimizacaoFluxoEnergetico", campo_id });
        this.logCallback(createLogEntry('M17', 'Sucesso', `Fluxo de '${campo.id_campo}' otimizado. Novo Score: ${campo.score_alinhamento.toFixed(4)}.`));
    }
}

// Global instance to hold state across calls
let module17Instance: ModuloAfinadorSupremo | null = null;
let lastCampoId: string | null = null;

export const runModuleSeventeenSequence = async (logCallback: LogCallback, action: 'CALIBRATE' | 'OPTIMIZE') => {
    if (!module17Instance) {
        module17Instance = new ModuloAfinadorSupremo(logCallback);
    }
    
    switch (action) {
        case 'CALIBRATE':
            const result = await module17Instance.calibrar_campo_vibracional('Campo_Coerencia_Universal', 777.0, 'Campo_Energético');
            if (result.campo_id) {
                lastCampoId = result.campo_id;
            }
            break;
        case 'OPTIMIZE':
            if (lastCampoId) {
                await module17Instance.otimizar_fluxo_energetico(lastCampoId);
            } else {
                logCallback(createLogEntry('M17', 'FALHA', 'Nenhum campo calibrado para otimizar. Calibre um primeiro.'));
            }
            break;
    }
};
