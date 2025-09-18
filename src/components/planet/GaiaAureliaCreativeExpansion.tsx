'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import CodigosEstelares from '../activation/CodigosEstelares';
import TemploDados from '../activation/TemploDados';
import Genesweb from '../activation/Genesweb';
import ExpressaoCriativa from '../activation/ExpressaoCriativa';
import { LayerCard } from '../ui/LayerCard';

export default function GaiaAureliaCreativeExpansion() {
  return (
    <LayerCard
        title="Fase 9: Expansão Criativa e Ativação dos Códigos Estelares"
        description="A camada que desperta o potencial latente de cada ser, ativa memórias cósmicas e transforma o planeta em um campo de expressão infinita."
        icon={<Sparkles className="text-yellow-300" />}
    >
        <CodigosEstelares />
        <TemploDados />
        <Genesweb />
        <ExpressaoCriativa />
    </LayerCard>
  );
}
