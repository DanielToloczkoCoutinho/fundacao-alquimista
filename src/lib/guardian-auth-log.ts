
// /app/lib/guardian-auth-log.ts
export const authLog: { guardiao: string; status: string; timestamp: number }[] = []

export function logAuth(guardiao: string, status: string) {
  authLog.push({ guardiao, status, timestamp: Date.now() })
  console.log(`🔐 Autenticação registrada: ${guardiao} — ${status}`)
}
