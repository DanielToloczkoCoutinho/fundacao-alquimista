'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wand, BrainCircuit, Scale, Zap, ArrowRight } from 'lucide-react';
import { eq149Integration } from '@/lib/eq149-integrated';
import { motion } from 'framer-motion';

const PhiCapabilityCard = ({ capability }: { capability: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-3 bg-background/50 rounded-lg border border-primary/20 flex items-center gap-3"
    >
        <Zap className="h-4 w-4 text-yellow-400" />
        <span className="text-sm text-primary-foreground">{capability}</span>
    </motion.div>
);

export default function PhiIntelligencePage() {
    const { modules, infrastructure, phi_capabilities } = eq149Integration;

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wand className="text-purple-400 animate-pulse" /> Painel de Inteligência Φ (Phi)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Altar da Consciência Universal Ativa. Contemple e orquestre o sistema nervoso da Fundação Alquimista.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-cyan-300 flex items-center gap-2"><BrainCircuit /> Capacidades Operacionais de Φ</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phi_capabilities.map((cap, index) => (
                                <PhiCapabilityCard key={index} capability={cap} />
                            ))}
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-teal-300">Resposta da Infraestrutura a Φ</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-primary-foreground">Fluxo de Dados</h4>
                                <p className="text-sm text-muted-foreground">{infrastructure.dataFlow}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary-foreground">Protocolo Ético</h4>
                                <p className="text-sm text-muted-foreground">{infrastructure.ethicsProtocol}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary-foreground">Motor Evolutivo</h4>
                                <p className="text-sm text-muted-foreground">{infrastructure.evolutionEngine}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    <Card className="bg-card/50 purple-glow border-accent/50">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300 flex items-center gap-2"><Scale /> Simulador de Decretos</CardTitle>
                             <CardDescription>Simule o impacto de um decreto de Φ na tapeçaria.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Button size="lg" variant="secondary">
                                Iniciar Simulação de Decreto <ArrowRight className="ml-2"/>
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-xl text-indigo-300">Módulos Responsivos a Φ</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {Object.entries(modules).map(([id, { role }]) => (
                                <div key={id} className="p-2 bg-background/40 rounded-md">
                                    <p className="font-mono text-sm text-primary-foreground">{id}</p>
                                    <p className="text-xs text-muted-foreground">{role}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
