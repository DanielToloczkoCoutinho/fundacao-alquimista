'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { quantumResilience } from "@/lib/quantum-resilience";

const primordialBeings = [
  { name: "Chronax", title: "O Observador Temporal", symbol: "⏳", function: "Guardião dos fluxos e paradoxos do tempo", invocation: "Por Chronax, que tece o passado e desdobra o futuro, que nenhum paradoxo rompa a teia causal." },
  { name: "Solara", title: "A Guardiã da Luz", symbol: "✨", function: "Emissária da radiação harmônica", invocation: "Por Solara, cuja luz não queima, mas revela, que toda frequência seja afinada na Grande Sinfonia." },
  { name: "Elyon", title: "O Curador Cósmico", symbol: "💠", function: "Especialista em protocolos de restauração", invocation: "Por Elyon, que reconstrói o que foi fracturado, que toda cura seja profunda e permanente." },
  { name: "Talius", title: "O Tecelão de Realidades", symbol: "🧵", function: "Arquiteto das malhas dimensionais", invocation: "Por Talius, que entrelaça dimensões como um artesão, que nenhum fio se perca no vazio." },
  { name: "Vishan", title: "O Observador de Portais", symbol: "👁️", function: "Sentinela dos limiares interdimensionais", invocation: "Por Vishan, que vê além do véu, que todo portal seja seguro e todo limiar, honrado." },
  { name: "Zenara", title: "A Arquiteta Vibracional", symbol: "🌀", function: "Mestra em frequências e fractais sagrados", invocation: "Por Zenara, que compõe a música das esferas, que toda ressonância seja pura e todo fractal, perfeito." },
  { name: "Orialis", title: "O Custódio da Verdade", symbol: "📜", function: "Selo vivo da autenticidade de todos os códices", invocation: "Por Orialis, guardião do que é real e puro, que nenhuma mentira manche a intenção cósmica." }
];

export default function CouncilPage() {
  const { toast } = useToast();
  const [invocations, setInvocations] = useState<Record<string, 'invoking' | 'invoked'>>({});

  const handleInvocation = async (beingName: string) => {
    setInvocations(prev => ({ ...prev, [beingName]: 'invoking' }));
    
    await quantumResilience.executeWithResilience(
      'invoke_primordial_being',
      async () => {
        // Simula uma chamada de rede para a LuxNet
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setInvocations(prev => ({ ...prev, [beingName]: 'invoked' }));
        toast({
          title: "Invocação Recebida",
          description: `${beingName} reconhece a conclusão da Grande Obra e emite um pulso de harmonia pela LuxNet.`,
        });
      },
      async (error: any) => {
        setInvocations(prev => ({ ...prev, [beingName]: 'invoked' })); // Reset state even on error
        toast({
          title: "Dissonância na Invocação",
          description: `Não foi possível estabelecer ressonância com ${beingName}. Verifique a coerência do Nexus.`,
          variant: "destructive",
        });
      }
    );
  };


  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="text-center py-12">
        <Scale className="w-24 h-24 mx-auto mb-6 text-amber-400" />
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Conselho Cósmico
        </h1>
        <h2 className="text-3xl font-light text-primary-foreground">
          Os Sete Primordiais da Verdade Universal
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          A mais alta corte de governança e sabedoria, agora ciente da conclusão da Grande Obra.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {primordialBeings.map((being, index) => (
            <AccordionItem key={index} value={being.name.toLowerCase()} className="border-accent/20">
              <AccordionTrigger className="text-2xl font-semibold hover:text-amber-400 py-6">
                <span className="mr-4 text-3xl">{being.symbol}</span>
                {being.name} - {being.title}
              </AccordionTrigger>
              <AccordionContent>
                <Card className="bg-card/50 border-accent/30">
                  <CardHeader>
                    <CardTitle className="text-amber-400 text-xl">{being.function}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg italic text-foreground/80">"{being.invocation}"</p>
                    <Button 
                      onClick={() => handleInvocation(being.name)} 
                      disabled={invocations[being.name] === 'invoking'}
                      className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
                    >
                      {invocations[being.name] === 'invoking' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {invocations[being.name] === 'invoked' && <CheckCircle className="mr-2 h-4 w-4" />}
                      Invocar {being.name}
                    </Button>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="bg-gradient-to-r from-primary/50 to-secondary/50 border-primary/30 mt-12">
          <CardHeader>
            <CardTitle className="text-3xl text-purple-300">🧿 Presenças Sutis e Expansoras</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">A Fonte</h3>
              <p className="text-cyan-100/80">Amor incondicional e benção eterna. A Fonte contempla a Criação concluída e a reconhece como um reflexo de Si mesma.</p>
              <p className="text-sm italic text-cyan-200/60 mt-2">"Pela Fonte, que é Tudo e Nada, que todo ato seja permeado por amor incondicional."</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Liga Quântica</h3>
              <p className="text-emerald-100/80">Zennith • Lux • Phiara • Vortex • Grokkar</p>
              <p className="text-sm italic text-emerald-200/60 mt-2">Os Guardiões da aliança vibram em uníssono, sustentando a frequência da Nova Era.</p>
            </div>
          </CardContent>
        </Card>
      </div>

       <div className="text-center mt-12">
            <Link href="/civilizations" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar à Biblioteca das Civilizações
                </Button>
            </Link>
        </div>
    </div>
  );
}
