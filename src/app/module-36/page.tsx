
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, GitCommit, GitCompareArrows, AlertTriangle, Shield } from 'lucide-react';
import Link from 'next/link';

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

export default function Module36Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <History className="text-purple-400" /> Módulo Trinta e Seis: Engenharia Temporal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Arquiteto Causal. Orquestra linhas de tempo e futuros prováveis para manifestar a evolução mais harmoniosa.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MONITORANDO FLUXOS</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Probabilidade de Paradoxo: 0.001%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Orquestração Causal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Toda manipulação temporal é protegida por um escudo de contenção do M1, prevenindo consequências não intencionadas."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="Usa os dados do M91 para escolher as linhas de tempo mais promissoras e torná-las realidades potenciais."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 23: Regulação Espaço-Temporal"
                        description="Enquanto o M23 previne paradoxos (defesa), o M36 projeta ativamente as linhas de tempo (ataque/criação)."
                        icon={<AlertTriangle className="h-8 w-8 text-yellow-400" />}
                        href="/module-23"
                    />
                    <ConnectionCard
                        title="Módulo 108: Harmonização de Realidades"
                        description="Invoca o M108 para garantir que a fusão ou convergência de diferentes linhas de tempo seja harmoniosa e estável."
                        icon={<GitCompareArrows className="h-8 w-8 text-cyan-400" />}
                        href="/module-108"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Console de Engenharia Temporal</Button>
            </div>
        </div>
    );
}
