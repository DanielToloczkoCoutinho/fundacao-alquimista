'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Shield, Zap, History, CheckCircle, AlertTriangle, LoaderCircle, Microscope } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type Threat = {
  id: string;
  timestamp: string;
  location: string;
  type: 'CRITICA' | 'MODERADA' | 'NENHUMA';
  severity: number;
};

type NeutralizationLog = {
  id: string;
  timestamp: string;
  threatId: string;
  action: string;
  status: 'SUCESSO' | 'FALHA_PARCIAL' | 'INFO';
};

type ModuleState = 'IDLE' | 'SCANNING' | 'NEUTRALIZING';

const Module30 = () => {
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [location, setLocation] = useState('Setor Estelar Delta');
  const [threatHistory, setThreatHistory] = useState<Threat[]>([]);
  const [neutralizationLogs, setNeutralizationLogs] = useState<NeutralizationLog[]>([]);
  const { toast } = useToast();

  const addLog = useCallback((log: Omit<NeutralizationLog, 'id' | 'timestamp'>) => {
    const newLog = { ...log, id: `NEUT-${Date.now()}`, timestamp: new Date().toISOString() };
    setNeutralizationLogs(prev => [newLog, ...prev]);
  }, []);

  const handleScan = async () => {
    if (!location) {
      toast({ variant: 'destructive', title: 'Localização Necessária' });
      return;
    }
    setModuleState('SCANNING');
    toast({ title: 'Iniciando Escaneamento de Ameaças...', description: `Escaneando ${location}.` });
    addLog({ threatId: 'N/A', action: `Iniciando escaneamento em ${location}.`, status: 'INFO' });

    await new Promise(res => setTimeout(res, 2000));

    const severity = Math.random();
    let type: Threat['type'] = 'NENHUMA';
    if (severity > 0.7) type = 'CRITICA';
    else if (severity > 0.4) type = 'MODERADA';

    const newThreat: Threat = {
      id: `TH-${Date.now()}`,
      timestamp: new Date().toISOString(),
      location,
      type,
      severity,
    };

    setThreatHistory(prev => [newThreat, ...prev]);
    
    if (type !== 'NENHUMA') {
      toast({
        variant: type === 'CRITICA' ? 'destructive' : 'default',
        title: `Ameaça ${type} Detectada!`,
        description: `Severidade: ${(severity * 100).toFixed(2)}% em ${location}.`,
      });
      addLog({ threatId: newThreat.id, action: `Ameaça ${type} detectada.`, status: 'INFO' });
      await handleNeutralize(newThreat);
    } else {
      toast({ title: 'Nenhuma Ameaça Detectada', description: `Setor ${location} está seguro.` });
      addLog({ threatId: 'N/A', action: 'Nenhuma ameaça detectada.', status: 'SUCESSO' });
      setModuleState('IDLE');
    }
  };

  const handleNeutralize = async (threat: Threat) => {
    setModuleState('NEUTRALIZING');
    addLog({ threatId: threat.id, action: 'Iniciando protocolos de neutralização...', status: 'INFO' });
    
    await new Promise(res => setTimeout(res, 1000));
    addLog({ threatId: threat.id, action: 'Consultando Conselho (Módulo 7)...', status: 'INFO' });

    await new Promise(res => setTimeout(res, 1000));
    addLog({ threatId: threat.id, action: 'Gerando Campo de Contenção (Módulo 102)...', status: 'INFO' });

    await new Promise(res => setTimeout(res, 1500));
    
    const success = threat.severity < 0.8 || Math.random() > 0.3; // 70% chance de sucesso para ameaças críticas
    if (success) {
      addLog({ threatId: threat.id, action: 'Ameaça neutralizada com sucesso.', status: 'SUCESSO' });
      toast({ title: 'Neutralização Bem-Sucedida', description: `A ameaça em ${threat.location} foi contida.` });
    } else {
      addLog({ threatId: threat.id, action: 'Falha parcial na neutralização. Acionando contramedidas.', status: 'FALHA_PARCIAL' });
      toast({ variant: 'destructive', title: 'Falha Parcial na Neutralização!', description: 'Iniciando protocolos de contingência (M98, M101).' });
    }

    setModuleState('IDLE');
  };

  const StatusIndicator = useMemo(() => {
    const lastThreat = threatHistory[0];
    if (moduleState !== 'IDLE') {
      return { icon: LoaderCircle, text: `${moduleState}...`, color: "text-blue-400 animate-spin" };
    }
    if (!lastThreat || lastThreat.type === 'NENHUMA') {
      return { icon: CheckCircle, text: "Sistema Seguro", color: "text-green-400" };
    }
    return { icon: AlertTriangle, text: `Ameaça ${lastThreat.type} Recente`, color: "text-red-400" };
  }, [moduleState, threatHistory]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            <Shield /> Módulo 30: Guardião da Defesa Cósmica
          </CardTitle>
          <CardDescription>
            Interface para escanear, detectar e neutralizar ameaças vibracionais e de campo de força, orquestrando a defesa da Fundação.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Painel de Defesa</CardTitle>
            <CardDescription>Inicie um ciclo de defesa para um local específico.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Localização Alvo</label>
              <Input value={location} onChange={e => setLocation(e.target.value)} disabled={moduleState !== 'IDLE'} />
            </div>
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
              <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
              <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={handleScan} disabled={moduleState !== 'IDLE'} className="w-full">
              {moduleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
              {moduleState !== 'IDLE' ? 'Ciclo em Andamento...' : 'Iniciar Ciclo de Defesa'}
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><History /> Histórico de Ameaças Detectadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Localização</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Severidade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {threatHistory.map(threat => (
                    <TableRow key={threat.id} className={cn(threat.type === 'CRITICA' && "bg-destructive/10")}>
                      <TableCell className="font-mono text-xs">{new Date(threat.timestamp).toLocaleTimeString()}</TableCell>
                      <TableCell>{threat.location}</TableCell>
                      <TableCell>
                        <Badge variant={threat.type === 'CRITICA' ? 'destructive' : (threat.type === 'MODERADA' ? 'default' : 'secondary')}>
                          {threat.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono">{(threat.severity * 100).toFixed(2)}%</TableCell>
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
            <CardTitle className="flex items-center gap-2"><Microscope/> Log de Neutralização</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-2 font-mono text-xs">
                {neutralizationLogs.map(log => (
                    <div key={log.id} className="flex gap-2 items-start">
                        <span className="text-muted-foreground">{new Date(log.timestamp).toLocaleTimeString()}</span>
                        <Badge variant={log.status === 'SUCESSO' ? 'default' : log.status === 'FALHA_PARCIAL' ? 'destructive' : 'secondary'} className={cn(log.status === 'SUCESSO' && 'bg-green-600/80')}>{log.status}</Badge>
                        <span>{log.action}</span>
                    </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
    </div>
  );
};

export default Module30;
