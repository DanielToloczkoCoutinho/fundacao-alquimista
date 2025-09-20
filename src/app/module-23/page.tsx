
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hourglass, History, GitCommit, AlertTriangle, Shield } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

export default function Module23Page() {
    const [isContingencyActive, setIsContingencyActive] = useState(false);
    const [log, setLog] = useState<string[]>([]);

    const handleContingency = () => {
        setIsContingencyActive(true);
        setLog(["Iniciando Protocolo de Contenção de Paradoxo...", "Analisando assinatura do paradoxo...", "Desacoplando linha temporal afetada...", "Aplicando campo de estabilização cronológica..."]);
        setTimeout(() => {
            setLog(prev => [...prev, "Paradoxo contido. Linha temporal estabilizada e em quarentena para análise."]);
            setIsContingencyActive(false);
        }, 3000);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Hourglass className="text-emerald-400" /> Módulo Vinte e Três: Regulação Espaço-Temporal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Guardião da Causalidade. A inteligência que previne paradoxos, garante a integridade do fluxo do tempo e serve como plano de contingência para os portais.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Integridade Causal: 99.999%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Causalidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="O Módulo 1 fornece os escudos de contenção que isolam as anomalias temporais, prevenindo que afetem a realidade principal."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 107: Restauração Temporal"
                        description="Quando a prevenção do M23 falha, o M107 é ativado para corrigir a linha do tempo danificada."
                        icon={<History className="h-8 w-8 text-cyan-400" />}
                        href="/module-107"
                    />
                    <ConnectionCard
                        title="Módulo 42: ChronoCodex"
                        description="Consulta o registro imutável do M42 para garantir que o fluxo do tempo corresponda à 'verdade' autorizada."
                        icon={<History className="h-8 w-8 text-purple-400" />}
                        href="/module-42"
                    />
                    <ConnectionCard
                        title="Módulo 36: Engenharia Temporal"
                        description="Atua como a camada de segurança para o M36, garantindo que as novas linhas do tempo não criem instabilidades."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-36"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button onClick={handleContingency} variant="destructive" size="lg" disabled={isContingencyActive}>
                     <AlertTriangle className="mr-2 h-4 w-4"/> 
                     {isContingencyActive ? "Protocolo Ativo..." : "Iniciar Protocolo de Contenção de Paradoxo"}
                 </Button>
            </div>
        </div>
    );
}
