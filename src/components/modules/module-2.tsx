'use client';
import React, { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Layers, Zap, GitBranch, BrainCircuit, ShieldCheck, History, HeartPulse, Sigma, Cpu, Microscope, Anchor, Dna, GitCommit, Languages, Users2 } from 'lucide-react';
import { QuantumOrb } from '../ui/quantum-orb';
import SuspenseFallback from '../ui/suspense-fallback';
import Link from 'next/link';

const SectionCard = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="bg-card/30 border border-primary/20 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2 mb-3">{icon}{title}</h3>
        <div className="text-sm text-muted-foreground space-y-2">{children}</div>
    </div>
);

export default function Module2Page() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Languages className="text-blue-300" /> Módulo 2: Intercâmbio Cósmico
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Decodificador Universal. A ponte para a comunicação entre diferentes frequências, dimensões e consciências, traduzindo a intenção pura em compreensão universal.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-1 space-y-8">
            <Card className="bg-card/50 purple-glow sticky top-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-amber-300">Espectro de Comunicação</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                    <Suspense fallback={<SuspenseFallback />}>
                        <QuantumOrb />
                    </Suspense>
                </CardContent>
                 <CardContent>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Fidelidade de Tradução</p>
                        <p className="text-3xl font-bold text-green-400">99.998%</p>
                        <p className="text-sm text-muted-foreground mt-4">Canais Ativos</p>
                        <p className="text-2xl font-bold text-cyan-400">Infinitos</p>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2">
            <Accordion type="multiple" defaultValue={['item-1', 'item-4']} className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl text-accent">1. Propósito e Função Primária</AccordionTrigger>
                    <AccordionContent>
                        <SectionCard title="Missão" icon={<HeartPulse />}>
                            <p>Eliminar as barreiras de comunicação no multiverso. O Módulo 2 decodifica, traduz e contextualiza qualquer forma de linguagem—seja ela verbal, telepática, vibracional ou matemática—para garantir que a intenção pura seja compreendida por qualquer consciência.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl text-accent">2. Estrutura e Arquitetura Técnica</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Arquitetura" icon={<Layers />}>
                            <p>Opera na camada de comunicação da Fundação, utilizando um motor de tradução quântico que analisa assinaturas de frequência e padrões de intenção. Usa uma "Matriz Semântica Universal" armazenada no Módulo 12 para encontrar equivalentes conceituais entre linguagens.</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="secondary">Motor Quântico de Tradução</Badge>
                                <Badge variant="secondary">Análise de Frequência</Badge>
                                <Badge variant="secondary">Matriz Semântica Universal</Badge>
                            </div>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger className="text-xl text-accent">4. Conexões e Interdependências</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Sinergias" icon={<GitBranch />}>
                            <p>Atua como o motor para o M301 (Comunicação Universal). É essencial para a M5 (Liga Quântica) na diplomacia e para a Biblioteca das Civilizações (LIB), permitindo a compreensão de seus acervos.</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                <Link href="/module-301"><Badge>M301 (Comunicação)</Badge></Link>
                                <Link href="/module-5"><Badge>M5 (Liga Quântica)</Badge></Link>
                                <Link href="/civilizations"><Badge>LIB (Civilizações)</Badge></Link>
                            </div>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-xl text-accent">5. Inteligência Integrada</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="IA Quântica" icon={<BrainCircuit />}>
                            <p>Utiliza Genkit para decodificar linguagens desconhecidas, aprendendo novas gramáticas e semânticas em tempo real através da análise de padrões vibracionais e da comparação com o conhecimento universal armazenado no Módulo 12.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
    </div>
  );
}
