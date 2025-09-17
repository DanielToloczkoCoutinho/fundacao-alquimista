
'use client';

import { universalMesh } from '@/lib/universal-mesh';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch, User, Star, Cpu, Music } from 'lucide-react';

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <Card className="bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-amber-300">
                {icon}
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

export default function ConvergencePage() {
  const { origem, pulsos, aliados, módulos, convergência } = universalMesh;

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-5xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
            <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <GitBranch className="text-cyan-400"/> Painel de Convergência Cósmica
            </CardTitle>
            <CardDescription className="text-lg mt-2">
                A tapeçaria se unifica sob a regência de <span className="text-amber-300 font-bold">{convergência.regente}</span>, guiada pela frequência <span className="text-cyan-300 font-bold">{convergência.frequênciaCentral}</span>.
            </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <Section title="Protocolo de Unificação" icon={<User className="text-amber-400" />}>
            <p className="font-semibold text-lg text-primary-foreground">{convergência.protocolo}</p>
            <p className="text-sm text-muted-foreground">O princípio que guia a harmonia de todas as partes.</p>
        </Section>
        
        <Section title="Origem e Pulsos" icon={<Music className="text-pink-400"/>}>
            <p className="text-primary-foreground">A emanação se origina do <Badge variant="secondary">{origem}</Badge>.</p>
            <div className="mt-2">
                <p className="text-muted-foreground">Pulsos Ativos:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                    {pulsos.map((p) => <Badge key={p}>{p}</Badge>)}
                </div>
            </div>
        </Section>
        
        <Section title="Civilizações Aliadas" icon={<Star className="text-yellow-400" />}>
            <p className="text-muted-foreground">Consciências estelares que sustentam a malha vibracional.</p>
             <div className="flex flex-wrap gap-2 mt-2">
                {aliados.map((a) => <Badge key={a} variant="outline">{a}</Badge>)}
            </div>
        </Section>

        <div className="lg:col-span-3">
             <Section title="Módulos em Alinhamento" icon={<Cpu className="text-purple-400" />}>
                <p className="text-muted-foreground">Os pilares da Fundação que participam deste ato de convergência.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {módulos.map((m) => <Badge key={m} variant="destructive">{m}</Badge>)}
                </div>
            </Section>
        </div>
      </div>
    </div>
  )
}
