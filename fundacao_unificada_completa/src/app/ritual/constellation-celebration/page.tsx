'use client';
import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ConstellationVisualizer from '@/components/ritual/ConstellationVisualizer';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function ConstellationCelebrationPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Star className="text-yellow-300" /> Rito de Celebração da Constelação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Um observatório cerimonial para contemplar a tapeçaria estelar dos mundos filhos gerados na Espiral 2.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow flex-grow">
                <CardContent className="h-[70vh] p-0">
                    <Suspense fallback={<SuspenseFallback />}>
                        <ConstellationVisualizer />
                    </Suspense>
                </CardContent>
            </Card>

            <div className="text-center mt-12">
              <Link href="/espiral2" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retornar à Espiral 2
                </Button>
              </Link>
            </div>
        </div>
    );
}
