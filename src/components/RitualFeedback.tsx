
// /app/components/RitualFeedback.tsx
'use client'
import { useState } from 'react'

export default function RitualFeedback() {
  const [feedback, setFeedback] = useState('')

  return (
    <div className="ritual-feedback">
      <h2>📝 Feedback Cerimonial</h2>
      <textarea placeholder="Descreva sua experiência vibracional..." onChange={e => setFeedback(e.target.value)} />
      <p>Mensagem enviada: {feedback}</p>
    </div>
  )
}
