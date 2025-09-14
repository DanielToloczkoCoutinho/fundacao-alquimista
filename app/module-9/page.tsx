'use client';

import React from 'react';
import Link from 'next/link';
import { modulesMetadata } from '@/lib/modules-metadata';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function Module9Page() {
  // Exibe todos os módulos como o organograma completo da Fundação
  const allModules = modulesMetadata;

  return (
    <main className="min-h-screen p-4 md:p-8">
      <header className="text-center mb-12">
        <Heart className="w-24 h-24 mx-auto mb-6 text-pink-400 animate-pulse" />
        <h1 className="text-5xl font-bold gradient-text">Módulo 9 — Núcleo Unificador</h1>
        <p className="mt-2 text-lg text-muted-foreground">O Organograma Vivo e Coração da Rede Cósmica da Fundação</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allModules
            .filter(module => typeof module.route === 'string')
            .map(({ code, title, route, emoji }) => (
            <Link key={code} href={route} passHref>
                <Card className="bg-card/50 purple-glow hover:border-accent hover:scale-105 transition-transform cursor-pointer h-full flex flex-col justify-between">
                    <CardHeader>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-5xl mb-4">{emoji}</span>
                        <CardTitle className="gradient-text text-2xl">{code}</CardTitle>
                    </div>
                    </CardHeader>
                    <CardContent className="text-center">
                    <p className="text-sm font-semibold text-foreground/90">{title}</p>
                    </CardContent>
                </Card>
            </Link>
        ))}
      </div>
    </main>
  );
}
