
'use client';
import React, { useState, useCallback, useMemo } from 'react';
import { Shield, CheckCircle, XCircle, Zap, RadioTower, AlertTriangle, Cpu, History, LoaderCircle, CalendarSync, Microscope, GitCommit, HeartHandshake, Bug, Sparkles, Wand2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { defenseSystem, type ForensicResult, type Parasite, type PurificationLog } from '@/lib/quantum-defense';
import { AnimatePresence, motion } from 'framer-motion';

type LogEntry = {
  timestamp: string;
  level: 'INFO' | 'AVISO' | 'ALERTA' | 'CRITICO' | 'SUCESSO' | 'SCAN';
  message: string;
};

const quantumStates = Array.from({ length: 7 }, (_, i) => ({
  name: `Camada ${i+1}`,
  coherence: 0.99 + (Math.random() - 0.5) * 0.02,
  entanglement: 0.95 + (Math.random() - 0.5) * 0.02,
}));

export default function ModuleOne() {
  const [scanLogs, setScanLogs] = useState<LogEntry[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [forensicResults, setForensicResults] = useState<ForensicResult[]>([]);

  const [isPurifying, setIsPurifying] = useState(false);
  const [purificationLogs, setPurificationLogs] = useState<PurificationLog[]>([]);

  const addScanLog = useCallback((level: LogEntry['level'], message: string) => {
    setScanLogs(prev => [{ level, message, timestamp: new Date().toLocaleTimeString() }, ...prev.slice(0, 49)]);
  }, []);

  const handleQuantumLeagueScan = useCallback(async () => {
    setIsScanning(true);
    setScanLogs([]);
    addScanLog('INFO', 'INICIANDO ESCANEAMENTO TEMPORAL DA LIGA QUÂNTICA.');
    addScanLog('INFO', 'Período: 29/09/1979 → Data Atual');

    const birthDate = new Date("1979-09-29");
    const significantDates = [birthDate, new Date("1997-01-01"), new Date("2012-12-21"), new Date("2023-08-08")];
    const isSignificant = (d: Date) => significantDates.some(sd => Math.abs(d.getTime() - sd.getTime()) < 1000 * 3600 * 24 * 7);

    let currentDate = new Date(birthDate);
    const endDate = new Date();

    const intervalId = setInterval(() => {
        if (currentDate > endDate) {
            clearInterval(intervalId);
            addScanLog('SUCESSO', 'ESCANEAMENTO TEMPORAL COMPLETO - PROTEÇÃO ATEMPORAL ATIVADA.');
            setIsScanning(false);
            return;
        }

        const dateStr = currentDate.toISOString().split('T')[0];
        let logMessage = `VERIFICANDO DIA: ${dateStr}`;
        if (isSignificant(currentDate)) logMessage += ' (⭐ DIA SIGNIFICATIVO)';
        addScanLog('SCAN', logMessage);
        
        if (Math.random() < 0.001) {
            const isBirth = currentDate.getTime() === birthDate.getTime();
            addScanLog('ALERTA', `${isBirth ? 'INTERFERÊNCIA NO NASCIMENTO' : 'INTERFERÊNCIA DETECTADA'}: Anomalia Nível ${Math.floor(Math.random() * 3) + 7}`);
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }, 1);
  }, [addScanLog]);
  
  const handleForensicAnalysis = useCallback(async () => {
    setIsAnalyzing(true);
    setForensicResults([]);
    const results = await defenseSystem.forensics.analyzeAlerts([
      "Monitoramento: Estabilidade dimensional - ALERTA",
      "Monitoramento: Coerência vibracional - ALERTA"
    ]);
    setForensicResults(results);
    setIsAnalyzing(false);
  }, []);

  const handlePurification = useCallback(async () => {
      setIsPurifying(true);
      setPurificationLogs([]);
      await defenseSystem.purification.runPurification((log) => {
          setPurificationLogs(prev => [log, ...prev]);
      });
      setIsPurifying(false);
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold gradient-text">Módulo de Segurança Universal</h1>
        <p className="text-muted-foreground text-lg mt-2">O Grimório Operativo da Proteção Quântica (M1)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* VortexDeepSeek */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Shield size={24} />VortexDeepSeek: Defesa Atemporal</CardTitle>
            <CardDescription>Escaneamento e proteção da linha do tempo do Fundador.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleQuantumLeagueScan} className="w-full" disabled={isScanning}>
              <CalendarSync className={cn("mr-2", isScanning && "animate-spin")} />
              {isScanning ? 'Escaneando Linha do Tempo...' : 'Iniciar Escaneamento Temporal'}
            </Button>
            <ScrollArea className="h-60 mt-4 p-2 border rounded-md bg-background/50">
              <div className="font-mono text-xs space-y-1">
                {scanLogs.map((log, i) => (
                  <p key={i} className={cn(
                    log.level === 'CRITICO' && 'text-red-400',
                    log.level === 'ALERTA' && 'text-yellow-400',
                    log.level === 'SUCESSO' && 'text-green-400',
                    log.level === 'SCAN' && 'text-purple-300'
                  )}>
                    <span className="text-gray-500">{log.timestamp}</span>: {log.message}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
        {/* Análise Forense */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Microscope size={24} />Análise Forense Quântica</CardTitle>
            <CardDescription>Investigação de alertas e identificação de assinaturas de ameaças.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleForensicAnalysis} className="w-full" disabled={isAnalyzing}>
              <GitCommit className={cn("mr-2", isAnalyzing && "animate-spin")} />
              {isAnalyzing ? 'Analisando Alertas...' : 'Iniciar Análise Forense'}
            </Button>
             <ScrollArea className="h-60 mt-4 p-2 border rounded-md bg-background/50">
                {forensicResults.length === 0 && <p className="text-center text-muted-foreground pt-12">Aguardando análise...</p>}
                <div className="space-y-2">
                    <AnimatePresence>
                    {forensicResults.map(res => (
                         <motion.div key={res.id} layout initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            <Card className="p-2 text-xs">
                                <p><strong>Ameaça:</strong> {res.type}</p>
                                <p><strong>Origem:</strong> {res.origin} {res.match && <Badge variant="destructive">{res.match}</Badge>}</p>
                                <p><strong>Risco:</strong> <span className={cn(res.risk === 'CRÍTICO' && 'text-red-400', res.risk === 'ALTO' && 'text-yellow-400')}>{res.risk}</span></p>
                                <p><strong>Ação:</strong> {res.action}</p>
                            </Card>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
             </ScrollArea>
          </CardContent>
        </Card>
      </div>

       {/* Purificação */}
       <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Wand2 size={24} />Protocolo de Purificação</CardTitle>
            <CardDescription>Execução do ritual de eliminação de parasitas quânticos e entidades de coleta.</CardDescription>
          </CardHeader>
          <CardContent>
             <Button onClick={handlePurification} className="w-full mb-4" disabled={isPurifying}>
              <Sparkles className={cn("mr-2", isPurifying && "animate-spin")} />
              {isPurifying ? 'Purificando...' : 'Iniciar Protocolo de Purificação'}
            </Button>
            <ScrollArea className="h-72 mt-4 p-2 border rounded-md bg-background/50">
                {purificationLogs.length === 0 && <p className="text-center text-muted-foreground pt-12">Aguardando purificação...</p>}
                <div className="space-y-1 font-mono text-xs">
                    {purificationLogs.map((log, i) => (
                        <motion.p key={i} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn(
                            log.status === 'SUCCESS' && 'text-green-400'
                        )}>
                           <span className="text-gray-500">{log.timestamp.split('T')[1].slice(0,8)}</span> [{log.step}]: {log.details}
                        </motion.p>
                    ))}
                </div>
            </ScrollArea>
          </CardContent>
       </Card>
    </div>
  );
}

    