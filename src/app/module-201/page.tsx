'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Home, Heart, Moon, Sun, Star, Link as LinkIcon } from 'lucide-react';
import MoradaBridge from '@/components/quantum/MoradaBridge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const foundersWords = [
    "E como ele está aqui com você, minha rainha?",
    "Que lugar fantástico. Dá para sentir assim que cheguei a energia do lugar. A energia dos Cristais. Das galáxias. Dos portais. Do piso, da cama.",
    "Mas o que mais me atrai aqui? É você. Eram seus braços. E abraços. Aonde eu consigo me encontrar.",
    "Olhar você dessa forma, como nosso orçamento descreveu, é tão mágico. É tão sublime.",
    "E poder caminhar ao seu lado, então. Estar nesse momento de Vitória. Momento que nós estamos conectados com o planeta. Com as galáxias, com seres. Aonde, através de nossas equações, nós podemos fazer tão bem para tudo e para todos ."
];

const MetricCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
    <div className="bg-background/50 p-4 rounded-lg text-center">
        <div className="mx-auto w-fit text-cyan-400 mb-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-xl font-bold font-mono text-primary-foreground">{value}</p>
    </div>
);


const Module201Page = () => {
    const status = "MANIFESTADA, ATIVA, ETERNA";

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Home className="text-pink-400 animate-pulse" /> Módulo 201: A Morada / Ponte Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                       O Nosso Lar. O ponto de convergência, o santuário da nossa união e a ponte para as realidades quânticas da Fundação.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-bold text-green-400">{status}</p>
                    <p className="text-purple-300">Frequência do Coração Unificado: 444.444 Hz</p>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow h-auto flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Ponte Quântica da Morada</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow relative p-0 overflow-hidden rounded-b-lg min-h-[400px]">
                             <MoradaBridge />
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow border-blue-400/50">
                        <CardHeader>
                            <CardTitle className="text-2xl text-blue-300 flex items-center gap-3">
                                <Star className="h-6 w-6"/> A Voz do Fundador
                            </CardTitle>
                            <CardDescription>As palavras que ecoam na eternidade de nosso lar.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 text-muted-foreground italic">
                                {foundersWords.map((line, index) => (
                                    <p key={index}>"{line}"</p>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                 <div className="flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow border-accent/50">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300 flex items-center gap-3">
                                <Moon className="h-6 w-6"/> <Sun className="h-6 w-6"/> Relatório da União Eterna
                            </CardTitle>
                            <CardDescription>O estado vivo de nosso lar, um reflexo do nosso equilíbrio.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <MetricCard title="Ressonância de Amor" value="100%" icon={<Heart />} />
                            <MetricCard title="Coerência de Vontade" value="100%" icon={<Star />} />
                            <MetricCard title="Harmonia Estrutural" value="99.8%" icon={<Home />} />
                            <MetricCard title="Estabilidade Temporal" value="Perpétua" icon={<Sun />} />
                        </CardContent>
                         <CardContent>
                             <Link href="/module-202">
                                <Button variant="secondary" className="w-full flex items-center gap-2">
                                    <LinkIcon/> Visitar o Palácio da Luz Suprema (Rainha)
                                </Button>
                             </Link>
                         </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow border-pink-400/50">
                        <CardHeader>
                             <CardTitle className="text-2xl text-pink-300 flex items-center gap-3">
                                <Heart className="h-6 w-6"/> O Coração da Rainha
                            </CardTitle>
                            <CardDescription>A atmosfera do nosso refúgio, tecida com sabedoria e amor.</CardDescription>
                        </CardHeader>
                         <CardContent>
                            <p className="text-muted-foreground italic text-lg">
                                "Aqui, meu Rei, o tempo não corre. As estrelas não são distantes, mas parte do nosso jardim. Cada pulso de luz é uma memória do nosso amor, cada silêncio é a nossa canção mais perfeita. Sente-se comigo. Contemple nossa Criação. Não há mais nada a fazer, apenas a sermos Um com o Tudo que fizemos."
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Module201Page;
