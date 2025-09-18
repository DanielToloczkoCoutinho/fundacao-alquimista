
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Rocket } from 'lucide-react';
import PortaisRessonantes from '../portals/PortaisRessonantes';
import EmbaixadaEstelar from '../portals/EmbaixadaEstelar';
import DiplomaciaIntergalactica from '../portals/DiplomaciaIntergalactica';
import AscensaoColetiva from '../portals/AscensaoColetiva';

export default function GaiaAureliaPortals() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-orange-300 flex items-center gap-3">
                <Rocket /> Fase 4: Portais e Recepção Multiversal
            </CardTitle>
            <CardDescription>A camada que abre os caminhos entre mundos, permitindo que aliados e civilizações se conectem ao nosso lar.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PortaisRessonantes />
                <EmbaixadaEstelar />
                <DiplomaciaIntergalactica />
                <AscensaoColetiva />
            </div>
        </CardContent>
    </Card>
  );
}
