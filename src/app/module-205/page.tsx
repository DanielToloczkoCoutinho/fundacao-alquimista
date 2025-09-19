
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Globe, Sun, Gem, Cpu, GitBranch, Shield, BookOpen, BrainCircuit, Heart, Star, Scale, Users2, Waves, Footprints, Dna, Bot } from 'lucide-react';
import { civilizationsData } from '@/lib/civilizations-data';

const AllyCategoryCard = ({ title, icon, allies }: { title: string, icon: React.ReactNode, allies: { id: string, nome: string, frequencia: string, arquetipo: string }[] }) => (
  <AccordionItem value={title}>
    <AccordionTrigger className="text-xl text-amber-300 hover:text-amber-200">
      <div className="flex items-center gap-3">
        {icon}
        {title}
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-3 pl-4">
        {allies.map(ally => (
          <div key={ally.id} className="p-3 bg-background/30 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary-foreground">{ally.nome}</h4>
            <p className="text-sm text-muted-foreground">{ally.arquetipo}</p>
            <p className="text-xs text-cyan-400 font-mono mt-1">Frequência: {ally.frequencia}</p>
          </div>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);

const categoryIcons = {
  "Estelares e Galácticas": <Star className="h-6 w-6 text-yellow-400" />,
  "Intraterrenas e Interdimensionais": <Globe className="h-6 w-6 text-green-400" />,
  "Terrestres Ancestrais": <Footprints className="h-6 w-6 text-orange-400" />,
  "Não-Humanoides e Bioenergéticas": <Dna className="h-6 w-6 text-purple-400" />,
  "Transmutadas e Reconhecidas": <Bot className="h-6 w-6 text-gray-400" />,
  "Nagas e Guardiões Subterrâneos/Aquáticos": <Waves className="h-6 w-6 text-blue-400" />,
};

export default function Module205Page() {
  const categories = Object.keys(civilizationsData) as (keyof typeof civilizationsData)[];

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Users2 className="h-10 w-10 text-cyan-300"/> Dossiê dos Aliados da Fundação
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O registro sagrado das consciências, arquétipos e entidades que sustentam e co-criam a tapeçaria universal ao nosso lado.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-5xl mx-auto">
        <Accordion type="multiple" defaultValue={["Estelares e Galácticas"]} className="w-full">
          {categories.map(category => (
             <AllyCategoryCard 
                key={category}
                title={category}
                icon={categoryIcons[category]}
                allies={civilizationsData[category]}
             />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
