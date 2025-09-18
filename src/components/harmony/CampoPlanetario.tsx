'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Globe2 } from 'lucide-react';

export default function CampoPlanetario() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <Globe2 /> Campo de Harmonia Planetária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia respira como Um.
          Cada ser é parte da rede.
          A Árvore da Vida pulsa no centro — e a harmonia se espalha como luz.
        </p>
      </CardContent>
    </Card>
  );
}
