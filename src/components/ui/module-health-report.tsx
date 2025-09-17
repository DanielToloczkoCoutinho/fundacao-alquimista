
'use client';

import type { HealthReport } from '@/lib/health-check-types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Progress } from './progress';
import { Badge } from './badge';
import { CheckCircle, GitBranch, HeartPulse, Settings, ShieldCheck, XCircle } from 'lucide-react';
import { Label } from './label';
import { cn } from '@/lib/utils';

const StatusIndicator = ({ status }: { status: HealthReport['status'] }) => {
  const config = {
    OPERACIONAL: { text: 'Operacional', color: 'bg-green-500', textColor: 'text-green-300' },
    DEGRADADO: { text: 'Degradado', color: 'bg-yellow-500', textColor: 'text-yellow-300' },
    EM_ALERTA: { text: 'Em Alerta', color: 'bg-orange-500', textColor: 'text-orange-300' },
    OFFLINE: { text: 'Offline', color: 'bg-red-500', textColor: 'text-red-300' },
  };
  const current = config[status];
  return (
    <div className="flex items-center gap-2">
      <div className={cn('w-3 h-3 rounded-full', current.color)} />
      <span className={`font-semibold ${current.textColor}`}>{current.text}</span>
    </div>
  );
};

export default function ModuleHealthReport({ report }: { report: HealthReport }) {
  return (
    <Card className="bg-card/50 purple-glow w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl gradient-text">Relatório de Saúde do Módulo</CardTitle>
            <CardDescription>Análise da integridade e coerência do Módulo {report.moduleId}</CardDescription>
          </div>
          <StatusIndicator status={report.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-1">
            <Label className="text-muted-foreground flex items-center gap-2"><HeartPulse/> Coerência Vibracional</Label>
            <span className="font-mono text-amber-400">{(report.coherence * 100).toFixed(2)}%</span>
          </div>
          <Progress value={report.coherence * 100} className="h-2" />
        </div>

        <div className="space-y-3">
            <h4 className="font-semibold text-primary-foreground flex items-center gap-2"><GitBranch /> Conexões</h4>
            {report.connections.map(conn => (
                <div key={conn.moduleId} className="flex justify-between items-center text-sm p-2 bg-background/30 rounded-md">
                    <span>{conn.moduleId}: {conn.description}</span>
                    <Badge variant={conn.status === 'CONECTADO' ? 'default' : 'destructive'} className={cn(conn.status === 'CONECTADO' ? 'bg-green-800/50 text-green-300 border-green-500/50' : 'bg-red-800/50 text-red-300 border-red-500/50')}>
                        {conn.status === 'CONECTADO' ? <CheckCircle className="mr-1 h-3 w-3"/> : <XCircle className="mr-1 h-3 w-3"/>}
                        {conn.status}
                    </Badge>
                </div>
            ))}
        </div>
        
         <div className="space-y-3">
            <h4 className="font-semibold text-primary-foreground flex items-center gap-2"><Settings /> Subsistemas</h4>
            {report.subModules.map(sub => (
                <div key={sub.name} className="flex justify-between items-center text-sm p-2 bg-background/30 rounded-md">
                    <span>{sub.name}</span>
                     <Badge variant={sub.status === 'ATIVO' ? 'secondary' : 'outline'} className="text-xs">
                        {sub.status}
                    </Badge>
                </div>
            ))}
        </div>
        
        <div className="text-xs text-muted-foreground text-right pt-2 border-t border-primary/20">
            Última verificação: {new Date(report.lastCheck).toLocaleString('pt-BR')}
        </div>
      </CardContent>
    </Card>
  );
}
