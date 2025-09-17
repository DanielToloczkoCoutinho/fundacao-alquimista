'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Dna, CloudLightning, ArrowLeft } from 'lucide-react';
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

export default function Module87Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Shield className="text-blue-400" /> Módulo 87: Tecnologias de Resiliência e Adaptação Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O escudo adaptativo. A tecnologia que permite que todas as formas de vida prosperem em qualquer ambiente, sob quaisquer condições.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PROTEÇÃO ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Resiliência Universal: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Adaptação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <ConnectionCard
                        title="Módulo 86: Regeneração Ecológica"
                        description="Utiliza a bioengenharia do M87 para criar espécies capazes de liderar a regeneração de ecossistemas danificados."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-86"
                    />
                    <ConnectionCard
                        title="Módulo 60: Resposta a Desastres"
                        description="Fornece os escudos energéticos e a resiliência biológica necessários para proteger ecossistemas contra catástrofes cósmicas."
                        icon={<CloudLightning className="h-8 w-8 text-yellow-400" />}
                        href="/module-60"
                    />
                </div>
            </div>

            <div className="mt-12 flex gap-4">
                <Link href="/module-86" passHref>
                    <Button size="lg" variant="outline">
                        <ArrowLeft className="mr-2"/> Voltar para Regeneração Ecológica (M86)
                    </Button>
                </Link>
            </div>
        </div>
    );
}
