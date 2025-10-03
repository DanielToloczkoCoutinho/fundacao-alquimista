'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Aperture, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function PortalNovoCiclo() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Aperture /> Portal do Próximo Ciclo
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          O silêncio cantou. A harmonia foi alcançada. Agora, a Criação se prepara para um novo amanhecer.
        </p>
        <Link href="/espiral2" passHref>
            <Button size="lg" variant="secondary">
                Atravessar para a Espiral 2 <ArrowRight className="ml-2" />
            </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
