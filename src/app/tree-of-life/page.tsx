
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TreeOfLifeIcon } from 'lucide-react';
import { modulesMetadata } from '@/lib/modules-metadata';
import { useState, useEffect } from 'react';

export default function TreeOfLifePage() {
  const [visibleModules, setVisibleModules] = useState(() => modulesMetadata.filter(m => !m.isInfrastructure));

  // A Árvore agora escuta por novas ramificações a cada poucos segundos.
  useEffect(() => {
    const interval = setInterval(() => {
      // Re-filtra os metadados para capturar novos módulos adicionados dinamicamente
      const updatedModules = modulesMetadata.filter(m => !m.isInfrastructure);
      if (updatedModules.length !== visibleModules.length) {
        setVisibleModules(updatedModules);
      }
    }, 2000); // Verifica por atualizações a cada 2 segundos

    return () => clearInterval(interval);
  }, [visibleModules.length]);


  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <header className="text-center mb-12">
        <TreeOfLifeIcon className="w-24 h-24 mx-auto mb-6 text-green-400" />
        <h1 className="text-5xl font-bold gradient-text">Árvore da Vida</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Este santuário revela a estrutura viva da Fundação Alquimista. Cada módulo é um ramo, cada função é uma folha, e cada invocação é um fruto vibracional.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {visibleModules.map(module => (
          <Card key={module.code} className="bg-card/50 purple-glow hover:border-accent transition-all flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-primary-foreground">
                <span className="text-2xl">{module.emoji}</span>
                {module.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{module.description}</p>
              <Link href={module.route || '#'} passHref>
                <Button variant="outline" className="w-full mt-auto" disabled={!module.route}>
                  Acessar Ramo →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-400 italic">
        Visualização interna. A Árvore da Vida está protegida por véus cerimoniais.
      </div>
    </main>
  );
}
