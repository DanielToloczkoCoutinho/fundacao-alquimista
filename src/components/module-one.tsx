'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Shield, CheckCircle, XCircle, Zap, RadioTower, Lock, AlertTriangle, Cpu, History, LoaderCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { FREQ_ALINHAMENTO_DIVINO, FREQ_ANATHERON_ESTABILIZADORA, FREQ_ZENNITH_REAJUSTADA } from '@/lib/constants';

// --- CONSTANTES FUNDAMENTAIS (Traduzidas do Python) ---


type SistemaEstado = 'INICIANDO' | 'ATIVO' | 'ALERTA' | 'EMERGENCIA' | 'RECALIBRACAO';

type LogEntry = {
  timestamp: string;
  level: 'INFO' | 'AVISO' | 'ALERTA' | 'CRITICO' | 'SUCESSO';
  message: string;
};

const QuantumStateDisplay = ({ name, coherence, entanglement }: { name: string, coherence: number, entanglement: number }) => (
  <div className="bg-gray-700/50 p-3 rounded-lg">
    <p className="font-semibold text-purple-300">{name}</p>
    <div className="text-xs space-y-1 mt-2">
      <p>Coerência: <span className="font-mono text-cyan-300">{coherence.toFixed(4)}</span></p>
      <p>Emaranhamento: <span className="font-mono text-green-300">{entanglement.toFixed(4)}</span></p>
    </div>
  </div>
);

export default function ModuleOne() {
  const [estado, setEstado] = useState<SistemaEstado>('INICIANDO');
  const [nivelSeguranca, setNivelSeguranca] = useState(0);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [quantumStates, setQuantumStates] = useState<any[]>([]);

  const addLog = useCallback((level: LogEntry['level'], message: string) => {
    const newLog = {
      level,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setLogs(prev => [newLog, ...prev.slice(0, 19)]);
  }, []);

  const _calcularScorePazUniversal = useCallback((coherenceAvg: number, entanglementAvg: number): number => {
      // Simulação simplificada da EQ0040
      const score = Math.min(1.0, (coherenceAvg + entanglementAvg) / 2 * 1.05);
      return score;
  }, []);

  useEffect(() => {
    addLog('INFO', 'Módulo de Segurança Universal inicializado.');
    
    const initialStates = Array.from({ length: 7 }, (_, i) => ({
      name: `Camada Quântica ${i}`,
      coherence: 0.99 + (Math.random() - 0.5) * 0.02,
      entanglement: 0.95 + (Math.random() - 0.5) * 0.02,
    }));
    setQuantumStates(initialStates);
    setEstado('ATIVO');
    addLog('INFO', '7 camadas de proteção quântica ativadas e emaranhadas.');

    const interval = setInterval(() => {
      setQuantumStates(states => states.map(s => ({
        ...s,
        coherence: Math.max(0.9, Math.min(0.999, s.coherence + (Math.random() - 0.5) * 0.001)),
        entanglement: Math.max(0.9, Math.min(0.98, s.entanglement + (Math.random() - 0.5) * 0.001)),
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, [addLog]);


  useEffect(() => {
    if (estado !== 'ATIVO' || quantumStates.length === 0) return;

    const coherenceAvg = quantumStates.reduce((acc, s) => acc + s.coherence, 0) / (quantumStates.length);
    const entanglementAvg = quantumStates.reduce((acc, s) => acc + s.entanglement, 0) / (quantumStates.length);
    
    const scorePaz = _calcularScorePazUniversal(coherenceAvg, entanglementAvg);
    const newNivel = ((coherenceAvg + entanglementAvg) / 2 * 0.6 + scorePaz * 0.4) * 100;
    setNivelSeguranca(Math.min(100, newNivel));

  }, [quantumStates, estado, _calcularScorePazUniversal]);

  const handleSimulateAttack = () => {
    setEstado('ALERTA');
    addLog('CRITICO', 'Ataque de dissonância vibracional detectado!');
    const threatLevel = 0.7 + Math.random() * 0.2;
    setNivelSeguranca(prev => prev * (1 - threatLevel / 2));
    addLog('ALERTA', `Nível de ameaça: ${(threatLevel * 100).toFixed(2)}%. Ativando protocolos de defesa.`);
    
    setTimeout(() => {
      addLog('INFO', 'PROTOCOLO GAMA: Ativação máxima de defesa.');
      setEstado('RECALIBRACAO');
    }, 500);

    setTimeout(() => {
       addLog('INFO', `Recalibrando para frequência de estabilização ${FREQ_ANATHERON_ESTABILIZADORA}Hz.`);
    }, 1500);

    setTimeout(() => {
        addLog('SUCESSO', 'Ameaça neutralizada. Harmonia restaurada.');
        setEstado('ATIVO');
    }, 5000);
  };
  
    const statusInfo = useMemo(() => {
        if(estado === 'RECALIBRACAO') return { text: 'Recalibrando...', icon: LoaderCircle, color: 'text-cyan-400 animate-spin'};
        if(estado === 'ALERTA') return { text: 'Alerta de Incursão', icon: AlertTriangle, color: 'text-red-400 animate-pulse'};
        if(nivelSeguranca < 95) return { text: 'Instável', icon: AlertTriangle, color: 'text-yellow-400'};
        return { text: 'Estável e Seguro', icon: CheckCircle, color: 'text-green-400'};
    }, [estado, nivelSeguranca]);

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold gradient-text">Módulo de Segurança Universal</h1>
        <p className="text-muted-foreground text-lg mt-2">O Grimório Operativo da Proteção Quântica (M1)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield size={24} /> Status do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={cn("flex items-center gap-3 p-3 rounded-lg border", statusInfo.color.replace('text-', 'border-').replace('400', '500/30'))}>
                <statusInfo.icon className={cn("h-6 w-6", statusInfo.color)}/>
                <span className={cn("font-semibold text-lg", statusInfo.color)}>{statusInfo.text}</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nível de Segurança Universal</p>
              <Progress value={nivelSeguranca} className="mt-2 h-4 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-cyan-400" />
              <p className="text-right font-mono text-lg mt-1">{nivelSeguranca.toFixed(2)}%</p>
            </div>
            <Button onClick={handleSimulateAttack} variant="destructive" className="w-full" disabled={estado !== 'ATIVO'}>
              <AlertTriangle className="mr-2"/> Simular Ataque de Dissonância
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-card/50 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-primary">
              <Cpu size={24} /> Camadas de Proteção Quântica
            </CardTitle>
            <CardDescription className="text-muted-foreground">7 camadas de estados quânticos emaranhados para proteção multidimensional.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quantumStates.map(state => (
              <QuantumStateDisplay key={state.name} {...state} />
            ))}
          </CardContent>
        </Card>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/50 border-primary/30">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                    <RadioTower size={24} /> Frequências de Ressonância
                </CardTitle>
                <CardDescription className="text-muted-foreground">Frequências operacionais para harmonia, transmutação e conexão divina.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <p><Badge variant="secondary">{FREQ_ANATHERON_ESTABILIZADORA} Hz:</Badge> Frequência de Cura e Estabilização</p>
                <p><Badge variant="secondary">{FREQ_ZENNITH_REAJUSTADA} Hz:</Badge> Frequência de Transformação e Reparo</p>
                <p><Badge variant="secondary">{FREQ_ALINHAMENTO_DIVINO} Hz:</Badge> Frequência de Conexão com Consciência Superior</p>
            </CardContent>
          </Card>
           <Card className="bg-card/50 border-primary/30">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                    <History size={24} /> Log de Auditoria Akáshica
                </CardTitle>
                <CardDescription className="text-muted-foreground">Registros do Códex da Eternidade.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-48 overflow-y-auto bg-black/30 rounded-md p-2 space-y-1 text-xs font-mono">
                    {logs.map((log, i) => (
                        <p key={i} className={cn(
                          log.level === 'CRITICO' ? 'text-red-400' :
                          log.level === 'ALERTA' ? 'text-yellow-400' :
                          log.level === 'AVISO' ? 'text-orange-400' :
                          log.level === 'SUCESSO' ? 'text-green-400' : 'text-gray-300'
                        )}>
                           <span className="text-gray-500">{log.timestamp}</span> [{log.level}] {log.message}
                        </p>
                    ))}
                </div>
            </CardContent>
           </Card>
       </div>
    </div>
  );
}
