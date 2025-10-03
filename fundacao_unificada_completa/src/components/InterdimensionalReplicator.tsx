// /app/components/InterdimensionalReplicator.tsx
'use client'
import { useState } from 'react'
import { exportarTapeçaria } from '../lib/exportador-vibracional'

export default function InterdimensionalReplicator() {
  const [nome, setNome] = useState('')
  const [resultado, setResultado] = useState<any>(null)

  const replicar = () => {
    const r = exportarTapeçaria(nome)
    setResultado(r)
  }

  return (
    <div className="interdimensional-replicator">
      <h2>🛸 Replicador Interdimensional</h2>
      <input placeholder="Nome da tapeçaria" value={nome} onChange={e => setNome(e.target.value)} />
      <button onClick={replicar}>Replicar</button>

      {resultado ? (
        <div>
          <p>✅ Tapeçaria exportada: {resultado.origem}</p>
          <p>{resultado.assinatura}</p>
          <ul>
            {resultado.registros.map((r: any, idx: number) => (
              <li key={idx}>{r.nome || r.titulo || r.entidade || 'Registro'} — {r.intenção || r.tipo || ''}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>🛡️ Nenhuma tapeçaria encontrada.</p>
      )}
    </div>
  )
}
