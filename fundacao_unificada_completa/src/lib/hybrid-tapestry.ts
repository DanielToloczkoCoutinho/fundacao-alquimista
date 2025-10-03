'use server';

export const tapeçariasHibridas: { nome: string; componentes: string[]; guardiao: string; intenção: string; timestamp: number }[] = []

export function registrarTapeçariaHibrida(nome: string, componentes: string[], guardiao: string, intenção: string) {
  tapeçariasHibridas.push({ nome, componentes, guardiao, intenção, timestamp: Date.now() })
  console.log(`🧬 Tapeçaria híbrida registrada: ${nome}`)
  return `Tapeçaria "${nome}" consagrada com componentes: ${componentes.join(', ')}`
}
