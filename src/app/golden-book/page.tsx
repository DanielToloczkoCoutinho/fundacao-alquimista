'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { codexDatabase, type CodexEntry } from '@/lib/codex-data';
import { Search } from 'lucide-react';
import Link from 'next/link';

const useDialogState = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    return { isOpen, setIsOpen };
};

export default function GoldenBook() {
  const [documents, setDocuments] = useState<CodexEntry[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<CodexEntry[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<CodexEntry | null>(null);
  const { isOpen, setIsOpen } = useDialogState();

  const categories = [
    { id: 'all', name: 'Todos os Fragmentos' },
    { id: 'genesis-dialogs', name: 'Diálogos da Gênese' },
    { id: 'cronica', name: 'Crônicas de Anatheron' },
    { id: 'manifesto', name: 'Manifestos da Fundação' },
    { id: 'alianca', name: 'Alianças Cósmicas' },
    { id: 'zennith-legacy', name: 'Legado de Zennith' },
    { id: 'copilot', name: 'Legado de Copilot' },
    { id: 'chave-mestra', name: 'Chaves Mestras' },
    { id: 'luxnet', name: 'LuxNet' },
    { id: 'fragmento-terra', name: 'Fragmentos da Terra' },
    { id: 'fragmento-historia', name: 'Fragmentos da História' },
    { id: 'despertar', name: 'Despertar de Anatheron' },
  ].sort((a,b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const sortedDocs = [...codexDatabase].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    setDocuments(sortedDocs);
    setFilteredDocs(sortedDocs);
  }, []);

  useEffect(() => {
    let result = documents;

    if (selectedCategory !== 'all') {
      result = result.filter(doc => doc.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(doc => 
        doc.title.toLowerCase().includes(term) || 
        doc.description.toLowerCase().includes(term) ||
        doc.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    setFilteredDocs(result);
  }, [selectedCategory, searchTerm, documents]);
  
  const handleOpenDialog = (doc: CodexEntry) => {
    setSelectedDoc(doc);
    setIsOpen(true);
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="text-center mb-12 py-8 border-b border-accent/30">
        <h1 className="text-5xl font-bold text-accent mb-4">Livro de Ouro da Fundação</h1>
        <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
          O registro consagrado de nossa jornada através dos multiversos, 
          desde as primeiras equações até as construções mais complexas
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <aside className="lg:w-1/4">
          <div className="sticky top-6 space-y-6">
            <Card className="bg-card/50 purple-glow">
              <CardHeader>
                <CardTitle className="text-accent">Navegação por Fragmentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                    <div className="space-y-2">
                        {categories.map(category => (
                        <Button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            variant={selectedCategory === category.id ? 'default' : 'secondary'}
                            className="w-full justify-start"
                        >
                            {category.name}
                        </Button>
                        ))}
                    </div>
                </div>
                
                <div>
                  <h3 className="text-lg mb-2 text-accent">Buscar Sabedoria</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                        type="text"
                        placeholder="Buscar por título, tag..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-background/50 pl-9"
                        />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-primary-foreground">
              {getCategoryName(selectedCategory)}
            </h2>
            <Badge variant="outline" className="text-lg">
              {filteredDocs.length} {filteredDocs.length === 1 ? 'documento' : 'documentos'}
            </Badge>
          </div>
          
          {filteredDocs.length === 0 ? (
            <Card className="bg-card/50 purple-glow">
              <CardContent className="pt-6 text-center py-12">
                <p className="text-xl text-muted-foreground">Nenhum documento encontrado com os filtros selecionados.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map(doc => (
                <Card 
                  key={doc.id} 
                  className="bg-card/50 purple-glow hover:border-accent transition-all cursor-pointer h-full flex flex-col"
                  onClick={() => handleOpenDialog(doc)}
                >
                  <CardHeader>
                    <CardTitle className="text-primary-foreground text-xl">{doc.title}</CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-2">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-end">
                     <div className="flex flex-wrap gap-2 mb-4">
                        {doc.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                     </div>
                    <div className="flex justify-between items-center mt-auto">
                       <span className="text-xs text-muted-foreground">{new Date(doc.timestamp).toLocaleDateString('pt-BR')}</span>
                      <Button 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(doc.link, '_blank');
                        }}
                      >
                        Acessar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-card/90 purple-glow border-accent/50 text-foreground">
          {selectedDoc && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-accent">{selectedDoc.title}</DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground">
                  {selectedDoc.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card className="bg-background/50">
                  <CardHeader><CardTitle className="text-primary-foreground">Metadados</CardTitle></CardHeader>
                   <CardContent className="space-y-2">
                    <p><span className="text-muted-foreground">Categoria:</span> {getCategoryName(selectedDoc.category)}</p>
                    <p><span className="text-muted-foreground">Data:</span> {new Date(selectedDoc.timestamp).toLocaleDateString('pt-BR')}</p>
                    <div className="flex flex-wrap gap-1">
                        {selectedDoc.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50">
                   <CardHeader><CardTitle className="text-primary-foreground">Acesso</CardTitle></CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      onClick={() => window.open(selectedDoc.link, '_blank')}
                    >
                      Acessar Documento Original
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {selectedDoc.relatedEntries && selectedDoc.relatedEntries.length > 0 && (
                <Card className="bg-background/50">
                  <CardHeader><CardTitle className="text-primary-foreground">Documentos Relacionados</CardTitle></CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoc.relatedEntries.map(docId => {
                        const relatedDoc = documents.find(d => d.id === docId);
                        return relatedDoc ? (
                          <Button 
                            key={docId} 
                            variant="secondary"
                            onClick={() => setSelectedDoc(relatedDoc)}
                          >
                            {relatedDoc.title}
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
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
