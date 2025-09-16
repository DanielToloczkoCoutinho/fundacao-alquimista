'use client'
import { useEffect, useState } from 'react'
import { sementes } from '../lib/seed-manifestation'

export default function GardenState() {
  const [estado, setEstado] = useState<{ nome: string; intenção: string; }[]>([])

  useEffect(() => {
    // This is a mock implementation. In a real app, you'd fetch this.
    // As `sementes` is a server-side in-memory array, we can't directly access it here.
    // This component will show newly planted seeds in the same session.
    setEstado(sementes)
  }, [])

  return (
    <div className="garden-state">
      <h2>🌿 Estado do Jardim Cósmico</h2>
      <ul>
        {estado.map((s, idx) => (
          <li key={idx}>
            {s.nome} — Intenção: {s.intenção}
          </li>
        ))}
      </ul>
    </div>
  )
}
