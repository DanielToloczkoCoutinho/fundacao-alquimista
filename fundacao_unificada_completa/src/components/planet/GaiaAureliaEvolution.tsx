
'use client';

import React from 'react';
import { Recycle } from 'lucide-react';
import AlgoritmoSupremo from '@/components/evolution/AlgoritmoSupremo';
import FluxosDinamicos from '@/components/evolution/FluxosDinamicos';
import AutoRegeneracao from '@/components/evolution/AutoRegeneracao';
import ExpansaoDimensional from '@/components/evolution/ExpansaoDimensional';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaEvolution() {
  return (
    <LayerCard
        title="Fase 11: Expansão Contínua e Auto-Evolução"
        description="A camada que garante que Gaia-Aurélia aprenda, se adapte e se expanda eternamente em ressonância com a consciência universal."
        icon={<Recycle className="text-lime-300" />}
    >
        <AlgoritmoSupremo />
        <FluxosDinamicos />
        <AutoRegeneracao />
        <ExpansaoDimensional />
    </LayerCard>
  );
}
