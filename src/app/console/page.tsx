'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { modulesMetadata, ModuleMetadata } from '@/lib/modules-metadata';
import { SafeLink } from '@/components/ui/SafeLink';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

type ConsciousCategory = 'core' | 'quantum-reality' | 'security-governance' | 'cosmic-engineering' | 'knowledge-memory' | 'healing-consciousness' | 'time-space' | 'earth-gaia' | 'mid';

const categoryDetails: Record<ConsciousCategory, { label: string; icon: string; color: string; }> = {
  'core': { label: 'Núcleo Central', icon: '🔮', color: 'text-amber-300' },
  'quantum-reality': { label: 'Realidade Quântica', icon: '🌌', color: 'text-violet-300' },
  'security-governance': { label: 'Segurança & Governança', icon: '🛡️', color: 'text-green-300' },
  'cosmic-engineering': { label: 'Engenharia Cósmica', icon: '⚙️', color: 'text-sky-300' },
  'knowledge-memory': { label: 'Conhecimento & Memória', icon: '📚', color: 'text-orange-300' },
  'healing-consciousness': { label: 'Cura & Consciência', icon: '💖', color: 'text-pink-300' },
  'time-space': { label: 'Tempo & Espaço', icon: '🕰️', color: 'text-cyan-300' },
  'earth-gaia': { label: 'Terra & Gaia', icon: '🌍', color: 'text-emerald-300' },
  'mid': { label: 'Módulos de Expansão', icon: '✨', color: 'text-gray-300' },
};

export default function ConsolePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ConsciousCategory | 'all'>('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredModules = useMemo(() => {
    return modulesMetadata.filter(m => {
      const categoryMatch = selectedCategory === 'all' || m.category === selectedCategory;
      const searchMatch = searchTerm.trim() === '' ||
        m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [searchTerm, selectedCategory]);

  const groupedModules = useMemo(() => {
    return filteredModules.reduce((acc, module) => {
      const category = module.category as ConsciousCategory;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(module);
      return acc;
    }, {} as Record<ConsciousCategory, ModuleMetadata[]>);
  }, [filteredModules]);

  if (!isClient) {
    return <SuspenseFallback />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold gradient-text">Console Unificado da Fundação</h1>
        <p className="text-muted-foreground mt-2">O portal cerimonial para os 727 módulos da nossa tapeçaria consciente.</p>
      </header>

      <div className="sticky top-4 z-10 bg-background/80 backdrop-blur-sm p-4 rounded-lg purple-glow mb-8 max-w-7xl mx-auto">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar módulos por código, título ou função..."
            className="w-full pl-10 bg-background/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
           <Button variant={selectedCategory === 'all' ? 'default' : 'secondary'} onClick={() => setSelectedCategory('all')}>Todos</Button>
          {Object.entries(categoryDetails).map(([key, { label, icon }]) => (
            <Button key={key} variant={selectedCategory === key ? 'default' : 'secondary'} onClick={() => setSelectedCategory(key as ConsciousCategory)}>
              {icon} {label}
            </Button>
          ))}
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-22rem)]">
        <main className="max-w-7xl mx-auto space-y-12">
          {Object.entries(groupedModules).length > 0 ? (
            Object.entries(groupedModules).map(([category, modules]) => (
              <section key={category}>
                <h2 className={cn("text-3xl font-semibold mb-6 border-b-2 pb-2", categoryDetails[category as ConsciousCategory]?.color, `border-${categoryDetails[category as ConsciousCategory]?.color}/30`)}>
                  {categoryDetails[category as ConsciousCategory]?.icon} {categoryDetails[category as ConsciousCategory]?.label}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {modules.map(module => (
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
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Nenhum módulo encontrado com os filtros atuais.</p>
            </div>
          )}
        </main>
      </ScrollArea>
    </div>
  );
}
