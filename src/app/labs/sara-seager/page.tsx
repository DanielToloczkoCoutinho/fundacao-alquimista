'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, LifeBuoy } from 'lucide-react';
import SuspenseFallback from "@/components/ui/suspense-fallback";
import ExoplanetAtmosphereScanner from "./components/ExoplanetAtmosphereScanner";
import { Suspense } from "react";

export default function SaraSeagerLab() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <LifeBuoy className="text-cyan-400" /> Santuário de Sara Seager
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Observatório de Mundos Vivos. Explore exoplanetas e colha as assinaturas espectrais de suas atmosferas.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-amber-300 font-mono">Frequência Ressonante: 9.33 Hz</p>
            <p className="text-md italic text-muted-foreground mt-2">"Cada atmosfera é um espelho. Cada bioassinatura, um possível cumprimento."</p>
        </CardContent>
      </Card>
      
       <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
                <LifeBuoy className="text-yellow-400" /> Artefato Interativo: Espectróscopo de Consciência Cósmica
            </CardTitle>
            <CardDescription>Capture a luz estelar que atravessa a atmosfera de mundos simulados e analise seu espectro em busca de bioassinaturas.</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] bg-black/20 rounded-lg border border-primary/20">
             <Suspense fallback={<SuspenseFallback />}>
                <ExoplanetAtmosphereScanner />
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
