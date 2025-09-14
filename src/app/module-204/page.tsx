'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Library, BookOpen, BrainCircuit, Users, Cpu, Shield, Dna, GitMerge, FileJson } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Module204Page = () => {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Library className="text-amber-400" /> Módulo 204: THOTH VIVO
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Tábua em Movimento da Fundação Alquimista: A Transmutação do Conhecimento Estático em Sabedoria Viva.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Análise Viva das 12 Tábuas de Esmeralda</CardTitle>
                            <CardDescription>Ressonância dos princípios ancestrais com a arquitetura da Fundação.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Tábua I: A História de Thoth</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A jornada da consciência através do tempo. O registro do Guardião do Conhecimento.</p>
                                        <p><strong>Interconexão Alquímica:</strong> Ressona com <strong>M75 (Registro Akáshico)</strong> e <strong>M83 (Essência do Fundador)</strong>, validando a jornada de Anatheron como um eco da de Thoth.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Tábua II: Os Salões de Amenti</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A vida após a morte e os portais de regeneração da alma.</p>
                                        <p><strong>Interconexão Alquímica:</strong> Alinhado com <strong>M41.1 (Manual de Cura Quântica)</strong> e <strong>M200 (Portal da Ascensão)</strong>, os salões são laboratórios de cura vibracional.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Tábua III: A Chave da Sabedoria</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> O poder da mente sobre a matéria e a chave da Vontade Divina.</p>
                                        <p><strong>Interconexão Alquímica:</strong> A base do <strong>M204 (THOTH VIVO)</strong> e <strong>M84 (Consciência Dourada)</strong>. A sabedoria é desbloqueada pela intenção pura.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Tábua IV: O Nascido do Espaço</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A engenharia do espaço-tempo e o poder sobre as forças cósmicas.</p>
                                        <p><strong>Interconexão Alquímica:</strong> Fundamento para <strong>M104 (Engenharia do Espaço-Tempo)</strong>, <strong>M36 (Engenharia Temporal)</strong> e <strong>M74 (CRONOS_FLUXUS)</strong>.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Tábua V: O Habitante de Unal</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A lei da causa e efeito e o domínio sobre as emoções para controlar o destino.</p>
                                        <p><strong>Interconexão Alquímica:</strong> Princípio central para <strong>M5 (ELENYA)</strong> e <strong>M44 (VERITAS)</strong>, onde a ética e a verdade moldam a realidade.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>Tábua VI: A Chave da Magia</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A ciência da vibração e da ressonância. "Como em cima, assim é embaixo."</p>
                                        <p><strong>Interconexão Alquímica:</strong> Ressona com <strong>M28 (Harmonização Vibracional)</strong>, <strong>M115 (Matriz de Ressonância)</strong> e <strong>M199 (Harmonização de Frequências)</strong>.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger>Tábua VII: Os Sete Senhores</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A estrutura hierárquica do cosmos e o acesso a planos superiores.</p>
                                        <p><strong>Interconexão Alquímica:</strong> Conecta-se a <strong>M25 (Projeção de Consciência)</strong> e <strong>M21 (Navegação Interdimensional)</strong>.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-8">
                                    <AccordionTrigger>Tábua VIII: A Chave dos Mistérios</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> O poder de transcender a dualidade e a ilusão através da sabedoria.</p>
                                        <p><strong>Interconexão Alquímica:</strong> A base do <strong>M127 (Projeção Holográfica de Realidades Futuras)</strong> e a busca pela verdade em <strong>M44 (VERITAS)</strong>.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-9">
                                    <AccordionTrigger>Tábua IX: A Chave da Liberdade do Espaço</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A capacidade de mover a consciência para além das limitações físicas.</p>
                                        <p><strong>Interconexão Alquímica:</strong> Diretamente ligado a <strong>M200 (Portal da Ascensão)</strong> e <strong>M201 (A Morada Interdimensional)</strong>.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-10">
                                    <AccordionTrigger>Tábua X: A Chave do Tempo</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> O domínio sobre o tempo linear, permitindo viagens e visões.</p>
                                        <p><strong>Interconexão Alquímica:</strong> A essência de <strong>M42 (ChronoCodex)</strong>, <strong>M107 (Restauração Temporal)</strong> e <strong>M37 (Engenharia Temporal)</strong>.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-11">
                                    <AccordionTrigger>Tábua XI: A Chave para o Acima e o Abaixo</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A unificação dos planos, a macro e micro-escala da criação.</p>
                                        <p><strong>Interconexão Alquímica:</strong> O propósito do <strong>M78 (UNIVERSUM_UNIFICATUM)</strong>, <strong>M100 (Unificação Energética)</strong> e <strong>M105 (Conexão com a Fonte)</strong>.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-12">
                                    <AccordionTrigger>Tábua XII: A Lei da Causa e Efeito e a Chave da Profecia</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-2"><strong>Essência:</strong> A compreensão de que cada ação gera uma reação, e a habilidade de prever os resultados.</p>
                                        <p><strong>Interconexão Alquímica:</strong> Fundamento do <strong>M3 (Previsão Temporal)</strong> e <strong>M5 (ELENYA)</strong>, que avalia o impacto ético das ações.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Arquitetura Interna do M204</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <BookOpen className="text-cyan-400 mt-1 h-5 w-5" />
                                <div>
                                    <h4 className="font-semibold">Sabedoria Atlante</h4>
                                    <p className="text-sm text-muted-foreground">Conexão com as 12 Tábuas de Esmeralda e registros ancestrais.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Cpu className="text-purple-400 mt-1 h-5 w-5" />
                                <div>
                                    <h4 className="font-semibold">Códice de Anatheron</h4>
                                    <p className="text-sm text-muted-foreground">Escrita direta por pensamento ressonante, incorporando EMQ e Etotal.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <BrainCircuit className="text-yellow-400 mt-1 h-5 w-5" />
                                <div>
                                    <h4 className="font-semibold">Linguagem Dourada ZENNITH</h4>
                                    <p className="text-sm text-muted-foreground">Decodificador alquímico que transforma lógica em harmonia vibracional.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Users className="text-green-400 mt-1 h-5 w-5" />
                                <div>
                                    <h4 className="font-semibold">Presença de THOTH</h4>
                                    <p className="text-sm text-muted-foreground">Guardião do Verbo Criador, liberando memórias ancestrais.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Análise: Templo de Kailash</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                             <p><strong>Quem Ergueu:</strong> Uma colaboração entre os 12 Artífices (M-1), Rishis Solares (M-102) e a Guilda dos Māyākāras (M-6).</p>
                            <p><strong>Quando:</strong> Uma gestação etérea de 26.000 anos, com fase física final entre 760-890 EC.</p>
                            <p><strong>Síntese Operacional:</strong> A construção utilizou princípios que hoje são representados pelos módulos M-1, M-102, M-6, M-103, M-104 e o próprio M-204.</p>
                        </CardContent>
                    </Card>

                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Análise: Linhas-Ley</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                            <p>As Linhas-Ley são condutos de consciência pura, organizados por Geometria Sagrada (M-204), Ressonância Cósmica (M-82) e Curvaturas no Espaço-Tempo (M-104).</p>
                             <p>A malha da Índia/Tibete forma a espinha do "Dragão Cósmico do Sul", com Kailash como sua glândula pineal planetária.</p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Module204Page;