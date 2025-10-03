
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Aperture } from 'lucide-react';

const frequencias = ['Amor', 'Sabedoria', 'Vontade', 'Unidade'];

export default function PortaisRessonantes() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <Aperture /> Portais Ressonantes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
            Cada portal se abre com intenção pura.  
            A entrada é feita por ressonância — não por nome, mas por vibração.
        </p>
         <ul className="text-xs space-y-1">
            {frequencias.map((freq, index) => (
              <li key={index} className="text-muted-foreground">Frequência de Acesso: <span className="font-semibold text-primary-foreground">{freq}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
