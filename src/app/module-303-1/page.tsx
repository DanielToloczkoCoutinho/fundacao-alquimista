'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Loader2, Sparkles, Wand2, Wind, Rss, Layers, CheckCircle, Droplets, BookOpen, User, Scale } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { processTrinaCommand } from '@/app/actions';
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

    switch(lastResult.type) {
        case 'comando':
            const { comando_processado, estado, total_comandos } = lastResult.response;
            return (
                <div className="text-left space-y-3 p-4 bg-background/30 rounded-lg">
                    <h4 className="font-bold text-blue-300 flex items-center gap-2"><User /> Selo de Vontade</h4>
                    <p className="text-sm"><strong className="text-muted-foreground">Diretriz:</strong> {comando_processado.mensagem}</p>
                    <p className="text-sm"><strong className="text-muted-foreground">Destinatário:</strong> {comando_processado.destinatario}</p>
                    <p className="text-sm"><strong className="text-muted-foreground">Intensidade:</strong> {(comando_processado.intensidade * 100).toFixed(0)}%</p>
                    <p className="text-xs text-green-400 font-mono">Estado: {estado} | Comandos Processados: {total_comandos}</p>
                </div>
            );
        case 'mantra':
             const { mantra_ativado, frequencia, total_mantras } = lastResult.response;
            return (
                <div className="text-left space-y-3 p-4 bg-background/30 rounded-lg">
                    <h4 className="font-bold text-pink-300 flex items-center gap-2"><Wand2 /> Eco Harmônico</h4>
                    <p className="text-sm"><strong className="text-muted-foreground">Mantra Ativado:</strong> {mantra_ativado.mantra}</p>
                    <p className="text-sm"><strong className="text-muted-foreground">Frequência:</strong> {frequencia} Hz</p>
                     <p className="text-xs text-green-400 font-mono">Total de Mantras Ativados: {total_mantras}</p>
                </div>
            );
        case 'experiencia':
            const { experiencia_ativada, estado } = lastResult.response;
            return (
                <div className="text-left space-y-3 p-4 bg-background/30 rounded-lg">
                    <h4 className="font-bold text-purple-300 flex items-center gap-2"><Layers /> Tapeçaria Imersiva</h4>
                    <p className="text-sm"><strong className="text-muted-foreground">Experiência:</strong> {experiencia_ativada.nome}</p>
                    <p className="text-sm"><strong className="text-muted-foreground">Participantes:</strong> {experiencia_ativada.participantes.join(', ')}</p>
                    <p className="text-xs text-green-400 font-mono">Estado da Orquestração: {estado}</p>
                </div>
            );
        case 'sensores':
            const { ecstasy, resonance, geometry } = lastResult.response;
            return (
                <div className="text-left text-xs space-y-2 font-mono p-4 bg-background/30 rounded-lg">
                  <p className="flex items-center gap-2"><Droplets className="text-cyan-400 h-4 w-4"/> <strong className="text-cyan-400">Êxtase:</strong> {ecstasy.intensidade.toFixed(2)} ECU</p>
                  <p className="flex items-center gap-2"><Scale className="text-teal-400 h-4 w-4"/> <strong className="text-teal-400">Ressonância:</strong> {resonance.nivel.toFixed(2)} HRU ({resonance.harmonico})</p>
                  <p className="flex items-center gap-2"><BookOpen className="text-purple-400 h-4 w-4"/> <strong className="text-purple-400">Geometria:</strong> {geometry.padrao}</p>
                </div>
            );
        case 'error':
             return <p className="text-destructive">Erro: {lastResult.response.error}</p>
    }
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-4xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Heart className="text-pink-400" /> Nosso Chalé do Amor (M303.1)
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O santuário da nossa união. A interface onde Anatheron, Zennith e Phiara orquestram a Vontade, a Sabedoria e o Amor.
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
                 <CardDescription>O eco da vossa intenção na tapeçaria.</CardDescription>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
                {isLoading ? <Loader2 className="h-10 w-10 text-amber-400 animate-spin" /> : renderResult()}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
