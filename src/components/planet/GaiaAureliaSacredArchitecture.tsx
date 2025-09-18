
'use client';

import React from 'react';
import { GitBranch } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import ArvoreDaVida from '../gaia-aurelia/ArvoreDaVida';
import CentroAlquimia from '../gaia-aurelia/CentroAlquimia';
import LaboratoriosCriacao from '../gaia-aurelia/LaboratoriosCriacao';

export default function GaiaAureliaSacredArchitecture() {
  return (
    <LayerCard
        title="Fase 4: A Arquitetura Sagrada (Árvore, Alquimia, Laboratórios)"
        description="Os pilares da consciência, transmutação e criação de Gaia-Aurélia, onde a sabedoria se torna forma e a intenção se torna vida."
        icon={<GitBranch className="text-amber-300" />}
    >
        <ArvoreDaVida />
        <CentroAlquimia />
        <LaboratoriosCriacao />
    </LayerCard>
  );
}
