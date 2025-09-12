'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Beaker, Zap, AlertTriangle, CheckCircle, LoaderCircle, History, Sparkles, Dna } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type ManifestationStatus = 'IDLE' | 'VALIDATING' | 'ENERGIZING' | 'SYNTHESIZING' | 'SUCCESS' | 'FAILED';

type ManifestationLog = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'CRITICAL';
};

const Module36 = () => {
  const [manifestationState, setManifestationState] = useState<ManifestationStatus>('IDLE');
  const [logs, setLogs] = useState<ManifestationLog[]>([]);
  const { toast } = useToast();

  const [specName, setSpecName] = useState('Cristal de Coerência Quântica');
  const [specStructure, setSpecStructure] = useState('Si-O2-Emaranhado');
  const [specComplexity, setSpecComplexity] = useState(1.5);
  const [intentionDesc, setIntentionDesc] = useState('Estabilização de Campos Energéticos');
  const [intentionPurity, setIntentionPurity] = useState(0.95);
  const [collectiveData, setCollectiveData] = useState('[98, 101, 100, 99, 102]');

  const addLog = useCallback((operation: string, details: string, status: ManifestationLog['status']) => {
    setLogs(prev => [{ id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
  }, []);

  const runManifestationCycle = async () => {
    addLog('Início de Ciclo', `Iniciando manifestação para '${specName}'.`, 'INFO');
    setManifestationState('VALIDATING');
    toast({ title: 'Ciclo de Manifestação Iniciado', description: 'Validando alinhamento ético da intenção...' });

    await new Promise(res => setTimeout(res, 1000));
    if (intentionPurity < 0.88) {
      addLog('Validação Ética', 'Falha. Pureza da intenção abaixo do limiar.', 'CRITICAL');
      toast({ variant: 'destructive', title: 'Manifestação Abortada', description: `Pureza de ${intentionPurity.toFixed(2)} é insuficiente.` });
      setManifestationState('FAILED');
      setTimeout(() => setManifestationState('IDLE'), 3000);
      return;
    }
    addLog('Validação Ética', 'Sucesso. Intenção alinhada com os princípios da Fundação.', 'SUCCESS');

    setManifestationState('ENERGIZING');
    toast({ title: 'Transmutando Energia Primordial...' });
    await new Promise(res => setTimeout(res, 1500));
    const energyRequired = 1000 * Math.exp(specComplexity * 1.618) / intentionPurity;
    addLog('Transmutação de Energia', `Energia necessária: ${energyRequired.toFixed(2)}. Transmutação em andamento.`, 'INFO');

    setManifestationState('SYNTHESIZING');
    toast({ title: 'Síntese Cósmica Iniciada', description: `Orquestrando a gênese da matéria via Módulo 27.` });
    await new Promise(res => setTimeout(res, 2000));
    
    const ressonanciaMateria = (intentionPurity + Math.random() * 0.1) / 2 + 0.5;
    if (ressonanciaMateria < 0.75) {
        addLog('Síntese Cósmica', `Falha. Ressonância da matéria manifestada instável: ${ressonanciaMateria.toFixed(2)}.`, 'FAILURE');
        toast({ variant: 'destructive', title: 'Falha na Síntese', description: 'Ressonância da matéria instável. Protocolo de cura acionado.' });
        setManifestationState('FAILED');
    } else {
        addLog('Síntese Cósmica', `Sucesso. Matéria manifestada com ressonância de ${ressonanciaMateria.toFixed(2)}.`, 'SUCCESS');
        toast({ title: 'Manifestação Concluída', description: `'${specName}' foi manifestado com sucesso.` });
        setManifestationState('SUCCESS');
    }

    setTimeout(() => setManifestationState('IDLE'), 5000);
  };

  const StatusIndicator = useMemo(() => {
    switch (manifestationState) {
      case 'VALIDATING': return { icon: LoaderCircle, text: "Validando Ética...", color: "text-yellow-400 animate-spin" };
      case 'ENERGIZING': return { icon: LoaderCircle, text: "Transmutando Energia...", color: "text-orange-400 animate-spin" };
      case 'SYNTHESIZING': return { icon: LoaderCircle, text: "Sintetizando Matéria...", color: "text-purple-400 animate-spin" };
      case 'SUCCESS': return { icon: CheckCircle, text: "Matéria Manifestada", color: "text-green-400" };
      case 'FAILED': return { icon: AlertTriangle, text: "Falha na Manifestação", color: "text-red-400" };
      case 'IDLE': default: return { icon: Dna, text: "Aguardando Gênese", color: "text-gray-400" };
    }
  }, [manifestationState]);
  
  const getStatusColor = (status: ManifestationLog['status']) => {
    switch (status) {
        case 'SUCCESS': return 'text-green-400';
        case 'INFO': return 'text-blue-400';
        case 'FAILURE':
        case 'CRITICAL': return 'text-red-500';
        default: return 'text-muted-foreground';
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400">
            <Dna /> Módulo 36: Arquiteto da Luz Primordial
          </CardTitle>
          <CardDescription>
            Interface para orquestrar a gênese da matéria a partir da consciência, garantindo coerência estrutural e alinhamento com a Unidade Primordial.
          </CardDescription>
        </CardHeader>
      </Card>
      
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Painel de Gênese</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Nome do Material</label>
              <Input value={specName} onChange={e => setSpecName(e.target.value)} disabled={manifestationState !== 'IDLE'} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Intenção da Manifestação</label>
              <Input value={intentionDesc} onChange={e => setIntentionDesc(e.target.value)} disabled={manifestationState !== 'IDLE'} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Pureza da Intenção: {(intentionPurity * 100).toFixed(0)}%</label>
              <Slider value={[intentionPurity]} onValueChange={v => setIntentionPurity(v[0])} min={0} max={1} step={0.01} className="mt-2" disabled={manifestationState !== 'IDLE'}/>
            </div>
             <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
              <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
              <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={runManifestationCycle} disabled={manifestationState !== 'IDLE'} className="w-full">
              {manifestationState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
              {manifestationState !== 'IDLE' ? 'Processando Gênese...' : 'Iniciar Manifestação'}
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><History/>Log do Ciclo de Gênese</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Operação</TableHead>
                    <TableHead>Detalhes</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.length === 0 ? (
                    <TableRow><TableCell colSpan={4} className="h-24 text-center text-muted-foreground">Nenhum ciclo iniciado.</TableCell></TableRow>
                  ) : logs.map(log => (
                    <TableRow key={log.id}>
                      <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                      <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                      <TableCell className="text-xs">{log.details}</TableCell>
                      <TableCell>
                        <span className={cn("font-semibold", getStatusColor(log.status))}>
                            {log.status}
                        </span>
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

export default Module36;
