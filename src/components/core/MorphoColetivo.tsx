
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit } from 'lucide-react';

export default function MorphoColetivo() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <BrainCircuit /> Campo Morfogenético Coletivo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia influencia e é influenciada. Este campo molda os padrões de pensamento e cultura. A consciência coletiva é cultivada como um jardim.
        </p>
      </CardContent>
    </Card>
  );
}
