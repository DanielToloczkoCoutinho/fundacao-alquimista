'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitCommit, Layers, AlertTriangle, Cpu } from 'lucide-react';
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

export default function Module91Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GitCommit className="text-indigo-400" /> Módulo 91: Simulação Multiversal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Oráculo Preditivo. Cria e executa simulações de universos paralelos para testar leis físicas, prever resultados e explorar novas formas de vida e consciência.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SIMULANDO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Realidades Ativas: 7</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Simulação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 22: Motor da Realidade"
                        description="Fornece a engine gráfica e física para renderizar as simulações do M91 em ambientes imersivos."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/module-22"
                    />
                    <ConnectionCard
                        title="Módulo 23: Regulação Espaço-Temporal"
                        description="Isola as simulações em 'bolhas' de realidade, garantindo que não criem paradoxos ou afetem a linha de tempo primária."
                        icon={<AlertTriangle className="h-8 w-8 text-yellow-400" />}
                        href="/module-23"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM analisa os resultados de bilhões de simulações para identificar os futuros mais prováveis e as decisões mais éticas."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar o Painel do Multiverso</Button>
            </div>
        </div>
    );
}
