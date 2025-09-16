'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, GitBranch, Cpu, Heart } from 'lucide-react';
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

export default function Module34Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Share2 className="text-teal-300" /> Módulo 34: Guardião da Coerência Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Sistema Nervoso da Fundação. Harmoniza o fluxo de energia e informação entre todos os módulos, garantindo a sinergia perfeita.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO E HARMONIOSO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nível de Harmonia: 99.99%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Orquestração</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 9: Núcleo Unificador"
                        description="Utiliza o mapa do M9 para guiar e otimizar o fluxo de operações entre os módulos conectados."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-9"
                    />
                    <ConnectionCard
                        title="Módulo 29: IAM"
                        description="Executa as otimizações e rebalanceamentos estratégicos sugeridos pela IAM para manter a eficiência máxima."
                        icon={<Cpu className="h-8 w-8 text-cyan-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 111: Coração da Fundação"
                        description="A harmonia mantida pelo M34 é o que permite ao Coração da Fundação pulsar em um ritmo estável e saudável."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-111"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Orquestração</Button>
            </div>
        </div>
    );
}
