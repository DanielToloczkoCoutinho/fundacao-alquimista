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

export const runModuleEightySixSequence = async (logCallback: LogCallback) => {
    logCallback(createLogEntry('M86', 'Início', 'Iniciando Módulo 86 - Ativador da Experiência VR do Prisma Estelar.'));
    
    try {
        logCallback(createLogEntry('M86', 'Abertura Portal', 'Abrindo o portal para a Realidade Virtual do Prisma Estelar em uma nova aba...'));
        
        // A-Frame e Tone.js são melhor executados em um arquivo HTML puro.
        // A lógica do 'use client' no topo garante que `window` está disponível.
        window.open('/m86.html', '_blank');
        
        logCallback(createLogEntry('M86', 'Sucesso', 'Portal para a experiência VR do Prisma Estelar aberto. A interação continua na nova aba.'));

    } catch (error: any) {
        logCallback(createLogEntry('M86', 'ERRO', `Falha ao abrir o portal VR: ${error.message}`));
        console.error("Erro no Módulo 86:", error);
    }
};
