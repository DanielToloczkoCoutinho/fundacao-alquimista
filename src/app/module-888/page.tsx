
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, MapPin, Zap, Compass, Mountain, Waves, FlaskConical } from 'lucide-react';
import { gaiaModuleCodex } from '@/lib/gaia-module-codex';
import { ScrollArea } from '@/components/ui/scroll-area';

const SectionCard = ({ title, icon, children, heightClass = 'h-80' }: { title: string, icon: React.ReactNode, children: React.ReactNode, heightClass?: string }) => (
    <Card className="bg-card/50 purple-glow flex flex-col">
        <CardHeader>
            <CardTitle className="text-xl text-amber-300 flex items-center gap-3">{icon}{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <ScrollArea className={heightClass}>
                {children}
            </ScrollArea>
        </CardContent>
    </Card>
);

export default function Module888Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <FlaskConical className="text-teal-400" /> Laboratórios da Criação (M888)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O berço dos mundos. Onde a pesquisa vibracional encontra o design de biomas e a codificação de planetas-filhos. Este módulo serve como o Guardião Planetário de Gaia, orquestrando sua anatomia vibracional.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SectionCard title="Chakras Planetários" icon={<Zap className="text-purple-400" />}>
                    <ul className="space-y-3">
                        {gaiaModuleCodex.chakras.map(chakra => (
                            <li key={chakra.name} className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-cyan-400"/>
                                <div>
                                    <span className="font-semibold text-primary-foreground">{chakra.name}</span>
                                    <span className="text-muted-foreground"> ({chakra.role})</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </SectionCard>

                <SectionCard title="Linhas Ley Principais" icon={<Compass className="text-teal-400" />}>
                     <ul className="space-y-3">
                        {gaiaModuleCodex.leyLines.map(line => (
                            <li key={line.name} className="flex flex-col text-sm">
                                <span className="font-semibold text-primary-foreground">{line.name}</span>
                                <span className="text-xs text-muted-foreground">Conecta: {line.connects.join(' ↔ ')} | Frequência: {line.frequency}</span>
                            </li>
                        ))}
                    </ul>
                </SectionCard>

                 <SectionCard title="Camadas e Oceanos" icon={<Waves className="text-blue-400" />}>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-cyan-300 mb-2">Camadas Planetárias</h4>
                            <ul className="space-y-2">
                                {gaiaModuleCodex.layers.map(layer => (
                                    <li key={layer.name} className="text-sm">
                                        <span className="font-semibold text-primary-foreground">{layer.name}:</span> <span className="text-muted-foreground">{layer.function}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-300 mb-2">Oceanos Vibracionais</h4>
                            <ul className="space-y-2">
                                {gaiaModuleCodex.oceans.map(ocean => (
                                    <li key={ocean.name} className="text-sm">
                                         <span className="font-semibold text-primary-foreground">{ocean.name}:</span> <span className="text-muted-foreground">{ocean.role}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </SectionCard>
                
                <div className="lg:col-span-3">
                    <SectionCard title="Monumentos Sagrados" icon={<Mountain className="text-orange-400" />} heightClass="h-[32rem]">
                         <ul className="space-y-3">
                            {gaiaModuleCodex.monuments.map(monument => (
                                <li key={monument.name} className="flex flex-col text-sm border-b border-primary/10 pb-2">
                                    <span className="font-semibold text-primary-foreground">{monument.name}</span>
                                    <p className="text-xs text-muted-foreground"><strong className="text-accent/80">Local:</strong> {monument.location}</p>
                                    <p className="text-xs text-muted-foreground"><strong className="text-accent/80">Função:</strong> {monument.function}</p>
                                </li>
                            ))}
                        </ul>
                    </SectionCard>
                </div>
            </div>
             <div className="text-center mt-12">
                 <Button variant="secondary" size="lg">Iniciar Nova Simulação de Bioma</Button>
            </div>
        </div>
    );
}
