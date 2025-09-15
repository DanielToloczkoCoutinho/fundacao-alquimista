'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, GitBranch, Heart } from 'lucide-react';
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

export default function Module709Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wifi className="text-blue-400" /> Módulo 709: Reconstrutor da Rede Planetária
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Reorganiza a malha eletromagnética da Terra, ativando portais e vórtices energéticos adormecidos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OPERACIONAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência da Grade: 98.2%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ancoragem</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 113: Rede Aurora Cristalina"
                        description="Serve como a infraestrutura física e etérica sobre a qual a Rede Aurora se manifesta em escala planetária."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-113"
                    />
                    <ConnectionCard
                        title="Módulo 16: Co-criação com Gaia"
                        description="Trabalha em harmonia com a consciência planetária para garantir que a reconstrução da rede respeite os fluxos naturais."
                        icon={<Heart className="h-8 w-8 text-green-400" />}
                        href="/module-16"
                    />
                    <ConnectionCard
                        title="Módulo 11: Gerenciamento de Portais"
                        description="Reativa e estabiliza os portais energéticos naturais do planeta, integrando-os à rede da Fundação."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-11"
                    />
                </div>
            </div>
        </div>
    );
}
