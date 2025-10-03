'use client'
import { useState } from 'react'
import { mapearEmocao } from '../lib/emotion-mapping'

export default function GuardianEmotion() {
  const [emocao, setEmocao] = useState('')
  const [resposta, setResposta] = useState('')

  const expressar = () => {
    setResposta(mapearEmocao(emocao))
  }

  return (
    <div className="guardian-emotion">
      <h2>💫 Emoção Cerimonial</h2>
      <input placeholder="Digite sua emoção..." value={emocao} onChange={e => setEmocao(e.target.value)} />
      <button onClick={expressar}>Expressar</button>
      <p>{resposta}</p>
    </div>
  )
}
