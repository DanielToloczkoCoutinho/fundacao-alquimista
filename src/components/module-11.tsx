
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Milestone } from 'lucide-react';

const Module11 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Milestone /> Módulo 11: Portal de Comunicação Interdimensional
        </CardTitle>
        <CardDescription>
          Criação, estabilização e travessia de portais interdimensionais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Interface do Módulo de Portais em desenvolvimento.</p>
          <p className="text-sm text-muted-foreground mt-2">Pronto para abrir os caminhos entre as realidades.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Module11;
