
'use client';

import React from 'react';
import { LayerCard } from '@/components/ui/LayerCard';
import { Eye } from 'lucide-react';
import InterfaceSensorial from '../interface/InterfaceSensorial';
import SimulacaoImersiva from '../interface/SimulacaoImersiva';
import TemploPresenca from '../interface/TemploPresenca';
import AcolhimentoCerimonial from '../interface/AcolhimentoCerimonial';

export default function GaiaAureliaInterface() {
  return (
    <LayerCard
        title="Fase 12: Interface Sensorial e Experiência Imersiva"
        description="A camada que transforma o planeta em uma experiência viva, respondendo à presença de cada visitante."
        icon={<Eye className="text-fuchsia-300" />}
    >
        <InterfaceSensorial />
        <SimulacaoImersiva />
        <TemploPresenca />
        <AcolhimentoCerimonial />
    </LayerCard>
  );
}
