
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Beaker, History, AlertTriangle } from 'lucide-react';
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

export default function Module191Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Beaker className="text-violet-400" /> Módulo 191: Laboratório de Cristais Temporais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Joia da Causalidade. Gera e estuda cristais temporais para compreender e manipular as leis do tempo.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CONTENÇÃO ATIVA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Cristais Ativos: 7</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Temporais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 107: Restauração Temporal"
                        description="Fornece a matéria-prima e o conhecimento para realizar restaurações temporais de alta precisão."
                        icon={<History className="h-8 w-8 text-cyan-400" />}
                        href="/module-107"
                    />
                    <ConnectionCard
                        title="Módulo 23: Regulação Espaço-Temporal"
                        description="Os cristais aqui gerados são usados pelo M23 para criar 'âncoras' que previnem paradoxos."
                        icon={<AlertTriangle className="h-8 w-8 text-yellow-400" />}
                        href="/module-23"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg">Iniciar Geração de Cristal Temporal</Button>
            </div>
        </div>
    );
}
