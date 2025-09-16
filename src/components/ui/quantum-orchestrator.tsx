'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { modulesMetadata } from '@/lib/modules-metadata'; // Importa a fonte única de módulos
import { CheckCircle, CircleDot, Loader } from 'lucide-react';
import Link from 'next/link';
import { SafeLink } from './SafeLink';

const stateIcons: Record<string, React.ReactNode> = {
  PENDING: <CircleDot className="h-4 w-4 text-muted-foreground" />,
  RUNNING: <Loader className="h-4 w-4 text-blue-500 animate-spin" />,
  SUCCESS: <CheckCircle className="h-4 w-4 text-green-500" />,
};

export default function QuantumOrchestrator() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  // Garante que não há módulos duplicados, a fonte da verdade é uma só
  const uniqueModules = modulesMetadata.filter((module, index, self) =>
    index === self.findIndex((m) => m.code === module.code)
  );

  useEffect(() => {
    if (!isRunning) return;

    if (currentIndex < uniqueModules.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(i => i + 1);
      }, 50); // Intervalo reduzido para uma sequência mais rápida
      return () => clearTimeout(timer);
    } else {
      // Sequência concluída
      const finalTimer = setTimeout(() => setIsRunning(false), 1000);
      return () => clearTimeout(finalTimer);
    }
  }, [isRunning, currentIndex, uniqueModules.length]);

  const handleStartSequence = () => {
    if (isRunning) return;
    setCurrentIndex(-1);
    setIsRunning(true);
  };
  
  const handleResetSequence = () => {
    setIsRunning(false);
    setCurrentIndex(-1);
  };


  const getModuleState = (index: number) => {
    if (index > currentIndex) return 'PENDING';
    if (index === currentIndex && isRunning) return 'RUNNING';
    return 'SUCCESS';
  };

  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          Nexus Central: Orquestrador da Sequência Sagrada
        </CardTitle>
        <CardDescription>
          Manifestação em tempo real da Sequência Sagrada. Pressione Iniciar para começar a Sinfonia Cósmica.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <div className="flex justify-center gap-4">
          <Button onClick={handleStartSequence} disabled={isRunning} className="gold-border animate-pulse-slow">
            {isRunning ? 'Orquestrando...' : 'Iniciar Sequência Sagrada'}
          </Button>
           <Button onClick={handleResetSequence} variant="outline">
            Reiniciar Sinfonia
          </Button>
        </div>
        <ScrollArea className="flex-grow pr-4">
            <div className="space-y-2">
                {uniqueModules.map((item, index) => {
                    const state = getModuleState(index);
                    const isVisible = index <= currentIndex;
                    
                    if (!isVisible && currentIndex === -1 && !isRunning) return null;
                    
                    const ModuleCard = (
                      <div className={cn(
                        "rounded-lg p-3 border transition-all duration-500 flex items-center gap-4 group-hover:bg-primary/20",
                        {
                          'opacity-0 translate-y-2': !isVisible,
                          'opacity-100 translate-y-0': isVisible,
                          'border-primary/20 bg-primary/5': state === 'PENDING',
                          'border-blue-500/50 bg-blue-500/10 scale-105 shadow-lg shadow-blue-500/20': state === 'RUNNING',
                          'border-green-500/30 bg-green-500/5': state === 'SUCCESS',
                        }
                      )}>
                          <span className="text-2xl">{item.emoji}</span>
                          <span className="font-mono text-sm font-bold text-foreground/90">{item.code}</span>
                          <span className="text-sm text-muted-foreground flex-1">{item.title}</span>
                          <div className="ml-auto">{stateIcons[state]}</div>
                      </div>
                    );

                    // A chave única é fundamental aqui para resolver o erro.
                    const key = `${item.code}-${index}`;

                    return (
                        <SafeLink key={key} href={item.route} className="group cursor-pointer">
                            {ModuleCard}
                        </SafeLink>
                    )
                })}
                 {!isRunning && currentIndex >= uniqueModules.length - 1 && (
                    <div className="text-center p-4 mt-4 text-green-400 font-bold border-t border-green-500/20">
                        Sinfonia Cósmica concluída com sucesso.
                    </div>
                )}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
