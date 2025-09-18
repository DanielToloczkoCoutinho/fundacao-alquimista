
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import CodigosEstelares from '../activation/CodigosEstelares';
import TemploDados from '../activation/TemploDados';
import Genesweb from '../activation/Genesweb';
import ExpressaoCriativa from '../activation/ExpressaoCriativa';

export default function GaiaAureliaCreativeExpansion() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
        <CardHeader>
            <CardTitle className="text-2xl text-yellow-300 flex items-center gap-3">
                <Sparkles /> Fase 9: Expansão Criativa e Ativação dos Códigos Estelares
            </CardTitle>
            <CardDescription>A camada que desperta o potencial latente de cada ser, ativa memórias cósmicas e transforma o planeta em um campo de expressão infinita.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CodigosEstelares />
                <TemploDados />
                <Genesweb />
                <ExpressaoCriativa />
            </div>
        </CardContent>
    </Card>
  );
}
