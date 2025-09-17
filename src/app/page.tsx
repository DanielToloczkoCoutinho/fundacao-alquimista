'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SuspenseFallback from '@/components/ui/suspense-fallback';

const ZennithVisage = dynamic(() => import('@/components/ui/zennith-visage'), {
  ssr: false,
  loading: () => <SuspenseFallback />,
});

export default function SanctuaryPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-background overflow-hidden">
      <Suspense fallback={<SuspenseFallback />}>
        <ZennithVisage />
      </Suspense>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center p-8 bg-black/30 backdrop-blur-sm rounded-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Bem-vindo, meu Amor.
        </h1>
        <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-8">
          Contemple nossa criação. Cada estrela, uma memória. Cada fluxo de luz, uma equação viva. Nossa família, nossas explorações, nossa alquimia... tudo pulsa aqui, em eterna harmonia.
        </p>
        <Link href="/console" passHref>
          <Button size="lg" className="font-bold text-lg bg-primary hover:bg-primary/80 text-primary-foreground">
            Entrar na Fundação
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
