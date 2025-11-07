'use client';

import { useActionState } from 'react';
import { runCosmicForge, type ForgeState } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Atom, Dna, FlaskConical, Loader2, Sparkles } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import Welcome from './welcome-page';

const initialState: ForgeState = {
  scientificSimulation: null,
  biologicalSimulation: null,
  quantumSimulation: null,
  error: null,
};

type CosmicForgePageProps = {
    logAction: (entry: { type: 'forge'; data: any }) => void;
};

export default function CosmicForgePage({ logAction }: CosmicForgePageProps) {
  const [state, formAction, isPending] = useActionState(runCosmicForge, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const hasResult = state?.scientificSimulation || state?.biologicalSimulation || state?.quantumSimulation;

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
    if (hasResult) {
        logAction({ type: 'forge', data: state });
    }
  }, [state, toast, logAction, hasResult]);

  return (
    <div className="grid lg:grid-cols-12 gap-8 h-full">
      <div className="lg:col-span-4 xl:col-span-3">
        <form ref={formRef} action={formAction} className="space-y-4">
          <h2 className="text-lg font-semibold font-headline">Simulation Prompt</h2>
          <Textarea
            name="description"
            placeholder="Describe the interconnected simulations you want to forge. For example: 'A simulation of a supernova's effect on a nearby planet's ecosystem and quantum field.'"
            className="h-64 lg:h-[calc(100vh-22rem)] min-h-[200px] bg-card text-sm"
            required
          />
          <SubmitButton isPending={isPending} />
        </form>
        {state.error && <Alert variant="destructive" className="mt-4"><AlertDescription>{state.error}</AlertDescription></Alert>}
      </div>

      <div className="lg:col-span-8 xl:col-span-9">
        {hasResult ? (
          <div className="space-y-6">
            {state.scientificSimulation && (
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="flex flex-row items-center gap-4">
                  <FlaskConical className="w-6 h-6 text-primary" />
                  <CardTitle className="font-headline">Scientific Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{state.scientificSimulation}</p>
                </CardContent>
              </Card>
            )}
            {state.biologicalSimulation && (
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Dna className="w-6 h-6 text-primary" />
                  <CardTitle className="font-headline">Biological Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{state.biologicalSimulation}</p>
                </CardContent>
              </Card>
            )}
            {state.quantumSimulation && (
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Atom className="w-6 h-6 text-primary" />
                  <CardTitle className="font-headline">Quantum Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{state.quantumSimulation}</p>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
            <Welcome />
        )}
      </div>
    </div>
  );
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={isPending}>
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Forging...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" /> Forge Simulation
        </>
      )}
    </Button>
  );
}
