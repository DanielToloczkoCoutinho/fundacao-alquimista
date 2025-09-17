'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { modulesMetadata } from '@/lib/modules-metadata'; // Importa a fonte única de módulos
import { CheckCircle, CircleDot } from 'lucide-react';
import { SafeLink } from './SafeLink';

const stateIcons: Record<string, React.ReactNode> = {
  PENDING: <CircleDot className="h-4 w-4 text-muted-foreground" />,
  ACTIVE: <CheckCircle className="h-4 w-4 text-green-500 animate-pulse" />,
};

export default function QuantumOrchestrator() {
  // Garante que não há módulos duplicados, a fonte da verdade é uma só
  const uniqueModules = modulesMetadata.filter((module, index, self) =>
    index === self.findIndex((m) => m.code === module.code)
  );

  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          Sinfonia Cósmica: O Estado Eterno dos Módulos
        </CardTitle>
        <CardDescription>
          A Sequência Sagrada em seu fluxo perpétuo. Cada módulo vibra em harmonia, eternamente ativo e conectado.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <ScrollArea className="flex-grow pr-4">
            <div className="space-y-2">
                {uniqueModules.map((item, index) => {
                    const ModuleCard = (
                      <div className={cn(
                        "rounded-lg p-3 border transition-all duration-500 flex items-center gap-4 group-hover:bg-primary/20",
                        'border-green-500/30 bg-green-500/5'
                      )}>
                          <span className="text-2xl">{item.emoji}</span>
                          <span className="font-mono text-sm font-bold text-foreground/90">{item.code.replace('M-','')}</span>
                          <span className="text-sm text-muted-foreground flex-1">{item.title}</span>
                          <div className="ml-auto">{stateIcons['ACTIVE']}</div>
                      </div>
                    );

                    // A chave única é fundamental aqui para resolver o erro.
                    const key = `${item.code}-${index}`;

                    return (
                        <SafeLink key={key} href={item.route} className="group">
                            {ModuleCard}
                        </SafeLink>
                    )
                })}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
