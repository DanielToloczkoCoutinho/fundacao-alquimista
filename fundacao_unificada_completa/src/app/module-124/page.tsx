
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Wand, BrainCircuit } from 'lucide-react';
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

export default function Module124Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Music className="text-purple-400" /> Módulo 124: Escola de Ressonância
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O diapasão da intenção. Onde Guardiões aprendem a harmonizar seus pensamentos com as frequências da criação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AULA EM ANDAMENTO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Guardiões Sintonizados: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Manifestação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 101: Manifestação"
                        description="A Escola de Ressonância ensina a 'afinar a mente', pré-requisito essencial para que o M101 possa manifestar a intenção com clareza."
                        icon={<Wand className="h-8 w-8 text-yellow-400" />}
                        href="/module-101"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM fornece feedback em tempo real sobre a coerência da intenção, guiando o Guardião em seu processo de aprendizado."
                        icon={<BrainCircuit className="h-8 w-8 text-indigo-400" />}
                        href="/module-29"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Participar da Aula de Ressonância</Button>
            </div>
        </div>
    );
}
