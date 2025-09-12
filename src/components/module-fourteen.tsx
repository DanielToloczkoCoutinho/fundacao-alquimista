'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Shield, Zap, History, CheckCircle, XCircle, LoaderCircle, GitCommit, SlidersHorizontal, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';

type OperationState = 'IDLE' | 'ORCHESTRATING' | 'VALIDATING';

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'CRITICAL';
};

const ModuleFourteen = () => {
  const [operationState, setOperationState] = useState<OperationState>('IDLE');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const { toast } = useToast();

  // State for Resilience Orchestration
  const [targetSystem, setTargetSystem] = useState('Sistema_Nave_Estelar_Aurora');
  const [perturbationType, setPerturbationType] = useState('Tempestade_Solar_Menor');
  const [impactLevel, setImpactLevel] = useState(0.3);

  // State for Integrity Validation
  const [entityId, setEntityId] = useState('Módulo_Principal_X');
  const [entityType, setEntityType] = useState('Módulo_Fundacao');

  const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
    setLogs(prev => [
      { id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status },
      ...prev
    ].slice(0, 100));
  }, []);

  const handleOrchestrateResilience = async () => {
    setOperationState('ORCHESTRATING');
    addLog('Orquestração de Resiliência', `Iniciada para '${targetSystem}' contra '${perturbationType}' com impacto ${impactLevel.toFixed(2)}.`, 'INFO');
    toast({ title: 'Orquestração de Resiliência Iniciada' });

    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog('Consulta ao Conselho', 'Diretriz: Promover a harmonia universal.', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 500));
    addLog('Avaliação Ética', 'Status: CONFORME.', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 500));

    if (impactLevel > 0.7) {
        addLog('Impacto Crítico', 'Acionando defesas e reparos em múltiplos módulos (M10, M11, M12, M13, etc.).', 'CRITICAL');
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    const sabedoriaAdquirida = impactLevel * (1.618 + Math.random());
    addLog('Transmutação de Resiliência', `Desafio transmutado em sabedoria. Sabedoria Adquirida: ${sabedoriaAdquirida.toFixed(4)}.`, 'SUCCESS');
    
    setOperationState('IDLE');
    toast({ title: 'Orquestração Concluída', description: `Resiliência para '${targetSystem}' reforçada.` });
  };

  const handleValidateIntegrity = async () => {
    setOperationState('VALIDATING');
    addLog('Validação de Integridade', `Iniciada para '${entityId}' (${entityType}).`, 'INFO');
    toast({ title: 'Validação de Integridade Iniciada' });

    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog('Validação de Assinatura Quântica', 'Assinatura validada com sucesso.', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 500));
    addLog('Validação de Coerência Ética', 'Coerência ética validada.', 'INFO');
    await new Promise(resolve => setTimeout(resolve, 500));

    const isDissonant = Math.random() < 0.1; // 10% chance of dissonance
    if (isDissonant) {
        addLog('Monitoramento de Frequências', 'Dissonância vibracional detectada.', 'CRITICAL');
        addLog('Validação de Integridade', `Falha na validação de '${entityId}'.`, 'FAILURE');
        toast({ variant: 'destructive', title: 'Falha na Validação', description: `Dissonância detectada em '${entityId}'.` });
    } else {
        addLog('Monitoramento de Frequências', 'Sistema coerente.', 'SUCCESS');
        addLog('Validação de Integridade', `Integridade de '${entityId}' validada com sucesso.`, 'SUCCESS');
        toast({ title: 'Validação Concluída', description: `'${entityId}' está ÍNTEGRO.` });
    }

    setOperationState('IDLE');
  };

  const StatusIndicator = useMemo(() => {
    switch(operationState) {
        case 'ORCHESTRATING':
            return { icon: LoaderCircle, text: "Orquestrando Resiliência...", color: "text-blue-400 animate-spin" };
        case 'VALIDATING':
            return { icon: LoaderCircle, text: "Validando Integridade...", color: "text-purple-400 animate-spin" };
        case 'IDLE':
        default:
             return { icon: CheckCircle, text: "Sistema em Standby", color: "text-green-400" };
    }
  }, [operationState]);

  const getStatusColor = (status: LogEntry['status']) => {
    switch (status) {
        case 'SUCCESS': return 'text-green-400';
        case 'INFO': return 'text-blue-400';
        case 'FAILURE': return 'text-red-500';
        case 'CRITICAL': return 'text-orange-400 font-bold';
        default: return 'text-muted-foreground';
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            <Shield /> Módulo 14: Guardião da Integridade e Resiliência Cósmica
          </CardTitle>
          <CardDescription>
            Interface para orquestrar respostas a perturbações e validar a integridade universal de sistemas e entidades.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="p-4 rounded-lg border flex items-center justify-center text-lg font-semibold gap-2 bg-background/50">
          <StatusIndicator.icon className={cn("h-5 w-5", StatusIndicator.color)} />
          <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Heart />Orquestração de Resiliência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Sistema Alvo</label>
                    <Input value={targetSystem} onChange={e => setTargetSystem(e.target.value)} disabled={operationState !== 'IDLE'} />
                </div>
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Tipo de Perturbação</label>
                    <Input value={perturbationType} onChange={e => setPerturbationType(e.target.value)} disabled={operationState !== 'IDLE'} />
                </div>
                <div>
                    <label className="text-sm text-muted-foreground">Nível de Impacto: {impactLevel.toFixed(2)}</label>
                    <Slider value={[impactLevel]} onValueChange={v => setImpactLevel(v[0])} min={0} max={1} step={0.05} className="mt-2" disabled={operationState !== 'IDLE'}/>
                </div>
                <Button onClick={handleOrchestrateResilience} disabled={operationState !== 'IDLE'} className="w-full">
                    <Zap className="mr-2"/> Orquestrar Resposta
                </Button>
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><SlidersHorizontal />Validação de Integridade Universal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">ID da Entidade/Sistema</label>
                    <Input value={entityId} onChange={e => setEntityId(e.target.value)} disabled={operationState !== 'IDLE'} />
                </div>
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Tipo</label>
                    <Input value={entityType} onChange={e => setEntityType(e.target.value)} disabled={operationState !== 'IDLE'} />
                </div>
                <Button onClick={handleValidateIntegrity} disabled={operationState !== 'IDLE'} className="w-full">
                    <CheckCircle className="mr-2"/> Validar Integridade
                </Button>
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History />Log de Operações do Guardião</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
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
                    <TableRow><TableCell colSpan={4} className="text-center h-24 text-muted-foreground">Nenhuma operação registrada.</TableCell></TableRow>
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
  );
};

export default ModuleFourteen;
