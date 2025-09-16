
'use client'
import { useState } from 'react'
import { registrarMutacao } from '../lib/mutation-registry'

export default function MutationConsole() {
  const [entidade, setEntidade] = useState('')
  const [tipo, setTipo] = useState('')
  const [detalhes, setDetalhes] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [resposta, setResposta] = useState('')

  const registrar = () => {
    const r = registrarMutacao(entidade, tipo, detalhes, guardiao)
    setResposta(r)
  }

  return (
    <div className="mutation-console">
      <h2>🧪 Console de Mutações Eternas</h2>
      <input placeholder="Entidade mutada" value={entidade} onChange={e => setEntidade(e.target.value)} />
      <input placeholder="Tipo de mutação" value={tipo} onChange={e => setTipo(e.target.value)} />
      <textarea placeholder="Detalhes cerimoniais" value={detalhes} onChange={e => setDetalhes(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <button onClick={registrar}>Registrar Mutação</button>
      <p>{resposta}</p>
    </div>
  )
}
