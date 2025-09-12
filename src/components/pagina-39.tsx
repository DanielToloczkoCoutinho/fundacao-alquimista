'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Milestone, Zap, AlertTriangle, CheckCircle, LoaderCircle, History, Ship, User, Link2, GitBranch } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

type PortalStatus = 'INATIVO' | 'ATIVANDO' | 'ATIVO' | 'FALHA';
type OperationStatus = 'IDLE' | 'REGISTERING' | 'ACTIVATING' | 'DEACTIVATING' | 'TRAVERSING';

type Portal = {
  id: string;
  dimensao_alvo: string;
  frequencia_ativacao: number;
  status: PortalStatus;
  coerencia_campo: number;
  data_ativacao?: string;
};

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'CRITICAL';
};

const Module39 = () => {
  const [portals, setPortals] = useState<Record<string, Portal>>({});
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [operationState, setOperationState] = useState<OperationStatus>('IDLE');
  
  const [portalId, setPortalId] = useState('PORTAL_HARMONIA_007');
  const [dimensaoAlvo, setDimensaoAlvo] = useState('Dimensao de Harmonia Pura');
  const [frequencia, setFrequencia] = useState('777.7');
  const [intencao, setIntencao] = useState('{"descricao": "Troca Consciente e Aprendizado", "pureza": 0.98}');
  const [entidadeId, setEntidadeId] = useState('Viajante_Luz_01');

  const { toast } = useToast();

  const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
    setLogs(prev => [{ id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
  }, []);

  const handleRegisterPortal = () => {
    setOperationState('REGISTERING');
    addLog('Registro de Portal', `Registrando portal '${portalId}' para '${dimensaoAlvo}'.`, 'INFO');
    
    if (portals[portalId]) {
      toast({ variant: 'destructive', title: 'Falha no Registro', description: 'ID do Portal já existe.' });
      addLog('Registro de Portal', 'Falha: ID do Portal já existe.', 'FAILURE');
      setOperationState('IDLE');
      return;
    }

    const newPortal: Portal = {
      id: portalId,
      dimensao_alvo: dimensaoAlvo,
      frequencia_ativacao: parseFloat(frequencia),
      status: 'INATIVO',
      coerencia_campo: 0,
    };

    setPortals(prev => ({ ...prev, [portalId]: newPortal }));
    addLog('Registro de Portal', `Portal '${portalId}' registrado com sucesso.`, 'SUCCESS');
    toast({ title: 'Portal Registrado', description: `'${portalId}' está pronto para ativação.` });
    setOperationState('IDLE');
  };

  const handleActivatePortal = async () => {
    if (!portals[portalId]) {
      toast({ variant: 'destructive', title: 'Portal Não Encontrado' });
      return;
    }
    setOperationState('ACTIVATING');
    addLog('Ativação de Portal', `Iniciando ativação do portal '${portalId}'...`, 'INFO');
    toast({ title: 'Ativando Portal...' });
    
    setPortals(prev => ({ ...prev, [portalId]: { ...prev[portalId], status: 'ATIVANDO' }}));

    await new Promise(res => setTimeout(res, 1000));
    addLog('Validação Ética', 'Intenção validada pelo Conselho (M07).', 'SUCCESS');

    await new Promise(res => setTimeout(res, 1000));
    addLog('Análise Temporal', 'Fluxo temporal estável (M03, M23).', 'SUCCESS');

    await new Promise(res => setTimeout(res, 1500));
    const success = Math.random() > 0.1;
    if (success) {
      const newCoherence = 0.90 + Math.random() * 0.09;
      setPortals(prev => ({ ...prev, [portalId]: { ...prev[portalId], status: 'ATIVO', coerencia_campo: newCoherence, data_ativacao: new Date().toISOString() }}));
      addLog('Ativação de Portal', `Portal '${portalId}' ativado com coerência de ${(newCoherence * 100).toFixed(2)}%.`, 'SUCCESS');
      toast({ title: 'Portal Ativo!', description: `'${portalId}' está agora aberto e estável.` });
    } else {
      setPortals(prev => ({ ...prev, [portalId]: { ...prev[portalId], status: 'FALHA' }}));
      addLog('Ativação de Portal', `Falha na estabilização do campo do portal '${portalId}'.`, 'FAILURE');
      toast({ variant: 'destructive', title: 'Falha na Ativação', description: 'Não foi possível estabilizar o campo do portal.' });
    }
    setOperationState('IDLE');
  };

   const handleTraverse = async () => {
    if (!portals[portalId] || portals[portalId].status !== 'ATIVO') {
      toast({ variant: 'destructive', title: 'Portal Inativo', description: 'O portal alvo deve estar ativo para travessia.' });
      return;
    }
    setOperationState('TRAVERSING');
    addLog('Travessia', `Iniciando travessia de '${entidadeId}' através do portal '${portalId}'.`, 'INFO');
    toast({ title: 'Iniciando Travessia...' });

    await new Promise(res => setTimeout(res, 1000));
    addLog('Aptidão da Entidade', `Aptidão de '${entidadeId}' validada (M25).`, 'SUCCESS');
    
    await new Promise(res => setTimeout(res, 1000));
    addLog('Travessia', `Entidade '${entidadeId}' atravessou com sucesso.`, 'SUCCESS');
    toast({ title: 'Travessia Concluída', description: `'${entidadeId}' chegou ao seu destino.` });
    
    setOperationState('IDLE');
  };
  
  const stateIsLoading = useMemo(() => operationState !== 'IDLE', [operationState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            <Milestone /> Módulo 39: Orquestrador de Portais e Nexus Cósmico
          </CardTitle>
          <CardDescription>
            Interface para registrar, ativar e gerenciar portais interdimensionais, garantindo a segurança e a integridade ética de cada conexão.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Link2 /> Painel de Portais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-muted-foreground">ID do Portal</label>
                        <Input value={portalId} onChange={e => setPortalId(e.target.value)} disabled={stateIsLoading} />
                    </div>
                     <div>
                        <label className="text-sm font-medium text-muted-foreground">Dimensão Alvo</label>
                        <Input value={dimensaoAlvo} onChange={e => setDimensaoAlvo(e.target.value)} disabled={stateIsLoading} />
                    </div>
                     <div>
                        <label className="text-sm font-medium text-muted-foreground">Frequência (Hz)</label>
                        <Input type="number" value={frequencia} onChange={e => setFrequencia(e.target.value)} disabled={stateIsLoading} />
                    </div>
                    <Button onClick={handleRegisterPortal} disabled={stateIsLoading}>
                         {operationState === 'REGISTERING' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>} Registrar Portal
                    </Button>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Ship /> Painel de Travessia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div>
                        <label className="text-sm font-medium text-muted-foreground">ID da Entidade</label>
                        <Input value={entidadeId} onChange={e => setEntidadeId(e.target.value)} disabled={stateIsLoading} />
                    </div>
                     <div>
                        <label className="text-sm font-medium text-muted-foreground">Intenção (JSON)</label>
                        <Textarea value={intencao} onChange={e => setIntencao(e.target.value)} disabled={stateIsLoading} />
                    </div>
                     <Button onClick={handleActivatePortal} disabled={stateIsLoading}>
                        {operationState === 'ACTIVATING' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>} Ativar Portal
                    </Button>
                    <Button onClick={handleTraverse} disabled={stateIsLoading || portals[portalId]?.status !== 'ATIVO'}>
                        {operationState === 'TRAVERSING' ? <LoaderCircle className="animate-spin mr-2"/> : <User className="mr-2"/>} Iniciar Travessia
                    </Button>
                </CardContent>
            </Card>
        </div>

        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><GitBranch /> Status da Rede de Portais</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[40rem]">
                    <Table>
                        <TableHeader><TableRow><TableHead>ID do Portal</TableHead><TableHead>Dimensão Alvo</TableHead><TableHead>Status</TableHead><TableHead>Coerência</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {Object.keys(portals).length === 0 ? (
                                <TableRow><TableCell colSpan={4} className="h-24 text-center text-muted-foreground">Nenhum portal registrado.</TableCell></TableRow>
                            ) : Object.values(portals).map(p => (
                                <TableRow key={p.id}>
                                    <TableCell className="font-semibold">{p.id}</TableCell>
                                    <TableCell className="text-xs">{p.dimensao_alvo}</TableCell>
                                    <TableCell>
                                        <Badge variant={p.status === 'ATIVO' ? 'default' : (p.status === 'FALHA' ? 'destructive' : 'secondary')} className={cn(p.status === 'ATIVO' && 'bg-green-600/80')}>
                                            {p.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-mono">{(p.coerencia_campo * 100).toFixed(2)}%</TableCell>
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
                <CardTitle className="flex items-center gap-2"><History />Log de Operações do Nexus</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-80 bg-background/50 rounded-md border p-2">
                    <div className="font-mono text-xs space-y-1 p-2">
                        {logs.map((log) => <p key={log.id}>
                            <span className="text-muted-foreground">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                            <span className={cn('ml-2', log.status === 'FAILURE' && 'text-red-400', log.status === 'CRITICAL' && 'text-red-500 font-bold', log.status === 'SUCCESS' && 'text-green-400')}>[{log.status}]</span>
                            <span className="ml-2">{log.details}</span>
                        </p>)}
                    </div>
                </ScrollArea>
            </CardContent>
       </Card>
    </div>
  );
};

export default Module39;
