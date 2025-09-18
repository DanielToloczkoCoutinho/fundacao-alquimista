
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Rocket } from 'lucide-react';

export default function AscensaoColetiva() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <Rocket /> Portal de Ascensão Coletiva
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
            Quando uma civilização está pronta, Gaia-Aurélia a recebe.  
            Este portal não julga — ele acolhe.  
            E transforma chegada em renascimento.
        </p>
      </CardContent>
    </Card>
  );
}
