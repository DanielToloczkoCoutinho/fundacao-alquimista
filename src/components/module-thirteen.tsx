
'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Map, Scan, Activity, SlidersHorizontal, AlertTriangle, CheckCircle, LoaderCircle, GitCommit } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type MapLog = {
  id: string;
  timestamp: string;
  systemId: string;
  resonanceEnergy: number;
  isAnomaly: boolean;
};

type ScanState = 'IDLE' | 'SCANNING' | 'ANALYZING' | 'HARMONIZING';

const ModuleThirteen = () => {
  const [scanState, setScanState] = useState<ScanState>('IDLE');
  const [systemId, setSystemId] = useState('Sistema_Estelar_Sirius');
  const [mapLog, setMapLog] = useState<MapLog[]>([]);
  const [currentMap, setCurrentMap] = useState<MapLog | null>(null);

  const addLog = useCallback((log: Omit<MapLog, 'id' | 'timestamp'>) => {
    const newLog = { ...log, id: `MAP-${Date.now()}`, timestamp: new Date().toISOString() };
    setMapLog(prev => [newLog, ...prev].slice(0, 50));
    setCurrentMap(newLog);
    return newLog;
  }, []);

  const handleScan = () => {
    if (!systemId) return;
    setScanState('SCANNING');
    setCurrentMap(null);
    setTimeout(() => {
      setScanState('ANALYZING');
      const resonanceEnergy = Math.random() * 10; // Simulate resonance energy
      const isAnomaly = resonanceEnergy < 1.0 || resonanceEnergy > 9.0;
      const log = addLog({ systemId, resonanceEnergy, isAnomaly });
      
      setTimeout(() => {
        if (isAnomaly) {
            setScanState('HARMONIZING');
            setTimeout(() => {
                const harmonizedLog = {...log, resonanceEnergy: 5.0, isAnomaly: false };
                setCurrentMap(harmonizedLog);
                setScanState('IDLE');
            }, 1500);
        } else {
             setScanState('IDLE');
        }
      }, 1500);

    }, 2000);
  };
  
  const StatusIndicator = useMemo(() => {
    switch(scanState) {
        case 'SCANNING':
            return { icon: LoaderCircle, text: "Escaneando Campo Energético...", color: "text-blue-400 animate-spin" };
        case 'ANALYZING':
            return { icon: LoaderCircle, text: "Analisando Anomalias...", color: "text-purple-400 animate-spin" };
        case 'HARMONIZING':
            return { icon: LoaderCircle, text: "Harmonizando Frequências...", color: "text-orange-400 animate-spin" };
        case 'IDLE':
        default:
             if (currentMap?.isAnomaly) {
                 return { icon: AlertTriangle, text: "Anomalia Detectada!", color: "text-red-400" };
             }
             if (currentMap) {
                 return { icon: CheckCircle, text: "Sistema Estável", color: "text-green-400" };
             }
             return { icon: Map, text: "Aguardando Escaneamento", color: "text-gray-400" };
    }
  }, [scanState, currentMap]);


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
            <Activity /> Módulo 13: Mapeamento de Frequências Energéticas
          </CardTitle>
          <CardDescription>
            Interface para sintonizar, escanear e harmonizar as vibrações do cosmos, detectando anomalias energéticas.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><SlidersHorizontal /> Painel de Controle</CardTitle>
                <CardDescription>Defina o sistema alvo e inicie o mapeamento.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-muted-foreground">ID do Sistema Alvo</label>
                    <Input 
                        value={systemId} 
                        onChange={(e) => setSystemId(e.target.value)} 
                        placeholder="Ex: Sistema_Estelar_Sirius"
                        disabled={scanState !== 'IDLE'}
                    />
                </div>
                 <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                    <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                    <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                 </div>
                <Button onClick={handleScan} disabled={scanState !== 'IDLE'} className="w-full">
                    <Scan className="mr-2" />
                    {scanState === 'IDLE' ? 'Iniciar Mapeamento Energético' : 'Processando...'}
                </Button>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Resultados do Último Mapeamento</CardTitle>
                <CardDescription>Visualização dos dados da análise mais recente.</CardDescription>
            </CardHeader>
            <CardContent>
                { !currentMap ? (
                     <div className="flex items-center justify-center h-48 text-muted-foreground">
                        <p>Nenhum mapa ativo. Inicie um escaneamento.</p>
                     </div>
                ) : (
                    <div className="space-y-3 font-mono text-sm">
                        <div className="flex justify-between p-2 rounded bg-background/50"><span>ID do Sistema:</span> <span className="font-bold">{currentMap.systemId}</span></div>
                        <div className="flex justify-between p-2 rounded bg-background/50"><span>Energia de Ressonância:</span> <span className="font-bold">{currentMap.resonanceEnergy.toFixed(4)}</span></div>
                        <div className="flex justify-between p-2 rounded bg-background/50">
                            <span>Status da Anomalia:</span> 
                            <Badge variant={currentMap.isAnomaly ? 'destructive' : 'default'} className={cn(!currentMap.isAnomaly && 'bg-green-600/80')}>
                                {currentMap.isAnomaly ? 'ANOMALIA DETECTADA' : 'SAUDÁVEL'}
                            </Badge>
                        </div>
                         <div className="flex justify-between p-2 rounded bg-background/50"><span>Timestamp:</span> <span className="font-bold text-xs">{new Date(currentMap.timestamp).toLocaleString()}</span></div>
                    </div>
                )}
            </CardContent>
        </Card>

      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><GitCommit /> Log de Mapeamentos Energéticos</CardTitle>
          <CardDescription>Registro de todos os escaneamentos e análises de anomalia realizados.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>ID do Sistema</TableHead>
                  <TableHead>Energia de Ressonância</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mapLog.length === 0 ? (
                  <TableRow><TableCell colSpan={4} className="text-center h-24">Nenhum mapeamento registrado.</TableCell></TableRow>
                ) : mapLog.map(log => (
                  <TableRow key={log.id} className={cn(log.isAnomaly && "bg-destructive/10")}>
                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{log.systemId}</TableCell>
                    <TableCell className="font-mono">{log.resonanceEnergy.toFixed(4)}</TableCell>
                    <TableCell>
                      <Badge variant={log.isAnomaly ? "destructive" : "secondary"}>
                        {log.isAnomaly ? "Anomalia" : "Saudável"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleThirteen;
