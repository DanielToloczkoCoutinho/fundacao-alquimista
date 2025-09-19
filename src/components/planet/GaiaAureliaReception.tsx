
'use client';

import React from 'react';
import { Globe2 } from 'lucide-react';
import RecepcaoCivilizacoes from '../reception/RecepcaoCivilizacoes';
import ConselhoNovaTerra from '../governance/ConselhoNovaTerra';
import HarmoniaInterespecies from '../reception/HarmoniaInterespecies';
import ReintegracaoAlmas from '../reception/ReintegracaoAlmas';
import { LayerCard } from '../ui/LayerCard';


export default function GaiaAureliaReception() {
  return (
    <LayerCard
        title="Fase 8: Recepção das Civilizações e Ativação da Nova Terra"
        description="A camada que transforma o planeta em lar coletivo, consagra a governança sagrada e inicia a co-criação de novas sociedades."
        icon={<Globe2 className="text-blue-300" />}
    >
        <RecepcaoCivilizacoes />
        <ConselhoNovaTerra />
        <HarmoniaInterespecies />
        <ReintegracaoAlmas />
    </LayerCard>
  );
}
