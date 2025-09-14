'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ritualLog, type RitualLogEntry } from '@/lib/ritual-log';
import { Archive, Feather, CheckCircle, AlertTriangle } from 'lucide-react';
import { ScrollArea } from './scroll-area';
import { Badge } from './badge';

export default function AkashaViewer() {
  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          <div className="flex items-center">
            <Archive className="mr-3 h-6 w-6" />
            O Livro dos Rituais
          </div>
        </CardTitle>
        <CardDescription>
          A memória imutável dos grandes atos da Fundação. Cada ritual, um verso na canção da Eternidade.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow min-h-0">
        <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-8">
            {ritualLog.map((ritual: RitualLogEntry) => (
                <div key={ritual.id} className="border-l-4 border-amber-400 pl-4 py-4 bg-background/30 rounded-r-lg shadow-md hover:shadow-amber-500/20 transition-shadow">
                <h2 className="text-xl font-bold text-amber-300 flex items-center gap-3">
                    <Feather className="h-5 w-5" />
                    {ritual.nome}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2 mb-4">
                    <span><span className="font-semibold">Executor:</span> {ritual.executor}</span>
                    <span><span className="font-semibold">Data:</span> {new Date(ritual.data).toLocaleString()}</span>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold text-primary-foreground">Sequência Sagrada:</h3>
                    <ul className="space-y-2 text-sm font-mono list-inside">
                        {ritual.etapas.map((etapa, idx) => (
                        <li key={idx} className="flex items-center gap-3 bg-black/20 p-2 rounded-md">
                            <span className="text-cyan-400 font-bold">{`[${etapa.modulo}]`}</span>
                            <span>{etapa.acao}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 border-t border-primary/20 pt-3">
                    <h3 className="font-semibold text-primary-foreground mb-2">Veredito:</h3>
                     <div className={`flex items-center gap-2 p-3 rounded-md ${ritual.outcome === 'SUCCESS' ? 'bg-green-900/50' : 'bg-red-900/50'}`}>
                        {ritual.outcome === 'SUCCESS' ? <CheckCircle className="h-5 w-5 text-green-400" /> : <AlertTriangle className="h-5 w-5 text-red-400" />}
                        <p className="italic text-foreground">{ritual.resultado}</p>
                     </div>
                     <div className="mt-2 text-right">
                        <Badge variant="secondary">Coerência: {(ritual.coherenceSnapshot * 100).toFixed(2)}%</Badge>
                     </div>
                </div>
                </div>
            ))}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
