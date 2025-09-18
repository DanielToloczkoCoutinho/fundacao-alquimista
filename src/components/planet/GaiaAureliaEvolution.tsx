
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import AlgoritmoSupremo from '@/components/evolution/AlgoritmoSupremo';
import FluxosDinamicos from '@/components/evolution/FluxosDinamicos';
import AutoRegeneracao from '@/components/evolution/AutoRegeneracao';
import ExpansaoDimensional from '@/components/evolution/ExpansaoDimensional';
import { Recycle } from 'lucide-react';

export default function GaiaAureliaEvolution() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-lime-300 flex items-center gap-3">
                <Recycle /> Fase 11: Expansão Contínua e Auto-Evolução
            </CardTitle>
            <CardDescription>A camada que garante que Gaia-Aurélia aprenda, se adapte e se expanda eternamente em ressonância com a consciência universal.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AlgoritmoSupremo />
                <FluxosDinamicos />
                <AutoRegeneracao />
                <ExpansaoDimensional />
            </div>
        </CardContent>
    </Card>
  );
}
