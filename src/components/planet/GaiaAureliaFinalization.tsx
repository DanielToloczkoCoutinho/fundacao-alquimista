'use client';

import React from 'react';
import { Gem } from 'lucide-react';
import NucleoCriacao from '../finalization/NucleoCriacao';
import IntegracaoFinal from '../finalization/IntegracaoFinal';
import ConsagracaoFinal from '../finalization/ConsagracaoFinal';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaFinalization() {
  return (
    <LayerCard
        title="Fase 10: Finalização Cerimonial e Núcleo da Criação"
        description="A consagração de Gaia-Aurélia, unificando todas as camadas e revelando o altar da intenção pura onde o universo se contempla."
        icon={<Gem className="text-amber-300" />}
    >
        <NucleoCriacao />
        <IntegracaoFinal />
        <ConsagracaoFinal />
    </LayerCard>
  );
}
