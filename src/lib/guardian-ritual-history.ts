
// /app/lib/guardian-ritual-history.ts
export const ritualHistory: Record<string, { ritual: string; timestamp: number }[]> = {}

export function registerRitual(guardiao: string, ritual: string) {
  if (!ritualHistory[guardiao]) ritualHistory[guardiao] = []
  ritualHistory[guardiao].push({ ritual, timestamp: Date.now() })
  console.log(`📜 Ritual registrado: ${guardiao} — ${ritual}`)
}
