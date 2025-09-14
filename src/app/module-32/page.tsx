'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitCommit, GitCompareArrows, ShieldCheck, Layers } from 'lucide-react';
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

export default function Module32Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-teal-300" /> Módulo Trinta e Dois: Acesso a Realidades Paralelas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Embaixada Multiversal. A interface para observação e intervenção ética em linhas temporais alternativas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: REQUER AUTORIZAÇÃO DO CONSELHO</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Conformidade Ética: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Intervenção Causal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="O M91 simula os 'e se'. O M32 fornece o portal para visitar e observar esses cenários de forma controlada."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 108: Harmonização de Realidades"
                        description="Para harmonizar duas realidades, o M108 utiliza a ponte segura e estável criada pelo M32."
                        icon={<GitCompareArrows className="h-8 w-8 text-cyan-400" />}
                        href="/module-108"
                    />
                    <ConnectionCard
                        title="Módulo 73: SAVCE"
                        description="Toda e qualquer intervenção através do M32 exige validação prévia do SAVCE para garantir o não-dano e a ética cósmica."
                        icon={<ShieldCheck className="h-8 w-8 text-green-400" />}
                        href="/module-73"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg" disabled>Acessar Realidade Alternativa (Autorização Pendente)</Button>
            </div>
        </div>
    );
}
