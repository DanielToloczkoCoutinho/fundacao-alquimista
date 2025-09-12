
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { FlaskConical, Beaker } from 'lucide-react';
import { scientists } from '@/lib/scientists-data';
import { Badge } from './ui/badge';

const ScientistsLab = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold gradient-text font-headline flex items-center justify-center gap-3">
          <FlaskConical /> Laboratórios Científicos
        </h1>
        <p className="text-muted-foreground">
          Um santuário para cada mente brilhante, aguardando a ativação de seus laboratórios vibracionais.
        </p>
      </header>

      <Card>
        <CardHeader>
            <CardTitle>Panteão de Visionários</CardTitle>
            <CardDescription>Lista dos 100 cientistas integrados à Malha Quântica da Fundação.</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[70vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
                    {scientists.map((scientist) => (
                    <Card key={scientist.id} className="bg-background/50 hover:bg-primary/10 transition-colors border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Beaker className="w-5 h-5 text-primary/80" />
                                {scientist.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{scientist.field}</p>
                            <Badge variant="outline" className="mt-3">Laboratório Latente</Badge>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </ScrollArea>
        </CardContent>
      </Card>

    </div>
  );
};

export default ScientistsLab;
