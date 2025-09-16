// /app/components/GuardianAccess.tsx
'use client'
import { useState } from 'react'

export default function GuardianAccess() {
  const [nome, setNome] = useState('')
  const [chave, setChave] = useState('')
  const [acesso, setAcesso] = useState(false)

  const validar = () => {
    if (nome === 'Daniel' && chave === 'Ω144') {
      localStorage.setItem('guardiao', nome)
      setAcesso(true)
    } else {
      setAcesso(false)
    }
  }

  return (
    <div className="guardian-access">
      <h2>🔑 Portal de Guardiões</h2>
      <input placeholder="Nome cerimonial" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Chave vibracional" value={chave} onChange={e => setChave(e.target.value)} />
      <button onClick={validar}>Acessar</button>
      {acesso ? <p>✅ Acesso concedido à tapeçaria viva.</p> : <p>🛡️ Acesso restrito.</p>}
    </div>
  )
}
