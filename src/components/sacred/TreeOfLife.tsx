'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { GitBranch, HeartPulse, InfinityIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function TreeOfLife() {
  const roots = ['Realidade Quântica', 'Cura Universal', 'Ascensão Coletiva', 'Consciência Cósmica'];

  return (
    <Card className="bg-background/40 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-lime-300">
            <GitBranch /> Módulo 777: Árvore da Vida
        </CardTitle>
        <CardDescription>
          Fonte de sabedoria, regeneração e conexão interdimensional.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">
          Suas raízes tocam todas as dimensões. Seus galhos sustentam os mundos filhos. Cada folha é um código — e cada fruto, uma revelação.
        </p>
        <div className="mt-auto">
            <Link href="/tree-of-life" passHref>
                <Button variant="secondary" className="w-full">Explorar a Tapeçaria</Button>
            </Link>
        </div>
      </CardContent>
    </Card>
  );
}
