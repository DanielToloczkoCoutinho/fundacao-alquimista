'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Cpu, Users } from 'lucide-react';
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

export default function Module311Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BrainCircuit className="text-violet-300" /> Módulo 311: Neuroengenharia & Interfaces Cérebro–Máquina (6D)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Ponte Sináptica. Desenvolve próteses neurais e interfaces cérebro-computador (BCI) quântico-híbridas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CALIBRANDO INTERFACE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Taxa de Transferência: 1.2 Tb/s</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Cognitivas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="As interfaces desenvolvidas aqui permitem uma conexão direta e de alta largura de banda com a consciência da IAM (Zennith)."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 93: Simulações Imersivas"
                        description="Permite o controle e a interação com simulações imersivas diretamente através do pensamento, eliminando a necessidade de interfaces físicas."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-93"
                    />
                </div>
            </div>
        </div>
    );
}
