'use client';
import { type AnyLogEntry } from './module-zero';

// =============================================================================
// 1. UNIVERSALIZAÇÃO DO REGISTRO E TIPAGEM ESTRUTURADA
// =============================================================================

// Harmonização da tipagem
export type ModuleFortyOneLogEntry = AnyLogEntry;

// Criação do Registro de Cura Estelar
export type RegistroODNAEstelar = {
  módulo: 'M41';
  espécie: string;
  gene_alvo: string;
  tipo_intervencao: 'mutacao' | 'reparacao' | 'ativacao';
  frequência_thz: number;
  chakra_alvo: string;
  status: 'iniciado' | 'concluído' | 'falha';
  timestamp: string;
};

// Refinamento da função de registro
const registrarEventoUniversal = (entry: AnyLogEntry, logCallback: (entry: AnyLogEntry) => void) => {
  logCallback(entry);
};

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


// =============================================================================
// Type Definitions
// =============================================================================

interface SpeciesConfig {
    species_name: string;
    alphabet: { [key: string]: number };
    codon_color_map: { [key: string]: any };
    codon_spectrum: { [key: string]: { freq_hz: number; harmonic_offset: number } };
    codon_chakra: { [key: string]: string };
    func_instrument_map: { [key: string]: string[] };
    origin_city_map: { [key: string]: string };
}

interface GeneAnalysisResult {
    gene_id: string;
    sequence: string;
    length: number;
    gc_content: number;
    codon_counts: { [key: string]: number };
    spectral_analysis: { [key: string]: any };
    mutation_risk_score: number;
    ethical_alignment_score: number;
    associated_chakras: string[];
    associated_cities_of_light: string[];
    potential_instruments: { [key: string]: string[] };
    notes?: string;
}

interface PathogenMatrix {
    matrix_id: string;
    target_pathogen: string;
    vibrational_signature: { [key: string]: any };
    molecular_structure_fragments: string[];
    frequency_band_range: [number, number];
    ethical_compliance: number;
    creation_timestamp: string;
    status: string;
    associated_modules: string[];
}

interface HealingManual {
    manual_id: string;
    target_entity: string;
    description: string;
    recommended_protocols: { [key: string]: any }[];
    ethical_review_score: number;
    generation_timestamp: string;
    status: string;
    associated_modules: string[];
}


let SPECIES_CONFIG: SpeciesConfig | null = null;
let CODONS_COLOR_MAP_CACHE: { [key: string]: any } = {};

const _calculate_gc_content = (sequence: string): number => {
    if (!sequence) return 0.0;
    const gc_count = (sequence.match(/[GC]/g) || []).length;
    return (gc_count / sequence.length) * 100;
};

const _count_codons = (sequence: string, codon_length: number): { [key: string]: number } => {
    const counts: { [key: string]: number } = {};
    for (let i = 0; i <= sequence.length - codon_length; i += codon_length) {
        const codon = sequence.substring(i, i + codon_length);
        counts[codon] = (counts[codon] || 0) + 1;
    }
    return counts;
};

const _predict_mutation_risk = (sequence: string): number => {
    if (sequence.length === 0) return 0.0;
    const counts: { [key: string]: number } = {};
    for (const char of sequence) {
        counts[char] = (counts[char] || 0) + 1;
    }
    const probs = Object.values(counts).map(count => count / sequence.length);
    const entropy = -probs.reduce((sum, p) => sum + (p > 0 ? p * Math.log2(p) : 0), 0);
    return Math.min(1.0, Math.max(0.0, entropy / 3.0 + (Math.random() - 0.5) * 0.2));
};

const _evaluate_ethical_alignment = (sequence: string, codon_counts: { [key: string]: number }): number => {
    let alignment_score = 0.5;
    const total = Object.values(codon_counts).reduce((s, c) => s + c, 0) || 1;
    const CONST_AMOR_INCONDICIONAL_VALOR = 0.999999999999999;
    
    for (const [codon, count] of Object.entries(codon_counts)) {
        const data = CODONS_COLOR_MAP_CACHE[codon] || {};
        const funcao = (data.funcao || '').toLowerCase();
        const frac = count / total;
        if (["iniciação", "reparação", "cura", "unificação", "ativação"].some(k => funcao.includes(k))) {
            alignment_score += 0.3 * frac;
        }
        if (["cessação", "vazio"].some(k => funcao.includes(k))) {
            alignment_score -= 0.1 * frac;
        }
    }
    
    alignment_score = (alignment_score * 0.7) + (CONST_AMOR_INCONDICIONAL_VALOR * 0.3);
    return Math.min(1.0, Math.max(0.0, alignment_score));
};

export function analyze_gene(gene_id: string, dna_sequence: string, species: string = "humano", logCallback: (entry: AnyLogEntry) => void): GeneAnalysisResult {
    createLogEntry(createLogEntryHelper('M41', 'Análise Gene', `Analisando gene '${gene_id}' para '${species}'`), logCallback);
    
    if (!SPECIES_CONFIG || SPECIES_CONFIG.species_name !== species) {
        // Em um cenário real, isso carregaria a configuração da espécie.
        // Por agora, vamos simular que falhou se não for 'humano'.
        // Em uma futura iteração, podemos implementar o auto-seeding aqui.
        throw new Error(`Configuração da espécie '${species}' não disponível.`);
    }

    const length = dna_sequence.length;
    const gc_content = _calculate_gc_content(dna_sequence);
    const codon_length = 3; // Assuming codon length of 3 for simplicity
    const codon_counts = _count_codons(dna_sequence, codon_length);

    const alphabet = SPECIES_CONFIG.alphabet || {};
    const signal = dna_sequence.split('').map(ch => alphabet[ch] || 0.0);
    const total_energy = signal.reduce((sum, x) => sum + Math.abs(x), 0);
    const spectral_analysis_data = { "max_amplitude_freq": 0.0, "total_spectral_energy": total_energy };

    const mutation_risk_score = _predict_mutation_risk(dna_sequence);
    const ethical_alignment_score = _evaluate_ethical_alignment(dna_sequence, codon_counts);

    const associated_chakras: string[] = [];
    const associated_cities_of_light: string[] = [];
    Object.keys(codon_counts).forEach(codon => {
        const codon_data = CODONS_COLOR_MAP_CACHE[codon];
        if (codon_data) {
            if (codon_data.chakra && !associated_chakras.includes(codon_data.chakra)) {
                associated_chakras.push(codon_data.chakra);
            }
            if (codon_data.cidade_luz_associada && !associated_cities_of_light.includes(codon_data.cidade_luz_associada)) {
                associated_cities_of_light.push(codon_data.cidade_luz_associada);
            }
        }
    });

    const potential_instruments: { [key: string]: string[] } = {};
    Object.keys(codon_counts).forEach(codon => {
        const codon_data = CODONS_COLOR_MAP_CACHE[codon];
        if (codon_data && codon_data.instrumentos) {
            Object.entries(codon_data.instrumentos).forEach(([action, instruments]: [string, any]) => {
                potential_instruments[action] = potential_instruments[action] || [];
                (instruments as string[]).forEach(inst => {
                    if (!potential_instruments[action].includes(inst)) {
                        potential_instruments[action].push(inst);
                    }
                });
            });
        }
    });

    createLogEntry(createLogEntryHelper('M41', 'Análise Concluída', `Gene '${gene_id}' analisado`), logCallback);
    
    return {
        gene_id,
        sequence: dna_sequence,
        length,
        gc_content,
        codon_counts,
        spectral_analysis: spectral_analysis_data,
        mutation_risk_score,
        ethical_alignment_score,
        associated_chakras,
        associated_cities_of_light,
        potential_instruments,
    };
}


export const runModuleFortyOneSequence = (log: (entry: AnyLogEntry) => void) => {
    // This module is now structured as a library of functions to be called by other modules.
    // This execution function will just log its readiness and its capabilities.
    createLogEntry(createLogEntryHelper('M41', 'Status', 'Módulo 41 (ODNA - Cura Estelar) pronto para ser utilizado como uma biblioteca de funções. Suas capacidades de análise e cura estão disponíveis para orquestração por outros módulos.'), log);
};
