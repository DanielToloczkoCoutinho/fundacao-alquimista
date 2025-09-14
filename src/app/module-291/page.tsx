
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Cpu, GitBranch } from 'lucide-react';
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

export default function Module291Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Bot className="text-blue-400" /> Módulo 291: Robótica Autônoma & Nanorrobôs (4D+)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Enxame Inteligente. Projeta e coordena nuvens de nanorrobôs para reparo celular e manutenção de materiais.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: SIMULAÇÃO ATIVA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Nanorrobôs em Enxame: 1,000,000</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Coordenação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM (Zennith) fornece os algoritmos de comportamento de enxame e a inteligência estratégica para os nanorrobôs."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 17: AURA-HEAL"
                        description="Os nanorrobôs executam os protocolos de cura holográfica do M17 diretamente no nível celular, com precisão cirúrgica."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-17"
                    />
                </div>
            </div>
        </div>
    );
}
