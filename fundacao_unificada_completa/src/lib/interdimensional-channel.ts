'use server';

export const canais: { nome: string; plano: string; protocolo: string; timestamp: number }[] = []

export function abrirCanal(nome: string, plano: string, protocolo: string) {
  canais.push({ nome, plano, protocolo, timestamp: Date.now() })
  console.log(`🛰️ Canal interdimensional aberto: ${nome} — Plano: ${plano} — Protocolo: ${protocolo}`)
  return `Canal ${nome} conectado com ${plano} via ${protocolo}`
}
