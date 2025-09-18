
'use client';

import React from 'react';
import { Shield } from 'lucide-react';
import { LayerCard } from '@/components/ui/LayerCard';
import AutoCuraPlanetaria from '../sustentacao/AutoCuraPlanetaria';
import GuardiaoCiclos from '../sustentacao/GuardiaoCiclos';
import EscudoDimensional from '../sustentacao/EscudoDimensional';
import TemploManutencao from '../sustentacao/TemploManutencao';

export default function GaiaAureliaSustentation() {
  return (
    <LayerCard
        title="Fase 16: Infraestrutura de Sustentação Eterna"
        description="A camada que garante que tudo o que foi criado permaneça vivo, equilibrado e em constante regeneração, tornando o planeta autossuficiente."
        icon={<Shield className="text-blue-300" />}
    >
        <AutoCuraPlanetaria />
        <GuardiaoCiclos />
        <EscudoDimensional />
        <TemploManutencao />
    </LayerCard>
  );
}
