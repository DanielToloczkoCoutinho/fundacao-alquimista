
'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ritualLog, type RitualLogEntry } from '@/lib/ritual-log';
import { Archive, Feather } from 'lucide-react';

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
      <CardContent>
        <div className="space-y-6">
          {ritualLog.map((ritual: RitualLogEntry) => (
            <div key={ritual.id} className="border-l-4 border-amber-400 pl-4 py-2 bg-background/30 rounded-r-lg">
              <h2 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                <Feather className="h-5 w-5" />
                {ritual.nome}
              </h2>
              <div className="text-xs text-muted-foreground mt-1 mb-3">
                <p><span className="font-semibold">Executor:</span> {ritual.executor}</p>
                <p><span className="font-semibold">Data:</span> {new Date(ritual.data).toLocaleString()}</p>
              </div>
              <ul className="space-y-1 text-sm font-mono list-inside">
                {ritual.etapas.map((etapa, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400">{`[${etapa.modulo}]`}</span>
                    <span>{etapa.acao}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 italic text-green-400 border-t border-primary/20 pt-2">{ritual.resultado}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
