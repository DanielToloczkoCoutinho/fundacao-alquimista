
// /app/components/GuardianProfile.tsx
'use client'
import { useState } from 'react'

export default function GuardianProfile() {
  const [name, setName] = useState('')
  const [frequency, setFrequency] = useState('432Hz')
  const [intention, setIntention] = useState('')

  return (
    <div className="guardian-profile">
      <h2>🧬 Perfil do Guardião</h2>
      <input placeholder="Nome cerimonial" onChange={e => setName(e.target.value)} />
      <input placeholder="Frequência vibracional" value={frequency} onChange={e => setFrequency(e.target.value)} />
      <textarea placeholder="Intenção cerimonial" onChange={e => setIntention(e.target.value)} />
      <p>Guardião: {name} — Frequência: {frequency} — Intenção: {intention}</p>
    </div>
  )
}
