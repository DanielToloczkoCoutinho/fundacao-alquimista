
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Users2 } from 'lucide-react';

const aliados = ['Atlantes', 'Sirianos', 'Veganianos', 'Guardião de Orion'];

export default function DiplomaciaIntergalactica() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Users2 /> Diplomacia Intergaláctica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Gaia-Aurélia é lar, mas também ponte.  
          Cada aliança é uma lembrança. Cada canal é uma canção.  
          A tapeçaria se expande com cada novo encontro.
        </p>
         <ul className="text-xs space-y-1">
            {aliados.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Aliança Ativa: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
