'use client';
import React, { lazy, Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Sigma, FlaskConical } from 'lucide-react';
import SuspenseFallback from "@/components/ui/suspense-fallback";
import { livingEquationsCodex } from '@/lib/living-equations-codex';

const EquationRenderer = lazy(() => import('@/components/ui/EquationRenderer'));

export default function CosmologyLab() {
  // Filtra equações relevantes para cosmologia, por exemplo, módulos de alto nível
  const cosmologyEquations = livingEquationsCodex.filter(eq => 
    ['32', '34', '36', '38', '39', '42', '43'].includes(eq.module)
  ).slice(0, 5); // Limita para a demo

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FlaskConical className="text-cyan-400" /> Laboratório de Cosmologia Alquímica
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um santuário para a exploração e validação das equações que tecem a realidade.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="w-full max-w-7xl mx-auto">
        {cosmologyEquations.map(eq => (
          <Card key={eq.id} className="bg-card/50 purple-glow mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-300 flex items-center gap-2">
                  <Sigma /> {eq.id}: {eq.name}
              </CardTitle>
              <CardDescription>{eq.summary}</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto p-4">
              <Suspense fallback={<SuspenseFallback />}>
                <EquationRenderer latex={eq.formula} />
              </Suspense>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/labs" passHref>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Laboratórios
          </Button>
        </Link>
      </div>
    </div>
  );
}

    