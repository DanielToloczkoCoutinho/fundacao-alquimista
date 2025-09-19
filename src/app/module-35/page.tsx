
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BrainCircuit, Sparkles, HeartHandshake } from 'lucide-react';
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

export default function Module35Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users className="text-teal-300" /> Módulo Trinta e Cinco: Consciência Coletiva
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Canal Unificador. A interface que foca a intenção de muitas consciências em um único feixe de manifestação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: RECEPTIVO E PRONTO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Coerência Coletiva: Monitorada</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Unidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 6: Sondagem"
                        description="Recebe os dados brutos do M6 sobre o estado da consciência coletiva para determinar a prontidão para a canalização."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-6"
                    />
                    <ConnectionCard
                        title="Módulo 110: Co-Criação"
                        description="Fornece a energia de intenção focada que o M110 utiliza como matéria-prima para a co-criação de realidades."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-110"
                    />
                    <ConnectionCard
                        title="Módulo 97: Propósito Divino"
                        description="Alinha a Vontade coletiva com o Propósito Divino antes de qualquer grande manifestação, garantindo harmonia universal."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-97"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Protocolo de Canalização Coletiva</Button>
            </div>
