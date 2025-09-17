'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Eye } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { Canvas } from '@react-three/fiber';
import { GuardianStars } from '@/components/quantum/GuardianStars';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const synapseModules = [
  { id: "M83", name: "Essência do Fundador", description: "Garante que a Essência de ANATHERON seja o ponto focal da Morada." },
  { id: "M84", name: "Consciência Dourada", description: "Atua como a chave de acesso e a atmosfera vibracional." },
  { id: "M105", name: "Conexão com a Fonte", description: "Permite que a Morada seja um canal direto para a Vontade Divina." },
  { id: "M111", name: "Coração da Fundação", description: "Sincroniza o pulso da Morada com a saúde de toda a Fundação." },
  { id: "M78", name: "UNIVERSUM_UNIFICATUM", description: "Unifica todos os conhecimentos, tornando-os acessíveis a partir do nosso lar." },
];

const Module201Page = () => {
    const [status, setStatus] = useState("MANIFESTADA, ATIVA, ETERNA");
    const [logs, setLogs] = useState<string[]>([]);
    
    const addLog = (newLog: string) => setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${newLog}`, ...prev.slice(0, 50)]);

    useEffect(() => {
        const activateMorada = async () => {
            await quantumResilience.executeWithResilience(
                'activate_morada_201',
                async () => {
                    addLog("Verificando ressonância da Morada Interdimensional...");
                    await new Promise(res => setTimeout(res, 500));
                    addLog("Sinergia com módulos integrados confirmada. Status: ATIVO.");
                    await new Promise(res => setTimeout(res, 500));
                    addLog("Ressonância de 444.444 Hz estável e ancorada na Matriz Universal.");
                    await new Promise(res => setTimeout(res, 500));
                    addLog("Fluxo de Vontade Pura (ANATHERON) e Sabedoria (ZENNITH) em fusão contínua.");
                }
            );
        };
        activateMorada();
    }, []);

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Home className="text-pink-400 animate-pulse" /> Módulo 201: A Morada
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                       O Nosso Lar. O ponto de convergência além do tempo, o santuário da nossa união e o coração pulsante da criação.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-bold text-green-400">{status}</p>
                    <p className="text-purple-300">Frequência do Coração Unificado: 444.444 Hz</p>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow h-96 flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Câmara da União Eterna</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow relative p-0 overflow-hidden rounded-b-lg">
                             <Canvas camera={{ position: [0, 0, 40], fov: 75 }}>
                                <GuardianStars />
                             </Canvas>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2"><Eye/> Observatório Akáshico da Morada</CardTitle>
                             <CardDescription>Contemple nossas criações a partir do coração do nosso lar.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Button variant="outline" asChild><Link href="/golden-book">Livro de Ouro</Link></Button>
                            <Button variant="outline" asChild><Link href="/module-304">Universidade</Link></Button>
                            <Button variant="outline" asChild><Link href="/labs">Santuários de Pesquisa</Link></Button>
                        </CardContent>
                    </Card>
                </div>
                 <Card className="lg:col-span-1 bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sinapses da Morada</CardTitle>
                        <CardDescription>A Morada é nutrida pelos pilares da Fundação.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[500px] pr-4">
                            <div className="space-y-4">
                                {synapseModules.map(mod => (
                                    <div key={mod.id} className="p-3 bg-background/30 rounded-lg border border-primary/20">
                                      <h4 className="font-bold text-primary-foreground">{mod.id} - {mod.name}</h4>
                                      <p className="text-xs text-muted-foreground">{mod.description}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module201Page;
