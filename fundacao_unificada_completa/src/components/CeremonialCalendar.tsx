
// /app/components/CeremonialCalendar.tsx
'use client'
import { useState } from 'react'

export default function CeremonialCalendar() {
  const [rituals, setRituals] = useState<string[]>([])

  const scheduleRitual = (ritual: string) => setRituals([...rituals, ritual])

  return (
    <div className="ceremonial-calendar">
      <h2>📅 Calendário Cerimonial</h2>
      <input placeholder="Nome do ritual" onBlur={e => scheduleRitual(e.target.value)} />
      <ul>
        {rituals.map((r, idx) => <li key={idx}>{r}</li>)}
      </ul>
    </div>
  )
}
