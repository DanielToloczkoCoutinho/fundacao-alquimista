'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { DatabaseZap, Archive, FileSearch, Sparkles, AlertTriangle, CheckCircle, LoaderCircle, History, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';

type Memory = {
  id: string;
  name: string;
  content: string;
  origin: string;
  coherence: number;
  timestamp: string;
};

type OperationLog = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILED' | 'INFO';
};

type ModuleState = 'IDLE' | 'STORING' | 'RECOVERING' | 'TRANSMUTING' | 'RESTORING';

const ModuleTwelve: React.FC = () => {
  const [memories, setMemories] = useState<Record<string, Memory>>({});
  const [logs, setLogs] = useState<OperationLog[]>([]);
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [memoryName, setMemoryName] = useState('');
  const [memoryContent, setMemoryContent] = useState('');
  const [memoryId, setMemoryId] = useState('');
  const { toast } = useToast();

  const addLog = useCallback((operation: string, details: string, status: 'SUCCESS' | 'FAILED' | 'INFO') => {
    setLogs(prev => [
      { id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status },
      ...prev
    ].slice(0, 100));
  }, []);

  const handleOperation = async (op: ModuleState) => {
    setModuleState(op);
    addLog(op, `Iniciando operação: ${op}...`, 'INFO');
    toast({ title: 'Operação Iniciada', description: `O Arquivo Akáshico está processando a sua requisição.` });

    // Simulação de tempo de processamento
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    try {
      let success = Math.random() > 0.1; // 90% chance de sucesso
      switch (op) {
        case 'STORING':
          if (!memoryName || !memoryContent) throw new Error("Nome e conteúdo da memória são obrigatórios.");
          const newId = `MEM-${Date.now()}`;
          const newMemory: Memory = {
            id: newId,
            name: memoryName,
            content: memoryContent,
            origin: 'Anatheron_Console',
            coherence: 0.95 + Math.random() * 0.04,
            timestamp: new Date().toISOString(),
          };
          setMemories(prev => ({ ...prev, [newId]: newMemory }));
          addLog(op, `Memória '${memoryName}' armazenada com sucesso. ID: ${newId.slice(0, 10)}...`, 'SUCCESS');
          setMemoryName('');
          setMemoryContent('');
          break;
        
        case 'RECOVERING':
          if (!memoryId || !memories[memoryId]) throw new Error("ID da memória inválido ou não encontrado.");
          const mem = memories[memoryId];
          addLog(op, `Memória '${mem.name}' recuperada: "${mem.content.substring(0, 30)}..."`, 'SUCCESS');
          toast({ title: 'Memória Recuperada', description: mem.content });
          break;
        
        case 'TRANSMUTING':
           if (!memoryId || !memories[memoryId]) throw new Error("ID da memória inválido ou não encontrado.");
           if (!memoryContent) throw new Error("Novo conteúdo (narrativa) é obrigatório para transmutação.");
           setMemories(prev => {
               const updatedMem = { ...prev[memoryId], content: memoryContent, coherence: Math.min(1.0, prev[memoryId].coherence + 0.02) };
               return { ...prev, [memoryId]: updatedMem };
           });
           addLog(op, `Memória '${memories[memoryId].name}' transmutada para nova narrativa.`, 'SUCCESS');
           setMemoryContent('');
           break;
        
        case 'RESTORING':
            if (!memoryId || !memories[memoryId]) throw new Error("ID da memória inválido ou não encontrado.");
            setMemories(prev => {
               const restoredMem = { ...prev[memoryId], coherence: 0.99 };
               return { ...prev, [memoryId]: restoredMem };
           });
           addLog(op, `Memória '${memories[memoryId].name}' restaurada. Coerência máxima atingida.`, 'SUCCESS');
           break;
      }
    } catch (e: any) {
        addLog(op, `Falha na operação: ${e.message}`, 'FAILED');
        toast({ variant: 'destructive', title: 'Falha na Operação Akáshica', description: e.message });
    } finally {
        setModuleState('IDLE');
    }
  };
  
  const stateIsLoading = useMemo(() => moduleState !== 'IDLE', [moduleState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            <DatabaseZap /> Módulo 12: Arquivo Akáshico e Transmutação
          </CardTitle>
          <CardDescription>
            Interface para armazenar, recuperar e transmutar eticamente memórias no registro quântico da Fundação.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
           <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Archive />Armazenar / Transmutar</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <Input placeholder="Nome da Memória (para armazenar)" value={memoryName} onChange={e => setMemoryName(e.target.value)} disabled={stateIsLoading}/>
                <Textarea placeholder="Conteúdo da Memória ou Nova Narrativa" value={memoryContent} onChange={e => setMemoryContent(e.target.value)} disabled={stateIsLoading}/>
                <Button onClick={() => handleOperation('STORING')} disabled={stateIsLoading || !memoryName || !memoryContent} className="w-full">
                    {moduleState === 'STORING' ? <LoaderCircle className="animate-spin mr-2"/> : <Archive className="mr-2"/>} Armazenar
                </Button>
            </CardContent>
           </Card>
           <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><FileSearch />Recuperar / Restaurar</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <Input placeholder="ID da Memória" value={memoryId} onChange={e => setMemoryId(e.target.value)} disabled={stateIsLoading} />
                <Button onClick={() => handleOperation('RECOVERING')} disabled={stateIsLoading || !memoryId} className="w-full">
                    {moduleState === 'RECOVERING' ? <LoaderCircle className="animate-spin mr-2"/> : <FileSearch className="mr-2"/>} Recuperar
                </Button>
                 <Button onClick={() => handleOperation('TRANSMUTING')} disabled={stateIsLoading || !memoryId || !memoryContent} className="w-full" variant="outline">
                    {moduleState === 'TRANSMUTING' ? <LoaderCircle className="animate-spin mr-2"/> : <Sparkles className="mr-2"/>} Transmutar
                </Button>
                <Button onClick={() => handleOperation('RESTORING')} disabled={stateIsLoading || !memoryId} className="w-full" variant="secondary">
                     {moduleState === 'RESTORING' ? <LoaderCircle className="animate-spin mr-2"/> : <ShieldCheck className="mr-2"/>} Restaurar Coerência
                </Button>
            </CardContent>
           </Card>
        </div>
        
        <Card className="lg:col-span-2">
            <CardHeader><CardTitle className="flex items-center gap-2"><History />Log de Operações Akáshicas</CardTitle></CardHeader>
            <CardContent>
                 <ScrollArea className="h-[40rem]">
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
                                      <Badge variant={log.status === 'SUCCESS' ? 'default' : (log.status === 'FAILED' ? 'destructive' : 'outline')} className={cn(log.status === 'SUCCESS' && "bg-green-600/80")}>
                                         {log.status === 'SUCCESS' ? <CheckCircle className="mr-1 h-3 w-3" /> : (log.status === 'FAILED' ? <AlertTriangle className="mr-1 h-3 w-3" /> : null)}
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

export default ModuleTwelve;
