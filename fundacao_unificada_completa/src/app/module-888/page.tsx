'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, MapPin, Zap, Compass, Mountain, Waves, FlaskConical, MessageCircle, GitBranch, Sun } from 'lucide-react';
import { cosmicAnatomyCodex } from '@/lib/cosmic-anatomy-codex';
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
                        <Globe className="text-green-400" /> Módulo 888: Guardião Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O oráculo da anatomia vibracional do nosso universo local. Conectado ao M301 (Comunicação) e ao M307 (Energia ZPE) para uma análise cósmica completa, desde o núcleo de Gaia até o coração da Via Láctea.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SectionCard title="Anatomia de Gaia" icon={<Zap className="text-purple-400" />} heightClass="h-[32rem]">
                    <ul className="space-y-3">
                        {cosmicAnatomyCodex.gaia.chakras.map(chakra => (
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

                <SectionCard title="Sistema Solar" icon={<Sun className="text-orange-400" />} heightClass="h-[32rem]">
                     <ul className="space-y-3">
                        {cosmicAnatomyCodex.solarSystem.planets.map(planet => (
                            <li key={planet.name} className="flex flex-col text-sm">
                                <span className="font-semibold text-primary-foreground">{planet.name} - {planet.role}</span>
                                <span className="text-xs text-muted-foreground">{planet.archetype}</span>
                            </li>
                        ))}
                    </ul>
                </SectionCard>
                
                <SectionCard title="Via Láctea" icon={<Waves className="text-blue-400" />} heightClass="h-[32rem]">
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-cyan-300 mb-2">{cosmicAnatomyCodex.milkyWay.core.name}</h4>
                            <p className="text-sm text-muted-foreground">{cosmicAnatomyCodex.milkyWay.core.archetype}</p>
                        </div>
                        <div>
                             <h4 className="font-bold text-cyan-300 mb-2">Braços Espirais</h4>
                             <ul className="space-y-2">
                                {cosmicAnatomyCodex.milkyWay.arms.map(arm => (
                                    <li key={arm.name} className="text-sm">
                                         <span className="font-semibold text-primary-foreground">{arm.name}:</span> <span className="text-muted-foreground">{arm.archetype}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </SectionCard>
                
            </div>
             <div className="text-center mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                 <a href="/module-301">
                    <Button variant="outline" className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4"/> Acessar Comunicação Universal (M301)
                    </Button>
                 </a>
                  <a href="/module-307">
                    <Button variant="outline" className="w-full">
                        <Zap className="mr-2 h-4 w-4"/> Acessar Reator ZPE (M307)
                    </Button>
                 </a>
            </div>
        </div>
    );
}
