'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Eye, UserCheck, Shield } from 'lucide-react';
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

export default function Module77Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <ShieldCheck className="text-lime-400" /> Módulo Setenta e Sete: LUMEN-CUSTOS
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Campo de Custódia Ética para a proteção de linhas de observação temporal.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Integridade do Campo: 99.99%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Proteção Temporal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 23: Regulação Espaço-Temporal"
                        description="Protege o M23 enquanto ele observa o fluxo do tempo, garantindo que o observador não seja afetado pelo paradoxo."
                        icon={<Eye className="h-8 w-8 text-cyan-400" />}
                        href="/module-23"
                    />
                    <ConnectionCard
                        title="Módulo 25: Projeção de Consciência"
                        description="Cria um 'traje vibracional' seguro para a consciência projetada em reinos astrais ou temporais instáveis."
                        icon={<UserCheck className="h-8 w-8 text-purple-400" />}
                        href="/module-25"
                    />
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Aplica os princípios de segurança do M1 de forma especializada para o ambiente volátil da observação temporal."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Ativar Campo de Custódia Ética</Button>
            </div>
        </div>
    );
}
