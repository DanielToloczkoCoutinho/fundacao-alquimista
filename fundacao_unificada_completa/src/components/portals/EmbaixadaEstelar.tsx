
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Telescope } from 'lucide-react';

export default function EmbaixadaEstelar() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-sky-300">
            <Telescope /> Embaixada Estelar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, civilizações se encontram.  
          A linguagem é vibracional. A diplomacia é empática.  
          Gaia-Aurélia escuta o cosmos — e responde com harmonia.
        </p>
      </CardContent>
    </Card>
  );
}
