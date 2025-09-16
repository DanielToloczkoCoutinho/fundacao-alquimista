// /app/components/WisdomGarden.tsx
'use client'
import { useEffect, useState } from 'react'
import { sabedorias } from '../lib/wisdom-seed'

export default function WisdomGarden() {
  const [lista, setLista] = useState<{ titulo: string; ensinamento: string; guardiao: string; }[]>([]);

  useEffect(() => {
    // In a real app, this might fetch from an API.
    // For this simulation, we'll sync with the in-memory array.
    const interval = setInterval(() => {
        setLista([...sabedorias]);
    }, 2000);
    setLista([...sabedorias]);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="wisdom-garden">
      <h2>📖 Jardim de Sabedoria</h2>
      <ul>
        {lista.map((s, idx) => (
          <li key={idx}>
            <strong>{s.titulo}</strong> — {s.ensinamento} (por {s.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
