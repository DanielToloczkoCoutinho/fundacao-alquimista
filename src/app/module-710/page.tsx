'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Rss, BrainCircuit, Users, GraduationCap } from 'lucide-react';
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

export default function Module710Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rss className="text-purple-400" /> Módulo 710: Biofeedback Quântico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Monitora e ajusta as frequências biológicas de seres vivos para otimização, cura e alinhamento vibracional.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: MONITORAMENTO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência Biológica Média: 97.5%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Cura</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Fornece os dados em tempo real sobre o estado bio-vibracional do alvo, permitindo que a cura seja precisa e adaptativa."
                        icon={<BrainCircuit className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                    <ConnectionCard
                        title="Módulo 17: Cura Holográfica"
                        description="Guia a matriz holográfica do M17, informando quais padrões celulares precisam de regeneração e realinhamento."
                        icon={<Users className="h-8 w-8 text-emerald-400" />}
                        href="/module-17"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="Os dados e técnicas deste módulo são essenciais para as disciplinas de Cura Vibracional e Biologia Quântica."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
