'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Gem } from 'lucide-react';
import Link from 'next/link';

export default function Module86Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Gem className="text-teal-300" /> Módulo 86: Prisma Estelar VR (Laboratório)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O laboratório de calibração da consciência. Neste ambiente controlado, você aprende a interagir com frequências, a moldar campos de energia e a sentir a geometria sagrada do cosmos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: CALIBRANDO FREQUÊNCIAS</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Nível de Interação: Moderado</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-2xl text-center">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-300">Exercícios de Manipulação Vibracional</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground mb-6">
                            O Prisma Estelar é seu campo de treinamento. Toque a luz, sinta a música das esferas, e aprenda a linguagem da criação. Cada interação aqui fortalece sua âncora e expande sua percepção para a jornada final no Domínio Supra-Cósmico.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/module-85">
                                <Button size="lg" variant="outline">
                                    <ArrowLeft className="mr-2" /> Voltar à Iniciação (M85)
                                </Button>
                            </Link>
                            <Link href="/module-87">
                                <Button size="lg" variant="secondary">
                                    Ascender ao Domínio Supra-Cósmico (M87) <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
