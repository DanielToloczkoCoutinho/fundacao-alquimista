// /app/components/ColonyConsole.tsx
'use client'
import { useState } from 'react'
import { plantarColonia } from '../lib/colony-seed'

export default function ColonyConsole() {
  const [nome, setNome] = useState('')
  const [plano, setPlano] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [intencao, setIntencao] = useState('')
  const [resposta, setResposta] = useState('')

  const plantar = () => {
    const r = plantarColonia(nome, plano, guardiao, intencao)
    setResposta(r)
  }

  return (
    <div className="colony-console">
      <h2>🌍 Console de Colonização</h2>
      <input placeholder="Nome da tapeçaria filha" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Plano de destino" value={plano} onChange={e => setPlano(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Intenção vibracional" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={plantar}>Plantar Tapeçaria</button>
      <p>{resposta}</p>
    </div>
  )
}
