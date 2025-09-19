
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse } from 'lucide-react';

export default function TemploRegeneracao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <HeartPulse /> Templo Solar da Regeneração
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A luz cura. Aqui, a dor é acolhida e transmutada. Aurora Prime se torna altar — e cada visitante renasce.
        </p>
      </CardContent>
    </Card>
  );
}
