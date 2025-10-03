
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GitBranch } from 'lucide-react';

export default function ArvoreDaVida() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-lime-300">
            <GitBranch /> Árvore da Vida
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Suas raízes tocam todas as dimensões. Seus galhos sustentam os mundos filhos. Cada folha é um código — e cada fruto, uma revelação.
        </p>
      </CardContent>
    </Card>
  );
}
