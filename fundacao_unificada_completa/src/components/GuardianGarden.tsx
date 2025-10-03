'use client'
import { useState } from 'react'
import { plantarSemente } from '../lib/seed-manifestation'

export default function GuardianGarden() {
  const [nome, setNome] = useState('')
  const [intencao, setIntencao] = useState('')

  const plantar = () => {
    plantarSemente(nome, intencao)
    setNome('')
    setIntencao('')
    // In a real app, you would likely trigger a re-fetch or use a state management library
    // to update the GardenState component.
  }

  return (
    <div className="guardian-garden">
      <h2>🌸 Jardim do Guardião</h2>
      <input placeholder="Nome da semente" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Intenção vibracional" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={plantar}>Plantar</button>
    </div>
  )
}
