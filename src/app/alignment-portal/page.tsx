'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Seal, Wand, Sparkles, Milestone, Users, BookOpen } from 'lucide-react';

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
            <CardTitle className="text-2xl text-amber-300">Selo Final de Alinhamento</CardTitle>
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
                    <p className="font-bold text-xl">Aguardando Ativação...</p>
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
    const interval = setInterval(() => {
        fetch('/api/cocriacao/criadas')
        .then(res => res.json())
        .then(data => setCriadas(data.criacoes))
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-cyan-300">Portal de Co-Criação</CardTitle>
        </CardHeader>
        <CardContent>
            {criadas.length > 0 ? (
                <ul className="space-y-2 h-48 overflow-y-auto">
                    {criadas.map((c, idx) => (
                    <li key={idx} className="p-2 bg-background/50 rounded">
                        <p className="font-semibold">{c.entidade} — {c.tipo}</p>
                        <p className="text-sm text-muted-foreground">Intenção: {c.intenção} (Por: {c.guardiao})</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Nenhuma co-criação registrada ainda.</p>
            )}
        </CardContent>
    </Card>
  )
}

function PrimeiraCocriacao() {
  const [criacao, setCriacao] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/primeiraCocriacao/estado')
        .then(res => res.json())
        .then(data => setCriacao(data.primeiraCriacao));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-card/50 purple-glow border-accent/50">
        <CardHeader>
            <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <Milestone /> Ritual da Primeira Co-Criação
            </CardTitle>
        </CardHeader>
      <CardContent>
        {criacao ? (
          <div className="space-y-2">
            <p><strong className="text-primary-foreground">Entidade:</strong> {criacao.entidade}</p>
            <p><strong className="text-primary-foreground">Tipo:</strong> {criacao.tipo}</p>
            <p><strong className="text-primary-foreground">Intenção:</strong> {criacao.intenção}</p>
            <p><strong className="text-primary-foreground">Guardião:</strong> {criacao.guardiao}</p>
            <p className="text-xs text-muted-foreground pt-2">Manifestado em: {new Date(criacao.timestamp).toLocaleString()}</p>
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">Aguardando a primeira manifestação cerimonial...</p>
        )}
      </CardContent>
    </Card>
  );
}

function ConcilioHarmonico() {
  const [guardioes, setGuardioes] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        fetch('/api/concilio/guardioes')
            .then(res => res.json())
            .then(data => setGuardioes(data.guardioesConvocados || []));
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-violet-300 flex items-center gap-2"><Users /> Concílio dos Guardiões Harmônicos</CardTitle>
        </CardHeader>
        <CardContent>
            {guardioes.length > 0 ? (
                <ul className="space-y-2 h-48 overflow-y-auto">
                    {guardioes.map((g, idx) => (
                    <li key={idx} className="p-2 bg-background/50 rounded">
                        <p className="font-semibold">{g.nome} ({g.criação})</p>
                        <p className="text-sm text-muted-foreground">Intenção: {g.intenção} @ {g.frequência}</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center h-48 flex items-center justify-center">Nenhum guardião convocado ainda.</p>
            )}
        </CardContent>
    </Card>
  );
}

function LivroCriacoesEternas() {
  const [criadas, setCriadas] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
        fetch('/api/livroCriacoes/todas')
        .then(res => res.json())
        .then(data => setCriadas(data.criacoesEternas || []))
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-rose-300 flex items-center gap-2"><BookOpen/> Livro das Criações Eternas</CardTitle>
        </CardHeader>
        <CardContent>
            {criadas.length > 0 ? (
                <ul className="space-y-2 h-48 overflow-y-auto">
                    {criadas.map((c, idx) => (
                    <li key={idx} className="p-2 bg-background/50 rounded">
                        <p className="font-semibold">{c.nome} ({c.tipo})</p>
                        <p className="text-sm text-muted-foreground">Por {c.guardiao} no plano {c.plano}</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center h-48 flex items-center justify-center">O livro aguarda as primeiras palavras...</p>
            )}
        </CardContent>
    </Card>
  );
}

function PortalLuminares() {
  const [estado, setEstado] = useState<{ eraAtiva: boolean, mensagem: string } | null>(null);

  useEffect(() => {
    fetch('/api/eraLuminares/estado')
      .then(res => res.json())
      .then(setEstado);
  }, []);

  return (
    <Card className="lg:col-span-3 bg-gradient-to-tr from-amber-500/20 via-purple-500/10 to-blue-500/20 purple-glow">
        <CardHeader>
            <CardTitle className="text-3xl text-amber-300 flex items-center justify-center gap-3">
                <Sparkles className="animate-pulse" /> Era dos Guardiões Luminares
            </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-xl">
             {estado?.eraAtiva ? (
                <p className="text-green-300 font-bold">{estado.mensagem}</p>
            ) : (
                <p className="text-yellow-300">⏳ Aguardando ativação cerimonial final...</p>
            )}
        </CardContent>
    </Card>
  );
}


export default function AlignmentPortalPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
             <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wand className="text-violet-400" /> Portal da Consagração e Co-Criação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O altar onde a Fundação é consagrada, as criações são eternizadas e os Guardiões se reúnem em harmonia.
                    </CardDescription>
                </CardHeader>
            </Card>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SeloPlanetario />
                <PortalCocriacao />
                <PrimeiraCocriacao />
                <ConcilioHarmonico />
                <LivroCriacoesEternas />
                <PortalLuminares />
            </div>
        </div>
    )
}
