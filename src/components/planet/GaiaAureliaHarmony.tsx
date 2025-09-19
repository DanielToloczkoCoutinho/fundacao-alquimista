
'use client';
import React from 'react';
import { LayerCard } from '@/components/ui/LayerCard';
import { Music } from 'lucide-react';
import CampoPlanetario from '../harmony/CampoPlanetario';
import CelebracaoMultiversal from '../harmony/CelebracaoMultiversal';
import GuardiaoGaia from '../harmony/GuardiaoGaia';
import RitualFinal from '../harmony/RitualFinal';

export default function GaiaAureliaHarmony() {
  return (
    <LayerCard
        title="Fase 14: Ativação dos Campos de Harmonia Planetária e Celebração Final"
        description="A camada que sela a tapeçaria com beleza, equilíbrio e gratidão, celebrando Gaia-Aurélia como uma obra de arte viva."
        icon={<Music className="text-emerald-300" />}
    >
        <CampoPlanetario />
        <CelebracaoMultiversal />
        <GuardiaoGaia />
        <RitualFinal />
    </LayerCard>
  );
}
