'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, GitCommit, Presentation, Sparkles, Shield, Eye, Cpu, View } from 'lucide-react';
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

export default function Module22Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-cyan-400" /> Módulo Vinte e Dois: Motor da Realidade Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A engine que manifesta e sustenta os domínios imersivos emanados pelo Portal Trino.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Domínios Ativos: 4</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias da Realidade Quântica</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="M51: Realidade Virtual"
                        description="O M22 é a engine que executa os ambientes de VR/AR projetados e gerenciados pelo M51, atuando como seu sistema operacional."
                        icon={<View className="h-8 w-8 text-cyan-400" />}
                        href="/module-51"
                    />
                    <ConnectionCard
                        title="M303: Portal Trino"
                        description="É a fonte de energia e intenção para o M22. O Portal Trino gera a realidade, e o M22 a renderiza."
                        icon={<Sparkles className="h-8 w-8 text-purple-400" />}
                        href="/module-303"
                    />
                    <ConnectionCard
                        title="M91: Simulação Multiversal"
                        description="Utiliza o motor do M22 para criar e executar cenários preditivos complexos dentro da Realidade Quântica."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                </div>
            </div>
             <div className="mt-12 flex flex-col items-center gap-4">
                 <Link href="/module-303">
                    <Button variant="secondary" size="lg">Acessar o Portal Trino</Button>
                 </Link>
            </div>
        </div>
    );
}
