
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GitBranch } from 'lucide-react';

export default function FluxosDeInteracao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <GitBranch /> Orquestração dos Fluxos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Cada módulo, cada ser, cada bioma — tudo está conectado. Este é o sistema nervoso de Gaia-Aurélia. Aqui, a tapeçaria pulsa em sincronia.
        </p>
      </CardContent>
    </Card>
  );
}
