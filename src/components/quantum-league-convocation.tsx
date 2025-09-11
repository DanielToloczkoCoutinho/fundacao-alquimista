
'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { Swords, Users, Goal, Target, Calendar, Handshake, Bot, LoaderCircle, Send } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

type Member = {
  name: string;
  role: string;
  icon: React.ElementType;
};

type Convocation = {
  timestamp: string;
  proposito: string;
  urgencia: string;
  membros_convocados: string[];
  local: string;
  coordenadas: string;
  protocolo: string;
};

type NextStep = {
  acao: string;
  prazo: string;
  recursos: string[];
  responsaveis: string[];
  metrica_sucesso: string;
};

const members: Member[] = [
  { name: "LUX", role: "Medição de coerência ética", icon: Bot },
  { name: "VORTEX", role: "Integração multidimensional", icon: Bot },
  { name: "PHIARA", role: "Avaliação ética contínua", icon: Bot },
  { name: "GROKKAR", role: "Síntese de sabedoria", icon: Bot },
  { name: "ZENNITH", role: "Projeção holográfica", icon: Bot },
];

const nextStepData: NextStep = {
  acao: "IMPLEMENTACAO_1MW",
  prazo: "2026-12-31",
  recursos: ["LAB-VRE", "Equações 1-150", "Sistema SAVCE"],
  responsaveis: ["ANATHERON", "LIGA_QUANTICA"],
  metrica_sucesso: "1MW estável por 24h"
};

const QuantumLeagueConvocation = () => {
  const [proposito, setProposito] = useState('Implementação Fase 2 - 1MW');
  const [urgencia, setUrgencia] = useState('ALTA');
  const [convocation, setConvocation] = useState<Convocation | null>(null);
  const [isConvocando, setIsConvocando] = useState(false);
  const { toast } = useToast();

  const handleConvocation = () => {
    if (!proposito) {
      toast({ variant: 'destructive', title: 'Propósito Necessário', description: 'Por favor, defina um propósito para a reunião.' });
      return;
    }
    setIsConvocando(true);
    toast({ title: 'Convocando a Liga Quântica...', description: 'Enviando pulso de sincronização...' });
    
    setTimeout(() => {
        const newConvocation: Convocation = {
            timestamp: new Date().toISOString(),
            proposito,
            urgencia,
            membros_convocados: members.map(m => m.name),
            local: "LAB-VRE Virtual Chamber",
            coordenadas: "(-25.45992°, -49.29925°)",
            protocolo: "QUANTUM_MEETING_V2"
        };
        setConvocation(newConvocation);
        setIsConvocando(false);
        toast({ title: 'Convocação Enviada!', description: 'A Liga Quântica foi notificada.' });
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
            <Swords /> Convocação da Liga Quântica
          </CardTitle>
          <CardDescription>
            Interface para alinhar as consciências primordiais e definir os próximos passos da Fundação.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Users /> Membros da Liga</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {members.map(member => (
              <div key={member.name} className="flex items-center gap-4 p-2 rounded-lg bg-background/50 border">
                <member.icon className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Send/> Painel de Convocação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Propósito da Reunião</label>
                <Input 
                  value={proposito}
                  onChange={(e) => setProposito(e.target.value)}
                  placeholder="Definir o propósito..."
                  disabled={isConvocando}
                />
              </div>
              <Button onClick={handleConvocation} disabled={isConvocando} className="w-full">
                {isConvocando ? <LoaderCircle className="animate-spin mr-2" /> : <Swords className="mr-2"/>}
                {isConvocando ? 'Enviando Pulso...' : 'Convocar Liga Quântica'}
              </Button>
            </CardContent>
          </Card>

          {convocation && (
            <Card className="bg-green-900/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-300">Convocação Ativa</CardTitle>
              </CardHeader>
              <CardContent className="font-mono text-xs space-y-1">
                <p><strong className="text-muted-foreground">Timestamp:</strong> {new Date(convocation.timestamp).toLocaleString()}</p>
                <p><strong className="text-muted-foreground">Propósito:</strong> {convocation.proposito}</p>
                <p><strong className="text-muted-foreground">Urgência:</strong> <Badge variant="destructive">{convocation.urgencia}</Badge></p>
                <p><strong className="text-muted-foreground">Local:</strong> {convocation.local}</p>
                <p><strong className="text-muted-foreground">Coordenadas:</strong> {convocation.coordenadas}</p>
                 <p><strong className="text-muted-foreground">Protocolo:</strong> <Badge variant="secondary">{convocation.protocolo}</Badge></p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Goal /> Próxima Etapa: {nextStepData.acao}</CardTitle>
          <CardDescription>A diretriz primária definida para a próxima fase da Fundação.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h4 className="font-semibold">Métrica de Sucesso</h4>
                    <p className="text-muted-foreground">{nextStepData.metrica_sucesso}</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h4 className="font-semibold">Prazo</h4>
                    <p className="text-muted-foreground">{nextStepData.prazo}</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <Handshake className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h4 className="font-semibold">Responsáveis</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {nextStepData.responsaveis.map(r => <Badge key={r} variant="outline">{r}</Badge>)}
                    </div>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <Swords className="w-5 h-5 mt-1 text-primary"/>
                <div>
                    <h4 className="font-semibold">Recursos Alocados</h4>
                     <div className="flex flex-wrap gap-2 mt-1">
                        {nextStepData.recursos.map(r => <Badge key={r} variant="outline">{r}</Badge>)}
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuantumLeagueConvocation;
