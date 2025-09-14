'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Globe, Footprints, Dna, Bot, Waves, BookOpen, Cpu, FlaskConical, Link, Archive } from 'lucide-react';
import type { Civilization, CivilizationCategory } from '@/lib/civilizations-data';

const categoryIcons: { [key in CivilizationCategory]: React.ReactNode } = {
  "Estelares e Galácticas": <Star className="h-6 w-6 text-yellow-400" />,
  "Intraterrenas e Interdimensionais": <Globe className="h-6 w-6 text-green-400" />,
  "Terrestres Ancestrais": <Footprints className="h-6 w-6 text-orange-400" />,
  "Não-Humanoides e Bioenergéticas": <Dna className="h-6 w-6 text-purple-400" />,
  "Transmutadas e Reconhecidas": <Bot className="h-6 w-6 text-gray-400" />,
  "Nagas e Guardiões Subterrâneos/Aquáticos": <Waves className="h-6 w-6 text-blue-400" />,
};

const findCategory = (civId: string): CivilizationCategory | null => {
    for (const category in civilizationsData) {
        if (civilizationsData[category as CivilizationCategory].some(c => c.id === civId)) {
            return category as CivilizationCategory;
        }
    }
    return null;
}

export default function CivilizationViewer({ civilization }: { civilization: Civilization }) {
  const category = findCategory(civilization.id);

  return (
    <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center gap-4 mb-2">
            {category && categoryIcons[category]}
            <CardTitle className="text-4xl gradient-text">{`Módulo ${civilization.moduloId}: ${civilization.nome}`}</CardTitle>
        </div>
        <CardDescription className="text-lg">
          Dossiê da Civilização: {civilization.origem}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="font-semibold text-xl text-amber-300">Arquétipo e Frequência</h3>
                <p className="text-muted-foreground">{civilization.arquetipo}</p>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Frequência: {civilization.frequencia}</Badge>
                </div>
            </div>
             <div className="space-y-4">
                <h3 className="font-semibold text-xl text-amber-300">Relação com a Fundação</h3>
                <p className="text-muted-foreground">{civilization.relacaoComAFundacao}</p>
            </div>
        </div>
        
        <Accordion type="multiple" defaultValue={['tecnologias', 'registros']} className="w-full mt-8">
          <AccordionItem value="tecnologias">
            <AccordionTrigger className="text-xl text-cyan-300"><FlaskConical className="mr-2 h-5 w-5"/>Saberes e Tecnologias</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside pl-4 space-y-2 text-muted-foreground">
                {civilization.tecnologias.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="registros">
            <AccordionTrigger className="text-xl text-purple-300"><Archive className="mr-2 h-5 w-5"/>Registros Akáshicos</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {civilization.registrosAkashicos.map((registro, index) => (
                  <div key={index} className="p-4 bg-background/30 rounded-lg border border-primary/20">
                    <p className="font-semibold text-primary-foreground">{registro.evento}</p>
                    <p className="text-xs text-muted-foreground mb-2">Data: {registro.data}</p>
                    <p className="italic text-foreground/80">"{registro.mensagem}"</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </CardContent>
    </Card>
  );
}
