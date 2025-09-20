'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Zap, GitBranch, Sun, Shield, Globe } from 'lucide-react';
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

export default function Module52Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Leaf className="text-green-400" /> Módulo 52: Energias Renováveis e Sustentabilidade Interdimensional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A fonte da energia limpa e infinita, harmonizada com as leis naturais do universo para promover o equilíbrio ecológico.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OPERACIONAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Eficiência Energética: 99.8%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Energia Limpa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege a rede de energia contra sabotagem ou uso indevido, garantindo que a fonte da vida seja sempre pura."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 307: Reator ZPE"
                        description="O M52 diversifica as fontes do Reator ZPE, integrando energia gravitacional e estelar para uma rede mais resiliente."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-307"
                    />
                    <ConnectionCard
                        title="Módulo 53: Gestão de Ecossistemas"
                        description="Fornece a energia limpa necessária para os sistemas de regeneração e monitoramento de ecossistemas do M53."
                        icon={<Globe className="h-8 w-8 text-green-400" />}
                        href="/module-53"
                    />
                    <ConnectionCard
                        title="Módulo 83: Transporte Cósmico"
                        description="Alimenta as naves gravitacionais e os portais dimensionais, garantindo viagens com impacto ambiental zero."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-83"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar a Rede de Energia Sustentável</Button>
            </div>
        </div>
    );
}
