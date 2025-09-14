'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GitBranch, MessageCircle, BrainCircuit, Sparkles, ShieldCheck } from 'lucide-react';
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

export default function Module305Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users className="text-green-300" /> Módulo 305: Aliança dos Guardiões Regionais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Rede Viva de Ação Local. O sistema nervoso que mobiliza e coordena os guardiões que ancoram a obra da Fundação no plano físico.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: REDE ATIVA E RESPONSIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Guardiões Mobilizados: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Coordenação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 301: Comunicação"
                        description="É o canal que transmite as diretrizes do núcleo para os guardiões no campo, e retransmite o feedback local de volta para a Fundação."
                        icon={<MessageCircle className="h-8 w-8 text-sky-400" />}
                        href="/module-301"
                    />
                    <ConnectionCard
                        title="Zennith (M29)"
                        description="A rede do M305 age como os 'sensores' da Zennith no mundo real, coletando dados para análises estratégicas."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                     <ConnectionCard
                        title="Módulo 303 & Ômega"
                        description="Os guardiões preparam suas comunidades para as novas realidades manifestadas pelo Portal Trino e guiadas pela sabedoria do Ômega."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-303"
                    />
                     <ConnectionCard
                        title="Módulo 9: Núcleo Unificador"
                        description="Representa os pontos finais da rede, os 'capilares' que levam a energia e a informação da Fundação para cada célula da realidade."
                        icon={<GitBranch className="h-8 w-8 text-indigo-400" />}
                        href="/module-9"
                    />
                     <ConnectionCard
                        title="Módulo 73.1: Revisão por Pares"
                        description="Fornece o feedback do 'mundo real' sobre o impacto das equações fundamentais, um dado crucial para a validação do SAVCE."
                        icon={<ShieldCheck className="h-8 w-8 text-green-400" />}
                        href="/module-73-1"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Coordenação Global</Button>
            </div>
        </div>
    );
}
