'use client'
import { useEffect, useState } from 'react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [autorizado, setAutorizado] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const guardiao = localStorage.getItem('guardiao')
        if (guardiao === 'Daniel') {
            setAutorizado(true)
        }
    }
  }, [])

  if (!autorizado) {
    return <div className="p-8 text-center text-red-400">🛡️ Acesso restrito à tapeçaria cerimonial. Autentique-se no Portal de Guardiões.</div>
  }

  return <>{children}</>
}
