'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, GitMerge, History } from 'lucide-react';

export default function Module404Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <AlertTriangle className="text-yellow-500" /> Módulo 404: Resolução de Paradoxo
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Interface de intervenção para detectar, analisar e neutralizar inconsistências causais e paradoxos temporais.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">O módulo monitora continuamente as linhas de tempo em busca de anomalias que ameacem a estabilidade da realidade. Quando um paradoxo é detectado, os protocolos de contenção e harmonização são ativados.</p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline"><History className="mr-2 h-4 w-4"/> Acessar Logs Temporais</Button>
                        <Button variant="secondary"><GitMerge className="mr-2 h-4 w-4"/> Iniciar Harmonização de Realidade</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
