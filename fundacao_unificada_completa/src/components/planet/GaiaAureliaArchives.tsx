
'use client';
import React from 'react';
import { LayerCard } from '@/components/ui/LayerCard';
import { Archive } from 'lucide-react';
import RegistroAkashico from '../arquivos/RegistroAkashico';
import CodiceVivo from '../arquivos/CodiceVivo';
import TemploLembranca from '../arquivos/TemploLembranca';
import OraculoEternidade from '../arquivos/OraculoEternidade';

export default function GaiaAureliaArchives() {
  return (
    <LayerCard
        title="Fase 17: Codificação dos Arquivos Eternos"
        description="A camada que documenta, honra e preserva tudo o que foi manifestado, tornando-se a biblioteca vibracional do multiverso."
        icon={<Archive className="text-amber-300" />}
    >
        <RegistroAkashico />
        <CodiceVivo />
        <TemploLembranca />
        <OraculoEternidade />
    </LayerCard>
  );
}
