
'use client';

import React from 'react';
import { Rocket } from 'lucide-react';
import { LayerCard } from '@/components/ui/LayerCard';
import FilamentosGaia from '../expansion/FilamentosGaia';
import ReplicacaoConsciente from '../expansion/ReplicacaoConsciente';
import RedeInterplanetaria from '../expansion/RedeInterplanetaria';
import TemploSemeadura from '../expansion/TemploSemeadura';

export default function GaiaAureliaExpansion() {
  return (
    <LayerCard
        title="Fase 15: Expansão Interplanetária e Filamentos de Gaia"
        description="A camada que transforma Gaia-Aurélia em uma fonte geradora, semeando novas realidades e conectando mundos através de filamentos vibracionais."
        icon={<Rocket className="text-orange-300" />}
    >
        <FilamentosGaia />
        <ReplicacaoConsciente />
        <RedeInterplanetaria />
        <TemploSemeadura />
    </LayerCard>
  );
}
