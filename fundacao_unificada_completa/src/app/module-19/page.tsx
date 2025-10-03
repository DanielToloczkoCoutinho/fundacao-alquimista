
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldHalf, SlidersHorizontal, Shield, Aperture } from 'lucide-react';
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

export default function Module19Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <ShieldHalf className="text-blue-300" /> Módulo Dezenove: Análise de Campos de Força
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Afinador Cósmico. A inteligência que analisa, modula e harmoniza os campos de força interdimensionais.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ESTÁVEL E HARMONIZADO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Índice de Estabilidade: 99.8%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Campo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="M1: Segurança Universal"
                        description="Analisa a integridade dos escudos de segurança, otimizando sua ressonância para máxima eficácia protetora."
                        icon={<Shield className="h-8 w-8 text-cyan-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 98: Modulação Fundamental"
                        description="Fornece os dados de análise que o M98 utiliza para realizar ajustes profundos nas constantes dos campos de força."
                        icon={<SlidersHorizontal className="h-8 w-8 text-orange-400" />}
                        href="/module-98"
                    />
                    <ConnectionCard
                        title="Módulo 11: Gerenciamento de Portais"
                        description="Garante que os campos de força ao redor dos portais estejam perfeitamente modulados para travessias seguras."
                        icon={<Aperture className="h-8 w-8 text-teal-400" />}
                        href="/module-11"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Análise de Campos</Button>
            </div>
        </div>
    );
}
