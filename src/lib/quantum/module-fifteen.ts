
'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const CONST_TF = 1.61803398875; // Proporção Áurea

const createLogEntry = (source: 'M15' | 'M1' | 'M7' | 'M8' | 'M9' | 'M45' | 'M98' | 'M102' | 'M109', step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- Mocks dos Módulos Externos ---
const Modulo1_SegurancaUniversal = (log: LogCallback) => ({
    ReceberAlertaDeViolacao: (alerta: any) => log(createLogEntry('M1', 'ALERTA', `Geofísico/Climático: ${alerta.mensagem}`)),
    RegistrarNaCronicaDaFundacao: (registro: any) => log(createLogEntry('M1', 'CRÔNICA', `Registrando evento: ${registro.evento}`)),
});
const Modulo7_AlinhamentoDivino = (log: LogCallback) => ({
    ConsultarConselho: (query: string) => {
        log(createLogEntry('M7', 'Consulta Conselho', `Consultando diretriz para: "${query.slice(0, 50)}..."`));
        return "Diretriz: Intervenções planetárias devem ser guiadas pelo Amor Incondicional.";
    },
});
const Modulo8_PIRC = (log: LogCallback) => ({
    avaliar_saude_vibracional: (entidade_id: string) => {
        log(createLogEntry('M8', 'Avaliação Saúde', `Avaliando saúde vibracional de ${entidade_id}`));
        return { classificacao: "Ouro", score: 0.95 };
    },
});
const Modulo9_MonitoramentoMalhaQuantica = (log: LogCallback) => ({
    GerarAlertaVisual: (tipo_alerta: string, mensagem: string) => {
        log(createLogEntry('M9', 'Dashboard', `Gerando alerta visual: ${tipo_alerta} - ${mensagem}`));
        return "Alerta visual gerado.";
    },
});
const Modulo45_CONCILIVM = (log: LogCallback) => ({
    deliberar_acao_emergencial: (proposta: any) => {
        log(createLogEntry('M45', 'CONCILIVM', `Deliberando sobre: ${proposta.proposta}`));
        return { decisao: "APROVADA", justificativa: "Alinhamento com a Vontade Soberana." };
    },
});
const Modulo98_ModulacaoExistencia = (log: LogCallback) => ({
    SugerirModulacaoExistencia: (params: any) => {
        log(createLogEntry('M98', 'Sugestão Modulação', `Sugerindo modulação para ${params.tipo}.`));
        return `Modulação sugerida: lux_harmonia_${params.tipo}`;
    },
});
const Modulo102_CamposMorfogeneticos = (log: LogCallback) => ({
    aplicar_cura_quantica_especifica: (alvo_id: string, tipo_cura: string) => {
        log(createLogEntry('M102', 'Cura Específica', `Aplicando cura '${tipo_cura}' em ${alvo_id}.`));
        return { status: "SUCESSO" };
    },
});
const Modulo109_CuraUniversal = (log: LogCallback) => ({
    aplicar_cura_universal: (alvo_id: string) => {
        log(createLogEntry('M109', 'Cura Universal', `Aplicando cura universal em ${alvo_id}.`));
        return { status: "SUCESSO" };
    },
});

class ModuloGerenciamentoEcossistemas {
    private modulo1;
    private modulo7;
    private modulo8;
    private modulo9;
    private modulo45;
    private modulo98;
    private modulo102;
    private modulo109;
    public ecossistemas_monitorados: { [id: string]: any } = {};

    constructor(private logCallback: LogCallback) {
        this.logCallback(createLogEntry('M15', 'Inicialização', 'Módulo 15 - Gerenciamento de Ecossistemas ativado.'));
        this.modulo1 = Modulo1_SegurancaUniversal(logCallback);
        this.modulo7 = Modulo7_AlinhamentoDivino(logCallback);
        this.modulo8 = Modulo8_PIRC(logCallback);
        this.modulo9 = Modulo9_MonitoramentoMalhaQuantica(logCallback);
        this.modulo45 = Modulo45_CONCILIVM(logCallback);
        this.modulo98 = Modulo98_ModulacaoExistencia(logCallback);
        this.modulo102 = Modulo102_CamposMorfogeneticos(logCallback);
        this.modulo109 = Modulo109_CuraUniversal(logCallback);
    }
    
    private _equacao_equilibrio_planetario(saude_ecossistema: number, nivel_dissonancia: number): number {
        this.logCallback(createLogEntry('M15', 'Cálculo', 'Calculando Equação de Equilíbrio Planetário...'));
        const fator_dissonancia = 1.0 / (1.0 + nivel_dissonancia);
        const equilibrio = (saude_ecossistema * CONST_TF) * fator_dissonancia;
        return Math.min(10.0, Math.max(0.0, equilibrio));
    }

    private _equacao_intervencao(dados_entrada: number): number {
         this.logCallback(createLogEntry('M15', 'Cálculo', 'Calculando Equação de Intervenção...'));
         return dados_entrada * CONST_TF;
    }

    async monitorar_ecossistema(id_planeta: string, tipo_ecossistema: string): Promise<{ecossistema_id?: string}> {
        this.logCallback(createLogEntry('M15', 'Monitoramento', `Monitorando ecossistema de '${id_planeta}' (${tipo_ecossistema}).`));
        await sleep(500);

        const saude_biodiversidade = Math.random();
        const nivel_poluicao = Math.random();
        const saude_ecossistema_calc = (saude_biodiversidade + (1 - nivel_poluicao)) / 2.0;
        const nivel_dissonancia_calc = 1.0 - saude_ecossistema_calc;

        this.modulo8.avaliar_saude_vibracional(id_planeta);
        await sleep(500);

        const equilibrio_planetario = this._equacao_equilibrio_planetario(saude_ecossistema_calc, nivel_dissonancia_calc);
        const ecossistema_id = `eco_${id_planeta.toLowerCase().replace(' ','_')}_${Date.now()}`;
        this.ecossistemas_monitorados[ecossistema_id] = {
            id_planeta, tipo_ecossistema, equilibrio_planetario,
        };

        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "MonitoramentoEcossistema", ecossistema_id, equilibrio_planetario });
        this.logCallback(createLogEntry('M15', 'Monitoramento Concluído', `Equilíbrio Planetário: ${equilibrio_planetario.toFixed(4)}. ID: ${ecossistema_id.slice(0,20)}...`));
        return { ecossistema_id };
    }

    async prever_e_intervir_climaticamente(ecossistema_id: string, proposito_intervencao: string) {
        this.logCallback(createLogEntry('M15', 'Intervenção', `Iniciando previsão e intervenção para ecossistema ID: ${ecossistema_id.slice(0,20)}...`));
        await sleep(500);

        const ecossistema = this.ecossistemas_monitorados[ecossistema_id];
        if (!ecossistema) {
            this.modulo1.ReceberAlertaDeViolacao({ tipo: "ECOSSISTEMA_NAO_ENCONTRADO", mensagem: `Ecossistema ${ecossistema_id} não encontrado.` });
            return;
        }

        const risco_desequilibrio = Math.random();
        this.logCallback(createLogEntry('M15', 'Previsão', `Risco de desequilíbrio climático previsto: ${(risco_desequilibrio * 100).toFixed(2)}%.`));
        await sleep(500);
        
        this.modulo7.ConsultarConselho(`Intervenção climática em ${ecossistema.id_planeta}`);
        await sleep(500);

        if (risco_desequilibrio > 0.7) {
            this.modulo45.deliberar_acao_emergencial({ proposta: `Intervenção Crítica em ${ecossistema.id_planeta}` });
            await sleep(500);
        }

        if (risco_desequilibrio > 0.3) {
            const fator_intervencao = this._equacao_intervencao(ecossistema.equilibrio_planetario);
            this.logCallback(createLogEntry('M15', 'Ação', `Iniciando intervenção com fator ${fator_intervencao.toFixed(4)}.`));
            
            this.modulo98.SugerirModulacaoExistencia({ tipo: "Reequilibrio_Climatico", planeta: ecossistema.id_planeta });
            await sleep(300);
            this.modulo102.aplicar_cura_quantica_especifica(ecossistema.id_planeta, "Regeneracao_Ecossistemica");
            await sleep(300);
            this.modulo109.aplicar_cura_universal(ecossistema.id_planeta);
            await sleep(300);
            
            this.modulo9.GerarAlertaVisual("INTERVENÇÃO CLIMÁTICA", `Intervenção bem-sucedida em ${ecossistema.id_planeta}.`);
            this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "IntervencaoClimatica", ecossistema_id, status: "ATIVADA_E_CONCLUIDA" });
            this.logCallback(createLogEntry('M15', 'Sucesso', `Intervenção em '${ecossistema.id_planeta}' concluída.`));
        } else {
            this.logCallback(createLogEntry('M15', 'Status', `Risco baixo. Intervenção não necessária para '${ecossistema.id_planeta}'.`));
        }
    }
}

// Global instance to hold state across calls
let module15Instance: ModuloGerenciamentoEcossistemas | null = null;
let lastEcoId: string | null = null;

export const runModuleFifteenSequence = async (logCallback: LogCallback, action: 'MONITOR' | 'INTERVENE', params: any) => {
    if (!module15Instance) {
        module15Instance = new ModuloGerenciamentoEcossistemas(logCallback);
    }
    
    switch (action) {
        case 'MONITOR':
            const monitorResult = await module15Instance.monitorar_ecossistema(params?.id_planeta || 'Planeta Veridia', params?.tipo_ecossistema || 'Floresta Exuberante');
            if (monitorResult && monitorResult.ecossistema_id) {
                lastEcoId = monitorResult.ecossistema_id;
            }
            break;
        case 'INTERVENE':
            if (lastEcoId) {
                await module15Instance.prever_e_intervir_climaticamente(lastEcoId, params?.proposito || 'Manutencao de Equilibrio');
            } else {
                logCallback(createLogEntry('M15', 'FALHA', 'Nenhum ecossistema monitorado para intervir. Monitore um primeiro.'));
            }
            break;
    }
};
