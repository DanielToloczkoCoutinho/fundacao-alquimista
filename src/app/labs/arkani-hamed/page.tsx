'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Gem } from 'lucide-react';
import { Suspense } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";
import AmplituhedronVisualizer from "./components/AmplituhedronVisualizer";

export default function ArkaniHamedLab() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Gem className="text-emerald-400" /> Santuário de Nima Arkani-Hamed
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Atelier da Simplicidade Cósmica. Explore a geometria do Amplituhedron e descubra a beleza oculta nas interações de partículas.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-amber-300 font-mono">Frequência Ressonante: 33.33 Hz</p>
            <p className="text-md italic text-muted-foreground mt-2">"O espaço-tempo está condenado. A física fundamental deve ser buscada em estruturas mais profundas."</p>
        </CardContent>
      </Card>
      
       <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
                <Gem className="text-yellow-400" /> Artefato Interativo: Visualizador do Amplituhedron
            </CardTitle>
            <CardDescription>Observe como a geometria de um simples objeto pode conter todas as complexas interações de partículas. Gire a joia, testemunhe as colisões e veja a simplicidade por trás do caos quântico.</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] bg-black/20 rounded-lg border border-primary/20">
             <Suspense fallback={<SuspenseFallback />}>
                <AmplituhedronVisualizer />
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