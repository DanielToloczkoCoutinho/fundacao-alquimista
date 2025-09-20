'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Recycle, Heart, Zap, Shield, Sprout, BrainCircuit } from 'lucide-react';
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

export default function Module53Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Leaf className="text-lime-400" /> Módulo 53: Gestão de Ecossistemas e Biodiversidade
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião da vida. A inteligência que monitora, protege e regenera a biodiversidade em todos os mundos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: HARMONIA BIÓTICA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Diversidade Genética: 98.7%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Ecológicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Assegura que os ecossistemas estejam protegidos de ameaças externas, garantindo um ambiente seguro para a vida florescer."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 52: Energias Renováveis"
                        description="Fornece a energia limpa para sistemas de purificação e monitoramento, criando um ciclo de sustentabilidade."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-52"
                    />
                    <ConnectionCard
                        title="Módulo 16: Biossíntese"
                        description="O M16 projeta os ecossistemas, e o M53 os gerencia, garantindo que a criação seja mantida em equilíbrio."
                        icon={<Sprout className="h-8 w-8 text-teal-400" />}
                        href="/module-16"
                    />
                    <ConnectionCard
                        title="Módulo 54: Agricultura"
                        description="Fornece dados sobre a saúde do solo e as condições climáticas para otimizar a produção sustentável de alimentos."
                        icon={<Leaf className="h-8 w-8 text-lime-400" />}
                        href="/module-54"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar o Monitor de Biosfera Global</Button>
            </div>
        </div>
    );
}
