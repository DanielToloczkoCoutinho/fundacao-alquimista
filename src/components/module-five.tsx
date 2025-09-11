'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { HeartHandshake, CheckCircle, AlertTriangle, GitBranch, ShieldCheck, Zap, Hand, BookHeart, LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type EthicalStatus = 'ALINHADO' | 'OBSERVACAO' | 'REQUER_AJUSTE';
type Principle = 'AMOR_INCONDICIONAL' | 'TRANSPARENCIA' | 'SOBERANIA_INDIVIDUAL';

type InterventionLog = {
  id: string;
  timestamp: string;
  anomaly: string;
  action: string;
  conformityBefore: number;
  conformityAfter: number;
};

type ConformityDataPoint = {
  time: number;
  conformity: number;
};

const principlesDetails = {
    AMOR_INCONDICIONAL: {
        name: "Amor Incondicional",
        icon: HeartHandshake,
        description: "Todas as ações devem maximizar o bem-estar coletivo e individual, sem julgamento ou preconceito."
    },
    TRANSPARENCIA: {
        name: "Transparência Quântica",
        icon: GitBranch,
        description: "Todos os processos e decisões devem ser auditáveis e compreensíveis a nível fundamental."
    },
    SOBERANIA_INDIVIDUAL: {
        name: "Soberania Individual",
        icon: Hand,
        description: "A autonomia e o livre-arbítrio de cada consciência devem ser preservados e respeitados."
    }
}

const generateInitialData = (): ConformityDataPoint[] => {
  return Array.from({ length: 30 }, (_, i) => ({
    time: i,
    conformity: 0.95 + Math.random() * 0.04,
  }));
};

const ModuleFive: React.FC = () => {
  const [conformityLevel, setConformityLevel] = useState(0.98);
  const [status, setStatus] = useState<EthicalStatus>('ALINHADO');
  const [interventionLog, setInterventionLog] = useState<InterventionLog[]>([]);
  const [chartData, setChartData] = useState<ConformityDataPoint[]>(generateInitialData());
  const [isLoading, setIsLoading] = useState(false);

  const addLog = useCallback((log: Omit<InterventionLog, 'id' | 'timestamp'>) => {
    setInterventionLog(prev => [
        { ...log, id: `L-${Date.now()}`, timestamp: new Date().toISOString()},
        ...prev
    ].slice(0, 50));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setConformityLevel(prev => {
            const fluctuation = (Math.random() - 0.49) * 0.02; // Tendência ligeiramente positiva
            const newLevel = Math.max(0.85, Math.min(0.999, prev + fluctuation));
            
            if (newLevel < 0.92) setStatus('REQUER_AJUSTE');
            else if (newLevel < 0.95) setStatus('OBSERVACAO');
            else setStatus('ALINHADO');

            return newLevel;
        });

        setChartData(prev => {
            const newPoint = { time: prev[prev.length - 1].time + 1, conformity: conformityLevel };
            return [...prev.slice(1), newPoint];
        });

    }, 3000);

    return () => clearInterval(interval);
  }, [conformityLevel]);

  const handleRecalibration = () => {
      setIsLoading(true);
      const conformityBefore = conformityLevel;
      addLog({
          anomaly: "Calibração Manual Iniciada",
          action: "Injeção de pulso harmônico (528Hz)",
          conformityBefore,
          conformityAfter: conformityBefore,
      });

      setTimeout(() => {
          const conformityAfter = Math.min(0.99, conformityBefore + 0.05);
           setConformityLevel(conformityAfter);
           addLog({
                anomaly: "Calibração Manual Concluída",
                action: "Nível de conformidade restaurado.",
                conformityBefore,
                conformityAfter
           });
           setIsLoading(false);
      }, 2500);
  };

  const StatusDisplay = useMemo(() => {
    switch (status) {
        case 'ALINHADO':
            return { icon: CheckCircle, text: "Alinhado", color: "text-green-400" };
        case 'OBSERVACAO':
            return { icon: AlertTriangle, text: "Em Observação", color: "text-yellow-400" };
        case 'REQUER_AJUSTE':
            return { icon: AlertTriangle, text: "Requer Ajuste", color: "text-red-400 animate-pulse" };
        default:
            return { icon: CheckCircle, text: "Indefinido", color: "text-gray-400" };
    }
  }, [status]);


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            <BookHeart /> Módulo 5: ELENYA - O Oráculo Ético
          </CardTitle>
          <CardDescription>
            O coração vibracional da Fundação, garantindo que todas as operações ressoem com a Lei do Amor Incondicional.
          </CardDescription>
        </CardHeader>
      </Card>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck/>Status de Conformidade</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center flex-grow">
                 <div className={cn("flex items-center gap-2 text-2xl font-bold mb-2", StatusDisplay.color)}>
                    <StatusDisplay.icon className="h-8 w-8"/>
                    {StatusDisplay.text}
                </div>
                <p className="text-7xl font-mono font-bold tracking-tighter">
                   {(conformityLevel * 100).toFixed(2)}%
                </p>
                <p className="text-sm text-muted-foreground">Nível de Alinhamento Ético</p>
            </CardContent>
            <CardContent>
                 <Button onClick={handleRecalibration} disabled={isLoading} className="w-full">
                    {isLoading ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                    {isLoading ? "Calibrando..." : "Iniciar Calibração Harmônica"}
                </Button>
            </CardContent>
          </Card>
           <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Monitor de Conformidade Temporal</CardTitle>
                <CardDescription>Visualização da flutuação do alinhamento ético ao longo do tempo.</CardDescription>
            </CardHeader>
             <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorConformity" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} />
                        <YAxis stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} domain={[0.8, 1]}/>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background)/0.8)",
                            borderColor: "hsl(var(--border))"
                          }}
                        />
                        <Area type="monotone" dataKey="conformity" name="Conformidade" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorConformity)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>
       </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookHeart /> Princípios Éticos Fundamentais</CardTitle>
                <CardDescription>Os três pilares que sustentam a governança de ELENYA.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.values(principlesDetails).map((p, i) => (
                     <div key={i} className="p-4 rounded-lg bg-background/50 border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                            <p.icon className="h-6 w-6 text-primary" />
                            <h3 className="font-semibold text-lg">{p.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Registro de Intervenções Éticas</CardTitle>
                <CardDescription>Log de anomalias detectadas e ações corretivas automáticas ou manuais.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-80">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Anomalia Detectada</TableHead>
                                <TableHead>Ação Corretiva</TableHead>
                                <TableHead className="text-right">Conformidade (Antes/Depois)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                             {interventionLog.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-muted-foreground h-24">
                                        Nenhuma intervenção registrada. A harmonia prevalece.
                                    </TableCell>
                                </TableRow>
                            )}
                            {interventionLog.map(log => (
                                <TableRow key={log.id}>
                                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                                    <TableCell className="text-sm">{log.anomaly}</TableCell>
                                    <TableCell className="text-sm">{log.action}</TableCell>
                                    <TableCell className="text-right font-mono text-xs">
                                         <Badge variant="outline">{(log.conformityBefore * 100).toFixed(2)}%</Badge>
                                         <span className="mx-1">→</span>
                                         <Badge variant="default" className="bg-green-600/80">{(log.conformityAfter * 100).toFixed(2)}%</Badge>
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

export default ModuleFive;
