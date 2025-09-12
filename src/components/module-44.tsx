'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { ShieldCheck, Zap, History, CheckCircle, AlertTriangle, LoaderCircle, GitCommit, FileText, BookKey } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type VeritasStatus = 'IDLE' | 'VALIDATING' | 'SYNCING' | 'ERROR';

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'WARNING';
};

const Module44 = () => {
    const [veritasState, setVeritasState] = useState<VeritasStatus>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [ontologyConcept, setOntologyConcept] = useState('');
    const [ontologyData, setOntologyData] = useState('{"description": "Novo Conceito"}');
    const { toast } = useToast();

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        setLogs(prev => [{ id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
    }, []);

    const handleRunValidation = async () => {
        setVeritasState('VALIDATING');
        toast({ title: 'Iniciando Validação de Autenticidade...' });
        addLog('Validação Quântica', 'Verificando assinatura ZENNITH e ANATHERON.', 'INFO');
        
        await new Promise(res => setTimeout(res, 1500));
        const success = Math.random() > 0.05;

        if (success) {
            addLog('Validação Quântica', 'Assinaturas válidas. Integridade do sistema confirmada.', 'SUCCESS');
            toast({ title: 'Validação Concluída', description: 'Sistema íntegro e autêntico.' });
        } else {
            addLog('Validação Quântica', 'FALHA: Dissonância detectada na assinatura quântica!', 'FAILURE');
            toast({ variant: 'destructive', title: 'Falha na Validação', description: 'Violação de integridade detectada.' });
            setVeritasState('ERROR');
        }

        if(success) setVeritasState('IDLE');
    };

    const handleSyncOntology = async () => {
        if (!ontologyConcept || !ontologyData) {
            toast({ variant: 'destructive', title: 'Dados Inválidos', description: 'Nome do conceito e dados JSON são necessários.' });
            return;
        }
        setVeritasState('SYNCING');
        toast({ title: 'Sincronizando Ontologia Universal...' });

        await new Promise(res => setTimeout(res, 1000));
        try {
            JSON.parse(ontologyData);
            addLog('Sincronia de Ontologia', `Conceito '${ontologyConcept}' adicionado/atualizado.`, 'SUCCESS');
            toast({ title: 'Sincronização Concluída' });
            setOntologyConcept('');
            setOntologyData('{"description": "Novo Conceito"}');
        } catch (e) {
            addLog('Sincronia de Ontologia', 'Falha ao sincronizar: dados JSON inválidos.', 'FAILURE');
            toast({ variant: 'destructive', title: 'Erro de Formato', description: 'Os dados do conceito devem ser um JSON válido.' });
        }
        setVeritasState('IDLE');
    };
    
     const StatusIndicator = useMemo(() => {
        switch (veritasState) {
            case 'VALIDATING': return { icon: LoaderCircle, text: "Validando Verdade...", color: "text-blue-400 animate-spin" };
            case 'SYNCING': return { icon: LoaderCircle, text: "Sincronizando Ontologia...", color: "text-purple-400 animate-spin" };
            case 'ERROR': return { icon: AlertTriangle, text: "Erro de Integridade", color: "text-red-400" };
            case 'IDLE': default: return { icon: BookKey, text: "VERITAS em Standby", color: "text-gray-400" };
        }
    }, [veritasState]);
    
     const getStatusColor = (status: LogEntry['status']) => {
        switch (status) {
            case 'SUCCESS': return 'text-green-400';
            case 'INFO': return 'text-blue-400';
            case 'FAILURE': return 'text-red-500';
            case 'WARNING': return 'text-yellow-400';
            default: return 'text-muted-foreground';
        }
    };


    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-300">
                        <BookKey /> Módulo 44: VERITAS
                    </CardTitle>
                    <CardDescription>
                        O pilar axial e cristal-fonte da Fundação, garantindo a verdade, autenticidade e integridade de todas as operações.
                    </CardDescription>
                </CardHeader>
            </Card>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ShieldCheck />Painel de Controle VERITAS</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                            <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                            <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                        </div>
                        <Button onClick={handleRunValidation} disabled={veritasState !== 'IDLE'} className="w-full">
                            <ShieldCheck className="mr-2"/> Executar Validação de Autenticidade Quântica
                        </Button>
                        <div className="pt-4 border-t">
                            <h4 className="font-semibold mb-2">Sincronizar Ontologia Universal</h4>
                             <div>
                                <label className="text-sm font-medium text-muted-foreground">Nome do Conceito</label>
                                <Input value={ontologyConcept} onChange={e => setOntologyConcept(e.target.value)} disabled={veritasState !== 'IDLE'} placeholder="Ex: Módulo_1000"/>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Dados do Conceito (JSON)</label>
                                <Textarea value={ontologyData} onChange={e => setOntologyData(e.target.value)} disabled={veritasState !== 'IDLE'} rows={3}/>
                            </div>
                            <Button onClick={handleSyncOntology} disabled={veritasState !== 'IDLE'} className="w-full mt-2" variant="outline">
                                <Zap className="mr-2"/> Sincronizar Conceito
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><History />Log do Blockchain da Verdade (ChronoLogos)</CardTitle>
                    </CardHeader>
                     <CardContent>
                        <ScrollArea className="h-96">
                            <div className="space-y-2 font-mono text-xs">
                                {logs.length === 0 ? <p className="text-center text-muted-foreground pt-16">Nenhum registro no ChronoLogos.</p> :
                                logs.map(log => (
                                    <div key={log.id} className="flex gap-2 items-start p-2 rounded bg-background/50">
                                        <span className="text-muted-foreground">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                                        <Badge variant="secondary" className="w-32 text-center justify-center">{log.operation}</Badge>
                                        <span className={cn("flex-1", getStatusColor(log.status))}>{log.details}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module44;

    