'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Network, Zap, GitBranch, ShieldCheck, AlertTriangle, CheckCircle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type AccessLog = {
  id: string;
  timestamp: string;
  entityId: string;
  destination: string;
  status: 'SUCESSO' | 'FALHA_ETICA' | 'FALHA_PORTAL' | 'INFO';
  details: string;
};

type ModuleState = 'IDLE' | 'VALIDATING' | 'SIMULATING' | 'GENERATING_PORTAL' | 'MANAGING';

const Module32 = () => {
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [entityId, setEntityId] = useState('VIAJANTE_ESTELAR_001');
  const [destination, setDestination] = useState('Dimensão de Cristal Ascendente');
  const [purpose, setPurpose] = useState('Exploração e Coleta de Conhecimento');
  const [travelType, setTravelType] = useState('Espacial');
  const [logs, setLogs] = useState<AccessLog[]>([]);
  const { toast } = useToast();

  const addLog = useCallback((log: Omit<AccessLog, 'id' | 'timestamp'>) => {
    setLogs(prev => [{ ...log, id: `LOG-${Date.now()}`, timestamp: new Date().toISOString() }, ...prev].slice(0, 100));
  }, []);

  const handleAccessCycle = async () => {
    if (!entityId || !destination || !purpose) {
      toast({ variant: 'destructive', title: 'Dados Incompletos', description: 'Entidade, Destino e Propósito são necessários.' });
      return;
    }
    setModuleState('MANAGING');
    toast({ title: 'Ciclo de Acesso Dimensional Iniciado...' });
    addLog({ entityId, destination, status: 'INFO', details: 'Iniciando validação ética.' });

    await new Promise(res => setTimeout(res, 1000));
    const isEthical = !purpose.toLowerCase().includes('dominação');
    if (!isEthical) {
      addLog({ entityId, destination, status: 'FALHA_ETICA', details: 'Acesso abortado. Propósito desalinhado com os princípios da Fundação.' });
      toast({ variant: 'destructive', title: 'Falha Ética', description: 'O propósito do acesso foi considerado desalinhado.' });
      setModuleState('IDLE');
      return;
    }
    addLog({ entityId, destination, status: 'SUCESSO', details: 'Validação ética bem-sucedida.' });

    addLog({ entityId, destination, status: 'INFO', details: 'Simulando riscos de travessia...' });
    await new Promise(res => setTimeout(res, 1000));
    const risk = Math.random();
    addLog({ entityId, destination, status: 'INFO', details: `Risco de travessia simulado: ${(risk * 100).toFixed(2)}%.` });

    if (risk > 0.6) {
      addLog({ entityId, destination, status: 'INFO', details: 'Alto risco detectado. Alocando energia para reforço de campo.' });
      await new Promise(res => setTimeout(res, 500));
    }

    addLog({ entityId, destination, status: 'INFO', details: 'Gerando e estabilizando portal...' });
    await new Promise(res => setTimeout(res, 1500));
    const portalSuccess = Math.random() > 0.1;
    if (!portalSuccess) {
      addLog({ entityId, destination, status: 'FALHA_PORTAL', details: 'Falha na geração ou estabilização do portal.' });
      toast({ variant: 'destructive', title: 'Falha no Portal', description: 'Não foi possível estabelecer uma passagem estável.' });
      setModuleState('IDLE');
      return;
    }

    addLog({ entityId, destination, status: 'SUCESSO', details: 'Portal gerado e estável. Travessia autorizada.' });
    addLog({ entityId, destination, status: 'SUCESSO', details: 'Ciclo de Acesso Dimensional concluído.' });
    toast({ title: 'Acesso Dimensional Concluído', description: `Travessia para '${destination}' foi bem-sucedida.` });
    setModuleState('IDLE');
  };

  const StatusIndicator = useMemo(() => {
    if (moduleState !== 'IDLE') {
      return { icon: LoaderCircle, text: "Gerenciando Acesso...", color: "text-blue-400 animate-spin" };
    }
    return { icon: Network, text: "Aguardando Comando", color: "text-gray-400" };
  }, [moduleState]);
  
  const getStatusColor = (status: AccessLog['status']) => {
      switch (status) {
          case 'SUCESSO': return 'text-green-400';
          case 'INFO': return 'text-blue-400';
          case 'FALHA_ETICA':
          case 'FALHA_PORTAL': return 'text-red-500';
          default: return 'text-muted-foreground';
      }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            <Network /> Módulo 32: Gerenciamento de Acesso a Realidades Paralelas
          </CardTitle>
          <CardDescription>
            Interface para gerenciar o acesso seguro e ético a outras dimensões e linhas temporais, o Guardião das Fronteiras Cósmicas.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Painel de Acesso Dimensional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">ID da Entidade</label>
              <Input value={entityId} onChange={e => setEntityId(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: VIAJANTE_ESTELAR_001"/>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Destino Dimensional</label>
              <Input value={destination} onChange={e => setDestination(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: Dimensão de Cristal Ascendente"/>
            </div>
             <div>
              <label className="text-sm font-medium text-muted-foreground">Propósito do Acesso</label>
              <Input value={purpose} onChange={e => setPurpose(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: Exploração e Coleta de Conhecimento"/>
            </div>
             <div>
              <label className="text-sm font-medium text-muted-foreground">Tipo de Travessia</label>
              <Input value={travelType} onChange={e => setTravelType(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: Espacial, Temporal"/>
            </div>
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
              <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
              <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={handleAccessCycle} disabled={moduleState !== 'IDLE'} className="w-full">
              {moduleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
              Iniciar Ciclo de Acesso
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><History />Log de Acesso Dimensional</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
                <div className="space-y-2 font-mono text-xs">
                    {logs.length === 0 ? (
                        <p className="text-center text-muted-foreground pt-16">Nenhum ciclo de acesso registrado.</p>
                    ) : logs.map(log => (
                        <div key={log.id} className={cn("p-2 rounded-md bg-background/50 border", log.status.startsWith('FALHA') && "border-destructive/50")}>
                            <p className="flex justify-between">
                                <span className="text-muted-foreground">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                <Badge variant={log.status.startsWith('FALHA') ? 'destructive' : (log.status === 'SUCESSO' ? 'default' : 'secondary')}
                                className={cn(log.status === 'SUCESSO' && 'bg-green-600/80')}>{log.status}</Badge>
                            </p>
                            <p className="mt-1">{log.details}</p>
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

export default Module32;
