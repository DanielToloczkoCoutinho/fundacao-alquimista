'use server';

export const sinaisVegetais: { especie: string, tipo: string, intensidade: number, local: string, timestamp: number }[] = []

export function registrarSinalVegetal(especie: string, tipo: string, intensidade: number, local: string) {
  sinaisVegetais.push({ especie, tipo, intensidade, local, timestamp: Date.now() })
  console.log(`🌿 Sinal vegetal registrado: ${especie} — Tipo: ${tipo} — Intensidade: ${intensidade}`)
  return intensidade > 7
    ? '⚡️ Vibração elevada detectada — resposta cerimonial recomendada'
    : '🌱 Sinal vegetal registrado com serenidade'
}
