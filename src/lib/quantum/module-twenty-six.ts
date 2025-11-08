'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// Harmonização da tipagem
export type ModuleTwentySixLogEntry = AnyLogEntry;

// Definição do novo tipo de registro
export type RegistroTravessiaInterdimensional = {
  módulo: 'M26',
  entidade: string,
  destino: string,
  classe_portal: 'estável' | 'flutuante' | 'colapsado' | 'transcendental',
  status: 'aberto' | 'em travessia' | 'concluído' | 'interrompido',
  timestamp: number
};

const createLogEntryHelper = (source: AnyLogEntry['source'], step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source,
});

// Refinamento da função de registro
const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void) => {
  logCallback(entry);
};

export function createLogEntry(entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void {
  registrarEventoUniversal(entry, logCallback);
}


const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

enum ClassePortal {
    OBSERVACAO = "OBSERVACAO",
    TRANSITO_LEVE = "TRANSITO_LEVE",
    TRANSITO_MISSAO = "TRANSITO_MISSAO",
    TRANSITO_CRITICO = "TRANSITO_CRITICO",
    TRANSCENDENTAL = "TRANSCENDENTAL",
}

enum StatusOperacao {
    AUTORIZADO = "AUTORIZADO",
    RECUSADO_SEGURANCA = "RECUSADO_SEGURANCA",
    RECUSADO_ETICA = "RECUSADO_ETICA",
    RECUSADO_ESTABILIDADE = "RECUSADO_ESTABILIDADE",
    RECUSADO_PSIQUICO = "RECUSADO_PSIQUICO",
    ESTABILIZADO_COM_SUCESSO = "ESTABILIZADO_COM_SUCESSO",
}

enum ModoOperacao {
    PRODUCAO = "PRODUCAO",
    TESTE = "TESTE",
    TREINAMENTO = "TREINAMENTO",
}

const POLITICAS_BASE: { [key: string]: any } = {
    [ClassePortal.OBSERVACAO]: {
        estabilidade_min: 3000,
        integridade_min: 10,
        balanco_min: 2000,
        seguranca_min: 0.7,
        leituras_consistentes: 1,
        avaliacao_psiquica: false,
        avaliacao_etica: false,
    },
    [ClassePortal.TRANSITO_LEVE]: {
        estabilidade_min: 8000,
        integridade_min: 15,
        balanco_min: 7000,
        seguranca_min: 0.85,
        leituras_consistentes: 3,
        avaliacao_psiquica: true,
        avaliacao_etica: true,
        eci_min: 0.8,
        pureza_min: 0.8,
    },
    [ClassePortal.TRANSITO_MISSAO]: {
        estabilidade_min: 12000,
        integridade_min: 20,
        balanco_min: 10000,
        seguranca_min: 0.95,
        leituras_consistentes: 5,
        avaliacao_psiquica: true,
        avaliacao_etica: true,
        eci_min: 0.9,
        pureza_min: 0.9,
    },
    [ClassePortal.TRANSITO_CRITICO]: {
        estabilidade_min: 15000,
        integridade_min: 25,
        balanco_min: 13000,
        seguranca_min: 0.98,
        leituras_consistentes: 7,
        avaliacao_psiquica: true,
        avaliacao_etica: true,
        eci_min: 0.95,
        pureza_min: 0.95,
    },
    [ClassePortal.TRANSCENDENTAL]: { // Nova política para portais transcendentais
        estabilidade_min: 25000,
        integridade_min: 50,
        balanco_min: 20000,
        seguranca_min: 0.99,
        leituras_consistentes: 12,
        avaliacao_psiquica: true,
        avaliacao_etica: true,
        eci_min: 0.98,
        pureza_min: 0.98,
    }
};

const POLITICAS_TESTE = Object.keys(POLITICAS_BASE).reduce((acc: any, key: string) => {
    const politica = POLITICAS_BASE[key as ClassePortal];
    acc[key as ClassePortal] = {
        ...politica,
        estabilidade_min: politica.estabilidade_min * 0.6,
        balanco_min: politica.balanco_min * 0.6,
        seguranca_min: politica.seguranca_min * 0.9,
    };
    return acc;
}, {} as { [key in ClassePortal]: any });

// --- Mocks dos Módulos Externos ---
const Modulo1_SegurancaUniversal = (log: LogCallback) => ({
    ReceberAlertaDeViolacao: (alerta: any) => registrarEventoUniversal(createLogEntryHelper('M1', 'ALERTA', `Segurança Portal: ${alerta.mensagem}`), log),
    RegistrarNaCronicaDaFundacao: (registro: any) => registrarEventoUniversal(createLogEntryHelper('M1', 'CRÔNICA', `Registrando evento: ${registro.evento}`), log),
});

const Modulo3_PrevisaoTemporal = (log: LogCallback) => ({
    PreverEstabilidadeEspacoTemporal: (localizacao: string, duracao: number) => {
        registrarEventoUniversal(createLogEntryHelper('M3', 'Previsão', `Prevendo estabilidade para '${localizacao}'`), log);
        return { estavel: Math.random() < 0.85, risco_anomalia: Math.random() * 0.15 };
    }
});

const Modulo7_AlinhamentoDivino = (log: LogCallback) => ({
    ConsultarConselho: (query: string) => registrarEventoUniversal(createLogEntryHelper('M7', 'Consulta', `Consultando para: "${query}"`), log),
});

const Modulo21_NavegadorInterdimensional = (log: LogCallback) => ({
    AtualizarMapaCosmico: (dadosRota: any) => registrarEventoUniversal(createLogEntryHelper('M21', 'Atualização Mapa', `Rota para '${dadosRota.destino}' atualizada com status '${dadosRota.status}'.`), log),
});

const Modulo25_AlquimiaConsciencia = (log: LogCallback) => ({
    AvaliarPreparacaoProjetor: (id: string, dados: any) => {
        registrarEventoUniversal(createLogEntryHelper('M25', 'Avaliação', `Avaliando projetor '${id}'`), log);
        const apto = Math.random() > 0.1; // 90% de chance de ser apto
        return { status: apto ? 'APTO' : 'NAO_APTO', mensagem: apto ? 'Pronto' : 'Instável', eci: Math.random() * 0.4 + 0.6 };
    }
});

const Modulo105_FonteViva = (log: LogCallback) => ({
    AmplificarPortal: (portalId: string, fator: number) => registrarEventoUniversal(createLogEntryHelper('M105', 'Amplificação', `Amplificando portal '${portalId}' com fator ${fator}.`), log),
});

class ModuloGerenciamentoPortaisEvoluido {
    private logCallback: LogCallback;
    private modulo1_seguranca: any;
    private modulo3_previsao: any;
    private modulo7_alinhamento: any;
    private modulo21_navegador: any;
    private modulo25_alquimia_consciencia: any;
    private modulo105_fonte_viva: any;
    private modo_operacao: ModoOperacao;

    constructor(logCallback: LogCallback, modo_operacao: ModoOperacao = ModoOperacao.PRODUCAO) {
        this.logCallback = logCallback;
        this.modo_operacao = modo_operacao;
        registrarEventoUniversal(createLogEntryHelper('M26', 'Inicialização', `Módulo 26 Evoluído inicializado em modo ${this.modo_operacao}.`), this.logCallback);
        this.modulo1_seguranca = Modulo1_SegurancaUniversal(logCallback);
        this.modulo3_previsao = Modulo3_PrevisaoTemporal(logCallback);
        this.modulo7_alinhamento = Modulo7_AlinhamentoDivino(logCallback);
        this.modulo21_navegador = Modulo21_NavegadorInterdimensional(logCallback);
        this.modulo25_alquimia_consciencia = Modulo25_AlquimiaConsciencia(logCallback);
        this.modulo105_fonte_viva = Modulo105_FonteViva(logCallback);
    }
    
    private _obter_politicas_ativas(): { [key: string]: any } {
        return this.modo_operacao === ModoOperacao.TESTE ? POLITICAS_TESTE : POLITICAS_BASE;
    }

    private _equacao_estabilidade_portal(energia: number, densidade: number, coerencia: number): number {
        return (energia * densidade) / (1 + (1 - coerencia));
    }

    private _equacao_integridade_espaco_temporal(distorcao: number, flutuacao: number): number {
        const CONST_TF = 1.61803398875;
        return CONST_TF / (distorcao + flutuacao + 1e-9);
    }
    
    private _equacao_seguranca_composta_evoluida(balanco: number, preparacao: number, risco: number, analise: any): number {
        const fator_consistencia = 1.0 - (analise?.coeficiente_variacao || 0);
        return Math.pow(balanco / 10000, 0.3) * Math.pow(preparacao, 0.3) * Math.pow(1 - risco, 0.2) * Math.pow(fator_consistencia, 0.2);
    }

    async detectar_singularidade_segura(localizacao: string, classe: ClassePortal) {
        registrarEventoUniversal(createLogEntryHelper('M26', 'Detecção', `Detectando singularidade segura em '${localizacao}'`), this.logCallback);
        const politicas = this._obter_politicas_ativas();
        const politica = politicas[classe];
        
        let leituras_estabilidade = [];
        for (let i = 0; i < politica.leituras_consistentes; i++) {
             const estabilidade = this._equacao_estabilidade_portal(Math.random() * 4000 + 1000, Math.random() * 1.5 + 0.5, Math.random() * 0.2 + 0.8);
             leituras_estabilidade.push(estabilidade);
             registrarEventoUniversal(createLogEntryHelper('M26', `Leitura ${i + 1}`, `Estabilidade parcial: ${estabilidade.toFixed(0)}`), this.logCallback);
             await sleep(100);
        }

        const media = leituras_estabilidade.reduce((a, b) => a + b, 0) / leituras_estabilidade.length;
        const variancia = leituras_estabilidade.map(x => Math.pow(x - media, 2)).reduce((a, b) => a + b, 0) / leituras_estabilidade.length;
        const desvio_padrao = Math.sqrt(variancia);
        const coeficiente_variacao = desvio_padrao / media;
        
        const analise_detalhada = { consistente: coeficiente_variacao < 0.15, coeficiente_variacao };

        if (!analise_detalhada.consistente) {
            return { status: "FALHA", motivo: "Leituras inconsistentes" };
        }
        
        const previsao = this.modulo3_previsao.PreverEstabilidadeEspacoTemporal(localizacao, 30);
        const risco_anomalia = previsao.risco_anomalia;
        const estabilidade_final = this._equacao_estabilidade_portal(Math.random() * 4000 + 1000, Math.random() * 1.5 + 0.5, Math.random() * 0.2 + 0.8);
        const integridade_final = this._equacao_integridade_espaco_temporal(Math.random() * 0.1, Math.random() * 0.01);
        const balanco_total = (estabilidade_final + integridade_final) * (1 - risco_anomalia);

        const metricas = {
            estabilidade: estabilidade_final,
            integridade: integridade_final,
            balanco_total: balanco_total,
            risco_anomalia: risco_anomalia,
        };

        return {
            status: "SUCESSO",
            portal_id: `portal_${Date.now()}`,
            metricas,
            analise: analise_detalhada
        };
    }
    
     private _aplicar_politica_classe_evoluida(classe: ClassePortal, metricas: any, avaliacao_psiquica: any | null, politicas_ativas: any): [boolean, string[]] {
        const politica = politicas_ativas[classe];
        const violacoes: string[] = [];

        if (metricas.estabilidade < politica.estabilidade_min) violacoes.push("Estabilidade baixa");
        if (metricas.integridade < politica.integridade_min) violacoes.push("Integridade baixa");
        if (metricas.balanco_total < politica.balanco_min) violacoes.push("Balanço insuficiente");
        if (politica.avaliacao_psiquica && avaliacao_psiquica?.eci < politica.eci_min) violacoes.push("ECI do projetor baixo");

        return [violacoes.length === 0, violacoes];
    }
    
    async executar_operacao_portal_avancada(localizacao: string, classe: ClassePortal, entidade_id?: string) {
        registrarEventoUniversal(createLogEntryHelper('M26', 'Operação Avançada', `Iniciando operação em '${localizacao}' (Classe: ${classe})`), this.logCallback);
        const politicas = this._obter_politicas_ativas();
        const politica = politicas[classe];

        this.modulo7_alinhamento.ConsultarConselho(`Operação portal ${classe} em ${localizacao}`);

        const deteccao = await this.detectar_singularidade_segura(localizacao, classe);
        if (deteccao.status !== "SUCESSO") {
            this.modulo1_seguranca.ReceberAlertaDeViolacao({ tipo: "ESTABILIDADE", mensagem: deteccao.motivo });
            return;
        }

        let metricas = deteccao.metricas;
        
        let avaliacao_psiquica = null;
        if (politica.avaliacao_psiquica && entidade_id) {
            avaliacao_psiquica = this.modulo25_alquimia_consciencia.AvaliarPreparacaoProjetor(entidade_id, {});
            if (avaliacao_psiquica.status !== "APTO") {
                 this.modulo1_seguranca.ReceberAlertaDeViolacao({ tipo: "PSIQUICO", mensagem: avaliacao_psiquica.mensagem });
                 return;
            }
        }
        
        const [valido, violacoes] = this._aplicar_politica_classe_evoluida(classe, metricas, avaliacao_psiquica, politicas);
        if(!valido){
             this.modulo1_seguranca.ReceberAlertaDeViolacao({ tipo: "SEGURANCA", mensagem: `Violação de política: ${violacoes.join(', ')}` });
             return;
        }

        const seguranca_composta = this._equacao_seguranca_composta_evoluida(
            metricas.balanco_total,
            avaliacao_psiquica?.eci ?? 1.0,
            metricas.risco_anomalia,
            deteccao.analise
        );

        if (seguranca_composta < politica.seguranca_min) {
            this.modulo1_seguranca.ReceberAlertaDeViolacao({ tipo: "SEGURANCA", mensagem: `Segurança composta insuficiente: ${seguranca_composta.toFixed(3)}` });
            return;
        }

        if(classe === ClassePortal.TRANSCENDENTAL) {
            this.modulo105_fonte_viva.AmplificarPortal(deteccao.portal_id, 1.5);
        }
        
        this.modulo21_navegador.AtualizarMapaCosmico({destino: localizacao, portal_id: deteccao.portal_id, status: 'aberto'});

        registrarEventoUniversal(createLogEntryHelper('M26', 'SUCESSO', `Operação autorizada com segurança de ${seguranca_composta.toFixed(3)}.`), this.logCallback);
        this.modulo1_seguranca.RegistrarNaCronicaDaFundacao({ evento: "OperacaoPortalAutorizada", localizacao, classe });
    }
}


export const runModuleTwentySixSequence = async (logCallback: LogCallback) => {
    const modulo26 = new ModuloGerenciamentoPortaisEvoluido(logCallback, ModoOperacao.TESTE);
    await modulo26.executar_operacao_portal_avancada("SETOR_ALFA_7", ClassePortal.OBSERVACAO);
    await sleep(1000);
    await modulo26.executar_operacao_portal_avancada("NEBULOSA_ORION_A", ClassePortal.TRANSITO_LEVE, "ENTIDADE_ESTAVEL_001");
};
