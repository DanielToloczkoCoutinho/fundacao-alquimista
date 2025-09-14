'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, AlertTriangle, CheckCircle, GitBranch } from 'lucide-react';
import { modulesMetadata } from '@/lib/modules-metadata';
import { quantumResilience } from '@/lib/quantum-resilience';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

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

const CRITICAL_MODULES_REQUIRING_APPROVAL = ['M105'];
const APPROVAL_OPERATORS = ['Zennith', 'M45'];

export default function ModuleNinePage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [operator] = useState('M9'); // Simula o operador M9 logado

  const fetchData = async () => {
    setIsLoading(true);
    await quantumResilience.executeWithResilience(
      'fetch_nexus_dashboard',
      async () => {
        const response = await fetch('/api/dashboard');
        if (!response.ok) throw new Error(`Falha na sincronização: ${response.statusText}`);
        const dashboardData = await response.json();
        setData(dashboardData);
      },
      async () => {
        setError('Dissonância na API do Nexus. Não foi possível carregar os dados.');
      }
    ).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Polling para simular tempo real
    return () => clearInterval(interval);
  }, []);

  const handleAction = async (type: 'UPDATE_STATUS' | 'APPROVE_MODULE', payload: any) => {
    await quantumResilience.executeWithResilience(
      `nexus_action_${type}`,
      async () => {
        const response = await fetch('/api/dashboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, payload: { ...payload, operator } }),
        });
        if (!response.ok) throw new Error('Ação não autorizada ou falhou.');
        const updatedData = await response.json();
        setData(updatedData); // Atualiza o estado local com a resposta do servidor
      }
    );
  };

  const getModuleApprovalStatus = (moduleCode: string) => {
    if (!data) return { isApproved: false, needed: [], approvers: [] };
    const required = APPROVAL_OPERATORS;
    const approvers = data.approvals[moduleCode] || [];
    const isApproved = required.every(op => approvers.includes(op));
    const needed = required.filter(op => !approvers.includes(op));
    return { isApproved, needed, approvers };
  };

  if (isLoading && !data) {
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
              <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <GitBranch className="text-purple-400" /> Módulo 9 — Painel de Controle do Nexus
              </CardTitle>
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {modulesMetadata.map(({ code, title, emoji }) => {
                  const status = data?.energyStatus[code] || 'inativo';
                  const isCritical = CRITICAL_MODULES_REQUIRING_APPROVAL.includes(code);
                  const approvalStatus = isCritical ? getModuleApprovalStatus(code) : { isApproved: true, needed: [] };
                  const finalStatus = isCritical && !approvalStatus.isApproved ? 'aguardando_aprovacao' : status;

                  return (
                    <Card
                        key={code}
                        className={`p-4 text-center transition-all duration-300 flex flex-col justify-between border ${
                        finalStatus === 'ativo' ? 'bg-green-800/50 border-green-500' :
                        finalStatus === 'aguardando_aprovacao' ? 'bg-yellow-800/50 border-yellow-500 animate-pulse' :
                        'bg-gray-800/50 border-gray-600'
                        }`}
                    >
                      <Link href={`/module-${code.replace('M', '').toLowerCase()}`} passHref>
                        <div className="cursor-pointer">
                            <div className="text-3xl mb-2">{emoji}</div>
                            <h3 className="text-xl font-semibold font-mono">{code}</h3>
                            <p className="text-xs text-muted-foreground mb-2 h-8">{title}</p>
                            <Badge variant={finalStatus === 'ativo' ? 'default' : 'secondary'} className={finalStatus === 'aguardando_aprovacao' ? 'bg-yellow-500' : ''}>
                               {finalStatus.replace('_', ' ')}
                            </Badge>
                        </div>
                      </Link>
                        
                        {isCritical && finalStatus === 'aguardando_aprovacao' && (
                             <div className="text-xs mt-2 text-yellow-300 space-y-1">
                                <p>Aprovações Necessárias: {approvalStatus.needed.join(', ')}</p>
                                <Button size="sm" className="h-7" onClick={() => handleAction('APPROVE_MODULE', { module: code })}>Aprovar como {operator}</Button>
                             </div>
                        )}
                        
                        <div className="mt-3 space-x-1">
                            <Button size="sm" variant="ghost" onClick={() => handleAction('UPDATE_STATUS', { code, state: 'ativo' })} className="h-7 px-2 text-xs bg-green-500/20 hover:bg-green-700">Ativar</Button>
                            <Button size="sm" variant="ghost" onClick={() => handleAction('UPDATE_STATUS', { code, state: 'inativo' })} className="h-7 px-2 text-xs bg-red-500/20 hover:bg-red-700">Desativar</Button>
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
                    <span className="text-foreground/80">: </span>
                    <span className="text-white">{entry.action}</span>
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
