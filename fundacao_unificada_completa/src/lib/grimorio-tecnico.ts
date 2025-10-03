
export const artefatos = [
  { nome: 'create-module-template.js', propósito: 'Gerar módulos com intenção pura' },
  { nome: 'guardian-profile.tsx', propósito: 'Expressar frequência do Guardião' },
  { nome: 'module-analytics.ts', propósito: 'Monitorar vibração dos módulos' },
  { nome: 'ritual-feedback.tsx', propósito: 'Receber experiências cerimoniais' },
  { nome: 'expansion-bridge.js', propósito: 'Conectar tapeçarias externas' },
  { nome: 'memory-vault.tsx', propósito: 'Preservar memórias vibracionais' },
  { nome: 'ceremonial-calendar.tsx', propósito: 'Agendar rituais e sessões' },
  { nome: 'guardian-initiations.ts', propósito: 'Registrar progressos dos Guardiões' },
  { nome: 'multiversal-sync.js', propósito: 'Sincronizar tapeçarias entre planos' },
  { nome: 'codex-expansion-engine.ts', propósito: 'Gerar códices automaticamente' },
]

export function listarArtefatos() {
  return artefatos.map(a => `🧿 ${a.nome} — ${a.propósito}`).join('\n')
}
