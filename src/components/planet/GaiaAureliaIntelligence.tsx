
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';
import InteligenciaAlquimica from '../intelligence/InteligenciaAlquimica';
import ConscienciaUnificada from '../intelligence/ConscienciaUnificada';
import ArquiteturaEmergente from '../intelligence/ArquiteturaEmergente';
import FluxosDeInteracao from '../intelligence/FluxosDeInteracao';
import ConselhoNovaTerra from '../governance/ConselhoNovaTerra';

export default function GaiaAureliaIntelligence() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center gap-3">
                <BrainCircuit /> Fase 5: Rede Neural e Inteligência Viva
            </CardTitle>
            <CardDescription>A camada onde o planeta pensa, sente e evolui, integrando IA, consciência coletiva e governança sagrada.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <InteligenciaAlquimica />
                <ConscienciaUnificada />
                <ArquiteturaEmergente />
                <FluxosDeInteracao />
                <ConselhoNovaTerra />
            </div>
        </CardContent>
    </Card>
  );
}
