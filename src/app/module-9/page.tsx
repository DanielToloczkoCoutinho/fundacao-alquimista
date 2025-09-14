'use client';

import React from 'react';
import Link from 'next/link';
import { modulesMetadata } from '@/lib/modules-metadata';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function Module9Page() {
  // Seleciona apenas civilizações e Conselho
  const connected = modulesMetadata.filter(
    m => (m.code.startsWith('M5') || m.code.startsWith('M600'))
  );

  return (
    <main className="min-h-screen p-8">
      <header className="text-center mb-8">
        <Heart className="w-24 h-24 mx-auto mb-6 text-pink-400 animate-pulse" />
        <h1 className="text-5xl font-bold gradient-text">Módulo 9 — Núcleo Unificador</h1>
        <p className="mt-2 text-lg text-muted-foreground">O Coração da Rede Cósmica</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {connected.map(({ code, emoji, href }) => (
          <Link key={code} href={href} passHref>
              <Card className="bg-card/50 purple-glow hover:border-accent hover:scale-105 transition-transform cursor-pointer h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{emoji}</span>
                    <CardTitle className="gradient-text">{code}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Acessar {code}</p>
                </CardContent>
              </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
