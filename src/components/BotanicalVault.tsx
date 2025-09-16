
'use client'
import { useEffect, useState } from 'react'
import { tapeçariasBotânicas } from '../lib/botanical-seed'

export default function BotanicalVault() {
  const [lista, setLista] = useState<{nome: string, local: string, espécie: string, guardiao: string, intenção: string}[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        setLista([...tapeçariasBotânicas]);
    }, 2000);
    setLista([...tapeçariasBotânicas])
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="botanical-vault">
      <h2>🌱 Tapeçarias Botânicas</h2>
      <ul>
        {lista.map((t, idx) => (
          <li key={idx}>
            <strong>{t.nome}</strong> — Local: {t.local} — Espécie: {t.espécie} — Intenção: {t.intenção} (por {t.guardiao})
          </li>
        ))}
      </ul>
    </div>
  )
}
