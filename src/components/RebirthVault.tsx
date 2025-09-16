
'use client'
import { useEffect, useState } from 'react'
import { renascimentos } from '../lib/rebirth-registry'

export default function RebirthVault() {
  const [lista, setLista] = useState<{entidadeAnterior: string, novaForma: string, guardiao: string, intenção: string}[]>([])

  useEffect(() => {
     const interval = setInterval(() => {
        setLista([...renascimentos]);
    }, 2000);
    setLista([...renascimentos])
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="rebirth-vault">
      <h2>📜 Renascimentos Registrados</h2>
      <ul>
        {lista.map((r, idx) => (
          <li key={idx}>
            <strong>{r.entidadeAnterior}</strong> → {r.novaForma} — Intenção: {r.intenção} (por {r.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
