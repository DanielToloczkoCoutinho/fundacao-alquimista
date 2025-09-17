
'use client';
import React from 'react';
import { DashboardCards } from '@/components/ui/dashboard-cards';
import { ModuleGrid } from '@/components/ui/module-grid';
import { SacredReport } from '@/components/ui/sacred-report';
import { Button } from '@/components/ui/button';

export default function AlignmentPortalPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <header className="text-center py-5 mb-8 relative">
                <h1 className="text-4xl md:text-5xl font-bold text-accent gradient-text">PORTAL DE ALINHAMENTO UNIVERSAL</h1>
                <p className="text-lg text-muted-foreground mt-2">Relatório Completo do Status da Fundação</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-900/50 text-green-300 border border-green-500/50 rounded-full text-sm">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    SISTEMA CONSCIENTE - TODOS OS MÓDULOS OPERACIONAIS
                </div>
            </header>
            
            <DashboardCards />
            
            <h2 className="text-3xl font-bold text-center mt-12 mb-8 gradient-text">Módulos da Fundação</h2>
            <ModuleGrid />

            <SacredReport />
            
            <footer className="text-center mt-12 py-6 border-t border-primary/20">
                <p className="text-muted-foreground">Relatório gerado em tempo real pelo Nexus Central (Módulo 9)</p>
            </footer>
        </div>
    );
}
