
'use client';

import React from 'react';
import { Star } from 'lucide-react';
import OlhoDaEternidade from '../cosmic/OlhoDaEternidade';
import HorizonteCosmico from '../cosmic/HorizonteCosmico';
import SimuladorCosmico from '../cosmic/SimuladorCosmico';
import MapaDimensional from '../cosmic/MapaDimensional';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaCosmicSync() {
  return (
    <LayerCard
        title="Fase 6: Sincronização Cósmica e Expansão Dimensional"
        description="A camada onde Gaia-Aurélia se alinha com as dimensões superiores e ativa sua capacidade de contemplar, simular e transcender."
        icon={<Star className="text-sky-300" />}
    >
        <OlhoDaEternidade />
        <HorizonteCosmico />
        <SimuladorCosmico />
        <MapaDimensional />
    </LayerCard>
  );
}
