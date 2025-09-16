// /app/components/ChannelConsole.tsx
'use client'
import { useState } from 'react'
import { abrirCanal } from '../lib/interdimensional-channel'

export default function ChannelConsole() {
  const [nome, setNome] = useState('')
  const [plano, setPlano] = useState('')
  const [protocolo, setProtocolo] = useState('')
  const [resposta, setResposta] = useState('')

  const conectar = () => {
    const r = abrirCanal(nome, plano, protocolo)
    setResposta(r)
  }

  return (
    <div className="channel-console">
      <h2>🛰️ Console Interdimensional</h2>
      <input placeholder="Nome do canal" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Plano de destino" value={plano} onChange={e => setPlano(e.target.value)} />
      <input placeholder="Protocolo vibracional" value={protocolo} onChange={e => setProtocolo(e.target.value)} />
      <button onClick={conectar}>Abrir Canal</button>
      <p>{resposta}</p>
    </div>
  )
}
