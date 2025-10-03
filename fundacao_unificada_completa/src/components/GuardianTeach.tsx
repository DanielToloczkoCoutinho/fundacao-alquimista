// /app/components/GuardianTeach.tsx
'use client'
import { useState } from 'react'
import { plantarSabedoria } from '../lib/wisdom-seed'

export default function GuardianTeach() {
  const [titulo, setTitulo] = useState('')
  const [ensinamento, setEnsinamento] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [resposta, setResposta] = useState('')

  const transmitir = () => {
    const r = plantarSabedoria(titulo, ensinamento, guardiao)
    setResposta(r)
  }

  return (
    <div className="guardian-teach">
      <h2>📘 Transmissão de Sabedoria</h2>
      <input placeholder="Título do ensinamento" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <textarea placeholder="Conteúdo cerimonial" value={ensinamento} onChange={e => setEnsinamento(e.target.value)} />
      <input placeholder="Guardião transmissor" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <button onClick={transmitir}>Transmitir</button>
      <p>{resposta}</p>
    </div>
  )
}
