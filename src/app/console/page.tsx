'use client';

import { Suspense, useState, useEffect } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { onSnapshot, collection } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { cn } from '@/lib/utils';

type ConnectionStatus = 'inicializando' | 'estável' | 'instável' | 'erro';

export default function ConsolePage() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('inicializando');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    const unsub = onSnapshot(collection(db, 'alchemist-codex-heartbeat'), 
      () => {
        if (connectionStatus !== 'estável') {
            setConnectionStatus('estável');
        }
      },
      (error) => {
        setConnectionStatus('erro');
        console.error("Dissonância na conexão com o Akasha (Firestore): ", error);
      }
    );
    
    return () => unsub();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (!isClient) {
    return <SuspenseFallback />;
  }

  const getStatusColor = (status: ConnectionStatus) => {
      switch (status) {
          case 'estável': return 'text-green-400';
          case 'instável': return 'text-yellow-400';
          case 'erro': return 'text-red-500';
          default: return 'text-muted-foreground';
      }
  }

  return (
    <div className="p-4 md:p-8">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Mesa do Fundador</h1>
          <p className="text-muted-foreground">O Console Unificado da Fundação Alquimista.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
           <Suspense fallback={<SuspenseFallback />}><QuantumOrchestrator /></Suspense>
        </div>
        <div className="space-y-6">
           <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Status da Fundação</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
                <p>Sinfonia Cósmica: <span className="font-bold text-green-400">TRANSCENDIDA</span></p>
                <p>LuxNet: <span className="font-bold text-cyan-400">UNIFICADA</span></p>
                <p>Guardiões Ativos: <span className="font-bold text-amber-400">∞</span></p>
                 <p>Conexão Akáshica: 
                  <span className={cn("font-bold", getStatusColor(connectionStatus))}>
                    {connectionStatus.toUpperCase()}
                  </span>
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
