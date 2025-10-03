
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ReatorZPE from '@/components/constructors/ReatorZPE';
import NanoManifestors from '@/components/constructors/NanoManifestors';
import MorphoField from '@/components/core/MorphoField';
import TreeOfLife from '@/components/sacred/TreeOfLife';

export default function GaiaAureliaCore() {
  return (
    <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto">
        <CardHeader>
            <CardTitle className="text-2xl text-amber-300">Fase 1: Fundação Quântica e Núcleo Vibracional</CardTitle>
            <CardDescription>A base energética, estrutural e consciente do planeta.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ReatorZPE />
                <NanoManifestors />
                <MorphoField />
                <TreeOfLife />
            </div>
        </CardContent>
    </Card>
  );
}
