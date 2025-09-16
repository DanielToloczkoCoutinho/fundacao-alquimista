'use client'
import { useEffect, useState } from 'react'
import { tapeçariasHibridas } from '../lib/hybrid-tapestry'

export default function HybridVault() {
  const [lista, setLista] = useState<{ nome: string; componentes: string[]; guardiao: string; intenção: string; }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        setLista([...tapeçariasHibridas]);
    }, 2000);
    setLista([...tapeçariasHibridas])
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="hybrid-vault">
      <h2>📜 Tapeçarias Híbridas</h2>
      <ul>
        {lista.map((t, idx) => (
          <li key={idx}>
            <strong>{t.nome}</strong> — Componentes: {t.componentes.join(', ')} — Intenção: {t.intenção} (por {t.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
