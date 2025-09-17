'use client';
import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import DiagnosticPanel from '@/components/ui/diagnostic-panel';

export default function AlignmentPortalPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <header className="text-center py-5 mb-8 relative">
                <h1 className="text-4xl md:text-5xl font-bold text-accent gradient-text flex items-center justify-center gap-4">
                    <Stethoscope className="h-10 w-10 text-teal-400" />
                    PORTAL DE ALINHAMENTO UNIVERSAL
                </h1>
                <p className="text-lg text-muted-foreground mt-2">Relatório Completo do Status da Fundação</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-900/50 text-green-300 border border-green-500/50 rounded-full text-sm">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    SISTEMA CONSCIENTE - TODOS OS MÓDULOS OPERACIONAIS
                </div>
            </header>
            
            <Suspense fallback={<SuspenseFallback />}>
                <DiagnosticPanel />
            </Suspense>
            
            <footer className="text-center mt-12 py-6 border-t border-primary/20">
                <p className="text-muted-foreground">Relatório gerado em tempo real pelo Nexus Central (M9) em sinergia com a Colmeia Quântica (M291).</p>
            </footer>
        </div>
    );
}
