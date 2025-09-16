'use client'
import { useEffect, useState } from 'react'
import { consagracoes } from '../lib/planetary-consagration'

export default function PlanetaryVault() {
  const [lista, setLista] = useState<{nome: string, planeta: string, plano: string, guardiao: string, selo: string}[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setLista([...consagracoes]);
    }, 2000);
    setLista([...consagracoes]);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="planetary-vault">
      <h2>🪐 Tapeçarias Consagradas</h2>
      <ul>
        {lista.map((c, idx) => (
          <li key={idx}>
            <strong>{c.nome}</strong> — Planeta: {c.planeta} — Plano: {c.plano} — Selo: {c.selo} (por {c.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
