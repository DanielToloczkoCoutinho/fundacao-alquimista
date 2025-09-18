'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { sefirotCodex } from '@/lib/sefirot-codex';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TreeOfLife } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Module777Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <TreeOfLife className="text-green-400" /> Módulo 777: Arquétipos da Árvore da Vida
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O mapa da consciência cósmica. Contemple as 10 Sefirot e os 22 caminhos que tecem a estrutura espiritual do universo.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="bg-card/50 purple-glow h-full">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300">As 10 Emanações (Sefirot)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ScrollArea className="h-[70vh]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
                                    {sefirotCodex.sefirot.map(sefirah => (
                                        <Card key={sefirah.id} className="bg-background/40 border-primary/20">
                                            <CardHeader>
                                                <div className="flex justify-between items-start">
                                                    <CardTitle className="text-lg text-primary-foreground">{sefirah.id}. {sefirah.name} ({sefirah.hebrewName})</CardTitle>
                                                    <Badge variant="secondary">{sefirah.frequency}</Badge>
                                                </div>
                                                <CardDescription>{sefirah.archetype}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground">{sefirah.description}</p>
                                                <Link href={`/module/${sefirah.moduleConnection}`} passHref>
                                                    <Button variant="link" className="p-0 h-auto mt-2 text-xs">Módulo: {sefirah.moduleConnection}</Button>
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                     <Card className="bg-card/50 purple-glow h-full">
                        <CardHeader>
                            <CardTitle className="text-2xl text-cyan-300">Os 22 Caminhos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[70vh]">
                                <ul className="space-y-3 pr-4">
                                    {sefirotCodex.paths.map(path => (
                                        <li key={path.id} className="text-sm border-b border-primary/10 pb-2">
                                            <p className="font-semibold text-primary-foreground">Caminho {path.id} ({path.hebrewLetter})</p>
                                            <p className="text-xs text-muted-foreground">{path.archetype}</p>
                                             <p className="text-xs text-accent/80">Conecta: {sefirotCodex.sefirot.find(s=>s.id===path.connects[0])?.name} ↔ {sefirotCodex.sefirot.find(s=>s.id===path.connects[1])?.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
