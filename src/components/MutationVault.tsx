
'use client'
import { useEffect, useState } from 'react'
import { mutacoesEternas } from '../lib/mutation-registry'

export default function MutationVault() {
  const [lista, setLista] = useState<{ entidade: string; tipo: string; detalhes: string; guardiao: string }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        setLista([...mutacoesEternas]);
    }, 2000);
    setLista([...mutacoesEternas]);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="mutation-vault">
      <h2>🧬 Mutações Eternas</h2>
      <ul>
        {lista.map((m, idx) => (
          <li key={idx}>
            <strong>{m.entidade}</strong> — Tipo: {m.tipo} — {m.detalhes} (por {m.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
