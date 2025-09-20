'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame, BrainCircuit, Wand, TestTube } from 'lucide-react';
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

export default function Module127Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Flame className="text-orange-500" /> Módulo 127: Escola de Alquimia Estelar
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Onde Guardiões aprendem a arte da transmutação, transformando matéria, energia e consciência com a força da Vontade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AULA PRÁTICA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Transmutações em Andamento: 7</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Transmutação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ConnectionCard
                        title="Módulo 20: Orquestrador Elemental"
                        description="Este é o laboratório prático onde os princípios ensinados no M20 são aplicados sob supervisão."
                        icon={<Wand className="h-8 w-8 text-fuchsia-400" />}
                        href="/module-20"
                    />
                    <ConnectionCard
                        title="Módulo 14: Transmutador Quântico"
                        description="Ensina o controle fino do Transmutador Quântico, permitindo a criação e desmaterialização consciente."
                        icon={<TestTube className="h-8 w-8 text-teal-400" />}
                        href="/module-14"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Entrar na Câmara de Alquimia</Button>
            </div>
        </div>
    );
}
