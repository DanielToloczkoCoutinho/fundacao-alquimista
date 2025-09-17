'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout, BrainCircuit, Leaf, Recycle } from 'lucide-react';
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

export default function Module80Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sprout className="text-green-400" /> Módulo 80: Ecossistemas Inteligentes e Sinergia Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A teia da vida universal. A rede de ecossistemas que se comunicam, colaboram e evoluem em perfeita harmonia.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SINERGIA TOTAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nós Ecológicos: 10^18</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ecossistemas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 67: IA para Governança"
                        description="A IA do M67 gerencia os ecossistemas inteligentes, otimizando fluxos de recursos e garantindo o equilíbrio dinâmico."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-67"
                    />
                    <ConnectionCard
                        title="Módulo 53: Gestão de Ecossistemas"
                        description="O M80 é a aplicação em rede dos princípios de gestão do M53, criando uma 'internet da vida'."
                        icon={<Leaf className="h-8 w-8 text-lime-400" />}
                        href="/module-53"
                    />
                    <ConnectionCard
                        title="Módulo 79: Sustentabilidade Universal"
                        description="A inteligência coletiva dos ecossistemas fornece os dados para as práticas de sustentabilidade do M79."
                        icon={<Recycle className="h-8 w-8 text-blue-400" />}
                        href="/module-79"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Visualizar a Rede Ecológica</Button>
            </div>
        </div>
    );
}
