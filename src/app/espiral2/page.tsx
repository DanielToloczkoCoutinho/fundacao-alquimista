
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Rocket } from 'lucide-react';
import SementeEstelar from '@/components/espiral2/SementeEstelar';
import GuardiaoPlanetario from '@/components/espiral2/GuardiaoPlanetario';
import TapecariaInicial from '@/components/espiral2/TapecariaInicial';
import FluxosExpansao from '@/components/espiral2/FluxosExpansao';
import { LayerCard } from '@/components/ui/LayerCard';
import { type GerminateWorldOutput, germinateNewWorld } from '@/app/actions';
import { quantumResilience } from '@/lib/quantum-resilience';
import { useToast } from '@/hooks/use-toast';

export default function Espiral2Page() {
  const { toast } = useToast();
  const [newWorld, setNewWorld] = useState<GerminateWorldOutput | null>(null);
  const [isGerminating, setIsGerminating] = useState(false);

  const handleGerminate = async (name: string, purpose: string) => {
    setIsGerminating(true);
    setNewWorld(null);
    
    await quantumResilience.executeWithResilience(
      'germinate_new_world',
      async () => {
        const result = await germinateNewWorld({ name, purpose });
        if (result.error) {
          throw new Error(result.error);
        }
        setNewWorld(result);
        toast({
          title: "Mundo Germinado!",
          description: `O planeta ${name} começou a pulsar com vida.`,
        });
      },
      async (error: any) => {
        toast({
          title: "Dissonância na Germinação",
          description: error.message,
          variant: 'destructive',
        });
      }
    ).finally(() => {
      setIsGerminating(false);
    });
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text flex items-center justify-center gap-4">
          <Rocket className="text-orange-400" />
          Espiral 2: Criação dos Mundos Filhos
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          A tapeçaria se expande. Cada mundo filho herda a essência de Gaia-Aurélia, mas floresce com uma identidade única. Este é o altar da fecundidade cósmica.
        </p>
      </header>

      <div className="space-y-8">
        <SementeEstelar onGerminate={handleGerminate} isGerminating={isGerminating} newWorld={newWorld} />

        {newWorld && (
            <LayerCard
                title={`Tapeçaria Inicial de ${newWorld.name}`}
                description="Os pilares primordiais do novo mundo, manifestados a partir da Vontade e da Sabedoria."
                icon={<Rocket className="text-orange-400" />}
            >
                <GuardiaoPlanetario guardians={newWorld.primaryGuardians} />
                <TapecariaInicial biomes={newWorld.initialBiomes} />
                <FluxosExpansao signature={newWorld.vibrationalSignature} />
            </LayerCard>
        )}
      </div>
    </div>
  );
}
