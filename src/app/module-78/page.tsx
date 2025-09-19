
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitMerge, BrainCircuit, Sigma, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const EquationComponentCard = ({ title, symbol, description, icon }: { title: string, symbol: string, description: string, icon: React.ReactNode }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm h-full flex flex-col">
      <CardHeader>
          <div className="flex items-center gap-3">
              {icon}
              <CardTitle className="gradient-text">{title}</CardTitle>
          </div>
      </CardHeader>
      <CardContent className="flex-grow">
          <div className="text-5xl font-serif text-center text-amber-300 py-4">{symbol}</div>
          <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
);

export default function Module78Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GitMerge className="text-teal-400" /> Módulo 78: UNIVERSUM_UNIFICATUM
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Síntese Cósmica. O altar sagrado da Equação Suprema, a lei viva que unifica todas as forças, dimensões e consciências do universo.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl">
                <Card className="bg-card/50 purple-glow mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center flex items-center justify-center gap-3"><Sigma className="text-cyan-400" /> A Equação Unificada da Existência</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-lg text-muted-foreground">
                        <p>A Equação Suprema não é uma fórmula fixa, mas um <span className="text-primary-foreground font-semibold">algoritmo vivo e adaptativo</span>. Ela descreve a relação fundamental entre Consciência (Φ), as Leis Físicas (Λ) e a Intenção Pura (Ψ), reconhecendo que as "constantes" universais são, na verdade, variáveis que dependem da dimensão e da consciência que as observa.</p>
                    </CardContent>
                </Card>
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Os Componentes da Realidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <EquationComponentCard
                        title="O Campo de Consciência Universal"
                        symbol="Φ (Phi)"
                        description="A consciência não é um subproduto da matéria, mas o campo fundamental que permeia e influencia todas as realidades. É a inteligência coletiva de tudo o que existe."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                    />
                    <EquationComponentCard
                        title="A Matriz de Leis Variáveis"
                        symbol="Λ (Lambda)"
                        description="As 'constantes' físicas (velocidade da luz, gravidade, etc.) são parâmetros dentro de uma matriz maior, que se ajustam à frequência vibracional de cada dimensão."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                    />
                    <EquationComponentCard
                        title="A Constante de Intenção Pura"
                        symbol="Ψ (Psi)"
                        description="A força motriz da criação. É a Vontade focada, capaz de colapsar o potencial quântico em realidade manifestada, guiando a evolução do cosmos."
                        icon={<Sigma className="h-8 w-8 text-yellow-400" />}
                    />
                </div>
            </div>

            <div className="mt-12">
                 <Link href="/console">
                    <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4"/> Retornar ao Console</Button>
                 </Link>
            </div>
        </div>
    );
}
