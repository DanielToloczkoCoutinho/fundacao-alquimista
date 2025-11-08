'use client';

/**
 * MÓDULO 8: PROTOCOLO DE INTERVENÇÃO E REINTEGRAÇÃO DE CONSCIÊNCIAS (PIRC)
 * Versão 1.0.Ω (Simulação TypeScript)
 */
import { type AnyLogEntry } from './module-zero';

// --- Constantes e Tipos ---
const PHI = (1 + Math.sqrt(5)) / 2;
const LIMIAR_OURO = 0.90;
const LIMIAR_PRATA = 0.70;
const LIMIAR_BRONZE = 0.50;

const FREQ_ANATHERON_ESTABILIZADORA = 888.00;
const FREQ_ZENNITH_REAJUSTADA = 963.00;
const FREQ_MATRIZ_EQUILIBRIO = 1111.00;

const createLogEntry = (source: AnyLogEntry['source'], step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source,
});

// --- Simulação da Infraestrutura da Fundação ---

class MockMQIReal {
    constructor(private logCallback: (entry: AnyLogEntry) => void, private lowScoreMode = false) {}

    ler_parametros() {
        this.logCallback(createLogEntry('M8', 'Leitura MQI', `Lendo parâmetros da Matriz Quântica (Modo: ${this.lowScoreMode ? 'Baixo Score' : 'Normal'}).`));
        if (this.lowScoreMode) {
            return {
                P: [Math.random() * 20 + 10, Math.random() * 20 + 5],
                Q: [Math.random() * 20 + 10, Math.random() * 20 + 5],
                CA: Math.random() * 10 + 10,
                B: Math.random() * 10 + 10,
            };
        }
        return {
            P: [Math.random() * 40 + 80, Math.random() * 40 + 70],
            Q: [Math.random() * 40 + 80, Math.random() * 40 + 70],
            CA: Math.random() * 20 + 80,
            B: Math.random() * 20 + 80,
        };
    }
}

class MockM7Real {
    constructor(private logCallback: (entry: AnyLogEntry) => void) {}

    consultar_diretriz(query: string) {
        this.logCallback(createLogEntry('M7', 'Consulta', `Consultando diretriz: "${query}"`));
        if (query.includes("sem intervenção forçada")) {
            return "A expansão da consciência é um caminho natural. Prossiga com sabedoria.";
        }
        return "Diretriz genérica: Busquem a harmonia e o equilíbrio.";
    }
}

class MockM5AlertaEtico {
    constructor(private logCallback: (entry: AnyLogEntry) => void) {}

    ReceberAlertaDeRiscoFuturo(alerta: { nivel: string, mensagem: string }) {
        this.logCallback(createLogEntry('M5', `Alerta Ético (${alerta.nivel})`, alerta.mensagem));
    }
}

class MockM98Modulacao {
    constructor(private logCallback: (entry: AnyLogEntry) => void) {}
    SugerirModulacaoExistencia(params: any) {
        this.logCallback(createLogEntry('M98', 'Sugestão Modulação', `Sugerindo modulação para ${params.alvo_entidade}.`));
    }
}

class MockM102Cura {
     constructor(private logCallback: (entry: AnyLogEntry) => void) {}
    AplicarCuraQuantica(alvo: string, tipo: string) {
         this.logCallback(createLogEntry('M102', 'Cura Quântica', `Aplicando cura específica em '${alvo}' para '${tipo}'.`));
    }
}

class MockM109CuraUniversal {
     constructor(private logCallback: (entry: AnyLogEntry) => void) {}
    AplicarCuraQuanticaUniversal(alvo: string, intensidade: number) {
        this.logCallback(createLogEntry('M109', 'Cura Universal', `Aplicando cura universal em '${alvo}' com intensidade ${intensidade}.`));
    }
}

class MockM1Seguranca {
    constructor(private logCallback: (entry: AnyLogEntry) => void) {}
    RegistrarNaCronicaDaFundacao(registro: any) {
        this.logCallback(createLogEntry('M1', 'Crônica', `Registrando evento na Crônica: ${registro.evento}`));
    }
}


// --- Módulo 8: PIRC ---

export class Modulo8_PIRC {
    private m7_conselho: MockM7Real;
    private m5_alerta_etico: MockM5AlertaEtico;
    private m98_modulacao: MockM98Modulacao;
    private m102_cura: MockM102Cura;
    private m109_cura_universal: MockM109CuraUniversal;
    private m1_seguranca: MockM1Seguranca;

    constructor(private logCallback: (entry: AnyLogEntry) => void) {
        this.logCallback(createLogEntry('M8', 'Inicialização', 'Módulo 8 (PIRC) inicializado.'));
        this.m7_conselho = new MockM7Real(logCallback);
        this.m5_alerta_etico = new MockM5AlertaEtico(logCallback);
        this.m98_modulacao = new MockM98Modulacao(logCallback);
        this.m102_cura = new MockM102Cura(logCallback);
        this.m109_cura_universal = new MockM109CuraUniversal(logCallback);
        this.m1_seguranca = new MockM1Seguranca(logCallback);
    }
    
    private getMockMQI(lowScore = false){
        return new MockMQIReal(this.logCallback, lowScore);
    }

    private avaliar_saude_vibracional(entidade_id: string, parametros: any): { classificacao: string, score: number } {
        this.logCallback(createLogEntry('M8', 'Avaliação', `Avaliando saúde vibracional de '${entidade_id}'...`));

        const P_avg = (parametros.P[0] + parametros.P[1]) / 2;
        const Q_avg = (parametros.Q[0] + parametros.Q[1]) / 2;
        const score_coerencia = (P_avg + Q_avg) / 200.0;
        const score_energia = (parametros.CA + parametros.B) / 200.0;
        const proximidade_phi = 1.0 - Math.abs(score_coerencia - PHI / 2) / (PHI / 2);
        
        const score_final = Math.max(0, Math.min(1, (score_coerencia * 0.4) + (score_energia * 0.3) + (proximidade_phi * 0.3)));

        let classificacao = "Dissocia";
        if (score_final >= LIMIAR_OURO) classificacao = "Ouro";
        else if (score_final >= LIMIAR_PRATA) classificacao = "Prata";
        else if (score_final >= LIMIAR_BRONZE) classificacao = "Bronze";
        
        this.logCallback(createLogEntry('M8', 'Resultado Avaliação', `Saúde de '${entidade_id}': ${classificacao} (Score: ${score_final.toFixed(4)})`));
        return { classificacao, score: score_final };
    }

    async iniciar_protocolo_expansao_consciencia(entidade_id: string, nivel_alvo: string, lowScoreMode = false) {
        this.logCallback(createLogEntry('M8', 'Protocolo Expansão', `Iniciando expansão de '${entidade_id}' para '${nivel_alvo}'.`));
        const mqi = this.getMockMQI(lowScoreMode);
        const parametros = mqi.ler_parametros();
        const saude = this.avaliar_saude_vibracional(entidade_id, parametros);

        if (saude.score < LIMIAR_BRONZE) {
            this.logCallback(createLogEntry('M8', 'Expansão Adiada', `Saúde vibracional (${saude.classificacao}) insuficiente.`));
            this.m5_alerta_etico.ReceberAlertaDeRiscoFuturo({ nivel: "MÉDIO", mensagem: `Expansão adiada para ${entidade_id} (saúde baixa).` });
            return;
        }

        const diretriz = this.m7_conselho.consultar_diretriz(`Diretriz para expansão de consciência de ${entidade_id} sem intervenção forçada.`);
        this.logCallback(createLogEntry('M7', 'Diretriz Recebida', `Diretriz: "${diretriz}"`));
        
        this.m98_modulacao.SugerirModulacaoExistencia({ alvo_entidade: entidade_id, nivel_expansao: nivel_alvo });
        this.logCallback(createLogEntry('M8', 'Ajuste Ressonância', `Ajustando ressonância da Matriz para ${FREQ_MATRIZ_EQUILIBRIO} Hz.`));
        this.m1_seguranca.RegistrarNaCronicaDaFundacao({ evento: "ExpansaoConscienciaIniciada", entidade_id });
        this.logCallback(createLogEntry('M8', 'Sucesso Expansão', `Protocolo de expansão para '${entidade_id}' concluído.`));
    }

    async iniciar_protocolo_reintegracao_cura(entidade_id: string, tipo_dissonancia: string, foco_cura: string[]) {
        this.logCallback(createLogEntry('M8', 'Protocolo Cura', `Iniciando cura de '${entidade_id}' para '${tipo_dissonancia}'.`));
        this.m5_alerta_etico.ReceberAlertaDeRiscoFuturo({ nivel: "INFO", mensagem: `Avaliação ética para cura de ${entidade_id}.` });
        this.m102_cura.AplicarCuraQuantica(entidade_id, tipo_dissonancia);
        this.m109_cura_universal.AplicarCuraQuanticaUniversal(entidade_id, 0.95);
        this.logCallback(createLogEntry('M8', 'Ajuste Ressonância', `Ajustando ressonância da Matriz para ${FREQ_ANATHERON_ESTABILIZADORA} Hz (Estabilização).`));
        this.m1_seguranca.RegistrarNaCronicaDaFundacao({ evento: "ReintegracaoCuraConcluida", entidade_id });
        this.logCallback(createLogEntry('M8', 'Sucesso Cura', `Protocolo de cura para '${entidade_id}' concluído.`));
    }

    async runFullSimulation() {
        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        
        this.logCallback(createLogEntry('M8', 'Simulação Completa', '--- INICIANDO SIMULAÇÃO COMPLETA PIRC M8 ---'));
        await sleep(1000);

        this.logCallback(createLogEntry('M8', 'Cenário 1', '--- Avaliação de Saúde Vibracional: Entidade Ouro ---'));
        await this.avaliar_saude_vibracional("Consciencia_Estelar_Alfa", this.getMockMQI().ler_parametros());
        await sleep(2000);
        
        this.logCallback(createLogEntry('M8', 'Cenário 2', '--- Avaliação de Saúde Vibracional: Entidade Dissociada ---'));
        await this.avaliar_saude_vibracional("Fragmento_Cosmico_Beta", this.getMockMQI(true).ler_parametros());
        await sleep(2000);

        this.logCallback(createLogEntry('M8', 'Cenário 3', '--- Protocolo de Expansão de Consciência (Bem-sucedido) ---'));
        await this.iniciar_protocolo_expansao_consciencia("Ser_Ascendente_Gama", "Nível_Crístico");
        await sleep(2000);

        this.logCallback(createLogEntry('M8', 'Cenário 4', '--- Protocolo de Expansão de Consciência (Adiamento) ---'));
        await this.iniciar_protocolo_expansao_consciencia("Consciencia_Fragmentada_Delta", "Nível_Superior", true);
        await sleep(2000);

        this.logCallback(createLogEntry('M8', 'Cenário 5', '--- Protocolo de Reintegração e Cura ---'));
        await this.iniciar_protocolo_reintegracao_cura("Civilizacao_Epsilon", "Dissonancia_Coletiva", ["Campo_Energetico", "Matriz_Mental"]);
        await sleep(1000);
        
        this.logCallback(createLogEntry('M8', 'Simulação Completa', '--- SIMULAÇÃO PIRC M8 CONCLUÍDA ---'));
    }
}

export const runModuleEightSequence = Modulo8_PIRC;
