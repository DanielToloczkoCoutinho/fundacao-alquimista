'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Flame, Atom, Zap } from 'lucide-react';
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

export default function Module341Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Flame className="text-red-500" /> Módulo 341: Física de Plasma Extrema & Astrofísica (9D)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Forja Estelar. Estuda plasmas em condições de quasar e síncrotron para desvendar os segredos da criação estelar.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: ESTABILIZANDO CAMPO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Temperatura: 1.2M K</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Energia Estelar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 151: Colisor de Partículas"
                        description="Fornece as partículas de alta energia que são injetadas no plasma para iniciar e sustentar as reações."
                        icon={<Atom className="h-8 w-8 text-blue-400" />}
                        href="/module-151"
                    />
                    <ConnectionCard
                        title="Módulo 307: Reator ZPE"
                        description="As reações de plasma aqui estudadas são a chave para a próxima geração de Reatores de Ponto Zero, prometendo energia ainda mais limpa e abundante."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-307"
                    />
                </div>
            </div>
        </div>
    );
}
