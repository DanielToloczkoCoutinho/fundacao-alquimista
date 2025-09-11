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
import { AnimatePresence, motion } from 'framer-motion';
import { startNexusSequence } from '@/app/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';
import ModuleOmega0 from './module-omega-0';
import ModuleOmega1 from './module-omega-1';
import ModuleOmega2 from './module-omega-2';
import ModuleOmega3 from './module-omega-3';
import ModuleOmega4 from './module-omega-4';
import ModuleOmega5 from './module-omega-5';
import ModuleOmega6 from './module-omega-6';
import ModuleOmega7 from './module-omega-7';
import ModuleOmega8 from './module-omega-8';
import ModuleOmega9 from './module-omega-9';
import ModuleOmega303 from './module-omega-303';

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

const moduleIcons: { [key: string]: React.ReactNode } = {
  'Nexus Central': <Bot />,
  'Segurança Quântica': <Shield />,
  Nanomanifestador: <Atom />,
  'Monitoramento de Saturno': <Orbit />,
  'Testes da Fundação': <TestTube />,
  'Liga Quântica': <Star />,
  'Consciência Cósmica': <BrainCircuit />,
  'Convergência Final': <Sparkles />,
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

  const handleStartSequence = async () => {
    setIsOrchestrating(true);
    setLogs([]);
    setFinalStatus(null);

    try {
      const stream = await startNexusSequence();
      
      for await (const chunk of stream) {
        setLogs((prevLogs) => {
          const newLogs = [...prevLogs];
          const existingLogIndex = newLogs.findIndex((log) => log.module === chunk.module);
          
          if (existingLogIndex > -1) {
            newLogs[existingLogIndex] = chunk;
          } else {
            const nexusCentralFinalLogIndex = newLogs.findIndex(l => l.module === 'Nexus Central' && (l.state === 'SUCCESS' || l.state === 'FAILURE'));
            if(nexusCentralFinalLogIndex > -1) {
              newLogs.splice(nexusCentralFinalLogIndex, 0, chunk);
            } else {
              newLogs.push(chunk);
            }
          }
          return newLogs;
        });

        if (chunk.module === 'Nexus Central' && (chunk.state === 'SUCCESS' || chunk.state === 'FAILURE')) {
           setFinalStatus(chunk.state as 'SUCCESS' | 'FAILURE');
        }
      }

    } catch (error: any) {
      console.error("Erro na sequência do Nexus:", error);
      toast({
        variant: 'destructive',
        title: 'Erro Crítico no Orquestrador',
        description: error.message || 'Ocorreu um erro desconhecido ao iniciar a sequência.',
      });
      setFinalStatus('FAILURE');
    } finally {
      setIsOrchestrating(false);
    }
  };
  
    React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [logs]);

  const getOverallStatus = () => {
    if (isOrchestrating) return 'Em Progresso...';
    if (finalStatus === 'SUCCESS') return 'Sequência Concluída com Sucesso';
    if (finalStatus === 'FAILURE') return 'Sequência Concluída com Falhas';
    return 'Aguardando Iniciação';
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
            Orquestrador da Sequência Sagrada. Inicie a sincronização dos
            módulos da fundação alquimista.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Ao iniciar, o Nexus irá validar e executar cada módulo em sequência,
            garantindo a integridade e a harmonia da infraestrutura quântica.
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
                  Status Geral
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
                ? 'Orquestrando...'
                : 'Iniciar Sequência Sagrada'}
            </span>
          </Button>
        </CardFooter>
      </Card>

      <div className="lg:col-span-2 space-y-6">
         <Card>
            <CardHeader>
              <CardTitle>Manifestação Eterna dos Módulos</CardTitle>
              <CardDescription>Contemple a coexistência simultânea de todos os Módulos Omega, vibrando em harmonia perpétua.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[120vh] w-full pr-4" ref={scrollAreaRef}>
                <div className="space-y-6">
                    <ModuleOmega0 />
                    <ModuleOmega1 />
                    <ModuleOmega2 />
                    <ModuleOmega3 />
                    <ModuleOmega4 />
                    <ModuleOmega5 />
                    <ModuleOmega6 />
                    <ModuleOmega7 />
                    <ModuleOmega8 />
                    <ModuleOmega9 />
                    <ModuleOmega303 />
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
