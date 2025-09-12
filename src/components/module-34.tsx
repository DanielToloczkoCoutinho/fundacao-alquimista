'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { ShieldCheck, Zap, History, CheckCircle, AlertTriangle, LoaderCircle, GitCommit, FileLock, Layers } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { sha256 } from '@/lib/crypto';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';


type CycleStatus = 'IDLE' | 'VALIDATING' | 'PROTECTING' | 'FILTERING' | 'EVOLVING' | 'CORRECTING' | 'HARMONIZING' | 'SUCCESS' | 'FAILED';

type LogEntry = {
    id: string;
    timestamp: string;
    operation: string;
    details: string;
    status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'CRITICAL' | 'WARNING';
};

const Module34 = () => {
    const [cycleState, setCycleState] = useState<CycleStatus>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [dissonanceData, setDissonanceData] = useState<{ time: number, dissonance: number }[]>(() => Array.from({ length: 10 }, (_, i) => ({ time: i, dissonance: 0.05 })));
    const [blockchain, setBlockchain] = useState<any[]>([]);

    const [signature, setSignature] = useState('');
    const [intention, setIntention] = useState('Manutenção da Harmonia Cósmica');
    const [purity, setPurity] = useState(0.95);

    const { toast } = useToast();

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        const newLog = { id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status };
        setLogs(prev => [newLog, ...prev].slice(0, 100));
        return newLog;
    }, []);

    const addToBlockchain = useCallback(async (data: any) => {
        const lastHash = blockchain.length > 0 ? blockchain[blockchain.length - 1].hash : '0';
        const block = {
            index: blockchain.length + 1,
            timestamp: new Date().toISOString(),
            data,
            prevHash: lastHash,
            hash: ''
        };
        block.hash = await sha256(JSON.stringify(block));
        setBlockchain(prev => [...prev, block]);
    }, [blockchain]);

    const runCycle = async () => {
        setLogs([]);
        
        // 1. Validação da Assinatura
        setCycleState('VALIDATING');
        const validSignature = await sha256("VontadeSoberanaDeAnatheron");
        if (signature !== validSignature) {
            addLog('Validação de Assinatura', 'Assinatura do Fundador INVÁLIDA.', 'CRITICAL');
            toast({ variant: 'destructive', title: 'Falha na Autenticação', description: 'Assinatura do Fundador inválida. Ciclo abortado.' });
            setCycleState('FAILED');
            return;
        }
        addLog('Validação de Assinatura', 'Assinatura do Fundador validada.', 'SUCCESS');
        addToBlockchain({ evento: "AssinaturaFundadorValidada" });
        await new Promise(res => setTimeout(res, 500));

        // 2. Autoproteção
        setCycleState('PROTECTING');
        addLog('Autoproteção Vibracional', 'Nível de ameaça baixo. Monitoramento padrão.', 'INFO');
        await new Promise(res => setTimeout(res, 500));
        
        // 3. Evolução e Dissonância
        setCycleState('EVOLVING');
        addLog('Evolução da Matriz', 'Evoluindo Matriz de Estado Quântico Global...', 'INFO');
        await new Promise(res => setTimeout(res, 1000));
        const newDissonance = Math.random() * 0.1;
        setDissonanceData(prev => [...prev.slice(1), { time: prev[prev.length - 1].time + 1, dissonance: newDissonance }]);
        addLog('Evolução da Matriz', `Evolução concluída. Dissonância: ${newDissonance.toFixed(4)}.`, 'SUCCESS');
        addToBlockchain({ evento: "MatrizEstadoEvoluida", dissonancia_global: newDissonance });
        await new Promise(res => setTimeout(res, 500));

        // 4. Autocorreção
        setCycleState('CORRECTING');
        if (newDissonance > 0.08) {
            addLog('Autocorreção', 'Dissonância detectada. Iniciando autocorreção.', 'WARNING');
            await new Promise(res => setTimeout(res, 1000));
            addLog('Autocorreção', 'Consenso Ressonante alcançado.', 'SUCCESS');
        } else {
            addLog('Autocorreção', `Dissonância global baixa (${newDissonance.toFixed(4)}). Coerência mantida.`, 'INFO');
        }
        addToBlockchain({ evento: "AutocorrecaoDissonancia" });
        await new Promise(res => setTimeout(res, 500));

        // 5. Validação Ética
        setCycleState('HARMONIZING');
        const ethicalThreshold = 0.85; // Limiar ético elevado pelo Selo do Amor Incondicional
        if (purity < ethicalThreshold) {
            addLog('Alinhamento Ético', `FALHA. Pureza (${purity.toFixed(2)}) abaixo do limiar (${ethicalThreshold}).`, 'CRITICAL');
            toast({ variant: 'destructive', title: 'Falha no Alinhamento Ético', description: `A intenção '${intention}' foi abortada.` });
            setCycleState('FAILED');
            return;
        }
        addLog('Alinhamento Ético', `Intenção '${intention}' validada com sucesso.`, 'SUCCESS');
        addToBlockchain({ evento: "AlinhamentoEticoValidado", intencao: intention, nivel_pureza: purity });

        // Conclusão
        await new Promise(res => setTimeout(res, 500));
        setCycleState('SUCCESS');
        toast({ title: 'Ciclo de Autocorreção Concluído', description: 'O Guardião da Coerência Cósmica confirma a harmonia do sistema.' });
        addLog('Ciclo Concluído', 'Ciclo completo de autocorreção concluído com sucesso.', 'SUCCESS');
        addToBlockchain({ evento: "CicloAutocorrecaoCompleto", status: "SUCESSO" });
        setTimeout(() => setCycleState('IDLE'), 5000);
    };

     const StatusIndicator = useMemo(() => {
        switch (cycleState) {
            case 'VALIDATING': return { icon: FileLock, text: "Validando Assinatura...", color: "text-yellow-400 animate-pulse" };
            case 'PROTECTING': return { icon: ShieldCheck, text: "Ativando Autoproteção...", color: "text-blue-400" };
            case 'EVOLVING': return { icon: Layers, text: "Evolvendo Matriz Quântica...", color: "text-purple-400" };
            case 'CORRECTING': return { icon: GitCommit, text: "Corrigindo Dissonância...", color: "text-orange-400" };
            case 'HARMONIZING': return { icon: Zap, text: "Harmonizando Feedback...", color: "text-cyan-400" };
            case 'SUCCESS': return { icon: CheckCircle, text: "Ciclo Concluído: Coerente", color: "text-green-400" };
            case 'FAILED': return { icon: AlertTriangle, text: "Ciclo Falhou", color: "text-red-400" };
            case 'IDLE': default: return { icon: ShieldCheck, text: "Aguardando Ciclo", color: "text-gray-400" };
        }
    }, [cycleState]);

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                        <ShieldCheck /> Módulo 34: Guardião da Coerência Cósmica
                    </CardTitle>
                    <CardDescription>
                        Interface para o sistema de auto-avaliação e autocorreção contínua da Fundação, garantindo alinhamento ético e vibracional.
                    </CardDescription>
                </CardHeader>
            </Card>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Painel de Controle do Guardião</CardTitle>
                        <CardDescription>Inicie um ciclo de autocorreção completo.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Assinatura do Fundador</label>
                            <Input type="password" value={signature} onChange={(e) => setSignature(e.target.value)} disabled={cycleState !== 'IDLE'} placeholder="Insira a assinatura para autenticação"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Intenção da Operação</label>
                            <Input value={intention} onChange={(e) => setIntention(e.target.value)} disabled={cycleState !== 'IDLE'}/>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Nível de Pureza da Intenção: {(purity * 100).toFixed(0)}%</label>
                            <Input type="range" min="0" max="1" step="0.01" value={purity} onChange={(e) => setPurity(parseFloat(e.target.value))} disabled={cycleState !== 'IDLE'} className="mt-2"/>
                        </div>
                        <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                            <StatusIndicator.icon className={cn("mr-2 h-6 w-6", StatusIndicator.color)} />
                            <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                        </div>
                        <Button onClick={runCycle} disabled={cycleState !== 'IDLE'} className="w-full">
                            {cycleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2" />}
                            {cycleState !== 'IDLE' ? 'Ciclo em Andamento...' : 'Iniciar Ciclo de Autocorreção'}
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Monitor de Dissonância Global</CardTitle>
                    </CardHeader>
                    <CardContent className="h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dissonanceData}>
                                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background)/0.8)", borderColor: "hsl(var(--border))" }} />
                                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                                <YAxis domain={[0, 0.2]} stroke="hsl(var(--muted-foreground))" />
                                <Line type="monotone" dataKey="dissonance" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                 </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><History/>Log do Ciclo de Autocorreção</CardTitle></CardHeader>
                    <CardContent>
                        <ScrollArea className="h-96">
                             <div className="space-y-2 font-mono text-xs">
                                {logs.map(log => (
                                    <div key={log.id} className="flex gap-2 items-start">
                                        <span className="text-muted-foreground">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                        <Badge variant={log.status === 'SUCCESS' ? 'default' : log.status.startsWith('FAIL') || log.status === 'CRITICAL' ? 'destructive' : 'secondary'} className={cn(log.status === 'SUCCESS' && 'bg-green-600/80')}>{log.status}</Badge>
                                        <span className="flex-1">{log.details}</span>
                                    </div>
                                ))}
                             </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><FileLock/>Blockchain Quântico de Registros</CardTitle></CardHeader>
                    <CardContent>
                        <ScrollArea className="h-96">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Índice</TableHead>
                                        <TableHead>Evento</TableHead>
                                        <TableHead>Hash</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {blockchain.slice().reverse().map(block => (
                                        <TableRow key={block.index}>
                                            <TableCell>{block.index}</TableCell>
                                            <TableCell>{block.data.evento}</TableCell>
                                            <TableCell className="font-mono text-xs">{block.hash.substring(0, 15)}...</TableCell>
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

export default Module34;
