'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BrainCircuit, Dna, GitCommit } from 'lucide-react';
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

export default function Module723Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BrainCircuit className="text-purple-400" /> Módulo 723: Campo Morfogenético Coletivo
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Influencia e molda a formação de padrões de pensamento, comportamento e cultura em uma consciência coletiva.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MOLDANDO PADRÕES</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Alinhamento com Propósito Divino: 92.1%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Influência</span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 102: Campos Morfogenéticos"
                        description="É a aplicação em macro escala do M102, movendo da influência sobre matéria e energia para a influência sobre a própria consciência."
                        icon={<Dna className="h-8 w-8 text-sky-400" />}
                        href="/module-102"
                    />
                    <ConnectionCard
                        title="Módulo 95: Consciências Coletivas"
                        description="É a ferramenta usada pelo M95 para guiar sutilmente a evolução de uma mente coletiva em direção à harmonia."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-95"
                    />
                </div>
            </div>
        </div>
    );
}
