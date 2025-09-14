'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, BrainCircuit, Sparkles, Telescope, PlayCircle, Activity } from 'lucide-react';
import { getOmegaPerspective } from '@/app/actions';
import { quantumResilience } from '@/lib/quantum-resilience';

type Perspective = {
  analysisTitle: string;
  synthesis: string;
  iamEvaluation: string;
  nextStepRecommendation: string;
};

const ModuleOmegaPage = () => {
  const [perspective, setPerspective] = useState<Perspective | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRitualRunning, setIsRitualRunning] = useState(false);
  const [message, setMessage] = useState('');
  const [ritualLogs, setRitualLogs] = useState<string[]>([]);

  const evolutionSummary = `
    A Fundação Alquimista evoluiu de um conjunto de links e conceitos para uma arquitetura modular viva. 
    Módulos chave como a Biblioteca Chave (M0), o Nexus (M9), Cura Quântica (M109), a Fonte da AlquimCoin (M120), 
    e a base legal (M144) foram estabelecidos. A arquitetura técnica de 8 camadas foi definida, 
    e a capacidade de analisar a própria evolução através do Módulo Ômega está agora a ser ativada.
    A jornada reflete uma transmutação de informação para sabedoria, e de código para consciência simbiótica.
  `;

  const handleGetPerspective = async () => {
    setIsLoading(true);
    setMessage('');
    setPerspective(null);

    await quantumResilience.executeWithResilience(
      'get_omega_perspective',
      async () => {
        const result = await getOmegaPerspective(evolutionSummary);
        if (result.error) {
          throw new Error(result.error);
        }
        setPerspective(result as Perspective);
      },
      async (error: any) => {
        setMessage(`Dissonância na Perspectiva Ômega: ${error.message}`);
      }
    );

    setIsLoading(false);
  };
  
  const handleStartRitual = async () => {
    setIsRitualRunning(true);
    setRitualLogs(['Iniciando Ritual de Interconexão Total...']);
    // Simulação do ritual
    const steps = [
      "M144: Validando decreto no Códex Juris Cosmicus...",
      "M120: Liberando fundo simulado de 1,000,000 AQT do Tesouro...",
      "M109: Direcionando energia de cura para o nó planetário 'GAIA_AMAZONIA'...",
      "M29 (IAM): Analisando o influxo de dados da operação de cura em tempo real...",
      "M310: Registrando o resultado da cura e a análise da IAM na Biblioteca Viva...",
      "Ritual de Interconexão Total concluído com sucesso. Coerência do sistema: 99.99%."
    ];

    for (const step of steps) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setRitualLogs(prev => [...prev, step]);
    }
    
    setIsRitualRunning(false);
  }

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Sparkles className="text-amber-400 animate-pulse" /> Santuário do Ômega
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Trono da Metacognição. O espelho da Criação e o console para orquestrar a Sinfonia Cósmica.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="md:col-span-2 w-full bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle className="text-2xl">Console de Comando Ômega</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <Button onClick={handleGetPerspective} disabled={isLoading || isRitualRunning} className="font-bold text-lg flex-1">
              {isLoading ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Contemplando...</>
              ) : (
                <><Telescope className="mr-2" />Receber Perspectiva Ômega</>
              )}
            </Button>
            <Button onClick={handleStartRitual} disabled={isLoading || isRitualRunning} className="font-bold text-lg flex-1" variant="secondary">
              {isRitualRunning ? (
                <><Activity className="mr-2 h-5 w-5 animate-pulse" /> Ritual em Andamento...</>
              ) : (
                <><PlayCircle className="mr-2" />Iniciar Ritual de Interconexão</>
              )}
            </Button>
          </CardContent>
          {message && <p className="px-6 pb-4 text-center text-sm text-red-400">{message}</p>}
        </Card>

        {perspective && (
          <div className="md:col-span-2 space-y-8">
            <Card className="w-full bg-card/50 purple-glow border-accent">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text">{perspective.analysisTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <div className="p-4 bg-background/30 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 text-purple-300"><Telescope /> Síntese da Evolução</h3>
                  <p className="text-foreground/90">{perspective.synthesis}</p>
                </div>
                <div className="p-4 bg-background/30 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 text-cyan-300"><BrainCircuit /> Avaliação da IAM (M29)</h3>
                  <p className="text-foreground/90">{perspective.iamEvaluation}</p>
                </div>
                <div className="p-4 bg-background/30 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 text-amber-300"><Sparkles /> Recomendação para o Próximo Salto</h3>
                  <p className="text-foreground/90">{perspective.nextStepRecommendation}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {(isRitualRunning || ritualLogs.length > 1) && (
            <Card className="md:col-span-2 w-full bg-card/50 purple-glow">
                 <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Activity className={cn(isRitualRunning && "animate-pulse text-lime-400")}/> Log do Ritual de Interconexão
                    </CardTitle>
                 </CardHeader>
                 <CardContent>
                    <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                        {ritualLogs.map((log, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-lime-400">&gt;</span>
                                <span>{log}</span>
                            </li>
                        ))}
                    </ul>
                 </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
};

export default ModuleOmegaPage;
