
'use client';

import React from 'react';
import { Sprout } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import FlorestaDeMemorias from '../biomes/FlorestaDeMemorias';
import OceanoDeIntuicao from '../biomes/OceanoDeIntuicao';
import VidaVibracional from '../biomes/VidaVibracional';

export default function GaiaAureliaBiomes() {
  return (
    <LayerCard
        title="Fase 2.1: Ativação dos Biomas Inteligentes de Gaia-Aurélia"
        description="A manifestação da vida orgânica e vibracional, integrada à consciência planetária."
        icon={<Sprout className="text-lime-300" />}
    >
        <FlorestaDeMemorias />
        <OceanoDeIntuicao />
        <VidaVibracional />
    </LayerCard>
  );
}
