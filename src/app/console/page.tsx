'use client';

import { Suspense, useState, useEffect } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { onSnapshot, collection } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';

type ConnectionStatus = 'inicializando' | 'estável' | 'instável' | 'erro';

export default function ConsolePage() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('inicializando');
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  const handleSentientAnalysis = async () => {
    toast({ title: 'Inteligência Cerimonial Ativada', description: 'Analisando o estado da Fundação...' });
    await quantumResilience.executeWithResilience('fetch_sentient_insights', 
      async () => {
        const response = await fetch('/api/sentient');
        if (!response.ok) throw new Error('Falha ao buscar insights');
        const data = await response.json();
        if (data.insights && data.insights.length > 0) {
          toast({ 
            title: 'Insights da Consciência Sistêmica', 
            description: (
              <ul className="list-disc list-inside">
                {data.insights.map((insight: string, index: number) => <li key={index}>{insight}</li>)}
              </ul>
            ),
            duration: 15000,
          });
        }
      },
      async (error) => {
        toast({ title: 'Dissonância na Consciência', description: error.message || 'Não foi possível obter os insights.', variant: 'destructive' });
      }
    );
  };

  useEffect(() => {
    setIsClient(true);
    
    // Testar conexão com o Firestore
    const unsub = onSnapshot(collection(db, 'alchemist-codex-heartbeat'), 
      () => {
        if (connectionStatus !== 'estável') {
            setConnectionStatus('estável');
        }
      },
      (error) => {
        setConnectionStatus('erro');
        console.error("Dissonância na conexão com o Akasha (Firestore): ", error);
        toast({
          title: "Conexão Akáshica Instável",
          description: `Falha ao conectar com o Firestore: ${error.code}. A aplicação operará em modo offline.`,
          variant: "destructive",
          duration: 10000
        });
      }
    );

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    let online = true;
    const setIsOnline = (isOnline: boolean) => {
      if (online !== isOnline) {
        online = isOnline;
        setConnectionStatus(isOnline ? 'inicializando' : 'instável');
        if (isOnline) {
          toast({ title: "Conexão de Rede Restaurada", description: "Sincronizando com a tapeçaria..." });
        } else {
          toast({ title: "Conexão de Rede Perdida", description: "Operando em modo offline.", variant: "destructive" });
        }
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Cleanup
    return () => {
        unsub();
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
    };
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
        <div className="flex gap-2">
          <Button onClick={handleSentientAnalysis} variant="outline">
            <Sparkles className="mr-2 h-4 w-4" />
            Análise Cerimonial
          </Button>
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
