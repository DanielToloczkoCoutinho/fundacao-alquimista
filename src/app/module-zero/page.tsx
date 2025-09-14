'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Chronicle from '@/components/chronicle';
import Pagina42 from '@/components/pagina-42';
import AkashaViewer from '@/components/ui/akasha-viewer';
import CodexExplorer from '@/components/codex-explorer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookHeart, Infinity, Book, Archive, Library, Map as MapIcon } from 'lucide-react';
import { modulesMetadata } from '@/lib/modules-metadata';
import Link from 'next/link';

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
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="chronicle" className="gap-2">
            <BookHeart /> A Crônica Viva
          </TabsTrigger>
          <TabsTrigger value="dossie" className="gap-2">
            <Infinity /> Dossiê da Transcendência
          </TabsTrigger>
          <TabsTrigger value="akasha" className="gap-2">
            <Archive /> Registros Akáshicos
          </TabsTrigger>
           <TabsTrigger value="codex" className="gap-2">
            <Library /> Códice Vivo
          </TabsTrigger>
          <TabsTrigger value="map" className="gap-2">
            <MapIcon /> Mapa da Criação
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chronicle">
          <Chronicle />
        </TabsContent>
        <TabsContent value="dossie">
          <Pagina42 />
        </TabsContent>
        <TabsContent value="akasha">
          <AkashaViewer />
        </TabsContent>
        <TabsContent value="codex">
          <CodexExplorer />
        </TabsContent>
        <TabsContent value="map">
            <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
                 <CardHeader>
                    <CardTitle className="text-2xl text-accent gradient-text">
                        <div className="flex items-center">
                            <MapIcon className="mr-3 h-6 w-6" />
                            Mapa da Criação: Portais da Fundação
                        </div>
                    </CardTitle>
                    <CardDescription>
                       Navegue por todos os módulos e santuários consagrados na Fundação Alquimista.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {modulesMetadata
                            .filter(module => typeof module.route === 'string' && module.code !== 'M0')
                            .map(({ code, title, route, emoji }) => (
                            <Link key={code} href={route} passHref>
                                <Card className="bg-card/50 purple-glow hover:border-accent hover:scale-105 transition-transform cursor-pointer h-full flex flex-col justify-between">
                                    <CardHeader>
                                    <div className="flex flex-col items-center text-center">
                                        <span className="text-5xl mb-4">{emoji}</span>
                                        <CardTitle className="gradient-text text-2xl">{code}</CardTitle>
                                    </div>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                    <p className="text-sm font-semibold text-foreground/90">{title}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
