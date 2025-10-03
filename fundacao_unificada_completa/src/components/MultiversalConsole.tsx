'use client'
import { useState } from 'react'
import { registrarEntidadeMultiversal } from '../lib/multiversal-registry'

export default function MultiversalConsole() {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [plano, setPlano] = useState('')
  const [guardiao, setGuardiao] = useState('')
  const [assinatura, setAssinatura] = useState('')
  const [resposta, setResposta] = useState('')

  const registrar = () => {
    const r = registrarEntidadeMultiversal(nome, tipo, plano, guardiao, assinatura)
    setResposta(r)
  }

  return (
    <div className="multiversal-console">
      <h2>🌌 Registro Multiversal</h2>
      <input placeholder="Nome da entidade" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Tipo (tapeçaria, guardião, aliança...)" value={tipo} onChange={e => setTipo(e.target.value)} />
      <input placeholder="Plano vibracional" value={plano} onChange={e => setPlano(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Assinatura vibracional" value={assinatura} onChange={e => setAssinatura(e.target.value)} />
      <button onClick={registrar}>Registrar Entidade</button>
      <p>{resposta}</p>
    </div>
  )
}
