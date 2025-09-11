import client from 'prom-client';
import { logger } from './logger';

// Métricas personalizadas para os Módulos Alquímicos
export const moduleActivationCounter = new client.Counter({
  name: 'alquimista_module_activations_total',
  help: 'Contador de ativações de módulos por tipo',
  labelNames: ['module_id', 'module_type'],
});

export const cosmicEnergyGauge = new client.Gauge({
  name: 'alquimista_cosmic_energy_current',
  help: 'Mede a energia cósmica corrente no sistema',
});

export const alchemicalReactionTimer = new client.Histogram({
  name: 'alquimista_reaction_duration_seconds',
  help: 'Tempo das reações alquímicas',
  labelNames: ['reaction_type'],
  buckets: [0.1, 0.5, 1, 2, 5],
});

// Função para simular energia cósmica
export function simulateCosmicEnergy() {
  setInterval(() => {
    const energy = Math.random() * 100;
    cosmicEnergyGauge.set(energy);
    
    logger.info('Energia cósmica medida', { energy });
  }, 5000);
}

// Registro de ativação de módulo
export function recordModuleActivation(moduleId: number, moduleType: string) {
  moduleActivationCounter.inc({ module_id: moduleId.toString(), module_type: moduleType });
  logger.info('Módulo ativado', { moduleId, moduleType });
}
