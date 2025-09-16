
// /app/lib/guardian-initiations.ts
export const initiations: any[] = []

export function registerInitiation(guardiao: string, etapa: string) {
  initiations.push({ guardiao, etapa, timestamp: Date.now() })
  console.log(`🔥 Iniciação registrada: ${guardiao} — Etapa: ${etapa}`)
}
