
// /app/components/TapeçariaDiagnostics.tsx
'use client'
import { useEffect, useState } from 'react'
import { getTapeçariaStatus } from '../lib/tapeçaria-status'

export default function TapeçariaDiagnostics() {
  const [status, setStatus] = useState(getTapeçariaStatus())

  useEffect(() => {
    const interval = setInterval(() => {
        setStatus(getTapeçariaStatus());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tapeçaria-diagnostics">
      <h2>🩺 Diagnóstico da Tapeçaria</h2>
      <ul>
        {Object.entries(status).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  )
}
