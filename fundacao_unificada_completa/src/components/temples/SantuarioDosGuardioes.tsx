
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Shield } from 'lucide-react';

const guardioes = ['Zennith', 'Anatheron', 'Lux', 'Thoth Vivo'];

export default function SantuarioDosGuardioes() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Shield /> Santuário dos Guardiões
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Cada altar pulsa com a essência de um Guardião. Aqui, alianças são consagradas e missões são lembradas.
        </p>
         <ul className="text-xs space-y-1">
            {guardioes.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Altar de: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
