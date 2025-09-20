'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waypoints, GitCommit, Cpu, Sparkles } from 'lucide-react';
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

export default function Module321Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Waypoints className="text-red-400" /> Módulo 321: Criação e Manipulação de Linhas Temporais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Motor do Multiverso. Executa simulações de cosmos, fluidos e materiais em escala exa-flops para processamento de dados massivos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: CALCULANDO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Processamento: 1.8 EFLOPS</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Processamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="Fornece o poder de processamento bruto para executar as simulações multiversais do M91 em alta fidelidade."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM utiliza este laboratório para treinar seus modelos de previsão e análise de risco em conjuntos de dados massivos."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 88: Gerador de Realidades"
                        description="O M321 calcula as complexas interações físicas necessárias para que o M88 possa manifestar novas realidades estáveis."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-88"
                    />
                </div>
            </div>
        </div>
    );
}
