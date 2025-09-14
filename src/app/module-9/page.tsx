
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { modulesMetadata } from '@/lib/modules-metadata';
import { Loader2 } from 'lucide-react';

interface LogEntry {
  _id: string;
  timestamp: string;
  module: string;
  action: string;
  operator: string;
}

export default function ModuleNinePage() {
  const [status, setStatus] = useState<Record<string, string>>({});
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    // A real implementation would use WebSocket or polling
    // For now, we simulate an initial fetch.
    const initialStatus: Record<string, string> = {};
    modulesMetadata.forEach(mod => {
      initialStatus[mod.code] = 'ativo';
    });
    setStatus(initialStatus);

    // Fetch initial logs (mock)
    setLogs([
      { _id: '1', timestamp: new Date().toISOString(), module: 'M307', action: 'ativo', operator: 'System' },
      { _id: '2', timestamp: new Date().toISOString(), module: 'M0', action: 'ativo', operator: 'System' },
    ]);
  }, []);

  const intervene = (code: string, action: string) => {
    // In a real app, this would send requests to the backend API
    console.log(`Intervening: ${operator} -> ${module} -> ${action}`);
    const operator = 'M9';
    const module = code;
    
    // Update local state immediately for responsiveness
    setStatus(prev => ({ ...prev, [code]: action }));
    const newLog: LogEntry = { _id: Date.now().toString(), timestamp: new Date().toISOString(), module, action, operator };
    setLogs(prev => [newLog, ...prev]);
  };

  return (
    <div className="p-6 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
          <CardHeader>
              <CardTitle className="text-4xl gradient-text">Módulo 9 — Painel de Controle do Nexus</CardTitle>
              <CardDescription className="text-lg">Interface de intervenção manual para o fluxo energético da Fundação.</CardDescription>
          </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card/50 purple-glow">
           <CardHeader>
                <CardTitle className="text-2xl">Status dos Módulos</CardTitle>
           </CardHeader>
           <CardContent>
            <ScrollArea className="h-[70vh]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {modulesMetadata.map(({ code }) => (
                  <Card
                    key={code}
                    className={`p-4 text-center transition-all duration-300 ${
                      status[code] === 'ativo' ? 'bg-green-800/50 border-green-500' : 'bg-gray-800/50 border-gray-600'
                    }`}
                  >
                    <h3 className="text-xl font-semibold font-mono">{code}</h3>
                    <p className="text-sm capitalize">{status[code] || 'inativo'}</p>
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
                ))}
              </div>
            </ScrollArea>
           </CardContent>
        </Card>
        
        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle className="text-2xl">Logs de Intervenção</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[70vh] bg-black/30 p-3 rounded-md">
              <ul className="text-xs space-y-2 font-mono">
                {logs.map((entry) => (
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
