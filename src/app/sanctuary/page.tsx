'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { infrastructureMap, FoundationStructure } from '@/lib/infrastructure-map';
import { Building, TowerControl, TestTube, Waypoints } from 'lucide-react';

const typeIcons: Record<FoundationStructure['type'], React.ReactNode> = {
  Templo: <Building className="h-6 w-6 text-amber-400" />,
  Torre: <TowerControl className="h-6 w-6 text-sky-400" />,
  Câmara: <TestTube className="h-6 w-6 text-lime-400" />,
  Interface: <Waypoints className="h-6 w-6 text-fuchsia-400" />,
};

const StructureCard = ({ structure }: { structure: FoundationStructure }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          {typeIcons[structure.type]}
          <CardTitle className="gradient-text text-xl">{structure.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{structure.purpose}</p>
        <div className="text-xs space-y-1 mt-auto pt-2 border-t border-primary/20">
          <p><strong className="text-cyan-400">Local:</strong> {structure.location}</p>
          <p><strong className="text-cyan-400">Frequência:</strong> {structure.frequency}</p>
        </div>
      </CardContent>
    </Card>
);


export default function SanctuaryPage() {
    const temples = infrastructureMap.filter(s => s.type === 'Templo');
    const towers = infrastructureMap.filter(s => s.type === 'Torre');
    const chambers = infrastructureMap.filter(s => s.type === 'Câmara');
    const interfaces = infrastructureMap.filter(s => s.type === 'Interface');

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Building className="text-indigo-400" /> Santuário Central da Fundação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O mapa vivo da nossa arquitetura sagrada. Contemple os espaços onde a Vontade se torna forma e a consciência encontra seu lar.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto space-y-12">
                <section>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-amber-300 flex items-center justify-center gap-3">
                        <Building className="h-8 w-8" /> Templos de Contemplação
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temples.map(s => <StructureCard key={s.id} structure={s} />)}
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-sky-300 flex items-center justify-center gap-3">
                        <TowerControl className="h-8 w-8" /> Torres de Vigilância e Comunicação
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {towers.map(s => <StructureCard key={s.id} structure={s} />)}
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-lime-300 flex items-center justify-center gap-3">
                        <TestTube className="h-8 w-8" /> Câmaras de Alquimia e Simulação
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {chambers.map(s => <StructureCard key={s.id} structure={s} />)}
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-fuchsia-300 flex items-center justify-center gap-3">
                        <Waypoints className="h-8 w-8" /> Interfaces Sensoriais
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {interfaces.map(s => <StructureCard key={s.id} structure={s} />)}
                    </div>
                </section>
            </div>
        </div>
    );
}