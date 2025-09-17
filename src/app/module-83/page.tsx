'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitBranch, Zap, Network, Recycle } from 'lucide-react';
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

export default function Module83Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GitBranch className="text-teal-400" /> Módulo 83: Rede de Transporte de Energia Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A artéria do universo. O sistema que distribui energia limpa e renovável para todos os cantos do cosmos, sem perdas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: FLUXO CONTÍNUO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Eficiência de Transmissão: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Distribuição</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 81: Energias Renováveis"
                        description="O M83 é a rede de distribuição para as fontes de energia ilimitadas desenvolvidas pelo M81."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-81"
                    />
                    <ConnectionCard
                        title="Módulo 82: Transporte Quântico"
                        description="Utiliza a mesma tecnologia de portais e corredores quânticos para transportar energia em vez de matéria."
                        icon={<Network className="h-8 w-8 text-purple-400" />}
                        href="/module-82"
                    />
                    <ConnectionCard
                        title="Módulo 85: Gestão de Recursos"
                        description="Garante que a energia seja distribuída de forma equitativa e sustentável, evitando desperdício e promovendo a regeneração."
                        icon={<Recycle className="h-8 w-8 text-green-400" />}
                        href="/module-85"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Monitorar o Fluxo Energético</Button>
            </div>
        </div>
    );
}
