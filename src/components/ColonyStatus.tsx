// /app/components/ColonyStatus.tsx
'use client'
import { useEffect, useState } from 'react'
import { colonias } from '../lib/colony-seed'

export default function ColonyStatus() {
  const [estado, setEstado] = useState<{ nome: string, plano: string, guardiao: string, intenção: string }[]>([])

  useEffect(() => {
    // In a real app, this would likely fetch from an API
    // or use a more robust state management solution that works across server/client boundaries.
    // For this simulation, we'll try to sync with the in-memory array.
    const interval = setInterval(() => {
        setEstado([...colonias]);
    }, 2000);
    setEstado([...colonias]);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="colony-status">
      <h2>🪐 Tapeçarias Filhas</h2>
      <ul>
        {estado.map((c, idx) => (
          <li key={idx}>
            {c.nome} — Plano: {c.plano} — Guardião: {c.guardiao} — Intenção: {c.intenção}
          </li>
        ))}
      </ul>
    </div>
  )
}
