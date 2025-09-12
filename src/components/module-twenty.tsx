'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Atom, Zap, Rocket, Beaker, AlertTriangle, CheckCircle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type TransmutationType = "GERACAO_ENERGIA" | "SINTESE_ELEMENTAL" | "PROPULSAO_ESPACIAL";
type TransmutationStatus = "IDLE" | "TRANSMUTING" | "SUCCESS" | "FAILED";

type TransmutationLog = {
  id: string;
  timestamp: string;
  type: TransmutationType;
  details: string;
  status: 'SUCCESS' | 'FAILED' | 'INFO';
  output?: any;
};

const ModuleTwenty = () => {
  const [transmutationType, setTransmutationType] = useState<TransmutationType>('GERACAO_ENERGIA');
  const [massInput, setMassInput] = useState('1.0');
  const [energyInput, setEnergyInput] = useState('1.0e9');
  const [isPureIntention, setIsPureIntention] = useState(true);
  
  const [status, setStatus] = useState<TransmutationStatus>('IDLE');
  const [logs, setLogs] = useState<TransmutationLog[]>([]);
  const { toast } = useToast();

  const addLog = useCallback((type: TransmutationType, details: string, status: TransmutationLog['status'], output?: any) => {
    setLogs(prev => [{ id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), type, details, status, output }, ...prev].slice(0, 100));
  }, []);

  const handleTransmutation = async () => {
    setStatus('TRANSMUTING');
    toast({ title: `Iniciando Transmutação: ${transmutationType}` });
    addLog(transmutationType, 'Consulta ao Conselho e Validação Ética...', 'INFO');

    await new Promise(resolve => setTimeout(resolve, 1500));

    const success = Math.random() > 0.1; // 90% de chance de sucesso

    if (success) {
      let output: any = {};
      let details = "";
      if (transmutationType === 'GERACAO_ENERGIA') {
        const energiaGerada = parseFloat(massInput) * Math.pow(299792458, 2) * 1.618;
        output = { energiaGerada: `${energiaGerada.toExponential(4)} Joules` };
        details = `Geração de energia concluída. ${output.energiaGerada} liberados.`;
      } else if (transmutationType === 'SINTESE_ELEMENTAL') {
        const elemento = `Alquimico-${Math.floor(Math.random() * 900) + 100}`;
        output = { elementoSintetizado: elemento };
        details = `Síntese elemental bem-sucedida. Criado: ${elemento}.`;
      } else { // PROPULSAO_ESPACIAL
        const propulsao = parseFloat(energyInput) * 1.618 / 1e6;
        output = { propulsaoGerada: `${propulsao.toExponential(4)} Newtons` };
        details = `Propulsão espacial gerada: ${output.propulsaoGerada}.`;
      }
      addLog(transmutationType, details, 'SUCCESS', output);
      toast({ title: 'Transmutação Bem-Sucedida', description: details });
      setStatus('SUCCESS');
    } else {
      const errorDetails = "Falha na coerência do campo ou na validação ética.";
      addLog(transmutationType, errorDetails, 'FAILED');
      toast({ variant: 'destructive', title: 'Falha na Transmutação', description: errorDetails });
      setStatus('FAILED');
    }
    setTimeout(() => setStatus('IDLE'), 4000);
  };
  
  const StatusIndicator = useMemo(() => {
    switch(status) {
        case 'TRANSMUTING':
            return { icon: LoaderCircle, text: "Transmutando...", color: "text-blue-400 animate-spin" };
        case 'SUCCESS':
            return { icon: CheckCircle, text: "Transmutação Concluída", color: "text-green-400" };
        case 'FAILED':
             return { icon: AlertTriangle, text: "Falha na Transmutação", color: "text-red-400" };
        case 'IDLE':
        default:
             return { icon: Atom, text: "Aguardando Comando", color: "text-gray-400" };
    }
  }, [status]);


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400">
            <Atom /> Módulo 20: Transmutador Quântico
          </CardTitle>
          <CardDescription>
            Interface para transmutação de matéria em energia, síntese elemental e geração de propulsão, sob rigorosa governança ética.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Painel de Transmutação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Tipo de Transmutação</label>
                    <Select value={transmutationType} onValueChange={(v) => setTransmutationType(v as TransmutationType)} disabled={status === 'TRANSMUTING'}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="GERACAO_ENERGIA"><Zap className="mr-2 h-4 w-4"/>Geração de Energia</SelectItem>
                            <SelectItem value="SINTESE_ELEMENTAL"><Beaker className="mr-2 h-4 w-4"/>Síntese Elemental</SelectItem>
                            <SelectItem value="PROPULSAO_ESPACIAL"><Rocket className="mr-2 h-4 w-4"/>Propulsão Espacial</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Massa de Entrada (kg)</label>
                    <Input type="number" value={massInput} onChange={e => setMassInput(e.target.value)} disabled={status === 'TRANSMUTING'} placeholder="Ex: 1.0"/>
                 </div>
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Energia Aplicada (Joules)</label>
                    <Input value={energyInput} onChange={e => setEnergyInput(e.target.value)} disabled={status === 'TRANSMUTING'} placeholder="Ex: 1.0e9"/>
                 </div>
                 <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                    <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                    <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                </div>
                 <Button onClick={handleTransmutation} disabled={status === 'TRANSMUTING'} className="w-full">
                    {status === 'TRANSMUTING' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                    {status === 'TRANSMUTING' ? 'Processando...' : 'Iniciar Transmutação'}
                </Button>
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><History />Log de Transmutação</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-96">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Resultado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {logs.length === 0 ? (
                                <TableRow><TableCell colSpan={4} className="h-24 text-center text-muted-foreground">Nenhuma transmutação registrada.</TableCell></TableRow>
                            ) : logs.map(log => (
                                <TableRow key={log.id} className={cn(log.status === 'FAILED' && "bg-destructive/10")}>
                                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                                    <TableCell><Badge variant="outline">{log.type}</Badge></TableCell>
                                    <TableCell>
                                        <Badge variant={log.status === 'SUCCESS' ? 'default' : 'destructive'} className={cn(log.status === 'SUCCESS' && "bg-green-600/80")}>
                                            {log.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-xs font-mono">{log.output ? JSON.stringify(log.output) : log.details}</TableCell>
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

export default ModuleTwenty;
