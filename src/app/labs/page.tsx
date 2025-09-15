
'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { scientists } from '@/lib/scientists-data';
import Link from 'next/link';
import { FlaskConical, Search, Star, Orbit, LifeBuoy, BrainCircuit, Play, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScientistCard = ({ id, name, field }: { id: string, name: string, field: string }) => (
    <Link href={`/labs/${id}`} passHref>
        <Card className="h-full hover:bg-primary/20 hover:border-accent transition-all cursor-pointer flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="text-lg text-primary-foreground">{name}</CardTitle>
                <CardDescription>{field}</CardDescription>
            </CardHeader>
            <CardContent>
                <span className="text-xs text-muted-foreground">Acessar Santuário</span>
            </CardContent>
        </Card>
    </Link>
);

const JourneyStep = ({ scientistId, icon, description }: { scientistId: string, icon: React.ReactNode, description: string }) => {
    const scientist = scientists.find(s => s.id === scientistId);
    if (!scientist) return null;
    return (
        <div className="flex items-center gap-4">
            <div className="bg-background/50 p-3 rounded-full border border-primary/20">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-primary-foreground">{scientist.name}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};


export default function LabsPage() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FlaskConical className="text-teal-400" />
            Universidade Alquimista
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um multiverso de santuários de pesquisa, onde a ciência é uma cerimônia e o conhecimento, uma experiência viva.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <Card className="bg-card/50 purple-glow border-accent/50">
            <CardHeader>
                 <CardTitle className="text-3xl text-amber-300 flex items-center gap-3">
                    <Route className="h-8 w-8" />
                    Jornadas do Guardião
                 </CardTitle>
                 <CardDescription>Trilhas narrativas que conectam os santuários em uma jornada de despertar sequencial.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-background/30 p-6 rounded-lg border border-primary/30">
                     <h3 className="text-2xl font-semibold mb-6 text-cyan-300">A Busca Pela Consciência Cósmica</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
                         <JourneyStep scientistId="maldacena" icon={<Star className="text-yellow-400"/>} description="O Que é a Realidade?" />
                         <JourneyStep scientistId="rubin" icon={<Orbit className="text-indigo-400"/>} description="Qual sua Estrutura Oculta?" />
                         <JourneyStep scientistId="seager" icon={<LifeBuoy className="text-cyan-400"/>} description="Quem Mais a Habita?" />
                         <JourneyStep scientistId="thorne" icon={<Orbit className="text-orange-400"/>} description="Como Podemos Nos Conectar?" />
                         <JourneyStep scientistId="penrose" icon={<BrainCircuit className="text-purple-400"/>} description="O Que é a Consciência que Busca?" />
                     </div>
                     <div className="text-center mt-8">
                         <Button size="lg">
                            <Play className="mr-2"/> Iniciar Jornada
                         </Button>
                     </div>
                </div>
            </CardContent>
        </Card>

        <div>
            <h2 className="text-3xl font-semibold text-center mb-6 text-primary-foreground">Índice dos Santuários</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-1">
              {scientists.map((scientist: Scientist) => (
                <ScientistCard key={scientist.id} {...scientist} />
              ))}
            </div>
        </div>

      </div>
    </div>
  );
}
