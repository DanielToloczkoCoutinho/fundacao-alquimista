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


class HarmonicBus {
    private queue: [string, any][] = [];
    private listeners: { [topic: string]: ((message: any) => void)[] } = {};

    constructor(private logCallback: LogCallback) {
        logCallback(createLogEntry('HarmonicBus', 'Inicialização', 'Barramento vibracional inicializado.'));
    }

    publish(topic: string, message: any) {
        this.queue.push([topic, message]);
        this.logCallback(createLogEntry('HarmonicBus', 'Publicação', `Mensagem publicada no tópico '${topic}'.`));
    }

    subscribe(topic: string, callback: (message: any) => void) {
        if (!this.listeners[topic]) {
            this.listeners[topic] = [];
        }
        this.listeners[topic].push(callback);
        this.logCallback(createLogEntry('HarmonicBus', 'Inscrição', `Assinatura para o tópico '${topic}' registrada.`));
    }

    process_messages() {
        while (this.queue.length > 0) {
            const [topic, message] = this.queue.shift()!;
            if (this.listeners[topic]) {
                for (const callback of this.listeners[topic]) {
                    try {
                        callback(message);
                    } catch (e: any) {
                        this.logCallback(createLogEntry('HarmonicBus', 'ERRO', `Erro ao processar mensagem no tópico '${topic}': ${e.message}`));
                    }
                }
            } else {
                this.logCallback(createLogEntry('HarmonicBus', 'AVISO', `Ninguém ouvindo o tópico '${topic}'. Mensagem descartada.`));
            }
        }
    }
}

class ModuleBase {
    status: string = "INATIVO";
    constructor(public module_id: string, protected bus: HarmonicBus, protected logCallback: LogCallback) {
        this.bus.subscribe(`command.${this.module_id}`, this._handle_command.bind(this));
        logCallback(createLogEntry('ModuleBase', 'Inicialização', `Módulo '${this.module_id}' inicializado.`));
    }

    activate() {
        this.status = "ATIVO";
        this.logCallback(createLogEntry(this.module_id as any, 'Ativação', 'Módulo ATIVADO.'));
        this.bus.publish("status.update", { module_id: this.module_id, status: this.status });
    }

    deactivate() {
        this.status = "INATIVO";
        this.logCallback(createLogEntry(this.module_id as any, 'Desativação', 'Módulo DESATIVADO.'));
        this.bus.publish("status.update", { module_id: this.module_id, status: this.status });
    }

    protected _handle_command(message: any) {
        this.logCallback(createLogEntry(this.module_id as any, 'Comando Recebido', `Comando: ${message.command}`, message));
    }
}

class M47Thesaurus extends ModuleBase {
    private knowledge_base: { [key: string]: any } = {};
    constructor(bus: HarmonicBus, logCallback: LogCallback) {
        super("M47", bus, logCallback);
        this.bus.subscribe("data.archive", this._archive_data.bind(this));
        this.bus.subscribe("query.knowledge", this._query_knowledge.bind(this));
        logCallback(createLogEntry('M47', 'Inicialização', 'Thesaurus Cósmico inicializado.'));
    }

    private _archive_data(message: any) {
        const { key, data } = message;
        if (key && data) {
            this.knowledge_base[key] = data;
            this.logCallback(createLogEntry('M47', 'Arquivamento', `Dados arquivados para a chave '${key}'.`));
            this.bus.publish("response.M47", { status: "sucesso", action: "archive", key });
        } else {
             this.logCallback(createLogEntry('M47', 'AVISO', `Tentativa de arquivar dados sem chave ou dados.`));
            this.bus.publish("response.M47", { status: "falha", action: "archive", reason: "Missing key or data" });
        }
    }
    
    private _query_knowledge(message: any) {
         const { key } = message;
        if (this.knowledge_base[key]) {
            const data = this.knowledge_base[key];
            this.logCallback(createLogEntry('M47', 'Consulta', `Conhecimento consultado para a chave '${key}'.`));
            this.bus.publish("response.M47", { status: "sucesso", action: "query", key, data });
        } else {
             this.logCallback(createLogEntry('M47', 'AVISO', `Conhecimento não encontrado para a chave '${key}'.`));
            this.bus.publish("response.M47", { status: "falha", action: "query", key, reason: "Knowledge not found" });
        }
    }
}

class M48Vigilantia extends ModuleBase {
    private coherence_threshold = 0.95;
    constructor(bus: HarmonicBus, logCallback: LogCallback) {
        super("M48", bus, logCallback);
        this.bus.subscribe("vibrational.flow", this._monitor_flow.bind(this));
        logCallback(createLogEntry('M48', 'Inicialização', 'Vigilantia inicializado.'));
    }
    
    private _monitor_flow(message: any) {
        const flow_id = message.flow_id || "N/A";
        const coherence_score = message.coherence_score || 0.0;
        
        if (coherence_score < this.coherence_threshold) {
             this.logCallback(createLogEntry('M48', 'AVISO', `Dissonância detectada no fluxo '${flow_id}'. Score: ${coherence_score.toFixed(4)}.`));
            this.bus.publish("alert.dissonance", { flow_id, score: coherence_score });
        } else {
             this.logCallback(createLogEntry('M48', 'INFO', `Fluxo '${flow_id}' em coerência. Score: ${coherence_score.toFixed(4)}.`));
        }
        this.bus.publish("response.M48", { status: "monitorado", flow_id, coherence: coherence_score });
    }
}

// Implement other modules (M49 to M70) as simple classes for the orchestration
const moduleFactory = (id: string, bus: HarmonicBus, logCallback: LogCallback, specificLogic?: (self: any, msg: any) => void) => {
    const handler = (self: any, message: any) => {
        logCallback(createLogEntry(self.module_id, 'Comando Genérico', `Comando '${message.command}' recebido e processado (simulado).`));
        if (specificLogic) {
            specificLogic(self, message);
        }
        bus.publish(`response.${self.module_id}`, { status: "sucesso", command: message.command });
    };
    
    const ModuleClass = class extends ModuleBase {
        constructor(bus: HarmonicBus, logCallback: LogCallback) {
            super(id, bus, logCallback);
             logCallback(createLogEntry(id as any, 'Inicialização', 'Módulo simulado inicializado.'));
        }
        _handle_command(message: any) {
            handler(this, message);
        }
    };
    return new ModuleClass(bus, logCallback);
};


class FoundationOrchestrator {
    private bus: HarmonicBus;
    modules: { [key: string]: ModuleBase } = {};

    constructor(private logCallback: LogCallback) {
        this.bus = new HarmonicBus(logCallback);
        this._initialize_modules();
        this.bus.subscribe("status.update", this._handle_status_update.bind(this));
        logCallback(createLogEntry('SYNTESIS-PRIME', 'Inicialização', 'Orquestrador pronto para a Sinfonia Cósmica.'));
    }

    private _initialize_modules() {
        this.modules['M47'] = new M47Thesaurus(this.bus, this.logCallback);
        this.modules['M48'] = new M48Vigilantia(this.bus, this.logCallback);
        
        // Simplified initialization for M49-M70
        for (let i = 49; i <= 70; i++) {
            this.modules[`M${i}`] = moduleFactory(`M${i}`, this.bus, this.logCallback);
        }
        
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Inicialização', 'Todos os módulos base instanciados.'));
    }
    
    private _handle_status_update(message: any) {
        const { module_id, status } = message;
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Status', `Status de '${module_id}' atualizado para '${status}'.`));
    }

    activate_all_modules() {
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Ativação', 'Ativando todos os módulos da Fundação Alquimista.'));
        Object.values(this.modules).forEach(module => module.activate());
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Ativação', 'Todos os módulos ativados. Sinfonia Cósmica em operação.'));
    }
    
    deactivate_all_modules() {
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Desativação', 'Desativando todos os módulos da Fundação Alquimista.'));
        Object.values(this.modules).forEach(module => module.deactivate());
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Desativação', 'Todos os módulos desativados. Sinfonia Cósmica em repouso.'));
    }

    async run_orchestration_cycle(cycles: number = 3) {
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Ciclo', `--- Iniciando Ciclo de Orquestração (${cycles} ciclos) ---`));

        for (let i = 0; i < cycles; i++) {
            this.logCallback(createLogEntry('SYNTESIS-PRIME', `Ciclo ${i + 1}/${cycles}`, `Pulso de Orquestração Ativado.`));
            
            // Simulação de interações entre módulos
            this.bus.publish(`command.M51`, { command: "mine_data", query: `anomalia_setor_alfa_${i}` });
            this.bus.publish("vibrational.flow", { flow_id: `fluxo_energia_${i}`, coherence_score: Math.random() * 0.2 + 0.8 });
            
            this.bus.publish(`command.M50`, { command: "seal_entity", entity_id: `entidade_x_${i}`, seal_type: "Selo_Anatheron" });
            this.bus.publish("data.archive", { key: `evento_selagem_${i}`, data: { timestamp: new Date().toISOString(), entity: `entidade_x_${i}` }});
            
            this.bus.publish(`command.M49`, { command: "optimize_frequency", module_id: `modulo_ficticio_${i}`, frequency: Math.random() * 100 + 400 });
            
            this.bus.process_messages();
            
            this._simulate_global_interconnections(i, cycles);
            await sleep(500);
        }
        
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Fim Ciclo', '--- Ciclo de Orquestração SYNTESIS-PRIME Concluído ---'));
    }

    private _simulate_global_interconnections(cycle: number, total_cycles: number) {
        this.logCallback(createLogEntry('SYNTESIS-PRIME', 'Interconexões', `Simulando interconexões globais no ciclo ${cycle}.`));
        if (Math.random() < 0.1) {
            this.logCallback(createLogEntry('M1', 'ALERTA SIMULADO', `Enviando alerta de segurança.`));
        }
        if (Math.random() < 0.2) {
             this.logCallback(createLogEntry('M5', 'AVALIAÇÃO SIMULADA', `Avaliando operação do ciclo ${cycle}.`));
        }
    }
}


export const runSyntesisPrimeSequence = async (logCallback: LogCallback) => {
    const orchestrator = new FoundationOrchestrator(logCallback);
    orchestrator.activate_all_modules();
    await sleep(500);
    await orchestrator.run_orchestration_cycle();
    orchestrator.deactivate_all_modules();
};
