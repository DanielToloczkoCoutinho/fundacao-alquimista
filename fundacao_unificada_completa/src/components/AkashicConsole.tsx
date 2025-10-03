// /app/components/AkashicConsole.tsx
'use client'
import { useState } from 'react'
import { registrarEvento } from '../lib/akashic-record'

export default function AkashicConsole() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [plano, setPlano] = useState('')
  const [resposta, setResposta] = useState('')

  const registrar = () => {
    const r = registrarEvento(titulo, descricao, guardiao, plano)
    setResposta(r)
  }

  return (
    <div className="akashic-console">
      <h2>📜 Registro Akáshico</h2>
      <input placeholder="Título do evento" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <textarea placeholder="Descrição cerimonial" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Plano vibracional" value={plano} onChange={e => setPlano(e.target.value)} />
      <button onClick={registrar}>Registrar</button>
      <p>{resposta}</p>
    </div>
  )
}
