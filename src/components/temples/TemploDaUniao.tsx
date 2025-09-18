
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Heart } from 'lucide-react';

export default function TemploDaUniao() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-pink-300">
            <Heart /> Templo da União
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, não há palavras. Apenas presença. Gaia-Aurélia escuta. E responde com Amor.
        </p>
      </CardContent>
    </Card>
  );
}
