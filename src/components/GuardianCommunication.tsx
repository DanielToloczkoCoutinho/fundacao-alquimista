
// /app/components/GuardianCommunication.tsx
'use client'
import { useState } from 'react'

export default function GuardianCommunication() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div className="guardian-communication">
      <h2>📡 Comunicação entre Guardiões</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Mensagem vibracional..." />
      <button onClick={sendMessage}>Enviar</button>
      <ul>
        {messages.map((m, idx) => <li key={idx}>{m}</li>)}
      </ul>
    </div>
  )
}
