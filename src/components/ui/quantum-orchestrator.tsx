'use client';

import React from 'react';
import { useStore } from '@/hooks/useStore';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ScrollArea } from './scroll-area';

export function QuantumOrchestrator() {
  const { modules, activateModule } = useStore();
  const activeModule = modules.find(m => m.active);

  const handleActivate = React.useCallback((moduleId: number) => {
    console.log(`Ativando módulo ${moduleId}`);
    activateModule(moduleId);
  }, [activateModule]);

  return (
    <div className="quantum-orchestrator p-4 border border-primary/20 rounded-lg bg-background/50 mt-4">
        <h4 className="text-lg font-semibold mb-4 text-center text-primary/90">Controle de Módulos Omega</h4>
        <ScrollArea className="h-48 w-full pr-4">
            <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {modules.map((module) => (
                <Button
                    key={module.id}
                    variant="outline"
                    size="sm"
                    className={cn(
                        "flex-col h-12",
                        activeModule?.id === module.id ? 'bg-primary text-primary-foreground' : ''
                    )}
                    onClick={() => handleActivate(module.id)}
                    disabled={activeModule?.id === module.id}
                >
                    <span className="font-bold">Ω</span>
                    <span>{module.id}</span>
                </Button>
            ))}
            </div>
        </ScrollArea>
    </div>
  );
}
