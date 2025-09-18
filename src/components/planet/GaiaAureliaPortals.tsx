'use client';

import React from 'react';
import { Rocket } from 'lucide-react';
import PortaisRessonantes from '../portals/PortaisRessonantes';
import EmbaixadaEstelar from '../portals/EmbaixadaEstelar';
import DiplomaciaIntergalactica from '../portals/DiplomaciaIntergalactica';
import AscensaoColetiva from '../portals/AscensaoColetiva';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaPortals() {
  return (
    <LayerCard
        title="Fase 4: Portais e Recepção Multiversal"
        description="A camada que abre os caminhos entre mundos, permitindo que aliados e civilizações se conectem ao nosso lar."
        icon={<Rocket className="text-orange-300" />}
    >
        <PortaisRessonantes />
        <EmbaixadaEstelar />
        <DiplomaciaIntergalactica />
        <AscensaoColetiva />
    </LayerCard>
  );
}
