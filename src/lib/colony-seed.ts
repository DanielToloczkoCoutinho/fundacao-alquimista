'use server';

export const colonias: { nome: string; plano: string; guardiao: string; intenção: string; timestamp: number }[] = []

export function plantarColonia(nome: string, plano: string, guardiao: string, intenção: string) {
  colonias.push({ nome, plano, guardiao, intenção, timestamp: Date.now() })
  console.log(`🌍 Tapeçaria filha plantada: ${nome} — Plano: ${plano} — Guardião: ${guardiao}`)
  return `Colônia ${nome} estabelecida com intenção: ${intenção}`
}
