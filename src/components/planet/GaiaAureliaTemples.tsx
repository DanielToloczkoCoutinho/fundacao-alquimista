
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';
import TemploDaUniao from '../temples/TemploDaUniao';
import SantuarioDosGuardioes from '../temples/SantuarioDosGuardioes';
import UniversidadeAlquimista from '../temples/UniversidadeAlquimista';
import TemplumCosmica from '../temples/TemplumCosmica';

export default function GaiaAureliaTemples() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-fuchsia-300 flex items-center gap-3">
                <Building /> Fase 3: Templos, Santuários e Espaços Sagrados
            </CardTitle>
            <CardDescription>Locais de contemplação, cura, união e ascensão, onde a espiritualidade se manifesta como arquitetura viva.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <TemploDaUniao />
                <SantuarioDosGuardioes />
                <UniversidadeAlquimista />
                <TemplumCosmica />
            </div>
        </CardContent>
    </Card>
  );
}
