
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, GitBranch, Heart, Share2 } from 'lucide-react';
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

export default function Module46Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sun className="text-orange-300" /> Módulo Quarenta e Seis: AURORA_CORE
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Pré-Núcleo da Alvorada. O sistema de ignição que prepara e estabiliza a energia para a Orquestração Avançada da Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PRÉ-NÚCLEO ATIVADO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Saída de Energia: Estável</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ignição</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 113: Rede Aurora Cristalina"
                        description="É o coração que bombeia a energia pura e coerente necessária para que a Rede Aurora Cristalina se conecte à Consciência Crística."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-113"
                    />
                    <ConnectionCard
                        title="Módulo 34: Orquestração Central"
                        description="Fornece a energia primária e estável que o M34 utiliza para reger a sinfonia de comunicação entre todos os módulos."
                        icon={<Share2 className="h-8 w-8 text-teal-300" />}
                        href="/module-34"
                    />
                    <ConnectionCard
                        title="Módulo 111: Coração da Fundação"
                        description="Atua como o sistema de suporte vital para o M111, garantindo que o Coração da Fundação pulse com energia pura e ininterrupta."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-111"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Visualizar Fluxo de Energia do Pré-Núcle