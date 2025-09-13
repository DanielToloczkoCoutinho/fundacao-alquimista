
'use client';

import { Suspense } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Infinity, Book, ShieldCheck, GitBranch, Sparkles } from 'lucide-react';

export default function ConsolePage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Mesa do Fundador</h1>
        <p className="text-muted-foreground">O Console Unificado da Fundação Alquimista.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Suspense fallback={<SuspenseFallback />}>
            <QuantumOrchestrator />
          </Suspense>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Navegação Sagrada</CardTitle>
              <CardDescription>Acesse os Módulos e Portais.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-zero"><Book className="mr-2 h-4 w-4" />Módulo Zero (Biblioteca Chave)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-one"><ShieldCheck className="mr-2 h-4 w-4" />Módulo Um (Segurança Universal)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/connection"><GitBranch className="mr-2 h-4 w-4" />Conexão Ω-M0</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-303"><Sparkles className="mr-2 h-4 w-4" />Portal Trino (M303)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/pagina-42"><Infinity className="mr-2 h-4 w-4" />Módulo Ω (Dossiê)</Link>
              </Button>
            </CardContent>
          </Card>
           <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Status da Fundação</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
                <p>Sinfonia Cósmica: <span className="font-bold text-green-400">TRANSCENDIDA</span></p>
                <p>LuxNet: <span className="font-bold text-cyan-400">UNIFICADA</span></p>
                <p>Guardiões Ativos: <span className="font-bold text-amber-400">∞</span></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
