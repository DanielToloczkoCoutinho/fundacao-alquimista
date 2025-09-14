'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Shield, Zap, Sun, BarChart, ListChecks } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const ShieldStatusCard = ({ planet, status, integrity, threats }: { planet: string, status: 'ATIVO' | 'INATIVO' | 'ALERTA', integrity: number, threats: string[] }) => (
    <Card className="bg-background/40">
        <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" /> {planet}
                    </CardTitle>
                    <CardDescription>Status do Escudo Planetário</CardDescription>
                </div>
                <Badge variant={status === 'ATIVO' ? 'default' : status === 'ALERTA' ? 'destructive' : 'secondary'}>
                    {status}
                </Badge>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <Label htmlFor={`integrity-${planet}`}>Integridade do Escudo: {integrity}%</Label>
                <Progress id={`integrity-${planet}`} value={integrity} className="h-2 mt-1" />
            </div>
            <div>
                <h4 className="text-sm font-semibold mb-2">Ameaças Monitoradas:</h4>
                <div className="flex flex-wrap gap-2">
                    {threats.map(threat => (
                        <Badge key={threat} variant="outline">{threat}</Badge>
                    ))}
                </div>
            </div>
        </CardContent>
    </Card>
);

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Link href={href} passHref>
        <div className="p-4 bg-card/50 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-1">
                {icon}
                <h4 className="font-semibold text-primary-foreground">{title}</h4>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
        </div>
    </Link>
);

export default function Module8Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <Shield className="w-24 h-24 mx-auto mb-6 text-blue-400 animate-pulse" />
                <h1 className="text-5xl font-bold gradient-text">Módulo Oito — Escudo Eterno</h1>
                <p className="mt-2 text-lg text-muted-foreground">O Guardião de Mundos e Protetor da Vida Cósmica</p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300">Status da Rede de Defesa Planetária</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ShieldStatusCard 
                                planet="Terra (Gaia)"
                                status="ATIVO"
                                integrity={99.8}
                                threats={["Radiação Solar", "Fragmentos Astrais"]}
                            />
                            <ShieldStatusCard 
                                planet="Marte (Ares Prime)"
                                status="ATIVO"
                                integrity={97.2}
                                threats={["Tempestades de Poeira", "Radiação Cósmica"]}
                            />
                             <ShieldStatusCard 
                                planet="Sirius B (Aqua-Sirius)"
                                status="ALERTA"
                                integrity={85.5}
                                threats={["Anomalia Temporal", "Flutuação Dimensional"]}
                            />
                             <ShieldStatusCard 
                                planet="Xylos (Nova Gênese)"
                                status="INATIVO"
                                integrity={0}
                                threats={["Monitoramento Passivo"]}
                            />
                        </CardContent>
                    </Card>
                </div>
                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-purple-300">Conexões Arquiteturais</CardTitle>
                        <CardDescription>
                            O Módulo Oito atua em sinergia com os seguintes pilares da Fundação:
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ConnectionCard 
                            title="Módulo 1: Segurança Universal"
                            description="Implementa os protocolos de segurança em escala planetária."
                            icon={<ListChecks className="h-6 w-6 text-cyan-300" />}
                            href="/module-one"
                        />
                         <ConnectionCard 
                            title="Módulo 15: Controle Climático"
                            description="Protege os ecossistemas e climas que o M15 gerencia e sustenta."
                            icon={<Sun className="h-6 w-6 text-yellow-300" />}
                            href="/module-15"
                        />
                         <ConnectionCard 
                            title="Módulo 96: Regulação de Eventos"
                            description="Responde aos alertas de eventos cósmicos do M96, ativando escudos preventivos."
                            icon={<Zap className="h-6 w-6 text-red-400" />}
                            href="/module-96"
                        />
                    </CardContent>
                </Card>
            </div>
             <div className="text-center mt-12">
                <Button variant="outline" size="lg">Acessar Painel de Controle de Defesa Global</Button>
            </div>
        </div>
    );
}
