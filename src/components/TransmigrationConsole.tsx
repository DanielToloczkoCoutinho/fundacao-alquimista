// /app/components/TransmigrationConsole.tsx
'use client';
import { useState } from 'react';
import { registrarTransmigracao } from '../lib/transmigration-registry';

export default function TransmigrationConsole() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [guardiao, setGuardiao] = useState('');
  const [intenção, setIntenção] = useState('');
  const [tipo, setTipo] = useState('');
  const [resposta, setResposta] = useState('');

  const iniciar = () => {
    const r = registrarTransmigracao(origem, destino, guardiao, intenção, tipo);
    setResposta(r);
  };

  return (
    <div className="transmigration-console">
      <h2>🌌 Console de Transmigração</h2>
      <input placeholder="Origem (módulo/plano)" value={origem} onChange={e => setOrigem(e.target.value)} />
      <input placeholder="Destino (módulo/plano)" value={destino} onChange={e => setDestino(e.target.value)} />
      <input placeholder="Guardião responsável" value={guardiao} onChange={e => setGuardiao(e.target.value)} />
      <input placeholder="Intenção cerimonial" value={intenção} onChange={e => setIntenção(e.target.value)} />
      <input placeholder="Tipo (Migração, Fusão...)" value={tipo} onChange={e => setTipo(e.target.value)} />
      <button onClick={iniciar}>Iniciar Transmigração</button>
      <p>{resposta}</p>
    </div>
  );
}
