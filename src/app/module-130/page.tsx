'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, GitBranch, Shield } from 'lucide-react';
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

export default function Module130Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rocket className="text-orange-400" /> Módulo 130: Escola de Navegação Cerimonial
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Onde Guardiões aprendem a arte da viagem interdimensional guiada, utilizando portais e corredores quânticos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SIMULAÇÃO DE VOO ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Pilotos em Treinamento: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Navegação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 21: Navegação Interdimensional"
                        description="Este é o centro de treinamento para os pilotos que irão operar o Módulo 21, aprendendo a teoria antes da prática."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-21"
                    />
                    <ConnectionCard
                        title="Módulo 11: Gerenciamento de Portais"
                        description="Ensina os protocolos de abertura, fechamento e estabilização de portais, preparando os Guardiões para operar o M11."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-11"
                    />
                    <ConnectionCard
                        title="Módulo 26: Supervisão de Travessias"
                        description="Forma os futuros controladores de tráfego cósmico, que irão operar o M26 e garantir a segurança de todas as viagens."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-26"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Entrar no Simulador de Voo</Button>
            </div>
        </div>
    );
}
