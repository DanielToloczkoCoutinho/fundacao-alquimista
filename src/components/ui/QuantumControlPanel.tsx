'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, PlayCircle, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { transcribeToGoldenBook } from '@/app/actions';
import { quantumRoutes } from '@/lib/quantum-routing';
import { useRouter } from 'next/navigation';

export default function QuantumControlPanel() {
  const { toast } = useToast();
  const router = useRouter();
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>(quantumRoutes[0].id);
  const [isLoading, setIsLoading] = useState(false);

  const selectedJourney = quantumRoutes.find(r => r.id === selectedJourneyId);

  const handleStartJourney = async () => {
    if (!selectedJourney) {
      toast({ title: 'Erro', description: 'Selecione uma jornada válida.', variant: 'destructive' });
      return;
    }
    
    setIsLoading(true);
    toast({ title: 'Rito de Iniciação', description: `Iniciando a jornada: ${selectedJourney.title}. O evento está sendo selado no Akasha.` });

    try {
      await transcribeToGoldenBook({
        title: `Início de Jornada: ${selectedJourney.title}`,
        description: `O Guardião iniciou a experiência imersiva do Módulo ${selectedJourney.module} com a intenção de '${selectedJourney.intent}'.`,
        category: 'jornada_quantica',
        tags: ['Realidade Quântica', 'M303', selectedJourney.module, selectedJourney.intent],
      });

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula o carregamento da experiência
      
      router.push(selectedJourney.path);

    } catch (error: any) {
      toast({ title: 'Dissonância no Portal', description: 'Não foi possível iniciar a jornada e selar o registro.', variant: 'destructive' });
      setIsLoading(false);
    }
    // A navegação removerá este componente, então não é necessário setar isLoading para false.
  };

  return (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl gradient-text text-center">
          Painel de Navegação Quântica
        </CardTitle>
        <CardDescription className="text-center">
          Selecione sua intenção e inicie a jornada através do Portal Trino.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="journey-select" className="text-muted-foreground">Escolha a Experiência</label>
          <Select value={selectedJourneyId} onValueChange={setSelectedJourneyId}>
            <SelectTrigger id="journey-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {quantumRoutes.map(route => (
                <SelectItem key={route.id} value={route.id}>
                   <div className="flex items-center gap-2">
                     {React.cloneElement(route.icon, { className: "h-4 w-4" })}
                     <span>{route.title}</span>
                   </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedJourney && (
            <div className="p-4 bg-background/30 rounded-lg border border-primary/20 text-center">
                <h4 className="font-semibold text-amber-300">Propósito Cerimonial</h4>
                <p className="text-sm text-muted-foreground italic">"{selectedJourney.description}"</p>
            </div>
        )}

        <Button onClick={handleStartJourney} disabled={isLoading} size="lg" className="w-full font-bold">
          {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Iniciando Jornada...</> : <><PlayCircle className="mr-2 h-4 w-4"/> Iniciar Jornada</>}
        </Button>
      </CardContent>
    </Card>
  );
}
