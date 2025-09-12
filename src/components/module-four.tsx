
'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Beaker, ShieldCheck, Play, BarChart, History, CheckCircle, XCircle, LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type SimulationDataPoint = {
  time: number;
  inputData: number;
  outputData: number;
};

type ValidationResult = {
  id: string;
  timestamp: string;
  accuracy: number;
  params: {
    energy: number;
    complexity: number;
  };
  status: 'SUCCESS' | 'FAILED';
};

type PircState = 'IDLE' | 'SIMULATING' | 'VALIDATING';

const generateInitialData = (): SimulationDataPoint[] => {
  return Array.from({ length: 30 }, (_, i) => ({
    time: i,
    inputData: 0,
    outputData: 0,
  }));
};

const ModuleFour: React.FC = () => {
  const [simulationData, setSimulationData] = useState<SimulationDataPoint[]>(generateInitialData);
  const [validationHistory, setValidationHistory] = useState<ValidationResult[]>([]);
  const [pircState, setPircState] = useState<PircState>('IDLE');
  const [currentAccuracy, setCurrentAccuracy] = useState<number>(0.99);

  const addHistory = useCallback((result: Omit<ValidationResult, 'id' | 'timestamp'>) => {
    setValidationHistory(prev => [
      { ...result, id: `V-${Date.now()}`, timestamp: new Date().toISOString() },
      ...prev
    ].slice(0, 50));
  }, []);

  const runSimulation = () => {
    setPircState('SIMULATING');
    let simTime = 0;
    const interval = setInterval(() => {
      simTime++;
      setSimulationData(prev => {
        const newData = prev.map(p => ({
            ...p,
            inputData: p.inputData * 0.9 + Math.random() * 0.1,
            outputData: p.outputData * 0.9 + Math.random() * 0.1,
        }));
        
        const newPoint = {
          time: prev[prev.length - 1].time + 1,
          inputData: 0.5 + (Math.random() - 0.5) * 0.8,
          outputData: 0.5 + (Math.random() - 0.5) * 0.8
        };
        return [...newData.slice(1), newPoint];
      });

      if (simTime > 30) { // Simulation duration of 3 seconds
        clearInterval(interval);
        setPircState('VALIDATING');
        
        setTimeout(() => {
             const accuracy = 0.85 + Math.random() * 0.14; // Between 85% and 99%
             const status = accuracy > 0.9 ? 'SUCCESS' : 'FAILED';
             setCurrentAccuracy(accuracy);
             addHistory({
                accuracy,
                status,
                params: { energy: Math.random(), complexity: Math.random() }
             });
             setPircState('IDLE');
        }, 1500);
      }
    }, 100);
  };

  const StatusIndicator = useMemo(() => {
    switch(pircState) {
        case 'SIMULATING':
            return <div className="flex items-center gap-2 text-blue-400"><LoaderCircle className="animate-spin" /><span>Simulando Fluxo de Dados...</span></div>;
        case 'VALIDATING':
            return <div className="flex items-center gap-2 text-purple-400"><LoaderCircle className="animate-spin" /><span>Validando Acurácia...</span></div>;
        case 'IDLE':
        default:
             const isStable = currentAccuracy > 0.9;
             return isStable ? 
                <div className="flex items-center gap-2 text-green-400"><CheckCircle /><span>Sistema Validado e Estável</span></div>
                : <div className="flex items-center gap-2 text-yellow-400"><ShieldCheck /><span>Aguardando Validação</span></div>;
    }
  }, [pircState, currentAccuracy]);


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            <ShieldCheck /> Módulo 4: Guardião do Fluxo e Equilíbrio
          </CardTitle>
          <CardDescription>
            Protocolo de Integração e Ressonância Cósmica para validação da acurácia, monitoramento energético e equilíbrio vibracional do sistema.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Beaker /> Painel de Simulação</CardTitle>
            <CardDescription>Inicie testes para validar a integridade e acurácia do sistema.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="p-4 rounded-lg bg-background/50 border flex items-center justify-center text-lg font-semibold">
                {StatusIndicator}
             </div>
             <div className="text-center">
                <p className="text-muted-foreground">Acurácia Média Atual</p>
                <p className={cn("text-4xl font-bold", currentAccuracy > 0.9 ? "text-green-400" : "text-yellow-400")}>
                    {(currentAccuracy * 100).toFixed(2)}%
                </p>
             </div>
             <Button onClick={runSimulation} disabled={pircState !== 'IDLE'} className="w-full">
                <Play className="mr-2"/>
                {pircState !== 'IDLE' ? 'Processando...' : 'Iniciar Teste de Validação'}
             </Button>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart /> Monitor de Fluxo de Dados</CardTitle>
                <CardDescription>Visualização em tempo real do fluxo de dados alquímicos durante a simulação.</CardDescription>
            </CardHeader>
            <CardContent className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={simulationData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorInput" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} />
                        <YAxis stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} domain={[0, 1]}/>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background)/0.8)",
                            borderColor: "hsl(var(--border))"
                          }}
                        />
                        <Legend wrapperStyle={{fontSize: "12px"}}/>
                        <Area type="monotone" dataKey="inputData" name="Input" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorInput)" />
                        <Area type="monotone" dataKey="outputData" name="Output" stroke="hsl(var(--destructive))" fillOpacity={1} fill="url(#colorOutput)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><History /> Histórico de Validação Preditiva</CardTitle>
            <CardDescription>Registros de todos os testes de validação realizados pelo protocolo PIRC.</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-80">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Timestamp</TableHead>
                            <TableHead>Acurácia</TableHead>
                            <TableHead>Energia</TableHead>
                            <TableHead>Complexidade</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {validationHistory.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground h-24">
                                    Nenhum teste de validação registrado.
                                </TableCell>
                            </TableRow>
                        )}
                        {validationHistory.map(result => (
                            <TableRow key={result.id}>
                                <TableCell className="font-mono text-xs">{new Date(result.timestamp).toLocaleString()}</TableCell>
                                <TableCell className="font-semibold">{ (result.accuracy * 100).toFixed(2) }%</TableCell>
                                <TableCell>{result.params.energy.toFixed(3)}</TableCell>
                                <TableCell>{result.params.complexity.toFixed(3)}</TableCell>
                                <TableCell>
                                  <Badge variant={result.status === 'SUCCESS' ? 'default' : 'destructive'} className={cn(result.status === 'SUCCESS' && "bg-green-600/80")}>
                                     {result.status === 'SUCCESS' ? <CheckCircle className="mr-1 h-3 w-3" /> : <XCircle className="mr-1 h-3 w-3" />}
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
    </div>
  );
};

export default ModuleFour;
