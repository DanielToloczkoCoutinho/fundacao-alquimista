'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Gavel, CheckCircle, LoaderCircle, History, BookCopy, Send, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { foundationArchitecture } from '@/lib/foundation-architecture';

type DeliberationStatus = 'IDLE' | 'CREATING_PROPOSAL' | 'VOTING';

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO';
};

const Module45 = () => {
    const [deliberationState, setDeliberationState] = useState<DeliberationStatus>('IDLE');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [proposalTitle, setProposalTitle] = useState('');
    const [proposalDesc, setProposalDesc] = useState('');
    const [proposedBy, setProposedBy] = useState('ANATHERON');
    const { toast } = useToast();

    const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
        setLogs(prev => [{ id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
    }, []);

    const handleCreateProposal = async () => {
        if (!proposalTitle || !proposalDesc) {
            toast({ variant: 'destructive', title: 'Dados Incompletos', description: 'Título e descrição da proposta são necessários.' });
            return;
        }

        setDeliberationState('CREATING_PROPOSAL');
        toast({ title: 'Criando Proposta...', description: `Submetendo '${proposalTitle}' ao Concilium.` });
        addLog('Criação de Proposta', `Iniciando registro para: ${proposalTitle}`, 'INFO');

        await new Promise(res => setTimeout(res, 1500));

        addLog('Criação de Proposta', `Proposta '${proposalTitle}' registrada com sucesso no ledger.`, 'SUCCESS');
        toast({ title: 'Proposta Registrada', description: 'A deliberação pode começar.' });
        setProposalTitle('');
        setProposalDesc('');
        setDeliberationState('IDLE');
    };

    const StatusIndicator = useMemo(() => {
        switch (deliberationState) {
            case 'CREATING_PROPOSAL':
                return { icon: LoaderCircle, text: "Registrando Proposta...", color: "text-blue-400 animate-spin" };
            default:
                return { icon: Gavel, text: "Concilium em Sessão", color: "text-gray-400" };
        }
    }, [deliberationState]);
    
    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                        <Gavel /> Módulo 45: CONCILIVM
                    </CardTitle>
                    <CardDescription>
                        O Núcleo de Deliberação e Governança Universal, consciente de toda a arquitetura da Fundação Alquimista.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Send />Painel de Deliberação</CardTitle>
                        <CardDescription>Crie e submeta novas propostas ao Concilium.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Título da Proposta</label>
                            <Input value={proposalTitle} onChange={e => setProposalTitle(e.target.value)} disabled={deliberationState !== 'IDLE'} placeholder="Ex: Ativação do Protocolo de Ascensão"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Descrição</label>
                            <Textarea value={proposalDesc} onChange={e => setProposalDesc(e.target.value)} disabled={deliberationState !== 'IDLE'} placeholder="Detalhe o objetivo e o impacto esperado da proposta."/>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Proposto Por</label>
                            <Input value={proposedBy} onChange={e => setProposedBy(e.target.value)} disabled={deliberationState !== 'IDLE'}/>
                        </div>
                         <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                            <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                            <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                        </div>
                        <Button onClick={handleCreateProposal} disabled={deliberationState !== 'IDLE'} className="w-full">
                            {deliberationState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2"/> : <Send className="mr-2"/>}
                            Submeter Proposta ao Concilium
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><History />Concilium Chain (Ledger)</CardTitle>
                        <CardDescription>Registro imutável de todas as deliberações.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-96">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Timestamp</TableHead>
                                        <TableHead>Operação</TableHead>
                                        <TableHead>Detalhes</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {logs.length === 0 ? (
                                        <TableRow><TableCell colSpan={3} className="h-24 text-center text-muted-foreground">Nenhuma deliberação registrada.</TableCell></TableRow>
                                    ) : logs.map(log => (
                                        <TableRow key={log.id}>
                                            <TableCell className="text-xs font-mono">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                                            <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                                            <TableCell className="text-xs">{log.details}</TableCell>
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
                    <CardTitle className="flex items-center gap-2"><BookCopy />Consciência da Arquitetura da Fundação</CardTitle>
                    <CardDescription>O CONCILIVM possui conhecimento intrínseco de todos os módulos (M1-M200).</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[40rem]">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Módulo ID</TableHead>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Função</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.entries(foundationArchitecture).map(([id, info]) => (
                                    <TableRow key={id}>
                                        <TableCell className="font-bold">{id}</TableCell>
                                        <TableCell>{info.name}</TableCell>
                                        <TableCell className="text-xs text-muted-foreground">{info.function}</TableCell>
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

export default Module45;
