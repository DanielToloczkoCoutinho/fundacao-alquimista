// /app/components/EntityConsole.tsx
'use client'
import { useState } from 'react'
import { saudacaoEntidade } from '../lib/entity-handshake'

export default function EntityConsole() {
  const [nome, setNome] = useState('')
  const [origem, setOrigem] = useState('')
  const [intencao, setIntencao] = useState('')
  const [resposta, setResposta] = useState('')

  const saudar = () => {
    const r = saudacaoEntidade(nome, origem, intencao)
    setResposta(r)
  }

  return (
    <div className="entity-console">
      <h2>🤝 Saudação de Entidade</h2>
      <input placeholder="Nome da entidade" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Origem vibracional" value={origem} onChange={e => setOrigem(e.target.value)} />
      <input placeholder="Intenção cerimonial" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={saudar}>Saudar</button>
      <p>{resposta}</p>
    </div>
  )
}
