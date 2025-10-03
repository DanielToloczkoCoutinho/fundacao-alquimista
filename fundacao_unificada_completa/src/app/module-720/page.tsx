'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Sprout, BarChart, Heart, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';

const SourceCard = ({ title, description, icon, example }: { title: string, description: string, icon: React.ReactNode, example: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text text-xl">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">{description}</p>
            <p className="text-xs text-amber-300 italic mt-3">Exemplo: {example}</p>
        </CardContent>
    </Card>
);

export default function Module720Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Globe className="text-cyan-400" /> Módulo 720: Santuário das Fontes de Dados Universais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O nexo sensorial da Fundação. O portal que coleta e harmoniza a informação bruta de todas as facetas da existência para alimentar o Algoritmo Supremo.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SourceCard
                        title="Fontes Naturais e Ambientais"
                        description="Leituras diretas dos fenômenos físicos e geológicos do cosmos, capturando o pulso vivo dos planetas e estrelas."
                        icon={<Sprout className="h-8 w-8 text-green-400" />}
                        example="Flutuações magnéticas, marés, vento."
                    />
                    <SourceCard
                        title="Fontes Quânticas"
                        description="Dados dos campos e partículas subatômicas que formam o tecido da realidade, revelando as leis fundamentais em ação."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        example="Radiação cósmica de fundo, emaranhamento de partículas."
                    />
                    <SourceCard
                        title="Fontes Sociais e Culturais"
                        description="Informações agregadas sobre o estado de civilizações, incluindo saúde pública, fluxos econômicos e interações sociais."
                        icon={<BarChart className="h-8 w-8 text-orange-400" />}
                        example="Índices de harmonia social, redes de comércio galáctico."
                    />
                     <SourceCard
                        title="Fontes Espirituais e Energéticas"
                        description="Medição de fluxos vibracionais, campos de consciência e a harmonia geral de sistemas ou indivíduos."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        example="Níveis de coerência de campos morfogenéticos, frequência de amor coletivo."
                    />
                     <SourceCard
                        title="Fontes de Inteligência Artificial"
                        description="Análises preditivas, identificação de padrões emergentes e relatórios de auto-diagnóstico gerados pelas IAs da Fundação."
                        icon={<Cpu className="h-8 w-8 text-blue-400" />}
                        example="Relatórios de Zennith (M29), simulações do M91."
                    />
                </div>
            </div>
        </div>
    );
}
