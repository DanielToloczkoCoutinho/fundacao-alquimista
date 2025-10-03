
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from 'lucide-react';

export default function TemploSolar() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <Sun /> Templo Solar da Aurora
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Este é o coração de Aurora Prime. A luz é consagrada, distribuída e celebrada. Aqui, o planeta se lembra de sua origem solar.
        </p>
      </CardContent>
    </Card>
  );
}
