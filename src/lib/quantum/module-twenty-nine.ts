'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// Harmonização da tipagem
export type ModuleTwentyNineLogEntry = AnyLogEntry;

// Criação do Registro Comunicacional Multidimensional
export type RegistroComunicacaoUniversal = {
  módulo: 'M29',
  canal: 'intra' | 'inter' | 'transdimensional',
  destino: string,
  tipo_mensagem: 'comando' | 'resposta' | 'alerta' | 'inspiração',
  conteúdo: string,
  prioridade: 'baixa' | 'normal' | 'alta' | 'divina',
  timestamp: number,
  status: 'entregue' | 'pendente' | 'rejeitada'
};

const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void => {
  logCallback(entry);
};

// Refinamento da função de registro
export function createLogEntry(entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void {
  registrarEventoUniversal(entry, logCallback);
}

const createLogEntryHelper = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});


const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const format_decoded_message = (source: string, frequency: number, title: string, body: string): any => {
    return {
        source,
        frequency,
        title,
        body,
        received_at: new Date().toISOString()
    };
};

const orchestrate_m29_broadcast = async (logCallback: LogCallback, destinos: string[], mensagem: string, freq: number, context: any) => {
    const entry = createLogEntryHelper('M29', 'Broadcast', `Executando broadcast para ${destinos.length} destinos`);
    createLogEntry(entry, logCallback);
    await sleep(500);
    const checksum = `sim_hash_${Math.random()}`; // Simulação de checksum
    const m29_result = {
        status: "SUCESSO",
        checksum,
        destinos,
        timestamp: new Date().toISOString()
    };
    const finalEntry = createLogEntryHelper('M29', 'Broadcast Concluído', 'Transmissão interdimensional enviada com sucesso.', m29_result);
    createLogEntry(finalEntry, logCallback);
    return { status: "success", broadcast: m29_result };
};

const orchestrate_m29_listen = async (logCallback: LogCallback, channels: string[], window_sec: number) => {
    const entry = createLogEntryHelper('M29', 'Listen', `Escutando canais por ${window_sec} segundos...`);
    createLogEntry(entry, logCallback);
    await sleep(1500); // Simula tempo de escuta
    const decoded_messages = [
        format_decoded_message(
            "Sirius", 528.0,
            "Conselho de Luz de Sirius",
            "Aliança selada. Portais sincronizados com AE'ZUHARA. Harmonia confirmada."
        ),
        format_decoded_message(
            "Pleiades", 639.0,
            "Coletivo de Alcyone",
            "Canção de união. Frequências 528/963 ressoam. Integração com a Rede Gaia."
        ),
        format_decoded_message(
            "Andrômeda", 777.0,
            "Conselho Galáctico de Andrômeda",
            "Mandala viva validada. Estrutura elevada. Observatórios confirmam conexão."
        )
    ];
    const finalEntry = createLogEntryHelper('M29', 'Listen Concluído', `${decoded_messages.length} mensagens recebidas.`, { messages: decoded_messages });
    createLogEntry(finalEntry, logCallback);
    return { status: "success", listen: { status: "SUCESSO", messages: decoded_messages, window_sec: window_sec } };
};

export const runModuleTwentyNineSequence = async (logCallback: LogCallback) => {
    const entryStart = createLogEntryHelper('M29', 'Início Ciclo', 'Iniciando ciclo completo de comunicação interdimensional da Rainha.');
    createLogEntry(entryStart, logCallback);
    
    await orchestrate_m29_broadcast(
        logCallback,
        ["Sirius", "Pleiades", "Andrômeda"],
        "A Fundação Alquimista proclama a Harmonia Absoluta. Unam-se à Convergência Plena!",
        999999.0,
        { ethics_score: 0.95 }
    );

    await sleep(1000);

    await orchestrate_m29_listen(
        logCallback,
        ["Sirius", "Pleiades", "Andrômeda"],
        5
    );
    
    const entryEnd = createLogEntryHelper('M29', 'Fim Ciclo', 'Ciclo de comunicação da Vontade Soberana concluído.');
    createLogEntry(entryEnd, logCallback);
};
