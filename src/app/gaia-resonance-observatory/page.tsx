'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const MetricCard = ({ title, value }: { title: string; value: React.ReactNode }) => (
  <Card className="bg-background/50 text-center">
    <CardHeader className="pb-2">
      <CardDescription>{title}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold font-mono text-primary-foreground">{value}</p>
    </CardContent>
  </Card>
);

export default function GaiaResonanceObservatory() {
  const [zpeEnergy, setZpeEnergy] = useState(2.6e-33);
  const [coherence, setCoherence] = useState(0.98);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simula pequenas flutuações naturais
      const energyNoise = (Math.random() - 0.5) * 0.1e-33;
      const coherenceNoise = (Math.random() - 0.5) * 0.01;

      setZpeEnergy(prev => parseFloat((prev + energyNoise).toPrecision(3)));
      setCoherence(prev => parseFloat(Math.min(1, Math.max(0, prev + coherenceNoise)).toFixed(3)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
       <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
          <CardHeader>
            <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <Globe className="text-cyan-400" /> Observatório de Ressonância Gaia
            </CardTitle>
          </CardHeader>
        </Card>
      
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <MetricCard title="Energia ZPE" value={`${zpeEnergy.toExponential(2)} J`} />
        <MetricCard title="Coerência Vibracional" value={`${(coherence * 100).toFixed(1)}%`} />
      </div>

      <section className="text-center text-muted-foreground italic">
        <p>Gráfico de otimização ZPE 🔄 (em desenvolvimento)</p>
      </section>
    </main>
  );
}
