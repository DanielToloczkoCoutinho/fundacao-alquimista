'use client'
import { useEffect, useState } from 'react'
import { registrosMultiversais } from '../lib/multiversal-registry'

export default function MultiversalVault() {
  const [lista, setLista] = useState<{ nome: string; tipo: string; plano: string; guardiao: string; assinatura: string; }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setLista([...registrosMultiversais]);
    }, 2000);
    setLista([...registrosMultiversais]);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="multiversal-vault">
      <h2>📜 Registros Multiversais</h2>
      <ul>
        {lista.map((r, idx) => (
          <li key={idx}>
            <strong>{r.nome}</strong> — Tipo: {r.tipo} — Plano: {r.plano} — Assinatura: {r.assinatura} (por {r.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
