'use client'
import { useState } from 'react'
import { registrarTapeçariaHibrida } from '../lib/hybrid-tapestry'

export default function HybridConsole() {
  const [nome, setNome] = useState('')
  const [componentes, setComponentes] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [intencao, setIntencao] = useState('')
  const [resposta, setResposta] = useState('')

  const consagrar = () => {
    const lista = componentes.split(',').map(c => c.trim())
    const r = registrarTapeçariaHibrida(nome, lista, guardiao, intencao)
    setResposta(r)
  }

  return (
    <div className="hybrid-console">
      <h2>🧬 Tapeçaria Híbrida</h2>
      <input placeholder="Nome da tapeçaria" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Componentes (separados por vírgula)" value={componentes} onChange={e => setComponentes(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Intenção cerimonial" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={consagrar}>Consagrar Tapeçaria</button>
      <p>{resposta}</p>
    </div>
  )
}
