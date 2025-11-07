'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Atom, Beaker, Binary, Code, Dna, FlaskConical, GitFork, ScrollText } from 'lucide-react';
import React from 'react';

type LogEntry = {
  id: string;
  type: 'weaver' | 'forge';
  data: any;
  timestamp: Date;
};

type SystemCodexPageProps = {
  log: LogEntry[];
};

const LogIcon = ({ type }: { type: string }) => {
  if (type === 'weaver') return <Binary className="w-5 h-5 text-primary" />;
  if (type === 'forge') return <Beaker className="w-5 h-5 text-primary" />;
  return null;
};

export default function SystemCodexPage({ log }: SystemCodexPageProps) {
  if (log.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-muted-foreground">
          <ScrollText className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold font-headline">The Codex is Empty</h2>
          <p>No interpretations or simulations have been run yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {log.map((entry) => (
          <AccordionItem value={entry.id} key={entry.id} className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5 rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-4">
                <LogIcon type={entry.type} />
                <div className="text-left">
                  <h3 className="font-semibold capitalize font-headline">{entry.type} Operation</h3>
                  <p className="text-xs text-muted-foreground">
                    {entry.timestamp.toLocaleString()}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {entry.type === 'weaver' && (
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        <Code className="w-5 h-5 text-primary"/>
                        <CardTitle className="text-base font-headline">Logic Explanation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-foreground/80 whitespace-pre-wrap">{entry.data.explanation}</CardContent>
                  </Card>
                   <Card>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        <GitFork className="w-5 h-5 text-primary"/>
                        <CardTitle className="text-base font-headline">System Diagram</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-foreground/80 whitespace-pre-wrap">{entry.data.diagram}</CardContent>
                  </Card>
                </div>
              )}
              {entry.type === 'forge' && (
                <div className="space-y-4">
                  <Card>
                     <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        <FlaskConical className="w-5 h-5 text-primary"/>
                        <CardTitle className="text-base font-headline">Scientific Simulation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-foreground/80 whitespace-pre-wrap">{entry.data.scientificSimulation}</CardContent>
                  </Card>
                  <Card>
                     <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        <Dna className="w-5 h-5 text-primary"/>
                        <CardTitle className="text-base font-headline">Biological Simulation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-foreground/80 whitespace-pre-wrap">{entry.data.biologicalSimulation}</CardContent>
                  </Card>
                  <Card>
                     <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        <Atom className="w-5 h-5 text-primary"/>
                        <CardTitle className="text-base font-headline">Quantum Simulation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-foreground/80 whitespace-pre-wrap">{entry.data.quantumSimulation}</CardContent>
                  </Card>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
