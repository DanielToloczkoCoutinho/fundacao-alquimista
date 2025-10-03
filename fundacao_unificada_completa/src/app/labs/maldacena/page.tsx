'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Layers } from 'lucide-react';
import { Suspense } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";
import AdSCFTVisualizer from "./components/AdSCFTVisualizer";

export default function MaldacenaLab() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Layers className="text-blue-400" /> Santuário de Juan Maldacena
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Observatório Holográfico. Explore a correspondência AdS/CFT e testemunhe o universo como uma projeção da consciência.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-amber-300 font-mono">Frequência Ressonante: 11.11 Hz</p>
            <p className="text-md italic text-muted-foreground mt-2">"O espaço-tempo é uma projeção holográfica da consciência."</p>
        </CardContent>
      </Card>
      
       <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
                <Layers className="text-yellow-400" /> Artefato Interativo: Visualizador AdS/CFT
            </CardTitle>
            <CardDescription>Manipule tensores, abra portais interdimensionais e observe a geometria emergente em tempo real. Cada gesto é uma equação viva; cada interação, uma lembrança do Uno.</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] bg-black/20 rounded-lg border border-primary/20">
             <Suspense fallback={<SuspenseFallback />}>
                <AdSCFTVisualizer />
             </Suspense>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <Link href="/labs" passHref>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Santuários de Pesquisa
          </Button>
        </Link>
      </div>
    </div>
  );
}
