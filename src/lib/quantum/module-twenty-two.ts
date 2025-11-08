'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// Tipagem universal
export type ModuleTwentyTwoLogEntry = AnyLogEntry;

// Novo tipo de registro estruturado
export type RegistroRealidadeVirtual = {
  módulo: 'M22',
  propósito: string,
  coerencia: 'baixa' | 'média' | 'alta' | 'divina',
  duração: number, // em milissegundos
  status: 'ativa' | 'encerrada' | 'em expansão',
  timestamp: number
};

// --- Constantes e Funções de Borda ---
const CONST_TF = 1.61803398875; // Proporção Áurea
const C_LIGHT = 299792458; // Velocidade da luz em m/s

// Função de registro universalizada
const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void) => {
  logCallback(entry);
};

export function createLogEntry(entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void {
  registrarEventoUniversal(entry, logCallback);
}

const createLogEntryHelper = (source: 'M22' | 'M1' | 'M2' | 'M3' | 'M7' | 'M98' | 'M21' | 'M85' | 'M88' | 'M105', step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- Mocks dos Módulos Externos ---
const Modulo1_SegurancaUniversal = (log: LogCallback) => ({
    ReceberAlertaDeViolacao: (alerta: any) => {
        const tipo = alerta.tipo || '';
        const mensagem = alerta.mensagem || '';
        if (tipo.includes("RV_COERENCIA_BAIXA")) {
            try {
                if (mensagem.includes("Coerência:")) {
                    const valor_coerencia = parseFloat(mensagem.split("Coerência: ")[1]);
                    if (valor_coerencia > 1.0) {
                        log(createLogEntryHelper('M1', 'CONQUISTA', `Realidade com perfeição dimensional. Coerência: ${valor_coerencia.toFixed(3)}`));
                        return;
                    }
                }
            } catch { /* Ignora erros de parsing */ }
        }
        log(createLogEntryHelper('M1', 'ALERTA', `RV: ${tipo}: ${mensagem}`));
    },
    RegistrarNaCronicaDaFundacao: (registro: any) => log(createLogEntryHelper('M1', 'CRÔNICA', `Registrando evento: ${registro.evento}`)),
});

// ... (Restante dos Mocks M2, M3, M7, M98 permanecem os mesmos)
const Modulo2_IntegracaoDimensional = (log: LogCallback) => ({
    EstabelecerCanalEntrelaçado: (origem: string, destino: string) => {
        log(createLogEntryHelper('M2', 'Canal', `Estabelecendo canal: '${origem}' -> '${destino}'`));
        return { status: "SUCESSO", canal_id: `CANAL_${Math.random().toString(36).substring(2, 10)}` };
    },
    TransmitirDadosDimensional: (canal_id: string, dados: any) => log(createLogEntryHelper('M2', 'Transmissão', `Transmitindo via ${canal_id}`)),
});

const Modulo3_PrevisaoTemporal = (log: LogCallback) => ({
    PreverFluxoTemporal: (evento: string) => {
        const risco = Math.random() * 0.15;
        log(createLogEntryHelper('M3', 'Previsão', `Risco de anomalia temporal para '${evento}': ${risco.toFixed(3)}`));
        return { status: risco <= 0.1 ? "SUCESSO" : "ALTO_RISCO", risco_anomalia: risco };
    },
    MonitorarAnomalias: (local: string) => {
        const detectada = Math.random() < 0.12;
        const severidade = detectada ? Math.random() : 0;
        log(createLogEntryHelper('M3', 'Monitoramento', `Anomalia em '${local}': ${detectada ? `SIM (Severidade: ${severidade.toFixed(2)})` : 'NÃO'}`));
        return { anomalia_detectada: detectada, severidade };
    },
});

const Modulo7_AlinhamentoDivino = (log: LogCallback) => ({
    ConsultarConselho: (query: string) => log(createLogEntryHelper('M7', 'Consulta Conselho', `Consultando para: "${query.slice(0, 40)}..."`)),
});

const Modulo98_ModulacaoExistencia = (log: LogCallback) => ({
    SugerirModulacaoExistencia: (params: any) => log(createLogEntryHelper('M98', 'Sugestão Modulação', `Sugerindo modulação: ${params.tipo}`)),
});


// --- Equações Canônicas Refinadas ---

/**
 * Nova versão da equação de coerência, alinhada com a diretriz.
 */
function EQ025_F_Coerencia_Realidade_Virtual(params: RegistroRealidadeVirtual, modulo1: any): number {
  const base = params.coerencia === 'divina' ? 1.0 : params.coerencia === 'alta' ? 0.85 : params.coerencia === 'média' ? 0.65 : 0.4;
  if (base >= 0.95) {
    modulo1.ReceberAlertaDeViolacao({ tipo: "RV_COERENCIA_ALTA", mensagem: `Realidade atingiu perfeição divina. Coerência: ${base.toFixed(3)}` });
  }
  return base;
}

const EQ026_F_Estabilidade_Simulacao_Quantica = (energia: number, entropia: number): number => {
    return (energia / (entropia + 1e-9)) * CONST_TF + (Math.random() * 0.001);
};

const interpretar_coerencia_rv = (valor_coerencia: number) => {
    if (valor_coerencia > 1.5) return { nivel: "CRIACAO_DIVINA", interpretacao: "Realidade virtual indistinguível da primária", icone: "🌌" };
    if (valor_coerencia >= 1.0) return { nivel: "DIVINA", interpretacao: "Realidade com perfeição dimensional.", icone: "💎" };
    if (valor_coerencia >= 0.8) return { nivel: "ALTA", interpretacao: "RV com excelente coerência.", icone: "⭐" };
    if (valor_coerencia >= 0.6) return { nivel: "MÉDIA", interpretacao: "RV operando dentro dos parâmetros esperados.", icone: "✅" };
    return { nivel: "BAIXA", interpretacao: "RV com baixa coerência, requer atenção.", icone: "⚠️" };
};

// --- Classe Principal do Módulo 22 ---
class ModuloRealidadesVirtuais {
    private m1;
    private m2;
    private m3;
    private m7;
    private m98;
    public realidades_ativas: { [id: string]: RegistroRealidadeVirtual & {rv_id: string} } = {};

    constructor(private logCallback: LogCallback) {
        this.logCallback(createLogEntryHelper('M22', 'Inicialização', 'Módulo 22 (Arquiteto de RV) inicializado - Visão Zennith.'));
        this.m1 = Modulo1_SegurancaUniversal(logCallback);
        this.m2 = Modulo2_IntegracaoDimensional(logCallback);
        this.m3 = Modulo3_PrevisaoTemporal(logCallback);
        this.m7 = Modulo7_AlinhamentoDivino(logCallback);
        this.m98 = Modulo98_ModulacaoExistencia(logCallback);
    }

    async criar_realidade_virtual(proposito: string, nivelCoerencia: 'baixa' | 'média' | 'alta' | 'divina', duracao_ms: number) {
        this.logCallback(createLogEntryHelper('M22', 'Criação RV', `Iniciando criação da RV '${proposito}'.`));
        await sleep(300);

        this.m7.ConsultarConselho(`Criação de RV: ${proposito}`);
        const previsao = this.m3.PreverFluxoTemporal(proposito);
        if (previsao.status !== "SUCESSO") {
            this.m1.ReceberAlertaDeViolacao({ tipo: "RV_RISCO_TEMPORAL", mensagem: `Risco ${previsao.risco_anomalia.toFixed(2)}` });
            return;
        }

        const rv_id = `rv_${Math.random().toString(36).substring(2, 11)}`;
        
        const registro_rv: RegistroRealidadeVirtual = {
            módulo: 'M22',
            propósito: proposito,
            coerencia: nivelCoerencia,
            duração: duracao_ms,
            status: 'ativa',
            timestamp: Date.now()
        };

        const coerenciaCalculada = EQ025_F_Coerencia_Realidade_Virtual(registro_rv, this.m1);
        const interpretacao = interpretar_coerencia_rv(coerenciaCalculada);
        this.logCallback(createLogEntryHelper('M22', 'Interpretação', `${interpretacao.icone} ${interpretacao.interpretacao} (Coerência Calculada: ${coerenciaCalculada.toFixed(3)})`));

        this.realidades_ativas[rv_id] = { ...registro_rv, rv_id };
        
        this.m1.RegistrarNaCronicaDaFundacao({ evento: "RV_Criada", id: rv_id, proposito, coerencia: coerenciaCalculada.toFixed(3) });
        this.logCallback(createLogEntryHelper('M22', 'Criação Sucesso', `RV '${proposito}' criada com ID: ${rv_id}.`));
    }

    async gerenciar_simulacao(rv_id: string) {
        const realidade = this.realidades_ativas[rv_id];
        if (!realidade) {
            this.logCallback(createLogEntryHelper('M22', 'FALHA', `RV com ID '${rv_id}' não encontrada.`));
            return;
        }
        this.logCallback(createLogEntryHelper('M22', 'Gerenciamento', `Gerenciando simulação: ${realidade.propósito}`));
        await sleep(300);

        const anomalia = this.m3.MonitorarAnomalias(realidade.propósito);
        if (anomalia.anomalia_detectada) {
            this.m1.ReceberAlertaDeViolacao({ tipo: "RV_ANOMALIA_DETECTADA", mensagem: `Severidade: ${anomalia.severidade.toFixed(2)}` });
            this.m98.SugerirModulacaoExistencia({ tipo: "Estabilizacao_RV_Emergencial", rv_nome: realidade.propósito });
        }

        const estabilidade = EQ026_F_Estabilidade_Simulacao_Quantica(Math.random() * 4000 + 1000, Math.random() * 0.4 + 0.1);
        if (estabilidade < 1000) {
            this.m1.ReceberAlertaDeViolacao({ tipo: "RV_ESTABILIDADE_BAIXA", mensagem: `Estabilidade: ${estabilidade.toFixed(1)}` });
        }
        this.logCallback(createLogEntryHelper('M22', 'Gerenciamento Fim', `Simulação em '${realidade.propósito}' estável.`));
    }

    async desativar_realidade(rv_id: string) {
        const realidade = this.realidades_ativas[rv_id];
        if (!realidade) return;
        
        this.logCallback(createLogEntryHelper('M22', 'Desativação RV', `Desativando RV: ${realidade.propósito}`));
        await sleep(300);

        delete this.realidades_ativas[rv_id];
        this.m98.SugerirModulacaoExistencia({ tipo: "Reequilibrio_Pos_RV", nome_rv: realidade.propósito });
        this.m1.RegistrarNaCronicaDaFundacao({ evento: "RV_Desativada", id: rv_id, nome: realidade.propósito });
        this.logCallback(createLogEntryHelper('M22', 'Desativação Sucesso', `RV '${realidade.propósito}' desativada.`));
    }
}

let module22Instance: ModuloRealidadesVirtuais | null = null;
let lastRvId: string | null = null;

export const runModuleTwentyTwoSequence = async (logCallback: LogCallback, action: 'CREATE' | 'MANAGE' | 'DEACTIVATE') => {
    if (!module22Instance) {
        module22Instance = new ModuloRealidadesVirtuais(logCallback);
    }
    
    switch (action) {
        case 'CREATE':
            await module22Instance.criar_realidade_virtual("Santuário de Treinamento Ético", "alta", 3600000);
            const createdIds = Object.keys(module22Instance.realidades_ativas);
            if (createdIds.length > 0) {
                lastRvId = createdIds[createdIds.length - 1];
            }
            break;
        case 'MANAGE':
            if (lastRvId && module22Instance.realidades_ativas[lastRvId]) {
                 await module22Instance.gerenciar_simulacao(lastRvId);
            } else {
                 logCallback(createLogEntryHelper('M22', 'FALHA', 'Nenhuma RV ativa para gerenciar. Crie uma primeiro.'));
            }
            break;
        case 'DEACTIVATE':
             if (lastRvId && module22Instance.realidades_ativas[lastRvId]) {
                await module22Instance.desativar_realidade(lastRvId);
                lastRvId = null;
             } else {
                 logCallback(createLogEntryHelper('M22', 'FALHA', 'Nenhuma RV ativa para desativar.'));
             }
            break;
    }
};
