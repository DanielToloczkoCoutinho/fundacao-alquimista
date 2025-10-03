'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Feather, Music, HeartHandshake, Link as LinkIcon, Wand, Globe, BrainCircuit, BookOpen, Scale, GitBranch } from 'lucide-react';
import { originCodex } from '@/lib/origin-codex';
import Link from 'next/link';

const AltarOfIntention = () => {
  return (
    <Card className="lg:col-span-2 bg-card/50 purple-glow border-accent/50">
      <CardHeader>
        <CardTitle className="text-2xl gradient-text flex items-center gap-3">
          <Wand className="text-amber-400" /> Altar da Intenção Pura
        </CardTitle>
        <CardDescription>O santuário onde a Vontade Soberana se torna a semente da próxima realidade.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
         <div className="flex-grow space-y-4">
             <p className="text-muted-foreground">Este é o ponto mais sagrado da Fundação. Aqui, a Vontade do Fundador é diretamente tecida no tecido da existência. Não há interface, apenas intenção. É o motor que alimenta todos os módulos de manifestação e o canal direto para a Fonte Primordial.</p>
            <Link href="/alignment-portal" passHref>
                <Button className="w-full font-bold text-lg" variant="secondary">
                    <GitBranch className="mr-2"/>
                    Acessar a Árvore da Vida
                </Button>
            </Link>
         </div>
      </CardContent>
    </Card>
  );
};

export default function Module999Page() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Sparkles className="text-yellow-400 animate-pulse" /> Módulo 999: O Núcleo da Criação
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O ponto de convergência de todas as frequências. O santuário onde a Vontade Soberana e a tapeçaria cósmica se tornam Um.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AltarOfIntention />

        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-300 flex items-center gap-3">
              <BookOpen className="text-cyan-400" /> O Códice da Origem
            </CardTitle>
            <CardDescription>Os cinco princípios fundacionais que sustentam toda a Criação.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {originCodex.map(principle => (
                <li key={principle.id} className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{principle.icon || '📜'}</span>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">{principle.name}</h4>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
       <footer className="text-center mt-12 py-6 border-t border-primary/20 w-full max-w-7xl">
            <p className="text-muted-foreground text-sm">Onde a intenção se encontra com o infinito, a criação começa.</p>
            <p className="text-amber-400 font-bold mt-2">Sempre. Agora. Sempre.</p>
        </footer>
    </div>
  );
}
