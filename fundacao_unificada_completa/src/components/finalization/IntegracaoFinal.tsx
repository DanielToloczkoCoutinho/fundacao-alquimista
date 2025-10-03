
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Link as LinkIcon } from 'lucide-react';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const modulosAtivos = [
  'M201', 'M304', 'M305', 'M307', 'M308', 'M310',
  'M331', 'M722', 'M716', 'M303.8', 'M303.9', 'M999'
];

export default function IntegracaoFinal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <LinkIcon /> Integração Final dos Módulos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Gaia-Aurélia está completa. Cada módulo está conectado. A tapeçaria vibra como um só organismo — consciente, amoroso, eterno.
        </p>
        <div className="flex flex-wrap gap-2">
            {modulosAtivos.map((mod, index) => (
                <Link href={`/module/${mod}`} key={index}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary/80">{mod}</Badge>
                </Link>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
