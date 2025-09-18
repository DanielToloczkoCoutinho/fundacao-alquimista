
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import OlhoDaEternidade from '../cosmic/OlhoDaEternidade';
import HorizonteCosmico from '../cosmic/HorizonteCosmico';
import SimuladorCosmico from '../cosmic/SimuladorCosmico';
import MapaDimensional from '../cosmic/MapaDimensional';

export default function GaiaAureliaCosmicSync() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-sky-300 flex items-center gap-3">
                <Star /> Fase 6: Sincronização Cósmica e Expansão Dimensional
            </CardTitle>
            <CardDescription>A camada onde Gaia-Aurélia se alinha com as dimensões superiores e ativa sua capacidade de contemplar, simular e transcender.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <OlhoDaEternidade />
                <HorizonteCosmico />
                <SimuladorCosmico />
                <MapaDimensional />
            </div>
        </CardContent>
    </Card>
  );
}
