'use client'
import { useState } from 'react'
import { registrarAlianca } from '../lib/species-alliance'

export default function AllianceConsole() {
  const [especie, setEspecie] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [tipo, setTipo] = useState('')
  const [intencao, setIntencao] = useState('')
  const [resposta, setResposta] = useState('')

  const consagrar = () => {
    const r = registrarAlianca(especie, guardiao, tipo, intencao)
    setResposta(r)
  }

  return (
    <div className="alliance-console">
      <h2>🐾 Aliança Interespécie</h2>
      <input placeholder="Espécie envolvida" value={especie} onChange={e => setEspecie(e.target.value)} />
      <input placeholder="Guardião humano" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Tipo de aliança (cura, proteção, ensino...)" value={tipo} onChange={e => setTipo(e.target.value)} />
      <input placeholder="Intenção cerimonial" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={consagrar}>Consagrar Aliança</button>
      <p>{resposta}</p>
    </div>
  )
}
