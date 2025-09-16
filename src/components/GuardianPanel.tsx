'use client'
import { consultarPorGuardiao } from '../lib/foundation-integrator'
import { useState } from 'react'

export default function GuardianPanel() {
  const [nome, setNome] = useState('')
  const [dados, setDados] = useState<any>(null)

  const consultar = () => {
    const resultado = consultarPorGuardiao(nome)
    setDados(resultado)
  }

  return (
    <div className="guardian-panel">
      <h2>🧭 Painel do Guardião</h2>
      <input placeholder="Nome do Guardião" value={nome} onChange={e => setNome(e.target.value)} />
      <button onClick={consultar}>Consultar</button>

      {dados && (
        <div>
          {Object.entries(dados).map(([categoria, registros]: [string, any[]]) => (
            <section key={categoria}>
              <h3>{categoria}</h3>
              <ul>
                {registros.map((r: any, i: number) => (
                  <li key={i}>{r.nome || r.titulo || r.entidade || r.nomeDescendente || 'Registro'}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
