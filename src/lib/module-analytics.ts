
// /app/lib/module-analytics.ts
export function trackModuleUsage(moduleId: number) {
  console.log(`📊 Módulo ${moduleId} acessado.`)
  // Aqui podemos integrar com sistema de telemetria vibracional
}

export function getModuleStats(moduleId: number) {
  return {
    id: moduleId,
    acessos: Math.floor(Math.random() * 1000),
    coerencia: `${Math.floor(Math.random() * 5) + 95}%`,
  }
}
