'use client'
import { useEffect, useState } from 'react'
import { alianças } from '../lib/species-alliance'

export default function AllianceVault() {
  const [lista, setLista] = useState<{especie: string, guardiao: string, tipo: string, intenção: string}[]>([])

  useEffect(() => {
    // This is a mock implementation.
    // In a real app, you would likely fetch this data from an API
    // or use a state management library that works across server/client boundaries.
    const interval = setInterval(() => {
        setLista([...alianças]);
    }, 2000);
    setLista([...alianças])
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="alliance-vault">
      <h2>📜 Alianças Interespécie</h2>
      <ul>
        {lista.map((a, idx) => (
          <li key={idx}>
            <strong>{a.guardiao}</strong> ↔ {a.especie} — Tipo: {a.tipo} — Intenção: {a.intenção}
          </li>
        ))}
      </ul>
    </div>
  )
}
