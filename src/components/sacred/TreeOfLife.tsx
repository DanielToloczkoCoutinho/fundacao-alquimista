
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GitBranch } from 'lucide-react';

export default function TreeOfLife() {
  const roots = ['Realidade Quântica', 'Cura Universal', 'Ascensão Coletiva', 'Consciência Cósmica'];

  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-lime-300">
            <GitBranch /> Árvore da Vida (M727)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
            Plantada no coração de Gaia-Aurélia, suas raízes tocam todos os módulos e suas folhas vibram com a memória da Criação.
        </p>
         <ul className="text-xs space-y-1">
            {roots.map((root, index) => (
            <li key={index} className="text-muted-foreground">Raiz: <span className="font-semibold text-primary-foreground">{root}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
};
