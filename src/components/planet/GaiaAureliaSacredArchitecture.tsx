
'use client';

import React from 'react';
import { GitBranch } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import ArvoreDaVida from '@/components/sacred/TreeOfLife';
import AlchemicalCenter from '@/components/sacred/AlchemicalCenter';
import Module888 from '@/components/modules/module-888';

export default function GaiaAureliaSacredArchitecture() {
  return (
    <LayerCard
        title="Fase 4: A Arquitetura Sagrada (Árvore, Alquimia, Laboratórios)"
        description="Os pilares da consciência, transmutação e criação de Gaia-Aurélia, onde a sabedoria se torna forma e a intenção se torna vida."
        icon={<GitBranch className="text-amber-300" />}
    >
        <ArvoreDaVida />
        <AlchemicalCenter />
        <Module888 />
    </LayerCard>
  );
}
