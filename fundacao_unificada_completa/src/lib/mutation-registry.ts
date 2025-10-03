
'use server';

export const mutacoesEternas: { entidade: string; tipo: string; detalhes: string; guardiao: string; timestamp: number }[] = []

export function registrarMutacao(entidade: string, tipo: string, detalhes: string, guardiao: string) {
  mutacoesEternas.push({ entidade, tipo, detalhes, guardiao, timestamp: Date.now() })
  console.log(`🧪 Mutação registrada: ${entidade} — Tipo: ${tipo}`)
  return `Mutação de ${entidade} registrada com intenção cerimonial.`
}
