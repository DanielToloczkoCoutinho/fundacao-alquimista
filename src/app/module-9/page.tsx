'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, AlertTriangle, CheckCircle } from 'lucide-react';
import { modulesMetadata } from '@/lib/modules-metadata';

// Mock data types, assuming they come from an API
interface EnergyStatus {
  [key: string]: 'ativo' | 'inativo' | 'aguardando_aprovacao';
}
interface ApprovalStatus {
  [key: string]: string[];
}
interface LogEntry {
  _id: string;
  timestamp: string;
  module: string;
  action: string;
  operator: string;
}
interface DashboardData {
  energyStatus: EnergyStatus;
  approvals: ApprovalStatus;
  logs: LogEntry[];
}

const CRITICAL_MODULES_REQUIRING_APPROVAL = ['M105', 'M31', 'M98'];
const APPROVAL_OPERATORS = ['M29', 'M45'];

export default function ModuleNinePage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [operator] = useState('M9'); // Assume M9 is the logged-in operator for this panel

  const fetchData = async () => {
    try {
      // In a real app, this would fetch from a single dashboard endpoint
      // We simulate it with separate fetches for demonstration
      // const response = await fetch('/api/dashboard');
      // const dashboardData = await response.json();
      // setData(dashboardData);
      
      // Mocked data fetching
      const energyStatus: EnergyStatus = {};
      modulesMetadata.forEach(mod => {
        energyStatus[mod.code] = Math.random() > 0.3 ? 'ativo' : 'inativo';
      });
       const approvals: ApprovalStatus = {
         'M105': ['M29']
       };
       energyStatus['M105'] = 'aguardando_aprovacao';

       const logs: LogEntry[] = [
         { _id: '1', timestamp: new Date().toISOString(), module: 'M307', action: 'ativo', operator: 'System' },
         { _id: '2', timestamp: new Date().toISOString(), module: 'M0', action: 'ativo', operator: 'System' },
       ];

      setData({ energyStatus, approvals, logs });

    } catch (err) {
      setError('Falha ao sincronizar com o Nexus Central.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // const interval = setInterval(fetchData, 5000); // Polling every 5 seconds
    // return () => clearInterval(interval);
  }, []);

  const intervene = async (code: string, action: 'ativo' | 'inativo') => {
    // In a real app, you'd get the token and send it in the header
    // const token = localStorage.getItem('authToken');
    // const operator = jwtDecode(token).operator;
    
    setData(prev => {
        if (!prev) return null;
        const newLogs: LogEntry = {
            _id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            module: code,
            action: action,
            operator: operator
        };
        const newEnergyStatus = { ...prev.energyStatus, [code]: action };
        return {
            ...prev,
            energyStatus: newEnergyStatus,
            logs: [newLogs, ...prev.logs]
        };
    });
  };

  const getModuleApprovalStatus = (moduleCode: string) => {
    const required = APPROVAL_OPERATORS;
    const approvers = data?.approvals[moduleCode] || [];
    const needed = required.filter(op => !approvers.includes(op));
    const isApproved = needed.length === 0;
    return { isApproved, needed, approvers };
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="ml-4 text-xl">Sincronizando com o Nexus Central...</p>
      </div>
    );
  }
  
  if (error) {
     return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-destructive">
        <AlertTriangle className="h-16 w-16 mr-4" />
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
          <CardHeader>
              <CardTitle className="text-4xl gradient-text">Módulo 9 — Painel de Controle do Nexus</CardTitle>
              <CardDescription className="text-lg">Dashboard Global e interface de intervenção manual para o fluxo energético da Fundação.</CardDescription>
          </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card/50 purple-glow">
           <CardHeader>
                <CardTitle className="text-2xl">Status Energético dos Módulos</CardTitle>
           </CardHeader>
           <CardContent>
            <ScrollArea className="h-[70vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {modulesMetadata.map(({ code, title, emoji }) => {
                  const status = data?.energyStatus[code] || 'inativo';
                  const isCritical = CRITICAL_MODULES_REQUIRING_APPROVAL.includes(code);
                  const approvalStatus = isCritical ? getModuleApprovalStatus(code) : { isApproved: true, needed: [], approvers: [] };

                  return (
                    <Card
                        key={code}
                        className={`p-4 text-center transition-all duration-300 flex flex-col justify-between ${
                        status === 'ativo' && approvalStatus.isApproved ? 'bg-green-800/50 border-green-500' :
                        status === 'aguardando_aprovacao' ? 'bg-yellow-800/50 border-yellow-500 animate-pulse' :
                        'bg-gray-800/50 border-gray-600'
                        }`}
                    >
                        <div>
                            <div className="text-3xl mb-2">{emoji}</div>
                            <h3 className="text-xl font-semibold font-mono">{code}</h3>
                            <p className="text-xs text-muted-foreground mb-2">{title}</p>
                            <p className="text-sm capitalize font-bold">
                               {status === 'aguardando_aprovacao' ? 'Aguardando Aprovação' : status}
                            </p>
                        </div>
                        
                        {isCritical && status === 'aguardando_aprovacao' && (
                             <div className="text-xs mt-2 text-yellow-300">
                                <p>Aprovações: {approvalStatus.approvers.join(', ') || 'Nenhuma'}</p>
                                <p>Necessário: {approvalStatus.needed.join(', ')}</p>
                             </div>
                        )}
                        
                        <div className="mt-3 space-x-1">
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => intervene(code, 'ativo')}
                                className="h-7 px-2 text-xs bg-green-500/20 hover:bg-green-700"
                            >
                                Ativar
                            </Button>
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => intervene(code, 'inativo')}
                                className="h-7 px-2 text-xs bg-red-500/20 hover:bg-red-700"
                            >
                                Desativar
                            </Button>
                        </div>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
           </CardContent>
        </Card>
        
        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle className="text-2xl">Logs de Intervenção e Decisão</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[70vh] bg-black/30 p-3 rounded-md">
              <ul className="text-xs space-y-2 font-mono">
                {data?.logs.map((entry) => (
                  <li key={entry._id}>
                    <span className="text-cyan-400">[{new Date(entry.timestamp).toLocaleTimeString()}]</span>
                    <span className="text-amber-400"> {entry.operator}</span>
                    <span className="text-foreground/80"> → </span>
                    <span className="text-purple-300">{entry.module}</span>
                    <span className="text-foreground/80"> → </span>
                    <span className={entry.action === 'ativo' ? 'text-green-400' : 'text-red-400'}>{entry.action}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
