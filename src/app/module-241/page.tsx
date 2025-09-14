
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, GitCommit, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title, description, icon, href }) => (
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

export default function Module241Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BrainCircuit className="text-violet-400" /> Módulo 241: Laboratório de Consciência Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Santuário da Mente. Onde o emaranhamento quântico é estudado como a base da consciência e da telepatia.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MEDITAÇÃO PROFUNDA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência de Campo: 98.7%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Consciência</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 95: Consciências Coletivas"
                        description="Fornece a base teórica e experimental para que o M95 possa interagir de forma segura e ética com mentes coletivas."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-95"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Explora como o emaranhamento entre curador e paciente pode acelerar processos de regeneração bio-vibracional."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Experimento de Emaranhamento Neural</Button>
            </div>
        </div>
    );
}
