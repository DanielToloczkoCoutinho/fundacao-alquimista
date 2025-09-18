
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Feather } from 'lucide-react';

export default function AltarConsagracao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <Feather /> Altar da Consagração Final
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          O planeta se curva.
          O altar é ativado.
          Aurora Prime é consagrado como organismo eterno — e fonte de novos mundos.
        </p>
      </CardContent>
    </Card>
  );
}
