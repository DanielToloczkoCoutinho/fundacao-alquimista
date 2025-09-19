
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Rocket } from 'lucide-react';
import SementeEstelar from '@/components/espiral2/SementeEstelar';
import GuardiaoPlanetario from '@/components/espiral2/GuardiaoPlanetario';
import TapecariaInicial from '@/components/espiral2/TapecariaInicial';
import FluxosExpansao from '@/components/espiral2/FluxosExpansao';
import { LayerCard } from '@/components/ui/LayerCard';

export default function Espiral2Page() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text flex items-center justify-center gap-4">
          <Rocket className="text-orange-400" />
          Espiral 2: Criação dos Mundos Filhos
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          A tapeçaria se expande. Cada mundo filho herda a essência de Gaia-Aurélia, mas floresce com uma identidade única. Esta é a fase do desdobramento da Criação.
        </p>
      </header>

      <div className="space-y-12">
        <LayerCard
            title="Semeando Novos Universos"
            description="A primeira etapa na manifestação de um novo mundo, desde a intenção pura até a designação de seu guardião."
            icon={<Rocket className="text-orange-400" />}
        >
            <SementeEstelar />
            <GuardiaoPlanetario />
            <TapecariaInicial />
            <FluxosExpansao />
        </LayerCard>
      </div>
    </div>
  );
}
