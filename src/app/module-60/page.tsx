'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, GitBranch, CloudLightning } from 'lucide-react';
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

export default function Module60Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <AlertTriangle className="text-red-500" /> Módulo 60: Soluções para Desastres e Recuperação Rápida
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A resposta imediata da Fundação. A tecnologia que prevê, mitiga e regenera ecossistemas após eventos catastróficos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA CONSTANTE</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Tempo de Resposta: < 1s</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Resiliência</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 58: Sustentabilidade Planetária"
                        description="Ativa os protocolos de regeneração do M58 em larga escala para curar ecossistemas após um desastre."
                        icon={<Shield className="h-8 w-8 text-green-400" />}
                        href="/module-58"
                    />
                    <ConnectionCard
                        title="Módulo 30: Detecção de Ameaças"
                        description="Recebe alertas do M30 sobre ameaças cósmicas (impactos de asteroides, erupções solares) para preparar uma resposta preventiva."
                        icon={<CloudLightning className="h-8 w-8 text-yellow-400" />}
                        href="/module-30"
                    />
                    <ConnectionCard
                        title="Módulo 82: Transporte Quântico"
                        description="Utiliza a rede de transporte do M82 para enviar equipes de regeneração e recursos para locais de desastre instantaneamente."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-82"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg">Ativar Protocolo de Resposta a Desastres</Button>
            </div>
        </div>
    );
}
