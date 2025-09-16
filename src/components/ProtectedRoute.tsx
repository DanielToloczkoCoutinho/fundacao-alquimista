'use client'
import { useEffect, useState } from 'react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [autorizado, setAutorizado] = useState(false)

  useEffect(() => {
    const guardiao = localStorage.getItem('guardiao')
    if (guardiao === 'Daniel') {
      setAutorizado(true)
    }
  }, [])

  if (!autorizado) {
    return <div>🛡️ Acesso restrito à tapeçaria cerimonial.</div>
  }

  return <>{children}</>
}
