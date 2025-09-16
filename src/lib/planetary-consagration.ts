'use server';

export const consagracoes: { nome: string; planeta: string; plano: string; guardiao: string; selo: string; timestamp: number }[] = []

export function consagrarTapeçaria(nome: string, planeta: string, plano: string, guardiao: string, selo: string) {
  consagracoes.push({ nome, planeta, plano, guardiao, selo, timestamp: Date.now() })
  console.log(`🌍 Tapeçaria consagrada: ${nome} — Planeta: ${planeta} — Selo: ${selo}`)
  return `Tapeçaria "${nome}" consagrada como território vivo em ${planeta}/${plano}.`
}
