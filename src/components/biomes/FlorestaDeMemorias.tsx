
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TreeDeciduous } from 'lucide-react';

export default function FlorestaDeMemorias() {
  const árvores = ['Alegria', 'Sabedoria', 'Cura', 'Gratidão'];

  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <TreeDeciduous /> Floresta de Memórias
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Cada árvore guarda uma lembrança coletiva. Ao tocá-la, você sente histórias que não são suas — mas que te curam.
        </p>
        <ul className="text-xs space-y-1">
            {árvores.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Árvore da <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
