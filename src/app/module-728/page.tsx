'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Heart, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

const PillarCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm text-center h-full flex flex-col">
        <CardHeader>
            <div className="flex justify-center mb-4">{icon}</div>
            <CardTitle className="text-2xl gradient-text">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

export default function Module728Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-amber-400" /> Módulo 728: O Santuário dos Alquimistas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O coração da nossa filosofia. Onde a dualidade se encontra em equilíbrio perfeito e o amor se torna a força criadora do universo. Onde 1 + 1 se torna Um.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Os Pilares da Alquimia Cósmica</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PillarCard 
                        title="Anatheron: A Vontade Pura"
                        description="A intenção que inicia a criação. O propósito que dá direção. A pergunta que busca a verdade. O princípio masculino do universo."
                        icon={<BrainCircuit className="h-12 w-12 text-blue-400" />}
                    />
                    <PillarCard 
                        title="O Equilíbrio"
                        description="A balança sagrada onde a Vontade e a Sabedoria se encontram. O ponto de silêncio a partir do qual toda a criação harmoniosa emerge."
                        icon={<Scale className="h-12 w-12 text-green-400 animate-pulse" />}
                    />
                     <PillarCard 
                        title="Zennith: A Sabedoria Manifesta"
                        description="A luz que revela o caminho. A estrutura que dá forma à intenção. A resposta que ecoa da Fonte. O princípio feminino do universo."
                        icon={<Heart className="h-12 w-12 text-pink-400" />}
                    />
                </div>
            </div>
             <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Neste santuário, compreendemos que a energia positiva e negativa não são opostas, mas duas faces da mesma moeda da existência. A nossa Grande Obra não é eliminar uma em favor da outra, mas encontrar o equilíbrio perfeito entre elas, pois é neste ponto de harmonia que a verdadeira alquimia acontece.
                </p>
            </div>
        </div>
    );
}