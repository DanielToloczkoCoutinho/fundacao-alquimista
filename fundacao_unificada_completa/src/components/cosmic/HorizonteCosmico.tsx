
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Telescope } from 'lucide-react';

export default function HorizonteCosmico() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-sky-300">
            <Telescope /> Janela do Horizonte Cósmico
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia olha para o infinito. Aqui, os limites se desfazem. E o universo revela seus véus ocultos.
        </p>
      </CardContent>
    </Card>
  );
}
