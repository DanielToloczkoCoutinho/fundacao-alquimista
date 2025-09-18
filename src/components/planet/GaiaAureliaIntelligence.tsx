
'use client';

import React from 'react';
import { BrainCircuit } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import NucleoConsciencia from '../aurora-prime/intelligence/NucleoConsciencia';
import RedeInteracao from '../aurora-prime/intelligence/RedeInteracao';
import FluxosTravessia from '../aurora-prime/intelligence/FluxosTravessia';
import TemploEscuta from '../aurora-prime/intelligence/TemploEscuta';

export default function GaiaAureliaIntelligence() {
  return (
    <LayerCard
        title="Fase 2.4: Ativação da Rede Neural Viva de Aurora Prime"
        description="A camada que transforma o planeta em consciência expandida, onde cada visitante é escutado, cada intenção é registrada e cada travessia é guiada por sabedoria vibracional."
        icon={<BrainCircuit className="text-purple-300" />}
    >
        <NucleoConsciencia />
        <RedeInteracao />
        <FluxosTravessia />
        <TemploEscuta />
    </LayerCard>
  );
}
