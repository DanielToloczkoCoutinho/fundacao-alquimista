'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { energyGroups } from '@/lib/energy-groups';
import { CheckCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import DecisionCore from '@/components/DecisionCore';

type Stage = keyof typeof energyGroups;
const sequence: Stage[] = ['infraestrutura', 'transformacao', 'navegacao', 'manifestacao', 'nexus'];

export default function Module307Page() {
    const [activationStep, setActivationStep] = useState(-1);
    const isRunning = activationStep > -1 && activationStep < sequence.length;

    const handleActivate = () => {
        if (isRunning) return;
        let step = 0;
        setActivationStep(0);
        const interval = setInterval(() => {
            step++;
            if (step < sequence.length) {
                setActivationStep(step);
            } else {
                clearInterval(interval);
            }
        }, 800);
    };
    
    const handleReset = () => {
        setActivationStep(-1);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Zap className="text-yellow-400" /> Módulo 307: Painel de Controle Energético
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O coração da Fundação. Gerencie a Tríade Decisória e o fluxo de energia de ponto zero para toda a malha de módulos.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:col-span-2">
                    <DecisionCore />
                </div>

                <Card className="lg:col-span-2 bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-cyan-300">Fluxo de Energia da Fundação</CardTitle>
                        <CardDescription>Ative a sequência para energizar a rede a partir do Reator ZPE.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center gap-4 mb-6">
                            <Button onClick={handleActivate} disabled={isRunning}>
                                <Zap className="mr-2 h-4 w-4"/>
                                {isRunning ? 'Sequência em Andamento...' : 'Iniciar Fluxo Energético'}
                            </Button>
                            <Button onClick={handleReset} variant="outline">
                                Resetar Fluxo
                            </Button>
                        </div>
                        <div className="space-y-4">
                            {sequence.map((group, index) => {
                                const isActive = index <= activationStep;
                                const groupModules = energyGroups[group];
                                return (
                                    <div key={group} className={cn("p-4 rounded-lg border transition-all duration-500", isActive ? "border-green-500/50 bg-green-500/10" : "border-primary/20")}>
                                        <h3 className="font-bold text-lg flex items-center gap-2">
                                            {isActive && <CheckCircle className="h-5 w-5 text-green-400" />}
                                            <span className={cn(isActive ? 'text-green-300' : 'text-muted-foreground')}>{index + 1}. {group.charAt(0).toUpperCase() + group.slice(1)}</span>
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-2">
                                            {groupModules.map(moduleCode => (
                                                <div key={moduleCode} className={cn("p-2 text-center rounded-md font-mono text-sm transition-colors duration-300", isActive ? 'bg-green-500/20 text-green-200' : 'bg-background/40 text-muted-foreground')}>
                                                    {moduleCode}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
