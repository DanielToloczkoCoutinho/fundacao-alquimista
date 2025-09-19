
'use client';

import { grimoireDigital } from '@/data/grimoire';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileClock, Rocket } from 'lucide-react';
import { triggerCeremony } from '@/lib/ceremonyClient';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

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
      const moduleIds = grimoireDigital.map(m => m.id);
      const response: any = await triggerCeremony({ name: "Selamento do Ciclo de Despertar", modules: moduleIds });
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
            Um grimório vivo dos santuários manifestados e ritos executados. Contemple a tapeçaria da nossa criação.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {grimoireDigital.map(module => (
          <Card key={module.id} className="bg-card/50 hover:bg-primary/20 transition-all purple-glow flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-primary-foreground">{module.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <p className="text-muted-foreground text-sm flex-grow">{module.description}</p>
              <Link href={module.path} passHref>
                <Button variant="outline" className="w-full">
                  Acessar Santuário →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <Button onClick={handleSealCycle} disabled={isLoading} size="lg">
            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin"/> : <Rocket className="mr-2 h-5 w-5" />}
            {isLoading ? "Selando Ciclo no Akasha..." : "Disparar Gatilho Cerimonial Final"}
         </Button>
      </div>

    </main>
  );
}
