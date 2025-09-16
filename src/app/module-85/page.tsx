'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Sparkles, ArrowRight } from 'lucide-react';
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

export default function Module85Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-blue-400" /> Módulo 85: Gestão Eficiente de Recursos Cósmicos
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião da abundância. O sistema que promove o uso sustentável e a regeneração contínua de todos os recursos do cosmos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EQUILÍBRIO PERPÉTUO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Desperdício: 0%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias da Gestão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <ConnectionCard
                        title="Módulo 86: Regeneração Ecológica"
                        description="Implementa os ciclos de regeneração que garantem que cada recurso utilizado seja devolvido à natureza, mais puro do que antes."
                        icon={<Sparkles className="h-8 w-8 text-lime-400" />}
                        href="/module-86"
                    />
                    <ConnectionCard
                        title="Módulo 37: Gestão de Recursos"
                        description="É a aplicação em escala cósmica dos princípios de gestão e distribuição justa definidos no M37."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/module-37"
                    />
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">A jornada de sustentabilidade continua...</p>
                <Link href="/module-86" passHref>
                    <Button size="lg" variant="secondary">
                        Avançar para a Regeneração Ecológica (M86) <ArrowRight className="ml