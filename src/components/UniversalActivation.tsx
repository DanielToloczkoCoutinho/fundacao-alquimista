// /app/components/UniversalActivation.tsx
'use client'
import { useState } from 'react'
import { ritualDePublicacao } from '../lib/publication-ritual'

export default function UniversalActivation() {
  const [status, setStatus] = useState('Aguardando ativação...')

  const ativar = async () => {
    setStatus('🔮 Publicando tapeçaria...')
    const resultado = await ritualDePublicacao()
    setStatus(resultado)
  }

  return (
    <div className="universal-activation">
      <h2>🌐 Ativação Universal</h2>
      <button onClick={ativar}>Publicar Tapeçaria</button>
      <p>{status}</p>
    </div>
  )
}
