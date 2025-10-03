
// /app/lib/codex-expansion-engine.ts
export function generateCodex(ritualName: string, details: string[]) {
  return `
# Códice Cerimonial — ${ritualName}

## Detalhes
${details.map(d => `- ${d}`).join('\n')}

## Frequência
432Hz

## Propósito
Este códice foi gerado automaticamente após o ritual "${ritualName}".
  `.trim()
}
