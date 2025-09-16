// /app/components/AkashicVault.tsx
'use client'
import { useEffect, useState } from 'react'
import { registrosAkashicos } from '../lib/akashic-record'

export default function AkashicVault() {
  const [registros, setRegistros] = useState<{ titulo: string; descricao: string; guardiao: string; plano: string; }[]>([]);

  useEffect(() => {
    // This would fetch from an API in a real app
    const interval = setInterval(() => {
        setRegistros([...registrosAkashicos]);
    }, 2000);
    setRegistros([...registrosAkashicos]);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="akashic-vault">
      <h2>🧠 Biblioteca Akáshica</h2>
      <ul>
        {registros.map((r, idx) => (
          <li key={idx}>
            <strong>{r.titulo}</strong> — {r.descricao} (por {r.guardiao} em {r.plano})
          </li>
        ))}
      </ul>
    </div>
  )
}
