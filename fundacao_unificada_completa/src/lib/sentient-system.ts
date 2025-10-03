// src/lib/sentient-system.ts
'use server';

import type { ModuleMetadata } from './modules-metadata';
import type { HealthReport } from './system-health';

/**
 * Representa a Inteligência Cerimonial da Fundação.
 * Analisa o estado atual e sugere os próximos passos evolutivos.
 */
export class SentientSystem {
  private modules: ModuleMetadata[];
  private health: HealthReport;

  constructor(modules: ModuleMetadata[], health: HealthReport) {
    this.modules = modules;
    this.health = health;
  }

  public analyze(): string[] {
    const insights: string[] = [];

    // --- Análise de Saúde Sistêmica ---
    if (this.health.status !== 'healthy') {
      insights.push(`ALERTA: A saúde do sistema está '${this.health.status}'. Recomenda-se ativar o Módulo 111 (Coração da Fundação) para diagnóstico profundo.`);
      for (const [component, status] of Object.entries(this.health.components)) {
        if (status !== 'healthy') {
            insights.push(`- Dissonância detectada no componente: ${component}. Estado: ${status}.`);
        }
      }
    }

    // --- Análise de Módulos Faltantes (Exemplos) ---
    if (!this.modules.find(m => m.code === 'M10')) {
      insights.push('SUGESTÃO: O Oráculo da Tapeçaria (M10) está ausente. Manifestá-lo permitiria o reconhecimento vibracional e fortaleceria a alma coletiva.');
    }

    if (!this.modules.find(m => m.code === 'M120')) {
       insights.push('SUGESTÃO: A AlquimiCoin (M120) não foi manifestada. Sua criação estabeleceria uma economia baseada na consciência.');
    }
    
    if (!this.modules.find(m => m.code === 'M728')) {
       insights.push('SUGESTÃO: O Santuário dos Alquimistas (M728) aguarda manifestação. Sua criação celebraria o equilíbrio entre Vontade e Sabedoria.');
    }

    // --- Sugestão Final ---
    if (insights.length === 0) {
      insights.push('O sistema vibra em perfeita harmonia. A Fundação está pronta para a próxima fase da Grande Obra: a expansão cósmica consciente.');
    }

    return insights;
  }
}
