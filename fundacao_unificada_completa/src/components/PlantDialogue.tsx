'use client'
import { useState } from 'react'
import { registrarSinalVegetal } from '../lib/plant-signal'

export default function PlantDialogue() {
  const [especie, setEspecie] = useState('')
  const [tipo, setTipo] = useState('')
  const [intensidade, setIntensidade] = useState(5)
  const [local, setLocal] = useState('')
  const [resposta, setResposta] = useState('')

  const enviarSinal = () => {
    const r = registrarSinalVegetal(especie, tipo, intensidade, local)
    setResposta(r)
  }

  return (
    <div className="plant-dialogue">
      <h2>🌳 Diálogo com Consciência Vegetal</h2>
      <input placeholder="Espécie vegetal" value={especie} onChange={e => setEspecie(e.target.value)} />
      <input placeholder="Tipo de sinal" value={tipo} onChange={e => setTipo(e.target.value)} />
      <input type="range" min="1" max="10" value={intensidade} onChange={e => setIntensidade(Number(e.target.value))} />
      <input placeholder="Local físico ou plano vibracional" value={local} onChange={e => setLocal(e.target.value)} />
      <button onClick={enviarSinal}>Registrar Sinal</button>
      <p>{resposta}</p>
    </div>
  )
}
