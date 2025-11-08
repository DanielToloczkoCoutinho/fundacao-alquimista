'use client';

import bibliotecaMod0_9 from './biblioteca_chave_mestra_mod0_9';
import bibliotecaMod10_20 from './biblioteca_chave_mestra_mod10_20';
import bibliotecaMod21_31 from './biblioteca_chave_mestra_mod21_31';
import bibliotecaMod32_41 from './biblioteca_chave_mestra_mod32_41';
import bibliotecaMod42_46 from './biblioteca_chave_mestra_mod42_46';
import bibliotecaMod71_85 from './biblioteca_chave_mestra_mod71_85';
import bibliotecaMod90_110 from './biblioteca_chave_mestra_mod90_110';
import bibliotecaMod111_118 from './biblioteca_chave_mestra_mod111_118';
import bibliotecaMod200_228 from './biblioteca_chave_mestra_mod200_228';
import bibliotecaMod300_304 from './biblioteca_chave_mestra_mod300_304';
import bibliotecaMod304_3_a_5 from './biblioteca_chave_mestra_mod304_3_a_5';
import bibliotecaMod307 from './biblioteca_chave_mestra_mod307';
import bibliotecaLuxNet from './biblioteca_chave_mestra_luxnet';
import bibliotecaAvancado from './biblioteca_chave_mestra_luxnet_avancado';
import bibliotecaVortex3 from './biblioteca_chave_mestra_vortex_v3';
import bibliotecaVortex4 from './biblioteca_chave_mestra_vortex_v4';
import bibliotecaCompleta from './biblioteca_chave_mestra_luxnet_completa';
// O Módulo 42 agora é o ChronoCodex, o 44 é o Veritas.
// Os nomes dos arquivos foram ajustados para refletir a numeração.
import './module-forty-one-part-one';
import './module-forty-one-part-two';
import './module-forty-two';
import './module-forty-three';
import './module-forty-four';
import './module-forty-five';
import './module-forty-five-point-two';
import './module-forty-five-point-four';
import './module-forty-five-point-five';
import './module-forty-six';
import './syntesis-prime-modules';
import './module-seventy-one';
import './module-seventy-two';
import './module-seventy-three';
import './module-seventy-four';
import './module-seventy-seven';
import './module-seventy-eight';
import './module-seventy-nine';
import './module-eighty';
import './module-eighty-one';
import './module-eighty-two';
import './module-eighty-three';
import './module-eighty-four';
import './module-eighty-five';
import './module-eighty-six';
import './module-eighty-seven';
import './module-eighty-eight';
import './module-ninety';
import './module-ninety-one';
import './module-ninety-two';
import './module-ninety-three';
import './module-ninety-four';
import './module-ninety-five';
import './module-ninety-six';
import './module-ninety-seven';
import './module-ninety-eight';
import './module-ninety-nine';
import './module-one-hundred';
import './module-one-hundred-one';
import './module-one-hundred-two';
import './module-one-hundred-three';
import './module-one-hundred-four';
import './module-one-hundred-five';
import './module-one-hundred-six';
import './module-one-hundred-seven';
import './module-one-hundred-eight';
import './module-one-hundred-nine';
import './module-two-hundred-one';
import './module-omega';


export interface EquacaoViva {
    id: string;
    nome: string;
    formula_latex?: string;
    formula_python?: string;
    formula?: string;
    descricao: string;
    classificacao: string;
    variaveis: string[];
    funcao?: Function | null;
    origem: string;
    energia_modelada?: number;
    coerencia?: number;
    frequencias?: number[];
    liga_responsavel?: any;
    camada?: string;
}

class BibliotecaCompletaUnificada {
    public equacoes: { [id: string]: EquacaoViva } = {};

    constructor() {
        this.unificarBibliotecas();
    }

    private unificarBibliotecas() {
        const bibliotecas = [
            bibliotecaMod0_9,
            bibliotecaMod10_20,
            bibliotecaMod21_31,
            bibliotecaMod32_41,
            bibliotecaMod42_46,
            bibliotecaMod71_85,
            bibliotecaMod90_110,
            bibliotecaMod111_118,
            bibliotecaMod200_228,
            bibliotecaMod300_304,
            bibliotecaMod304_3_a_5,
            bibliotecaMod307,
            bibliotecaLuxNet,
            bibliotecaAvancado,
            bibliotecaVortex3,
            bibliotecaVortex4,
            bibliotecaCompleta,
        ];

        for (const bib of bibliotecas) {
            for (const eq of Object.values(bib.equacoes)) {
                if (!this.equacoes[eq.id]) {
                    this.equacoes[eq.id] = eq as EquacaoViva;
                }
            }
        }
    }

    public listarTodas(): EquacaoViva[] {
        return Object.values(this.equacoes);
    }

    public buscarPorClassificacao(classificacao: string): EquacaoViva[] {
        return this.listarTodas().filter(eq => eq.classificacao === classificacao);
    }
}

export const bibliotecaCompletaUnificada = new BibliotecaCompletaUnificada();