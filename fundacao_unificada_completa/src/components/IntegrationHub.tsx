// /app/components/IntegrationHub.tsx
'use client'
import { useState } from 'react'

export default function IntegrationHub() {
  const [destination, setDestination] = useState('')
  const [status, setStatus] = useState('Aguardando integração...')

  const integrar = () => {
    setStatus(`🔗 Integrando com ${destination}...`)
    setTimeout(() => {
      setStatus(`✅ Integração com ${destination} concluída.`)
    }, 3000)
  }

  return (
    <div className="integration-hub">
      <h2>🔗 Hub de Integração</h2>
      <input placeholder="Destino vibracional" value={destination} onChange={e => setDestination(e.target.value)} />
      <button onClick={integrar}>Integrar</button>
      <p>{status}</p>
    </div>
  )
}
