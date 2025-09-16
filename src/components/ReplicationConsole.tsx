'use client'
import { useState } from 'react'
import { replicarTapeçaria } from '../lib/replication-engine'

export default function ReplicationConsole() {
  const [origem, setOrigem] = useState('')
  const [nome, setNome] = useState('')
  const [variacoes, setVariacoes] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [intencao, setIntencao] = useState('')
  const [resposta, setResposta] = useState('')

  const replicar = () => {
    const lista = variacoes.split(',').map(v => v.trim())
    const r = replicarTapeçaria(origem, nome, lista, guardiao, intencao)
    setResposta(r)
  }

  return (
    <div className="replication-console">
      <h2>🌀 Auto-Replicação Cerimonial</h2>
      <input placeholder="Tapeçaria de origem" value={origem} onChange={e => setOrigem(e.target.value)} />
      <input placeholder="Nome da descendente" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Variações (separadas por vírgula)" value={variacoes} onChange={e => setVariacoes(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Intenção cerimonial" value={intencao} onChange={e => setIntencao(e.target.value)} />
      <button onClick={replicar}>Gerar Descendente</button>
      <p>{resposta}</p>
    </div>
  )
}
