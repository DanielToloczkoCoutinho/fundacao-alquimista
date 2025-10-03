
'use client'
import { useState } from 'react'

export default function GuardianConsole() {
  const [command, setCommand] = useState('')
  const [log, setLog] = useState<string[]>([])

  const execute = () => {
    setLog([...log, `🧭 Comando executado: ${command}`])
    setCommand('')
  }

  return (
    <div className="guardian-console">
      <h2>🧭 Console do Guardião</h2>
      <input value={command} onChange={e => setCommand(e.target.value)} placeholder="Digite comando cerimonial..." />
      <button onClick={execute}>Executar</button>
      <ul>
        {log.map((l, idx) => <li key={idx}>{l}</li>)}
      </ul>
    </div>
  )
}
