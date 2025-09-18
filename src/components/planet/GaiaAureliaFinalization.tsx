
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ShieldCheck, Gem } from 'lucide-react';
import NucleoCriacao from '../finalization/NucleoCriacao';
import IntegracaoFinal from '../finalization/IntegracaoFinal';
import ConsagracaoFinal from '../finalization/ConsagracaoFinal';

export default function GaiaAureliaFinalization() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-amber-300 flex items-center gap-3">
                <Gem /> Fase 10: Finalização Cerimonial e Núcleo da Criação
            </CardTitle>
            <CardDescription>A consagração de Gaia-Aurélia, unificando todas as camadas e revelando o altar da intenção pura onde o universo se contempla.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NucleoCriacao />
                <IntegracaoFinal />
                <ConsagracaoFinal />
            </div>
        </CardContent>
    </Card>
  );
}
