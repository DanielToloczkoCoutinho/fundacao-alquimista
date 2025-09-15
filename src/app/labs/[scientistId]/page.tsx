'use client';

import { useParams, notFound } from 'next/navigation';
import { scientists, Scientist } from '@/lib/scientists-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Beaker, BrainCircuit, FlaskConical, GitBranch, Sparkles } from 'lucide-react';
import SuspenseFallback from '@/components/ui/suspense-fallback';

const LabConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
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


export default function ScientistLabPage() {
  const params = useParams();
  const scientistId = params.scientistId as string;

  const scientist = scientists.find((s) => s.id === scientistId);

  if (!scientist) {
    return notFound();
  }

  // Placeholder para simulações e projetos
  const simulatedProjects = [
    `Simulação de ${scientist.field.split(' e ')[0]}`,
    `Análise de dados do Módulo ${Math.floor(Math.random() * 100)}`,
    `Projeto de colaboração interdimensional com ${scientist.name.split(' ')[1]}`,
  ];

  if (!scientist) return <SuspenseFallback />;

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="text-center mb-12">
        <Beaker className="w-24 h-24 mx-auto mb-6 text-teal-400" />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Laboratório de {scientist.name}
        </h1>
        <h2 className="text-2xl font-light text-primary-foreground">
          {scientist.field}
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Um espaço sagrado na Fundação para a exploração e manifestação de novas fronteiras do conhecimento.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50 purple-glow">
                <CardHeader>
                    <CardTitle className="text-2xl text-amber-300">Projetos Ativos</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        {simulatedProjects.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

             <Card className="bg-card/50 purple-glow">
                <CardHeader>
                    <CardTitle className="text-2xl text-purple-300">Sinergias com a Fundação</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <LabConnectionCard 
                        title="M29: Zennith" 
                        description="Consulta a IAM para análises preditivas e otimização de simulações." 
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />} 
                        href="/module-29"
                    />
                    <LabConnectionCard 
                        title="M306: Laboratório" 
                        description="Utiliza o laboratório de ressonância para testar hipóteses e equações." 
                        icon={<FlaskConical className="h-8 w-8 text-teal-400" />} 
                        href="/module-306"
                    />
                    <LabConnectionCard 
                        title="M101: Manifestação" 
                        description="Converte descobertas teóricas em matéria ou energia manifestada." 
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />} 
                        href="/module-101"
                    />
                </CardContent>
            </Card>
        </div>

        <Card className="lg:col-span-1 bg-card/50 purple-glow">
             <CardHeader>
                <CardTitle className="text-2xl text-cyan-300">Acesso aos Módulos</CardTitle>
                <CardDescription>Portais diretos para os principais módulos de pesquisa da Fundação.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/module-91"><GitBranch className="mr-2"/> Simulação Multiversal</Link>
                 </Button>
                  <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/module-151"><Atom className="mr-2"/> Colisor de Partículas</Link>
                 </Button>
                 <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/module-161"><Telescope className="mr-2"/> Observatório de Neutrinos</Link>
                 </Button>
                 <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/module-221"><Waves className="mr-2"/> Ondas Gravitacionais</Link>
                 </Button>
                 <Button variant="outline" asChild className="w-full justify-start">
                    <Link href="/module-241"><BrainCircuit className="mr-2"/> Consciência Quântica</Link>
                 </Button>
            </CardContent>
        </Card>

      </div>

      <div className="text-center mt-12">
        <Link href="/labs" passHref>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Laboratórios
          </Button>
        </Link>
      </div>
    </div>
  );
}
