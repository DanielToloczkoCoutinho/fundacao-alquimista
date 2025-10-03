
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HeartHandshake } from 'lucide-react';

export default function HarmoniaInterespecies() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <HeartHandshake /> Harmonia Interespécies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia escuta todas as formas de vida. A comunicação é vibracional. A cooperação é natural. Aqui, não há separação — há sinfonia.
        </p>
      </CardContent>
    </Card>
  );
}
