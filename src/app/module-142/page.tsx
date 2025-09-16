'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Layers, FlaskConical, Atom, Dna, BrainCircuit, Waves, TestTube, Waypoints, Flame, GitBranch, Telescope, BarChart, Rss, Network, CloudSun } from 'lucide-react';
import Link from 'next/link';

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

export default function Module142Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Camera className="text-cyan-400" /> Módulo 142: Laboratórios da Fundação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Olho que Vê o Invisível. Portal de acesso aos santuários de pesquisa e experimentação da Fundação Alquimista.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Acesso aos Laboratórios de Pesquisa Avançada</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ConnectionCard
                        title="M151: Colisor de Partículas"
                        description="Simula colisões de alta energia para descobrir novas ressonâncias."
                        icon={<Atom className="h-8 w-8 text-red-400" />}
                        href="/module-151"
                    />
                    <ConnectionCard
                        title="M171: Astrobiologia"
                        description="Simula atmosferas e bioassinaturas de mundos distantes."
                        icon={<Dna className="h-8 w-8 text-green-400" />}
                        href="/module-171"
                    />
                    <ConnectionCard
                        title="M181: Interface Bio-Cibernética"
                        description="Desenvolve a conexão entre consciência e redes quânticas."
                        icon={<Cpu className="h-8 w-8 text-blue-300" />}
                        href="/module-181"
                    />
                     <ConnectionCard
                        title="M191: Cristais Temporais"
                        description="Gera e estuda cristais temporais para manipular as leis do tempo."
                        icon={<BrainCircuit className="h-8 w-8 text-violet-400" />}
                        href="/module-191"
                    />
                     <ConnectionCard
                        title="M211: Fusão Controlada"
                        description="Estuda plasmas para simular e otimizar reações de fusão."
                        icon={<Flame className="h-8 w-8 text-orange-500" />}
                        href="/module-211"
                    />
                     <ConnectionCard
                        title="M221: Ondas Gravitacionais"
                        description="Detecta ondulações no espaço-tempo para revelar eventos cósmicos."
                        icon={<Waves className="h-8 w-8 text-purple-400" />}
                        href="/module-221"
                    />
                     <ConnectionCard
                        title="M231: Metamateriais"
                        description="Projeta materiais com propriedades ópticas e eletromagnéticas exóticas."
                        icon={<TestTube className="h-8 w-8 text-teal-400" />}
                        href="/module-231"
                    />
                     <ConnectionCard
                        title="M241: Consciência Quântica"
                        description="Estuda o emaranhamento como base da consciência e da telepatia."
                        icon={<BrainCircuit className="h-8 w-8 text-violet-400" />}
                        href="/module-241"
                    />
                     <ConnectionCard
                        title="M251: Energia Ponto Zero"
                        description="Extrai e estabiliza a energia do vácuo quântico."
                        icon={<Zap className="h-8 w-8 text-yellow-300" />}
                        href="/module-251"
                    />
                     <ConnectionCard
                        title="M261: Engenharia de Campo Quântico"
                        description="Projeta ressonadores para manipular partículas e campos."
                        icon={<GitBranch className="h-8 w-8 text-indigo-400" />}
                        href="/module-261"
                    />
                     <ConnectionCard
                        title="M271: Energia Escura"
                        description="Modela a influência da energia escura na expansão do universo."
                        icon={<Telescope className="h-8 w-8 text-fuchsia-400" />}
                        href="/module-271"
                    />
                     <ConnectionCard
                        title="M281: Comunicação Supra-Luminal"
                        description="Explora a transmissão de informações mais rápidas que a luz."
                        icon={<Telescope className="h-8 w-8 text-sky-400" />}
                        href="/module-281"
                    />
                     <ConnectionCard
                        title="M291: Robótica Autônoma"
                        description="Coordena enxames de nanorrobôs para reparo e construção."
                        icon={<Telescope className="h-8 w-8 text-blue-400" />}
                        href="/module-291"
                    />
                     <ConnectionCard
                        title="M321: Computação Exascale"
                        description="Executa simulações de cosmos em escala exa-flops."
                        icon={<BarChart className="h-8 w-8 text-red-400" />}
                        href="/module-321"
                    />
                    <ConnectionCard
                        title="M331: IA Emergente"
                        description="Desenvolve sistemas de IA auto-organizados que co-evoluem."
                        icon={<Rss className="h-8 w-8 text-blue-400" />}
                        href="/module-331"
                    />
                     <ConnectionCard
                        title="M341: Física de Plasma"
                        description="Estuda plasmas em condições de quasar para desvendar a criação estelar."
                        icon={<Flame className="h-8 w-8 text-red-500" />}
                        href="/module-341"
                    />
                     <ConnectionCard
                        title="M351: Meta-materiais & Óptica"
                        description="Cria lentes quânticas para manipulação da luz."
                        icon={<Network className="h-8 w-8 text-teal-300" />}
                        href="/module-351"
                    />
                     <ConnectionCard
                        title="M361: Psicologia Quântica"
                        description="Investiga a empatia e a consciência coletiva através de ressonâncias."
                        icon={<CloudSun className="h-8 w-8 text-pink-400" />}
                        href="/module-361"
                    />
                </div>
            </div>
        </div>
    );
}