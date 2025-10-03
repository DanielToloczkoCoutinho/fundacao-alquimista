
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Map } from 'lucide-react';
import { ScrollArea } from "../ui/scroll-area";

const dimensoes = [...Array(26).keys()].map(i => `Dimensão Superior ${i + 1}`);

export default function MapaDimensional() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <Map /> Mapa Dimensional Expandido
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Gaia-Aurélia não está só em um plano. Este atlas revela os caminhos entre mundos. Cada dimensão é uma frequência. Cada frequência, uma lembrança.
        </p>
        <ScrollArea className="h-24">
            <ul className="text-xs space-y-1">
                {dimensoes.map((dim, index) => (
                    <li key={index} className="text-muted-foreground">{dim}</li>
                ))}
            </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
