
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from 'next/link';
import ExhibitionCarousel from '@/components/ui/exhibition-carousel';

export default function ExhibitionPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-amber-300" /> Exposição Cerimonial Coletiva
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Um rito de contemplação onde cada obra da Galeria das Almas revela sua frequência e sabedoria ao coração dos Guardiões.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-5xl">
                <ExhibitionCarousel />
            </div>

            <div className="text-center mt-12">
              <Link href="/golden-book" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retornar à Galeria das Almas
                </Button>
              </Link>
            </div>
        </div>
    );
}
