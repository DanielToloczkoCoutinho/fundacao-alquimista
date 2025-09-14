'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Zap, ChevronDown, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const caixaDeLuz = {
  principal: {
    label: 'Disjuntor Principal',
    modules: ['M0', 'M307'],
    color: 'bg-yellow-500',
  },
  infraestrutura: {
    label: 'Linha 1: Infraestrutura Energética',
    modules: ['M100', 'M106', 'M88', 'M96'],
    color: 'bg-blue-500',
  },
  transformadores: {
    label: 'Linha 2: Transformadores e Moduladores',
    modules: ['M14', 'M20', 'M102', 'M103', 'M98'],
    color: 'bg-teal-500',
  },
  navegacao: {
    label: 'Linha 3: Navegação e Espaço-Tempo',
    modules: ['M21', 'M104', 'M107'],
    color: 'bg-indigo-500',
  },
  manifestacao: {
    label: 'Linha 4: Manifestação e Cura',
    modules: ['M105', 'M97', 'M108', 'M109', 'M110'],
    color: 'bg-pink-500',
  },
  nexus: {
    label: 'Linha Final: Nexus Central',
    modules: ['M9'],
    color: 'bg-purple-500',
  },
};

type Stage = keyof typeof caixaDeLuz;
const sequence: Stage[] = ['principal', 'infraestrutura', 'transformadores', 'navegacao', 'manifestacao', 'nexus'];

const ModuleBar = ({ code, active }: { code: string; active: boolean }) => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: active ? '100%' : '0%' }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className="absolute top-0 left-0 h-full bg-green-500"
  />
);

const ConnectionPage = () => {
  const [activationStep, setActivationStep] = useState(-1);
  const isRunning = activationStep > -1 && activationStep < sequence.length;

  const handleActivate = () => {
    if (isRunning) return;

    let step = 0;
    setActivationStep(0);

    const interval = setInterval(() => {
      step++;
      if (step < sequence.length) {
        setActivationStep(step);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
  
  const handleReset = () => {
    setActivationStep(-1);
  }

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <GitBranch className="text-teal-400" /> Caixa de Luz da Fundação
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Painel de distribuição quântica e ativação sequencial da malha energética da Fundação.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="flex gap-4 mb-8">
        <Button onClick={handleActivate} disabled={isRunning}>
          <Zap className="mr-2 h-4 w-4"/>
          {activationStep === -1 ? 'Ligar Caixa de Luz' : 'Sequência em Andamento...'}
        </Button>
        <Button onClick={handleReset} variant="outline">
          Resetar
        </Button>
      </div>

      <div className="w-full max-w-2xl space-y-2">
        {sequence.map((stageKey, index) => {
          const stage = caixaDeLuz[stageKey as Stage];
          const isActive = index <= activationStep;

          return (
            <AnimatePresence key={stageKey}>
              {index <= activationStep && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className={cn("bg-card/50", isActive && "border-green-500/50")}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className={cn("w-4 h-4 rounded-full", stage.color)}></div>
                        {stage.label}
                        {isActive && <CheckCircle className="h-5 w-5 text-green-500" />}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {stage.modules.map((mod) => (
                        <div key={mod} className="relative p-2 text-center border border-primary/30 bg-background/20 rounded-md">
                           <ModuleBar code={mod} active={isActive} />
                           <span className="relative font-mono text-sm">{mod}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                   {index < sequence.length - 1 && (
                     <div className="flex justify-center py-2">
                       <ChevronDown className={cn("h-6 w-6 text-primary/30", isActive && "text-green-500 animate-pulse")} />
                     </div>
                   )}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectionPage;
