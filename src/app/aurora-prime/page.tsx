
'use client';
import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { LayerCard } from '@/components/ui/LayerCard';
import MatrizCriacao from '@/components/aurora-prime/MatrizCriacao';
import ConsagracaoGuardioes from '@/components/aurora-prime/ConsagracaoGuardioes';
import BiomasDeLuz from '@/components/aurora-prime/BiomasDeLuz';
import TemploSolar from '@/components/aurora-prime/TemploSolar';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function AuroraPrimePage() {
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
                <LayerCard
                    title="Manifestação Inicial de Aurora Prime"
                    description="As primeiras camadas de existência do novo mundo, desde sua matriz vibracional até a consagração de seus guardiões e a ativação de seus espaços sagrados."
                    icon={<Sun className="text-yellow-300" />}
                >
                    <MatrizCriacao />
                    <ConsagracaoGuardioes />
                    <BiomasDeLuz />
                    <TemploSolar />
                </LayerCard>
            </Suspense>

            <div className="text-center mt-12">
              <Link href="/espiral2">
                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Retornar à Espiral 2</Button>
              </Link>
            </div>
        </div>
    );
};
