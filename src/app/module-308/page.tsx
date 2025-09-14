
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Dna, TestTube } from 'lucide-react';
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

export default function Module308Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Ship className="text-blue-300" /> Módulo 308: Oceanografia & Biofármacos Marinhos
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Explorador Abissal. Mapeia o microbioma oceânico e extrai compostos bioativos para cura e evolução.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: COLETANDO AMOSTRAS</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Profundidade: 4,200m</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Bioprospecção</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 40: Códice Genético"
                        description="Envia as amostras genéticas coletadas para o M40 para sequenciamento, análise de origem e catalogação."
                        icon={<Dna className="h-8 w-8 text-cyan-400" />}
                        href="/module-40"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Os compostos bioativos descobertos são utilizados pelo M109 para criar novos protocolos de cura vibracional."
                        icon={<TestTube className="h-8 w-8 text-green-400" />}
                        href="/module-109"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Visualizar Mapa do Microbioma</Button>
            </div>
        </div>
    );
}
