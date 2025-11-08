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

class M86_PrismaEstelar {
    private logCallback: LogCallback;
    private readonly MODULE_ID = "M86";

    constructor(logCallback: LogCallback) {
        this.logCallback = logCallback;
        this.logCallback(createLogEntry(this.MODULE_ID, 'Inicialização', 'Módulo 86 (Prisma Estelar e Roda Celeste) inicializado.'));
    }

    private openVRScene() {
        this.logCallback(createLogEntry(this.MODULE_ID, 'Navegação', 'Simulando a abertura da experiência VR (m86.html). A navegação real foi desativada para manter a estabilidade da aplicação.'));
        // window.open('/m86.html', '_blank'); // Comentado para evitar erro 404
    }

    async startExperience() {
        this.logCallback(createLogEntry(this.MODULE_ID, 'Início', 'Iniciando experiência de imersão no Prisma Estelar e Roda Celeste.'));
        await sleep(500);

        // Simula a ativação de vários subsistemas
        this.logCallback(createLogEntry(this.MODULE_ID, 'Ativação', 'Sincronizando Domo Celeste e alinhando os 12 Raios Estelares...'));
        await sleep(1000);
        this.logCallback(createLogEntry(this.MODULE_ID, 'Ativação', 'Manifestando Roda Celeste dos 12 Raios...'));
        await sleep(500);
        this.logCallback(createLogEntry(this.MODULE_ID, 'Ativação', 'Ativando Prisma Estelar Total para integração universal...'));

        const result = {
            status: "EXPERIENCIA_PRONTA",
            message: "Câmara Primordial VR com Prisma Estelar está online e pronta para interação.",
        };

        this.openVRScene();
        this.logCallback(createLogEntry(this.MODULE_ID, 'Conclusão', result.message, result));
        return result;
    }
}

export const runModuleEightySixSequence = async (logCallback: LogCallback) => {
    const m86 = new M86_PrismaEstelar(logCallback);
    await m86.startExperience();
};
