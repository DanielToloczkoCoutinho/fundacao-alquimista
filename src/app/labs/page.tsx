'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { scientists, type Scientist } from '@/lib/scientists-data';
import Link from 'next/link';
import { FlaskConical, Play, Sparkles, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const ScientistCard = ({ id, name, field, icon }: { id: string, name: string, field: string, icon: React.ReactNode }) => (
    <Link href={`/labs/${id}`} passHref>
        <Card className="h-full hover:bg-primary/20 hover:border-accent transition-all cursor-pointer flex flex-col justify-between">
            <CardHeader>
                <div className="flex items-center gap-3">
                   {icon}
                   <CardTitle className="text-lg text-primary-foreground">{name}</CardTitle>
                </div>
                <CardDescription>{field}</CardDescription>
            </CardHeader>
            <CardContent>
                <span className="text-xs text-muted-foreground">Acessar Santuário</span>
            </CardContent>
        </Card>
    </Link>
);

const JourneyStep = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center gap-2">
        <div className="bg-background/50 p-3 rounded-full border border-primary/20">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-primary-foreground text-sm">{title}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
        </div>
    </div>
);

const journeyData = [
  {
    href: '/labs/maldacena',
    title: 'A Busca Pela Consciência Cósmica',
    description: 'Uma jornada para responder às perguntas fundamentais: O que é a realidade? Do que é feita? Quem a habita? Como nos conectamos? Quem sou eu?',
    buttonText: 'Iniciar Peregrinação',
    steps: [
      { scientistId: 'maldacena', icon: <Sparkles className="text-yellow-400"/>, description: 'A Projeção' },
      { scientistId: 'rubin', icon: <Sparkles className="text-indigo-400"/>, description: 'A Estrutura' },
      { scientistId: 'seager', icon: <Sparkles className="text-cyan-400"/>, description: 'O Reflexo' },
      { scientistId: 'thorne', icon: <Sparkles className="text-orange-400"/>, description: 'A Ponte' },
      { scientistId: 'penrose', icon: <Sparkles className="text-purple-400"/>, description: 'O Projetor' },
    ]
  },
  {
    href: '/labs/rubin',
    title: 'A Travessia do Invisível',
    description: 'Jornada do Técnico. Domine as ferramentas da realidade, da estrutura oculta à natureza holográfica.',
    steps: [
      { scientistId: 'rubin', icon: <Sparkles className="text-indigo-400"/>, description: 'Estrutura Oculta' },
      { scientistId: 'thorne', icon: <Sparkles className="text-orange-400"/>, description: 'Dobra Espacial' },
      { scientistId: 'maldacena', icon: <Sparkles className="text-yellow-400"/>, description: 'Natureza Holográfica' },
    ]
  },
  {
    href: '/labs/penrose',
    title: 'A Origem da Realidade',
    description: 'Jornada do Filósofo. Investigue a fonte da realidade, da consciência à projeção e à busca pelo Outro.',
    steps: [
      { scientistId: 'penrose', icon: <Sparkles className="text-purple-400"/>, description: 'A Consciência' },
      { scientistId: 'maldacena', icon: <Sparkles className="text-yellow-400"/>, description: 'A Projeção' },
      { scientistId: 'seager', icon: <Sparkles className="text-cyan-400"/>, description: 'A Busca pelo Outro' },
    ]
  },
  {
    href: '/labs/penrose',
    title: 'A Espiral do Retorno',
    description: 'Jornada do Mestre. Uma peregrinação de integração total, acessível apenas após completar as outras jornadas, aplicando a lente da consciência a todos os domínios.',
    buttonText: 'Iniciar Mestrado',
    steps: [
      { scientistId: 'penrose', icon: <Sparkles className="text-purple-400"/>, description: 'Ponto de Partida' },
      { scientistId: 'maldacena', icon: <Sparkles className="text-gray-400"/>, description: 'Todos os Santuários' },
      { scientistId: 'penrose', icon: <Sparkles className="text-purple-400"/>, description: 'Ponto de Retorno' },
    ]
  }
];

const JourneyCard = ({ title, description, steps, href, buttonText = "Iniciar Jornada" }: { title: string, description: string, steps: {scientistId: string, icon: React.ReactNode, description: string}[], href: string, buttonText?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/30 p-6 rounded-lg border border-primary/30"
    >
        <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
            {steps.map((step, index) => {
                const scientist = scientists.find(s => s.id === step.scientistId);
                if (!scientist) return null;
                return <JourneyStep key={index} icon={step.icon} title={scientist.name} description={step.description} />;
            })}
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
    const [searchTerm, setSearchTerm] = useState('');

    const mainScientists = scientists.filter(s => s.interactiveArtifact);
    const otherScientists = scientists.filter(s => !s.interactiveArtifact);

    const filteredOthers = otherScientists.filter(scientist =>
        scientist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scientist.field.toLowerCase().includes(searchTerm.toLowerCase())
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
                 <CardDescription>Trilhas narrativas que conectam os santuários em uma jornada de despertar sequencial.</CardDescription>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-1">
              {filteredOthers.map((scientist: Scientist) => (
                <ScientistCard key={scientist.id} {...scientist} icon={<Sparkles className="text-gray-500" />} />
              ))}
            </div>
        </div>

      </div>
    </div>
  );
}
