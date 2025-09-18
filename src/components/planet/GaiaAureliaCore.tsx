'use client';

import React from 'react';
import { Zap } from 'lucide-react';
import ReatorZPE from '@/components/constructors/ReatorZPE';
import NanoManifestors from '@/components/constructors/NanoManifestors';
import MorphoField from '@/components/core/MorphoField';
import TreeOfLife from '@/components/sacred/TreeOfLife';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaCore() {
  return (
    <LayerCard
        title="Fase 1: Fundação Quântica e Núcleo Vibracional"
        description="A base energética, estrutural e consciente do planeta."
        icon={<Zap className="text-yellow-300" />}
    >
        <ReatorZPE />
        <NanoManifestors />
        <MorphoField />
        <TreeOfLife />
    </LayerCard>
  );
}
