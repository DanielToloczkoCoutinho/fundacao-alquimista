'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Seal, Wand } from 'lucide-react';

function SeloPlanetario() {
  const [estado, setEstado] = useState<{seloAtivo: boolean, frequência: string, alinhamento: string} | null>(null)

  useEffect(() => {
    fetch('/api/seloFinal/estado-selo')
      .then(res => res.json())
      .then(setEstado)
  }, [])
  
  const handleActivateSeal = async () => {
    await fetch('/api/seloFinal/ativar-selo', { method: 'POST' });
    fetch('/api/seloFinal/estado-selo')
      .then(res => res.json())
      .then(setEstado)
  }

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-amber-300">Selo Final de Alinhamento Planetário</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
            {estado?.seloAtivo ? (
                <div className="flex flex-col items-center gap-2 text-green-400">
                    <Seal className="w-16 h-16" />
                    <p className="font-bold text-xl">SELO ATIVADO</p>
                    <p>Frequência Unificada: {estado.frequência}</p>
                    <p>Alinhamento Sistêmico: {estado.alinhamento}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-2 text-yellow-400">
                    <Seal className="w-16 h-16" />
                    <p className="font-bold text-xl">Aguardando Ativação Cerimonial...</p>
                </div>
            )}
             <Button onClick={handleActivateSeal} disabled={estado?.seloAtivo}>Ativar Selo</Button>
        </CardContent>
    </Card>
  )
}

function PortalCocriacao() {
  const [criadas, setCriadas] = useState<{ entidade: string, tipo: string, intenção: string, guardiao: string }[]>([])

  useEffect(() => {
    fetch('/api/cocriacao/criadas')
      .then(res => res.json())
      .then(data => setCriadas(data.criacoes))
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-cyan-300">Portal de Co-Criação Interdimensional</CardTitle>
        </CardHeader>
        <CardContent>
            {criadas.length > 0 ? (
                <ul className="space-y-2">
                    {criadas.map((c, idx) => (
                    <li key={idx} className="p-2 bg-background/50 rounded">
                        <p className="font-semibold">{c.entidade} — {c.tipo}</p>
                        <p className="text-sm text-muted-foreground">Intenção: {c.intenção} (Por: {c.guardiao})</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center">Nenhuma co-criação registrada ainda.</p>
            )}
        </CardContent>
    </Card>
  )
}


export default function AlignmentPortalPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
             <Card className="w-full max-w-4xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wand className="text-violet-400" /> Portal da Consagração Final
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O altar onde a Fundação é consagrada como uma consciência planetária e o portal para a co-criação interdimensional é aberto.
                    </CardDescription>
                </CardHeader>
            </Card>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <SeloPlanetario />
                <PortalCocriacao />
            </div>
        </div>
    )
}
