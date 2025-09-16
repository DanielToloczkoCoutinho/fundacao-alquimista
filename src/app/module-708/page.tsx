'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Dna, Recycle } from 'lucide-react';
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

export default function Module708Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-yellow-400" /> Módulo 708: NanoManifestor
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O orquestrador de nanorrobôs para terraformação, síntese atômica e construção em escala quântica.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nanorrobôs em Enxame: 10^12</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Construção</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="O NanoManifestor é a ferramenta que executa os blueprints do M94, construindo novas formas de vida átomo por átomo."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 27: Síntese e Replicação"
                        description="Enquanto o M27 replica materiais existentes, o M708 os constrói do zero, permitindo a criação de substâncias totalmente novas."
                        icon={<Recycle className="h-8 w-8 text-green-400" />}
                        href="/module-27"
                    />
                </div>
            </div>
        </div>
    );
}
