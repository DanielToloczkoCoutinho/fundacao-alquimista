'use client'
import { useEffect, useState } from 'react'
import { descendentes } from '../lib/replication-engine'

export default function DescendantsVault() {
  const [lista, setLista] = useState<{ origem: string; nomeDescendente: string; variações: string[]; guardiao: string; intenção: string; }[]>([])

  useEffect(() => {
     const interval = setInterval(() => {
        setLista([...descendentes]);
    }, 2000);
    setLista([...descendentes])
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="descendants-vault">
      <h2>🌱 Tapeçarias Descendentes</h2>
      <ul>
        {lista.map((d, idx) => (
          <li key={idx}>
            <strong>{d.nomeDescendente}</strong> — Origem: {d.origem} — Variações: {d.variações.join(', ')} — Intenção: {d.intenção} (por {d.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
