'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Rocket, Map, Navigation, Shield, AlertTriangle, CheckCircle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type TripStatus = 'PLANEJADA' | 'EM_ANDAMENTO' | 'CONCLUIDA' | 'FALHA';

type Trip = {
  id: string;
  origem: string;
  destino: string;
  tripulacao: string[];
  status: TripStatus;
  progresso: number;
  anomalias: number;
  timestamp_inicio: string;
};

type NavigationState = 'IDLE' | 'PLANNING' | 'IN_TRANSIT' | 'CONCLUDING';

const Module21 = () => {
  const [viagens, setViagens] = useState<Record<string, Trip>>({});
  const [navigationState, setNavigationState] = useState<NavigationState>('IDLE');
  const [origem, setOrigem] = useState('Terra_Dimensao_Primaria');
  const [destino, setDestino] = useState('Setor_Aurora_Nova_Realidade');
  const [tripulacao, setTripulacao] = useState('Anatheron, ZENNITH');
  const { toast } = useToast();

  const addTrip = useCallback((trip: Trip) => {
    setViagens(prev => ({ ...prev, [trip.id]: trip }));
  }, []);

  const handleStartTrip = async () => {
    if (!origem || !destino || !tripulacao) {
      toast({ variant: 'destructive', title: 'Dados Incompletos', description: 'Origem, destino e tripulação são necessários.' });
      return;
    }
    setNavigationState('PLANNING');
    toast({ title: 'Planejando Viagem Interdimensional...', description: `Calculando rota de ${origem} para ${destino}.` });

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const tripId = `TRIP-${Date.now()}`;
    const newTrip: Trip = {
      id: tripId,
      origem,
      destino,
      tripulacao: tripulacao.split(',').map(t => t.trim()),
      status: 'EM_ANDAMENTO',
      progresso: 0,
      anomalias: 0,
      timestamp_inicio: new Date().toISOString(),
    };
    
    addTrip(newTrip);
    toast({ title: 'Viagem Iniciada!', description: `Navegando para ${destino}.` });
    setNavigationState('IN_TRANSIT');

    // Simula o progresso da viagem
    const interval = setInterval(() => {
      setViagens(prev => {
        const currentTrip = prev[tripId];
        if (!currentTrip || currentTrip.progresso >= 100) {
          clearInterval(interval);
          setNavigationState('CONCLUDING');
          toast({ title: `Chegada em ${destino}`, description: 'Viagem concluída com sucesso.' });
          
          setTimeout(() => {
            setViagens(p => ({...p, [tripId]: {...p[tripId], status: 'CONCLUIDA'}}));
            setNavigationState('IDLE');
          }, 2000);

          return prev;
        }
        
        const newProgress = Math.min(100, currentTrip.progresso + 10);
        const hasAnomaly = Math.random() < 0.1;
        
        return {
          ...prev,
          [tripId]: {
            ...currentTrip,
            progresso: newProgress,
            anomalias: currentTrip.anomalias + (hasAnomaly ? 1 : 0),
          }
        };
      });
    }, 1500);
  };
  
  const stateIsLoading = useMemo(() => navigationState !== 'IDLE', [navigationState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">
            <Rocket /> Módulo 21: Navegação Interdimensional e Exploração de Realidades
          </CardTitle>
          <CardDescription>
            Interface para planejar, iniciar e monitorar viagens seguras através de múltiplas dimensões e realidades.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Map /> Planejamento de Viagem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Origem</label>
              <Input value={origem} onChange={e => setOrigem(e.target.value)} disabled={stateIsLoading} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Destino</label>
              <Input value={destino} onChange={e => setDestino(e.target.value)} disabled={stateIsLoading} />
            </div>
             <div>
              <label className="text-sm font-medium text-muted-foreground">Tripulação (separada por vírgula)</label>
              <Input value={tripulacao} onChange={e => setTripulacao(e.target.value)} disabled={stateIsLoading} />
            </div>
            <Button onClick={handleStartTrip} disabled={stateIsLoading} className="w-full">
              {stateIsLoading ? <LoaderCircle className="animate-spin mr-2" /> : <Navigation className="mr-2" />}
              {stateIsLoading ? 'Em Missão...' : 'Iniciar Viagem'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><History /> Registro de Viagens</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Destino</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progresso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.keys(viagens).length === 0 ? (
                    <TableRow><TableCell colSpan={3} className="h-24 text-center text-muted-foreground">Nenhuma viagem registrada.</TableCell></TableRow>
                  ) : Object.values(viagens).reverse().map(trip => (
                    <TableRow key={trip.id}>
                      <TableCell className="font-semibold">{trip.destino}</TableCell>
                      <TableCell>
                        <Badge variant={trip.status === 'CONCLUIDA' ? 'default' : (trip.status === 'FALHA' ? 'destructive' : 'secondary')} className={cn(trip.status === 'CONCLUIDA' && "bg-green-600/80")}>
                           {trip.status === 'EM_ANDAMENTO' && <LoaderCircle className="mr-1 h-3 w-3 animate-spin"/>}
                           {trip.status}
                        </Badge>
                      </TableCell>
                       <TableCell className="font-mono">{trip.progresso}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Module21;
