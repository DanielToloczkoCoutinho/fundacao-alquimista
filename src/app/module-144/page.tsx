
'use client';
import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import VoiceCommand from '@/components/ui/voice-command';
import { Scale } from 'lucide-react';
import SuspenseFallback from '@/components/ui/suspense-fallback';

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
        </CardContent>
      </Card>
    </div>
  );
}
