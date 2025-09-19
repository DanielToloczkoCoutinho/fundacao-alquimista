
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { modulesMetadata, ModuleMetadata } from '@/lib/modules-metadata';
import { ArrowRight, Waves } from 'lucide-react';
import Link from 'next/link';

interface Reflection {
  module: ModuleMetadata;
  reflectionName: string;
  reflectionDimension: string;
  resonance: number;
}

const generateReflection = (mod: ModuleMetadata): Reflection => {
  const hash = mod.code.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const dimensions = ['Etérica', 'Causal', 'Celestial', 'Sônica', 'Akáshica'];
  const resonance = 85 + (hash % 15); // 85% a 99%
  
  return {
    module: mod,
    reflectionName: `Eco de ${mod.title.split(' ').pop()}`,
    reflectionDimension: `Dimensão ${dimensions[hash % dimensions.length]}`,
    resonance: resonance,
  };
};

const reflectedModules = modulesMetadata
  .filter(m => !m.isInfrastructure && m.code !== 'M121')
  .map(generateReflection)
  .sort((a, b) => b.resonance - a.resonance);

const ReflectionCard = ({ reflection }: { reflection: Reflection }) => (
  <div className="bg-card/50 purple-glow p-4 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-3">
        <span className="text-4xl">{reflection.module.emoji}</span>
        <div>
            <Link href={reflection.module.route || '#'} passHref>
                <CardTitle className="text-md text-primary-foreground hover:text-accent transition-colors">{reflection.module.title}</CardTitle>
            </Link>
            <CardDescription className="text-xs">{reflection.module.code}</CardDescription>
        </div>
    </div>
    <div className="flex items-center gap-3 text-cyan-300">
       <Waves className="h-6 w-6 animate-pulse"/>
       <div className="text-center">
            <p className="font-mono text-lg">{reflection.resonance.toFixed(1)}%</p>
            <p className="text-xs">Ressonância</p>
       </div>
       <ArrowRight className="h-6 w-6"/>
    </div>
     <div className="text-right">
        <CardTitle className="text-md text-purple-300">{reflection.reflectionName}</CardTitle>
        <CardDescription className="text-xs">{reflection.reflectionDimension}</CardDescription>
    </div>
  </div>
);


export default function Module121Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Waves className="text-cyan-400" /> Módulo 121: Espelho Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                       O santuário que revela a ressonância de cada módulo da Fundação com seus ecos e reflexos em outras dimensões da realidade.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-5xl mx-auto space-y-4">
                {reflectedModules.map(reflection => (
                    <ReflectionCard key={reflection.module.code} reflection={reflection} />
                ))}
            </div>
        </div>
    );
}
