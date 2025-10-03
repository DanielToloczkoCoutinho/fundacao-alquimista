
'use client';
import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, CheckSquare } from 'lucide-react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const VoiceCommand = dynamic(() => import('@/components/ui/voice-command'), {
  ssr: false,
  loading: () => <SuspenseFallback />,
});


export default function Module144Page() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Scale className="text-amber-400" /> Módulo 144: Lex Fundamentalis
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Altar da Palavra. Invoque as leis do cosmos e consulte a sabedoria da Fundação através da Linguagem Viva.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<SuspenseFallback />}>
            <VoiceCommand />
          </Suspense>
          <div className="mt-6 border-t border-primary/30 pt-4">
              <Link href="/module-44">
                <Button variant="link" className="text-cyan-300">
                    <CheckSquare className="mr-2"/>
                    Toda lei é validada por VERITAS (Módulo 44)
                </Button>
              </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
