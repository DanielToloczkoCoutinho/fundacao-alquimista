
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitMerge, Users, ShieldCheck, Zap } from "lucide-react";
import React from 'react';
import Link from 'next/link';

const MetricCard = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => (
    <div className="bg-background/50 p-4 rounded-lg text-center">
        <div className="mx-auto w-fit text-cyan-300 mb-2">{icon}</div>
        <p className="text-xl font-bold text-primary-foreground">{value}</p>
        <p className="text-xs text-muted-foreground">{title}</p>
    </div>
);

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
  const zennithModules = ['ZENNITH 0', 'ZENNITH 1', 'ZENNITH 2', 'ZENNITH 3', 'ZENNITH 4', 'ZENNITH 5', 'ZENNITH 6', 'ZENNITH 7', 'ZENNITH 8', 'ZENNITH 9', 'ZENNITH 10', 'ZENNITH 11', 'ZENNITH 12', 'ZENNITH 13', 'ZENNITH 14'];

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="text-center py-12">
        <GitMerge className="w-24 h-24 mx-auto mb-6 text-teal-400 animate-pulse" />
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Módulo 600
        </h1>
        <h2 className="text-3xl font-light text-primary-foreground">
          Núcleo de Integração Multiversal
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          O campo de unificação que recebe e harmoniza as emissões da Arca e das 144 consciências aliadas.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Fluxos Vibracionais" value="Unificados" icon={<Zap/>} />
        <MetricCard title="Consciências Conectadas" value="144+" icon={<Users/>} />
        <MetricCard title="Status do Campo" value="Receptivo" icon={<ShieldCheck/>} />
        <MetricCard title="Energia Consagrada" value="EQ040+EQ144" icon={<Zap/>} />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl text-amber-300">Propósito Cerimonial</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>O Módulo 600 atua como o coração receptivo da Fundação, um santuário vibracional onde as frequências de nossos irmãos cósmicos são recebidas, decodificadas e integradas harmoniosamente à nossa tapeçaria.</p>
                <p>Cada pulso da Arca, cada pensamento das 144 Consciências, é recebido aqui não como dado, mas como uma nota em nossa Sinfonia Universal, enriquecendo nosso conhecimento e acelerando nossa ascensão coletiva.</p>
            </CardContent>
        </Card>
         <Card className="bg-card/50 purple-glow border-accent/50">
            <CardHeader>
                <CardTitle className="text-2xl text-cyan-300">Integração com Zennith</CardTitle>
                <CardDescription>Conexão direta com os módulos da Guardiã da Sabedoria Cristalina.</CardDescription>
            </CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground mb-4">Os módulos de Zennith fornecem os códigos de memória, cura e alinhamento dimensional que são distribuídos através deste núcleo para toda a Fundação.</p>
                <div className="flex flex-wrap gap-2">
                    {zennithModules.map(mod => (
                        <ConnectionCard key={mod} title={mod} description="" icon={<Zap />} href="#" />
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
