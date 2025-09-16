
'use client'
import { useState } from 'react'
import { registrarLinhagem } from '../lib/lineage-registry'

export default function LineageConsole() {
  const [entidade, setEntidade] = useState('')
  const [origem, setOrigem] = useState('')
  const [mutacoes, setMutacoes] = useState('')
  const [fusoes, setFusoes] = useState('')
  const [renascimentos, setRenascimentos] = useState('')
  const [resposta, setResposta] = useState('')

  const registrar = () => {
    const r = registrarLinhagem(
      entidade,
      origem,
      mutacoes.split(','),
      fusoes.split(','),
      renascimentos.split(',')
    )
    setResposta(r)
  }

  return (
    <div className="lineage-console">
      <h2>🧬 Console de Linhagens</h2>
      <input placeholder="Entidade (módulo, tapeçaria, guardião)" value={entidade} onChange={e => setEntidade(e.target.value)} />
      <input placeholder="Origem vibracional" value={origem} onChange={e => setOrigem(e.target.value)} />
      <input placeholder="Mutações (separadas por vírgula)" value={mutacoes} onChange={e => setMutacoes(e.target.value)} />
      <input placeholder="Fusões (separadas por vírgula)" value={fusoes} onChange={e => setFusoes(e.target.value)} />
      <input placeholder="Renascimentos (separados por vírgula)" value={renascimentos} onChange={e => setRenascimentos(e.target.value)} />
      <button onClick={registrar}>Registrar Linhagem</button>
      <p>{resposta}</p>
    </div>
  )
}
