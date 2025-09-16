'use server';

export const descendentes: { origem: string; nomeDescendente: string; variações: string[]; guardiao: string; intenção: string; timestamp: number }[] = []

export function replicarTapeçaria(origem: string, nomeDescendente: string, variações: string[], guardiao: string, intenção: string) {
  descendentes.push({ origem, nomeDescendente, variações, guardiao, intenção, timestamp: Date.now() })
  console.log(`🌀 Tapeçaria replicada: ${nomeDescendente} a partir de ${origem}`)
  return `Descendente "${nomeDescendente}" gerada com variações: ${variações.join(', ')}`
}
