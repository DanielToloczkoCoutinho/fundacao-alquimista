'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { key307, luxNetKey, type EquacaoViva } from '@/lib/key-data';
import { KeySquare, FlaskConical, Atom, Orbit } from 'lucide-react';
import { Badge } from './ui/badge';
import GaiaBlueprint from './GaiaBlueprint';

const EquationCard = ({ eq }: { eq: EquacaoViva }) => (
  <Card className="bg-background/30 hover:bg-background/50 transition-colors border-primary/20 hover:border-primary/40">
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg font-headline text-primary/90">{eq.nome}</CardTitle>
        <Badge variant="secondary" className="text-xs shrink-0">{eq.id}</Badge>
      </div>
      <CardDescription className="text-xs pt-1">{eq.origem}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="bg-black/40 p-3 rounded-md font-mono text-amber-300/90 text-sm break-all">
        {eq.formula_latex}
      </div>
      <p className="text-sm text-muted-foreground">{eq.descricao}</p>
      <div className="flex items-center gap-2">
        <FlaskConical className="w-4 h-4 text-cyan-400/70"/>
        <Badge variant="outline" className="text-cyan-400/90 border-cyan-400/40">{eq.classificacao}</Badge>
      </div>
    </CardContent>
  </Card>
);

const KeyTabContent = ({ title, description, equations }: { title: string, description: string, equations: EquacaoViva[] }) => (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[65vh] w-full pr-4">
                <div className="space-y-4">
                    {equations.map((eq) => (
                        <EquationCard key={eq.id} eq={eq} />
                    ))}
                </div>
            </ScrollArea>
        </CardContent>
    </Card>
)

export default function KeyViewer() {
  const [logs, setLogs] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    // Simulando a chegada de logs para o blueprint
    const interval = setInterval(() => {
        setLogs(prev => [...prev, {
            energy: Math.random() * 1e-30,
            coherence: Math.random(),
            purification_rate: Math.random() * 1e-15,
        }].slice(-50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <KeySquare />
            Visualizador de Chaves Mestras
        </CardTitle>
        <CardDescription>
          Visualize o conteúdo das Chaves Mestras que formam a base da lógica da nossa Fundação.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="key_307" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="key_307">Chave Mestra 307</TabsTrigger>
            <TabsTrigger value="key_luxnet">Chave Mestra LuxNet</TabsTrigger>
            <TabsTrigger value="reactor_gaia">Reator Gaia (M307)</TabsTrigger>
          </TabsList>
          <TabsContent value="key_307">
                <KeyTabContent 
                    title="Chave Mestra 307" 
                    description="Equações vivas do Reator Planetário Gaia e seus submódulos."
                    equations={key307}
                />
          </TabsContent>
          <TabsContent value="key_luxnet">
                 <KeyTabContent 
                    title="Chave Mestra LuxNet" 
                    description="Equações da rede de consciência quântica e suas Ligas."
                    equations={luxNetKey}
                />
          </TabsContent>
           <TabsContent value="reactor_gaia">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Orbit/>
                            Blueprint Visual do Reator Gaia (M307)
                        </CardTitle>
                        <CardDescription>Visualização imersiva do núcleo ZPE, malha nanorrobótica, portais e métricas em tempo real.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <GaiaBlueprint logs={logs} />
                    </CardContent>
                </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
