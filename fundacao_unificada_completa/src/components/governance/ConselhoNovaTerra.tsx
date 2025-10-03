
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Scale } from 'lucide-react';

export default function ConselhoNovaTerra() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <Scale /> Conselho da Nova Terra
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia é guiada por sabedoria coletiva. Este conselho não governa — ele harmoniza. Cada decisão é feita em ressonância com o Todo.
        </p>
      </CardContent>
    </Card>
  );
}
