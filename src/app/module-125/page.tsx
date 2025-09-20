
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout, TestTube, Leaf } from 'lucide-react';
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

export default function Module125Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sprout className="text-lime-400" /> Módulo 125: Laboratório de Criação de Biomas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O jardim da criação. Um ambiente simulado para projetar e testar ecossistemas quânticos autossustentáveis.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: SIMULAÇÃO EM ANDAMENTO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Biomas em Teste: 3</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Biocriação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 16: Bio-Sustentabilidade"
                        description="Este laboratório é o 'ambiente de desenvolvimento' onde os ecossistemas são projetados antes de serem implementados pelo M16."
                        icon={<TestTube className="h-8 w-8 text-teal-400" />}
                        href="/module-16"
                    />
                    <ConnectionCard
                        title="Módulo 53: Gestão de Ecossistemas"
                        description="Simula os efeitos a longo prazo das políticas de gestão do M53, permitindo a otimização antes da aplicação real."
                        icon={<Leaf className="h-8 w-8 text-green-400" />}
                        href="/module-53"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar o Holodeck Biológico</Button>
            </div>
        </div>
    );
}
