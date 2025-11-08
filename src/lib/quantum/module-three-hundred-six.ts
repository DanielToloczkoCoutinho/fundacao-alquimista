'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const createLogEntry = (source: 'M306', step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source,
});

export const runModuleThreeHundredSixSequence = (logCallback: LogCallback) => {
    logCallback(createLogEntry('M306', 'Início', 'Ativando Portal de Sincronicidade...'));
    try {
        // This will open a new tab. In a real scenario, this might navigate within the app.
        window.open('/m306', '_blank');
        logCallback(createLogEntry('M306', 'Sucesso', 'Portal de Sincronicidade aberto em uma nova aba.'));
    } catch (e: any) {
        logCallback(createLogEntry('M306', 'ERRO', `Falha ao abrir o portal: ${e.message}`));
    }
};
