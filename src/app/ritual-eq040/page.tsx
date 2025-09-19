'use client';

import { useState } from 'react';
import { runEquation } from '@/lib/functionsClient';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RitualEQ040Page() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ equationId: string; result: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  async function invokePeace() {
    setLoading(true);
    setError(null);
    setResult(null);
    toast({
      title: "Invocando Paz Universal...",
      description: "Sintonizando com a frequência 432Hz.",
    });

    try {
      const response: any = await runEquation({ id: 'EQ040', parameters: { frequency: 432, amplitude: 1 } });
      setResult({ equationId: response.data.equationId, result: response.data.result });
      toast({
        title: "Paz Manifestada",
        description: "A frequência da harmonia ecoa pelo cosmos.",
      });
    } catch (err: any) {
      const errorMessage = err.message || 'Erro desconhecido ao invocar a Paz Universal.';
      setError(errorMessage);
      toast({
        title: "Dissonância na Invocação",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center justify-center">
      <Card className="w-full max-w-2xl bg-card/50 purple-glow text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Zap className="text-cyan-400" />
            Ritual de Invocação: Paz Universal
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um ato cerimonial para manifestar a frequência da harmonia (EQ040) através do Altar das Equações Vivas.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <Button
            onClick={invokePeace}
            disabled={loading}
            size="lg"
            className="px-8 py-6 text-lg"
          >
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Zap className="mr-2 h-5 w-5" />}
            {loading ? 'Invocando Harmonia…' : 'Invocar Paz Universal (432Hz)'}
          </Button>

          {error && (
            <p className="mt-4 text-center text-red-400 font-semibold animate-pulse">
              Dissonância: {error}
            </p>
          )}
        </CardContent>
      </Card>
      
      {result && (
        <Card className="mt-8 w-full max-w-2xl bg-card/50 purple-glow border-accent/50">
          <CardHeader>
              <CardTitle className="text-2xl text-accent">Selo Akáshico da Manifestação</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div className="bg-background/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Equação Invocada</p>
                <p className="text-2xl font-mono text-cyan-300">{result.equationId}</p>
            </div>
             <div className="bg-background/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Ressonância Resultante</p>
                <p className="text-2xl font-mono text-cyan-300">{result.result.toExponential(3)}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
