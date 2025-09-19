
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Recycle, Leaf, Heart, Zap } from 'lucide-react';
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

export default function Module79Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Recycle className="text-lime-400" /> Módulo 79: Sustentabilidade Universal e Prosperidade
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião da vida. O sistema que garante o uso responsável e a regeneração contínua de todos os recursos cósmicos para uma era de prosperidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EQUILÍBRIO PERPÉTUO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Ciclo de Renovação: Ativo</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sustentabilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 80: Ecossistemas Inteligentes"
                        description="Implementa os princípios da economia circular e da regeneração nos ecossistemas inteligentes do M80."
                        icon={<Leaf className="h-8 w-8 text-green-500" />}
                        href="/module-80"
                    />
                    <ConnectionCard
                        title="Módulo 81: Energias Renováveis"
                        description="Garante que a extração de energia cósmica seja feita de forma sustentável, sem esgotar as fontes primordiais."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-81"
                    />
                    <ConnectionCard
                        title="Módulo 13: Renda Universal"
                        description="A gestão eficiente dos recursos é o que torna possível um sistema de renda universal verdadeiramente abundante e sustentável."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-13"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Gestão de Recursos</Button>
            </div>
        </div>
    );
}
