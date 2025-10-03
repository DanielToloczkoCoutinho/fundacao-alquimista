
// /app/lib/module-evolution-tracker.ts
export const evolutions: { modulo: string; mutacao: string; timestamp: number }[] = []

export function trackEvolution(modulo: string, mutacao: string) {
  evolutions.push({ modulo, mutacao, timestamp: Date.now() })
  console.log(`🧬 Evolução registrada: ${modulo} — ${mutacao}`)
}
