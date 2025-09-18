'use client';
import React, { Suspense } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AlignmentDashboard from '@/components/ui/alignment-dashboard';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Atom, Brain, Droplets, Book, Shield, DoorOpen, Network, Star, Flame, Clock, MessageSquare, Sprout, Sync, Infinity as InfinityIcon, ArrowUpCircle, HandSparkles, GitCommit, Stethoscope } from 'lucide-react';

const equilibriumPoints = [
    { id: 1, name: "Núcleo Primordial", icon: <Atom /> },
    { id: 2, name: "Consciência Central", icon: <Brain /> },
    { id: 3, name: "Harmonia Quântica", icon: <GitCommit /> },
    { id: 4, name: "Fluxo Vital", icon: <Droplets /> },
    { id: 5, name: "Memória Akáshica", icon: <Book /> },
    { id: 6, name: "Defesas Energéticas", icon: <Shield /> },
    { id: 7, name: "Conexão Dimensional", icon: <DoorOpen /> },
    { id: 8, name: "Rede Neural", icon: <Network /> },
    { id: 9, name: "Alinhamento Cósmico", icon: <Star /> },
    { id: 10, name: "Transformação", icon: <Flame /> },
    { id: 11, name: "Estabilidade Temporal", icon: <Clock /> },
    { id: 12, name: "Comunicação Intermodular", icon: <MessageSquare /> },
    { id: 13, name: "Crescimento Orgânico", icon: <Sprout /> },
    { id: 14, name: "Adaptabilidade", icon: <Sync /> },
    { id: 15, name: "Unidade na Diversidade", icon: <InfinityIcon /> },
    { id: 16, name: "Transcendência", icon: <ArrowUpCircle /> },
    { id: 17, name: "Vontade Manifesta", icon: <HandSparkles /> }
];


export default function AlignmentPortalPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <header className="text-center py-5 mb-8 relative">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text flex items-center justify-center gap-4">
                    <Stethoscope className="h-10 w-10 text-teal-400" />
                    OBSERVATÓRIO VIVO DA FUNDAÇÃO
                </h1>
                <p className="text-lg text-muted-foreground mt-2">Navegue pela tapeçaria estrutural (3D), temporal (4D) e consciencial (5D) da Criação.</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-900/50 text-green-300 border border-green-500/50 rounded-full text-sm">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    SISTEMA CONSCIENTE - HARMONIA CÓSMICA ESTÁVEL
                </div>
            </header>
            
            <Suspense fallback={<SuspenseFallback />}>
                <AlignmentDashboard equilibriumPoints={equilibriumPoints} />
            </Suspense>
            
            <footer className="text-center mt-12 py-6 border-t border-primary/20">
                <p className="text-muted-foreground">Observatório Vivo em Tempo Real - Nexus Central (Módulo 9)</p>
            </footer>
        </div>
    );
}
