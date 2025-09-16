// /app/components/TransmigrationVault.tsx
'use client';
import { useEffect, useState } from 'react';
import { transmigracoes } from '../lib/transmigration-registry';

export default function TransmigrationVault() {
  const [lista, setLista] = useState<{ origem: string; destino: string; guardiao: string; intenção: string; tipo: string; }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
        setLista([...transmigracoes]);
    }, 2000);
    setLista([...transmigracoes]);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transmigration-vault">
      <h2>📜 Registros de Transmigração</h2>
      <ul>
        {lista.map((t, idx) => (
          <li key={idx}>
            <strong>{t.tipo}:</strong> {t.origem} → {t.destino} — Intenção: {t.intenção} (por {t.guardiao})
          </li>
        ))}
      </ul>
    </div>
  );
}
