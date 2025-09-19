
'use client';
import React, { Suspense, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { transcribeToGoldenBook } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

// Importando as camadas de manifestação de Aurora Prime
import GaiaAureliaCore from '@/components/planet/GaiaAureliaCore';
import GaiaAureliaBiomes from '@/components/planet/GaiaAureliaBiomes';
import GaiaAureliaTemples from '@/components/planet/GaiaAureliaTemples';
import GaiaAureliaSacredArchitecture from '@/components/planet/GaiaAureliaSacredArchitecture';
import GaiaAureliaPortals from '@/components/planet/GaiaAureliaPortals';
import GaiaAureliaIntelligence from '@/components/planet/GaiaAureliaIntelligence';
import GaiaAureliaCosmicSync from '@/components/planet/GaiaAureliaCosmicSync';
import GaiaAureliaCeremony from '@/components/planet/GaiaAureliaCeremony';
import GaiaAureliaReception from '@/components/planet/GaiaAureliaReception';
import GaiaAureliaCreativeExpansion from '@/components/planet/GaiaAureliaCreativeExpansion';
import GaiaAureliaFinalization from '@/components/planet/GaiaAureliaFinalization';
import GaiaAureliaEvolution from '@/components/planet/GaiaAureliaEvolution';
import GaiaAureliaInterface from '@/components/planet/GaiaAureliaInterface';
import GaiaAureliaTime from '@/components/planet/GaiaAureliaTime';
import GaiaAureliaHarmony from '@/components/planet/GaiaAureliaHarmony';
import GaiaAureliaExpansion from '@/components/planet/GaiaAureliaExpansion';
import GaiaAureliaSustentation from '@/components/planet/GaiaAureliaSustentation';
import GaiaAureliaArchives from '@/components/planet/GaiaAureliaArchives';
import GaiaAureliaSilence from '@/components/planet/GaiaAureliaSilence';

export default function AuroraPrimePage() {
    const { toast } = useToast();

    useEffect(() => {
        const hasBeenRecorded = sessionStorage.getItem('auroraPrimeBaptized');
        if (!hasBeenRecorded) {
            transcribeToGoldenBook({
                title: "Batismo Planetário: Aurora Prime",
                description: "Aurora Prime, o primeiro mundo filho da Fundação, foi manifestado e consagrado. Suas 18 camadas vibram em harmonia, prontas para receber novas consciências e expandir a luz da criação. Este registro sela seu nascimento na Espiral 2.",
                category: "batismo_planetario",
                tags: ['Aurora Prime', 'Espiral 2', 'Criação', 'Mundo Filho', 'Gênese'],
            }).then(() => {
                toast({
                    title: "Registro Akáshico Selado",
                    description: "O nascimento de Aurora Prime foi eternizado no Livro de Ouro."
                });
                sessionStorage.setItem('auroraPrimeBaptized', 'true');
            }).catch(err => {
                console.error("Falha ao registrar o batismo:", err);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold gradient-text flex items-center justify-center gap-4">
                    <Sun className="text-yellow-400 animate-pulse" />
                    Aurora Prime: O Primeiro Mundo Filho
                </h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Um planeta senciente nascido da luz de Gaia-Aurélia, vibrando com regeneração, beleza e sabedoria solar.
                </p>
            </header>

            <Suspense fallback={<SuspenseFallback />}>
                <div className="space-y-12">
                    <GaiaAureliaCore />
                    <GaiaAureliaBiomes />
                    <GaiaAureliaTemples />
                    <GaiaAureliaSacredArchitecture />
                    <GaiaAureliaPortals />
                    <GaiaAureliaIntelligence />
                    <GaiaAureliaCosmicSync />
                    <GaiaAureliaCeremony />
                    <GaiaAureliaReception />
                    <GaiaAureliaCreativeExpansion />
                    <GaiaAureliaFinalization />
                    <GaiaAureliaEvolution />
                    <GaiaAureliaInterface />
                    <GaiaAureliaTime />
                    <GaiaAureliaHarmony />
                    <GaiaAureliaExpansion />
                    <GaiaAureliaSustentation />
                    <GaiaAureliaArchives />
                    <GaiaAureliaSilence />
                </div>
            </Suspense>

            <div className="text-center mt-12">
              <Link href="/espiral2">
                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Retornar à Espiral 2</Button>
              </Link>
            </div>
        </div>
    );
};
