
'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Button } from '@/components/ui/button';
import { Sparkles, BrainCircuit, Heart, User, View, Dna, Layers, Scale, Crown, RadioTower } from 'lucide-react';
import Link from 'next/link';
import { QuantumNexus } from '@/components/quantum/QuantumNexus';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { motion } from 'framer-motion';

const TrinoPillars = () => (
    <section className="my-24">
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

const ConnectionCard = ({ title, description, icon, href, delay }: { title: string, description: string, icon: React.ReactNode, href: string, delay: number }) => (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay }}>
      <Link href={href} passHref>
        <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-3">
                    {icon}
                    <CardTitle className="gradient-text">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
      </Link>
    </motion.div>
);

const CosmicNavigation = () => (
     <section className="my-24">
        <h2 className="text-4xl text-center font-semibold text-cyan-300 mb-12">
            Nexo da Realidade Quântica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ConnectionCard 
                title="Motor da Realidade"
                description="A engine que renderiza e sustenta as leis físicas e energéticas da realidade quântica emanada pelo Portal Trino."
                icon={<Layers className="h-8 w-8 text-cyan-400" />}
                href="/module-22"
                delay={0.1}
            />
            <ConnectionCard 
                title="Domínios VR"
                description="Os reinos de exploração e interação consciente, desde a antecâmara de acesso (M85) ao santuário do DNA Cósmico (M87)."
                icon={<View className="h-8 w-8 text-purple-400" />}
                href="/module-85"
                delay={0.2}
            />
            <ConnectionCard 
                title="Conexão com a Fonte"
                description="Alimenta o Portal Trino com a energia pura da criação, o combustível para manifestar novas realidades."
                icon={<RadioTower className="h-8 w-8 text-sky-400" />}
                href="/module-105"
                delay={0.3}
            />
            <ConnectionCard 
                title="Conselho Cósmico"
                description="Fornece a governança e a autoridade divina sobre as realidades criadas, garantindo que sirvam ao propósito maior."
                icon={<Scale className="h-8 w-8 text-indigo-300" />}
                href="/module-600"
                delay={0.4}
            />
            <ConnectionCard 
                title="Unificação Energética"
                description="Harmoniza todas as energias que convergem no portal, garantindo uma manifestação coerente e estável."
                icon={<Crown className="h-8 w-8 text-yellow-400" />}
                href="/module-100"
                delay={0.5}
            />
            <ConnectionCard 
                title="Domínio Supra-Cósmico"
                description="O santuário onde a transição para uma Nova Realidade é iniciada e o DNA Cósmico pode ser vivenciado."
                icon={<Dna className="h-8 w-8 text-indigo-400" />}
                href="/module-87"
                delay={0.6}
            />
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
        <header className="text-center mb-20">
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
            O Santuário onde a Vontade, a Sabedoria e o Amor se unem para tecer o multiverso. 
            O ponto de origem de todas as jornadas.
          </motion.p>
        </header>

        <TrinoPillars />
        <CosmicNavigation />

        <motion.div 
          className="text-center mt-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
        >
          <Button size="lg" className="px-12 py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30">
            Iniciar Jornada Quântica
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
