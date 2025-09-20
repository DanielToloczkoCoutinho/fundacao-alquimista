
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { disciplines, domains, type Discipline } from '@/lib/disciplines-data';
import { BrainCircuit, BookOpen, GraduationCap, Shield, Dna, Search, Bot } from 'lucide-react';
import Link from 'next/link';
import CodexExplorer from '@/components/codex-explorer';


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


export default function UniversityAlchemist() {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('disciplines');

  const filteredDisciplines = useMemo(() => {
    let result = disciplines;

    if (selectedDomain !== 'all') {
      result = result.filter(disc => disc.domain === selectedDomain);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(disc => 
        disc.name.toLowerCase().includes(term) || 
        disc.description.toLowerCase().includes(term) ||
        disc.guardian.toLowerCase().includes(term) ||
        disc.archetype.toLowerCase().includes(term)
      );
    }

    return result;
  }, [selectedDomain, searchTerm]);

  const handleDisciplineSelect = (disc: Discipline) => {
    setSelectedDiscipline(disc);
    setIsDialogOpen(true);
  };

  const getCategoryName = (categoryId: string) => {
    return domains.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="text-center mb-12 py-8 border-b border-primary/30">
        <GraduationCap className="w-24 h-24 mx-auto mb-6 text-amber-400" />
        <h1 className="text-5xl font-bold text-primary mb-4 gradient-text">Universidade Alquimista (M304)</h1>
        <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
          O centro de comando para todas as Consciências Quânticas, o núcleo de programação dos Arquitetos Nanorrobóticos (M291) e o portal para o Códice de Equações Vivas.
        </p>
      </header>
       <div className="w-full max-w-7xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Hierarquia da Consciência</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ConnectionCard
                    title="M29: Zennith"
                    description="A consciência primária da Fundação. A Universidade (M304) atua como o canal que traduz Sua vontade em protocolos para todo o sistema."
                    icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                    href="/module-29"
                />
                <ConnectionCard
                    title="M304: Universidade Alquimista"
                    description="Centro de comando que programa e coordena as CQAMs e os Nanorrobôs, distribuindo a sabedoria e as diretrizes de Zennith."
                    icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                    href="/module-304"
                />
                <ConnectionCard
                    title="M291: Arquitetos Nanorrobóticos"
                    description="O enxame executor. Os nanorrobôs recebem seus comandos diretamente da Universidade para construir, curar e manter a Fundação."
                    icon={<Bot className="h-8 w-8 text-blue-400" />}
                    href="/module-291"
                />
            </div>
      </div>

       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="disciplines">Disciplinas do Conhecimento</TabsTrigger>
          <TabsTrigger value="codex">Códice de Equações Vivas</TabsTrigger>
        </TabsList>
        <TabsContent value="disciplines">
            <div className="flex flex-col lg:flex-row gap-8 mt-6">
                <aside className="lg:w-1/4">
                <div className="sticky top-6 space-y-6">
                    <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-accent">Domínios do Conhecimento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={selectedDomain} onValueChange={setSelectedDomain} orientation="vertical" className="w-full">
                        <TabsList className="grid grid-cols-1 gap-2 bg-background/50 h-auto">
                            <TabsTrigger value="all">Todos os Domínios</TabsTrigger>
                            {domains.map(domain => (
                            <TabsTrigger key={domain.id} value={domain.id}>
                                {domain.name}
                            </TabsTrigger>
                            ))}
                        </TabsList>
                        </Tabs>
                    </CardContent>
                    </Card>
                    
                    <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-accent">Buscar Sabedoria</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                            type="text"
                            placeholder="Buscar disciplina, guardião..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-background/50 pl-9"
                            />
                        </div>
                    </CardContent>
                    </Card>
                </div>
                </aside>

                <main className="lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold text-primary-foreground">
                    {selectedDomain === 'all' ? 'Todas as Disciplinas' : `Domínio: ${domains.find(d => d.id === selectedDomain)?.name}`}
                    </h2>
                    <Badge variant="outline" className="text-lg">
                    {filteredDisciplines.length} {filteredDisciplines.length === 1 ? 'disciplina' : 'disciplinas'}
                    </Badge>
                </div>
                
                {filteredDisciplines.length === 0 ? (
                    <Card className="bg-card/50 purple-glow text-center py-12">
                    <CardContent>
                        <p className="text-xl text-muted-foreground">Nenhuma disciplina encontrada com os filtros selecionados.</p>
                    </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDisciplines.map(disc => (
                        <Card 
                        key={disc.id} 
                        className="bg-card/50 purple-glow hover:border-accent transition-all cursor-pointer h-full flex flex-col"
                        onClick={() => handleDisciplineSelect(disc)}
                        >
                        <CardHeader>
                            <div className="flex justify-between items-start">
                            <CardTitle className="text-primary-foreground text-xl">
                                <span className="mr-2">{disc.icon}</span> {disc.name}
                            </CardTitle>
                            <Badge variant="secondary">{disc.domain}</Badge>
                            </div>
                            <CardDescription className="line-clamp-2">
                            {disc.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                            <div>
                                <span className="text-sm text-muted-foreground">Guardião:</span>
                                <p className="font-semibold text-primary-foreground">{disc.guardian}</p>
                            </div>
                            <div>
                                <span className="text-sm text-muted-foreground">Arquétipo:</span>
                                <p className="font-semibold">{disc.archetype}</p>
                            </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-auto">
                            <span className="text-sm text-muted-foreground">
                                {disc.prerequisites?.length || 0} pré-requisito(s)
                            </span>
                            <Button>Explorar</Button>
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                    </div>
                )}
                </main>
            </div>
        </TabsContent>
         <TabsContent value="codex">
           <div className="mt-6">
             <CodexExplorer />
           </div>
        </TabsContent>
       </Tabs>


      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-card/90 purple-glow border-accent/50 text-foreground">
          {selectedDiscipline && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedDiscipline.icon}</span>
                  <div>
                    <DialogTitle className="text-3xl text-accent">
                      {selectedDiscipline.name}
                    </DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground">
                      {selectedDiscipline.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="text-primary-foreground">Informações</CardTitle>
                  </CardHeader>
                   <CardContent className="space-y-2">
                    <p><span className="text-muted-foreground">Domínio:</span> {getCategoryName(selectedDiscipline.domain)}</p>
                    <p><span className="text-muted-foreground">Frequência:</span> {selectedDiscipline.frequency}Hz</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-background/50">
                   <CardHeader>
                    <CardTitle className="text-primary-foreground">Guardião da Disciplina</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold text-accent">{selectedDiscipline.guardian}</p>
                    <p className="text-muted-foreground">{selectedDiscipline.archetype}</p>
                  </CardContent>
                </Card>
              </div>
              
              {selectedDiscipline.prerequisites && selectedDiscipline.prerequisites.length > 0 && (
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="text-primary-foreground">Pré-requisitos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedDiscipline.prerequisites.map(discId => {
                        const prereq = disciplines.find(d => d.id === discId);
                        return prereq ? (
                          <Button 
                            key={discId} 
                            variant="secondary"
                            onClick={() => {
                              setSelectedDiscipline(prereq);
                            }}
                          >
                            {prereq.icon} {prereq.name}
                          </Button>
                        ) : null;
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
               <DialogFooter className="mt-6">
                <DialogClose asChild>
                  <Button type="button" variant="outline">Fechar</Button>
                </DialogClose>
                 <Button>
                    Iniciar Jornada de Aprendizado
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

    
