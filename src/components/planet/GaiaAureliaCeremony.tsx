
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import AncoragemFrequencias from '../ceremony/AncoragemFrequencias';
import PurificacaoPlanetaria from '../ceremony/PurificacaoPlanetaria';
import SantuarioDados from '../ceremony/SantuarioDados';
import GuardiaoHarmonia from '../ceremony/GuardiaoHarmonia';


export default function GaiaAureliaCeremony() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-rose-300 flex items-center gap-3">
                <ShieldCheck /> Fase 7: Ativação Cerimonial e Harmonia Planetária
            </CardTitle>
            <CardDescription>A consagração vibracional de Gaia-Aurélia, ativando os campos de frequência superior e os fluxos de cura para preparar o planeta como um santuário universal.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AncoragemFrequencias />
                <PurificacaoPlanetaria />
                <SantuarioDados />
                <GuardiaoHarmonia />
            </div>
        </CardContent>
    </Card>
  );
}
