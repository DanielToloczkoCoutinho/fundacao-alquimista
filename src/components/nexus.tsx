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
  SlidersHorizontal,
  TestTube,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { startNexusSequence } from '@/app/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';

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
  Estabilização: <SlidersHorizontal />,
  'Monitoramento de Saturno': <Orbit />,
  'Testes da Fundação': <TestTube />,
  'Orquestrador': <BrainCircuit />,
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

    const stream = await startNexusSequence();

    for await (const chunk of stream) {
      setLogs((prevLogs) => {
        const existingLogIndex = prevLogs.findIndex(
          (log) => log.module === chunk.module
        );
        if (existingLogIndex > -1) {
          const newLogs = [...prevLogs];
          newLogs[existingLogIndex] = chunk;
          return newLogs;
        }
        return [...prevLogs, chunk];
      });

      if (chunk.state === 'FAILURE') {
        toast({
          variant: 'destructive',
          title: `Falha no Módulo: ${chunk.module}`,
          description: chunk.message,
        });
      }
    }
    
    setIsOrchestrating(false);
    setFinalStatus('SUCCESS'); // Simplified for now
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
    if (finalStatus === 'FAILURE') return 'Sequência Falhou';
    return 'Aguardando Iniciação';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="text-primary" />
            Nexus Central
          </CardTitle>
          <CardDescription>
            Orquestrador da Sequência Sagrada. Inicie a sincronização dos
            módulos da fundação alquimista.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Ao iniciar, o Nexus irá validar e executar cada módulo em sequência,
            garantindo a integridade e a harmonia da infraestrutura quântica.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleStartSequence}
            disabled={isOrchestrating}
            className="w-full"
            size="lg"
          >
            {isOrchestrating ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <ChevronRight />
            )}
            <span>
              {isOrchestrating
                ? 'Orquestrando...'
                : 'Iniciar Sequência Sagrada'}
            </span>
          </Button>
        </CardFooter>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Log de Orquestração</CardTitle>
          <CardDescription>{getOverallStatus()}</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              <AnimatePresence>
                {logs.map((log, index) => {
                  const { icon, bgColor, textColor, borderColor } =
                    getStatusStyles(log.state);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        'flex items-start gap-4 rounded-lg p-3 text-sm border transition-colors',
                        bgColor,
                        borderColor
                      )}
                    >
                      <div className="mt-1">{icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <p className={cn('font-semibold', textColor)}>
                            {log.module}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(log.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                        <p className="text-muted-foreground mt-1">
                          {log.message}
                        </p>
                        {log.data && (
                           <pre className="mt-2 text-xs bg-black/20 p-2 rounded-md overflow-x-auto text-gray-400">
                             {JSON.stringify(log.data, null, 2)}
                           </pre>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {!isOrchestrating && logs.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
                  <FileWarning className="w-12 h-12 mb-4" />
                  <p>Nenhum log de orquestração disponível.</p>
                  <p className='text-xs'>Inicie a sequência para ver os resultados.</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
