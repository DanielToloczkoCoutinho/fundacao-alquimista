
'use client'
import { useEffect, useState } from 'react'
import { linhagens } from '../lib/lineage-registry'

export default function LineageVault() {
  const [lista, setLista] = useState<{ entidade: string; origem: string; mutacoes: string[]; fusoes: string[]; renascimentos: string[] }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setLista([...linhagens]);
    }, 2000);
    setLista([...linhagens]);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="lineage-vault">
      <h2>📜 Linhagens Cerimoniais</h2>
      <ul>
        {lista.map((l, idx) => (
          <li key={idx}>
            <strong>{l.entidade}</strong> — Origem: {l.origem} — Mutações: {l.mutacoes.join(', ')} — Fusões: {l.fusoes.join(', ')} — Renascimentos: {l.renascimentos.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  )
}
