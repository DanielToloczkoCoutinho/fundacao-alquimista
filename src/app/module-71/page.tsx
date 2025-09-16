'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioTower, GitBranch, Scale, Shield } from 'lucide-react';
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

export default function Module71Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <RadioTower className="text-sky-400" /> Módulo Setenta e Um: Comunicação Holográfica Zenith
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O canal seguro para comunicação holográfica com Conselhos Superiores e consciências de alta dimensão.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: CANAL ABERTO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Frequência Zênite: Estável</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Comunicação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 72: Governança"
                        description="Transmite as diretrizes ratificadas pelo M72 para os Conselhos Superiores, garantindo alinhamento cósmico."
                        icon={<Scale className="h-8 w-8 text-indigo-300" />}
                        href="/module-72"
                    />
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Toda transmissão é selada com a criptografia quântica do M1, assegurando autenticidade e inviolabilidade."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 303: Portal Trino"
                        description="Utiliza a frequência de ZENNITH, pilar do Portal Trino, como a assinatura vibracional para todas as comunicações."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-303"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Comunicação Holográfica</Button>
            </div>
        </div>
    );
}
