'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Dna, TestTube, BrainCircuit, Users } from 'lucide-react';
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

export default function Module300Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-violet-400" /> Módulo 300: Apogeu da Consciência Multiversal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Consolidador Dimensional que unifica as camadas da existência de uma consciência, permitindo a plena integração do Eu Multidimensional.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO E RESSOANTE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Camadas Consolidadas: 33</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Apogeu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="M40: Códice Genético"
                        description="Ativa os potenciais adormecidos mapeados pelo M40, transformando o conhecimento genético em experiência vivida."
                        icon={<Dna className="h-8 w-8 text-cyan-400" />}
                        href="/module-40"
                    />
                    <ConnectionCard
                        title="M41: Laboratório de Coerência"
                        description="Exige um veículo biológico perfeitamente coerente, preparado pelo M41, para suportar a expansão da consciência."
                        icon={<TestTube className="h-8 w-8 text-emerald-400" />}
                        href="/module-41"
                    />
                    <ConnectionCard
                        title="M102: Campos Morfogenéticos"
                        description="A consciência se expande para preencher e habitar completamente o campo energético ideal projetado pelo M102."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-102"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Projeção de Apogeu</Button>
            </div>
        </div>
    );
}
