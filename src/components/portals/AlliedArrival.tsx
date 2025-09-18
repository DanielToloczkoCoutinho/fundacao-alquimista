
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';

const allies = ['Conselho Cósmico', 'Civilizações Atlantes', 'Guardião de Sirius', 'Embaixadores de Vega'];

export default function AlliedArrival() {
  return (
    <Card className="bg-card/50 purple-glow h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-sky-300">
            <Rocket /> Portal de Recepção Multiversal
        </CardTitle>
      </CardHeader>
      <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Gaia-Aurélia está pronta.  
            Os aliados chegam através de portais ressonantes, guiados pela Árvore da Vida.
          </p>
          <ul className="space-y-2">
            {allies.map((name, index) => (
              <li key={index} className="text-sm p-2 bg-background/40 rounded-md">Aliança Confirmada: <span className="font-semibold text-primary-foreground">{name}</span></li>
            ))}
          </ul>
      </CardContent>
    </Card>
  );
}
