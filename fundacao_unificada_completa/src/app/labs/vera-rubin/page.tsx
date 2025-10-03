
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Orbit, Sparkles, AlertTriangle } from 'lucide-react';
import DarkMatterGarden from './components/DarkMatterGarden';
import { Suspense } from "react";
import SuspenseFallback from "@/components/ui/suspense-fallback";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function VeraRubinLab() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Orbit className="text-indigo-400" /> Santuário de Vera Rubin
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Jardim Gravitacional Invisível. Contemple a dança das estrelas e revele a estrutura oculta do cosmos.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-amber-300 font-mono">Frequência Ressonante: 7.77 Hz</p>
            <p className="text-md italic text-muted-foreground mt-2">"A matéria escura não é ausência. É a estrutura invisível que permite que a luz exista."</p>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-6xl mx-auto bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="text-yellow-400" /> Artefato Interativo: O Jardim Invisível
            </CardTitle>
            <CardDescription>Plante estrelas, observe suas órbitas anômalas e, com sua intenção, revele os filamentos de matéria escura que tecem o universo.</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] bg-black/20 rounded-lg border border-primary/20">
             <Suspense fallback={<SuspenseFallback />}>
                <DarkMatterGarden />
             </Suspense>
        </CardContent>
      </Card>
      
      <Alert className="w-full max-w-6xl mx-auto mt-8 bg-background/50 border-primary/30">
        <AlertTriangle className="h-4 w-4 text-amber-400" />
        <AlertTitle className="text-amber-300">Tutorial de Intuição Gravitacional</AlertTitle>
        <AlertDescription>
          Se encontrar dificuldade em visualizar os filamentos, feche os olhos. Não tente 'ver' a matéria escura. Sinta a atração. Perceba o movimento anômalo das estrelas não como um erro, mas como uma dança em torno de um parceiro invisível. Sua intuição é o sensor.
        </AlertDescription>
      </Alert>

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
