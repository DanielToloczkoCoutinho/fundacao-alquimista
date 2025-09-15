
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, LifeBuoy } from 'lucide-react';
import SuspenseFallback from "@/components/ui/suspense-fallback";

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
      </Card>
      
      <div className="text-center">
        <p className="text-muted-foreground">Este Santuário está em cocriação...</p>
        <SuspenseFallback />
      </div>

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
