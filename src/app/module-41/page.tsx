'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestTube, Dna, Sprout, HeartPulse, Shield } from 'lucide-react';
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

export default function Module41Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <TestTube className="text-emerald-400" /> Módulo Quarenta e Um: Laboratório de Coerência Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Santuário da Biofísica. A interface para análise e regeneração celular através da coerência quântica.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AMBIENTE ESTÉRIL E PRONTO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Campo de Coerência: 99.998%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Biocriação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Mantém a esterilidade vibracional do laboratório, protegendo os experimentos de interferências quânticas externas."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 40: Códice Genético"
                        description="Recebe as sequências genéticas do M40 para análise de expressão em um campo de coerência perfeita."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-40"
                    />
                    <ConnectionCard
                        title="Módulo 17: AURA-HEAL"
                        description="Desenvolve e testa os campos de cura holográfica que o M17 aplica em larga escala para a regeneração celular."
                        icon={<HeartPulse className="h-8 w-8 text-pink-400" />}
                        href="/module-17"
                    />
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Fornece o ambiente de 'sala limpa' vibracional para que o M94 possa reescrever os blueprints da vida sem interferências."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="/module-94"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Análise de Coerência Celular</Button>
            </div>
        </div>
    );
}
