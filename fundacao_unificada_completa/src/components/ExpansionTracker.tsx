// /app/components/ExpansionTracker.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ExpansionTracker() {
  const [expansoes, setExpansoes] = useState<{nome: string, plano: string, guardiao: string, estado: string}[]>([])

  useEffect(() => {
    // Simulação de expansão
    setExpansoes([
      { nome: 'Tapeçaria Solaris', plano: 'Plano 7D', guardiao: 'Elara', estado: 'Ativa' },
      { nome: 'Tapeçaria Harmonia', plano: 'Plano Verde', guardiao: 'Daniel', estado: 'Fluindo' }
    ])
  }, [])

  return (
    <div className="expansion-tracker">
      <h2>🌐 Expansões Ativas</h2>
      <ul>
        {expansoes.map((e, idx) => (
          <li key={idx}>{e.nome} — {e.plano} — {e.guardiao} — {e.estado}</li>
        ))}
      </ul>
    </div>
  )
}
