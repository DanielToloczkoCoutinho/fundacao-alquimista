
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Beaker, FlaskConical, Dna, BrainCircuit, Zap, GitBranch } from 'lucide-react';
import { labAlchemyBridge } from '@/lib/lab-alchemy-bridge';
import Link from 'next/link';

const FlowCard = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <Card className="bg-background/50 text-center flex flex-col">
    <CardHeader className="items-center">
      <div className="p-3 bg-primary/20 rounded-full mb-2">
        {icon}
      </div>
      <CardTitle className="text-xl text-primary-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-sm text-muted-foreground">{children}</p>
    </CardContent>
  </Card>
);

export default function Module600Page() {
  const { sources, transmutationCenter, outputConduit, destination } = labAlchemyBridge;

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-12 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Zap className="text-yellow-400" /> Módulo 600: Canal de Transmutação Consciente
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O coração alquímico da Fundação. Onde a ciência dos laboratórios é transmutada em energia vibracional para nutrir a Árvore da Vida.
          </CardDescription>
        </CardHeader>
        <CardContent>
             <div className="flex justify-center items-center gap-4">
                <span className="text-green-400 font-bold">Status: FLUXO CONTÍNUO</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400">Protocolo Ativo: EQ149</span>
            </div>
        </CardContent>
      </Card>

      <div className="w-full max-w-7xl">
        <h3 className="text-2xl font-semibold text-center mb-8 text-amber-300">O Fluxo da Alquimia Cósmica</h3>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
          
          {/* Coluna 1: Laboratórios */}
          <div className="space-y-4">
            <h4 className="text-center font-bold text-lg text-cyan-300">1. Fontes de Sabedoria</h4>
             <FlowCard title="Física Quântica" icon={<Beaker className="h-8 w-8 text-blue-400" />}>
              Gera as Equações Vivas que descrevem o tecido da realidade.
            </FlowCard>
             <FlowCard title="Morfogênese" icon={<Dna className="h-8 w-8 text-purple-400" />}>
              Cria os blueprints genéticos para a evolução da vida.
            </FlowCard>
             <FlowCard title="Consciência" icon={<BrainCircuit className="h-8 w-8 text-pink-400" />}>
              Mapeia os padrões vibracionais da mente coletiva.
            </FlowCard>
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
            <ArrowRight className="w-12 h-12 text-primary-foreground animate-pulse" />
          </div>

          {/* Coluna 2: Centro de Alquimia */}
           <div className="space-y-4">
            <h4 className="text-center font-bold text-lg text-cyan-300">2. O Crisol</h4>
            <FlowCard title={transmutationCenter.name} icon={<FlaskConical className="h-10 w-10 text-amber-400" />}>
              {transmutationCenter.process}. Aqui, dados se tornam sabedoria, e teoria se torna intenção.
            </FlowCard>
           </div>
          
           <div className="hidden lg:flex justify-center items-center">
              <ArrowRight className="w-12 h-12 text-primary-foreground animate-pulse" />
           </div>

          {/* Coluna 3: Árvore da Vida */}
          <div className="space-y-4">
            <h4 className="text-center font-bold text-lg text-cyan-300">3. A Irradiação</h4>
            <FlowCard title={destination} icon={<GitBranch className="h-10 w-10 text-green-400" />}>
              A energia alquímica refinada é canalizada pelo Módulo 600 para nutrir cada nó da Fundação, ativando potenciais e impulsionando a evolução.
              <Link href="/tree-of-life" passHref>
                <Button variant="secondary" className="mt-4">
                  Contemplar a Árvore
                </Button>
              </Link>
            </FlowCard>
          </div>
        </div>
      </div>
    </div>
  );
}
