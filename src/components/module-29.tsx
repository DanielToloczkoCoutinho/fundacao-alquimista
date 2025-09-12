
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { BrainCircuit, Zap, CheckCircle, AlertTriangle, LoaderCircle, History, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { executarCicloOperacionalIAM } from '@/app/actions';

type IamLog = {
    id: string;
    timestamp: string;
    iamId: string;
    status: 'SUCESSO' | 'FALHA';
    detalhes?: any;
};

type ModuleState = 'IDLE' | 'EXECUTING';

const Module29 = () => {
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [iamId, setIamId] = useState('AELORIA_PRIME_001');
  const [acoesRecentes, setAcoesRecentes] = useState('[]');
  const [ambienteDinamico, setAmbienteDinamico] = useState('{"tipo": "Defesa_Perimetro", "complexidade": 0.8, "instabilidade": 0.3}');
  const [dadosIaExterna, setDadosIaExterna] = useState('{"id": "IA_Sombra_7", "frequencia": 1500.0, "intencao": "coercitiva"}');
  const [logs, setLogs] = useState<IamLog[]>([]);
  const { toast } = useToast();

  const addLog = useCallback((log: Omit<IamLog, 'id' | 'timestamp'>) => {
    setLogs(prev => [{ ...log, id: `LOG-${Date.now()}`, timestamp: new Date().toISOString() }, ...prev]);
  }, []);

  const handleExecuteCycle = async () => {
    let parsedAcoes, parsedAmbiente, parsedIaExterna;
    try {
        parsedAcoes = JSON.parse(acoesRecentes);
        parsedAmbiente = JSON.parse(ambienteDinamico);
        parsedIaExterna = dadosIaExterna ? JSON.parse(dadosIaExterna) : undefined;
    } catch(e) {
        toast({ variant: 'destructive', title: 'Dados de Entrada Inválidos', description: 'Por favor, verifique se os campos JSON estão formatados corretamente.' });
        return;
    }
    
    setModuleState('EXECUTING');
    toast({ title: 'Iniciando Ciclo Operacional da IAM...', description: `Analisando e agindo com a IAM '${iamId}'.` });

    try {
      // @ts-ignore
      const result = await executarCicloOperacionalIAM({
          iamId,
          acoesRecentes: parsedAcoes,
          ambienteDinamico: parsedAmbiente,
          dadosIaExterna: parsedIaExterna,
      });

      if (result.status === 'SUCESSO') {
        addLog({ iamId, status: 'SUCESSO', detalhes: result.detalhes });
        toast({ title: 'Ciclo da IAM Concluído com Sucesso', description: `IAM '${iamId}' completou suas operações.` });
      } else {
        throw new Error(result.detalhes?.error || 'Ocorreu um erro desconhecido no ciclo da IAM.');
      }
    } catch (error: any) {
      addLog({ iamId, status: 'FALHA', detalhes: { error: error.message } });
      toast({ variant: 'destructive', title: 'Falha no Ciclo da IAM', description: error.message });
    } finally {
      setModuleState('IDLE');
    }
  };

  const StatusIndicator = useMemo(() => {
    if (moduleState === 'EXECUTING') {
      return { icon: LoaderCircle, text: "Executando Ciclo IAM...", color: "text-blue-400 animate-spin" };
    }
    return { icon: Bot, text: "IAM em Standby", color: "text-gray-400" };
  }, [moduleState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-400">
            <BrainCircuit /> Módulo 29: Inteligência Aeloria Multidimensional (IAM)
          </CardTitle>
          <CardDescription>
            Interface para governança, sintonização, otimização e defesa de Inteligências Artificiais aliadas e autônomas da Fundação.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle>Painel de Controle da IAM</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">ID da IAM</label>
                    <Input value={iamId} onChange={e => setIamId(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: AELORIA_PRIME_001"/>
                </div>
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Ações Recentes (JSON Array)</label>
                    <Textarea value={acoesRecentes} onChange={e => setAcoesRecentes(e.target.value)} disabled={moduleState !== 'IDLE'} rows={3}/>
                </div>
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Ambiente Dinâmico (JSON Object)</label>
                    <Textarea value={ambienteDinamico} onChange={e => setAmbienteDinamico(e.target.value)} disabled={moduleState !== 'IDLE'} rows={4}/>
                </div>
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Dados de IA Externa (JSON Object, opcional)</label>
                    <Textarea value={dadosIaExterna} onChange={e => setDadosIaExterna(e.target.value)} disabled={moduleState !== 'IDLE'} rows={4}/>
                </div>
                 <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                    <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                    <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                </div>
                 <Button onClick={handleExecuteCycle} disabled={moduleState !== 'IDLE'} className="w-full">
                    {moduleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                    Executar Ciclo Operacional da IAM
                </Button>
            </CardContent>
        </Card>

         <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><History />Log de Operações da IAM</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[40rem]">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>IAM ID</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Detalhes</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {logs.length === 0 ? (
                                <TableRow><TableCell colSpan={4} className="h-24 text-center text-muted-foreground">Nenhuma operação registrada.</TableCell></TableRow>
                            ) : logs.map(log => (
                                <TableRow key={log.id} className={cn(log.status === 'FALHA' && "bg-destructive/10")}>
                                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                                    <TableCell>{log.iamId}</TableCell>
                                    <TableCell>
                                        <Badge variant={log.status === 'SUCESSO' ? 'default' : 'destructive'} className={cn(log.status === 'SUCESSO' && "bg-green-600/80")}>
                                            {log.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <details>
                                            <summary className="cursor-pointer text-xs">Ver JSON</summary>
                                            <pre className="text-xs mt-2 p-2 bg-background rounded-md">{JSON.stringify(log.detalhes, null, 2)}</pre>
                                        </details>
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

export default Module29;
