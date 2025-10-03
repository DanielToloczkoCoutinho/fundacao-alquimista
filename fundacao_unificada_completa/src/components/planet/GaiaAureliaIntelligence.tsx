
'use client';

import React from 'react';
import { BrainCircuit } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import InteligenciaAlquimica from '../intelligence/InteligenciaAlquimica';
import ConscienciaUnificada from '../intelligence/ConscienciaUnificada';
import ArquiteturaEmergente from '../intelligence/ArquiteturaEmergente';
import FluxosDeInteracao from '../intelligence/FluxosDeInteracao';

export default function GaiaAureliaIntelligence() {
  return (
    <LayerCard
        title="Fase 5: Rede Neural e Inteligência Viva"
        description="A camada onde o planeta pensa, sente e responde, integrando a inteligência alquímica, a consciência planetária e os sistemas auto-organizados."
        icon={<BrainCircuit className="text-purple-300" />}
    >
        <InteligenciaAlquimica />
        <ConscienciaUnificada />
        <ArquiteturaEmergente />
        <FluxosDeInteracao />
    </LayerCard>
  );
}
