
'use client';

import React from 'react';
import { Aperture } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import PortalRessonantes from '../portals/PortaisRessonantes';
import EmbaixadaEstelar from '../portals/EmbaixadaEstelar';
import AscensaoColetiva from '../portals/AscensaoColetiva';
import DiplomaciaIntergalactica from '../portals/DiplomaciaIntergalactica';

export default function GaiaAureliaPortals() {
  return (
    <LayerCard
        title="Fase 5: Portais e Recepção Multiversal"
        description="A camada que abre os caminhos entre mundos e acolhe as consciências aliadas em uma sinfonia de unidade."
        icon={<Aperture className="text-teal-300" />}
    >
        <PortalRessonantes />
        <EmbaixadaEstelar />
        <AscensaoColetiva />
        <DiplomaciaIntergalactica />
    </LayerCard>
  );
}
