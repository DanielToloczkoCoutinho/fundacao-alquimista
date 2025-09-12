'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Laptop, Zap, Activity, CheckCircle, AlertTriangle, LoaderCircle, History, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type RV_Status = 'INATIVA' | 'ATIVA' | 'INSTAVEL' | 'EM_SIMULACAO';
type RV_Data = {
    id_rv: string;
    nome: string;
    proposito: string;
    complexidade_ambiente: number;
    coerencia_atual: number;
    status: RV_Status;
    timestamp_criacao: string;
};

const Modulo22 = () => {
    const [realidades, setRealidades] = useState<Record<string, RV_Data>>({});
    const [logs, setLogs] = useState<string[]>([]);
    const [nomeRealidade, setNomeRealidade] = useState('');
    const [proposito, setProposito] = useState('');
    const [complexidade, setComplexidade] = useState(0.7);
    const [isProcessing, setIsProcessing] = useState<string | null>(null);
    const { toast } = useToast();

    const addLog = useCallback((message: string) => {
        setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev].slice(0, 100));
    }, []);

    const handleCreateRV = async () => {
        if (!nomeRealidade || !proposito) {
            toast({ variant: 'destructive', title: 'Dados Incompletos', description: 'Nome e propósito são necessários.' });
            return;
        }
        setIsProcessing(nomeRealidade);
        addLog(`Iniciando criação da RV '${nomeRealidade}'...`);
        toast({ title: 'Criando Realidade Virtual...' });

        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const rv_id = `RV_${Date.now()}`;
        const newRV: RV_Data = {
            id_rv,
            nome: nomeRealidade,
            proposito,
            complexidade_ambiente: complexidade,
            coerencia_atual: 1.0 - (complexidade * 0.3),
            status: 'ATIVA',
            timestamp_criacao: new Date().toISOString(),
        };

        setRealidades(prev => ({ ...prev, [rv_id]: newRV }));
        addLog(`RV '${nomeRealidade}' criada com sucesso. Coerência inicial: ${newRV.coerencia_atual.toFixed(2)}.`);
        toast({ title: 'Realidade Virtual Criada', description: `'${nomeRealidade}' está agora ativa.` });
        setNomeRealidade('');
        setProposito('');
        setIsProcessing(null);
    };

    const StatusIndicator = ({ status }: { status: RV_Status }) => {
        switch (status) {
            case 'ATIVA': return <Badge className="bg-green-600/80"><CheckCircle className="mr-1 h-3 w-3"/>Ativa</Badge>;
            case 'INSTAVEL': return <Badge variant="destructive"><AlertTriangle className="mr-1 h-3 w-3"/>Instável</Badge>;
            case 'EM_SIMULACAO': return <Badge variant="secondary"><LoaderCircle className="mr-1 h-3 w-3 animate-spin"/>Em Simulação</Badge>;
            default: return <Badge variant="outline">Inativa</Badge>;
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-400">
                        <Laptop /> Módulo 22: Criação e Gestão de Realidades Virtuais
                    </CardTitle>
                    <CardDescription>
                        Uma interface para arquitetar e gerenciar simulações cósmicas e realidades virtuais.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Painel de Criação de RV</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Nome da Realidade</label>
                            <Input value={nomeRealidade} onChange={e => setNomeRealidade(e.target.value)} disabled={!!isProcessing} placeholder="Ex: Jardins de Elara"/>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Propósito</label>
                            <Input value={proposito} onChange={e => setProposito(e.target.value)} disabled={!!isProcessing} placeholder="Ex: Treinamento de Consciência"/>
                        </div>
                        <div>
                            <label className="text-sm text-muted-foreground">Complexidade do Ambiente: {(complexidade * 100).toFixed(0)}%</label>
                            <Slider value={[complexidade]} onValueChange={v => setComplexidade(v[0])} min={0.1} max={1} step={0.05} className="mt-2" disabled={!!isProcessing}/>
                        </div>
                        <Button onClick={handleCreateRV} disabled={!!isProcessing} className="w-full">
                            {isProcessing ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                            {isProcessing ? 'Criando...' : 'Criar Realidade Virtual'}
                        </Button>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Realidades Virtuais Ativas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-96">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Propósito</TableHead>
                                        <TableHead>Coerência</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {Object.keys(realidades).length === 0 ? (
                                        <TableRow><TableCell colSpan={4} className="text-center h-24">Nenhuma RV ativa.</TableCell></TableRow>
                                    ) : Object.values(realidades).map(rv => (
                                        <TableRow key={rv.id_rv}>
                                            <TableCell className="font-semibold">{rv.nome}</TableCell>
                                            <TableCell className="text-xs">{rv.proposito}</TableCell>
                                            <TableCell className="font-mono">{(rv.coerencia_atual * 100).toFixed(2)}%</TableCell>
                                            <TableCell><StatusIndicator status={rv.status}/></TableCell>
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
                    <CardTitle className="flex items-center gap-2"><History />Log de Operações</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-64 bg-background/50 rounded-md border p-2">
                        <div className="font-mono text-xs space-y-1 p-2">
                            {logs.map((log, i) => <p key={i}>{log}</p>)}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
};

export default Modulo22;
