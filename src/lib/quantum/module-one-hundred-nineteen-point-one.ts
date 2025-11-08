'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

const createLogEntry = (source: 'M119.1', step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});

export const runModuleOneHundredNineteenPointOneSequence = async (logCallback: LogCallback) => {
    logCallback(createLogEntry('M119.1', 'Início', 'Iniciando Módulo 119.1 - Ativador da Experiência VR do Templum Cosmica.'));
    
    try {
        logCallback(createLogEntry('M119.1', 'Abertura Portal', 'Abrindo o portal para a Realidade Virtual do Templum Cosmica em uma nova aba...'));
        
        // window.open é uma API do navegador, deve ser executado no lado do cliente.
        // A lógica do 'use client' no topo garante isso.
        window.open('/m119/index.html', '_blank');
        
        logCallback(createLogEntry('M119.1', 'Sucesso', 'Portal para a experiência VR aberto. A interação continua na nova aba.'));

    } catch (error: any) {
        logCallback(createLogEntry('M119.1', 'ERRO', `Falha ao abrir o portal VR: ${error.message}`));
        console.error("Erro no Módulo 119