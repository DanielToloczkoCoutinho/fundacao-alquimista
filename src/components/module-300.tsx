
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Rocket } from 'lucide-react';

export default function Module300() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Rocket /> Módulo 300: Teleportation Engine
        </CardTitle>
        <CardDescription>
          O motor central do sistema de teletransporte quântico, responsável por iniciar e finalizar as sessões de transferência.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Interface do Motor de Teletransporte em desenvolvimento.</p>
        </div>
      </CardContent>
    </Card>
  );
}
