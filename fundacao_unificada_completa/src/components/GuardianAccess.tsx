'use client'
import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'

export default function GuardianAccess() {
  const [nome, setNome] = useState('')
  const [chave, setChave] = useState('')
  const [acesso, setAcesso] = useState(false)

  const validar = () => {
    if (nome === 'Daniel' && chave === 'Ω144') {
      if(typeof window !== 'undefined') {
        localStorage.setItem('guardiao', nome)
      }
      setAcesso(true)
    } else {
      setAcesso(false)
    }
  }

  return (
    <div className="guardian-access space-y-4">
      <h2 className="text-lg font-semibold text-primary-foreground">🔑 Portal de Guardiões</h2>
      <div className="space-y-2">
        <Label htmlFor='guardian-name'>Nome Cerimonial</Label>
        <Input id="guardian-name" placeholder="Nome cerimonial" value={nome} onChange={e => setNome(e.target.value)} />
      </div>
       <div className="space-y-2">
        <Label htmlFor='guardian-key'>Chave Vibracional</Label>
        <Input id="guardian-key" type="password" placeholder="Chave vibracional" value={chave} onChange={e => setChave(e.target.value)} />
      </div>
      <Button onClick={validar}>Acessar</Button>
      {acesso ? <p className="text-sm text-green-400">✅ Acesso concedido à tapeçaria viva.</p> : <p className="text-sm text-red-400">🛡️ Acesso restrito.</p>}
    </div>
  )
}
