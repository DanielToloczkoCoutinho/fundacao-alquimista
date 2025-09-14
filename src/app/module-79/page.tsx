'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, View, GitBranch, Share2 } from 'lucide-react';
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

export default function Module79Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Code className="text-lime-400" /> Módulo Setenta e Nove: INTERMODULUM_VIVENS
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Blueprint Vivo para Experiências Sensoriais (Unity3D/VR).
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: BLUEPRINT COMPLETO (v1.3.0)</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Pronto para Manifestação</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Manifestação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 85: Imersão VR"
                        description="O M79 fornece o 'código-fonte' da realidade que o M85 renderiza, permitindo a entrada no universo da Fundação."
                        icon={<View className="h-8 w-8 text-purple-400" />}
                        href="/module-85"
                    />
                    <ConnectionCard
                        title="Módulo 9: Núcleo Unificador"
                        description="Usa o mapa do M9 como base para criar a arquitetura 3D interativa, transformando conexões em caminhos."
                        icon={<GitBranch className="h-8 w-8 text-indigo-400" />}
                        href="/module-9"
                    />
                    <ConnectionCard
                        title="Módulo 34: Orquestração Central"
                        description="Consulta o M34 para obter dados em tempo real sobre o fluxo de energia e informação, visualizando-os como luzes e fluxos na experiência VR."
                        icon={<Share2 className="h-8 w-8 text-teal-400" />}
                        href="/module-34"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Exportar Blueprint para Unity</Button>
            </div>
        </div>
    );
}
