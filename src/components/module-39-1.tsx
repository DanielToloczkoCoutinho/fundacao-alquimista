'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { ShieldCheck, Zap, History, CheckCircle, AlertTriangle, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type SystemState = 'IDLE' | 'VALIDATING' | 'MONITORING' | 'RESTORING';

type LogEntry = {
    id: string;
    timestamp: string;
    operation: string;
    details: string;
    status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'WARNING' | 'CRITICAL';
};

const Module39_1 = () => {
    const [systemState, setSystemState] = useState<SystemState>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [targetSystemId, setTargetSystemId] = useState('Nexus_Central');
    const [lastValidation, setLastValidation] = useState<{ score: number; status: string } | null>(null);
    const [lastResilience, setLastResilience] = useState<{ score: number; status: string } | null>(null);
    const { toast } = useToast();

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        setLogs(prev => [{ id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
    }, []);

    const handleValidation = async () => {
        setSystemState('VALIDATING');
        addLog('Validação de Integridade', `Iniciada para '${targetSystemId}'.`, 'INFO');
        toast({ title: 'Validação de Integridade Iniciada...' });
        await new Promise(res => setTimeout(res, 1500));

        const score = Math.random() * 0.3 + 0.7; // Simula score entre 70% e 100%
        const success = score >= 0.95;

        setLastValidation({ score, status: success ? 'Íntegro' : 'Comprometido' });
        addLog('Validação de Integridade', `Validação para '${targetSystemId}' concluída. Score: ${score.toFixed(4)}.`, success ? 'SUCCESS' : 'WARNING');
        toast({ title: 'Validação Concluída', description: `Score de integridade: ${(score * 100).toFixed(2)}%` });
        setSystemState('IDLE');
    };

    const handleResilienceMonitoring = async () => {
        setSystemState('MONITORING');
        addLog('Monitoramento de Resiliência', `Iniciado para '${targetSystemId}'.`, 'INFO');
        toast({ title: 'Monitoramento de Resiliência Iniciado...' });
        await new Promise(res => setTimeout(res, 2000));
        
        const score = Math.random();
        let status = 'ÓTIMO';
        if (score < 0.5) status = 'CRÍTICO';
        else if (score < 0.8) status = 'ATENÇÃO';

        setLastResilience({ score, status });
        addLog('Monitoramento de Resiliência', `Monitoramento para '${targetSystemId}' concluído. Score: ${score.toFixed(4)}. Status: ${status}`, status === 'CRÍTICO' ? 'CRITICAL' : 'SUCCESS');
        toast({ title: 'Monitoramento Concluído', description: `Status de resiliência: ${status}` });

        if (status === 'CRÍTICO') {
            await handleRestoration(targetSystemId);
        } else {
            setSystemState('IDLE');
        }
    };
    
    const handleRestoration = async (target: string) => {
        setSystemState('RESTORING');
        addLog('Restauração de Integridade', `Iniciada para '${target}'.`, 'INFO');
        toast({ title: 'Restauração de Emergência Iniciada!' });
        await new Promise(res => setTimeout(res, 2500));
        
        addLog('Restauração de Integridade', `Protocolo de cura PIRC ativado para '${target}'.`, 'SUCCESS');
        toast({ title: 'Restauração Concluída', description: `Integridade de '${target}' restaurada.`});
        setSystemState('IDLE');
    };

    const StatusIndicator = useMemo(() => {
        switch (systemState) {
            case 'VALIDATING': return { icon: LoaderCircle, text: "Validando Integridade...", color: "text-blue-400 animate-spin" };
            case 'MONITORING': return { icon: LoaderCircle, text: "Monitorando Resiliência...", color: "text-purple-400 animate-spin" };
            case 'RESTORING': return { icon: LoaderCircle, text: "Restaurando Sistema...", color: "text-orange-400 animate-spin" };
            case 'IDLE': default: return { icon: ShieldCheck, text: "Guardião em Standby", color: "text-gray-400" };
        }
    }, [systemState]);

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
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400">
                        <ShieldCheck /> Módulo 39.1: Guardião da Integridade e Resiliência Cósmica
                    </CardTitle>
                    <CardDescription>
                        Interface para validar a integridade de sistemas, monitorar a resiliência cósmica e orquestrar protocolos de restauração.
                    </CardDescription>
                </CardHeader>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Painel de Controle do Guardião</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">ID do Sistema Alvo</label>
                            <Input value={targetSystemId} onChange={e => setTargetSystemId(e.target.value)} disabled={systemState !== 'IDLE'} />
                        </div>
                        <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                            <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                            <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button onClick={handleValidation} disabled={systemState !== 'IDLE'}>
                                Validar Integridade
                            </Button>
                            <Button onClick={handleResilienceMonitoring} disabled={systemState !== 'IDLE'}>
                                Monitorar Resiliência
                            </Button>
                        </div>
                        {lastValidation && <p className="text-xs text-center text-muted-foreground">Última validação: {lastValidation.status} ({(lastValidation.score * 100).toFixed(2)}%)</p>}
                        {lastResilience && <p className="text-xs text-center text-muted-foreground">Última resiliência: {lastResilience.status} ({(lastResilience.score * 100).toFixed(2)}%)</p>}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><History />Log de Operações do Guardião</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-80">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Timestamp</TableHead>
                                        <TableHead>Operação</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {logs.length === 0 ? (
                                        <TableRow><TableCell colSpan={3} className="h-24 text-center">Nenhuma operação registrada.</TableCell></TableRow>
                                    ) : logs.map(log => (
                                        <TableRow key={log.id}>
                                            <TableCell className="text-xs font-mono">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                                            <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                                            <TableCell>
                                                <span className={cn("font-semibold", getStatusColor(log.status))}>{log.status}</span>
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

export default Module39_1;
