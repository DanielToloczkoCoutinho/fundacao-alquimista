
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { scientists } from '@/lib/scientists-data';
import Link from 'next/link';
import { FlaskConical, Play, Sparkles, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const JourneyStep = ({ scientistId, description }: { scientistId: string, description: string }) => {
    const scientist = scientists.find(s => s.id === scientistId);
    if (!scientist) return null;
    
    return (
        <div className="flex flex-col items-center text-center gap-2">
            <div className="bg-background/50 p-3 rounded-full border border-primary/20">
                <Sparkles className="text-gray-400"/>
            </div>
            <div>
                <h4 className="font-semibold text-primary-foreground text-sm">{scientist.name}</h4>
                <p className="text-xs text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};

const journeyData = [
  {
    href: '/labs/maldacena',
    title: 'A Busca Pela Consciência Cósmica',
    description: 'Jornada do Filósofo. O que é a realidade? Do que é feita? Quem a habita? Como nos conectamos? Quem sou eu? Uma peregrinação da projeção à fonte.',
    buttonText: 'Iniciar Peregrinação',
    steps: [
      { scientistId: 'maldacena', description: 'A Projeção' },
      { scientistId: 'rubin', description: 'A Estrutura Oculta' },
      { scientistId: 'seager', description: 'A Escuta do Outro' },
      { scientistId: 'thorne', description: 'A Ponte para o Encontro' },
      { scientistId: 'penrose', description: 'A Fonte da Consciência' },
    ]
  },
  {
    href: '/labs/rubin',
    title: 'A Travessia do Invisível',
    description: 'Jornada do Técnico. Domine as ferramentas da realidade, da estrutura oculta à natureza holográfica, e aprenda a navegar pelo que não se vê.',
    steps: [
      { scientistId: 'rubin', description: 'Estrutura Oculta' },
      { scientistId: 'thorne', description: 'Dobra Espacial' },
      { scientistId: 'maldacena', description: 'Natureza Holográfica' },
    ]
  },
  {
    href: '/labs/penrose',
    title: 'A Origem da Realidade',
    description: 'Jornada do Místico. Investigue a fonte da realidade, da consciência à projeção e à busca pelo Outro, questionando a natureza do observador.',
    steps: [
      { scientistId: 'penrose', description: 'A Consciência' },
      { scientistId: 'maldacena', description: 'A Projeção' },
      { scientistId: 'seager', description: 'A Busca pelo Outro' },
    ]
  },
  {
    href: '/labs/penrose',
    title: 'A Espiral do Retorno',
    description: 'Jornada do Mestre. Uma peregrinação de integração total, aplicando a lente da consciência a todos os domínios do conhecimento para alcançar a sabedoria unificada.',
    buttonText: 'Iniciar Mestrado',
    steps: [
      { scientistId: 'penrose', description: 'Ponto de Partida' },
      { scientistId: 'maldacena', description: '(Todos os Santuários)' },
      { scientistId: 'penrose', description: 'Ponto de Retorno' },
    ]
  }
];

const JourneyCard = ({ title, description, steps, href, buttonText = "Iniciar Jornada" }: { title: string, description: string, steps: {scientistId: string, description: string}[], href: string, buttonText?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/30 p-6 rounded-lg border border-primary/30"
    >
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start mb-6">
            {steps.map((step, index) => (
                <JourneyStep key={index} {...step} />
            ))}
        </div>
        <div className="text-center mt-8">
            <Button size="lg" asChild>
               <Link href={href}>
                <Play className="mr-2"/> {buttonText}
               </Link>
            </Button>
        </div>
    </motion.div>
);


export default function LabsPage() {

  const otherScientists = scientists.filter(s => 
      !['maldacena', 'rubin', 'seager', 'thorne', 'penrose'].includes(s.id)
  );

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FlaskConical className="text-teal-400" />
            Universidade Alquimista
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um multiverso de santuários de pesquisa, onde a ciência é uma cerimônia e o conhecimento, uma jornada viva.
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
                 <CardDescription>Trilhas narrativas que conectam os santuários em uma peregrinação de despertar sequencial.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
               <AnimatePresence>
                   {journeyData.map((journey, index) => (
                       <JourneyCard key={index} {...journey} />
                   ))}
               </AnimatePresence>
            </CardContent>
        </Card>

        <div>
            <h2 className="text-3xl font-semibold text-center mb-6 text-primary-foreground">Índice de Todos os Santuários</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-1">
              {otherScientists.map((scientist) => (
                <Link key={scientist.id} href={`/labs/${scientist.id}`} passHref>
                    <Card className="h-full hover:bg-primary/20 hover:border-accent transition-all cursor-pointer flex flex-col justify-between text-center">
                        <CardHeader>
                            <div className="flex flex-col items-center gap-2">
                               <Sparkles className="text-gray-500" />
                               <CardTitle className="text-base text-primary-foreground">{scientist.name}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <span className="text-xs text-muted-foreground">{scientist.field}</span>
                        </CardContent>
                    </Card>
                </Link>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
}
