// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Shield, Zap } from 'lucide-react';

// Componente principal do Console de Status Operacional
const OperationalStatusPage = () => {
  const [systemStatus, setSystemStatus] = useState('OPERACIONAL');
  const [lastCheck, setLastCheck] = useState(new Date().toLocaleTimeString());
  const [log, setLog] = useState<string[]>(['Console de Status Operacional iniciado.']);

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus(Math.random() > 0.1 ? 'OPERACIONAL' : 'ALERTA');
      setLastCheck(new Date().toLocaleTimeString());
      setLog(prev => [...prev.slice(-5), `[${new Date().toLocaleTimeString()}] Verificação de status concluída.`]);
    }, 15000); // Verifica a cada 15 segundos

    return () => clearInterval(interval);
  }, []);

  const dummyData = [
    { name: 'T-5', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'T-4', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'T-3', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'T-2', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'T-1', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'NOW', uv: 2390, pv: 3800, amt: 2500 },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans p-6 overflow-auto space-y-6">
      <Card className="bg-gray-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-cyan-400">Console de Status Operacional</CardTitle>
          <CardDescription className="text-gray-400 text-center">Visão geral da saúde e performance da Fundação Alquimista.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-6">
            <div className="text-center">
                <p className="text-muted-foreground">Status do Sistema</p>
                <Badge variant={systemStatus === 'OPERACIONAL' ? 'default' : 'destructive'} className={systemStatus === 'OPERACIONAL' ? 'bg-green-600' : ''}>
                    <Shield className="mr-2 h-4 w-4" />
                    {systemStatus}
                </Badge>
            </div>
             <div className="text-center">
                <p className="text-muted-foreground">Última Verificação</p>
                <p className="font-mono">{lastCheck}</p>
            </div>
             <Button>
                <Zap className="mr-2 h-4 w-4" /> Forçar Verificação
             </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <Card className="bg-gray-800 rounded-lg shadow-lg p-6">
           <CardHeader>
                <CardTitle className="text-2xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <Activity />
                    Métricas de Coerência
                </CardTitle>
            </CardHeader>
             <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dummyData}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <CartesianGrid stroke="#444" strokeDasharray="5 5" />
                    <XAxis dataKey="name" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }}/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        
        <Card className="bg-gray-800 rounded-lg shadow-lg p-6">
             <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400 mb-2">Registro de Eventos do Console</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 bg-gray-900 p-4 rounded-lg overflow-y-auto font-mono text-sm h-64">
                {log.map((entry, index) => (
                <div key={index} className="text-gray-300">{entry}</div>
                ))}
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperationalStatusPage;
