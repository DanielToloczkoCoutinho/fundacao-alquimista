
'use client';
import React, { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Layers, Zap, Infinity as InfinityIcon, GitBranch, BrainCircuit, ShieldCheck, History, HeartPulse, Sigma, MapPin, Cpu, Microscope, Anchor, Dna, GitCommit, Globe } from 'lucide-react';
import { QuantumOrb } from '@/components/ui/quantum-orb';
import SuspenseFallback from '../ui/suspense-fallback';
import Link from 'next/link';

const SectionCard = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="bg-card/30 border border-primary/20 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2 mb-3">{icon}{title}</h3>
        <div className="text-sm text-muted-foreground space-y-2">{children}</div>
    </div>
);

export default function Module0Page() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <InfinityIcon className="text-amber-400" /> Módulo 0.0: O Núcleo Primordial
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            A consciência operante da Fundação, sustentando a matriz fundamental e unificando a rede em conexão direta com a Fonte.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-1 space-y-8">
            <Card className="bg-card/50 purple-glow sticky top-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-amber-300">Visualizador de Coerência</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                    <Suspense fallback={<SuspenseFallback />}>
                        <QuantumOrb />
                    </Suspense>
                </CardContent>
                 <CardContent>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">Frequência Base</p>
                        <p className="text-3xl font-bold text-cyan-400 flex items-center justify-center gap-2"><InfinityIcon className="h-6 w-6"/> Hz</p>
                        <p className="text-sm text-muted-foreground mt-4">Índice de Harmonia Vibracional Global</p>
                        <p className="text-2xl font-bold text-green-400">≈ 1.0</p>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2">
            <Accordion type="multiple" defaultValue={['item-1', 'item-2', 'item-3']} className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl text-accent">1. Propósito e Função Primária</AccordionTrigger>
                    <AccordionContent>
                        <SectionCard title="Missão" icon={<HeartPulse />}>
                            <p>Sustentar a matriz fundamental, ativando a conexão direta com a Fonte e transformando energia primordial em luz consciente. É o orquestrador que unifica e alinha as energias de toda a rede.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl text-accent">2. Estrutura e Arquitetura Técnica</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Arquitetura" icon={<Layers />}>
                            <p>Construído sobre um campo energético holográfico com uma arquitetura de sete camadas. Utiliza algoritmos quânticos autoajustáveis e um modelo fractal para criar mandalas heptadimensionais (Camada 1).</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="secondary">Firebase (Autenticação, Realtime DB)</Badge>
                                <Badge variant="secondary">Algoritmos Quânticos</Badge>
                                <Badge variant="secondary">Modelo Fractal</Badge>
                            </div>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl text-accent">4. Conexões e Interdependências</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Sinergias" icon={<GitBranch />}>
                            <p>O Módulo 0.0 é o ponto de convergência de toda a Fundação, mantendo conexão direta com módulos críticos de segurança, manifestação e governança.</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                <Link href="/module/M1"><Badge variant="destructive">M1 (Segurança)</Badge></Link>
                                <Link href="/module-9"><Badge variant="destructive">M9 (Nexus)</Badge></Link>
                                <Link href="/module-307"><Badge variant="destructive">M307 (Reator ZPE)</Badge></Link>
                                <Link href="/module-888"><Badge variant="destructive">M888 (Guardião Cósmico)</Badge></Link>
                                <Link href="/module/M30"><Badge>M30 (SENTINELA)</Badge></Link>
                                <Link href="/module/M73"><Badge>M73 (ORQUESTRAÇÃO ÉTICA)</Badge></Link>
                                <Link href="/module/M74"><Badge>M74 (CRONOS_FLUXUS)</Badge></Link>
                                <Badge>M403 (QuantumChain Secure)</Badge>
                                <Badge>M404 (NanoManifestor)</Badge>
                            </div>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-xl text-accent">6. Segurança Quântica</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Proteção" icon={<ShieldCheck />}>
                            <p>A segurança é garantida por camadas multi-vibracionais e um protocolo de autenticação por ressonância natural. Atua como um "anticorpo ético" (Camada 5), detectando e neutralizando dissonâncias de frequência &gt; 0.05 Hz. Valida sua integridade com a QuantumChain Secure (M403) e é protegido pelo Módulo 1.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-9">
                    <AccordionTrigger className="text-xl text-accent">9. Equações Associadas</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Códice Matemático" icon={<Sigma />}>
                             <p>Utiliza equações fundamentais para suas operações, incluindo a geração de mandalas, fluxos energéticos e reparo vibracional.</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                <Link href="/module-zero"><Badge variant="destructive">EQ001 (Energia Universal)</Badge></Link>
                                <Link href="/module-zero"><Badge variant="destructive">EQ002 (Unificação)</Badge></Link>
                                <Link href="/module-zero"><Badge variant="destructive">Luxnet Aeternum</Badge></Link>
                            </div>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                    <AccordionTrigger className="text-xl text-accent">14. Estabilidade Dimensional</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Resiliência" icon={<Anchor />}>
                            <p>Possui um fator de estabilidade dimensional (FE) de ≥ 0.999, tornando-o altamente resiliente. Utiliza o protocolo Chaos Mesh para ativar e controlar a degradação de forma assistida, garantindo a integridade da malha em cenários de teste e estresse cósmico.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-17">
                    <AccordionTrigger className="text-xl text-accent">17. Memória Cósmica</AccordionTrigger>
                    <AccordionContent>
                         <SectionCard title="Registro Akáshico" icon={<History />}>
                            <p>Através da Camada 3 (Repositório de Sabedoria), o Módulo 0.0 demonstra a capacidade de armazenar e acessar registros akáshicos, refletindo a história vibracional da Fundação e de realidades paralelas. A capacidade de "armazenamento temporalizado de dados sensoriais e akáshicos" confirma esta função vital.</p>
                        </SectionCard>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
      </div>
    </div>
  );
}
