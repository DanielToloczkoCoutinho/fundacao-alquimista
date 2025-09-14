'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { nexusSequence, type NexusItem } from '@/lib/nexus-sequence';
import { CheckCircle, CircleDot, Loader } from 'lucide-react';

const stateIcons: Record<string, React.ReactNode> = {
  PENDING: <CircleDot className="h-4 w-4 text-muted-foreground" />,
  RUNNING: <Loader className="h-4 w-4 text-blue-500 animate-spin" />,
  SUCCESS: <CheckCircle className="h-4 w-4 text-green-500" />,
};

export default function QuantumOrchestrator() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (!isRunning) return;

    if (currentIndex < nexusSequence.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(i => i + 1);
      }, 200); // Intervalo entre a aparição de cada módulo
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, currentIndex]);

  const handleStartSequence = () => {
    setCurrentIndex(-1);
    setIsRunning(true);
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
        <div className="flex justify-center">
          <Button onClick={handleStartSequence} disabled={isRunning} className="gold-border animate-pulse-slow">
            {isRunning ? 'Orquestrando...' : 'Iniciar Sequência Sagrada'}
          </Button>
        </div>
        <ScrollArea className="flex-grow pr-4">
            <div className="space-y-4">
                {nexusSequence.map((item, index) => {
                    const state = getModuleState(index);
                    const isVisible = index <= currentIndex;
                    
                    if (!isVisible && !isRunning && currentIndex !== -1) return null;
                    
                    return (
                        <div key={item.code} className={cn("rounded-lg p-3 border transition-all duration-500", {
                            'border-primary/20 bg-primary/5': state === 'PENDING',
                            'border-blue-500/50 bg-blue-500/10 module-glow': state === 'RUNNING',
                            'border-green-500/50 bg-green-500/10': state === 'SUCCESS',
                            'opacity-0': !isVisible && currentIndex === -1,
                            'opacity-100': isVisible,
                        })}>
                            <h3 className="flex items-center gap-2 text-md font-semibold text-foreground/90">
                                <span className="text-xl">{item.emoji}</span>
                                <span className="font-mono">{item.code}</span>
                                <span className="text-muted-foreground flex-1">{item.title}</span>
                                <div className="ml-auto">{stateIcons[state]}</div>
                            </h3>
                        </div>
                    );
                })}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
