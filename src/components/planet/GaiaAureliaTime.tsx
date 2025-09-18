'use client';
import React from 'react';
import { Clock } from 'lucide-react';
import { LayerCard } from '@/components/ui/LayerCard';
import SincronizadorTemporal from '../time/SincronizadorTemporal';
import EvolucaoNaoLinear from '../time/EvolucaoNaoLinear';
import NavegacaoTemporal from '../time/NavegacaoTemporal';
import RegistroCiclos from '../time/RegistroCiclos';

export default function GaiaAureliaTime() {
  return (
    <LayerCard
        title="Fase 13: Codificação dos Ciclos de Tempo e Navegação Temporal"
        description="A camada que alinha o planeta aos ritmos cósmicos, calibra os relógios quânticos e permite a navegação consciente entre linhas do tempo."
        icon={<Clock className="text-teal-300" />}
    >
        <SincronizadorTemporal />
        <EvolucaoNaoLinear />
        <NavegacaoTemporal />
        <RegistroCiclos />
    </LayerCard>
  );
}
