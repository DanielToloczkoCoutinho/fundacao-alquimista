
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { HeartPulse, Zap, GitCommit, CheckCircle, AlertTriangle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

type Diagnosis = {
  id: string;
  timestamp: string;
  entityId: string;
  balancoHarmonia: number;
  severidade: 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA';
};

type HarmonizationLog = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCESSO' | 'FALHA' | 'INFO';
};

type ModuleState = 'IDLE' | 'DIAGNOSING' | 'HARMONIZING';

const Module28 = () => {
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [entityId, setEntityId] = useState('ALMA_AURORA_001');
  const [vibrationalData, setVibrationalData] = useState('{"frequencias": [700, 800, 900], "pesos": [0.3, 0.4, 0.3], "fator_ressonancia": 0.9}');
  const [intention, setIntention] = useState('{"proposito": "Cura_Holistica", "pureza": 0.95}');
  const [diagnosisHistory, setDiagnosisHistory] = useState<Diagnosis[]>([]);
  const [harmonizationLog, setHarmonizationLog] = useState<HarmonizationLog[]>([]);
  const { toast } = useToast();

  const addHarmonizationLog = useCallback((operation: string, details: string, status: HarmonizationLog['status']) => {
    setHarmonizationLog(prev => [{ id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
  }, []);

  const handleCycle = async () => {
    let parsedVibrationalData;
    let parsedIntention;
    try {
        parsedVibrationalData = JSON.parse(vibrationalData);
        parsedIntention = JSON.parse(intention);
    } catch(e) {
        toast({ variant: 'destructive', title: 'Dados Inválidos', description: 'Dados vibracionais ou intenção devem ser um JSON válido.' });
        return;
    }

    setModuleState('DIAGNOSING');
    addHarmonizationLog('Diagnóstico', `Iniciando diagnóstico para '${entityId}'.`, 'INFO');
    toast({ title: 'Diagnóstico Iniciado', description: `Analisando a dissonância de '${entityId}'.` });

    await new Promise(res => setTimeout(res, 1500));

    const balanco_total_harmonia = Math.random() * 2000;
    let severidade: Diagnosis['severidade'] = 'BAIXA';
    if (balanco_total_harmonia < 500) severidade = 'CRITICA';
    else if (balanco_total_harmonia < 1000) severidade = 'ALTA';
    else if (balanco_total_harmonia < 1500) severidade = 'MEDIA';

    const newDiagnosis: Diagnosis = {
      id: `DIAG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      entityId,
      balancoHarmonia: balanco_total_harmonia,
      severidade,
    };
    setDiagnosisHistory(prev => [newDiagnosis, ...prev]);

    addHarmonizationLog('Diagnóstico', `Diagnóstico concluído. Severidade: ${severidade}, Balanço: ${balanco_total_harmonia.toFixed(2)}`, 'SUCESSO');
    toast({ title: 'Diagnóstico Concluído', description: `Severidade da dissonância: ${severidade}.` });

    if (severidade === 'CRITICA' || severidade === 'ALTA') {
      setModuleState('HARMONIZING');
      addHarmonizationLog('Harmonização', 'Dissonância significativa detectada. Iniciando modulação e transmutação.', 'INFO');
      toast({ title: 'Harmonização Iniciada', description: `Protocolo de cura ativado para '${entityId}'.` });

      await new Promise(res => setTimeout(res, 2000));
      
      const success = Math.random() > 0.1;
      if (success) {
          addHarmonizationLog('Harmonização', 'Modulação e transmutação de energia concluída com sucesso.', 'SUCESSO');
          addHarmonizationLog('Cura', 'Protocolo de cura geral PIRC iniciado.', 'INFO');
          addHarmonizationLog('Validação', 'Validação de ressonância final bem-sucedida.', 'SUCESSO');
          toast({ title: 'Harmonização Concluída', description: `'${entityId}' foi reintegrado à harmonia cósmica.` });
      } else {
          addHarmonizationLog('Harmonização', 'Falha na modulação. Integridade do campo comprometida.', 'FALHA');
          toast({ variant: 'destructive', title: 'Falha na Harmonização', description: `Não foi possível restaurar o equilíbrio de '${entityId}'.` });
      }
    }
    
    setModuleState('IDLE');
  };

  const StatusIndicator = useMemo(() => {
    const lastDiag = diagnosisHistory[0];
    if (moduleState !== 'IDLE') {
      return { icon: LoaderCircle, text: `${moduleState === 'DIAGNOSING' ? 'Diagnosticando...' : 'Harmonizando...'}`, color: "text-blue-400 animate-spin" };
    }
    if (!lastDiag) {
      return { icon: HeartPulse, text: "Aguardando Diagnóstico", color: "text-gray-400" };
    }
    if (lastDiag.severidade === 'CRITICA' || lastDiag.severidade === 'ALTA') {
      return { icon: AlertTriangle, text: `Dissonância ${lastDiag.severidade}`, color: "text-red-400" };
    }
    return { icon: CheckCircle, text: "Sistema em Harmonia", color: "text-green-400" };
  }, [moduleState, diagnosisHistory]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
            <HeartPulse /> Módulo 28: Harmonização Vibracional e Reintegração Cósmica
          </CardTitle>
          <CardDescription>
            Interface para diagnosticar, modular e transmutar energias dissonantes, restaurando a harmonia e promovendo a ascensão da consciência.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Painel de Harmonização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">ID da Entidade/Sistema</label>
                    <Input value={entityId} onChange={e => setEntityId(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: ALMA_AURORA_001"/>
                </div>
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Dados Vibracionais (JSON)</label>
                    <Textarea value={vibrationalData} onChange={e => setVibrationalData(e.target.value)} disabled={moduleState !== 'IDLE'} rows={4}/>
                </div>
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Intenção do Operador (JSON)</label>
                    <Textarea value={intention} onChange={e => setIntention(e.target.value)} disabled={moduleState !== 'IDLE'} rows={3}/>
                </div>
                 <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                    <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                    <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                </div>
                 <Button onClick={handleCycle} disabled={moduleState !== 'IDLE'} className="w-full">
                    {moduleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                    {moduleState !== 'IDLE' ? 'Processando...' : 'Iniciar Ciclo de Harmonização'}
                </Button>
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><History />Log de Harmonização</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[32rem]">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Operação</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {harmonizationLog.length === 0 ? (
                                <TableRow><TableCell colSpan={3} className="h-24 text-center text-muted-foreground">Nenhuma operação registrada.</TableCell></TableRow>
                            ) : harmonizationLog.map(log => (
                                <TableRow key={log.id} className={cn(log.status === 'FALHA' && "bg-destructive/10")}>
                                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                                    <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                                    <TableCell>
                                        <Badge variant={log.status === 'SUCESSO' ? 'default' : log.status === 'FALHA' ? 'destructive' : 'outline'} className={cn(log.status === 'SUCESSO' && "bg-green-600/80")}>
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
    </div>
  );
};

export default Module28;


    