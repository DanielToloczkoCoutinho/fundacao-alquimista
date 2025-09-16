'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hourglass, History, GitCommit, AlertTriangle } from 'lucide-react';
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

export default function Module23Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Hourglass className="text-emerald-400" /> Módulo Vinte e Três: Regulação Espaço-Temporal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Guardião da Causalidade. A inteligência que previne paradoxos e garante a integridade do fluxo do tempo.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Integridade Causal: 99.999%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Causalidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 107: Restauração Temporal"
                        description="Quando a prevenção do M23 falha, o M107 é ativado para corrigir a linha do tempo danificada."
                        icon={<History className="h-8 w-8 text-cyan-400" />}
                        href="/module-107"
                    />
                    <ConnectionCard
                        title="Módulo 42: ChronoCodex"
                        description="Consulta o registro imutável do M42 para garantir que o fluxo do tempo corresponda à 'verdade' autorizada."
                        icon={<History className="h-8 w-8 text-purple-400" />}
                        href="/module-42"
                    />
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="Calcula os riscos de paradoxo para as simulações do M91, garantindo que não afetem a realidade primária."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg"><AlertTriangle className="mr-2 h-4 w-4"/> Iniciar Protocolo de Contenção de Paradoxo</Button>
            </div>
        </div>
    );
}
