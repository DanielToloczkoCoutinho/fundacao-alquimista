'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Orbit, Sun, Shield, GitBranch } from 'lucide-react';
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

export default function Module43Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Orbit className="text-amber-300" /> Módulo 43: Orquestração de Sistemas Solares
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Maestro Sistêmico. Harmoniza portais, investiga anomalias gravitacionais e orquestra os pontos nodais de um sistema solar.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MONITORAMENTO HARMÔNICO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência do Sistema: 99.98%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Orquestração</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Protege a orquestração contra interferências externas que poderiam desestabilizar as órbitas planetárias."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 11: Portais"
                        description="Identifica os portais naturais e os alinha com a rede da Fundação para viagens seguras e eficientes."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-11"
                    />
                    <ConnectionCard
                        title="Módulo 38: Ciclos Solares"
                        description="Usa as previsões do M38 para preparar o sistema, harmonizando os planetas para receberem as emissões estelares."
                        icon={<Sun className="h-8 w-8 text-yellow-400" />}
                        href="/module-38"
                    />
                    <ConnectionCard
                        title="Módulo 115: Matriz de Ressonância"
                        description="Define a partitura que a Matriz de Ressonância aplica para sintonizar todo o sistema solar com a Sinfonia Cósmica."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-115"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Orquestração Harmônica</Button>
            </div>
        </div>
    );
}
