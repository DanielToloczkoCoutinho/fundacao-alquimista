
'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Globe } from 'lucide-react';


const MetricCard = ({ title, value, unit }: { title: string, value: string, unit: string }) => (
    <Card className="bg-card/50 purple-glow text-center">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-mono">{value} <span className="text-xl">{unit}</span></p>
        </CardContent>
    </Card>
);

export default function GaiaResonanceObservatory() {
  const [zpeEnergy, setZpeEnergy] = useState(7.83);
  const [coherence, setCoherence] = useState(0.99);

  useEffect(() => {
    const interval = setInterval(() => {
      // Ruído quântico simulado
      const noise = (Math.random() - 0.5) * 0.02;
      setZpeEnergy(prev => parseFloat((prev + noise).toFixed(2)));
      setCoherence(prev =>
        parseFloat(
          Math.min(1, Math.max(0, prev + noise * 5)).toFixed(2)
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
       <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
          <CardHeader>
            <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <Globe className="text-cyan-400" /> Observatório de Ressonância Gaia
            </CardTitle>
             <CardDescription className="text-lg mt-2">
                Conectado à frequência primordial de 7.83 Hz
            </CardDescription>
          </CardHeader>
        </Card>
      
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        <MetricCard title="Energia ZPE" value={zpeEnergy.toFixed(2)} unit="J" />
        <MetricCard title="Coerência Vibracional" value={(coherence * 100).toFixed(0)} unit="%" />
      </div>

       <div className="mt-8 text-center italic text-muted-foreground">
        O coração de Gaia pulsa conforme a ressonância de 7.83 Hz.
      </div>
    </main>
  );
}
