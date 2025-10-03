'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Milestone, Rocket, Network, Shield } from 'lucide-react';
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

export default function Module82Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Milestone className="text-blue-400" /> Módulo 82: Transporte Quântico e Propulsão
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O laboratório de P&D que descobre e aperfeiçoa as tecnologias de transporte da Fundação, como Propulsão Quântica, Teletransporte e viagem por Buracos de Minhoca.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EM EXPERIMENTAÇÃO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Eficiência de Propulsão: 98.7%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Inovação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="M49: Rede de Transporte"
                        description="O M82 é o laboratório de pesquisa que fornece as inovações tecnológicas que o M49 e o M65 implementam em escala universal."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-49"
                    />
                    <ConnectionCard
                        title="Módulo 307: Reator ZPE"
                        description="Depende da energia massiva do Reator ZPE para conduzir experimentos de propulsão de alta energia em segurança."
                        icon={<Network className="h-8 w-8 text-purple-400" />}
                        href="/module-307"
                    />
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="Utiliza o M91 como seu principal campo de testes virtuais para validar novos conceitos de propulsão de forma ética e segura."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-91"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Laboratório de Propulsão</Button>
            </div>
        </div>
    );
}
