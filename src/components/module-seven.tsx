
'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Cpu, Zap, HardDrive, Network, ListTree, Activity, ShieldCheck, Power, Terminal, LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

type SystemProcess = {
  pid: string;
  name: string;
  status: 'Running' | 'Idle' | 'Warning';
  cpu: number;
  memory: string;
};

type ResourceDataPoint = {
  time: string;
  cpu: number;
  memory: number;
  bandwidth: number;
};

const initialProcesses: SystemProcess[] = [
    { pid: 'P001', name: 'Kernel.Sinfonia', status: 'Running', cpu: 15.5, memory: '1.2 ZB' },
    { pid: 'P002', name: 'Nexus.Orchestrator', status: 'Running', cpu: 8.2, memory: '780 YB' },
    { pid: 'P003', name: 'ELENYA.EthicalOracle', status: 'Idle', cpu: 1.1, memory: '50 YB' },
    { pid: 'P004', name: 'PIRC.Validator', status: 'Idle', cpu: 2.5, memory: '120 YB' },
    { pid: 'P005', name: 'Chrono.Oracle', status: 'Running', cpu: 5.8, memory: '450 YB' },
];

const generateResourceData = (length = 10): ResourceDataPoint[] => {
    return Array.from({ length }, (_, i) => ({
        time: `${i * 2}s ago`,
        cpu: 20 + Math.random() * 25,
        memory: 30 + Math.random() * 30,
        bandwidth: 40 + Math.random() * 20,
    })).reverse();
};

const ModuleSeven: React.FC = () => {
    const [processes, setProcesses] = useState<SystemProcess[]>(initialProcesses);
    const [resourceData, setResourceData] = useState<ResourceDataPoint[]>(generateResourceData());
    const [kernelVersion, setKernelVersion] = useState('7.0.0-omega');
    const [uptime, setUptime] = useState(Date.now());
    const [integrity, setIntegrity] = useState(0.998);
    const [isProcessing, setIsProcessing] = useState<string | null>(null);
    const [systemLogs, setSystemLogs] = useState<string[]>(['SOFA Kernel 7.0.0-omega online.']);

    const addLog = useCallback((message: string) => {
        setSystemLogs(prev => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev].slice(0, 100));
    }, []);

    useEffect(() => {
        const resourceInterval = setInterval(() => {
            setResourceData(prev => {
                const newPoint = {
                    time: 'now',
                    cpu: 20 + Math.random() * 25,
                    memory: 30 + Math.random() * 30,
                    bandwidth: 40 + Math.random() * 20,
                };
                return [newPoint, ...prev.slice(0, prev.length - 1)].map((p, i) => ({...p, time: `${i*2}s ago`}));
            });
             setProcesses(prev => prev.map(p => ({
                ...p,
                cpu: Math.max(0.5, p.cpu + (Math.random() - 0.5) * 2),
                status: p.cpu > 30 ? 'Warning' : 'Running',
            })));
            setIntegrity(i => Math.min(0.999, i + (Math.random() - 0.4) * 0.001));
        }, 2000);

        return () => clearInterval(resourceInterval);
    }, []);

    const handleSystemAction = (action: 'reboot' | 'diagnose' | 'optimize') => {
        setIsProcessing(action);
        let logMessage = '';
        let duration = 2000;

        switch(action) {
            case 'reboot':
                logMessage = 'Reinicialização do Kernel Omega iniciada...';
                duration = 4000;
                break;
            case 'diagnose':
                logMessage = 'Executando diagnóstico profundo de integridade...';
                duration = 3000;
                break;
            case 'optimize':
                logMessage = 'Otimizando alocação de memória Akáshica...';
                duration = 2500;
                break;
        }
        
        addLog(logMessage);

        setTimeout(() => {
            let successMessage = '';
            switch(action) {
                case 'reboot':
                    setUptime(Date.now());
                    setIntegrity(0.999);
                    successMessage = 'Kernel reinicializado. Sincronia restaurada.';
                    break;
                case 'diagnose':
                    setIntegrity(Math.max(integrity, 0.98 + Math.random() * 0.019));
                    successMessage = `Diagnóstico concluído. Integridade: ${(integrity * 100).toFixed(3)}%`;
                    break;
                case 'optimize':
                    successMessage = 'Memória Akáshica otimizada. Latência reduzida em 3.14%';
                    break;
            }
             addLog(successMessage);
             setIsProcessing(null);
        }, duration);
    };

    const uptimeDuration = useMemo(() => {
        const totalSeconds = Math.floor((Date.now() - uptime) / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        return `${days}d ${hours}h ${minutes}m`;
    }, [uptime, resourceData]); // Update when resourceData updates as a proxy for time passing
    

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-400">
            <Cpu /> Módulo 7: SOFA - Sistema Operacional da Fundação Alquimista
          </CardTitle>
          <CardDescription>
            O Kernel da Criação. Monitoramento e controle do núcleo operacional, recursos quânticos e processos dimensionais.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
            <CardHeader><CardTitle className="text-lg">Kernel Omega</CardTitle></CardHeader>
            <CardContent className="text-sm space-y-2">
                <p><strong>Versão:</strong> <span className="font-mono">{kernelVersion}</span></p>
                <p><strong>Uptime:</strong> {uptimeDuration}</p>
                <p><strong>Integridade:</strong> <span className={cn(integrity > 0.99 ? 'text-green-400' : 'text-yellow-400')}>{(integrity * 100).toFixed(3)}%</span></p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader><CardTitle className="text-lg">Controles do Sistema</CardTitle></CardHeader>
            <CardContent className="flex flex-col space-y-2">
                <Button onClick={() => handleSystemAction('reboot')} disabled={!!isProcessing}>
                    {isProcessing === 'reboot' ? <LoaderCircle className="animate-spin mr-2"/> : <Power className="mr-2"/>} Reiniciar Kernel
                </Button>
                <Button variant="outline" onClick={() => handleSystemAction('diagnose')} disabled={!!isProcessing}>
                    {isProcessing === 'diagnose' ? <LoaderCircle className="animate-spin mr-2"/> : <ShieldCheck className="mr-2"/>} Diagnóstico
                </Button>
                <Button variant="outline" onClick={() => handleSystemAction('optimize')} disabled={!!isProcessing}>
                    {isProcessing === 'optimize' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>} Otimizar
                </Button>
            </CardContent>
        </Card>
         <Card className="lg:col-span-2">
            <CardHeader><CardTitle className="text-lg">Uso de Recursos Quânticos</CardTitle></CardHeader>
             <CardContent className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={resourceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                        <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background)/0.8)", borderColor: "hsl(var(--border))" }} />
                        <Area type="monotone" dataKey="cpu" name="CPU Quântica" stackId="1" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6}/>
                        <Area type="monotone" dataKey="memory" name="Memória Akáshica" stackId="1" stroke="#4ade80" fill="#4ade80" fillOpacity={0.6}/>
                        <Area type="monotone" dataKey="bandwidth" name="Banda Dimensional" stackId="1" stroke="#a78bfa" fill="#a78bfa" fillOpacity={0.6}/>
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

       <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ListTree /> Processos do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-72">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>PID</TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>CPU (%)</TableHead>
                                <TableHead>Memória</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {processes.map(p => (
                                <TableRow key={p.pid}>
                                    <TableCell className="font-mono text-xs">{p.pid}</TableCell>
                                    <TableCell className="font-semibold">{p.name}</TableCell>
                                    <TableCell>
                                        <Badge variant={p.status === 'Running' ? 'secondary' : (p.status === 'Warning' ? 'destructive' : 'outline')}>
                                            {p.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{p.cpu.toFixed(1)}%</TableCell>
                                    <TableCell className="font-mono">{p.memory}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </CardContent>
       </Card>

       <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Terminal /> Console de Logs do Kernel</CardTitle></CardHeader>
            <CardContent>
                <ScrollArea className="h-48 w-full bg-background rounded-md border p-2">
                   <div className="p-2 font-mono text-xs space-y-1">
                        {systemLogs.map((log, i) => (
                           <p key={i} className={cn(log.includes('iniciada') && 'text-yellow-400', log.includes('concluído') && 'text-green-400', log.includes('restaurada') && 'text-green-400')}>{log}</p>
                        ))}
                   </div>
                </ScrollArea>
            </CardContent>
       </Card>
    </div>
  );
};

export default ModuleSeven;
