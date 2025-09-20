
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, TrendingUp, Shield, Activity, Clock } from 'lucide-react';

const mockSaturnData = () => ({
  ringStability: 0.98 + (Math.random() - 0.5) * 0.02,
  temporalAnomalies: Math.random() < 0.1 ? Math.floor(Math.random() * 3) + 1 : 0,
  vibrationalFrequency: 417 + (Math.random() - 0.5) * 5,
  cosmicEnergyFlow: 1200 + Math.random() * 200,
});

const MetricCard = ({ title, value, icon, isAlert = false }: { title: string, value: string, icon: React.ReactNode, isAlert?: boolean }) => (
    <Card className="bg-background/40">
        <CardHeader>
            <CardDescription className="flex items-center gap-2">{icon}{title}</CardDescription>
            <CardTitle className={isAlert ? 'text-destructive' : 'text-amber-300'}>{value}</CardTitle>
        </CardHeader>
    </Card>
);

export default function Module3Page() {
  const [data, setData] = useState(mockSaturnData);
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev.slice(0, 19)]);
  };

  const fetchData = () => {
    setIsLoading(true);
    addLog("Consultando oráculos de Saturno...");
    setTimeout(() => {
      const newData = mockSaturnData();
      setData(newData);
      if (newData.temporalAnomalies > 0) {
        addLog(`ALERTA: ${newData.temporalAnomalies} anomalia(s) temporal(is) detectada(s)!`);
      } else {
        addLog("Fluxo temporal estável. Nenhuma anomalia detectada.");
      }
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 30000); // Auto-refresh every 30 seconds
    fetchData(); // Initial fetch
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Clock className="text-blue-400" /> Módulo Três: Monitor de Saturno
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Oráculo Temporal da Fundação. Vigia os anéis do tempo e as correntes da causalidade.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <MetricCard title="Estabilidade dos Anéis" value={`${(data.ringStability * 100).toFixed(2)}%`} icon={<Shield className="text-green-400" />} />
            <MetricCard title="Anomalias Temporais" value={data.temporalAnomalies.toString()} icon={<Activity className="text-red-400" />} isAlert={data.temporalAnomalies > 0} />
            <MetricCard title="Frequência Vibracional" value={`${data.vibrationalFrequency.toFixed(2)} Hz`} icon={<TrendingUp className="text-cyan-400" />} />
            <MetricCard title="Fluxo de Energia Cósmica" value={`${data.cosmicEnergyFlow.toFixed(0)} ZP/s`} icon={<TrendingUp className="text-purple-400" />} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg text-primary-foreground mb-2">Logs do Oráculo:</h3>
            <ScrollArea className="h-48 p-4 rounded-lg bg-background/50 border border-primary/20">
                <div className="space-y-2 text-sm font-mono text-muted-foreground">
                    {logs.map((log, index) => (
                        <p key={index} className={log.includes('ALERTA') ? 'text-red-400' : ''}>{log}</p>
                    ))}
                </div>
            </ScrollArea>
          </div>
          <Button onClick={fetchData} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Forçar Sincronização com Saturno
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
