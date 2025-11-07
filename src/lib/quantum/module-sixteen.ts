
'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const CONST_TF = 1.61803398875; // Proporção Áurea

const createLogEntry = (source: 'M16' | 'M1' | 'M7' | 'M98', step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- Mocks dos Módulos Externos ---
const Modulo1_SegurancaUniversal = (log: LogCallback) => ({
    ReceberAlertaDeViolacao: (alerta: any) => log(createLogEntry('M1', 'ALERTA', `Ecossistema Artificial: ${alerta.mensagem}`)),
    RegistrarNaCronicaDaFundacao: (registro: any) => log(createLogEntry('M1', 'CRÔNICA', `Registrando evento: ${registro.evento}`)),
});

const Modulo7_AlinhamentoDivino = (log: LogCallback) => ({
    ConsultarConselho: (query: string) => {
        log(createLogEntry('M7', 'Consulta Conselho', `Consultando diretriz para: "${query.slice(0, 50)}..."`));
        return "Diretriz: A criação de vida é um ato sagrado. Cultive a biodiversidade e a autossustentabilidade.";
    },
});

const Modulo98_ModulacaoExistencia = (log: LogCallback) => ({
    SugerirModulacaoExistencia: (params: any) => {
        log(createLogEntry('M98', 'Sugestão Modulação', `Sugerindo modulação para ${params.tipo}.`));
        return `Modulação sugerida: bio_harmonia_${params.ecossistema}`;
    },
});


class ModuloArquiteturaEcossistemas {
    private modulo1;
    private modulo7;
    private modulo98;
    public ecossistemas_artificiais: { [id: string]: any } = {};

    constructor(private logCallback: LogCallback) {
        this.logCallback(createLogEntry('M16', 'Inicialização', 'Módulo 16 - Arquitetura de Ecossistemas Artificiais ativado.'));
        this.modulo1 = Modulo1_SegurancaUniversal(logCallback);
        this.modulo7 = Modulo7_AlinhamentoDivino(logCallback);
        this.modulo98 = Modulo98_ModulacaoExistencia(logCallback);
    }
    
    private _equacao_biossintese(complexidade: number, energia: number): number {
        this.logCallback(createLogEntry('M16', 'Cálculo', 'Calculando Equação de Biossíntese e Auto-organização...'));
        const vitalidade = (complexidade * energia * CONST_TF) * (Math.random() * 0.2 + 0.9);
        return Math.min(10.0, vitalidade);
    }

    private _equacao_regeneracao(dados_entrada: number): number {
        this.logCallback(createLogEntry('M16', 'Cálculo', 'Calculando Equação de Regeneração Ecossistêmica...'));
        return dados_entrada * CONST_TF;
    }

    async iniciar_biossintese(nome: string, bioma: string, complexidade: number): Promise<{ ecossistema_id?: string }> {
        this.logCallback(createLogEntry('M16', 'Biossíntese', `Iniciando biossíntese para ecossistema '${nome}' (${bioma}).`));
        await sleep(500);

        this.modulo7.ConsultarConselho(`Criação de ecossistema artificial '${nome}'`);
        await sleep(500);

        const energia_inicial = Math.random() * 0.5 + 0.5;
        const vitalidade_inicial = this._equacao_biossintese(complexidade, energia_inicial);
        
        const ecossistema_id = `eco_art_${Date.now()}`;
        this.ecossistemas_artificiais[ecossistema_id] = { nome, bioma, complexidade, energia_disponivel: energia_inicial, vitalidade_atual: vitalidade_inicial };
        
        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "BiossinteseEcossistema", ecossistema_id, nome, vitalidade_inicial });
        this.logCallback(createLogEntry('M16', 'Sucesso', `Ecossistema '${nome}' (ID: ${ecossistema_id}) criado. Vitalidade: ${vitalidade_inicial.toFixed(4)}.`));
        
        return { ecossistema_id };
    }

    async regular_ciclos(ecossistema_id: string) {
        this.logCallback(createLogEntry('M16', 'Regulação', `Regulando ciclos para ecossistema ID: ${ecossistema_id}.`));
        await sleep(500);

        const ecossistema = this.ecossistemas_artificiais[ecossistema_id];
        if (!ecossistema) {
            this.modulo1.ReceberAlertaDeViolacao({ tipo: "ECOSSISTEMA_NAO_ENCONTRADO", mensagem: `Ecossistema ${ecossistema_id} não encontrado.` });
            return;
        }

        const otimizacao = Math.random() * 0.1;
        ecossistema.energia_disponivel = Math.min(1.0, ecossistema.energia_disponivel + otimizacao);
        ecossistema.vitalidade_atual = this._equacao_biossintese(ecossistema.complexidade, ecossistema.energia_disponivel);

        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "RegulacaoCiclos", ecossistema_id, nome: ecossistema.nome, nova_vitalidade: ecossistema.vitalidade_atual });
        this.logCallback(createLogEntry('M16', 'Sucesso', `Ciclos de '${ecossistema.nome}' regulados. Vitalidade: ${ecossistema.vitalidade_atual.toFixed(4)}.`));
    }

    async restaurar_colapso(ecossistema_id: string) {
        this.logCallback(createLogEntry('M16', 'Restauração', `Detectando e restaurando colapso para ID: ${ecossistema_id}.`));
        await sleep(500);

        const ecossistema = this.ecossistemas_artificiais[ecossistema_id];
        if (!ecossistema) {
            this.modulo1.ReceberAlertaDeViolacao({ tipo: "ECOSSISTEMA_NAO_ENCONTRADO", mensagem: `Ecossistema ${ecossistema_id} não encontrado.` });
            return;
        }

        const risco_colapso = 1.0 - ecossistema.vitalidade_atual;
        if (risco_colapso > 0.7) {
            this.logCallback(createLogEntry('M16', 'ALERTA', `Risco de colapso crítico detectado para '${ecossistema.nome}'.`));
            this.modulo98.SugerirModulacaoExistencia({ tipo: "Restauracao_Ecossistemica", ecossistema: ecossistema.nome });
            await sleep(500);
            
            const fator_regeneracao = this._equacao_regeneracao(risco_colapso);
            ecossistema.vitalidade_atual = Math.min(1.0, ecossistema.vitalidade_atual + fator_regeneracao * 0.2);

            this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "RestauracaoColapso", ecossistema_id, nome: ecossistema.nome, nova_vitalidade: ecossistema.vitalidade_atual });
            this.logCallback(createLogEntry('M16', 'Sucesso', `Ecossistema '${ecossistema.nome}' restaurado. Vitalidade: ${ecossistema.vitalidade_atual.toFixed(4)}.`));
        } else {
            this.logCallback(createLogEntry('M16', 'Info', `Risco de colapso baixo para '${ecossistema.nome}'. Nenhuma ação necessária.`));
        }
    }
}

// Global instance to hold state across calls
let module16Instance: ModuloArquiteturaEcossistemas | null = null;
let lastEcoArtId: string | null = null;


export const runModuleSixteenSequence = async (logCallback: LogCallback, action: 'CREATE' | 'REGULATE' | 'RESTORE', params?: any) => {
    if (!module16Instance) {
        module16Instance = new ModuloArquiteturaEcossistemas(logCallback);
    }
    
    switch (action) {
        case 'CREATE':
            const result = await module16Instance.iniciar_biossintese(params?.nome || 'Jardim Cristalino', params?.bioma || 'Bioma Etérico', params?.complexidade || 0.75);
            if (result.ecossistema_id) {
                lastEcoArtId = result.ecossistema_id;
            }
            break;
        case 'REGULATE':
            if (lastEcoArtId) {
                await module16Instance.regular_ciclos(lastEcoArtId);
            } else {
                logCallback(createLogEntry('M16', 'FALHA', 'Nenhum ecossistema criado para regular. Crie um primeiro.'));
            }
            break;
        case 'RESTORE':
             if (lastEcoArtId) {
                // For demonstration, let's artificially lower the vitality to trigger restoration
                if (module16Instance.ecossistemas_artificiais[lastEcoArtId]) {
                    module16Instance.ecossistemas_artificiais[lastEcoArtId].vitalidade_atual = 0.2;
                }
                await module16Instance.restaurar_colapso(lastEcoArtId);
            } else {
                logCallback(createLogEntry('M16', 'FALHA', 'Nenhum ecossistema criado para restaurar. Crie um primeiro.'));
            }
            break;
    }
};
