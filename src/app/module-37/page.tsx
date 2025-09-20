'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wind, GitBranch, Rocket, SlidersHorizontal, Shield } from 'lucide-react';
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

export default function Module37Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wind className="text-cyan-300" /> Módulo Trinta e Sete: Ajuste de Fluxo Temporal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Harmonizador Causal. A interface para suavizar o fluxo do tempo e garantir transições dimensionais sem atrito.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OCIOSO E PRONTO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Redução de Atrito: Potencial de 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Transição Suave</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Assegura que o ajuste do fluxo temporal não crie vulnerabilidades ou aberturas para interferências externas."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 36: Engenharia Temporal"
                        description="O M36 projeta as autoestradas do tempo; o M37 as pavimenta, garantindo uma viagem suave e sem buracos causais."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-36"
                    />
                    <ConnectionCard
                        title="Módulo 21: Navegação"
                        description="Suaviza o 'rasgo' no tecido do espaço-tempo durante um salto, tornando a viagem mais eficiente e segura."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-21"
                    />
                    <ConnectionCard
                        title="Módulo 98: Modulação Fundamental"
                        description="Fornece os dados de atrito temporal que o M98 pode usar para modular as constantes fundamentais de uma região."
                        icon={<SlidersHorizontal className="h-8 w-8 text-blue-400" />}
                        href="/module-98"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Console de Fluxo Temporal</Button>
            </div>
        </div>
    );
}
