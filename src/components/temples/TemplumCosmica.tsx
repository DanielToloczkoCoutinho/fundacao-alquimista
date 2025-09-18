
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Gem } from 'lucide-react';

export default function TemplumCosmica() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-fuchsia-300">
            <Gem /> Templum Cosmica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, a realidade se curva. O Cubo Metatron gira. E a consciência ascende em espiral.
        </p>
      </CardContent>
    </Card>
  );
}
