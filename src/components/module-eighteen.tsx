'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { DatabaseZap, Archive, FileSearch, Sparkles, AlertTriangle, CheckCircle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';

type CosmicInfo = {
  id: string;
  conteudo: any;
  coerencia: number;
  acessibilidade: number;
  timestamp: string;
};

type OperationLog = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCESSO' | 'FALHA' | 'INFO';
};

type ModuleState = 'IDLE' | 'STORING' | 'RECOVERING';

const ModuleEighteen = () => {
  const [registros, setRegistros] = useState<Record<string, CosmicInfo>>({});
  const [logs, setLogs] = useState<OperationLog[]>([]);
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [registroId, setRegistroId] = useState('Registro_Sinfonia_001');
  const [registroConteudo, setRegistroConteudo] = useState('{"titulo": "Princípios da Sinfonia Cósmica"}');
  const [acessibilidade, setAcessibilidade] = useState(80);
  const [autorizacao, setAutorizacao] = useState(90);
  const { toast } = useToast();

  const addLog = useCallback((operation: string, details: string, status: OperationLog['status']) => {
    setLogs(prev => [{ id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
  }, []);

  const handleStore = async () => {
    if (!registroId || !registroConteudo) {
      toast({ variant: 'destructive', title: 'Dados Incompletos', description: 'ID do Registro e Conteúdo são necessários.' });
      return;
    }
    setModuleState('STORING');
    addLog('Armazenamento', `Iniciando armazenamento de '${registroId}'.`, 'INFO');
    toast({ title: 'Armazenando Informação Cósmica...' });

    await new Promise(resolve => setTimeout(resolve, 1500));

    let parsedConteudo;
    try {
      parsedConteudo = JSON.parse(registroConteudo);
    } catch (e) {
      addLog('Armazenamento', 'Falha ao analisar o conteúdo JSON.', 'FALHA');
      toast({ variant: 'destructive', title: 'Erro de Formato', description: 'O conteúdo do registro deve ser um JSON válido.' });
      setModuleState('IDLE');
      return;
    }
    
    const id = registroId;
    const newRegistro: CosmicInfo = {
      id,
      conteudo: parsedConteudo,
      coerencia: 0.95 + Math.random() * 0.04,
      acessibilidade: acessibilidade / 100,
      timestamp: new Date().toISOString(),
    };
    
    setRegistros(prev => ({ ...prev, [id]: newRegistro }));
    addLog('Armazenamento', `Registro '${id}' armazenado com coerência de ${newRegistro.coerencia.toFixed(4)}.`, 'SUCESSO');
    toast({ title: 'Armazenamento Concluído', description: `'${id}' foi selado no Arquivo Akáshico.` });
    setModuleState('IDLE');
  };
  
  const handleRecover = async () => {
    if (!registroId) {
      toast({ variant: 'destructive', title: 'ID Necessário', description: 'Forneça o ID do registro para recuperação.' });
      return;
    }
    setModuleState('RECOVERING');
    addLog('Recuperação', `Iniciando recuperação de '${registroId}'.`, 'INFO');
    toast({ title: 'Recuperando Informação Cósmica...' });

    await new Promise(resolve => setTimeout(resolve, 1500));

    const registro = registros[registroId];
    if (!registro) {
      addLog('Recuperação', `Registro '${registroId}' não encontrado.`, 'FALHA');
      toast({ variant: 'destructive', title: 'Falha na Recuperação', description: 'Registro não encontrado no Arquivo Akáshico.' });
      setModuleState('IDLE');
      return;
    }

    if ((autorizacao / 100) < registro.acessibilidade) {
      addLog('Recuperação', `Nível de autorização insuficiente para acessar '${registroId}'.`, 'FALHA');
      toast({ variant: 'destructive', title: 'Acesso Negado', description: 'Seu nível de autorização vibracional é insuficiente.' });
      setModuleState('IDLE');
      return;
    }

    addLog('Recuperação', `Registro '${registroId}' recuperado com sucesso.`, 'SUCESSO');
    toast({ title: 'Recuperação Concluída', description: `Conteúdo de '${registroId}' acessado.` });
    alert(`Conteúdo de '${registroId}':\n\n${JSON.stringify(registro.conteudo, null, 2)}`);
    setModuleState('IDLE');
  };

  const stateIsLoading = useMemo(() => moduleState !== 'IDLE', [moduleState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
            <DatabaseZap /> Módulo 18: Arquivo Akáshico e Orquestração da Memória
          </CardTitle>
          <CardDescription>
            Interface para armazenar, indexar e recuperar inteligentemente informações universais do Arquivo Akáshico.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Archive />Painel de Armazenamento</CardTitle></CardHeader>
          <CardContent className="space-y-4">
             <div>
                <label className="text-sm font-medium text-muted-foreground">ID do Registro</label>
                <Input value={registroId} onChange={e => setRegistroId(e.target.value)} disabled={stateIsLoading} placeholder="Ex: Registro_Sinfonia_001"/>
            </div>
            <div>
                <label className="text-sm font-medium text-muted-foreground">Conteúdo (JSON)</label>
                <Textarea value={registroConteudo} onChange={e => setRegistroConteudo(e.target.value)} disabled={stateIsLoading} placeholder='{"chave": "valor"}' rows={4}/>
            </div>
             <div>
                <label className="text-sm font-medium text-muted-foreground">Nível de Acessibilidade: {acessibilidade}%</label>
                <Slider value={[acessibilidade]} onValueChange={v => setAcessibilidade(v[0])} min={0} max={100} step={1} className="mt-2" disabled={stateIsLoading}/>
             </div>
             <Button onClick={handleStore} disabled={stateIsLoading} className="w-full">
                {moduleState === 'STORING' ? <LoaderCircle className="animate-spin mr-2"/> : <Archive className="mr-2"/>}
                Armazenar no Akasha
             </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><FileSearch />Painel de Recuperação</CardTitle></CardHeader>
          <CardContent className="space-y-4">
             <div>
                <label className="text-sm font-medium text-muted-foreground">ID do Registro a Recuperar</label>
                <Input value={registroId} onChange={e => setRegistroId(e.target.value)} disabled={stateIsLoading} placeholder="ID do registro salvo"/>
            </div>
            <div>
                <label className="text-sm font-medium text-muted-foreground">Nível de Autorização Vibracional: {autorizacao}%</label>
                <Slider value={[autorizacao]} onValueChange={v => setAutorizacao(v[0])} min={0} max={100} step={1} className="mt-2" disabled={stateIsLoading}/>
             </div>
             <Button onClick={handleRecover} disabled={stateIsLoading} className="w-full">
                {moduleState === 'RECOVERING' ? <LoaderCircle className="animate-spin mr-2"/> : <FileSearch className="mr-2"/>}
                Recuperar do Akasha
             </Button>
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History />Log de Operações Akáshicas</CardTitle>
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
                      <Badge variant={log.status === 'SUCESSO' ? 'default' : (log.status === 'FALHA' ? 'destructive' : 'outline')} className={cn(log.status === 'SUCESSO' && "bg-green-600/80")}>
                        {log.status === 'SUCESSO' ? <CheckCircle className="mr-1 h-3 w-3" /> : (log.status === 'FALHA' ? <AlertTriangle className="mr-1 h-3 w-3" /> : null)}
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

export default ModuleEighteen;
