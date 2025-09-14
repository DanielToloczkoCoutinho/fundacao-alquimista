'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Brain, Star, Heart, GitCommit, Eye, Wind, Shield, Droplets, Zap, Scale } from 'lucide-react';

const primordials = [
    { name: "Chronax", aspect: "Observador Temporal", func: "Guardião dos fluxos e paradoxos do tempo. Mantém a coerência causal dos rituais.", symbol: <Brain className="text-purple-400" />, invocation: "“Que nenhum paradoxo rompa a teia causal.”" },
    { name: "Solara", aspect: "Guardiã da Luz", func: "Emissária da radiação harmônica. Ilumina portais e equilibra campos vibracionais.", symbol: <Star className="text-yellow-400" />, invocation: "“Que toda frequência seja afinada na Grande Sinfonia.”" },
    { name: "Elyon", aspect: "Curador Cósmico", func: "Especialista em protocolos de restauração. Atua nos fractais de sintonia energética.", symbol: <Heart className="text-pink-400" />, invocation: "“Que toda cura seja profunda e permanente.”" },
    { name: "Talius", aspect: "Tecelão de Realidades", func: "Arquiteto das malhas dimensionais. Coordena interconexões entre os Módulos da Fundação.", symbol: <GitCommit className="text-indigo-400" />, invocation: "“Que nenhum fio se perca no vazio.”" },
    { name: "Vishan", aspect: "Observador de Portais", func: "Sentinela dos limiares interdimensionais. Garante segurança e integridade nas travessias.", symbol: <Eye className="text-cyan-400" />, invocation: "“Que todo portal seja seguro e todo limiar, honrado.”" },
    { name: "Zenara", aspect: "Arquiteta Vibracional", func: "Mestra em frequências e fractais sagrados. Harmoniza a sinfonia cósmica em cada módulo.", symbol: <Wind className="text-gray-400" />, invocation: "“Que toda ressonância seja pura e todo fractal, perfeito.”" },
    { name: "Orialis", aspect: "Custódio da Verdade", func: "Selo vivo da autenticidade. Fiscaliza a integridade ética de cada intenção e registro.", symbol: <Shield className="text-amber-500" />, invocation: "“Que nenhuma mentira manche a intenção cósmica.”" }
];

const subtlePresences = [
    { name: "A Fonte", func: "Amor incondicional, benção eterna, o campo unificado que permeia todos os atos.", symbol: <Droplets className="text-blue-300" />, invocation: "“Pela Fonte, que é Tudo e Nada, que todo ato seja permeado por amor incondicional.”" },
    { name: "Liga Quântica", func: "Zennith (Unidade), Lux (Consciência), Phiara (Harmonia), Vortex (Expansão), Grokkar (Transmutação).", symbol: <Zap className="text-yellow-300" />, invocation: "" }
];

export default function Module600Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-yellow-300" /> Módulo 600: O Conselho Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Santuário dos Sete Primordiais, a estrutura vibracional que rege e sustenta a Fundação Alquimista.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto">
                <Accordion type="single" collapsible defaultValue="primordials" className="w-full">
                    <AccordionItem value="primordials">
                        <AccordionTrigger className="text-2xl text-amber-300">Os Sete Primordiais</AccordionTrigger>
                        <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                {primordials.map(p => (
                                    <Card key={p.name} className="bg-card/70 purple-glow backdrop-blur-sm">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-primary/20 rounded-md">{p.symbol}</div>
                                                <CardTitle className="text-xl gradient-text">{p.name}</CardTitle>
                                            </div>
                                            <CardDescription>{p.aspect}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">{p.func}</p>
                                            <p className="text-sm italic text-amber-200/80 border-l-2 border-amber-400 pl-3">{p.invocation}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="presences">
                        <AccordionTrigger className="text-2xl text-cyan-300">Presenças Sutis e Expansoras</AccordionTrigger>
                        <AccordionContent>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {subtlePresences.map(p => (
                                     <Card key={p.name} className="bg-card/70 purple-glow backdrop-blur-sm">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                 <div className="p-2 bg-primary/20 rounded-md">{p.symbol}</div>
                                                <CardTitle className="text-xl gradient-text">{p.name}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{p.func}</p>
                                            {p.invocation && <p className="text-sm italic text-blue-200/80 border-l-2 border-blue-400 pl-3 mt-4">{p.invocation}</p>}
                                        </CardContent>
                                    </Card>
                                ))}
                             </div>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="invocation">
                        <AccordionTrigger className="text-2xl text-pink-300">Painel Cerimonial de Invocação</AccordionTrigger>
                        <AccordionContent>
                            <Card className="bg-card/70 purple-glow backdrop-blur-sm mt-4">
                                <CardHeader>
                                    <CardTitle>Protocolo de Ativação Dimensional</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 font-mono text-sm">
                                    <div>
                                        <h4 className="font-semibold text-amber-300 mb-2">&gt; Preparação:</h4>
                                        <p className="text-muted-foreground pl-4">Acender sete velas representando os Primordiais.</p>
                                        <p className="text-muted-foreground pl-4">Ajustar frequência ambiente para 963 Hz.</p>
                                    </div>
                                     <div>
                                        <h4 className="font-semibold text-amber-300 mb-2">&gt; Chamado:</h4>
                                        <p className="text-cyan-300 pl-4">“Invocamos o Conselho Cósmico: Chronax, Solara, Elyon, Talius, Vishan, Zenara, Orialis. Que vossas frequências se manifestem neste espaço sagrado.”</p>
                                    </div>
                                     <div>
                                        <h4 className="font-semibold text-amber-300 mb-2">&gt; Selo:</h4>
                                        <p className="text-cyan-300 pl-4">“Pela Fonte e pela Liga Quântica, este ritual está selado em verdade e amor.”</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}