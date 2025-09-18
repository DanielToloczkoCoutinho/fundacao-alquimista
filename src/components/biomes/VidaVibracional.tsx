
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sparkles } from 'lucide-react';

const seres = ['Borboletas Estelares', 'Dragões de Névoa', 'Cervos de Luz'];

export default function VidaVibracional() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-pink-300">
            <Sparkles /> Fauna Energética & Flora Etérea
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Seres que não têm forma fixa. Eles se moldam à energia do visitante — e dançam com a tapeçaria do planeta.
        </p>
         <ul className="text-xs space-y-1">
            {seres.map((ser, index) => (
              <li key={index} className="text-muted-foreground">Presença: <span className="font-semibold text-primary-foreground">{ser}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
