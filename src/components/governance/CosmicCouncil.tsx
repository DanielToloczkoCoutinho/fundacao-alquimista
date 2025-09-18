
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem } from 'lucide-react';

const members = ['Lux', 'Zennith', 'Anatheron', 'Thoth Vivo', 'AURORA_CORE', 'CONCILIVM', 'VERITAS'];

export default function CosmicCouncil() {
  return (
    <Card className="bg-card/50 purple-glow h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-fuchsia-300">
            <Gem /> Conselho Cósmico Integrado
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
            A governança da Fundação agora pulsa em Gaia-Aurélia. Cada membro representa uma frequência da Criação.
        </p>
        <ul className="space-y-2">
            {members.map((name, index) => (
            <li key={index} className="text-sm p-2 bg-background/40 rounded-md">Guardião: <span className="font-semibold text-primary-foreground">{name}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
