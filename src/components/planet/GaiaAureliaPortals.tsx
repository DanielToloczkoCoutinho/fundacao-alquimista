
'use client';

import React from 'react';
import { Aperture } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import PortalAuroraEstelar from '../aurora-prime/portals/PortalAuroraEstelar';
import PortalFrequenciaInterior from '../aurora-prime/portals/PortalFrequenciaInterior';
import PortalMultiversal from '../aurora-prime/portals/PortalMultiversal';
import FluxosIntegracao from '../aurora-prime/portals/FluxosIntegracao';

export default function GaiaAureliaPortals() {
  return (
    <LayerCard
        title="Fase 2.3: Ativação dos Portais Interdimensionais de Aurora Prime"
        description="A camada que abre os caminhos entre mundos, frequências e estados de ser, transformando o planeta em um nexo cósmico."
        icon={<Aperture className="text-teal-300" />}
    >
        <PortalAuroraEstelar />
        <PortalFrequenciaInterior />
        <PortalMultiversal />
        <FluxosIntegracao />
    </LayerCard>
  );
}
