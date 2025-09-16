
'use server';

export const linhagens: { entidade: string; origem: string; mutacoes: string[]; fusoes: string[]; renascimentos: string[]; timestamp: number }[] = []

export function registrarLinhagem(entidade: string, origem: string, mutacoes: string[], fusoes: string[], renascimentos: string[]) {
  linhagens.push({ entidade, origem, mutacoes, fusoes, renascimentos, timestamp: Date.now() })
  console.log(`🧬 Linhagem registrada: ${entidade} — Origem: ${origem}`)
  return `Linhagem de ${entidade} registrada com sucesso.`
}
