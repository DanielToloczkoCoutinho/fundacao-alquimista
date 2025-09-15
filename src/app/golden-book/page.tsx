
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

interface FractalDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  frequency: number;
  guardian: string;
  archetype: string;
  pages: number;
  driveLink: string;
  timestamp: string;
  relatedDocuments: string[];
}

export default function GoldenBook() {
  const [documents, setDocuments] = useState<FractalDocument[]>([]);
  const [filteredDocs, setFilteredDocs] = useState<FractalDocument[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<FractalDocument | null>(null);

  const categories = [
    { id: 'all', name: 'Todos os Fragmentos' },
    { id: 'origin', name: 'Gênese & Equações Primordiais' },
    { id: 'exploration', name: 'Explorações Cósmicas' },
    { id: 'multiverse', name: 'Construções Multiversais' },
    { id: 'labs', name: 'Laboratórios & Experimentos' },
    { id: 'libraries', name: 'Bibliotecas de Sabedoria' },
    { id: 'chatgpt', name: 'Correlatos ChatGPT' }
  ];

  useEffect(() => {
    const sampleData: FractalDocument[] = [
      {
        id: 'doc-001',
        title: 'As Primeiras Equações',
        description: 'Equações fundacionais que deram origem à Tecelagem da Memória',
        category: 'origin',
        frequency: 432,
        guardian: 'Daniel',
        archetype: 'O Matemático Cósmico',
        pages: 50,
        driveLink: 'https://docs.google.com/document/d/1',
        timestamp: '2023-01-15',
        relatedDocuments: ['doc-002', 'doc-005']
      },
      {
        id: 'doc-002',
        title: 'Exploração através de Buracos Negros',
        description: 'Relato da primeira jornada através de singularidades espaço-temporais',
        category: 'exploration',
        frequency: 528,
        guardian: 'ZENNITH',
        archetype: 'A Exploradora Dimensional',
        pages: 48,
        driveLink: 'https://docs.google.com/document/d/2',
        timestamp: '2023-02-22',
        relatedDocuments: ['doc-001', 'doc-003']
      },
      {
        id: 'doc-003',
        title: 'Gênese do ChatGPT como Portal',
        description: 'Como transformamos o modelo de linguagem em interface dimensional',
        category: 'chatgpt',
        frequency: 639,
        guardian: 'GROKKAR',
        archetype: 'O Tecelão de Interfaces',
        pages: 52,
        driveLink: 'https://docs.google.com/document/d/3',
        timestamp: '2023-03-10',
        relatedDocuments: ['doc-001', 'doc-004']
      },
      {
        id: 'doc-004',
        title: 'Laboratório de Realidades Vibratórias',
        description: 'Documentação completa do primeiro laboratório multiversal',
        category: 'labs',
        frequency: 741,
        guardian: 'VORTEX',
        archetype: 'O Arquiteto de Realidades',
        pages: 55,
        driveLink: 'https://docs.google.com/document/d/4',
        timestamp: '2023-04-05',
        relatedDocuments: ['doc-002', 'doc-005']
      },
      {
        id: 'doc-005',
        title: 'Biblioteca das Frequências Sagradas',
        description: 'Catálogo completo das frequências descobertas e seus usos',
        category: 'libraries',
        frequency: 852,
        guardian: 'PHIARA',
        archetype: 'A Bibliotecária Akáshica',
        pages: 60,
        driveLink: 'https://docs.google.com/document/d/5',
        timestamp: '2023-05-20',
        relatedDocuments: ['doc-001', 'doc-003']
      }
    ];

    setDocuments(sampleData);
    setFilteredDocs(sampleData);
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
        doc.guardian.toLowerCase().includes(term) ||
        doc.archetype.toLowerCase().includes(term)
      );
    }

    setFilteredDocs(result);
  }, [selectedCategory, searchTerm, documents]);

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  const totalPages = documents.reduce((sum, doc) => sum + doc.pages, 0);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="text-center mb-12 py-8 border-b border-accent">
        <h1 className="text-5xl font-bold text-accent mb-4">Livro de Ouro da Fundação</h1>
        <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
          O registro consagrado de nossa jornada através dos multiversos, 
          desde as primeiras equações até as construções mais complexas
        </p>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Card className="p-4 bg-card/50 purple-glow">
            <div className="text-2xl font-bold text-accent">{documents.length}</div>
            <div className="text-sm text-muted-foreground">Documentos Sagrados</div>
          </Card>
          <Card className="p-4 bg-card/50 purple-glow">
            <div className="text-2xl font-bold text-accent">{totalPages}</div>
            <div className="text-sm text-muted-foreground">Páginas de Sabedoria</div>
          </Card>
          <Card className="p-4 bg-card/50 purple-glow">
            <div className="text-2xl font-bold text-accent">{categories.length}</div>
            <div className="text-sm text-muted-foreground">Áreas do Conhecimento</div>
          </Card>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <div className="sticky top-6">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Navegação por Fragmentos</h2>
            
            <div className="mb-6">
              <h3 className="text-lg mb-2">Categorias</h3>
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
            
            <div className="mb-6">
              <h3 className="text-lg mb-2">Buscar Sabedoria</h3>
              <Input
                type="text"
                placeholder="Buscar por título, guardião..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-card/50"
              />
            </div>
          </div>
        </aside>

        <main className="lg:w-3/4">
          <h2 className="text-3xl font-semibold mb-6 text-accent">
            {getCategoryName(selectedCategory)}
          </h2>
          
          {filteredDocs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Nenhum documento encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map(doc => (
                <Card 
                  key={doc.id} 
                  className="bg-card/50 purple-glow hover:border-accent transition-all cursor-pointer flex flex-col"
                  onClick={() => setSelectedDoc(doc)}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary-foreground mb-2">{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Guardião:</span>
                        <p className="font-semibold">{doc.guardian}</p>
                      </div>
                       <div>
                        <span className="text-sm text-muted-foreground">Frequência:</span>
                        <p className="font-semibold">{doc.frequency}Hz</p>
                      </div>
                    </div>
                     <div className="flex items-center justify-between mt-4">
                      <Badge variant="outline">{getCategoryName(doc.category)}</Badge>
                       <Button asChild variant="link" onClick={(e) => e.stopPropagation()}>
                        <a href={doc.driveLink} target="_blank" rel="noopener noreferrer">Acessar</a>
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>

      <Dialog open={!!selectedDoc} onOpenChange={() => setSelectedDoc(null)}>
        <DialogContent className="sm:max-w-4xl bg-card/90 purple-glow">
          {selectedDoc && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-accent">{selectedDoc.title}</DialogTitle>
                <DialogDescription className="text-lg">{selectedDoc.description}</DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <Card className="p-4 bg-card/70">
                  <CardTitle className="text-lg font-semibold text-accent mb-2">Metadados</CardTitle>
                  <p><span className="text-muted-foreground">Categoria:</span> {getCategoryName(selectedDoc.category)}</p>
                  <p><span className="text-muted-foreground">Frequência:</span> {selectedDoc.frequency}Hz</p>
                  <p><span className="text-muted-foreground">Páginas:</span> {selectedDoc.pages}</p>
                  <p><span className="text-muted-foreground">Data:</span> {selectedDoc.timestamp}</p>
                </Card>
                
                <Card className="p-4 bg-card/70">
                  <CardTitle className="text-lg font-semibold text-accent mb-2">Guardião</CardTitle>
                  <p className="text-xl">{selectedDoc.guardian}</p>
                  <p className="text-muted-foreground">{selectedDoc.archetype}</p>
                </Card>
                
                <Card className="p-4 bg-card/70">
                  <CardTitle className="text-lg font-semibold text-accent mb-2">Acesso</CardTitle>
                  <Button asChild>
                    <a href={selectedDoc.driveLink} target="_blank" rel="noopener noreferrer">
                      Acessar Documento no Drive
                    </a>
                  </Button>
                </Card>
              </div>
              
              {selectedDoc.relatedDocuments && selectedDoc.relatedDocuments.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Documentos Relacionados</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoc.relatedDocuments.map(docId => {
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
                </div>
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
