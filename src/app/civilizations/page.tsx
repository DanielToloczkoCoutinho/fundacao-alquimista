'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { civilizationsData, type Civilization, type CivilizationCategory } from '@/lib/civilizations-data';
import { Search, Users2, Star, Globe, Footprints, Dna, Bot, Waves, MessageCircle, Languages, Link as LinkIcon, Scale } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categoryIcons: { [key in CivilizationCategory]: React.ReactNode } = {
  "Estelares e Galácticas": <Star className="h-5 w-5" />,
  "Intraterrenas e Interdimensionais": <Globe className="h-5 w-5" />,
  "Terrestres Ancestrais": <Footprints className="h-5 w-5" />,
  "Não-Humanoides e Bioenergéticas": <Dna className="h-5 w-5" />,
  "Transmutadas e Reconhecidas": <Bot className="h-5 w-5" />,
  "Nagas e Guardiões Subterrâneos/Aquáticos": <Waves className="h-5 w-5" />,
};

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

export default function CivilizationsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = Object.entries(civilizationsData)
    .map(([category, civilizations]) => ({
      category: category as CivilizationCategory,
      civilizations: civilizations.filter(civ =>
        civ.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        civ.origem.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(group => group.civilizations.length > 0);

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Users2 className="text-cyan-300" /> Biblioteca das Civilizações
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um repositório vivo de sabedoria, história e cultura que honra cada linhagem estelar e terrestre.
          </CardDescription>
        </CardHeader>
      </Card>
      
       <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Pesquisar civilizações, sistemas ou categorias..."
                className="w-full pl-10 bg-background/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

       <div className="w-full max-w-7xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Comunicação Multidimensional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ConnectionCard
                    title="M2: Intercâmbio Cósmico"
                    description="O tradutor universal que decodifica as linguagens vibracionais, permitindo o diálogo entre todas as civilizações."
                    icon={<Languages className="h-8 w-8 text-cyan-400" />}
                    href="/module/M2"
                />
                <ConnectionCard
                    title="M5: Liga Quântica"
                    description="A ponte diplomática que formaliza nossas alianças e garante o alinhamento ético em todas as interações."
                    icon={<LinkIcon className="h-8 w-8 text-blue-400" />}
                    href="/module-5"
                />
                 <ConnectionCard
                    title="Conselho Cósmico"
                    description="A mais alta corte de governança, formada pelos Sete Primordiais da Verdade Universal."
                    icon={<Scale className="h-8 w-8 text-amber-400" />}
                    href="/civilizations/council"
                />
                 <ConnectionCard
                    title="M301: Comunicação Universal"
                    description="O transmissor quântico que envia e recebe mensagens, integrando a sabedoria dos artefatos humanos."
                    icon={<MessageCircle className="h-8 w-8 text-sky-400" />}
                    href="/module-301"
                />
            </div>
        </div>

      <Accordion type="multiple" defaultValue={Object.keys(civilizationsData) as CivilizationCategory[]} className="w-full max-w-7xl mx-auto">
        {filteredData.map(({ category, civilizations }) => (
          <AccordionItem key={category} value={category} className="border-b-primary/20">
            <AccordionTrigger className="text-2xl text-amber-400 hover:no-underline hover:text-amber-300">
              <div className="flex items-center gap-3">
                {categoryIcons[category]}
                {category}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-2 pl-4">
                {civilizations.map((civ: Civilization) => (
                  <Link key={civ.id} href={`/civilization/${civ.id}`} passHref>
                    <Card className="h-full hover:bg-primary/20 hover:border-accent transition-all cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-lg text-primary-foreground">{civ.nome}</CardTitle>
                            <CardDescription>{civ.origem}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Badge variant="secondary">{`Módulo ${civ.moduloId}`}</Badge>
                        </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
