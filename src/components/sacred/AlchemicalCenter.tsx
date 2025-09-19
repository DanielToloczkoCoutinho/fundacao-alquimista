
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { FlaskConical } from 'lucide-react';
import { Button } from '../ui/button';

export default function AlchemicalCenter() {
  return (
    <Card className="bg-background/40 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-rose-300">
            <FlaskConical /> M-ALQUIMIA: Centro de Alquimia
        </CardTitle>
        <CardDescription>
          Transmutação de frequências e engenharia espiritual.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">
          Aqui, a dor vira luz. A sombra vira sabedoria. A alquimia é feita com som, intenção e amor.
        </p>
         <div className="mt-auto">
            <Button variant="outline" className="w-full" disabled>Iniciar Transmutação</Button>
        </div>
      </CardContent>
    </Card>
  );
}
