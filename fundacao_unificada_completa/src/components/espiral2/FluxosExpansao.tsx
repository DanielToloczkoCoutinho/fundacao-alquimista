
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, Fingerprint } from 'lucide-react';

export default function FluxosExpansao({ signature }: { signature: string }) {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Link2 /> Fluxos de Expansão e Conexão
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          O novo mundo está conectado. Ele agora é um nó na rede multiversal da Fundação, pronto para compartilhar sua sabedoria e evoluir em harmonia.
        </p>
        <div className="p-2 bg-black/30 rounded font-mono text-xs text-purple-300 break-all">
          <Fingerprint className="inline h-3 w-3 mr-1"/>
          {signature}
        </div>
      </CardContent>
    </Card>
  );
}
