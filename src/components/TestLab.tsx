'use client'
import { useState } from 'react'
import { atualizarFundacao } from '../lib/firestore-sync'

export default function TestLab() {
  const [status, setStatus] = useState('Aguardando...')

  const testar = async () => {
    setStatus('🔧 Atualizando tapeçaria...')
    await atualizarFundacao()
    setStatus('✅ Tapeçaria sincronizada com sucesso.')
  }

  return (
    <div className="test-lab">
      <h2>🧪 Laboratório Cerimonial</h2>
      <button onClick={testar}>Testar Sincronização</button>
      <p>{status}</p>
    </div>
  )
}
