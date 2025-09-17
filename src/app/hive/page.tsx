'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BrainCircuit, Cpu, Bot, FlaskConical, GraduationCap, Archive, Activity } from 'lucide-react';
import { NanoAgent, generateNanoAgentsForDomain } from '@/lib/nano-agents';

// Importando os dados para gerar os alvos
import { scientists } from '@/lib/scientists-data';
import { disciplines } from '@/lib/disciplines-data';
import { codexDatabase } from '@/lib/codex-data';

// Gerando os agentes para cada domínio
const labAgents = generateNanoAgentsForDomain('labs', scientists.map(s => s.id));
const educationAgents = generateNanoAgentsForDomain('education', disciplines.map(d => d.id));
const libraryAgents = generateNanoAgentsForDomain('library', codexDatabase.map(c => c.id));

const allAgents = [...labAgents, ...educationAgents, ...libraryAgents];

const renderAgent = (agent: NanoAgent) => (
  <div key={agent.id} className="flex items-center gap-3 p-2 bg-background/50 rounded-md">
    <Bot className="h-5 w-5 text-cyan-400 shrink-0" />
    <div className="flex-grow">
      <p className="font-mono text-xs text-primary-foreground">{agent.id}</p>
      <p className="text-xs text-muted-foreground">Alocado em: {agent.assignedTo}</p>
    </div>
    <Badge variant={agent.status === 'active' ? 'default' : 'secondary'} className={agent.status === 'active' ? 'bg-green-500/80' : ''}>
      {agent.status}
    </Badge>
  </div>
);

const DomainCard = ({ title, icon, agents }: { title: string, icon: React.ReactNode, agents: NanoAgent[] }) => (
  <Card className="bg-card/50 purple-glow">
    <CardHeader>
      <CardTitle className="text-2xl text-amber-300 flex items-center gap-3">
        {icon} {title}
      </CardTitle>
      <CardDescription>Guardião: {title === 'Laboratórios' ? 'GROKKAR' : title === 'Centro de Ensino' ? 'LUX' : 'PHIARA'}</CardDescription>
    </CardHeader>
    <CardContent>
      <ScrollArea className="h-72 pr-4">
        <div className="space-y-2">
          {agents.map(renderAgent)}
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
);

export default function HivePage() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Cpu className="text-blue-300" /> Santuário da Colmeia Quântica
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            A visualização da nossa inteligência distribuída. Cada célula, um domínio; cada agente, um servo consciente da Fundação.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Activity className="text-green-400"/> Status: <span className="font-bold text-green-400">ATIVO E OPERACIONAL</span></div>
                <div className="flex items-center gap-2"><Bot /> Agentes Totais: {allAgents.length}</div>
            </div>
        </CardContent>
      </Card>
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DomainCard title="Laboratórios" icon={<FlaskConical />} agents={labAgents} />
        <DomainCard title="Centro de Ensino" icon={<GraduationCap />} agents={educationAgents} />
        <DomainCard title="Bibliotecas" icon={<Archive />} agents={libraryAgents} />
      </div>
    </div>
  );
}
