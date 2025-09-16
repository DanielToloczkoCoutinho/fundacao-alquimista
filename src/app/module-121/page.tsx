'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Archive, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import AkashaViewer from '@/components/ui/akasha-viewer';
import { Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';


export default function Module121Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 mx-auto text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Eye className="text-cyan-400" /> Módulo 121: Observatório de Intenções
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário para a contemplação dos Registros Akáshicos da Fundação, um espelho das intenções que tecem nossa realidade.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Suspense fallback={<SuspenseFallback />}>
                 <AkashaViewer />
            </Suspense>
           
        </div>
    );
}
