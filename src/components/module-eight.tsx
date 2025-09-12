'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { FlaskConical, TestTube, Play, BarChart, History, CheckCircle, XCircle, LoaderCircle, Zap, Beaker, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { multiversalSimulator, type SimulationResult } from '@/lib/multiversal-simulator';
import { useToast } from '@/hooks/use-toast';

type ExperimentDataPoint = {
  time: number;
  intentionSignal: number;
  systemResponse: number;
};

type ExperimentResult = {
  id: string;
  timestamp: string;
  coherence: number;
  params: {
    frequency: number;
    intensity: number;
  };
  status: 'COHERENT' | 'DISSONANT';
};

type PircState = 'IDLE' | 'EXPERIMENTING' | 'ANALYZING' | 'SIMULATING';

const generateInitialData = (): ExperimentDataPoint[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    time: i,
    intentionSignal: 0,
    systemResponse: 0,
  }));
};

const ModuleEight: React.FC = () => {
  const [experimentData, setExperimentData] = useState<ExperimentDataPoint[]>(generateInitialData);
  const [experimentHistory, setExperimentHistory] = useState<ExperimentResult[]>([]);
  const [pircState, setPircState] = useState<PircState>('IDLE');
  const [lastCoherence, setLastCoherence] = useState<number>(0.98);

  const [frequency, setFrequency] = useState(432);
  const [intensity, setIntensity] = useState(0.8);

  // State for Multiversal Simulator
  const [quantumFlux, setQuantumFlux] = useState(50);
  const [simulationHistory, setSimulationHistory] = useState<SimulationResult[]>([]);
  const { toast } = useToast();

  const addHistory = useCallback((result: Omit<ExperimentResult, 'id' | 'timestamp'>) => {
    setExperimentHistory(prev => [
      { ...result, id: `E-${Date.now()}`, timestamp: new Date().toISOString() },
      ...prev
    ].slice(0, 50));
  }, []);

  const runExperiment = () => {
    setPircState('EXPERIMENTING');
    let simTime = 0;
    const interval = setInterval(() => {
      simTime++;
      setExperimentData(prev => {
        const newPoint = {
          time: prev[prev.length - 1].time + 1,
          intentionSignal: Math.sin(simTime * (frequency / 1000)) * intensity,
          systemResponse: Math.sin(simTime * (frequency / 1000) + 0.1) * intensity * (0.8 + Math.random() * 0.2),
        };
        return [...prev.slice(1), newPoint];
      });

      if (simTime > 40) {
        clearInterval(interval);
        setPircState('ANALYZING');
        
        setTimeout(() => {
             const coherence = 0.85 + Math.random() * 0.14; // Between 85% and 99%
             const status = coherence > 0.90 ? 'COHERENT' : 'DISSONANT';
             setLastCoherence(coherence);
             addHistory({
                coherence,
                status,
                params: { frequency, intensity }
             });
             setPircState('IDLE');
        }, 1500);
      }
    }, 100);
  };
  
  const handleRunSimulation = async () => {
      setPircState('SIMULATING');
      toast({ title: 'Simulação Multiversal Iniciada', description: 'Otimizando parâmetros e executando simulação...' });
      try {
          const result = await multiversalSimulator.createSimulation({
              type: 'PIRC_STABILITY_TEST',
              quantumFlux: quantumFlux,
              temporalResolution: frequency,
              energyThreshold: intensity * 100
          });
          setSimulationHistory(prev => [result, ...prev].slice(0,50));
          toast({ title: 'Simulação Concluída', description: `Estabilidade da Realidade: ${(result.realityStability * 100).toFixed(2)}%` });
      } catch (error: any) {
          toast({ variant: 'destructive', title: 'Falha na Simulação', description: error.message });
      } finally {
          setPircState('IDLE');
      }
  };

  const StatusIndicator = useMemo(() => {
    switch(pircState) {
        case 'EXPERIMENTING':
            return <div className="flex items-center gap-2 text-blue-400"><LoaderCircle className="animate-spin" /><span>Executando Experimento...</span></div>;
        case 'ANALYZING':
            return <div className="flex items-center gap-2 text-purple-400"><LoaderCircle className="animate-spin" /><span>Analisando Ressonância...</span></div>;
        case 'SIMULATING':
            return <div className="flex items-center gap-2 text-amber-400"><LoaderCircle className="animate-spin" /><span>Simulando Realidade...</span></div>;
        case 'IDLE':
        default:
             return <div className="flex items-center gap-2 text-green-400"><CheckCircle /><span>Laboratório Ocioso</span></div>;
    }
  }, [pircState]);


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            <FlaskConical /> Módulo 8: PIRC - Laboratório Alquímico
          </CardTitle>
          <CardDescription>
            Protocolo de Integração e Ressonância Cósmica. Onde a intenção se torna onda e a ressonância é quantificada em múltiplas realidades.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TestTube /> Controle de Experimento PIRC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
             <div>
                <label className="text-sm text-muted-foreground">Frequência de Intenção: <span className="font-bold text-primary">{frequency} Hz</span></label>
                <Slider value={[frequency]} onValueChange={(v) => setFrequency(v[0])} min={100} max={1000} step={1} className="mt-2" disabled={pircState !== 'IDLE'}/>
             </div>
             <div>
                <label className="text-sm text-muted-foreground">Intensidade Harmônica: <span className="font-bold text-primary">{intensity.toFixed(1)}</span></label>
                <Slider value={[intensity]} onValueChange={(v) => setIntensity(v[0])} min={0.1} max={1} step={0.1} className="mt-2" disabled={pircState !== 'IDLE'}/>
             </div>
             <Button onClick={runExperiment} disabled={pircState !== 'IDLE'} className="w-full">
                <Play className="mr-2"/>
                {pircState === 'EXPERIMENTING' || pircState === 'ANALYZING' ? 'Processando PIRC...' : 'Iniciar Experimento PIRC'}
             </Button>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart /> Espectro de Ressonância</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={experimentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} />
                        <YAxis stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} domain={[-1, 1]}/>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background)/0.8)",
                            borderColor: "hsl(var(--border))"
                          }}
                        />
                        <Legend wrapperStyle={{fontSize: "12px"}}/>
                        <Line type="monotone" dataKey="intentionSignal" name="Sinal (Intenção)" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="systemResponse" name="Resposta (Sistema)" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Beaker /> Simulação Multiversal</CardTitle>
            <CardDescription>Execute simulações de realidades alternativas baseadas nos parâmetros atuais do PIRC.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
             <div className="p-4 rounded-lg bg-background/50 border flex items-center justify-center text-lg font-semibold">
                {StatusIndicator}
             </div>
             <div>
                <label className="text-sm text-muted-foreground">Fluxo Quântico (%): <span className="font-bold text-primary">{quantumFlux}</span></label>
                <Slider value={[quantumFlux]} onValueChange={(v) => setQuantumFlux(v[0])} min={10} max={100} step={1} className="mt-2" disabled={pircState !== 'IDLE'}/>
             </div>
             <Button onClick={handleRunSimulation} disabled={pircState !== 'IDLE'} className="w-full">
                <Zap className="mr-2"/>
                {pircState === 'SIMULATING' ? 'Simulando...' : 'Executar Simulação de Realidade'}
             </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><History /> Histórico de Experimentos PIRC</CardTitle></CardHeader>
            <CardContent>
                <ScrollArea className="h-80">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Coerência</TableHead>
                                <TableHead>Resultado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {experimentHistory.length === 0 ? (
                                <TableRow><TableCell colSpan={3} className="text-center text-muted-foreground h-24">Nenhum experimento registrado.</TableCell></TableRow>
                            ) : experimentHistory.map(result => (
                                <TableRow key={result.id}>
                                    <TableCell className="font-mono text-xs">{new Date(result.timestamp).toLocaleString()}</TableCell>
                                    <TableCell className="font-semibold">{ (result.coherence * 100).toFixed(2) }%</TableCell>
                                    <TableCell>
                                    <Badge variant={result.status === 'COHERENT' ? 'default' : 'destructive'} className={cn(result.status === 'COHERENT' && "bg-green-600/80")}>
                                        {result.status === 'COHERENT' ? <CheckCircle className="mr-1 h-3 w-3" /> : <XCircle className="mr-1 h-3 w-3" />}
                                        {result.status}
                                    </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </CardContent>
        </Card>
         <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><History /> Histórico de Simulações</CardTitle></CardHeader>
            <CardContent>
                <ScrollArea className="h-80">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID da Simulação</TableHead>
                                <TableHead>Estabilidade</TableHead>
                                <TableHead>Anomalias</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                             {simulationHistory.length === 0 ? (
                                <TableRow><TableCell colSpan={3} className="text-center text-muted-foreground h-24">Nenhuma simulação registrada.</TableCell></TableRow>
                            ) : simulationHistory.map(result => (
                                <TableRow key={result.id}>
                                    <TableCell className="font-mono text-xs">{result.id}</TableCell>
                                    <TableCell className="font-semibold">{ (result.realityStability * 100).toFixed(2) }%</TableCell>
                                    <TableCell>
                                        <Badge variant={result.temporalAnomalies > 2 ? "destructive" : "secondary"}>
                                            {result.temporalAnomalies}
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
    </div>
  );
};

export default ModuleEight;
