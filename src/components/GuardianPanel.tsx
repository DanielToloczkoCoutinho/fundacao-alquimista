'use client'
import { consultarPorGuardiao } from '../lib/foundation-integrator'
import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ScrollArea } from './ui/scroll-area'

export default function GuardianPanel() {
  const [nome, setNome] = useState('')
  const [dados, setDados] = useState<any>(null)

  const consultar = () => {
    if(!nome) return;
    const resultado = consultarPorGuardiao(nome)
    setDados(resultado)
  }

  return (
    <div className="guardian-panel space-y-4">
      <h2 className="text-lg font-semibold text-primary-foreground">🧭 Painel do Guardião</h2>
      <div className="flex gap-2">
        <Input placeholder="Nome do Guardião" value={nome} onChange={e => setNome(e.target.value)} />
        <Button onClick={consultar}>Consultar</Button>
      </div>

      {dados && (
        <ScrollArea className="h-48 pr-4">
          <div className="space-y-3">
            {Object.entries(dados).map(([categoria, registros]: [string, any[]]) => {
              if (registros.length === 0) return null;
              return (
              <div key={categoria}>
                <h3 className="font-semibold text-accent text-sm capitalize">{categoria}</h3>
                <ul className="list-disc list-inside text-xs text-muted-foreground">
                  {registros.map((r: any, i: number) => (
                    <li key={i}>{r.nome || r.titulo || r.entidade || r.nomeDescendente || 'Registro'}</li>
                  ))}
                </ul>
              </div>
            )})}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
