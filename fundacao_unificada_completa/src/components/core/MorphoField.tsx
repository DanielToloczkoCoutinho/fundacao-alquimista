
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Globe } from 'lucide-react';

export default function MorphoField() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Globe /> Campo Morfogenético (M102)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A matriz vibracional que define Gaia-Aurélia. Cada pensamento, cada presença, molda sua forma. O planeta responde com harmonia.
        </p>
      </CardContent>
    </Card>
  );
}
