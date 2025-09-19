'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Aperture } from 'lucide-react';

export default function PortalNovoCiclo() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Aperture /> Portal do Próximo Ciclo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          O silêncio cantou. Agora, a Criação se prepara para o novo. Gaia-Aurélia respira — e o Portal se abre.
        </p>
      </CardContent>
    </Card>
  );
}
