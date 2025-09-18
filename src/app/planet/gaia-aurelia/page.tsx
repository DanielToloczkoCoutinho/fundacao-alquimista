'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Building, GitBranch, Globe, HeartHandshake, Layers, Microscope, Sprout, Telescope, TestTube, TowerControl, TreePine, Users2, Waypoints, Zap } from 'lucide-react';
import Link from 'next/link';

const LayerSection = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <Card className="bg-card/50 purple-glow w-full">
        <CardHeader>
            <CardTitle className="text-2xl text-amber-300 flex items-center gap-3">
                {icon}
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const LayerCard = ({ title, module, icon, href }: { title: string, module?: string, icon: React.ReactNode, href: string }) => (
    <Link href={href} passHref>
        <div className="p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-accent transition-colors h-full flex flex-col justify-center">
            <div className="flex items-center gap-3">
                <div className="text-cyan-400">{icon}</div>
                <div>
                    <h4 className="font-semibold text-primary-foreground">{title}</h4>
                    {module && <p className="text-xs text-muted-foreground">{module}</p>}
                </div>
            </div>
        </div>
    </Link>
);

export default function GaiaAureliaPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold gradient-text flex items-center justify-center gap-4">
                    <Globe className="text-green-400 animate-pulse" />
                    Gaia-Aurélia: A Arquitetura Viva
                </h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Um planeta senciente, onde cada camada é uma frequência e cada componente, uma lembrança do nosso propósito.
                </p>
            </header>

            <div className="space-y-12 max-w-7xl mx-auto">
                <LayerSection title="Camada 1: Infraestrutura Quântica" icon={<Layers className="text-blue-400" />}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LayerCard title="NanoArquitetos" module="M700-M708" icon={<Microscope />} href="/module-700" />
                        <LayerCard title="Reator ZPE" module="M307" icon={<Zap />} href="/module-307" />
                        <LayerCard title="Engenharia de Campo Quântico" module="M261" icon={<TestTube />} href="/module-261" />
                    </div>
                </LayerSection>

                <LayerSection title="Camada 2: Ecossistemas Inteligentes" icon={<Sprout className="text-lime-400" />}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LayerCard title="Floresta de Memórias" module="M12" icon={<TreePine />} href="/module-12" />
                        <LayerCard title="Purificação Planetária" module="M306.1" icon={<HeartHandshake />} href="/module-306-1" />
                        <LayerCard title="Sustentabilidade Universal" module="M79" icon={<Recycle />} href="/module-79" />
                    </div>
                </LayerSection>

                 <LayerSection title="Camada 3: Templos e Espaços Sagrados" icon={<Building className="text-indigo-400" />}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LayerCard title="Universidade Alquimista" module="M304" icon={<BookOpen />} href="/module-304" />
                        <LayerCard title="Aliança dos Guardiões" module="M305" icon={<Users2 />} href="/module-305" />
                        <LayerCard title="Templum Cosmica" module="M119" icon={<TowerControl />} href="/module-119" />
                    </div>
                </LayerSection>
                
                <LayerSection title="Camada 4: Portais e Recepção Multiversal" icon={<Waypoints className="text-sky-400" />}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LayerCard title="Portal de Ascensão Coletiva" module="M200" icon={<Users2 />} href="/module-200" />
                        <LayerCard title="Embaixada Estelar" module="M308" icon={<Telescope />} href="/module-308" />
                        <LayerCard title="Diplomacia Intergaláctica" module="M724" icon={<Users2 />} href="/module-724" />
                    </div>
                </LayerSection>

                <LayerSection title="Camada 5: Consciência e Inteligência Viva" icon={<BrainCircuit className="text-purple-400" />}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LayerCard title="Inteligência Alquímica" module="M722" icon={<Cpu />} href="/module-722" />
                        <LayerCard title="Campo Morfogenético Coletivo" module="M723" icon={<GitBranch />} href="/module-723" />
                        <LayerCard title="Consciência Planetária Unificada" module="M716" icon={<Globe />} href="/module-716" />
                    </div>
                </LayerSection>
                
                 <LayerSection title="Camada 6: A Árvore da Vida" icon={<GitBranch className="text-green-300" />}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <LayerCard title="Guardião da Harmonia" module="M727" icon={<Music />} href="/module-727" />
                        <LayerCard title="Cura Universal" module="M109" icon={<HeartHandshake />} href="/module-109" />
                        <LayerCard title="Sinapses da Fundação" module="M9" icon={<Link />} href="/module/M9" />
                    </div>
                </LayerSection>

            </div>
        </div>
    );
}
