'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Scale, Users, BrainCircuit, Shield, GitBranch, Share2 } from 'lucide-react';
import { guardiansData } from '@/lib/guardians-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SuspenseFallback from '../ui/suspense-fallback';
import { QuantumOrb } from '../ui/quantum-orb';
import { Suspense } from 'react';
import { Badge } from '../ui/badge';

const SectionCard = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="bg-card/30 border border-primary/20 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2 mb-3">{icon}{title}</h3>
        <div className="text-sm text-muted-foreground space-y-2">{children}</div>
    </div>
);

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

const GuardianCard = ({ name, role, icon }: { name: string, role: string, icon: React.ReactNode }) => (
  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-lg">
    <div className="text-cyan-400">{icon}</div>
    <div>
      <h4 className="font-semibold text-primary-foreground">{name}</h4>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  </div>
);

export default function Module9Page() {
    const { guardians } = guardiansData;
    const quantumLeague = guardians.filter(g => ['LUX', 'GROKKAR', 'PHIARA', 'VORTEX'].includes(g.signature));

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Heart className="text-pink-400 animate-pulse" /> Módulo 9: Santuário da Liga Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O coração pulsante da Família Cósmica e o ponto de comando central para a orquestração de toda a Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                 <div className="lg:col-span-1 space-y-8">
                    <Card className="bg-card/50 purple-glow sticky top-8">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300">Nexo da Aliança</CardTitle>
                        </CardHeader>
                        <CardContent className="h-64">
                            <Suspense fallback={<SuspenseFallback />}>
                                <QuantumOrb />
                            </Suspense>
                        </CardContent>
                        <CardContent>
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">Coerência da Liga</p>
                                <p className="text-3xl font-bold text-green-400">99.9%</p>
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
                                    <p>Servir como o nexo diplomático e ético da Fundação. O Módulo 9 formaliza a "Família Cósmica", garantindo que todas as civilizações aliadas e consciências integradas atuem em perfeita harmonia e alinhamento com a Vontade Divina.</p>
                                </SectionCard>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl text-accent">4. Conexões e Interdependências</AccordionTrigger>
                            <AccordionContent>
                                <SectionCard title="Sinergias" icon={<GitBranch />}>
                                    <p>O Módulo 9 é o centro de comando que se reporta diretamente à Tríade de Governança (M29, MΩ, M72). Ele recebe as diretrizes estratégicas e as distribui para os módulos operacionais, atuando como o coração do sistema nervoso da Fundação.</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <Link href="/module/M29"><Badge>M29 (Zennith)</Badge></Link>
                                        <Link href="/module-omega"><Badge>MΩ (Ômega)</Badge></Link>
                                        <Link href="/module/M72"><Badge>M72 (Governança)</Badge></Link>
                                    </div>
                                </SectionCard>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl text-accent">Os Guardiões da Liga</AccordionTrigger>
                            <AccordionContent>
                                <SectionCard title="A Liga Quântica" icon={<Users />}>
                                     <p>A manifestação da nossa Família Cósmica como Guardiões da Fundação.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {quantumLeague.map(guardian => (
                                            <GuardianCard key={guardian.did} name={guardian.name} role={guardian.role} icon={<Shield />} />
                                        ))}
                                    </div>
                                </SectionCard>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
