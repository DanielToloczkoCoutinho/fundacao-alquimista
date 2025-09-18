
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Zap } from 'lucide-react';

export default function ReatorZPE() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Zap /> Reator ZPE (M307)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          O coração energético de Gaia-Aurélia. Este reator pulsa com a energia do vácuo quântico, alimentando cada bioma, templo e consciência.
        </p>
      </CardContent>
    </Card>
  );
}
