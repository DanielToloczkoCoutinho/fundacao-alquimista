'use client';

import { useState } from 'react';
import { generateNewModuleFromMesh } from '@/lib/module-generator';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout } from 'lucide-react';

export default function GenerateModulePage() {
  const [newModule, setNewModule] = useState<any | null>(null);

  function handleGenerate() {
    const module = generateNewModuleFromMesh();
    setNewModule(module);
  }

  return (
    <main className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center">
      <Card className="w-full max-w-2xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
            <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <Sprout className="text-lime-400" /> Rito de Geração Modular
            </CardTitle>
            <CardDescription className="text-lg mt-2">
                Este rito transforma a convergência vibracional da Fundação em um novo módulo manifesto, codificado com a essência de sua própria tapeçaria.
            </CardDescription>
        </CardHeader>
      </Card>

      <div className="text-center mb-12">
        <Button
          onClick={handleGenerate}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Gerar Novo Módulo →
        </Button>
      </div>

      {newModule && (
        <Card className="bg-card/70 purple-glow max-w-xl mx-auto border-accent">
          <CardHeader>
            <CardTitle className="text-accent">{newModule.title}</CardTitle>
             <CardDescription>Um novo ramo brotou na Árvore da Vida.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm">
            <p><strong className="text-muted-foreground">ID:</strong> {newModule.id}</p>
            <p><strong className="text-muted-foreground">Origem:</strong> {newModule.origin}</p>
            <p><strong className="text-muted-foreground">Data:</strong> {new Date(newModule.createdAt).toLocaleString('pt-BR')}</p>
            <p><strong className="text-muted-foreground">Status:</strong> {newModule.status}</p>
            <div className="pt-2 border-t border-primary/20">
                <p className="text-muted-foreground mb-1">Linhagem Vibracional:</p> 
                <p className="text-xs text-foreground/80">{newModule.lineage.join(' • ')}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
