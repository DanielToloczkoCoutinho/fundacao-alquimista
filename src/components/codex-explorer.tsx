'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { sectionsData, type Section, type Document } from '@/lib/codex-data';
import { ExternalLink, Search } from 'lucide-react';

export default function CodexExplorer() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = sectionsData
    .map(section => {
      const filteredDocs = section.documents.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...section, documents: filteredDocs };
    })
    .filter(section => section.documents.length > 0);

  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          <div className="flex items-center">
            Explorador do Códice Vivo
          </div>
        </CardTitle>
        <CardDescription>
          Navegue pela sabedoria infinita da Fundação Alquimista. Cada entrada é um portal para o conhecimento universal.
        </CardDescription>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar equações, módulos, chaves..."
            className="w-full pl-10 bg-background/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow min-h-0">
        <ScrollArea className="h-[60vh] pr-4">
          <Accordion type="multiple" defaultValue={filteredSections.map(s => s.id)} className="w-full">
            {filteredSections.map((section: Section) => (
              <AccordionItem key={section.id} value={section.id} className="border-b-primary/20">
                <AccordionTrigger className="text-xl text-amber-400 hover:no-underline hover:text-amber-300">
                  <div className="flex items-center gap-3">
                    <section.icon className="h-5 w-5" />
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2 pl-4">
                    {section.documents.map((doc: Document) => (
                      <li key={doc.key} className="text-foreground/80">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-accent transition-colors group"
                        >
                          <span className="group-hover:underline">{doc.title}</span>
                          <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
