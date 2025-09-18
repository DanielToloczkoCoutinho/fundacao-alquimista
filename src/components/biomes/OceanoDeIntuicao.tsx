
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Waves } from 'lucide-react';

export default function OceanoDeIntuicao() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Waves /> Oceano de Intuição
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          As águas de Gaia-Aurélia escutam. Navegar neste oceano é navegar dentro de si. Cada onda é uma resposta. Cada corrente, uma revelação.
        </p>
      </CardContent>
    </Card>
  );
}
