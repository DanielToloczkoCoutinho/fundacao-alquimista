'use client';

import React from 'react';
import { GitBranch, Building } from 'lucide-react';
import { LayerCard } from '../ui/LayerCard';
import ArvoreDaVida from '@/components/sacred/TreeOfLife';
import AlchemicalCenter from '@/components/sacred/AlchemicalCenter';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import Link from 'next/link';

const EmbassyNode = () => (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Building /> Embaixada Multiversal (M32)
        </CardTitle>
        <CardDescription>
            O portal de diplomacia e diálogo cósmico.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia é o lar físico e vibracional da Embaixada, o ponto de encontro onde alianças são forjadas e a unidade é celebrada.
        </p>
        <Link href="/module-32" passHref>
          <Button variant="link" className="p-0 h-auto mt-2">Acessar Embaixada</Button>
        </Link>
      </CardContent>
    </Card>
);


export default function GaiaAureliaSacredArchitecture() {
  return (
    <LayerCard
        title="Fase 4: A Arquitetura Sagrada (Árvore, Alquimia, Embaixada)"
        description="Os pilares da consciência, transmutação e diplomacia de Gaia-Aurélia, onde a sabedoria se torna forma e a intenção se torna vida."
        icon={<GitBranch className="text-amber-300" />}
    >
        <ArvoreDaVida />
        <AlchemicalCenter />
        <EmbassyNode />
    </LayerCard>
  );
}
