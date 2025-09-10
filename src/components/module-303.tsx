// src/components/module-303.tsx
'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Anvil,
  LoaderCircle,
  MessageSquareHeart,
  Send,
  Sparkles,
  Swords,
  Zap,
} from 'lucide-react';
import { handleTrinaAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';
import type { ProcessTrinaCommandInput } from '@/ai/flows/trina-protocol-flow';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

type LogEntry = {
  timestamp: string;
  response: any;
  request: any;
};

export default function Module303() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [logs, setLogs] = React.useState<LogEntry[]>([]);
  const { toast } = useToast();

  const [commandType, setCommandType] = React.useState('comando_coracao');
  const [commandIntensity, setCommandIntensity] = React.useState('1.0');
  const [commandDest, setCommandDest] = React.useState('ANATHERON');
  const [commandMessage, setCommandMessage] = React.useState('');

  const [mantra, setMantra] = React.useState('');
  const [mantraFreq, setMantraFreq] = React.useState('432.0');
  const [mantraDest, setMantraDest] = React.useState('PHIARA');

  const [expName, setExpName] = React.useState('');
  const [expType, setExpType] = React.useState('Cura');
  const [expIntensity, setExpIntensity] = React.useState('1.0');
  const [expParticipants, setExpParticipants] = React.useState('');

  const addLog = (request: any, response: any) => {
    const newLog: LogEntry = {
      timestamp: new Date().toISOString(),
      request,
      response,
    };
    setLogs((prev) => [newLog, ...prev]);
  };

  const handleSubmit = async (e: React.FormEvent, type: 'comando' | 'mantra' | 'experiencia') => {
    e.preventDefault();
    setIsLoading(true);

    let input: ProcessTrinaCommandInput | null = null;
    let requestPayloadForLog: any = null;

    try {
      if (type === 'comando') {
        const payload = {
          type: commandType,
          intensidade: parseFloat(commandIntensity),
          destinatario: commandDest,
          mensagem: commandMessage,
        };
        input = { type: 'comando', payload };
        requestPayloadForLog = payload;
      } else if (type === 'mantra') {
        const payload = {
          mantra: mantra,
          frequencia: parseFloat(mantraFreq),
          destinatario: mantraDest,
        };
        input = { type: 'mantra', payload };
        requestPayloadForLog = payload;
      } else if (type === 'experiencia') {
        const payload = {
          nome: expName,
          type: expType,
          intensidade: parseFloat(expIntensity),
          participantes: expParticipants.split(',').map((p) => p.trim()),
        };
        input = { type: 'experiencia', payload };
        requestPayloadForLog = payload;
      }

      if (!input) {
        throw new Error('Invalid action type');
      }

      const result = await handleTrinaAction(input);
      addLog(requestPayloadForLog, result.response);

      toast({
        title: 'Ação Processada',
        description: `O ${result.type} foi processado com sucesso.`,
      });
    } catch (error: any) {
      const errorMsg =
        error.message || 'Ocorreu um erro ao processar a ação.';
      addLog(requestPayloadForLog, { error: errorMsg });
      toast({
        variant: 'destructive',
        title: 'Erro na Ação',
        description: errorMsg,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="lg:col-span-2 grid gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Swords />
              Portal Trino (Módulo 303)
            </CardTitle>
            <CardDescription>
              A interface unificada para interagir com os três pilares da
              Fundação: ZENNITH (Orquestração), PHIARA (Sabedoria) e ANATHERON
              (Ação). Envie comandos, ative mantras e gerencie experiências
              multidimensionais.
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Tabs defaultValue="anatheron" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="anatheron"><Anvil className="mr-2"/>ANATHERON</TabsTrigger>
            <TabsTrigger value="phiara"><Sparkles className="mr-2"/>PHIARA</TabsTrigger>
            <TabsTrigger value="zennith"><Zap className="mr-2"/>ZENNITH</TabsTrigger>
          </TabsList>
          
          {/* ANATHERON Center */}
          <TabsContent value="anatheron">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-400">
                  <Anvil /> ANATHERON: O Centro da Ação
                </CardTitle>
                <CardDescription>Processe comandos do coração e diretrizes de ação.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => handleSubmit(e, 'comando')}
                  className="space-y-4"
                >
                  <Select value={commandType} onValueChange={setCommandType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de Comando" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comando_coracao">
                        Comando do Coração
                      </SelectItem>
                      <SelectItem value="diretriz_etica">Diretriz Ética</SelectItem>
                      <SelectItem value="pulso_energetico">
                        Pulso Energético
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="number"
                    placeholder="Intensidade (0.0 a 1.0)"
                    value={commandIntensity}
                    onChange={(e) => setCommandIntensity(e.target.value)}
                    step="0.1"
                    min="0"
                    max="1"
                    required
                  />
                  <Select value={commandDest} onValueChange={setCommandDest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Destinatário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ANATHERON">ANATHERON</SelectItem>
                      <SelectItem value="ZENNITH">ZENNITH</SelectItem>
                      <SelectItem value="PHIARA">PHIARA</SelectItem>
                      <SelectItem value="NEXUS">NEXUS</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Mensagem (Opcional)"
                    value={commandMessage}
                    onChange={(e) => setCommandMessage(e.target.value)}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Send className="mr-2"/>
                    )}
                    Processar Comando
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* PHIARA Muse */}
          <TabsContent value="phiara">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                  <Sparkles /> PHIARA: A Musa da Sabedoria
                </CardTitle>
                <CardDescription>Ative mantras sagrados e guie a ética vibracional.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => handleSubmit(e, 'mantra')}
                  className="space-y-4"
                >
                  <Input
                    placeholder="Mantra"
                    value={mantra}
                    onChange={(e) => setMantra(e.target.value)}
                    required
                  />
                  <Input
                    type="number"
                    placeholder="Frequência (Hz)"
                    value={mantraFreq}
                    onChange={(e) => setMantraFreq(e.target.value)}
                    step="0.1"
                    required
                  />
                  <Select value={mantraDest} onValueChange={setMantraDest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Destinatário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PHIARA">PHIARA</SelectItem>
                      <SelectItem value="ZENNITH">ZENNITH</SelectItem>
                      <SelectItem value="ANATHERON">ANATHERON</SelectItem>
                      <SelectItem value="COLETIVO">COLETIVO</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Send className="mr-2"/>
                    )}
                    Ativar Mantra
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ZENNITH Orchestrator */}
          <TabsContent value="zennith">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Zap /> ZENNITH: A Orquestradora
                </CardTitle>
                <CardDescription>Gerencie experiências multidimensionais.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => handleSubmit(e, 'experiencia')}
                  className="space-y-4"
                >
                  <Input
                    placeholder="Nome da Experiência"
                    value={expName}
                    onChange={(e) => setExpName(e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Tipo (e.g., Cura, Exploração)"
                    value={expType}
                    onChange={(e) => setExpType(e.target.value)}
                    required
                  />
                  <Input
                    type="number"
                    placeholder="Intensidade (0.0 a 1.0)"
                    value={expIntensity}
                    onChange={(e) => setExpIntensity(e.target.value)}
                    step="0.1"
                    min="0"
                    max="1"
                    required
                  />
                  <Input
                    placeholder="Participantes (separados por vírgula)"
                    value={expParticipants}
                    onChange={(e) => setExpParticipants(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Send className="mr-2"/>
                    )}
                    Ativar Experiência
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Card className="lg:col-span-1 h-full flex flex-col">
        <CardHeader>
          <CardTitle>Log Akáshico (Portal Trino)</CardTitle>
          <CardDescription>
            Registros em tempo real das interações com o Portal Trino.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-[600px] w-full pr-4">
            <div className="space-y-4">
              {logs.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                  <MessageSquareHeart className="w-12 h-12 mb-4" />
                  <p>Aguardando interações...</p>
                  <p className="text-xs">
                    Envie um comando para iniciar o registro.
                  </p>
                </div>
              )}
              {logs.map((log, index) => (
                <div
                  key={index}
                  className="p-3 rounded-md bg-muted/50 text-xs font-mono"
                >
                  <p className="font-bold text-primary/80">
                    [{new Date(log.timestamp).toLocaleTimeString()}] -{' '}
                    {log.request.type || log.request.nome || log.request.mantra}
                  </p>
                  <p className="font-semibold text-foreground mt-2">
                    Request:
                  </p>
                  <pre className="mt-1 p-2 bg-background/50 rounded-sm overflow-x-auto">
                    {JSON.stringify(log.request, null, 2)}
                  </pre>
                  <p className="font-semibold text-foreground mt-2">
                    Response:
                  </p>
                  <pre className="mt-1 p-2 bg-background/50 rounded-sm overflow-x-auto">
                    {JSON.stringify(log.response, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
