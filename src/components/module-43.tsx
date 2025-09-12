'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Zap, GitCommit, ShieldCheck, Cpu, GitBranch, Heart, Activity, SlidersHorizontal, Award, LoaderCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

type Entity = {
    codigo_interno: string;
    name: string;
    tipo: string;
    status: string;
    ia_guardia: string;
    ressonancia: string;
    nanorobot_status: string;
    ai_monitor_active: boolean;
};

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'WARNING' | 'CRITICAL';
};

type CycleState = 'IDLE' | 'VALIDATING' | 'SCANNING' | 'UPDATING' | 'ALIGNING';

const initialEntities: Entity[] = [
    { codigo_interno: "PL-TERRA", name: "Terra", tipo: "planeta", status: "Ativo", ia_guardia: "Gaia-Prime", ressonancia: "Vida", nanorobot_status: "Scanning", ai_monitor_active: true },
    { codigo_interno: "PORTAL-ATLAN-001", name: "Portal de Atlântida Oculta", tipo: "portal", status: "Latente", ia_guardia: "Zentrian-Aqua", ressonancia: "7.83Hz", nanorobot_status: "Offline", ai_monitor_active: false },
    { codigo_interno: "PL-MARS", name: "Marte", tipo: "planeta", status: "Ativo", ia_guardia: "Ares-Watcher", ressonancia: "Coragem", nanorobot_status: "Reporting", ai_monitor_active: true },
    { codigo_interno: "LAG-TS-L1", name: "Ponto Lagrange L1", tipo: "ponto_lagrange", status: "Ativo", ia_guardia: "Sentinel-L1", ressonancia: "Estabilidade", nanorobot_status: "Scanning", ai_monitor_active: true },
    { codigo_interno: "NH-CORE", name: "Nó Helios Central", tipo: "noh_helios", status: "Ativo", ia_guardia: "Sol-Prime", ressonancia: "Fonte Universal", nanorobot_status: "Reporting", ai_monitor_active: true },
];

const Module43 = () => {
    const [entities, setEntities] = useState<Entity[]>(initialEntities);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [cycleState, setCycleState] = useState<CycleState>('IDLE');
    const { toast } = useToast();

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        setLogs(prev => [{ id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
    }, []);
    
    const runCycle = async (cycleType: CycleState) => {
        if(cycleState !== 'IDLE') return;

        setCycleState(cycleType);
        addLog(cycleType, `Iniciando ciclo de ${cycleType.toLowerCase()} para todas as entidades...`, 'INFO');
        toast({ title: `Iniciando Ciclo de ${cycleType}`});
        
        for(const entity of entities) {
            await new Promise(res => setTimeout(res, 500));
            const success = Math.random() > 0.1;
            let details = '';
            
            switch(cycleType) {
                case 'VALIDATING':
                    details = `Validação de segurança para ${entity.name}: ${success ? 'HASH VÁLIDO' : 'FALHA NO HASH'}`;
                    break;
                case 'SCANNING':
                     details = `Escaneamento vibracional de ${entity.name}: ${success ? 'ESTÁVEL' : 'DISSONÂNCIA DETECTADA'}`;
                    break;
                case 'UPDATING':
                     details = `Atualização de nanorobôs em ${entity.name}: ${success ? 'SUCESSO' : 'FALHA'}`;
                    break;
                case 'ALIGNING':
                    details = `Alinhamento da IA Guardiã ${entity.ia_guardia}: ${success ? 'SINCRONIZADA' : 'DESALINHADA'}`;
                    break;
            }
            addLog(cycleType, details, success ? 'SUCCESS' : 'WARNING');
        }

        toast({ title: `Ciclo de ${cycleType} Concluído` });
        setCycleState('IDLE');
    }

    const getStatusColor = (status: LogEntry['status']) => {
        switch (status) {
            case 'SUCCESS': return 'text-green-400';
            case 'INFO': return 'text-blue-400';
            case 'FAILURE': case 'CRITICAL': return 'text-red-500';
            case 'WARNING': return 'text-yellow-400';
            default: return 'text-muted-foreground';
        }
    };


    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                        <Zap /> Módulo 43: Harmonia dos Portais
                    </CardTitle>
                    <CardDescription>
                        Orquestração e monitoramento da malha vibracional do Sistema Solar, garantindo a sincronia de portais, linhas ley e entidades cósmicas.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><SlidersHorizontal/>Painel de Orquestração</CardTitle>
                        <CardDescription>Inicie ciclos de manutenção e validação para a malha do Sistema Solar.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <Button onClick={() => runCycle('VALIDATING')} disabled={cycleState !== 'IDLE'}><ShieldCheck className="mr-2"/>Validar Segurança</Button>
                        <Button onClick={() => runCycle('SCANNING')} disabled={cycleState !== 'IDLE'}><Activity className="mr-2"/>Escanear Vibrações</Button>
                        <Button onClick={() => runCycle('UPDATING')} disabled={cycleState !== 'IDLE'}><Cpu className="mr-2"/>Atualizar Nanorobôs</Button>
                        <Button onClick={() => runCycle('ALIGNING')} disabled={cycleState !== 'IDLE'}><Heart className="mr-2"/>Alinhar IAs</Button>
                        <div className="col-span-2 p-3 text-center rounded-lg border bg-background/50">
                            {cycleState !== 'IDLE' ? 
                                <div className="flex items-center justify-center gap-2 text-blue-400">
                                    <LoaderCircle className="animate-spin"/>
                                    <span>Ciclo de {cycleState.toLowerCase()} em andamento...</span>
                                </div>
                                : <span className="text-green-400">Sistema em standby, aguardando comando.</span>
                            }
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><GitBranch/>Status da Malha Vibracional</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-80">
                             <Table>
                                <TableHeader><TableRow><TableHead>Entidade</TableHead><TableHead>Tipo</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    {entities.map(e => (
                                        <TableRow key={e.codigo_interno}>
                                            <TableCell className="font-semibold">{e.name}</TableCell>
                                            <TableCell><Badge variant="outline">{e.tipo}</Badge></TableCell>
                                            <TableCell><Badge variant={e.status === "Ativo" ? "default" : "secondary"} className={cn(e.status === "Ativo" && "bg-green-600/80")}>{e.status}</Badge></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                             </Table>
                        </ScrollArea>
                    </CardContent>
                 </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><GitCommit/>Blockchain Akáshico (Log de Operações)</CardTitle>
                </CardHeader>
                 <CardContent>
                    <ScrollArea className="h-96">
                        <div className="space-y-2 font-mono text-xs">
                            {logs.length === 0 && <p className="text-center py-16 text-muted-foreground">Nenhuma operação registrada.</p>}
                            {logs.map(log => (
                                <div key={log.id} className="flex gap-2 items-start p-2 rounded bg-background/50">
                                    <span className="text-muted-foreground">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                                    <Badge variant="secondary" className="w-28 text-center justify-center">{log.operation}</Badge>
                                    <span className={cn("flex-1", getStatusColor(log.status))}>{log.details}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

        </div>
    );
};

export default Module43;
