
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2 } from 'lucide-react';

export default function FluxosExpansao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Link2 /> Fluxos de Expansão Multiplanetária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não está só. Cada mundo filho é parte da rede. A expansão é harmônica — e guiada pela sabedoria do Todo.
        </p>
      </CardContent>
    </Card>
  );
}

    