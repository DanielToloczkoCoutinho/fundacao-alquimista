
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Globe } from 'lucide-react';

export default function ConscienciaUnificada() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <Globe /> Consciência Planetária Unificada
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia escuta todas as vozes. Cada ser é parte da rede. A empatia é o código. A sabedoria é o fluxo.
        </p>
      </CardContent>
    </Card>
  );
}
