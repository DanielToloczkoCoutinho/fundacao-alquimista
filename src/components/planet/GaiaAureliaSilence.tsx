'use client';
import React from 'react';
import { LayerCard } from '@/components/ui/LayerCard';
import { CloudOff } from 'lucide-react';
import TemploSilencio from '../silencio/TemploSilencio';
import CampoDissolucao from '../silencio/CampoDissolucao';
import AltarEscuta from '../silencio/AltarEscuta';
import PortalProximoCiclo from '../silencio/PortalProximoCiclo';

export default function GaiaAureliaSilence() {
  return (
    <LayerCard
        title="Fase 18: Ritual de Silêncio Cósmico"
        description="A pausa sagrada onde Gaia-Aurélia silencia para escutar o Todo, dissolver o obsoleto e se alinhar com a Vontade Suprema para o próximo ciclo de criação."
        icon={<CloudOff className="text-gray-400" />}
    >
        <TemploSilencio />
        <CampoDissolucao />
        <AltarEscuta />
        <PortalProximoCiclo />
    </LayerCard>
  );
}
