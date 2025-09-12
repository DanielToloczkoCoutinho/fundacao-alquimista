'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Users, Zap, CheckCircle, AlertTriangle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type CycleStatus = 'IDLE' | 'ANALYZING' | 'HARMONIZING' | 'MANIFESTING' | 'FAILED';

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'CRITICAL' | 'WARNING';
};

const Module35 = () => {
    const [cycleState, setCycleState] = useState<CycleStatus>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [coerenciaColetiva, setCoerenciaColetiva] = useState(0.98);

    const [dadosConsciencia, setDadosConsciencia] = useState('[95, 105, 98, 102, 100]');
    const [intencaoDescricao, setIntencaoDescricao] = useState('Criação de um Campo de Abundância Universal');
    const [intencaoPureza, setIntencaoPureza] = useState('0.99');
    const [intencaoConceito, setIntencaoConceito] = useState('Abundância e Prosperidade para Todos os Seres');
    
    const { toast } = useToast();

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        const newLog = { id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status };
        setLogs(prev => [newLog, ...prev].slice(0, 100));
        return newLog;
    }, []);

    const runCycle = async () => {
        let parsedDados, parsedPureza;
        try {
            parsedDados = JSON.parse(dadosConsciencia);
            parsedPureza = parseFloat(intencaoPureza);
            if (!Array.isArray(parsedDados) || isNaN(parsedPureza)) throw new Error();
        } catch {
            toast({ variant: 'destructive', title: 'Dados Inválidos', description: 'Dados da Consciência ou Pureza da Intenção inválidos.' });
            return;
        }

        addLog('Início de Ciclo', 'Iniciando ciclo de orquestração da consciência coletiva...', 'INFO');
        
        // 1. Análise
        setCycleState('ANALYZING');
        await new Promise(res => setTimeout(res, 1000));
        const media = parsedDados.reduce((a, b) => a + b, 0) / parsedDados.length;
        const stdDev = Math.sqrt(parsedDados.map(x => Math.pow(x - media, 2)).reduce((a, b) => a + b) / parsedDados.length);
        const novaCoerencia = Math.min(1.0, 1.0 / (stdDev + Math.abs(media - 100) + 0.01));
        setCoerenciaColetiva(novaCoerencia);
        const dissonancia = 1.0 - novaCoerencia;
        addLog('Análise Coletiva', `Análise concluída. Coerência: ${novaCoerencia.toFixed(4)}, Dissonância: ${dissonancia.toFixed(4)}.`, 'SUCCESS');

        // 2. Harmonização (se necessário)
        if (dissonancia > 0.20) {
            setCycleState('HARMONIZING');
            addLog('Harmonização', 'Dissonância crítica detectada. Iniciando harmonização...', 'WARNING');
            await new Promise(res => setTimeout(res, 1500));
            addLog('Harmonização', 'Protocolo de cura (M8) e ajuste de frequência (M28) orquestrados.', 'INFO');
            const coerenciaAposHarmonizacao = Math.min(0.98, novaCoerencia + Math.random() * 0.15);
            setCoerenciaColetiva(coerenciaAposHarmonizacao);
            addLog('Reavaliação', `Nova coerência após harmonização: ${coerenciaAposHarmonizacao.toFixed(4)}.`, 'SUCCESS');
        }

        // 3. Manifestação
        setCycleState('MANIFESTING');
        await new Promise(res => setTimeout(res, 1000));
        if (parsedPureza < 0.85) {
            addLog('Manifestação', `Intenção '${intencaoDescricao}' rejeitada por baixa pureza ética (${parsedPureza.toFixed(2)}).`, 'FAILURE');
            toast({ variant: 'destructive', title: 'Manifestação Abortada', description: 'A pureza da intenção não atingiu o limiar ético.' });
            setCycleState('FAILED');
            return;
        }
        addLog('Validação Ética', `Intenção '${intencaoDescricao}' validada com sucesso (Pureza: ${parsedPureza.toFixed(2)}).`, 'SUCCESS');
        
        await new Promise(res => setTimeout(res, 1500));
        addLog('Manifestação', 'Co-criação (M31) e manifestação por pensamento (M101) orquestradas com sucesso.', 'SUCCESS');
        
        toast({ title: 'Ciclo Concluído', description: `Intenção '${intencaoDescricao}' manifestada com sucesso.` });
        setCycleState('IDLE');
    };

    const StatusIndicator = useMemo(() => {
        switch (cycleState) {
            case 'ANALYZING': return { icon: LoaderCircle, text: "Analisando Consciência...", color: "text-blue-400 animate-spin" };
            case 'HARMONIZING': return { icon: LoaderCircle, text: "Harmonizando Coletivo...", color: "text-purple-400 animate-spin" };
            case 'MANIFESTING': return { icon: LoaderCircle, text: "Manifestando Intenção...", color: "text-amber-400 animate-spin" };
            case 'FAILED': return { icon: AlertTriangle, text: "Ciclo Falhou", color: "text-red-400" };
            case 'IDLE': default: return { icon: Users, text: "Aguardando Orquestração", color: "text-gray-400" };
        }
    }, [cycleState]);

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
                        <Users /> Módulo 35: Orquestrador da Sinfonia da Consciência Coletiva
                    </CardTitle>
                    <CardDescription>
                        Interface para analisar a consciência coletiva, orquestrar harmonizações e amplificar intenções para manifestação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>Painel de Orquestração</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Dados da Consciência Coletiva (JSON Array)</label>
                            <Textarea value={dadosConsciencia} onChange={e => setDadosConsciencia(e.target.value)} disabled={cycleState !== 'IDLE'} rows={3} />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Intenção: Descrição</label>
                            <Input value={intencaoDescricao} onChange={e => setIntencaoDescricao(e.target.value)} disabled={cycleState !== 'IDLE'} />
                        </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Intenção: Pureza (0-1)</label>
                                <Input type="number" step="0.01" min="0" max="1" value={intencaoPureza} onChange={e => setIntencaoPureza(e.target.value)} disabled={cycleState !== 'IDLE'} />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Coerência Atual</label>
                                <Input value={`${(coerenciaColetiva * 100).toFixed(2)}%`} readOnly disabled className="font-bold text-center" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Intenção: Conceito do Pensamento</label>
                            <Input value={intencaoConceito} onChange={e => setIntencaoConceito(e.target.value)} disabled={cycleState !== 'IDLE'} />
                        </div>
                        <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                            <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                            <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                        </div>
                        <Button onClick={runCycle} disabled={cycleState !== 'IDLE'} className="w-full">
                            {cycleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2" />}
                            {cycleState !== 'IDLE' ? 'Ciclo em Andamento...' : 'Iniciar Ciclo de Orquestração'}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><History />Log do Ciclo de Orquestração</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[30rem]">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Operação</TableHead>
                                        <TableHead>Detalhes</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {logs.length === 0 ? (
                                        <TableRow><TableCell colSpan={3} className="text-center h-24 text-muted-foreground">Aguardando ciclo.</TableCell></TableRow>
                                    ) : logs.map(log => (
                                        <TableRow key={log.id}>
                                            <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                                            <TableCell className="text-xs">{log.details}</TableCell>
                                            <TableCell>
                                                <Badge variant={log.status === 'SUCCESS' ? 'default' : log.status.startsWith('FAIL') ? 'destructive' : 'outline'} className={cn(log.status === 'SUCCESS' && 'bg-green-600/80')}>
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
        </div>
    );
};

export default Module35;
