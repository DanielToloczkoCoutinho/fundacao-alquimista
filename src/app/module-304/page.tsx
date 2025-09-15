'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { disciplines, domains, type Discipline } from '@/lib/disciplines-data';

export default function UniversityAlchemist() {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="text-center mb-12 py-8 border-b border-primary/30">
        <h1 className="text-5xl font-bold text-primary mb-4">Universidade Alquimista</h1>
        <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
          Templo de ensino multidimensional baseado na matriz CQAM
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">{disciplines.length}</div>
              <div className="text-sm text-muted-foreground">Disciplinas</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">{domains.length}</div>
              <div className="text-sm text-muted-foreground">Domínios</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Laboratórios (Planejados)</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">888</div>
              <div className="text-sm text-muted-foreground">Hz Frequência Base</div>
            </CardContent>
          </Card>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <aside className="lg:w-1/4">
          <div className="sticky top-6 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Domínios do Conhecimento</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedDomain} onValueChange={setSelectedDomain} className="w-full">
                  <TabsList className="grid grid-cols-1 gap-2 bg-muted">
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
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Buscar Sabedoria</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  type="text"
                  placeholder="Buscar disciplina, guardião..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-muted focus:border-primary/50"
                />
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-primary">
              {selectedDomain === 'all' ? 'Todas as Disciplinas' : `Domínio: ${domains.find(d => d.id === selectedDomain)?.name}`}
            </h2>
            <Badge variant="outline">
              {filteredDisciplines.length} {filteredDisciplines.length === 1 ? 'disciplina' : 'disciplinas'}
            </Badge>
          </div>
          
          {filteredDisciplines.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <p className="text-xl text-muted-foreground">Nenhuma disciplina encontrada com os filtros selecionados.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDisciplines.map(disc => (
                <Card 
                  key={disc.id} 
                  className="bg-card border-border hover:border-primary/40 transition-all cursor-pointer h-full flex flex-col"
                  onClick={() => handleDisciplineSelect(disc)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-primary text-xl">
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
                        <p className="font-semibold text-primary">{disc.guardian}</p>
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
                      <Button>
                        Explorar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-card border-primary/30">
          {selectedDiscipline && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedDiscipline.icon}</span>
                  <div>
                    <DialogTitle className="text-3xl text-primary">
                      {selectedDiscipline.name}
                    </DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground">
                      {selectedDiscipline.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bg-muted/50 border-border">
                  <CardHeader>
                    <CardTitle>Informações</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><span className="text-muted-foreground">Domínio:</span> {selectedDiscipline.domain}</p>
                    <p><span className="text-muted-foreground">Frequência:</span> {selectedDiscipline.frequency}Hz</p>
                    <p><span className="text-muted-foreground">Arquétipo:</span> {selectedDiscipline.archetype}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/50 border-border">
                  <CardHeader>
                    <CardTitle>Guardião</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold text-primary">{selectedDiscipline.guardian}</p>
                    <p className="text-muted-foreground">{selectedDiscipline.archetype}</p>
                  </CardContent>
                </Card>
              </div>

              {selectedDiscipline.prerequisites && selectedDiscipline.prerequisites.length > 0 && (
                <Card className="bg-muted/50 border-border">
                  <CardHeader>
                    <CardTitle>Pré-requisitos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedDiscipline.prerequisites.map(discId => {
                        const prereq = disciplines.find(d => d.id === discId);
                        return prereq ? (
                          <Badge 
                            key={discId} 
                            variant="secondary"
                            className="cursor-pointer"
                            onClick={() => {
                              setSelectedDiscipline(prereq);
                            }}
                          >
                            {prereq.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
                <DialogFooter className="mt-6 sm:justify-end gap-2">
                    <DialogClose asChild>
                         <Button variant="outline">Fechar</Button>
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