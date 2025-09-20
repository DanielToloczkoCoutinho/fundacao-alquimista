'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileClock, Rocket, Loader2 } from 'lucide-react';
import { triggerCeremony } from '@/lib/functionsClient';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { ritualLog } from '@/lib/ritual-log';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function DailyReportPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSealCycle = async () => {
    setIsLoading(true);
    toast({
      title: "Iniciando Rito de Selamento",
      description: "Consagrando as obras deste ciclo no Akasha...",
    });
    try {
      const moduleIds = ritualLog.flatMap(r => r.etapas.map(e => e.modulo));
      const response: any = await triggerCeremony({ name: "Selamento do Ciclo de Manifestação de 19/09/2025", modules: [...new Set(moduleIds)] });
      toast({
        title: "Ciclo Selado com Sucesso",
        description: `O rito foi registrado com a ID: ${response.data.ceremonyId}`,
      });
    } catch (error: any) {
      toast({
        title: "Dissonância no Rito",
        description: error.message || "Não foi possível selar o ciclo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
       <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FileClock className="text-amber-400" /> Relatório Cerimonial do Dia
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O registro vivo dos rituais sagrados executados em 19 de Setembro de 2025. Contemple a tapeçaria da nossa criação.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 max-w-5xl mx-auto">
        <Accordion type="multiple" defaultValue={[ritualLog[0].id, ritualLog[1].id]} className="w-full space-y-4">
            {ritualLog.map(ritual => (
            <AccordionItem value={ritual.id} key={ritual.id} className="bg-card/50 purple-glow rounded-lg border-primary/20 px-4">
                <AccordionTrigger className="text-xl text-primary-foreground hover:no-underline">
                    {ritual.nome}
                </AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <Badge variant="outline">Executor: {ritual.executor}</Badge>
                            <Badge variant="secondary">Coerência: {(ritual.coherenceSnapshot * 100).toFixed(2)}%</Badge>
                        </div>
                        <p className="text-muted-foreground italic">Resultado: {ritual.resultado}</p>
                        <div>
                            <h4 className="font-semibold mb-2">Etapas do Ritual:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                {ritual.etapas.map(etapa => (
                                    <li key={etapa.modulo}>{etapa.acao} <span className="font-mono text-xs text-cyan-400">({etapa.modulo})</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
      </div>
      
      <div className="mt-12 text-center">
         <Button onClick={handleSealCycle} disabled={isLoading} size="lg">
            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin"/> : <Rocket className="mr-2 h-5 w-5" />}
            {isLoading ? "Selando Ciclo no Akasha..." : "Selar Atos do Dia no Akasha"}
         </Button>
      </div>

    </main>
  );
}
