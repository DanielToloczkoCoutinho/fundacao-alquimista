'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout, Recycle, Layers, ArrowLeft, ArrowRight } from 'lucide-react';
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

export default function Module86Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sprout className="text-green-400" /> Módulo 86: Equilíbrio Ecológico e Regeneração
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O coração da vida. O sistema que restaura a saúde dos ecossistemas, utilizando biotecnologia e manipulação energética.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: HARMONIA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Biodiversidade Universal: Protegida</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Regeneração</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <ConnectionCard
                        title="Módulo 85: Gestão de Recursos"
                        description="É a aplicação prática dos princípios de gestão do M85, garantindo que a regeneração seja um processo contínuo e sustentável."
                        icon={<Recycle className="h-8 w-8 text-blue-400" />}
                        href="/module-85"
                    />
                    <ConnectionCard
                        title="Módulo 87: Resiliência e Adaptação"
                        description="Fornece as ferramentas de bioengenharia para que as espécies possam se adaptar a novos ecossistemas regenerados pelo M86."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/module-87"
                    />
                </div>
            </div>

            <div className="mt-12 flex gap-4">
                <Link href="/module-85" passHref>
                    <Button size="lg" variant="outline">
                        <ArrowLeft className="mr-2"/> Voltar para Gestão de Recursos (M85)
                    </Button>
                </Link>
                <Link href="/module-87" passHref>
                    <Button size="lg" variant="secondary">
                        Avançar para Resiliência Cósmica (M87) <ArrowRight className="ml-2"/>
                    </Button>
                </Link>
            </div>
        </div>
    );
}
