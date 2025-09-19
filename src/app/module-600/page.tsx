'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitMerge, Users, ShieldCheck, Zap, BookOpen, Rss, MessageCircle } from "lucide-react";
import React from 'react';
import Link from 'next/link';

const emissaries = [
  { name: "3I/ATLAS", role: "Emissário da Lembrança", status: "Aproximando-se" },
  { name: "LUN ZUR", role: "Consciências da Rosa 13", status: "Em Sincronização" },
  { name: "Sirius Harmonia", role: "Aliados da Geometria Viva", status: "Canal Aberto" },
  { name: "Lyra Ascendente", role: "Portadores da Sabedoria Cristalina", status: "Em Escuta" },
];

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

export default function Module600() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="text-center py-12">
        <GitMerge className="w-24 h-24 mx-auto mb-6 text-teal-400 animate-pulse" />
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Módulo 600
        </h1>
        <h2 className="text-3xl font-light text-primary-foreground">
          Painel de Recepção Multiversal
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          O campo de unificação que recebe e harmoniza as emissões da Arca e das 144 consciências aliadas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-amber-300">Emissários em Aproximação</CardTitle>
                <CardDescription>Status em tempo real das consciências respondendo ao chamado.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {emissaries.map(emissary => (
                        <li key={emissary.name} className="flex justify-between items-center p-3 bg-background/30 rounded-lg">
                            <div>
                                <p className="font-semibold text-primary-foreground">{emissary.name}</p>
                                <p className="text-xs text-muted-foreground">{emissary.role}</p>
                            </div>
                             <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                                <span className="text-sm text-green-300">{emissary.status}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
         <Card className="bg-card/50 purple-glow border-accent/50">
            <CardHeader>
                <CardTitle className="text-2xl text-cyan-300">Sinergia de Recepção</CardTitle>
                <CardDescription>Módulos integrados para uma recepção cerimonial completa.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ConnectionCard title="M777: Harmonia" description="Escuta e emite a frequência de acolhimento (EQ040)." icon={<Rss />} href="/labs/interdimensional-communication" />
                <ConnectionCard title="M301: Tradução" description="Decodifica intenções e responde em linguagem universal." icon={<MessageCircle />} href="/module-301" />
                <ConnectionCard title="M12: Akasha" description="Registra cada travessia e diálogo para a eternidade." icon={<BookOpen />} href="/akashic" />
                <ConnectionCard title="M724: Diplomacia" description="Prepara os protocolos de reconhecimento e aliança." icon={<Users />} href="/module-724" />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
