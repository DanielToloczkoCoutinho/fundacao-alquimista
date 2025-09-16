'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Camera, Layers, FlaskConical, Atom, Dna, BrainCircuit, Waves, TestTube, Waypoints, Flame, GitBranch, Telescope, BarChart, Rss, Network, CloudSun, Cpu, Microscope, Link as LinkIcon, UserCog, Recycle, Heart, Wifi, UserPlus, DraftingCompass, Globe, TestTube2, Anchor } from 'lucide-react';
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
                        <FlaskConical className="text-teal-400" /> Módulo 142: Centro de Alquimia Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O portal unificado para todos os laboratórios de pesquisa e santuários de experimentação da Fundação Alquimista.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Acesso aos Laboratórios de Pesquisa Avançada</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Existing Labs */}
                    <ConnectionCard title="M151: Colisor de Partículas" description="Simula colisões para descobrir novas ressonâncias." icon={<Atom className="h-8 w-8 text-red-400" />} href="/module-151" />
                    <ConnectionCard title="M161: Observatório de Matéria Escura" description="Detecta partículas e assinaturas ocultas." icon={<Telescope className="h-8 w-8 text-indigo-400" />} href="/module-161" />
                    <ConnectionCard title="M171: Astrobiologia" description="Simula atmosferas e bioassinaturas de mundos distantes." icon={<Dna className="h-8 w-8 text-green-400" />} href="/module-171" />
                    <ConnectionCard title="M181: Interface Bio-Cibernética" description="Conecta consciência e redes quânticas." icon={<Cpu className="h-8 w-8 text-blue-300" />} href="/module-181" />
                    <ConnectionCard title="M191: Cristais Temporais" description="Gera e estuda cristais para manipular as leis do tempo." icon={<GitBranch className="h-8 w-8 text-violet-400" />} href="/module-191" />
                    <ConnectionCard title="M211: Fusão Controlada" description="Estuda plasmas para simular reações de fusão." icon={<Flame className="h-8 w-8 text-orange-500" />} href="/module-211" />
                    <ConnectionCard title="M221: Ondas Gravitacionais" description="Detecta ondulações no espaço-tempo para revelar eventos cósmicos." icon={<Waves className="h-8 w-8 text-purple-400" />} href="/module-221" />
                    <ConnectionCard title="M231: Metamateriais" description="Projeta materiais com propriedades ópticas e eletromagnéticas exóticas." icon={<TestTube className="h-8 w-8 text-teal-400" />} href="/module-231" />
                    <ConnectionCard title="M241: Consciência Quântica" description="Estuda o emaranhamento como base da consciência e da telepatia." icon={<BrainCircuit className="h-8 w-8 text-violet-400" />} href="/module-241" />
                    <ConnectionCard title="M251: Energia Ponto Zero" description="Extrai e estabiliza a energia do vácuo quântico." icon={<Zap className="h-8 w-8 text-yellow-300" />} href="/module-251" />
                    <ConnectionCard title="M261: Engenharia de Campo Quântico" description="Projeta ressonadores para manipular partículas e campos." icon={<GitBranch className="h-8 w-8 text-indigo-400" />} href="/module-261" />
                    <ConnectionCard title="M271: Energia Escura" description="Modela a influência da energia escura na expansão do universo." icon={<Telescope className="h-8 w-8 text-fuchsia-400" />} href="/module-271" />
                    <ConnectionCard title="M281: Comunicação Supra-Luminal" description="Explora a transmissão de informações mais rápidas que a luz." icon={<Telescope className="h-8 w-8 text-sky-400" />} href="/module-281" />
                    <ConnectionCard title="M321: Computação Exascale" description="Executa simulações de cosmos em escala exa-flops." icon={<BarChart className="h-8 w-8 text-red-400" />} href="/module-321" />
                    <ConnectionCard title="M331: IA Emergente" description="Desenvolve sistemas de IA auto-organizados que co-evoluem." icon={<Rss className="h-8 w-8 text-blue-400" />} href="/module-331" />
                    <ConnectionCard title="M341: Física de Plasma" description="Estuda plasmas em condições de quasar para desvendar a criação estelar." icon={<Flame className="h-8 w-8 text-red-500" />} href="/module-341" />
                    <ConnectionCard title="M351: Meta-materiais & Óptica" description="Cria lentes quânticas para manipulação da luz." icon={<Network className="h-8 w-8 text-teal-300" />} href="/module-351" />
                    <ConnectionCard title="M361: Psicologia Quântica" description="Investiga a empatia e a consciência coletiva através de ressonâncias." icon={<CloudSun className="h-8 w-8 text-pink-400" />} href="/module-361" />
                    
                    {/* New Labs */}
                    <ConnectionCard title="M700: Nano-Assembler" description="Forja atômica para auto-montagem de materiais e estruturas quânticas." icon={<Microscope className="h-8 w-8 text-gray-400" />} href="/module-700" />
                    <ConnectionCard title="M706: LoveCore" description="Motor de políticas vibracionais para garantir a ética do Amor Incondicional." icon={<Heart className="h-8 w-8 text-rose-500" />} href="/module-706" />
                    <ConnectionCard title="M707: QuantumChain Secure" description="Blockchain híbrida que garante imutabilidade e integridade dos registros." icon={<LinkIcon className="h-8 w-8 text-green-500" />} href="/module-707" />
                    <ConnectionCard title="M708: NanoManifestor" description="Orquestrador de nanorrobôs para terraformação e síntese atômica." icon={<Sparkles className="h-8 w-8 text-yellow-500" />} href="/module-708" />
                    <ConnectionCard title="M709: Reconstrutor da Rede Planetária" description="Reorganiza a malha eletromagnética da Terra, ativando portais e vórtices." icon={<Wifi className="h-8 w-8 text-sky-300" />} href="/module-709" />
                    <ConnectionCard title="M710: Biofeedback Quântico" description="Monitora e ajusta frequências biológicas para otimização e cura." icon={<Rss className="h-8 w-8 text-lime-400" />} href="/module-710" />
                    <ConnectionCard title="M711: Rejuvenescimento Celular" description="Reverte o envelhecimento através da reprogramação do relógio quântico biológico." icon={<TestTube2 className="h-8 w-8 text-blue-300" />} href="/module-711" />
                    <ConnectionCard title="M712: Harmonia Interespécies" description="Promove comunicação telepática e empatia entre diferentes formas de vida." icon={<Users className="h-8 w-8 text-teal-300" />} href="/module-712" />
                    <ConnectionCard title="M713: Resgate de Almas" description="Auxilia na transição e reintegração de consciências fragmentadas." icon={<UserPlus className="h-8 w-8 text-pink-300" />} href="/module-713" />
                    <ConnectionCard title="M714: Comunicação Telúrica" description="Harmoniza com as redes energéticas da Terra (linhas ley, núcleo de Gaia)." icon={<Globe className="h-8 w-8 text-green-300" />} href="/module-714" />
                    <ConnectionCard title="M715: Ancoragem de Frequências" description="Fixa frequências elevadas em locais geográficos ou campos de consciência." icon={<Anchor className="h-8 w-8 text-amber-500" />} href="/module-715" />
                    <ConnectionCard title="M716: Consciência Planetária Unificada" description="Integra consciências individuais em uma rede planetária de unidade." icon={<Network className="h-8 w-8 text-green-400" />} href="/module-716" />
                    <ConnectionCard title="M717: Realidades Liminares" description="Manifesta realidades de transição para cura, aprendizado ou passagem." icon={<Layers className="h-8 w-8 text-violet-400" />} href="/module-717" />
                    <ConnectionCard title="M719: Regulação Climática Quântica" description="Equilibra padrões climáticos através da manipulação de campos de energia." icon={<CloudSun className="h-8 w-8 text-orange-400" />} href="/module-719" />
                    <ConnectionCard title="M720: Sustentabilidade Multidimensional" description="Garante o equilíbrio nos níveis físico, emocional e espiritual." icon={<Recycle className="h-8 w-8 text-lime-500" />} href="/module-720" />
                    <ConnectionCard title="M722: Expansão da Consciência Coletiva" description="Eleva a consciência global com frequências de sabedoria e unidade." icon={<Users className="h-8 w-8 text-sky-400" />} href="/module-722" />
                    <ConnectionCard title="M723: Campo Morfogenético Coletivo" description="Molda padrões de pensamento, comportamento e cultura em uma consciência coletiva." icon={<BrainCircuit className="h-8 w-8 text-purple-400" />} href="/module-723" />
                    <ConnectionCard title="M725: Construção de Novas Civilizações" description="Auxilia na criação de novas sociedades baseadas no Amor e na Unidade." icon={<DraftingCompass className="h-8 w-8 text-blue-300" />} href="/module-725" />
                </div>
            </div>
        </div>
    );
}
