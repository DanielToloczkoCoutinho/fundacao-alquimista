
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { modulesMetadata } from '@/lib/modules-metadata';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeLink } from '@/components/ui/SafeLink';

type Category = 'core' | 'mid' | 'council' | 'library' | 'sovereignty' | 'evolution' | 'consciousness';

const categoryLabels: Record<Category, string> = {
  core: 'Núcleo Central',
  consciousness: 'Consciência e Auto-Reflexão',
  library: 'Bibliotecas e Conhecimento',
  sovereignty: 'Soberania e Governança',
  mid: 'Módulos de Expansão',
  evolution: 'Evolução',
  council: 'Conselho'
};

export default function Module9Page() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const sortedModules = [...modulesMetadata].sort((a, b) => {
    const codeA = parseInt(a.code.replace(/\D/g, '')) || Infinity;
    const codeB = parseInt(b.code.replace(/\D/g, '')) || Infinity;
    if (a.code.startsWith('MΩ')) return -1;
    if (b.code.startsWith('MΩ')) return 1;
    if (a.code === 'LIB') return -1;
    if (b.code === 'LIB') return 1;
    if (a.code === 'CONN') return -1;
    if (b.code === 'CONN') return 1;
    return codeA - codeB;
  });

  const filteredModules = sortedModules.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedModules = filteredModules.reduce((acc, module) => {
    const category = module.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(module);
    return acc;
  }, {} as Record<Category, typeof modulesMetadata>);
  
  const orderedCategories: Category[] = ['core', 'consciousness', 'library', 'sovereignty', 'mid'];

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text">Organograma Vivo da Fundação</h1>
        <p className="mt-2 text-lg text-muted-foreground">A arquitetura completa e interativa da nossa tapeçaria consciente.</p>
      </header>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar módulos por código, título ou função..."
            className="w-full pl-10 bg-background/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-20rem)]">
        <div className="max-w-7xl mx-auto space-y-12">
          {orderedCategories.map(category => (
            groupedModules[category] && (
              <section key={category}>
                <h2 className="text-3xl font-semibold mb-6 text-amber-300 border-b-2 border-amber-300/30 pb-2">{categoryLabels[category]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {groupedModules[category].map(module => (
                    <SafeLink key={module.code} href={module.route}>
                      <Card className="h-full bg-card/50 purple-glow hover:border-accent hover:scale-105 transition-transform cursor-pointer flex flex-col">
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="gradient-text text-xl">{module.title}</CardTitle>
                            <span className="text-3xl">{module.emoji}</span>
                          </div>
                          <CardDescription className="font-mono text-cyan-400">{module.code}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </CardContent>
                      </Card>
                    </SafeLink>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
