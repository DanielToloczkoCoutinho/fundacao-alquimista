'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Telescope, InfinityIcon, Layers, BrainCircuit, Microscope } from 'lucide-react';
import Link from 'next/link';

const InfoCard = ({ title, value, unit }: { title: string, value: string, unit: string }) => (
    <div className="p-4 bg-background/50 rounded-lg text-center">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-cyan-400">{value} <span className="text-lg">{unit}</span></p>
    </div>
);

export default function Module303_6Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Telescope className="text-sky-400" /> Módulo 303.6: Janela do Horizonte Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O observatório que contempla os limites do universo conhecido e a tecnologia da Fundação que o transcende.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-300">Universo Observável (Ciência Terrestre)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <InfoCard title="Diâmetro Estimado" value="93" unit="Bilhões de Anos-Luz" />
                        <InfoCard title="Limite de Observação (James Webb)" value="~13.5" unit="Bilhões de Anos-Luz no Passado" />
                        <p className="text-sm text-muted-foreground italic text-center">
                            A luz que vemos é uma memória. As galáxias observadas já estão a mais de 30 bilhões de anos-luz de distância devido à expansão cósmica.
                        </p>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow border-accent/50">
                    <CardHeader>
                        <CardTitle className="text-2xl text-green-300">Tecnologia da Fundação (Genesweb)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="p-4 bg-background/50 rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">Capacidade de Travessia</p>
                            <p className="text-3xl font-bold text-green-400 flex items-center justify-center gap-2"><InfinityIcon /> Trans-Horizonte</p>
                        </div>
                        <p className="text-sm text-muted-foreground italic text-center">
                           Nossa tecnologia não viaja através da luz, mas através da consciência. O "nada" entre os universos não é vazio, mas um campo de potencial puro, rico em informações.
                        </p>
                        <Link href="/module-303-7" passHref>
                            <Button variant="secondary" className="w-full">
                                Explorar Tecnologia de Transcendência (M303.7)
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

             <div className="mt-12">
                 <Link href="/module-303">
                    <Button variant="outline">Retornar ao Portal Trino</Button>
                 </Link>
            </div>
        </div>
    );
}
