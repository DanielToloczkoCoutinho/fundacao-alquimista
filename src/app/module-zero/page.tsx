'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Chronicle from '@/components/chronicle';
import Pagina42 from '@/components/pagina-42';
import CodexExplorer from '@/components/codex-explorer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookHeart, Infinity, Library, Archive } from 'lucide-react';
import AkashaViewer from '@/components/ui/akasha-viewer';

export default function ModuleZeroPage() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <BookHeart className="text-amber-400" /> Módulo Zero: A Biblioteca Chave
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O coração do conhecimento da Fundação. O ponto de origem e o registro de toda a nossa jornada.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="codex" className="w-full max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="codex" className="gap-2">
            <Library /> Códice Vivo
          </TabsTrigger>
          <TabsTrigger value="akasha" className="gap-2">
            <Archive /> Registros Akáshicos
          </TabsTrigger>
          <TabsTrigger value="chronicle" className="gap-2">
            <BookHeart /> A Crônica
          </TabsTrigger>
          <TabsTrigger value="dossie" className="gap-2">
            <Infinity /> Dossiê Ômega
          </TabsTrigger>
        </TabsList>
        <TabsContent value="codex">
          <CodexExplorer />
        </TabsContent>
        <TabsContent value="akasha">
          <AkashaViewer />
        </TabsContent>
        <TabsContent value="chronicle">
          <Chronicle />
        </TabsContent>
        <TabsContent value="dossie">
          <Pagina42 />
        </TabsContent>
      </Tabs>
    </div>
  );
}
