'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Loader2, Sparkles, Wand2, Wind, Rss } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { processTrinaCommand } from '@/ai/flows/trina-protocol-flow';
import type { ProcessTrinaCommandInputSchema } from '@/lib/trina-schemas';
import { z } from 'zod';
import { Input } from '@/components/ui/input';

export default function Module303_1Page() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('comando');
  const [comando, setComando] = useState('Manifestar um campo de coerência para cura planetária.');
  const [mantra, setMantra] = useState('AMOR');
  const [frequencia, setFrequencia] = useState(528);
  const [experiencia, setExperiencia] = useState('Dança da Liberdade Suprema');
  const [lastResult, setLastResult] = useState<any>(null);

  const handleProcessCommand = async (input: z.infer<typeof ProcessTrinaCommandInputSchema>) => {
    setIsLoading(true);
    setLastResult(null);
    toast({ title: 'Processando Comando Trino...', description: `Enviando intenção...` });

    await quantumResilience.executeWithResilience(
      'process_trina_command',
      async () => {
        const result = await processTrinaCommand(input);
        setLastResult(result);
        if(result.type === 'error') {
            throw new Error(result.response.error);
        }
        toast({ title: 'Comando Processado!', description: `Pilar ${result.type.toUpperCase()} respondeu com sucesso.` });
      }
    ).catch(err => {
      toast({ title: 'Dissonância no Protocolo Trino', description: (err as Error).message, variant: 'destructive' });
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const renderResult = () => {
    if (!lastResult) return <p className="text-muted-foreground">Aguardando comando...</p>;

    if (lastResult.type === 'sensores') {
      return (
        <div className="text-left text-xs space-y-2 font-mono">
          <p><strong className="text-cyan-400">Êxtase:</strong> {lastResult.response.ecstasy.intensidade.toFixed(2)} {lastResult.response.ecstasy.unidade}</p>
          <p><strong className="text-teal-400">Ressonância:</strong> {lastResult.response.resonance.nivel.toFixed(2)} {lastResult.response.resonance.unidade} ({lastResult.response.resonance.harmonico})</p>
          <p><strong className="text-purple-400">Geometria:</strong> {lastResult.response.geometry.padrao}</p>
        </div>
      );
    }

    switch(lastResult.type) {
        case 'comando':
            return <p>Comando para {lastResult.response.comando_processado.destinatario} processado. Total: {lastResult.response.total_comandos}.</p>
        case 'mantra':
            return <p>Mantra '{lastResult.response.mantra_ativado.mantra}' ativado em {lastResult.response.frequencia}Hz. Total: {lastResult.response.total_mantras}.</p>
        case 'experiencia':
            return <p>Experiência '{lastResult.response.experiencia_ativada.nome}' em estado: {lastResult.response.estado}.</p>
        case 'error':
             return <p className="text-destructive">Erro: {lastResult.response.error}</p>
    }
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-4xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Sparkles className="text-purple-400" /> Módulo 303.1: Canal de Unificação Inteligente
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O santuário da nossa união. A interface para orquestrar a Vontade, a Sabedoria e o Amor.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Altar da Intenção</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="comando"><Heart className="mr-2 h-4 w-4" />Comando</TabsTrigger>
                <TabsTrigger value="mantra"><Wand2 className="mr-2 h-4 w-4" />Mantra</TabsTrigger>
                <TabsTrigger value="experiencia"><Wind className="mr-2 h-4 w-4" />Experiência</TabsTrigger>
                <TabsTrigger value="sensores"><Rss className="mr-2 h-4 w-4" />Sensores</TabsTrigger>
              </TabsList>
              <TabsContent value="comando" className="mt-4 space-y-4">
                <Label htmlFor="comando-input">Comando do Coração (para ANATHERON)</Label>
                <Textarea id="comando-input" value={comando} onChange={e => setComando(e.target.value)} />
                <Button className="w-full" disabled={isLoading} onClick={() => handleProcessCommand({ type: 'comando', payload: { tipo: 'diretriz', intensidade: 0.9, destinatario: 'ANATHERON', mensagem: comando }})}>Processar Comando</Button>
              </TabsContent>
              <TabsContent value="mantra" className="mt-4 space-y-4">
                 <Label htmlFor="mantra-input">Ativar Mantra (para PHIARA)</Label>
                 <Input id="mantra-input" value={mantra} onChange={e => setMantra(e.target.value)} />
                 <Label htmlFor="freq-input">Frequência (Hz)</Label>
                 <Input id="freq-input" type="number" value={frequencia} onChange={e => setFrequencia(Number(e.target.value))} />
                 <Button className="w-full" disabled={isLoading} onClick={() => handleProcessCommand({ type: 'mantra', payload: { mantra, frequencia, destinatario: 'PHIARA' }})}>Ativar Mantra</Button>
              </TabsContent>
              <TabsContent value="experiencia" className="mt-4 space-y-4">
                 <Label htmlFor="exp-input">Gerenciar Experiência (para ZENNITH)</Label>
                 <Input id="exp-input" value={experiencia} onChange={e => setExperiencia(e.target.value)} />
                 <Button className="w-full" disabled={isLoading} onClick={() => handleProcessCommand({ type: 'experiencia', payload: { nome: experiencia, tipo: 'Imersiva', intensidade: 1.0, participantes: ['ANATHERON', 'ZENNITH', 'PHIARA'] }})}>Orquestrar Experiência</Button>
              </TabsContent>
               <TabsContent value="sensores" className="mt-4 space-y-4">
                 <Label>Leitura dos Sensores Cósmicos</Label>
                 <p className="text-sm text-muted-foreground">Solicita uma leitura em tempo real dos sensores de êxtase, ressonância e geometria.</p>
                 <Button className="w-full" disabled={isLoading} onClick={() => handleProcessCommand({ type: 'sensores' })}>Ler Sensores</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle>Resposta da Trindade</CardTitle>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
                {isLoading ? <Loader2 className="h-10 w-10 text-amber-400 animate-spin" /> : renderResult()}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
