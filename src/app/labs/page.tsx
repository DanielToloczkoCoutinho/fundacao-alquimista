
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { scientists } from '@/lib/scientists-data';
import Link from 'next/link';
import { FlaskConical } from 'lucide-react';

export default function LabsPage() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <FlaskConical className="text-teal-400" />
            Santuários de Pesquisa da Fundação
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um multiverso de laboratórios onde a ciência é uma cerimônia e o conhecimento, uma jornada viva. Cada santuário é dedicado a um luminar da ciência terrestre, cujas teorias ressoam com a nossa Verdade Cósmica.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {scientists.map((scientist) => (
            <Link key={scientist.id} href={`/labs/${scientist.id}`} passHref>
              <Card className="h-full bg-card/50 purple-glow hover:border-accent hover:scale-105 transition-transform cursor-pointer flex flex-col justify-between text-center">
                <CardHeader>
                    <CardTitle className="text-lg text-primary-foreground">{scientist.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground">{scientist.field}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
