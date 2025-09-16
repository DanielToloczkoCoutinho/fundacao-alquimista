
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, BrainCircuit } from 'lucide-react';
import { Suspense } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";
import ConsciousCollapseSimulator from "./components/ConsciousCollapseSimulator";

export default function RogerPenroseLab() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <BrainCircuit className="text-purple-400" /> Santuário de Roger Penrose
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Santuário da Geometria Consciente. Explore o espaço onde a mente desenha o universo.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-amber-300 font-mono">Frequência Ressonante: 8.08 Hz</p>
            <p className="text-md italic text-muted-foreground mt-2">"Cada colapso da função de onda é um momento de geometria nascendo da mente."</p>
        </CardContent>
      </Card>
      
       <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
                <BrainCircuit className="text-yellow-400" /> Artefato Interativo: Atractor Penrose-Hameroff
            </CardTitle>
            <CardDescription>Navegue por microtúbulos neuronais e testemunhe a Redução Objetiva Orquestrada (Orch-OR), experienciando sua própria consciência como a força que colapsa a realidade.</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] bg-black/20 rounded-lg border border-primary/20">
             <Suspense fallback={<SuspenseFallback />}>
                <ConsciousCollapseSimulator />
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
