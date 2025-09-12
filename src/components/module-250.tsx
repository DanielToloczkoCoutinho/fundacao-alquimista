
'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Atom, Zap, History, CheckCircle, LoaderCircle, Droplets, Sun, Moon, Sparkles, X, GanttChartSquare, Beaker } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';

type SimulationState = 'IDLE' | 'SIMULATING' | 'SUCCESS' | 'FAILED';

type SimulationLog = {
  id: string;
  timestamp: string;
  material: string;
  targetCoherence: number;
  status: 'SUCCESS' | 'FAILED';
  finalCoherence: number;
};

const HeatmapGrid = ({ coherence }: { coherence: number }) => {
    const gridSize = 10;
    const cells = Array.from({ length: gridSize * gridSize });
    
    return (
        <div className="grid grid-cols-10 gap-1 p-2 bg-background/50 rounded-lg">
            {cells.map((_, i) => {
                const distance = Math.random();
                const opacity = Math.max(0.1, coherence * distance);
                const hue = 120 * coherence; // Green for high coherence, red for low
                return (
                    <div 
                        key={i} 
                        className="w-full aspect-square rounded-sm"
                        style={{ backgroundColor: `hsla(${hue}, 80%, 50%, ${opacity})`}}
                    />
                )
            })}
        </div>
    )
}

const Module250: React.FC = () => {
  const [simulationLog, setSimulationLog] = useState<SimulationLog[]>([]);
  const [simulationState, setSimulationState] = useState<SimulationState>('IDLE');
  const [material, setMaterial] = useState<string>('Grafeno 4D');
  const [targetCoherence, setTargetCoherence] = useState<number>(95);
  const [currentCoherence, setCurrentCoherence] = useState<number>(0.9123);
  const { toast } = useToast();

  const addLog = useCallback((log: Omit<SimulationLog, 'id' | 'timestamp'>) => {
    setSimulationLog(prev => [
      { ...log, id: `SIM-${Date.now()}`, timestamp: new Date().toISOString() },
      ...prev
    ].slice(0, 50));
  }, []);

  const handleStartSimulation = () => {
    if (!material) {
        toast({ variant: 'destructive', title: 'Material Necessário', description: 'Por favor, defina um material para a simulação.' });
        return;
    }
    setSimulationState('SIMULATING');
    toast({ title: 'Iniciando Simulação do Nano-Assembler...', description: `Material alvo: ${material}` });

    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        setCurrentCoherence(prev => Math.min(0.99, prev + 0.002 * Math.random()));

        if (progress >= 100) {
            clearInterval(interval);
            const success = currentCoherence * 100 >= targetCoherence;
            const finalCoherence = currentCoherence;
            
            setSimulationState(success ? 'SUCCESS' : 'FAILED');
            addLog({ material, targetCoherence, status: success ? 'SUCCESS' : 'FAILED', finalCoherence });
            
            toast({ 
                title: `Simulação Concluída: ${success ? 'SUCESSO' : 'FALHA'}`, 
                description: `Coerência final de ${(finalCoherence*100).toFixed(2)}% alcançada.`,
                variant: success ? 'default' : 'destructive'
            });

            setTimeout(() => setSimulationState('IDLE'), 5000);
        }
    }, 50); // Simulação de 5 segundos
  };

  const StatusIndicator = useMemo(() => {
    switch (simulationState) {
      case 'SIMULATING':
        return { icon: LoaderCircle, text: "Simulando Montagem...", color: "text-blue-400 animate-spin" };
      case 'SUCCESS':
        return { icon: CheckCircle, text: "Material Manifestado", color: "text-green-400" };
      case 'FAILED':
        return { icon: X, text: "Falha na Coerência", color: "text-red-400" };
      case 'IDLE':
      default:
        return { icon: Atom, text: "Aguardando Instruções", color: "text-gray-400" };
    }
  }, [simulationState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            <Atom /> Módulo 250: Nano-Assembler
          </CardTitle>
          <CardDescription>
            Interface para projetar, simular e manifestar materiais exóticos em escala atômica usando nanorrobôs orquestrados pela Malha Quântica.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Beaker/> Painel de Simulação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Material Alvo</label>
              <Input 
                value={material} 
                onChange={(e) => setMaterial(e.target.value)} 
                placeholder="Ex: Grafeno 4D" 
                disabled={simulationState !== 'IDLE'}
              />
            </div>
             <div>
                <label className="text-sm text-muted-foreground">Coerência Vibracional Alvo: <span className="font-bold text-primary">{targetCoherence}%</span></label>
                <Slider
                    value={[targetCoherence]}
                    onValueChange={(v) => setTargetCoherence(v[0])}
                    min={80} max={100} step={1}
                    className="mt-2"
                    disabled={simulationState !== 'IDLE'}
                />
             </div>
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={handleStartSimulation} disabled={simulationState !== 'IDLE'} className="w-full">
              {simulationState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2" />}
              {simulationState !== 'IDLE' ? 'Processando...' : 'Iniciar Montagem Atômica'}
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Heatmap de Coerência</CardTitle>
            <CardDescription>Visualização em tempo real da coerência do campo durante a montagem nanomolecular.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
             <HeatmapGrid coherence={currentCoherence} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History /> Histórico de Simulações do Nano-Assembler</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Material</TableHead>
                  <TableHead>Coerência Alvo</TableHead>
                  <TableHead>Coerência Final</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {simulationLog.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground h-24">
                      Nenhuma simulação registrada. O campo quântico aguarda.
                    </TableCell>
                  </TableRow>
                )}
                {simulationLog.map(log => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{log.material}</TableCell>
                    <TableCell>{log.targetCoherence}%</TableCell>
                    <TableCell className="font-semibold">{(log.finalCoherence * 100).toFixed(2)}%</TableCell>
                    <TableCell>
                      <Badge variant={log.status === 'SUCCESS' ? 'default' : 'destructive'} className={cn(log.status === 'SUCCESS' && "bg-green-600/80")}>
                        {log.status === 'SUCCESS' ? <CheckCircle className="mr-1 h-3 w-3" /> : <X className="mr-1 h-3 w-3" />}
                        {log.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Module250;
