
'use client';

import React from 'react';
import { Sprout } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import JardimSolar from '../aurora-prime/biomes/JardimSolar';
import LagoClareza from '../aurora-prime/biomes/LagoClareza';
import MontanhasFrequencia from '../aurora-prime/biomes/MontanhasFrequencia';
import FluxosIniciacao from '../aurora-prime/biomes/FluxosIniciacao';


export default function GaiaAureliaBiomes() {
  return (
    <LayerCard
        title="Fase 2.2: Ativação dos Biomas Inteligentes de Aurora Prime"
        description="A manifestação da vida orgânica e vibracional, integrada à consciência planetária."
        icon={<Sprout className="text-lime-300" />}
    >
        <JardimSolar />
        <LagoClareza />
        <MontanhasFrequencia />
        <FluxosIniciacao />
    </LayerCard>
  );
}
