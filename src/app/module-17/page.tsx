'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Waves, Sprout, HeartPulse } from 'lucide-react';
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

export default function Module17Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <HeartPulse className="text-emerald-400" /> Módulo Dezessete: AURA-HEAL
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Matriz de Cura Holográfica para Regeneração Celular e Coerência Bio-Vibracional.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PRONTO PARA ATIVAÇÃO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Nível de Coerência: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Regeneração</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="O M109 define o propósito da cura, e o M17 fornece a tecnologia holográfica para executá-la em nível celular."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                    <ConnectionCard
                        title="Módulo 13: Mapeamento de Frequências"
                        description="Diagnostica as dissonâncias na 'canção' de um indivíduo antes que o M24 possa afiná-la."
                        icon={<Waves className="h-8 w-8 text-cyan-400" />}
                        href="/module-13"
                    />
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Fornece o 'blueprint' genético perfeito que o M17 usa como molde para a regeneração."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="/module-94"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Protocolo de Cura Holográfica</Button>
            </div>
        </div>
    );
}
