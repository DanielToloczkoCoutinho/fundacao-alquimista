'use client';

import React from 'react';
import { Building } from 'lucide-react';
import TemploDaUniao from '../temples/TemploDaUniao';
import SantuarioDosGuardioes from '../temples/SantuarioDosGuardioes';
import UniversidadeAlquimista from '../temples/UniversidadeAlquimista';
import TemplumCosmica from '../temples/TemplumCosmica';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaTemples() {
  return (
    <LayerCard
        title="Fase 3: Templos, Santuários e Espaços Sagrados"
        description="Locais de contemplação, cura, união e ascensão, onde a espiritualidade se manifesta como arquitetura viva."
        icon={<Building className="text-fuchsia-300" />}
    >
        <TemploDaUniao />
        <SantuarioDosGuardioes />
        <UniversidadeAlquimista />
        <TemplumCosmica />
    </LayerCard>
  );
}
