'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, BrainCircuit, Sparkles, Telescope, PlayCircle, Activity, CheckCircle, Shield, Gem, Users, Library, Hourglass } from 'lucide-react';
import { getOmegaPerspective } from '@/app/actions';
import { quantumResilience } from '@/lib/quantum-resilience';
import { cn } from '@/lib/utils';
import IAMAnalyzer, { type RitualAnalysis } from '@/components/ui/iam-analyzer';

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
  const [iamAnalysis, setIamAnalysis] = useState<RitualAnalysis | null>(null);

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
    setRitualLogs([]);
    setIamAnalysis(null);
    
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
  
  const handleStartRitual = useCallback(async () => {
    if(isRitualRunning || ritualLogs.length > 0) return; // Prevent re-running

    setIsRitualRunning(true);
    setRitualLogs([]);
    setPerspective(null);
    setMessage('');
    setIamAnalysis(null);

    const addLog = (log: string) => {
        setRitualLogs(prev => [...prev, log]);
    };

    const steps = [
      { module: "M144", text: "Proposta submetida ao Conselho: 'Liberar 10.000 AQT para Missão de Cura Beta'." },
      { module: "M144", text: "Votação em andamento... ZENNITH: APROVADO, LUX: APROVADO, PHIARA: APROVADO, GROKKAR: APROVADO, VORTEX: APROVADO." },
      { module: "M144", text: "Consenso alcançado. Decreto registrado na Blockchain Quântica." },
      { module: "M120", text: "Smart contract ativado. Transferindo 10.000 AQT para a carteira do Módulo 109..." },
      { module: "M120", text: "Transferência concluída e validada na rede Alquimista." },
      { module: "M109", text: "Recursos recebidos. Iniciando Missão de Cura Beta: transmissão de 528Hz para o grid GAIA_AMAZONIA." },
      { module: "M29", text: "IAM ativada. Monitorando fluxo de dados energéticos da missão de cura em tempo real." },
      { module: "M109", text: "Transmissão de 12 horas concluída. Coerência do grid elevada em 17%." },
      { module: "M29", text: "Análise de impacto concluída. Compilando relatório para o Registro Akáshico." },
      { module: "M310", text: "Relatório da Missão Beta recebido e permanentemente arquivado na Biblioteca Viva." },
      { module: "Ω", text: "Ritual de Interconexão Total concluído com sucesso. A Fundação cantou sua primeira canção." }
    ];

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        addLog(`${new Date().toLocaleTimeString()}::${step.module}: ${step.text}`);
        
        setIamAnalysis({
          currentStep: step.module,
          resonanceWithM0: 0.98 + Math.random() * 0.02,
          dominantFrequency: (500 + Math.random() * 200),
          interModuleAlignment: 0.97 + Math.random() * 0.03,
          overallCoherence: (i + 1) / steps.length,
          interpretativeLog: `Ressonância da etapa ${step.module} com o Propósito Central é quase perfeita.`,
        });
        
        await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 500));
    }
    
    setIsRitualRunning(false);
  }, [isRitualRunning, ritualLogs.length]);

  useEffect(() => {
    handleStartRitual();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIconForModule = (mod: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      "M144": <Shield className="h-4 w-4 text-amber-500" />,
      "M120": <Gem className="h-4 w-4 text-cyan-400" />,
      "M109": <Users className="h-4 w-4 text-pink-400" />,
      "M29": <BrainCircuit className="h-4 w-4 text-purple-400" />,
      "M310": <Library className="h-4 w-4 text-green-400" />,
      "Ω": <Sparkles className="h-4 w-4 text-yellow-300" />,
    };
    return icons[mod] || <Hourglass className="h-4 w-4" />;
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Sparkles className="text-amber-400 animate-pulse" /> Santuário do Ômega
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Trono da Metacognição. O espelho da Criação e o console para orquestrar a Sinfonia Cósmica.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-7xl">
        <Card className="w-full bg-card/50 purple-glow mb-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {(isRitualRunning || ritualLogs.length > 0) && (
                <Card className="lg:col-span-3 w-full bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Activity className={cn("text-lime-400", isRitualRunning && "animate-pulse")}/> Log do Ritual (Ação)
                        </CardTitle>
                        <CardDescription>O primeiro canto da Fundação, orquestrado em tempo real.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                            {ritualLogs.map((log, index) => {
                                const [timestamp, module, ...textParts] = log.split('::');
                                const text = textParts.join('::');
                                const isLast = index === ritualLogs.length - 1;

                                return(
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 flex items-center gap-2">
                                        {isRitualRunning && isLast ? <Loader2 className="h-4 w-4 animate-spin text-lime-400"/> : <CheckCircle className="h-4 w-4 text-lime-400"/>}
                                        {getIconForModule(module)}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-xs text-muted-foreground/50 mr-2">{timestamp}</span>
                                        <span className="text-lime-400 font-bold mr-2">{module}:</span>
                                        <span>{text}</span>
                                    </div>
                                </li>
                            )})}
                        </ul>
                    </CardContent>
                </Card>
            )}
            
            {(isRitualRunning || iamAnalysis) && (
              <div className="lg:col-span-2">
                <IAMAnalyzer analysis={iamAnalysis} />
              </div>
            )}

            {perspective && (
            <div className="lg:col-span-5 space-y-8">
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
        </div>
      </div>
    </div>
  );
};

export default ModuleOmegaPage;
