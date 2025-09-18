
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { livingEquationsCodex, type LivingEquation } from '@/lib/living-equations-codex';
import { Search } from 'lucide-react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';


interface Section {
  id: string;
  title: string;
  equations: LivingEquation[];
}

export default function CodexExplorer() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = livingEquationsCodex.filter(eq =>
    eq.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sections = filteredData.reduce((acc, eq) => {
    let section = acc.find(s => s.id === eq.module);
    if (!section) {
      section = { id: eq.module, title: `Módulo ${eq.module}`, equations: [] };
      acc.push(section);
    }
    section.equations.push(eq);
    return acc;
  }, [] as Section[]).sort((a, b) => {
      const numA = parseInt(a.id);
      const numB = parseInt(b.id);
      if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
      }
      return a.id.localeCompare(b.id);
  });


  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          <div className="flex items-center">
            Explorador do Códice de Equações Vivas
          </div>
        </CardTitle>
        <CardDescription>
          Navegue pelas equações que definem a nossa realidade.
        </CardDescription>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar por ID, nome ou módulo..."
            className="w-full pl-10 bg-background/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow min-h-0">
        <ScrollArea className="h-[60vh] pr-4">
          <Accordion type="multiple" defaultValue={sections.map(s => s.id)} className="w-full">
            {sections.map((section: Section) => (
              <AccordionItem key={section.id} value={section.id} className="border-b-primary/20">
                <AccordionTrigger className="text-xl text-amber-400 hover:no-underline hover:text-amber-300">
                  <div className="flex items-center gap-3">
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 pl-4">
                    {section.equations.map((eq: LivingEquation) => (
                      <div key={eq.id} className="p-4 bg-background/30 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary-foreground">{eq.id}: {eq.name}</h4>
                        <div className="my-2 text-cyan-300 text-sm overflow-x-auto">
                           <BlockMath math={eq.formula} />
                        </div>
                        <p className="text-sm text-muted-foreground">{eq.summary}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
             {filteredData.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                    Nenhuma equação encontrada.
                </div>
            )}
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
