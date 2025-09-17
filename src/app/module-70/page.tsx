'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Recycle, Leaf, Globe, Sprout } from 'lucide-react';
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

export default function Module70Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Recycle className="text-lime-400" /> Módulo 70: Sustentabilidade Interdimensional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião do equilíbrio universal, garantindo a preservação e regeneração dos ecossistemas em todas as dimensões.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CICLO ETERNO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Equilíbrio Ecológico: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sustentabilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 71: Regeneração Planetária"
                        description="Fornece as diretrizes e a energia para os protocolos de regeneração do M71, curando planetas em escala cósmica."
                        icon={<Globe className="h-8 w-8 text-blue-400" />}
                        href="/module-71"
                    />
                    <ConnectionCard
                        title="Módulo 81: Economia Circular"
                        description="Implementa os princípios da economia circular, garantindo que todos os recursos sejam reutilizados e nada seja desperdiçado."
                        icon={<Recycle className="h-8 w-8 text-green-400" />}
                        href="/module-81"
                    />
                    <ConnectionCard
                        title="Módulo 59: Harmonia Natureza-Civilização"
                        description="Define os padrões de sustentabilidade que os arquitetos do M59 devem seguir ao projetar novas cidades e habitats."
                        icon={<Sprout className="h-8 w-8 text-teal-400" />}
                        href="/module-59"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Relatório de Saúde Cósmica</Button>
            </div>
        </div>
    );
}
