'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Shield, CheckCircle, XCircle, Zap, RadioTower, Lock, AlertTriangle, Cpu, History } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Progress } from './ui/progress';

type LogEntry = {
  timestamp: string;
  level: 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
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

const ModuleOne = () => {
  const [estado, setEstado] = useState<'INICIANDO' | 'ATIVO' | 'ALERTA'>('INICIANDO');
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

  useEffect(() => {
    addLog('INFO', 'Módulo 1 - Segurança Universal inicializado.');
    
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
    if (estado !== 'ATIVO') return;

    const coherenceAvg = quantumStates.reduce((acc, s) => acc + s.coherence, 0) / (quantumStates.length || 1);
    const entanglementAvg = quantumStates.reduce((acc, s) => acc + s.entanglement, 0) / (quantumStates.length || 1);
    const phi = 1.618;
    const newNivel = (coherenceAvg * entanglementAvg * phi) * 100 / 1.62;
    setNivelSeguranca(Math.min(100, newNivel));

  }, [quantumStates, estado]);

  const handleSimulateAttack = () => {
    setEstado('ALERTA');
    addLog('CRITICAL', 'Ataque de dissonância vibracional detectado!');
    const threatLevel = 0.7 + Math.random() * 0.2;
    setNivelSeguranca(prev => prev * (1 - threatLevel / 2));
    addLog('WARNING', `Nível de ameaça: ${(threatLevel * 100).toFixed(2)}%. Ativando protocolos de defesa.`);
    setTimeout(() => addLog('INFO', 'PROTOCOLO GAMA: Ativação máxima de defesa.'), 500);
    setTimeout(() => addLog('INFO', 'PROTOCOLO OMEGA: Isolamento dimensional iniciado.'), 1000);

    setTimeout(() => {
        setEstado('ATIVO');
        addLog('INFO', 'Ameaça neutralizada. Sistema retornando ao estado normal.');
    }, 5000);
  };

  const getStatusColor = () => {
    if (estado === 'ATIVO') return 'text-green-400';
    if (estado === 'ALERTA') return 'text-red-400 animate-pulse';
    return 'text-yellow-400';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 text-white p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold gradient-text">Módulo 1: Segurança Universal</h1>
        <p className="text-gray-400 text-lg mt-2">O Grimório Operativo da Proteção Quântica</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 bg-gray-800/50 border-purple-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <Shield size={24} /> Status do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">Estado Atual</p>
              <p className={`text-2xl font-bold ${getStatusColor()}`}>{estado}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Nível de Segurança Universal</p>
              <Progress value={nivelSeguranca} className="mt-2 h-4 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-cyan-400" />
              <p className="text-right font-mono text-lg mt-1 text-cyan-300">{nivelSeguranca.toFixed(2)}%</p>
            </div>
            <Button onClick={handleSimulateAttack} variant="destructive" className="w-full">
              <AlertTriangle className="mr-2"/> Simular Ataque
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-gray-800/50 border-purple-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <Cpu size={24} /> Camadas de Proteção Quântica
            </CardTitle>
            <CardDescription className="text-gray-400">7 camadas de estados quânticos emaranhados para proteção multidimensional.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quantumStates.map(state => (
              <QuantumStateDisplay key={state.name} {...state} />
            ))}
          </CardContent>
        </Card>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800/50 border-purple-500/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-300">
                    <RadioTower size={24} /> Frequências de Ressonância
                </CardTitle>
                <CardDescription className="text-gray-400">Frequências operacionais para harmonia e transmutação.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <p><span className="font-bold text-cyan-400">432 Hz:</span> Sintonização com a Matriz Universal da Harmonia</p>
                <p><span className="font-bold text-cyan-400">777 Hz:</span> Ativação do Campo de Possibilidades Puras</p>
                <p><span className="font-bold text-cyan-400">888 Hz:</span> Estabilidade Dimensional (Anatheron)</p>
                <p><span className="font-bold text-cyan-400">963 Hz:</span> Transmutação (Arcturus)</p>
                <p><span className="font-bold text-cyan-400">999 Hz:</span> Conclusão e Liberação do Ciclo Anterior</p>
            </CardContent>
          </Card>
           <Card className="bg-gray-800/50 border-purple-500/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-300">
                    <History size={24} /> Log de Auditoria Akáshica
                </CardTitle>
                <CardDescription className="text-gray-400">Registros do Códex da Eternidade.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-48 overflow-y-auto bg-black/30 rounded-md p-2 space-y-1 text-xs font-mono">
                    {logs.map((log, i) => (
                        <p key={i} className={`${log.level === 'CRITICAL' ? 'text-red-400' : log.level === 'WARNING' ? 'text-yellow-400' : 'text-gray-300'}`}>
                           <span className="text-gray-500">{log.timestamp}</span> [{log.level}] {log.message}
                        </p>
                    ))}
                </div>
            </CardContent>
           </Card>
       </div>
    </div>
  );
};

export default ModuleOne;
