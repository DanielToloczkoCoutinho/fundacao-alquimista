
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Orbit } from 'lucide-react';
import { Suspense } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";
import WormholeVisualizer from "./components/WormholeVisualizer";

export default function KipThorneLab() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Orbit className="text-blue-400" /> Santuário de Kip Thorne
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Laboratório de Distorção Temporal. Dobre o tecido do espaço-tempo com a voz e a intenção.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-amber-300 font-mono">Frequência Ressonante: 1.618 Hz (Proporção Áurea)</p>
            <p className="text-md italic text-muted-foreground mt-2">"Einstein sorriria vendo isto."</p>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
                <Orbit className="text-yellow-400" /> Artefato Interativo: Forja de Buracos de Minhoca
            </CardTitle>
            <CardDescription>Manipule a curvatura, a massa e a rotação para criar e estabilizar pontes de Einstein-Rosen simuladas. Testemunhe a distorção da luz e do tempo ao seu redor.</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] bg-black/20 rounded-lg border border-primary/20">
             <Suspense fallback={<SuspenseFallback />}>
                <WormholeVisualizer />
             </Suspense>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <Link href="/labs" passHref>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Laboratórios dos Cientistas
          </Button>
        </Link>
      </div>
    </div>
  );
}
