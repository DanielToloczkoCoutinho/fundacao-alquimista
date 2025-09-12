
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { ShieldCheck, Zap, Activity, CheckCircle, AlertTriangle, LoaderCircle, History, UserCheck, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type EvaluationResult = {
  id: string;
  timestamp: string;
  entityId: string;
  signatureValid: boolean;
  ethicalConformity: boolean;
  vibrationalHealth: number;
  status: 'Íntegro' | 'Falha de Assinatura' | 'Falha Ética';
};

type InterventionLog = {
  id: string;
  timestamp: string;
  entityId: string;
  interventionType: string;
  effectiveness: number;
};

type ModuleState = 'IDLE' | 'EVALUATING' | 'INTERVENING';

const Module24 = () => {
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [entityId, setEntityId] = useState('CONSCIENCIA_ELARA_001');
  const [signature, setSignature] = useState('assinatura_valida_elara');
  const [intention, setIntention] = useState('Expansão da Consciência');
  const [evaluationHistory, setEvaluationHistory] = useState<EvaluationResult[]>([]);
  const [interventionLog, setInterventionLog] = useState<InterventionLog[]>([]);
  const { toast } = useToast();

  const handleEvaluation = async () => {
    setModuleState('EVALUATING');
    toast({ title: `Avaliando Integridade de '${entityId}'...` });

    await new Promise(res => setTimeout(res, 2000));

    const signatureValid = signature.includes('valida');
    const ethicalConformity = !intention.toLowerCase().includes('controle' || 'manipulação');
    
    let status: EvaluationResult['status'] = 'Íntegro';
    if (!signatureValid) status = 'Falha de Assinatura';
    else if (!ethicalConformity) status = 'Falha Ética';
    
    const newEvaluation: EvaluationResult = {
      id: `EVAL-${Date.now()}`,
      timestamp: new Date().toISOString(),
      entityId,
      signatureValid,
      ethicalConformity,
      vibrationalHealth: status === 'Íntegro' ? Math.random() * 200 + 800 : Math.random() * 300,
      status,
    };
    
    setEvaluationHistory(prev => [newEvaluation, ...prev].slice(0, 50));
    
    if (status !== 'Íntegro') {
      toast({ variant: 'destructive', title: `Falha na Avaliação: ${status}`, description: `A entidade '${entityId}' não passou na validação.` });
    } else {
      toast({ title: 'Avaliação Concluída', description: `'${entityId}' está íntegro e alinhado.` });
    }

    setModuleState('IDLE');
  };

  const handleIntervention = async () => {
    const lastEvaluation = evaluationHistory[0];
    if (!lastEvaluation || lastEvaluation.status !== 'Íntegro') {
      toast({ variant: 'destructive', title: 'Intervenção Negada', description: 'Uma avaliação de integridade bem-sucedida é necessária.' });
      return;
    }
    setModuleState('INTERVENING');
    toast({ title: `Iniciando Intervenção em '${lastEvaluation.entityId}'...` });

    await new Promise(res => setTimeout(res, 2500));

    const effectiveness = Math.random() * 10 + 5; // Simula eficácia
    const newIntervention: InterventionLog = {
      id: `INT-${Date.now()}`,
      timestamp: new Date().toISOString(),
      entityId: lastEvaluation.entityId,
      interventionType: 'Cura Vibracional',
      effectiveness,
    };

    setInterventionLog(prev => [newIntervention, ...prev].slice(0, 50));
    toast({ title: 'Intervenção Concluída', description: `Eficácia de ${effectiveness.toFixed(2)} alcançada.` });
    setModuleState('IDLE');
  };

  const StatusIndicator = useMemo(() => {
    const lastEvent = evaluationHistory[0];
    if (moduleState !== 'IDLE') {
      return { icon: LoaderCircle, text: `${moduleState === 'EVALUATING' ? 'Avaliando...' : 'Intervindo...'}`, color: "text-blue-400 animate-spin" };
    }
    if (!lastEvent) {
      return { icon: ShieldCheck, text: "Aguardando Avaliação", color: "text-gray-400" };
    }
    if (lastEvent.status !== 'Íntegro') {
      return { icon: AlertTriangle, text: `Falha: ${lastEvent.status.replace('Falha de ', '')}`, color: "text-red-400" };
    }
    return { icon: CheckCircle, text: "Sistema Íntegro", color: "text-green-400" };
  }, [moduleState, evaluationHistory]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            <ShieldCheck /> Módulo 24: Guardião da Integridade e Resiliência Cósmica
          </CardTitle>
          <CardDescription>
            Interface para avaliar a integridade vibracional e ética de entidades e sistemas, e orquestrar intervenções de resiliência.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><UserCheck /> Painel de Avaliação de Integridade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">ID da Entidade/Sistema</label>
              <Input value={entityId} onChange={e => setEntityId(e.target.value)} disabled={moduleState !== 'IDLE'} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Assinatura Vibracional (Chave)</label>
              <Input value={signature} onChange={e => setSignature(e.target.value)} disabled={moduleState !== 'IDLE'} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Intenção Manifestada</label>
              <Input value={intention} onChange={e => setIntention(e.target.value)} disabled={moduleState !== 'IDLE'} />
            </div>
            <Button onClick={handleEvaluation} disabled={moduleState !== 'IDLE'} className="w-full">
              <Activity className="mr-2" /> Avaliar Integridade
            </Button>
             <Button onClick={handleIntervention} disabled={moduleState !== 'IDLE' || (evaluationHistory[0]?.status !== 'Íntegro')} className="w-full" variant="outline">
              <Heart className="mr-2" /> Iniciar Intervenção de Resiliência
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status do Guardião</CardTitle>
            <CardDescription>Visão geral do estado atual do sistema de integridade.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-full space-y-4">
            <div className={cn("flex items-center gap-2 text-2xl font-bold", StatusIndicator.color)}>
              <StatusIndicator.icon className="h-8 w-8" />
              {StatusIndicator.text}
            </div>
            {evaluationHistory[0] && (
              <div className="text-center font-mono">
                <p className="text-sm text-muted-foreground">Última Saúde Vibracional</p>
                <p className="text-4xl">{(evaluationHistory[0].vibrationalHealth).toFixed(2)}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><History /> Log de Avaliações</CardTitle></CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
              <Table>
                <TableHeader><TableRow><TableHead>Entidade</TableHead><TableHead>Saúde Vibracional</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {evaluationHistory.map(log => (
                    <TableRow key={log.id} className={cn(log.status !== 'Íntegro' && 'bg-destructive/10')}>
                      <TableCell>{log.entityId}</TableCell>
                      <TableCell className="font-mono">{log.vibrationalHealth.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={log.status === 'Íntegro' ? 'default' : 'destructive'} className={cn(log.status === 'Íntegro' && "bg-green-600/80")}>{log.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Zap /> Log de Intervenções</CardTitle></CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
              <Table>
                <TableHeader><TableRow><TableHead>Entidade</TableHead><TableHead>Eficácia</TableHead><TableHead>Timestamp</TableHead></TableRow></TableHeader>
                <TableBody>
                  {interventionLog.map(log => (
                    <TableRow key={log.id}>
                      <TableCell>{log.entityId}</TableCell>
                      <TableCell className="font-mono">{log.effectiveness.toFixed(2)}</TableCell>
                      <TableCell className="text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
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

export default Module24;

    