
'use client'
import { useState } from 'react'

export default function RitualOfIncorporation() {
  const [status, setStatus] = useState('Aguardando incorporação...')

  const incorporate = () => {
    setStatus('🔮 Artefatos sendo incorporados à tapeçaria...')
    setTimeout(() => {
      setStatus('✅ Incorporação concluída. A tapeçaria está viva.')
    }, 3000)
  }

  return (
    <div className="ritual-incorporation">
      <h2>🔮 Ritual de Incorporação</h2>
      <button onClick={incorporate}>Incorporar Artefatos</button>
      <p>{status}</p>
    </div>
  )
}
