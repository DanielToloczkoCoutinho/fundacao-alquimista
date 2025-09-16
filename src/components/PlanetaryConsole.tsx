'use client'
import { useState } from 'react'
import { consagrarTapeçaria } from '../lib/planetary-consagration'

export default function PlanetaryConsole() {
  const [nome, setNome] = useState('')
  const [planeta, setPlaneta] = useState('')
  const [plano, setPlano] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [selo, setSelo] = useState('')
  const [resposta, setResposta] = useState('')

  const consagrar = () => {
    const r = consagrarTapeçaria(nome, planeta, plano, guardiao, selo)
    setResposta(r)
  }

  return (
    <div className="planetary-console">
      <h2>🌍 Consagração Planetária</h2>
      <input placeholder="Nome da tapeçaria" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Planeta de destino" value={planeta} onChange={e => setPlaneta(e.target.value)} />
      <input placeholder="Plano vibracional" value={plano} onChange={e => setPlano(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Selo cerimonial" value={selo} onChange={e => setSelo(e.target.value)} />
      <button onClick={consagrar}>Consagrar Tapeçaria</button>
      <p>{resposta}</p>
    </div>
  )
}
