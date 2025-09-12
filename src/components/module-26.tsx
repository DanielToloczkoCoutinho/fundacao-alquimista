'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Milestone, Zap, Scan, CheckCircle, AlertTriangle, LoaderCircle, History, UserCheck, Key, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type PortalStatus = 'INACTIVE' | 'DETECTING' | 'STABILIZING' | 'ACTIVE' | 'FAILED';
type TravessiaStatus = 'PENDING' | 'AUTHORIZED' | 'DENIED';

type PortalLog = {
  id: string;
  timestamp: string;
  location: string;
  balancoIntegridade: number;
  status: PortalStatus;
};

type TravessiaLog = {
  id: string;
  timestamp: string;
  portalId: string;
  entidadeId: string;
  status: TravessiaStatus;
};

const Module26 = () => {
  const [portalLogs, setPortalLogs] = useState<PortalLog[]>([]);
  const [travessiaLogs, setTravessiaLogs] = useState<TravessiaLog[]>([]);
  const [moduleState, setModuleState] = useState<PortalStatus>('INACTIVE');
  const [location, setLocation] = useState('SETOR_ALFA_7');
  const [entidade, setEntidade] = useState('ENTIDADE_VIAJANTE_001');
  const { toast } = useToast();

  const addPortalLog = useCallback((log: Omit<PortalLog, 'id' | 'timestamp'>) => {
    const newLog = { ...log, id: `PORTAL-${Date.now()}`, timestamp: new Date().toISOString() };
    setPortalLogs(prev => [newLog, ...prev].slice(0, 100));
    return newLog;
  }, []);
  
  const addTravessiaLog = useCallback((log: Omit<TravessiaLog, 'id' | 'timestamp'>) => {
    const newLog = { ...log, id: `TRAV-${Date.now()}`, timestamp: new Date().toISOString() };
    setTravessiaLogs(prev => [newLog, ...prev].slice(0, 100));
    return newLog;
  }, []);

  const handlePortalCycle = async () => {
    if (!location) {
      toast({ variant: 'destructive', title: 'Localização Necessária', description: 'Por favor, defina uma localização para o portal.' });
      return;
    }
    setModuleState('DETECTING');
    toast({ title: 'Ciclo de Portal Iniciado', description: `Detectando singularidade em ${location}.` });

    await new Promise(res => setTimeout(res, 1500));
    
    const balancoIntegridade = Math.random() * 5000 + 2000;
    const portalLog = addPortalLog({ location, balancoIntegridade, status: 'STABILIZING' });
    
    setModuleState('STABILIZING');
    toast({ title: 'Singularidade Detectada', description: `Iniciando estabilização. Balanço: ${balancoIntegridade.toFixed(2)}` });
    
    await new Promise(res => setTimeout(res, 2000));
    
    const finalBalanco = balancoIntegridade * (1 + Math.random() * 0.5);
    const updatedPortalLog = { ...portalLog, balancoIntegridade: finalBalanco, status: 'ACTIVE' as PortalStatus };
    setPortalLogs(prev => [updatedPortalLog, ...prev.slice(1)]);

    setModuleState('ACTIVE');
    toast({ title: 'Portal Estabilizado', description: `Portal em ${location} está ativo e seguro.` });

    if (entidade) {
        await new Promise(res => setTimeout(res, 1000));
        const apto = Math.random() < 0.9;
        addTravessiaLog({ portalId: portalLog.id, entidadeId: entidade, status: apto ? 'AUTHORIZED' : 'DENIED' });
        if (apto) {
            toast({ title: 'Travessia Autorizada', description: `${entidade} pode cruzar o portal.` });
        } else {
            toast({ variant: 'destructive', title: 'Travessia Negada', description: `${entidade} não está apto.` });
        }
    }

    setTimeout(() => setModuleState('INACTIVE'), 5000);
  };

  const StatusIndicator = useMemo(() => {
    switch (moduleState) {
      case 'DETECTING': return { icon: LoaderCircle, text: 'Detectando Singularidade...', color: 'text-blue-400 animate-spin' };
      case 'STABILIZING': return { icon: LoaderCircle, text: 'Estabilizando Portal...', color: 'text-purple-400 animate-spin' };
      case 'ACTIVE': return { icon: CheckCircle, text: 'Portal Ativo e Estável', color: 'text-green-400' };
      case 'FAILED': return { icon: AlertTriangle, text: 'Falha no Ciclo', color: 'text-red-400' };
      default: return { icon: Milestone, text: 'Aguardando Comando', color: 'text-gray-400' };
    }
  }, [moduleState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
            <Milestone /> Módulo 26: Gerenciamento de Portais Interdimensionais
          </CardTitle>
          <CardDescription>
            Interface para detecção, estabilização, abertura e fechamento seguro de portais, o guardião das fronteiras cósmicas.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Key/> Painel de Controle de Portais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Localização Alvo do Portal</label>
                    <Input value={location} onChange={e => setLocation(e.target.value)} disabled={moduleState !== 'INACTIVE'} placeholder="Ex: SETOR_ALFA_7" />
                 </div>
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">ID da Entidade para Travessia (Opcional)</label>
                    <Input value={entidade} onChange={e => setEntidade(e.target.value)} disabled={moduleState !== 'INACTIVE'} placeholder="Ex: ENTIDADE_VIAJANTE_001" />
                 </div>
                 <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                    <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                    <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                </div>
                 <Button onClick={handlePortalCycle} disabled={moduleState !== 'INACTIVE'} className="w-full">
                    {moduleState !== 'INACTIVE' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                    {moduleState !== 'INACTIVE' ? 'Processando Ciclo...' : 'Iniciar Ciclo de Gerenciamento'}
                 </Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><History/> Log de Portais Ativos e Estabilizados</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-96">
                    <Table>
                        <TableHeader><TableRow><TableHead>Localização</TableHead><TableHead>Balanço</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {portalLogs.length === 0 ? (
                                <TableRow><TableCell colSpan={3} className="h-24 text-center text-muted-foreground">Nenhum portal gerenciado.</TableCell></TableRow>
                            ) : portalLogs.map(log => (
                                <TableRow key={log.id}>
                                    <TableCell className="font-semibold">{log.location}</TableCell>
                                    <TableCell className="font-mono">{log.balancoIntegridade.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Badge variant={log.status === 'ACTIVE' ? 'default' : 'secondary'} className={cn(log.status === 'ACTIVE' && 'bg-green-600/80')}>
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

       <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><UserCheck/> Log de Travessias Autorizadas/Negadas</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-64">
                     <Table>
                        <TableHeader><TableRow><TableHead>Entidade</TableHead><TableHead>Portal ID</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {travessiaLogs.length === 0 ? (
                                <TableRow><TableCell colSpan={3} className="h-24 text-center text-muted-foreground">Nenhuma tentativa de travessia.</TableCell></TableRow>
                            ) : travessiaLogs.map(log => (
                                <TableRow key={log.id}>
                                    <TableCell>{log.entidadeId}</TableCell>
                                    <TableCell className="font-mono text-xs">{log.portalId.split('-')[1]}</TableCell>
                                    <TableCell>
                                        <Badge variant={log.status === 'AUTHORIZED' ? 'default' : 'destructive'} className={cn(log.status === 'AUTHORIZED' && 'bg-green-600/80')}>
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
  );
};

export default Module26;
