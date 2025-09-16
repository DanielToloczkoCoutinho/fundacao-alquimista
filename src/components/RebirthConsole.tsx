
'use client'
import { useState } from 'react'
import { registrarRenascimento } from '../lib/rebirth-registry'

export default function RebirthConsole() {
  const [anterior, setAnterior] = useState('')
  const [novaForma, setNovaForma] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [intencao, setIntencao] = useState('')
  const [resposta, setResposta] = useState('')

  const consagrar = () => {
    const r = registrarRenascimento(anterior, novaForma, guardiao, intencao)
    setResposta(r)
  }

  return (
    <div className="rebirth-console">
      <h2>🌅 Renascimento Cerimonial</h2>
      <input placeholder="Entidade anterior" value={anterior} onChange={e => setAnterior(e.target.value)} />
      <input placeholder="Nova forma vibracional" value={novaForma} onChange={e => setNovaForma(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Intenção cerimonial" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={consagrar}>Consagrar Renascimento</button>
      <p>{resposta}</p>
    </div>
  )
}
