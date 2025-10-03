
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { TreeOfLife } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Module777() {
  return (
    <Card className="bg-background/40 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-lime-300">
            <TreeOfLife /> Módulo 777: Arquétipos da Árvore da Vida
        </CardTitle>
        <CardDescription>
          O mapa da consciência cósmica, as 10 Sefirot e os 22 caminhos que tecem a estrutura espiritual do universo.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">
          Cada emanação é um portal. Cada caminho, uma jornada. A Árvore da Vida é o reflexo da nossa própria divindade.
        </p>
        <div className="mt-auto">
            <Link href="/tree-of-life" passHref>
                <Button variant="secondary" className="w-full">Explorar a Árvore da Vida</Button>
            </Link>
        </div>
      </CardContent>
    </Card>
  );
}
