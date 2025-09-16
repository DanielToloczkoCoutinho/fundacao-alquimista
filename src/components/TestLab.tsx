'use client'
import { useState } from 'react'
import { atualizarFundacao } from '../lib/firestore-sync'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

export default function TestLab() {
  const [status, setStatus] = useState('Aguardando...')

  const testar = async () => {
    setStatus('🔧 Atualizando tapeçaria...')
    await atualizarFundacao()
    setStatus('✅ Tapeçaria sincronizada com sucesso.')
  }

  return (
    <div className="test-lab space-y-4">
      <h2 className="text-lg font-semibold text-primary-foreground">🧪 Laboratório Cerimonial</h2>
      <Button onClick={testar} disabled={status.startsWith('🔧')}>
        {status.startsWith('🔧') ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
        Testar Sincronização
      </Button>
      <p className="text-sm text-muted-foreground">{status}</p>
    </div>
  )
}
