
'use client'
import { useState } from 'react'
import { plantarTapeçariaBotânica } from '../lib/botanical-seed'

export default function BotanicalConsole() {
  const [nome, setNome] = useState('')
  const [local, setLocal] = useState('')
  const [especie, setEspecie] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [intencao, setIntencao] = useState('')
  const [resposta, setResposta] = useState('')

  const consagrar = () => {
    const r = plantarTapeçariaBotânica(nome, local, especie, guardiao, intencao)
    setResposta(r)
  }

  return (
    <div className="botanical-console">
      <h2>🌿 Tapeçaria Botânica</h2>
      <input placeholder="Nome da tapeçaria" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Local físico ou plano vibracional" value={local} onChange={e => setLocal(e.target.value)} />
      <input placeholder="Espécie vegetal vinculada" value={especie} onChange={e => setEspecie(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Intenção cerimonial" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={consagrar}>Plantar Tapeçaria</button>
      <p>{resposta}</p>
    </div>
  )
}
