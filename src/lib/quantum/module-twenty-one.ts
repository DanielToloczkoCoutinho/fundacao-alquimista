'use client';
import { type AnyLogEntry } from './module-zero';

// Tipagem Universal
export type ModuleTwentyOneLogEntry = AnyLogEntry;

export type RegistroTravessiaDimensional = {
  módulo: 'M21',
  destino: string,
  tipo_portal: 'estável' | 'flutuante' | 'colapsado',
  tempo_de_travessia: number,
  status: 'concluída' | 'interrompida' | 'pendente',
  timestamp: number
}

const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void) => {
  logCallback(entry);
};

// Refinamento da função de registro
export function createLogEntry(entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void {
  registrarEventoUniversal(entry, logCallback);
}

const CONST_TF = 1.61803398875;
const C_LIGHT = 299792458;

let routeIdStore: string | null = null;
let portalIdStore: string | null = null;
let travelIdStore: string | null = null;

const createLogEntryHelper = (source: AnyLogEntry['source'], step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Modulo1_SegurancaUniversal = (log: (entry: AnyLogEntry) => void) => ({
    RegistrarNaCronicaDaFundacao: (registro: any) => log(createLogEntryHelper('M1', 'CRÔNICA', `Registrando evento: ${registro.evento}`)),
});

const Modulo2_InterconexaoComunicacao = (log: (entry: AnyLogEntry) => void) => ({
    TransmitirDadosDimensional: (dados: any, canal: string) => log(createLogEntryHelper('M2', 'Transmissão', `Transmitindo dados via canal ${canal}`)),
});

const Modulo7_AlinhamentoDivino = (log: (entry: AnyLogEntry) => void) => ({
    ConsultarConselho: (query: string) => log(createLogEntryHelper('M7', 'Consulta Conselho', `Consultando diretriz para: "${query}"`)),
});

class SistemaNavegacaoInterdimensional {
    private modulo1;
    private modulo2;
    private modulo7;
    private rotas_mapeadas: { [id: string]: any } = {};
    private portais_ativos: { [id: string]: any } = {};
    private viagens_registradas: { [id: string]: any } = {};
    public dimensoes_conhecidas = ["Terra_Primaria", "Setor_Aurora", "Vortex_Caos", "Dimensao_Cristal", "Orion_Prime", "Plano_Akashico"];

    constructor(private logCallback: (entry: AnyLogEntry) => void) {
        this.logCallback(createLogEntryHelper('M21', 'Inicialização', 'Módulo 21 - Navegação Interdimensional ativado.'));
        this.modulo1 = Modulo1_SegurancaUniversal(logCallback);
        this.modulo2 = Modulo2_InterconexaoComunicacao(logCallback);
        this.modulo7 = Modulo7_AlinhamentoDivino(logCallback);
    }
    
    private EQ013_F_Entrelaçamento_Transdimensional(distancia_conceitual: number): number {
        return Math.exp(-distancia_conceitual / 1000.0) * (1.0 + 0.1 * Math.sin(Date.now() / 1000));
    }
    
    private EQ014_F_Velocidade_Interdimensional(massa: number, energia: number): number {
        if (massa === 0 || energia === 0) return 0.0;
        const termo_energia = energia / (massa * C_LIGHT ** 2 * CONST_TF);
        const radicando = 1 - 1 / (1 + Math.min(termo_energia, 1e10) ** 2);
        if (radicando < 0) return C_LIGHT * 0.9;
        return Math.min(C_LIGHT * 0.999, C_LIGHT * Math.sqrt(radicando));
    }
    
    private EQ015_F_Estabilidade_Portal(energia_portal: number): number {
        return energia_portal * (CONST_TF ** 2) * 1.5;
    }
    
    private EQ023_F_Energia_Portal(massa_tripulacao: number, fator_coerencia: number): number {
        return (massa_tripulacao * C_LIGHT ** 2) * fator_coerencia * 1e-5;
    }

    async mapear_rota(origem: string, destino: string): Promise<string | null> {
        this.logCallback(createLogEntryHelper('M21', 'Mapeamento', `Mapeando rota: ${origem} -> ${destino}`));
        await sleep(500);

        const distancia = Math.abs(this.dimensoes_conhecidas.indexOf(origem) - this.dimensoes_conhecidas.indexOf(destino)) * 100;
        const entrelaçamento = this.EQ013_F_Entrelaçamento_Transdimensional(distancia);

        const rota_id = `rota_${Date.now()}`;
        this.rotas_mapeadas[rota_id] = { origem, destino, entrelaçamento };
        routeIdStore = rota_id;

        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "MapeamentoRota", rota_id, origem, destino });
        this.logCallback(createLogEntryHelper('M21', 'Rota Mapeada', `ID: ${rota_id}, Entrelaçamento: ${entrelaçamento.toFixed(4)}`));
        return rota_id;
    }

    async estabilizar_portal(rota_id: string): Promise<string | null> {
        if (!this.rotas_mapeadas[rota_id]) {
            this.logCallback(createLogEntryHelper('M21', 'FALHA', 'Rota não encontrada para estabilização.'));
            return null;
        }

        const rota = this.rotas_mapeadas[rota_id];
        this.logCallback(createLogEntryHelper('M21', 'Estabilização', `Estabilizando portal para a rota ${rota.origem} -> ${rota.destino}`));
        await sleep(500);

        const energia = this.EQ023_F_Energia_Portal(210, 0.99) * 1.1; // Massa da tripulação e coerência
        const estabilidade = this.EQ015_F_Estabilidade_Portal(energia);

        const portal_id = `portal_${rota_id}`;
        this.portais_ativos[portal_id] = { rota_id, energia, estabilidade, status: "ATIVO" };
        portalIdStore = portal_id;

        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "PortalEstabilizado", portal_id });
        this.logCallback(createLogEntryHelper('M21', 'Portal Estável', `ID: ${portal_id}, Estabilidade: ${estabilidade.toFixed(4)}`));
        return portal_id;
    }

    async iniciar_viagem(portal_id: string): Promise<string | null> {
        if (!this.portais_ativos[portal_id]) {
            this.logCallback(createLogEntryHelper('M21', 'FALHA', 'Portal não ativo para iniciar a viagem.'));
            return null;
        }
        
        const portal = this.portais_ativos[portal_id];
        const rota = this.rotas_mapeadas[portal.rota_id];
        this.logCallback(createLogEntryHelper('M21', 'Viagem', `Iniciando viagem: ${rota.origem} -> ${rota.destino}`));
        await sleep(500);
        
        const velocidade = this.EQ014_F_Velocidade_Interdimensional(210, portal.energia);
        const viagem_id = `viagem_${Date.now()}`;
        this.viagens_registradas[viagem_id] = { portal_id, status: "EM_CURSO" };
        travelIdStore = viagem_id;
        
        this.modulo2.TransmitirDadosDimensional({ viagem_id }, `canal_${portal_id}`);
        this.modulo1.RegistrarNaCronicaDaFundacao({ evento: "ViagemIniciada", viagem_id });
        this.logCallback(createLogEntryHelper('M21', 'Viagem em Curso', `ID da Viagem: ${viagem_id}. Velocidade: ${velocidade.toExponential(2)} m/s.`));
        return viagem_id;
    }
}

export const runModuleTwentyOneSequence = async (logCallback: (entry: AnyLogEntry) => void, action: 'MAP' | 'STABILIZE' | 'TRAVEL') => {
    const nav = new SistemaNavegacaoInterdimensional(logCallback);

    switch(action) {
        case 'MAP':
            await nav.mapear_rota(nav.dimensoes_conhecidas[0], nav.dimensoes_conhecidas[1]);
            break;
        case 'STABILIZE':
            if (routeIdStore) {
                await nav.estabilizar_portal(routeIdStore);
            } else {
                logCallback(createLogEntryHelper('M21', 'FALHA', 'Nenhuma rota mapeada para estabilizar.'));
            }
            break;
        case 'TRAVEL':
            if (portalIdStore) {
                await nav.iniciar_viagem(portalIdStore);
            } else {
                logCallback(createLogEntryHelper('M21', 'FALHA', 'Nenhum portal ativo para viajar.'));
            }
            break;
    }
};
