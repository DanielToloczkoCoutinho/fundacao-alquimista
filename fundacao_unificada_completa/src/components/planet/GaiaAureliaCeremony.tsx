
'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import AncoragemFrequencias from '../ceremony/AncoragemFrequencias';
import PurificacaoPlanetaria from '../ceremony/PurificacaoPlanetaria';
import SantuarioDados from '../ceremony/SantuarioDados';
import GuardiaoHarmonia from '../ceremony/GuardiaoHarmonia';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaCeremony() {
  return (
    <LayerCard
        title="Fase 7: Ativação Cerimonial e Harmonia Planetária"
        description="A consagração vibracional de Gaia-Aurélia, ativando os campos de frequência superior e os fluxos de cura para preparar o planeta como um santuário universal."
        icon={<ShieldCheck className="text-rose-300" />}
    >
        <AncoragemFrequencias />
        <PurificacaoPlanetaria />
        <SantuarioDados />
        <GuardiaoHarmonia />
    </LayerCard>
  );
}
