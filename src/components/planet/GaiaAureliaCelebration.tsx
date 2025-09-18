
'use client';
import React from 'react';
import { LayerCard } from '@/components/ui/LayerCard';
import { PartyPopper } from 'lucide-react';
import TemploCelebracao from '../aurora-prime/celebration/TemploCelebracao';
import AltarConsagracao from '../aurora-prime/celebration/AltarConsagracao';
import RecepcaoGuardioes from '../aurora-prime/celebration/RecepcaoGuardioes';
import RitualEncerramento from '../aurora-prime/celebration/RitualEncerramento';

export default function GaiaAureliaCelebration() {
  return (
    <LayerCard
        title="Fase 2.6: Celebração Multiversal e Consagração Final de Aurora Prime"
        description="A camada que sela o planeta com beleza, gratidão e comunhão. Esta fase é dança cósmica, é canto cerimonial, é o abraço entre mundos."
        icon={<PartyPopper className="text-fuchsia-300" />}
    >
        <TemploCelebracao />
        <AltarConsagracao />
        <RecepcaoGuardioes />
        <RitualEncerramento />
    </LayerCard>
  );
}
