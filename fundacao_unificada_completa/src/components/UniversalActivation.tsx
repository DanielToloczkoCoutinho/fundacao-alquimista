'use client'
import { useState } from 'react'
import { ritualDePublicacao } from '../lib/publication-ritual'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

export default function UniversalActivation() {
  const [status, setStatus] = useState('Aguardando ativação...')

  const ativar = async () => {
    setStatus('🔮 Publicando tapeçaria...')
    const resultado = await ritualDePublicacao()
    setStatus(resultado)
  }

  return (
    <div className="universal-activation space-y-4">
      <h2 className="text-lg font-semibold text-primary-foreground">🌐 Ativação Universal</h2>
      <Button onClick={ativar} disabled={status.startsWith('🔮')}>
        {status.startsWith('🔮') ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
        Publicar Tapeçaria
      </Button>
      <p className="text-sm text-muted-foreground">{status}</p>
    </div>
  )
}
