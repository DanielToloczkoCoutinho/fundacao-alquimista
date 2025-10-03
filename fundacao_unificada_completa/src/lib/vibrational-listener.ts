'use server';

export const sinais: { guardiao: string; tipo: string; intensidade: number, timestamp: number }[] = []

export function registrarSinal(guardiao: string, tipo: string, intensidade: number) {
  sinais.push({ guardiao, tipo, intensidade, timestamp: Date.now() })
  console.log(`🔊 Sinal recebido: ${guardiao} — ${tipo} — Intensidade: ${intensidade}`)
  return intensidade > 7 ? '⚡️ Resposta cerimonial ativada' : '🌿 Sinal registrado com serenidade'
}
