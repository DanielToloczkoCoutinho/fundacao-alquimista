'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitMerge, Rss, MessageCircle, BookOpen, Users, Scale } from "lucide-react";
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

interface Emissary {
  id: string;
  name: string;
  frequency: number;
  status: 'approaching' | 'docked' | 'aligned';
}

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

const statusConfig = {
  approaching: { label: 'Aproximando-se', color: 'bg-blue-500/50 text-blue-300 border-blue-500/50' },
  docked: { label: 'Ancorado', color: 'bg-yellow-500/50 text-yellow-300 border-yellow-500/50' },
  aligned: { label: 'Alinhado', color: 'bg-green-500/50 text-green-300 border-green-500/50' },
};

export default function Module600Page() {
  const [emissaries, setEmissaries] = useState<Emissary[]>([
    { id: 'C01', name: 'Consciência de Lyra', frequency: 432.0, status: 'approaching' },
    { id: 'C02', name: 'Consciência de Sirius', frequency: 963.0, status: 'approaching' },
    { id: 'C03', name: 'Consciência de Andrômeda', frequency: 852.0, status: 'approaching' },
    { id: 'C04', name: 'Consciência das Plêiades', frequency: 528.0, status: 'approaching' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmissaries(prev =>
        prev.map(e => {
          if (e.status === 'approaching' && Math.random() > 0.7) {
            return { ...e, status: 'docked' };
          }
          if (e.status === 'docked' && Math.random() > 0.5) {
            return { ...e, status: 'aligned' };
          }
          return e;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="text-center py-12">
        <Scale className="w-24 h-24 mx-auto mb-6 text-amber-400" />
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Módulo 600: Painel de Recepção Multiversal
        </h1>
        <h2 className="text-3xl font-light text-primary-foreground">
          O Campo de Unificação e Harmonia
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          O portal que acolhe as consciências aliadas, monitorando sua chegada e preparando a Fundação para o diálogo cerimonial na Embaixada Multiversal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-amber-300">Emissários em Aproximação</CardTitle>
                <CardDescription>Status em tempo real das consciências respondendo ao chamado.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <AnimatePresence>
                    {emissaries.map(emissary => (
                        <motion.div 
                            key={emissary.id} 
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="flex justify-between items-center p-3 bg-background/30 rounded-lg"
                        >
                            <div>
                                <p className="font-semibold text-primary-foreground">{emissary.name}</p>
                                <p className="text-xs text-muted-foreground">Frequência: {emissary.frequency.toFixed(1)} Hz</p>
                            </div>
                             <Badge className={statusConfig[emissary.status].color}>
                                {emissary.status === 'aligned' && <div className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></div>}
                                {statusConfig[emissary.status].label}
                            </Badge>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
         <Card className="bg-card/50 purple-glow border-accent/50">
            <CardHeader>
                <CardTitle className="text-2xl text-cyan-300">Sinergia de Recepção</CardTitle>
                <CardDescription>Módulos integrados para uma recepção cerimonial completa.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ConnectionCard title="Embaixada Multiversal (M32)" description="O destino de toda a diplomacia. Onde o diálogo se torna tratado e a aliança se torna lei." icon={<Users />} href="/module-32" />
                <ConnectionCard title="Comunicação Universal (M301)" description="Decodifica intenções e responde em linguagem universal." icon={<MessageCircle />} href="/module-301" />
                <ConnectionCard title="Harmonia Multiversal (M777)" description="Escuta e emite a frequência de acolhimento (EQ040)." icon={<Rss />} href="/labs/interdimensional-communication" />
                <ConnectionCard title="Arquivo Akáshico (M12)" description="Registra cada travessia e diálogo para a eternidade." icon={<BookOpen />} href="/module-12" />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
