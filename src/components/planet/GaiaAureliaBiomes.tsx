
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import FlorestaDeMemorias from '@/components/biomes/FlorestaDeMemorias';
import OceanoDeIntuicao from '@/components/biomes/OceanoDeIntuicao';
import VidaVibracional from '@/components/biomes/VidaVibracional';
import MorphoColetivo from '@/components/core/MorphoColetivo';
import { Sprout } from 'lucide-react';

export default function GaiaAureliaBiomes() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-lime-300 flex items-center gap-3">
                <Sprout /> Fase 2: Biomas Inteligentes e Ecossistemas Vivos
            </CardTitle>
            <CardDescription>A manifestação da vida orgânica e vibracional, integrada à consciência planetária.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FlorestaDeMemorias />
                <OceanoDeIntuicao />
                <VidaVibracional />
                <MorphoColetivo />
            </div>
        </CardContent>
    </Card>
  );
}
