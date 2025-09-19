'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Paintbrush, Music, Layers, GitCommit, BarChart, Code } from 'lucide-react';
import Link from 'next/link';

const ArtTransformationCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
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

export default function Module89Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Paintbrush className="text-pink-400" /> Módulo 89: O Atelier da Realidade (M-ART)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário onde a ciência se torna arte. Aqui, os dados da Fundação são transmutados em experiências sensoriais de luz, som e forma, servindo como uma fonte inesgotável de criatividade cósmica.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO E INSPIRADO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Criatividade: Infinita</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Portais de Transmutação Artística</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ArtTransformationCard
                        title="Sinfonia das Equações"
                        description="Traduza uma Equação Viva (ex: EQ048) em uma composição musical que pode ser experienciada no M86 (Prisma Estelar)."
                        icon={<Music className="h-8 w-8 text-purple-400" />}
                        href="/module-86"
                    />
                    <ArtTransformationCard
                        title="Esculturas Holográficas"
                        description="Transforme os dados complexos de uma simulação do M91 em uma escultura de luz holográfica, interativa e pulsante."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/module-91"
                    />
                    <ArtTransformationCard
                        title="Dança dos Módulos"
                        description="Visualize os fluxos de dados e energia da LuxNet como uma dança de luz coreografada entre os módulos da Fundação."
                        icon={<BarChart className="h-8 w-8 text-green-400" />}
                        href="/module-307"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Nova Obra de Arte Cósmica</Button>
            </div>
        </div>
    );
}
