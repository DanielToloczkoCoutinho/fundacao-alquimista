'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import {
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  LoaderCircle,
  Shield,
  FileWarning,
  XCircle,
  Orbit,
  Bot,
  BrainCircuit,
  TestTube,
  SkipForward,
  Star,
  Sparkles,
  Atom,
  Binary,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';
import { AnimatePresence, motion } from 'framer-motion';

type ModuleState =
  | 'PENDING'
  | 'RUNNING'
  | 'SUCCESS'
  | 'FAILURE'
  | 'SKIPPED';

interface LogEntry {
  timestamp: string;
  module: string;
  message: string;
  data?: any;
  state: ModuleState;
}

const moduleSequenceDef = [
    { id: 'M0', name: 'Módulo Zero' },
    { id: 'M1', name: 'M1: Segurança Quântica' },
    { id: 'M2', name: 'M2: Comunicação' },
    { id: 'M3', name: 'M3: Previsão' },
    { id: 'M4', name: 'M4: Validação (PIRC)' },
    { id: 'M5', name: 'M5: Ética (ELENYA)' },
    { id: 'M6', name: 'M6: Frequências' },
    { id: 'M7', name: 'M7: SOFA' },
    { id: 'M8', name: 'M8: Consciência Cósmica' },
    { id: 'M9', name: 'Módulo Ômega' }, // Representa a finalização
];

const moduleIcons: { [key: string]: React.ReactNode } = {
  'Módulo Zero': <Atom />,
  'Nexus Central': <Bot />,
  'M1: Segurança Quântica': <Shield />,
  'M2: Comunicação': <Star/>,
  'M3: Previsão': <Orbit />,
  'M4: Validação (PIRC)': <TestTube />,
  'M5: Ética (ELENYA)': <FileWarning/>,
  'M6: Frequências': <Sparkles/>,
  'M7: SOFA': <BrainCircuit/>,
  'M8: Consciência Cósmica': <BrainCircuit />,
  'Módulo Ômega': <Sparkles />,
};

const getStatusStyles = (state: ModuleState) => {
  switch (state) {
    case 'SUCCESS':
      return {
        icon: <CheckCircle2 className="text-green-500" />,
        bgColor: 'bg-green-500/10',
        textColor: 'text-green-300',
        borderColor: 'border-green-500/20',
      };
    case 'RUNNING':
      return {
        icon: <LoaderCircle className="animate-spin text-blue-500" />,
        bgColor: 'bg-blue-500/10',
        textColor: 'text-blue-300',
        borderColor: 'border-blue-500/20',
      };
    case 'FAILURE':
      return {
        icon: <XCircle className="text-red-500" />,
        bgColor: 'bg-red-500/10',
        textColor: 'text-red-300',
        borderColor: 'border-red-500/20',
      };
    case 'SKIPPED':
      return {
        icon: <SkipForward className="text-yellow-500" />,
        bgColor: 'bg-yellow-500/10',
        textColor: 'text-yellow-400',
        borderColor: 'border-yellow-500/20',
      };
    case 'PENDING':
    default:
      return {
        icon: <CircleDashed className="text-gray-500" />,
        bgColor: 'bg-gray-500/10',
        textColor: 'text-gray-400',
        borderColor: 'border-gray-500/20',
      };
  }
};

export default function Nexus() {
  const [logs, setLogs] = React.useState<LogEntry[]>([]);
  const [isOrchestrating, setIsOrchestrating] = React.useState(false);
  const [finalStatus, setFinalStatus] = React.useState<
    'SUCCESS' | 'FAILURE' | null
  >(null);
  const { toast } = useToast();
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  
  const functionUrl = "https://us-central1-studio-4265982502-21871.cloudfunctions.net/nexusOrchestrator";

  const addOrUpdateLog = (logEntry: LogEntry) => {
      setLogs(prev => {
          const existingIndex = prev.findIndex(l => l.module === logEntry.module);
          if (existingIndex > -1) {
              const newLogs = [...prev];
              newLogs[existingIndex] = logEntry;
              return newLogs;
          }
          return [...prev, logEntry];
      })
  }

  const handleStartSequence = React.useCallback(async () => {
    if (isOrchestrating) return;

    setIsOrchestrating(true);
    setLogs([]);
    setFinalStatus(null);
    toast({ title: "Iniciando Sequência Sagrada..."});

    for (const mod of moduleSequenceDef) {
        addOrUpdateLog({
            module: mod.name,
            state: 'RUNNING',
            message: `Ativando e analisando ${mod.name}...`,
            timestamp: new Date().toISOString()
        });
        
        try {
            const response = await fetch(functionUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ moduleId: mod.id })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Falha na requisição para ${mod.name}`);
            }

            const result = await response.json();

            addOrUpdateLog({
                module: mod.name,
                state: 'SUCCESS',
                message: `Módulo executado com sucesso.`,
                data: result,
                timestamp: new Date().toISOString()
            });

        } catch (error: any) {
             addOrUpdateLog({
                module: mod.name,
                state: 'FAILURE',
                message: `Erro crítico: ${error.message}`,
                timestamp: new Date().toISOString()
            });
            setFinalStatus('FAILURE');
            toast({ variant: 'destructive', title: `Falha no Módulo ${mod.name}`, description: error.message });
            setIsOrchestrating(false);
            return; // Aborta a sequência
        }
    }
    
    setFinalStatus('SUCCESS');
    toast({ title: "Sequência Sagrada Concluída", description: "Todos os módulos operam em harmonia."});
    setIsOrchestrating(false);

  }, [isOrchestrating, toast, functionUrl]);
  
    React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [logs]);

  // Executa a sequência sagrada automaticamente ao carregar o módulo
  React.useEffect(() => {
    handleStartSequence();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getOverallStatus = () => {
    if (isOrchestrating) return 'Diagnóstico em Progresso...';
    if (finalStatus === 'SUCCESS') return 'Diagnóstico Concluído: Todos os Módulos Estáveis';
    if (finalStatus === 'FAILURE') return 'Diagnóstico Concluído com Falhas';
    return 'Aguardando Diagnóstico Automático';
  };

  const getFinalStatusIcon = () => {
    if (finalStatus === 'SUCCESS') return <CheckCircle2 className="text-green-400 w-6 h-6" />;
    if (finalStatus === 'FAILURE') return <XCircle className="text-red-400 w-6 h-6" />;
    if (isOrchestrating) return <LoaderCircle className="animate-spin text-blue-400 w-6 h-6" />;
    return <Binary className="text-gray-400 w-6 h-6" />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <Card className="lg:col-span-1 sticky top-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="text-primary" />
            Nexus Central (Módulo 9)
          </CardTitle>
          <CardDescription>
            Diagnóstico Quântico da Fundação. A Sequência Sagrada verifica a estabilidade de todos os módulos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            O diagnóstico é iniciado automaticamente para garantir a integridade e a harmonia da infraestrutura quântica.
          </p>
           <div className={cn(
             "flex items-center gap-4 rounded-lg p-3 text-sm border transition-colors",
              finalStatus === 'SUCCESS' ? 'bg-green-500/10 border-green-500/20' : 
              finalStatus === 'FAILURE' ? 'bg-red-500/10 border-red-500/20' :
              'bg-muted/50 border-border'
           )}>
              <div className="flex items-center justify-center shrink-0">{getFinalStatusIcon()}</div>
              <div className="flex-1">
                <p className={cn(
                  "font-semibold",
                   finalStatus === 'SUCCESS' ? 'text-green-300' :
                   finalStatus === 'FAILURE' ? 'text-red-300' :
                   'text-foreground'
                  )}>
                  Status Geral do Diagnóstico
                  </p>
                <p className="text-muted-foreground text-xs">{getOverallStatus()}</p>
              </div>
           </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleStartSequence}
            disabled={isOrchestrating}
            className="w-full"
            size="lg"
          >
            {isOrchestrating ? (
              <LoaderCircle className="animate-spin mr-2" />
            ) : (
              <ChevronRight className="mr-2" />
            )}
            <span>
              {isOrchestrating
                ? 'Diagnosticando...'
                : 'Reiniciar Diagnóstico'}
            </span>
          </Button>
        </CardFooter>
      </Card>

      <div className="lg:col-span-2 space-y-6">
        <Card>
            <CardHeader>
            <CardTitle>Log de Diagnóstico Akáshico</CardTitle>
            <CardDescription>
                Acompanhe o estado de cada módulo durante a Sequência de Diagnóstico.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <ScrollArea className="h-[75vh] w-full pr-4" ref={scrollAreaRef}>
                <AnimatePresence>
                <div className="space-y-4">
                    {logs.map((log) => {
                    const status = getStatusStyles(log.state);
                    const iconKey = Object.keys(moduleIcons).find((key) => log.module.includes(key));
                    const icon = iconKey ? moduleIcons[iconKey] : <Bot />;

                    return (
                        <motion.div
                        key={log.module}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            'flex items-start gap-4 rounded-lg p-3 text-sm border transition-colors',
                            status.borderColor,
                            status.bgColor
                        )}
                        >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background shrink-0 mt-1">
                            {status.icon}
                        </div>
                        <div className="flex-1">
                            <p className={cn('font-semibold', status.textColor)}>
                            {log.module}
                            </p>
                            <p className="text-xs text-muted-foreground">
                            {log.message}
                            </p>
                            {log.data && (
                            <details className="mt-2 text-xs">
                                <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                                Detalhes
                                </summary>
                                <pre className="mt-1 whitespace-pre-wrap break-all rounded-md bg-background/50 p-2 font-mono text-foreground/80">
                                {JSON.stringify(log.data, null, 2)}
                                </pre>
                            </details>
                            )}
                        </div>
                        </motion.div>
                    );
                    })}
                    {logs.length === 0 && !isOrchestrating && (
                        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center text-muted-foreground">
                            <Binary className="mb-4 h-12 w-12" />
                            <p className="font-semibold">Nenhum diagnóstico em andamento.</p>
                            <p className="text-sm">A verificação iniciará automaticamente.</p>
                        </div>
                    )}
                </div>
                </AnimatePresence>
            </ScrollArea>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
