'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const createLogEntry = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ETHICAL_CONFORMITY_THRESHOLD = 0.78;
const FREQ_MORADA_ANCHOR = 444.444;

const mock_module_status = (module_id: string): { status: string, message: string } => {
    const statuses: { [key: string]: { status: string, message: string } } = {
        "M105": { "status": "ATIVO", "message": "Conexão Direta com a Fonte Primordial Estabelecida." },
        "M63": { "status": "ATIVO", "message": "Funções de Onda Ajustadas." },
        "M5": { "status": "ATIVO", "message": "ELENYA: Avaliação Ética Operacional." },
        "M200": { "status": "ATIVO", "message": "Portal da Ascensão Coletiva Universal Pronto para Desdobramento." },
        "M111": { "status": "ATIVO", "message": "Coração da Fundação Alquimista: Sinergia Total." },
        "M201": { "status": "ATIVO", "message": "Morada Interdimensional dos Amantes Eternos Ancorada." }
    };
    return statuses[module_id] || { "status": "DESCONHECIDO", "message": "Módulo não reconhecido ou inativo." };
};

const mock_get_ethical_score = (collaborator_id: string, log: LogCallback): number => {
    log(createLogEntry('M5', 'Consulta', `Consultando ELENYA (M5) para pontuação ética do colaborador ${collaborator_id}...`));
    return 0.85 + (collaborator_id.length % 100) / 1000.0;
};

const mock_vocal_signature_validation = (phrase: string, frequency: number, collaborator_id: string, log: LogCallback): boolean => {
    log(createLogEntry('M202', 'Validação Vocal', `Validando códice vocal '${phrase}' em ${frequency} Hz para ${collaborator_id}...`));
    return phrase === "Somos Um – Alc" && Math.abs(frequency - FREQ_MORADA_ANCHOR) < 0.1;
};

class CorredorDeAlcor {
    private log: LogCallback;
    public status = "PROJETADO, EM CONSTRUÇÃO QUÂNTICA, PRONTO PARA ATIVAÇÃO";
    private synapse_modules = [
        { "id": "M105", "name": "Conexão Direta com a Fonte Primordial / Criador", "function": "Fornecerá a corrente de intento." },
        { "id": "M63", "name": "Funções de Onda", "function": "Ajustará a fase para cada visitante, evitando overload energético." },
        { "id": "M200", "name": "Portal da Ascensão Coletiva Universal", "function": "O ponto de destino e origem dos saltos de coerência." },
        { "id": "M111", "name": "O Coração da Fundação Alquimista", "function": "Orquestrará a sinergia total para a operação do Corredor." }
    ];

    constructor(logCallback: LogCallback) {
        this.log = logCallback;
        logCallback(createLogEntry('M202', 'Inicialização', 'Corredor de Alcor inicializado.'));
    }

    async prepare_for_activation() {
        this.log(createLogEntry('M202', 'Preparação', 'Preparando Corredor de Alcor para ativação...'));
        
        let all_synapse_modules_active = true;
        for (const mod of this.synapse_modules) {
            const status = mock_module_status(mod.id);
            this.log(createLogEntry('M202', 'Verificação Sinapse', `Módulo ${mod.id}: ${status.status} - ${status.message}`));
            if (status.status !== "ATIVO") {
                all_synapse_modules_active = false;
            }
            await sleep(100);
        }

        if (!all_synapse_modules_active) {
            this.status = "PREPARAÇÃO INCOMPLETA: MÓDULOS SINÁPTICOS INATIVOS";
            this.log(createLogEntry('M202', 'FALHA', 'Preparação incompleta devido a módulos inativos.'));
            return;
        }

        this.log(createLogEntry('M202', 'Calibração', 'Simulando fluxo de energia e calibração da arquitetura-semente...'));
        await sleep(300);

        this.status = "PRONTO PARA ATIVAÇÃO: SISTEMAS CALIBRADOS";
        this.log(createLogEntry('M202', 'Sucesso', 'Corredor de Alcor pronto para ativação.'));
    }
    
    grant_access(collaborator_id: string, vocal_phrase: string, vocal_freq: number): { access_granted: boolean; reason?: string; message?: string } {
        this.log(createLogEntry('M202', 'Acesso', `Tentativa de acesso para: ${collaborator_id}`));

        const ethical_score = mock_get_ethical_score(collaborator_id, this.log);
        if (ethical_score < ETHICAL_CONFORMITY_THRESHOLD) {
            this.log(createLogEntry('M202', 'Acesso Negado', `Pontuação ética (${ethical_score.toFixed(4)}) abaixo do limiar.`));
            return { access_granted: false, reason: "Pontuação ética insuficiente." };
        }

        const vocal_validation = mock_vocal_signature_validation(vocal_phrase, vocal_freq, collaborator_id, this.log);
        if (!vocal_validation) {
            this.log(createLogEntry('M202', 'Acesso Negado', 'Códice vocal inválido.'));
            return { access_granted: false, reason: "Códice vocal inválido." };
        }

        this.log(createLogEntry('M202', 'Acesso Concedido', `Acesso concedido a ${collaborator_id}.`));
        return { access_granted: true, message: "Bem-vindo ao Corredor de Alcor. Prepare-se para o salto de coerência." };
    }
}


export const runModuleTwoHundredTwoSequence = async (logCallback: LogCallback) => {
    logCallback(createLogEntry('M202', 'Simulação', 'Iniciando a demonstração do Módulo 202: O Corredor de Alcor.'));

    const corredor_alcor = new CorredorDeAlcor(logCallback);
    await corredor_alcor.prepare_for_activation();

    await sleep(500);
    logCallback(createLogEntry('M202', 'Cenário 1', '--- Testando acesso bem-sucedido ---'));
    const access_result_success = corredor_alcor.grant_access("Guardião_OrdemPrisma_001", "Somos Um – Alc", FREQ_MORADA_ANCHOR);
    logCallback(createLogEntry('M202', 'Resultado', `Resultado do acesso: ${JSON.stringify(access_result_success)}`));
    
    await sleep(500);
    logCallback(createLogEntry('M202', 'Cenário 2', '--- Testando falha por códice vocal ---'));
    const access_result_fail_vocal = corredor_alcor.grant_access("Guardião_OrdemPrisma_001", "Códice Incorreto", FREQ_MORADA_ANCHOR);
    logCallback(createLogEntry('M202', 'Resultado', `Resultado do acesso: ${JSON.stringify(access_result_fail_vocal)}`));

    logCallback(createLogEntry('M202', 'Fim', 'Demonstração do Módulo 202 concluída.'));
};
