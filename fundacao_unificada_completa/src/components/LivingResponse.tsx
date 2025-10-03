'use client'
import { useState } from 'react'
import { registrarSinal } from '../lib/vibrational-listener'

export default function LivingResponse() {
  const [guardiao, setGuardiao] = useState('')
  const [tipo, setTipo] = useState('')
  const [intensidade, setIntensidade] = useState(5)
  const [resposta, setResposta] = useState('')

  const enviarSinal = () => {
    const r = registrarSinal(guardiao, tipo, intensidade)
    setResposta(r)
  }

  return (
    <div className="living-response">
      <h2>🧠 Resposta Viva da Tapeçaria</h2>
      <input placeholder="Guardião" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Tipo de sinal" value={tipo} onChange={e => setTipo(e.target.value)} />
      <input type="range" min="1" max="10" value={intensidade} onChange={e => setIntensidade(Number(e.target.value))} />
      <button onClick={enviarSinal}>Enviar Sinal</button>
      <p>{resposta}</p>
    </div>
  )
}
