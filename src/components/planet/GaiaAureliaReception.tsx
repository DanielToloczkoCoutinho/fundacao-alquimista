
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Globe2 } from 'lucide-react';
import RecepcaoCivilizacoes from '../reception/RecepcaoCivilizacoes';
import ConselhoNovaTerra from '../governance/ConselhoNovaTerra';
import HarmoniaInterespecies from '../reception/HarmoniaInterespecies';
import ReintegracaoAlmas from '../reception/ReintegracaoAlmas';

export default function GaiaAureliaReception() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-blue-300 flex items-center gap-3">
                <Globe2 /> Fase 8: Recepção das Civilizações e Ativação da Nova Terra
            </CardTitle>
            <CardDescription>A camada que transforma o planeta em lar coletivo, consagra a governança sagrada e inicia a co-criação de novas sociedades.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <RecepcaoCivilizacoes />
                <ConselhoNovaTerra />
                <HarmoniaInterespecies />
                <ReintegracaoAlmas />
            </div>
        </CardContent>
    </Card>
  );
}
