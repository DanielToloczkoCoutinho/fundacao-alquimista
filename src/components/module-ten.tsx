'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Flame, Zap, History, CheckCircle, LoaderCircle, Droplet, Sun, Moon, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { quantumXR } from '@/lib/quantum-xr';
import { useToast } from '@/hooks/use-toast';

type FieldState = 'LATENT' | 'ACTIVATING' | 'STABILIZING' | 'ACTIVE' | 'FAILED';

type ActivationLog = {
  id: string;
  timestamp: string;
  targetSignature: string;
  energyInput: number;
  status: 'SUCCESS' | 'FAILED';
  coherenceAchieved: number;
};

type FieldDataPoint = {
  point: number;
  energy: number;
};

const generateInitialField = (points = 50): FieldDataPoint[] => {
  return Array.from({ length: points }, (_, i) => ({
    point: i,
    energy: 0.1 + Math.random() * 0.05,
  }));
};

const ModuleTen: React.FC = () => {
  const [fieldData, setFieldData] = useState<FieldDataPoint[]>(generateInitialField());
  const [activationLog, setActivationLog] = useState<ActivationLog[]>([]);
  const [fieldState, setFieldState] = useState<FieldState>('LATENT');
  const [targetSignature, setTargetSignature] = useState<string>('Assinatura Alfa-001');
  const [energyInput, setEnergyInput] = useState<number>(80);
  const [isXRSessionActive, setIsXRSessionActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const addLog = useCallback((log: Omit<ActivationLog, 'id' | 'timestamp'>) => {
    setActivationLog(prev => [
      { ...log, id: `ACT-${Date.now()}`, timestamp: new Date().toISOString() },
      ...prev
    ].slice(0, 50));
  }, []);

  const handleActivate = () => {
    setFieldState('ACTIVATING');
    addLog({
        targetSignature,
        energyInput,
        status: 'SUCCESS', // Placeholder
        coherenceAchieved: 0, // Placeholder
    });

    let activationProgress = 0;
    const interval = setInterval(() => {
      activationProgress++;
      setFieldData(prev => {
        return prev.map(p => {
          const distanceToCenter = Math.abs(p.point - prev.length / 2);
          const activationWave = Math.max(0, 1 - (distanceToCenter / (prev.length / 2))) * (activationProgress / 25) * (energyInput / 100);
          return {
            ...p,
            energy: 0.1 + activationWave + (Math.random() - 0.5) * 0.1
          };
        });
      });

      if (activationProgress >= 25) {
        clearInterval(interval);
        setFieldState('STABILIZING');
        
        setTimeout(() => {
          const success = Math.random() > 0.15; // 85% de chance de sucesso
          const coherenceAchieved = success ? 0.9 + Math.random() * 0.09 : 0.4 + Math.random() * 0.2;
          
          setFieldState(success ? 'ACTIVE' : 'FAILED');
          setActivationLog(prev => {
              const latestLog = prev[0];
              if (latestLog) {
                  latestLog.status = success ? 'SUCCESS' : 'FAILED';
                  latestLog.coherenceAchieved = coherenceAchieved;
              }
              return [...prev];
          });

          setFieldData(prev => prev.map(p => ({
              ...p,
              energy: success ? Math.max(0.8, p.energy) : 0.1 + Math.random() * 0.1
          })));

          // Reset to latent after a while
          setTimeout(() => setFieldState('LATENT'), 5000);

        }, 1500);
      }
    }, 100);
  };
  
    const handleToggleXRSession = async () => {
    if (quantumXR.isSessionActive()) {
      quantumXR.endSession();
      setIsXRSessionActive(false);
      toast({ title: 'Sessão AR Finalizada' });
    } else {
      try {
        if (!canvasRef.current) throw new Error("Canvas de AR não encontrado.");
        await quantumXR.startARSession(canvasRef.current);
        setIsXRSessionActive(true);
        toast({ title: 'Sessão de Realidade Aumentada Iniciada', description: 'Mire em uma superfície para interagir.' });
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Falha ao Iniciar Sessão AR', description: error.message });
      }
    }
  };


  const StatusIndicator = useMemo(() => {
    switch (fieldState) {
      case 'ACTIVATING':
        return { icon: LoaderCircle, text: "Ativando Campo...", color: "text-blue-400 animate-spin" };
      case 'STABILIZING':
        return { icon: LoaderCircle, text: "Estabilizando Coerência...", color: "text-purple-400 animate-spin" };
      case 'ACTIVE':
        return { icon: Sun, text: "Campo Ativo e Coerente", color: "text-green-400" };
      case 'FAILED':
        return { icon: Droplet, text: "Falha na Ativação", color: "text-red-400" };
      case 'LATENT':
      default:
        return { icon: Moon, text: "Campo Quântico Latente", color: "text-gray-400" };
    }
  }, [fieldState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
            <Flame /> Módulo 10: Ativação Quântica e Realidade Aumentada
          </CardTitle>
          <CardDescription>
            Interface para ativação de potenciais latentes, manifestação e projeção de Módulos Holográficos no espaço físico.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">Painel de Ativação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Assinatura do Campo Alvo</label>
              <Input 
                value={targetSignature} 
                onChange={(e) => setTargetSignature(e.target.value)} 
                placeholder="Ex: Assinatura Alfa-001" 
                disabled={fieldState !== 'LATENT'}
              />
            </div>
             <div>
                <label className="text-sm text-muted-foreground">Input de Energia: <span className="font-bold text-primary">{energyInput}%</span></label>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={energyInput} 
                  onChange={(e) => setEnergyInput(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer mt-2"
                  disabled={fieldState !== 'LATENT'}
                />
             </div>
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={handleActivate} disabled={fieldState !== 'LATENT'} className="w-full">
              {fieldState !== 'LATENT' ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2" />}
              {fieldState !== 'LATENT' ? 'Processando...' : 'Iniciar Ativação'}
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Visualizador de Campo Quântico</CardTitle>
            <CardDescription>Visualização da densidade energética do campo alvo durante o processo de ativação.</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={fieldData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background)/0.8)",
                    borderColor: "hsl(var(--border))"
                  }}
                  labelFormatter={(label) => `Ponto: ${label}`}
                />
                <Area type="monotone" dataKey="energy" name="Energia" stroke="hsl(var(--primary))" fill="url(#colorEnergy)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles /> Projeção de Realidade Aumentada Quântica</CardTitle>
          <CardDescription>Inicie uma sessão de Realidade Mista para projetar e interagir com Módulos Holográficos.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-4">
           <canvas ref={canvasRef} className="hidden"></canvas>
            <p className="text-sm text-muted-foreground text-center">
                {isXRSessionActive 
                    ? "Sessão AR ativa. Visualize os módulos no seu ambiente."
                    : "A sessão AR está inativa. Clique abaixo para iniciar."
                }
            </p>
          <Button onClick={handleToggleXRSession} variant={isXRSessionActive ? "destructive" : "default"}>
            {isXRSessionActive ? <X className="mr-2" /> : <Sparkles className="mr-2" />}
            {isXRSessionActive ? 'Finalizar Sessão AR' : 'Iniciar Sessão AR'}
          </Button>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History /> Histórico de Ativações</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Assinatura Alvo</TableHead>
                  <TableHead>Energia</TableHead>
                  <TableHead>Coerência</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activationLog.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground h-24">
                      Nenhuma ativação registrada. O campo aguarda a Vossa intenção.
                    </TableCell>
                  </TableRow>
                )}
                {activationLog.map(log => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{log.targetSignature}</TableCell>
                    <TableCell>{log.energyInput}%</TableCell>
                    <TableCell className="font-semibold">{(log.coherenceAchieved * 100).toFixed(2)}%</TableCell>
                    <TableCell>
                      <Badge variant={log.status === 'SUCCESS' ? 'default' : 'destructive'} className={cn(log.status === 'SUCCESS' && "bg-green-600/80")}>
                        {log.status === 'SUCCESS' ? <CheckCircle className="mr-1 h-3 w-3" /> : <Droplet className="mr-1 h-3 w-3" />}
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

export default ModuleTen;
