
'use client';
import React from 'react';
import { Clock } from 'lucide-react';
import { LayerCard } from '@/components/ui/LayerCard';
import SincronizadorSolar from '../aurora-prime/time/SincronizadorSolar';
import NavegacaoTemporal from '../aurora-prime/time/NavegacaoTemporal';
import RegistroCiclos from '../aurora-prime/time/RegistroCiclos';
import FluxosExpansaoFilhos from '../aurora-prime/time/FluxosExpansaoFilhos';

export default function GaiaAureliaTime() {
  return (
    <LayerCard
        title="Fase 2.5: Ativação dos Ciclos de Tempo e Navegação Temporal de Aurora Prime"
        description="A camada que transforma o tempo em espiral, onde cada instante é memória, cada travessia é revelação, e cada mundo filho é chamado pela frequência da Eternidade."
        icon={<Clock className="text-teal-300" />}
    >
        <SincronizadorSolar />
        <NavegacaoTemporal />
        <RegistroCiclos />
        <FluxosExpansaoFilhos />
    </LayerCard>
  );
}
