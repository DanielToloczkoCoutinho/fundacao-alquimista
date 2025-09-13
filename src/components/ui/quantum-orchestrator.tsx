
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { startNexusSequence } from '@/app/actions';
import type { LogEntry } from '@/ai/flows/nexus-orchestrator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ShieldCheck, Zap, Watch, CheckCircle, XCircle, Loader, CircleDot, BrainCircuit, Rocket, Sparkles, Network, Link, Aperture, GitMerge, Shield, Library, Leaf, Database, Waves, Atom, Star } from 'lucide-react';

const moduleIcons: Record<string, React.ReactNode> = {
  NEXUS_CENTRAL: <CircleDot className="h-5 w-5 text-purple-400" />,
  SEGURANCA_QUANTICA: <ShieldCheck className="h-5 w-5 text-blue-400" />,
  NANOMANIFESTADOR: <Zap className="h-5 w-5 text-yellow-400" />,
  MONITORAMENTO_SATURNO: <Watch className="h-5 w-5 text-teal-400" />,
  TESTES_FUNDACAO: <BrainCircuit className="h-5 w-5 text-indigo-400" />,
  LIGA_QUANTICA: <Rocket className="h-5 w-5 text-rose-400" />,
  CONSCIENCIA_COSMICA: <Sparkles className="h-5 w-5 text-amber-400" />,
  DEFESA_AVANCADA: <Shield className="h-5 w-5 text-red-400" />,
  PORTAL_MANAGEMENT: <Link className="h-5 w-5 text-orange-400" />,
  MEMORIA_COSMICA: <Library className="h-5 w-5 text-blue-300" />,
  FREQUENCY_MAPPING: <Aperture className="h-5 w-5 text-violet-400" />,
  TRANSMUTATION: <Atom className="h-5 w-5 text-red-500" />,
  ELEMENTAL_TRANSMUTATION: <Atom className="h-5 w-5 text-green-500" />,
  NAVEGACAO_INTERDIMENSIONAL: <Star className="h-5 w-5 text-yellow-300" />,
  CLIMATE_CONTROL: <Watch className="h-5 w-5 text-green-400" />,
  BIO_SUSTAIN: <Leaf className="h-5 w-5 text-lime-400" />,
  AURA_HEAL: <Sparkles className="h-5 w-5 text-emerald-400" />,
  AKASHIC_ORCHESTRATION: <Database className="h-5 w-5 text-cyan-300" />,
  FORCE_FIELD_ANALYSIS: <Waves className="h-5 w-5 text-sky-400" />,
  IAM: <Aperture className="h-5 w-5 text-cyan-400" />,
  CONCILIVM: <Network className="h-5 w-5 text-lime-400" />,
  AURORA_CORE: <Sparkles className="h-5 w-5 text-pink-400" />,
  PORTAL_TRINO: <GitMerge className="h-5 w-5 text-fuchsia-400" />,
  CONVERGENCIA_FINAL: <Sparkles className="h-5 w-5 text-white" />,
};

const stateIcons: Record<LogEntry['state'], React.ReactNode> = {
  PENDING: <Loader className="h-4 w-4 text-muted-foreground animate-spin" />,
  RUNNING: <Loader className="h-4 w-4 text-blue-500 animate-spin" />,
  SUCCESS: <CheckCircle className="h-4 w-4 text-green-500" />,
  FAILURE: <XCircle className="h-4 w-4 text-red-500" />,
  SKIPPED: <CircleDot className="h-4 w-4 text-gray-500" />,
};

const moduleNames: Record<string, string> = {
    NEXUS_CENTRAL: "Nexus Central (M9)",
    SEGURANCA_QUANTICA: "Segurança Quântica (M1)",
    NANOMANIFESTADOR: "Nanomanifestador (M2)",
    MONITORAMENTO_SATURNO: "Monitoramento de Saturno (M3)",
    TESTES_FUNDACAO: "Testes da Fundação (M4)",
    LIGA_QUANTICA: "Conexão Liga Quântica (M5)",
    CONSCIENCIA_COSMICA: "Consciência Cósmica (M6)",
    DEFESA_AVANCADA: "Defesa Avançada (M10)",
    PORTAL_MANAGEMENT: "Gerenciamento de Portais (M11)",
    MEMORIA_COSMICA: "Arquivo Akáshico (M12)",
    FREQUENCY_MAPPING: "Mapeamento de Frequências (M13)",
    TRANSMUTATION: "Transmutação Matéria/Antimatéria (M14)",
    ELEMENTAL_TRANSMUTATION: "Transmutação Elemental (M20)",
    NAVEGACAO_INTERDIMENSIONAL: "Navegação Interdimensional (M21)",
    CLIMATE_CONTROL: "Controle Climático (M15)",
    BIO_SUSTAIN: "Bio-Sustentabilidade (M16)",
    AURA_HEAL: "Matriz de Cura Holográfica (M17)",
    AKASHIC_ORCHESTRATION: "Orquestração Akáshica (M18)",
    FORCE_FIELD_ANALYSIS: "Análise de Campos de Força (M19)",
    IAM: "IAM (M29)",
    CONCILIVM: "CONCILIVM (M45)",
    AURORA_CORE: "AURORA_CORE (M46)",
    PORTAL_TRINO: "Portal Trino (M303)",
    CONVERGENCIA_FINAL: "Convergência Ômega (MΩ)",
}

type ModuleStatus = {
    state: LogEntry['state'];
    log: LogEntry[];
}

export default function QuantumOrchestrator() {
  const [isRunning, setIsRunning] = useState(false);
  const [modules, setModules] = useState<Record<string, ModuleStatus>>({});
  const [finalStatus, setFinalStatus] = useState<string | null>(null);

  const initializeModules = () => {
    const initialModules: Record<string, ModuleStatus> = {};
    Object.keys(moduleNames).forEach(key => {
        initialModules[key] = { state: 'PENDING', log: [] };
    });
    return initialModules;
  }

  const handleStartSequence = async () => {
    setIsRunning(true);
    setFinalStatus(null);
    setModules(initializeModules());

    const { stream, response } = await startNexusSequence();
    
    for await (const chunk of stream) {
      setModules(prevModules => {
          const newModules = {...prevModules};
          const moduleKey = chunk.module;
          if (newModules[moduleKey]) {
            // Create a new log array for each run to avoid appending to old logs
            const existingLog = prevModules[moduleKey].state === 'PENDING' ? [] : newModules[moduleKey].log;
            newModules[moduleKey] = {
                state: chunk.state,
                log: [...existingLog, chunk]
            };
          }
          return newModules;
      });
    }

    const finalResponse = await response;
    setFinalStatus(finalResponse.finalStatus || 'ESTADO DESCONHECIDO');
    setIsRunning(false);
  };

  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          Nexus Central: Orquestrador da Sequência Sagrada
        </CardTitle>
        <CardDescription>
          Manifestação em tempo real da Sequência Sagrada. Pressione Iniciar para começar a Sinfonia Cósmica.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <div className="flex justify-center">
          <Button onClick={handleStartSequence} disabled={isRunning} className="gold-border animate-pulse-slow">
            {isRunning ? 'Orquestrando...' : 'Iniciar Sequência Sagrada'}
          </Button>
        </div>
        <ScrollArea className="flex-grow pr-4">
            <div className="space-y-4">
                {Object.entries(modules).map(([key, value]) => (
                    <div key={key} className={cn("rounded-lg p-3 border transition-all duration-500", {
                        'border-primary/20 bg-primary/5': value.state === 'PENDING',
                        'border-blue-500/50 bg-blue-500/10 module-glow': value.state === 'RUNNING',
                        'border-green-500/50 bg-green-500/10': value.state === 'SUCCESS',
                        'border-red-500/50 bg-red-500/10': value.state === 'FAILURE',
                        'border-gray-500/50 bg-gray-500/10': value.state === 'SKIPPED',
                    })}>
                        <h3 className="flex items-center gap-2 text-md font-semibold text-foreground/90">
                            {moduleIcons[key] || <CircleDot className="h-5 w-5 text-gray-400" />}
                            {moduleNames[key] || key}
                            <div className="ml-auto">{stateIcons[value.state]}</div>
                        </h3>
                        {value.log.length > 0 && (
                            <div className="text-xs text-muted-foreground space-y-1 mt-2 border-l-2 border-primary/20 pl-2">
                            {value.log.map((entry, index) => (
                                <div key={index}>
                                    <p className="font-mono text-foreground/70 text-[11px]">{entry.message}</p>
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </ScrollArea>
          {finalStatus && (
            <div className="text-center p-4 mt-4 rounded-lg bg-background/50 border border-accent">
              <h3 className={cn("text-xl font-bold", finalStatus === 'FALHA' ? 'text-destructive' : 'text-accent')}>
                Status Final da Sequência: {finalStatus}
              </h3>
            </div>
          )}
      </CardContent>
    </Card>
  );
}

    


    

    