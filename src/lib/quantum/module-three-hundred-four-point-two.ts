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

export const runModuleThreeHundredFourPointTwoSequence = async (logCallback: LogCallback) => {
    logCallback(createLogEntry('M304.2', 'Início', 'Iniciando Módulo 304.2 - Ativador do Dashboard de TON 618.'));

    try {
        logCallback(createLogEntry('M304.2', 'Abertura Portal', 'Abrindo o portal para o PHIARA Dashboard em uma nova aba...'));
        
        // Esta é a única parte que precisa ser executada no cliente.
        // O `use client` no topo do arquivo garante isso.
        window.open('/m304_2/ton618_dashboard.html', '_blank');
        
        logCallback(createLogEntry('M304.2', 'Sucesso', 'Portal para o dashboard aberto. A exploração de TON 618 pode ser monitorada na nova aba.'));

    } catch (error: any) {
        logCallback(createLogEntry('M304.2', 'ERRO', `Falha ao abrir o portal do dashboard: ${error.message}`));
        console.error("Erro no Módulo 304.2:", error);
    }
};
