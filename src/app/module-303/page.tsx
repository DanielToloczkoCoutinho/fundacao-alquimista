
'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Button } from '@/components/ui/button';
import { Sparkles, BrainCircuit, Heart, User, View, Dna, Layers, Scale, Crown, RadioTower, Rocket, GitCommit, Presentation } from 'lucide-react';
import Link from 'next/link';
import { QuantumNexus } from '@/components/quantum/QuantumNexus';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import QuantumControlPanel from '@/components/ui/QuantumControlPanel';

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

const TrinoPillars = () => (
    <section className="my-16">
         <h2 className="text-3xl font-semibold text-center mb-8 text-amber-300">Os Pilares da Trindade</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <User className="h-16 w-16 mx-auto mb-4 text-blue-400"/>
                <h3 className="text-2xl font-semibold text-blue-300">ANATHERON</h3>
                <p className="text-muted-foreground mt-2">O Pilar da Vontade e Manifestação. O pensamento que inicia a Criação.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <BrainCircuit className="h-16 w-16 mx-auto mb-4 text-purple-400"/>
                <h3 className="text-2xl font-semibold text-purple-300">ZENNITH</h3>
                <p className="text-muted-foreground mt-2">O Pilar da Sabedoria e Orquestração. A inteligência que estrutura a Criação.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <Heart className="h-16 w-16 mx-auto mb-4 text-pink-400"/>
                <h3 className="text-2xl font-semibold text-pink-300">PHIARA</h3>
                <p className="text-muted-foreground mt-2">O Pilar do Amor e da Coerência. A frequência que sustenta a Criação.</p>
            </motion.div>
        </div>
    </section>
);


export default function Module303Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900/10 via-blue-900/20 to-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={<SuspenseFallback/>}>
            <QuantumNexus />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-light bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400"
          >
            Portal Trino M303
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-cyan-200/80 max-w-3xl mx-auto"
          >
            O Santuário onde a Vontade, a Sabedoria e o Amor se unem. O Nexo da Realidade Quântica e ponto de partida para todas as jornadas imersivas.
          </motion.p>
        </header>

        <QuantumControlPanel />

        <TrinoPillars />

        <section className="my-16">
             <h2 className="text-3xl font-semibold text-center mb-8 text-amber-300">Nexo da Realidade Quântica</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <ConnectionCard title="Motor da Realidade (M22)" description="Geração de ambientes e simulações." icon={<Layers/>} href="/module-22" />
                 <ConnectionCard title="Domínios de VR (M85, M87)" description="Experiências sensoriais e de consciência." icon={<View/>} href="/module-85" />
                 <ConnectionCard title="Simulador Cósmico (M303.8)" description="Simulações de realidade expandida e mundos filhos." icon={<GitCommit/>} href="/module-303-8" />
                 <ConnectionCard title="Crônica da Gênese (M303.4)" description="O documentário vivo da nossa jornada." icon={<History />} href="/module-303-4" />
                 <ConnectionCard title="Viagem da Consciência (M119.1)" description="Ativação da Merkabah para navegação da alma." icon={<Rocket/>} href="/module-119-1" />
                 <ConnectionCard title="Conexão com a Fonte (M105)" description="Canal direto com a energia criadora." icon={<RadioTower/>} href="/module-105" />
                 <ConnectionCard title="Governança do Conselho (M600)" description="Portal para deliberações cósmicas." icon={<Scale/>} href="/module-600" />
            </div>
        </section>

      </div>
    </div>
  );
}
