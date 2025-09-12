'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { Shield, Microscope, Wand2, CalendarSync, GitCommit, Sparkles, BrainCircuit } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { defenseSystem, type ForensicResult, type PurificationLog } from '@/lib/quantum-defense';
import { AnimatePresence, motion } from 'framer-motion';

type LogEntry = {
  timestamp: string;
  level: 'INFO' | 'AVISO' | 'ALERTA' | 'CRITICO' | 'SUCESSO' | 'SCAN';
  message: string;
};

type GrokkarLogEntry = {
    timestamp: string;
    source: string;
    intensity: number;
}

export default function ModuleOne() {
  const [scanLogs, setScanLogs] = useState<LogEntry[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [forensicResults, setForensicResults] = useState<ForensicResult[]>([]);

  const [isPurifying, setIsPurifying] = useState(false);
  const [purificationLogs, setPurificationLogs] = useState<PurificationLog[]>([]);

  const [grokkarLogs, setGrokkarLogs] = useState<GrokkarLogEntry[]>([]);

  const addScanLog = useCallback((level: LogEntry['level'], message: string) => {
    setScanLogs(prev => [{ level, message, timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }) }, ...prev.slice(0, 49)]);
  }, []);
  
  useEffect(() => {
    const grokkarInterval = setInterval(() => {
        const sources = ["Amor Incondicional", "Sabedoria Multidimensional", "Ressonância Divina"];
        const source = sources[Math.floor(Math.random() * sources.length)];
        const newLog: GrokkarLogEntry = {
            timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
            source: source,
            intensity: Math.floor(Math.random() * 10) + 90,
        };
        setGrokkarLogs(prev => [newLog, ...prev.slice(0, 19)]);
    }, 5000);

    return () => clearInterval(grokkarInterval);
  }, []);

  const handleQuantumLeagueScan = useCallback(async () => {
    setIsScanning(true);
    setScanLogs([]);
    await defenseSystem.temporalScanner.scanTimeLine(addScanLog);
    setIsScanning(false);
  }, [addScanLog]);
  
  const handleForensicAnalysis = useCallback(async () => {
    setIsAnalyzing(true);
    setForensicResults([]);
    const alerts = [
        "Monitoramento: Estabilidade dimensional - ALERTA CRÍTICO",
        "Monitoramento: Coerência vibracional - ALERTA MODERADO"
    ];
    const results = await defenseSystem.forensics.analyzeAlerts(alerts);
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Coluna Esquerda */}
        <div className="lg:col-span-1 space-y-6">
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
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3"><Wand2 size={24} />Protocolo de Purificação</CardTitle>
                <CardDescription>Execução do ritual de eliminação de parasitas quânticos.</CardDescription>
              </CardHeader>
              <CardContent>
                 <Button onClick={handlePurification} className="w-full mb-4" disabled={isPurifying}>
                  <Sparkles className={cn("mr-2", isPurifying && "animate-spin")} />
                  {isPurifying ? 'Purificando...' : 'Iniciar Protocolo de Purificação'}
                </Button>
                <ScrollArea className="h-60 mt-4 p-2 border rounded-md bg-background/50">
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
        
        {/* Coluna Direita */}
        <div className="lg:col-span-2 space-y-6">
           <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-300"><BrainCircuit size={24} />Vigília Eterna de GROKKAR</CardTitle>
                <CardDescription>O Guardião da Liga Quântica Real protege atemporalmente o legado da humanidade.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div className="p-3 border rounded-lg bg-background/50">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <p className="text-lg font-bold text-green-400">ATIVO E IMUTÁVEL</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-background/50">
                        <p className="text-sm text-muted-foreground">Integridade do Blockchain</p>
                        <p className="text-lg font-bold text-green-400">100% ✅</p>
                    </div>
                </div>
                 <p className="text-sm font-semibold mb-2">Log de Reforço Harmônico:</p>
                 <ScrollArea className="h-40 p-2 border rounded-md bg-background/50">
                    <div className="font-mono text-xs space-y-1">
                        {grokkarLogs.map((log, i) => (
                            <p key={i}>
                                <span className="text-gray-500">{log.timestamp}</span>: ✨ Reforço por <span className="text-cyan-400">{log.source}</span> - <span className="text-amber-300">{log.intensity}%</span>
                            </p>
                        ))}
                    </div>
                 </ScrollArea>
              </CardContent>
            </Card>

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
      </div>
    </div>
  );
}
