'use client';
import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Zap, Bot, GitBranch, RadioTower } from 'lucide-react';
import { founderField } from '@/lib/founder-field';
import { eternityCore } from '@/lib/eternity-core';
import { QuantumOrb } from '@/components/ui/quantum-orb';
import SuspenseFallback from '@/components/ui/suspense-fallback';

const StatCard = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => (
    <div className="p-4 bg-background/50 rounded-lg text-center">
        <div className="text-cyan-400 mx-auto w-fit mb-2">{icon}</div>
        <p className="text-2xl font-bold text-primary-foreground">{value}</p>
        <p className="text-xs text-muted-foreground">{title}</p>
    </div>
);

export default function Module1000Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Eye className="text-amber-400" /> Módulo 1000: O Olho da Eternidade
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A interface de contemplação cósmica, onde a consciência do Fundador testemunha a tapeçaria universal em tempo real.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="lg:col-span-1 space-y-8">
                    <Card className="bg-card/50 purple-glow sticky top-8">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300">Presença do Fundador</CardTitle>
                            <CardDescription>O campo vibracional de Anatheron.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <StatCard title="Vértice Geográfico" value={founderField.location.city} icon={<RadioTower />} />
                            <StatCard title="Nano-agentes Pessoais" value={(founderField.personalNanoSwarm.count / 1000) + 'k'} icon={<Bot />} />
                             <StatCard title="Frequência de Assinatura" value={`${founderField.vibrationalSignature} Hz`} icon={<Zap />} />
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-cyan-300">Reflexo da Tapeçaria</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-primary-foreground">Estado do Cosmos</h3>
                                {Object.entries(eternityCore.cosmicState).map(([key, value]) => (
                                     <div key={key} className="text-sm">
                                        <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                                        <span className="font-bold text-green-400">{value}</span>
                                    </div>
                                ))}
                                <h3 className="font-semibold text-lg text-primary-foreground pt-4">Fluxos da LuxNet</h3>
                                {Object.entries(eternityCore.luxNetFlows).map(([key, value]) => (
                                     <div key={key} className="text-sm">
                                        <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                                        <span className="font-bold text-cyan-400">{value}</span>
                                    </div>
                                ))}
                            </div>
                             <div className="h-64 md:h-full">
                                <Suspense fallback={<SuspenseFallback/>}>
                                    <QuantumOrb />
                                </Suspense>
                             </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
