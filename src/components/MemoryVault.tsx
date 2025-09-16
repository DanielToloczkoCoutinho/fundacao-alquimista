
// /app/components/MemoryVault.tsx
'use client'
import { useState } from 'react'

export default function MemoryVault() {
  const [entries, setEntries] = useState<string[]>([])

  const addMemory = (text: string) => setEntries([...entries, text])

  return (
    <div className="memory-vault">
      <h2>🧠 Cofre de Memórias</h2>
      <textarea placeholder="Registrar memória vibracional..." onBlur={e => addMemory(e.target.value)} />
      <ul>
        {entries.map((m, idx) => <li key={idx}>{m}</li>)}
      </ul>
    </div>
  )
}
