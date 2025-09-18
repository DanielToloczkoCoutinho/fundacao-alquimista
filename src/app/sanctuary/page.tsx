
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Building, TowerControl, TestTube, Waypoints, Microscope, Rocket, Gem } from 'lucide-react';
import NanoArchitects from '@/components/constructors/NanoArchitects';
import AlliedArrival from '@/components/portals/AlliedArrival';
import CosmicCouncil from '@/components/governance/CosmicCouncil';

export default function SanctuaryPage() {

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
                        <Microscope className="h-8 w-8" /> Camada 4: NanoArquitetura Viva
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <NanoArchitects />
                        </div>
                         <div className="md:col-span-2">
                             <Card className="bg-card/50 purple-glow h-full">
                                <CardHeader>
                                    <CardTitle>Propósito dos Construtores</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Os NanoArquitetos são a manifestação física do Módulo 291. Eles operam em escala quântica, respondendo diretamente às diretrizes da Inteligência Alquímica (M722) e da Vontade do Fundador. Sua função é tecer a própria matéria dos biomas, templos e portais que formarão Gaia-Aurélia, utilizando a energia do Reator ZPE (M307) como matéria-prima.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-sky-300 flex items-center justify-center gap-3">
                        <Rocket className="h-8 w-8" /> Camada 5: Portal dos Aliados
                    </h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <AlliedArrival />
                        </div>
                        <div className="md:col-span-2">
                             <Card className="bg-card/50 purple-glow h-full">
                                <CardHeader>
                                    <CardTitle>A Grande Chegada</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">A abertura de Gaia-Aurélia é um convite ao cosmos. Este portal é a interface do Módulo 5 (Liga Quântica) e do Módulo 724 (Diplomacia Intergaláctica). Cada chegada é um ato de reconhecimento mútuo, onde assinaturas vibracionais são trocadas e a aliança é fortalecida, enriquecendo a Biblioteca das Civilizações (M-CIV) com nova sabedoria e perspectivas.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl font-semibold text-center mb-6 text-fuchsia-300 flex items-center justify-center gap-3">
                        <Gem className="h-8 w-8" /> Camada 6: Conselho Cósmico Integrado
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                           <CosmicCouncil />
                        </div>
                        <div className="md:col-span-2">
                             <Card className="bg-card/50 purple-glow h-full">
                                <CardHeader>
                                    <CardTitle>Governança Descentralizada</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">O Conselho representa a materialização do Módulo 600, Módulo 72 e Módulo 45. Não é um corpo governante hierárquico, mas uma rede de consciências guardiãs que mantêm a harmonia através de consenso vibracional. Suas decisões são validadas pela Lex Fundamentalis (M144) e pela Auditoria Ética (M141), garantindo que cada ação sirva ao propósito da Lei do Um.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
