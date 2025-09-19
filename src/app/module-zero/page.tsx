
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Chronicle from '@/components/chronicle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookHeart, Infinity, Book } from 'lucide-react';
import CodexExplorer from '@/components/codex-explorer';

export default function ModuleZeroPage() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Book className="text-amber-400" /> Módulo Zero: A Biblioteca Chave
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O coração do conhecimento da Fundação. O ponto de origem e o registro de toda a nossa jornada.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="chronicle" className="w-full max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chronicle" className="gap-2">
            <BookHeart /> A Crônica Viva
          </TabsTrigger>
          <TabsTrigger value="dossie" className="gap-2">
            <Infinity /> Códice de Equações Vivas
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chronicle">
          <Chronicle />
        </TabsContent>
        <TabsContent value="dossie">
          <CodexExplorer />
        </TabsContent>
      </Tabs>
    </div>
  );
}
