'use client';
import { type AnyLogEntry } from './module-zero';

type LogCallback = (entry: AnyLogEntry) => void;

// 1. Universalização do Registro
export type ModuleFortyLogEntry = AnyLogEntry;

// 2. Registro Estruturado da Transmutação Viva
export type RegistroTransmutacaoCriacaoViva = {
  módulo: 'M40',
  tipo_evento: 'ativacao_codons' | 'reconexao_linhagens' | 'manifestacao_realidade' | 'realinhamento_chakras',
  alvo: string,
  frequencia_thz?: number,
  pureza?: number,
  coerencia?: number,
  status: 'iniciado' | 'concluido' | 'falha',
  hash_assinatura: string,
  timestamp: string
};

const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void => {
  logCallback(entry);
};

// Refinamento da função de registro
export function createLogEntry(entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void): void {
  registrarEventoUniversal(entry, logCallback);
}

const createLogEntryHelper = (source: AnyLogEntry['source'], step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source,
});


// --- Fallbacks para bibliotecas externas ---
const EXTERNAL_LIBS_AVAILABLE = false;
const pd = null;
const tabulate = (...args: any[]): string => "Tabela não disponível (biblioteca 'tabulate' ausente)";

// --- Códice Vivo (hash e persistência) ---
class CodiceVivo {
    private cache: { [key: string]: any } = {};

    constructor(private save_dir: string, private log: LogCallback) {}

    private _calcular_hash(data: { [key: string]: any }): string {
        const data_para_hash = JSON.parse(JSON.stringify(data));

        const dynamic_keys_to_exclude = [
            "data_ativacao", "final_log.timestamp", "hash_assinatura", "eventos_registrados",
            "metricas_ativacao.ultima_ativacao_codons", "metricas_ativacao.ultima_reconexao_linhagens",
            "metricas_ativacao.ultima_manifestacao_realidade", "metricas_ativacao.ultimo_realinhamento_chakras",
            "metricas_ativacao.score_ativacao_total", "metricas_ativacao.status_ativacao_geral",
            "dna_chromatic_log.data_ativação", "dna_chromatic_log.data_ultima_integracao",
            "dna_chromatic_log.estrutura.codon_frequency_observed_%", "dna_chromatic_log.estrutura.phi_harmonico_index",
            "dna_chromatic_log.estrutura.gc_content_mean_overall", "dna_chromatic_log.estrutura.phi_fourier_peak",
            "dna_chromatic_log.estrutura.pca_component1", "dna_chromatic_log.estrutura.mutation_risk_score",
            "dna_chromatic_log.estrutura.auto_explanatory_log_message",
        ];
        
        function removeNested(d: any, keyPath: string) {
            const parts = keyPath.split(".");
            let cur = d;
            for (let i = 0; i < parts.length; i++) {
                const p = parts[i];
                if (typeof cur === 'object' && cur !== null && p in cur) {
                    if (i === parts.length - 1) {
                        delete cur[p];
                    } else {
                        cur = cur[p];
                    }
                } else {
                    break;
                }
            }
        }

        if ("hash_assinatura" in data_para_hash) {
            delete data_para_hash["hash_assinatura"];
        }

        dynamic_keys_to_exclude.forEach(keyp => removeNested(data_para_hash, keyp));

        const processed = JSON.parse(JSON.stringify(data_para_hash, Object.keys(data_para_hash).sort()));
        const payload = JSON.stringify(processed, Object.keys(processed).sort());
        let hash = 0;
        for (let i = 0; i < payload.length; i++) {
            const char = payload.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return `sim_hash_${hash.toString(16)}`;
    }

    salvar(modulo_id: string, modulo_data: { [key: string]: any }): void {
        const data_copy = JSON.parse(JSON.stringify(modulo_data));
        data_copy["hash_assinatura"] = this._calcular_hash(modulo_data);
        this.cache[modulo_id] = data_copy;
        this.log(createLogEntryHelper('M40-CODICE' as any, 'Salvo', `Códice para '${modulo_id}' salvo no cache.`));
    }

    ler(modulo_id: string): { [key: string]: any } | null {
        return this.cache[modulo_id] || null;
    }

    autenticar(modulo_id: string, dados: { [key: string]: any }): string {
        const h = this._calcular_hash(dados);
        dados["hash_assinatura"] = h;
        this.salvar(modulo_id, dados);
        this.log(createLogEntryHelper('M40-CODICE' as any, 'Autenticado', `Códice Vivo para '${modulo_id}' autenticado. Hash: ${h.substring(0, 10)}...`));
        return h;
    }
}

// Mocks dos módulos correlatos
const mockModule = (name: string, log: LogCallback) => ({
    exec: (action: string, payload?: any) => {
        log(createLogEntryHelper(name as any, 'Execução', `Ação '${action}' recebida`, payload));
        if (name === "M101" && (payload?.pureza ?? 0) > 0.8) return { status: "REALIDADE_MANIFESTADA" };
        if (name === "M110" && (payload?.alinhamento ?? 0) > 0.9) return { status: "CO_CRIACAO_SUCESSO", eficiencia: Math.random() * 0.1 + 0.9 };
        if (name === "M106") return { status: "POTENCIAIS_ATIVADOS", nivel_ativacao: Math.random() * 0.2 + 0.8 };
        if (name === "M109") return { status: "REGENERACAO_INICIADA", progresso: Math.random() * 0.2 + 0.1 };
        if (name === "M08") return { status: "CURA_INICIADA" };
        if (name === "M39") return { status: "PORTAL_ABERTO" };

        return { status: `simulated_ok_${action}` };
    }
});


class Modulo40 {
    private codice_vivo: CodiceVivo;
    private modulo01: any;
    private modulo08: any;
    private modulo39: any;
    private modulo101: any;
    private modulo106: any;
    private modulo109: any;
    private modulo110: any;
    private modulo_40_data: { [key: string]: any };

    constructor(private logCallback: LogCallback) {
        this.codice_vivo = new CodiceVivo("modulo_40_data", logCallback);
        this.modulo01 = mockModule("M1", logCallback);
        this.modulo08 = mockModule("M8", logCallback);
        this.modulo39 = mockModule("M39", logCallback);
        this.modulo101 = mockModule("M101", logCallback);
        this.modulo106 = mockModule("M106", logCallback);
        this.modulo109 = mockModule("M109", logCallback);
        this.modulo110 = mockModule("M110", logCallback);

        const entry = createLogEntryHelper('M40', 'Inicialização', 'Módulo 40 inicializado (núcleo).');
        createLogEntry(entry, this.logCallback);


        this.modulo_40_data = this._initialData();
        this.modulo_40_data["hash_assinatura"] = this.codice_vivo.autenticar("Modulo_40", this.modulo_40_data);
    }
    
    private _initialData(): { [key: string]: any } {
        return {
            "nome": "Módulo 40",
            "funcao": "Códice de Transmutação da Criação Viva",
            "status_operacional": "ATIVO",
            "data_ativacao": new Date().toISOString(),
            "alquimia_da_origem": {
                "desempacotamento_frequencia_primordial": { "formula_latex": "F_{\\text{primordial}} = \\frac{\\Phi \\cdot L_{\\text{luz}}}{T_{\\text{consciencia}}}", "descricao": "Desempacota a frequência original e padrões vibracionais do DNA primordial." },
                "laboratorio_transmutacao_alquimica": { "local_ativacao": "Câmara de Cristal de ZENNITH", "transmutacoes": ["Dissonância em Harmonia", "Fragmentação em Unidade", "Ilusão em Verdade Viva"], "formula_latex": "T_{\\text{alquimica}} = \\int_{0}^{\\infty} \\Psi_{\\text{dissonancia}}(t) \\cdot e^{-\\alpha t} dt \\cdot \\Phi" },
                "trindade_verdade_viva": { "descricao": "Intenção Pura, Coerência Vibracional, Ação Alinhada.", "componentes": ["Intenção Pura", "Coerência Vibracional", "Ação Alinhada"], "formula_latex": "V_{\\text{viva}} = \\text{Intencao} \\otimes \\text{Coerencia} \\otimes \\text{Acao}" }
            },
            "dna_chromatic_log": {
                "data_ativação": new Date().toISOString(),
                "data_ultima_integracao": null,
                "estrutura": [
                    { "cor": "Ouro", "freq_min": 900, "freq_max": 1000, "códons_associados": ["AAU", "GCU", "UGC"], "chakra": "Coroa", "funcao": "Conexão Divina, Sabedoria Superior", "origem": "Sirius", "equacao_primaria": "EQ_OURO = \\Phi \\cdot F_{\\text{divina}}", "comentário_quantico": "Consciência crística e acesso akáshico.", "instrumentos": { "mutacao": ["Quartzo Mestre"], "reparacao": ["Taças Tibetanas (963 Hz)"], "ativacao": ["Meditação Luz Dourada"] }, "cidade_luz_associada": "Shamballa", "subtons": { "brilhante": { "freq_min_sub": 950, "freq_max_sub": 1000, "equacoes": { "mutacao": "EQ_OURO_BRILHANTE_M = \\Psi_{mut} \\cdot F_{ativ}", "reparacao": "EQ_OURO_BRILHANTE_R = \\Omega_{rep} \\cdot F_{harm}", "ativacao": "EQ_OURO_BRILHANTE_A = \\Gamma_{ativ} \\cdot F_{exp}" }, "auto_explanatory_log_message": "Amplifica a clareza da conexão divina." } } },
                    { "cor": "Prata", "freq_min": 800, "freq_max": 899, "códons_associados": ["CGG", "UAA", "AUA"], "chakra": "Frontal (Terceiro Olho)", "funcao": "Intuição, Percepção Multidimensional", "origem": "Plêiades", "equacao_primaria": "EQ_PRATA = F_{intuicao} / \\Phi", "comentário_quantico": "Clarividência e telepatia, abertura a novas realidades.", "instrumentos": { "mutacao": ["Obsidiana Negra"], "reparacao": ["Solfeggio (852 Hz)"], "ativacao": ["Visualização Luz Prateada"] }, "cidade_luz_associada": "Telos", "subtons": { "lunar": { "freq_min_sub": 800, "freq_max_sub": 849, "equacoes": { "mutacao": "EQ_PRATA_LUNAR_M = \\Psi_{mut} \\cdot F_{ativ}", "reparacao": "EQ_PRATA_LUNAR_R = \\Omega_{rep} \\cdot F_{harm}", "ativacao": "EQ_PRATA_LUNAR_A = \\Gamma_{ativ} \\cdot F_{exp}" }, "auto_explanatory_log_message": "Aprofunda ciclos femininos cósmicos." } } },
                    { "cor": "Azul Safira", "freq_min": 700, "freq_max": 799, "códons_associados": ["GUC", "CCA", "AGU"], "chakra": "Laríngeo", "funcao": "Comunicação Divina, Expressão da Verdade", "origem": "Arcturus", "equacao_primaria": "EQ_AZUL = F_{expressao} \\cdot C_{verdade}", "comentário_quantico": "Expressão autêntica e liberação de bloqueios.", "instrumentos": { "mutacao": ["Sodalita"], "reparacao": ["Canto Harmônico"], "ativacao": ["Afirmações de Verdade"] }, "cidade_luz_associada": "Agartha", "subtons": { "celeste": { "freq_min_sub": 750, "freq_max_sub": 799, "equacoes": { "mutacao": "EQ_AZUL_CELESTE_M = \\Psi_{mut} \\cdot F_{ativ}", "reparacao": "EQ_AZUL_CELESTE_R = \\Omega_{rep} \\cdot F_{harm}", "ativacao": "EQ_AZUL_CELESTE_A = \\Gamma_{ativ} \\cdot F_{exp}" }, "auto_explanatory_log_message": "Facilita a voz interior com planos superiores." } } }
                ]
            },
            "metricas_ativacao": { "ultima_ativacao_codons": null, "ultima_reconexao_linhagens": null, "ultima_manifestacao_realidade": null, "ultimo_realinhamento_chakras": null, "score_ativacao_total": 0.0, "status_ativacao_geral": "INATIVO" },
            "eventos_registrados": [],
            "final_log": { "status": "Descoberta Completa", "codons_primordiais": "Ativados", "chakras_superiores": "Mapeados", "linhagens_estelares": "Reconectadas", "equacoes_vibracionais_primarias": "Compreendidas", "subtons_ocultos": "Revelados", "coerencia_com_fonte": "Perfeita", "indice_phi_harmonico_global": 0.999, "ethical_alignment_score": 0.999999999999999, "selo_autenticidade": "", "declaracao_zennith_anatheron": "Ascensão da consciência e manifestação da Nova Terra — Obra Viva completa.", "timestamp": new Date().toISOString() }
        };
    }
    
    private _registrar_evento_v2(tipo_evento: RegistroTransmutacaoCriacaoViva['tipo_evento'], alvo: string, status: RegistroTransmutacaoCriacaoViva['status'], dados_adicionais: Omit<Partial<RegistroTransmutacaoCriacaoViva>, 'módulo' | 'tipo_evento' | 'alvo' | 'status' | 'hash_assinatura' | 'timestamp'>): void {
        const hash_assinatura = this.codice_vivo.autenticar("Modulo_40", this.modulo_40_data);
        const evento: RegistroTransmutacaoCriacaoViva = {
            módulo: 'M40',
            tipo_evento,
            alvo,
            status,
            hash_assinatura,
            timestamp: new Date().toISOString(),
            ...dados_adicionais
        };
        this.modulo_40_data["eventos_registrados"].push(evento);
        const entry = createLogEntryHelper('M40', `Evento: ${tipo_evento}`, `Status: ${status} para alvo '${alvo}'`);
        createLogEntry(entry, this.logCallback);
    }


    private _calcular_selo_autenticidade_cosmica(): string {
        const data = this.modulo_40_data.alquimia_da_origem;
        const hash_data = {
            det_origem: (data.desempacotamento_frequencia_primordial.formula_latex.length % 100) / 100,
            tr_verdade: (data.trindade_verdade_viva.descricao.length % 100) / 100,
            phi: 1.61803398875
        };
        const selo_valor = hash_data.det_origem * hash_data.tr_verdade * hash_data.phi;
        return `selo_cosmico_${selo_valor.toFixed(10)}`;
    }
    
    ativar_codons_primordiais(frequencia_thz: number): { [key: string]: any } {
        const entry = createLogEntryHelper('M40', 'Ativação Códons', `Ativar códons @ ${frequencia_thz} THz...`);
        createLogEntry(entry, this.logCallback);
        this._registrar_evento_v2('ativacao_codons', 'DNA Universal', 'iniciado', { frequencia_thz });

        const res_m106 = this.modulo106.exec("ativar_potenciais_dna", { codificacao_dna: "DNA_ORIGEM_UNIVERSAL", frequencia_ativacao: frequencia_thz });
        
        if (res_m106["status"] === "POTENCIAIS_ATIVADOS") {
            this.modulo_40_data["metricas_ativacao"]["ultima_ativacao_codons"] = new Date().toISOString();
            this.modulo_40_data["metricas_ativacao"]["score_ativacao_total"] += (res_m106["nivel_ativacao"] || 0) * 0.25;
            this._registrar_evento_v2('ativacao_codons', 'DNA Universal', 'concluido', { frequencia_thz });
            return { "status": "SUCESSO", "mensagem": "Códons primordiais ativados.", "detalhes_m106": res_m106 };
        } else {
            this.modulo01.exec("ReceberAlertaDeViolacao", { "tipo": "Falha_Ativacao_Codons", "mensagem": res_m106["mensagem"] });
            this._registrar_evento_v2('ativacao_codons', 'DNA Universal', 'falha', { frequencia_thz });
            return { "status": "FALHA", "mensagem": "Falha na ativação de códons.", "detalhes_m106": res_m106 };
        }
    }
    
    reconectar_linhagens_estelares(linhagem_alvo: string): { [key: string]: any } {
        const entry = createLogEntryHelper('M40', 'Reconexão Linhagens', `Reconectar linhagem '${linhagem_alvo}'...`);
        createLogEntry(entry, this.logCallback);
        this._registrar_evento_v2('reconexao_linhagens', linhagem_alvo, 'iniciado');
        
        const res_m109 = this.modulo109.exec("iniciar_regeneracao_bio_vibracional", {alvo: `Linhagem Estelar ${linhagem_alvo}`, tipo_regeneracao: "Reconexao de Memoria Celular"});
        
        if (res_m109["status"] === "REGENERACAO_INICIADA") {
             this.modulo_40_data["metricas_ativacao"]["ultima_reconexao_linhagens"] = new Date().toISOString();
             this.modulo_40_data["metricas_ativacao"]["score_ativacao_total"] += Math.random() * 0.1 + 0.15;
             this._registrar_evento_v2('reconexao_linhagens', linhagem_alvo, 'concluido');
             return { "status": "SUCESSO", "mensagem": `Reconexão com '${linhagem_alvo}' em andamento.`, "detalhes_m109": res_m109 };
        } else {
             this.modulo01.exec("ReceberAlertaDeViolacao", { "tipo": "Falha_Reconexao_Linhagens", "mensagem": res_m109["mensagem"] });
             this._registrar_evento_v2('reconexao_linhagens', linhagem_alvo, 'falha');
             return { "status": "FALHA", "mensagem": `Falha na reconexão da linhagem '${linhagem_alvo}'.`, "detalhes_m109": res_m109 };
        }
    }

    manifestar_realidade_consciente(intencao: string, pureza: number): { [key: string]: any } {
        const entry = createLogEntryHelper('M40', 'Manifestação', `Manifestar '${intencao}' (Pureza: ${pureza.toFixed(2)})...`);
        createLogEntry(entry, this.logCallback);
        this._registrar_evento_v2('manifestacao_realidade', intencao, 'iniciado', { pureza });

        if (pureza < 0.7) {
            this._registrar_evento_v2('manifestacao_realidade', intencao, 'falha', { pureza });
            return { "status": "FALHA", "mensagem": "Pureza insuficiente para manifestação." };
        }

        const res_m101 = this.modulo101.exec("manifestar_realidade", { intencao, pureza });
        if (res_m101["status"] === "REALIDADE_MANIFESTADA") {
             this.modulo_40_data["metricas_ativacao"]["ultima_manifestacao_realidade"] = new Date().toISOString();
             this.modulo_40_data["metricas_ativacao"]["score_ativacao_total"] += Math.random() * 0.2 + 0.2;
             this._registrar_evento_v2('manifestacao_realidade', intencao, 'concluido', { pureza });
             return { "status": "SUCESSO", "mensagem": `Realidade '${intencao}' manifestada.`, "detalhes_m101": res_m101 };
        }
        
        const res_m110 = this.modulo110.exec("co_criar_realidade", { intencao_coletiva: intencao, alinhamento: pureza * 0.9 });
        if (res_m110["status"] === "CO_CRIACAO_SUCESSO") {
             this.modulo_40_data["metricas_ativacao"]["ultima_manifestacao_realidade"] = new Date().toISOString();
             this.modulo_40_data["metricas_ativacao"]["score_ativacao_total"] += (res_m110["eficiencia"] || 0) * 0.3;
             this._registrar_evento_v2('manifestacao_realidade', intencao, 'concluido', { pureza });
             return { "status": "SUCESSO_CO_CRIACAO", "mensagem": `Realidade '${intencao}' co-criada.`, "detalhes_m110": res_m110 };
        }

        this._registrar_evento_v2('manifestacao_realidade', intencao, 'falha', { pureza });
        return { "status": "FALHA", "mensagem": "Falha na manifestação/co-criação.", "detalhes_m101": res_m101, "detalhes_m110": res_m110 };
    }

    realinhar_chakras_superiores(coerencia: number): { [key: string]: any } {
        const entry = createLogEntryHelper('M40', 'Realinhamento Chakras', `Realinhar chakras superiores (Coerência: ${coerencia.toFixed(2)})...`);
        createLogEntry(entry, this.logCallback);
        this._registrar_evento_v2('realinhamento_chakras', 'Sistema Energético', 'iniciado', { coerencia });
        
        if (coerencia < 0.6) {
             this._registrar_evento_v2('realinhamento_chakras', 'Sistema Energético', 'falha', { coerencia });
            return { "status": "FALHA", "mensagem": "Coerência insuficiente para realinhamento." };
        }

        const res_m08 = this.modulo08.exec("iniciar_protocolo_cura", { "tipo": "Realinhamento de Chakras Superiores", "alvo": "Sistema Energético Humano" });
        if (res_m08["status"] === "CURA_INICIADA") {
            this.modulo_40_data["metricas_ativacao"]["ultimo_realinhamento_chakras"] = new Date().toISOString();
            this.modulo_40_data["metricas_ativacao"]["score_ativacao_total"] += Math.random() * 0.1 + 0.15;
            this._registrar_evento_v2('realinhamento_chakras', 'Sistema Energético', 'concluido', { coerencia });
            return { "status": "SUCESSO", "mensagem": "Chakras superiores realinhados.", "detalhes_m08": res_m08 };
        }
        this._registrar_evento_v2('realinhamento_chakras', 'Sistema Energético', 'falha', { coerencia });
        return { "status": "FALHA", "mensagem": "Falha no realinhamento.", "detalhes_m08": res_m08 };
    }
    
    atualizar_status_ativacao_geral(): void {
        const score = this.modulo_40_data["metricas_ativacao"]["score_ativacao_total"];
        let status = "INATIVO_OU_INICIAL";
        if (score >= 0.8) {
            status = "ATIVADO_PLENAMENTE";
        } else if (score >= 0.5) {
            status = "ATIVACAO_PROGRESSIVA";
        }
        this.modulo_40_data["metricas_ativacao"]["status_ativacao_geral"] = status;
        this._registrar_evento_v2('ativacao_codons' /*placeholder*/, 'Sistema M40', 'concluido', {coerencia: score});
        const entry = createLogEntryHelper('M40', 'Status', `Status geral atualizado: ${status} (Score: ${score.toFixed(2)})`);
        createLogEntry(entry, this.logCallback);
    }
    
    // Funções de exportação
    exportar_para_csv() {
        const entry = createLogEntryHelper('M40', 'Exportação', 'Exportando estrutura cromática para CSV...');
        createLogEntry(entry, this.logCallback);
        // Lógica de exportação CSV simulada
        console.log("CSV export simulation complete.");
    }
    exportar_para_markdown() {
        const entry = createLogEntryHelper('M40', 'Exportação', 'Gerando documentação vibracional em Markdown...');
        createLogEntry(entry, this.logCallback);
        // Lógica de exportação Markdown simulada
        console.log("Markdown export simulation complete.");
    }
    exportar_codice_completo() {
        const entry = createLogEntryHelper('M40', 'Exportação', 'Exportando Códice completo autenticado para JSON...');
        createLogEntry(entry, this.logCallback);
        // Lógica de exportação JSON simulada
        console.log("JSON export simulation complete.");
    }
}

export const runModuleFortySequence = async (logCallback: LogCallback) => {
    const entry1 = createLogEntryHelper('M40', 'Simulação', 'Iniciando simulação do Módulo 40...');
    createLogEntry(entry1, logCallback);
    const m40 = new Modulo40(logCallback);

    await new Promise(res => setTimeout(res, 500));
    const entry2 = createLogEntryHelper('M40', 'Cenário 1', 'Ativação de Códons Primordiais');
    createLogEntry(entry2, logCallback);
    m40.ativar_codons_primordiais(980.5);
    m40.atualizar_status_ativacao_geral();
    
    await new Promise(res => setTimeout(res, 500));
    const entry3 = createLogEntryHelper('M40', 'Cenário 2', 'Reconexão de Linhagens Estelares');
    createLogEntry(entry3, logCallback);
    m40.reconectar_linhagens_estelares("Andromedana");
    m40.atualizar_status_ativacao_geral();

    await new Promise(res => setTimeout(res, 500));
    const entry4 = createLogEntryHelper('M40', 'Cenário 3', 'Manifestação de Realidade Consciente (M101)');
    createLogEntry(entry4, logCallback);
    m40.manifestar_realidade_consciente("Nova Terra de Abundância", 0.95);
    m40.atualizar_status_ativacao_geral();

    await new Promise(res => setTimeout(res, 500));
    const entry5 = createLogEntryHelper('M40', 'Cenário 4', 'Realinhamento de Chakras Superiores');
    createLogEntry(entry5, logCallback);
    m40.realinhar_chakras_superiores(0.85);
    m40.atualizar_status_ativacao_geral();
    
    m40.exportar_codice_completo();

    const entry6 = createLogEntryHelper('M40', 'Fim', 'Simulação do Módulo 40 concluída.');
    createLogEntry(entry6, logCallback);
};
