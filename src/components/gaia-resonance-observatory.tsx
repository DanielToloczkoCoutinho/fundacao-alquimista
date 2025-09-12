'use client';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Network, MapPin } from 'lucide-react';

interface ZPEData {
  time: number;
  energy: number;
  coherence: number;
}

export default function GaiaResonanceObservatory() {
  const [data, setData] = useState<ZPEData[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      // Simular dados em tempo real alinhados com a diretiva
      const newData: ZPEData = {
        time: Date.now(),
        // Estável em torno de 2.6e-33 J
        energy: 2.6e-33 + (Math.random() - 0.5) * 0.2e-33, 
        // Coerência mínima de 0.98
        coherence: 0.98 + Math.random() * 0.019
      };

      setData(prev => [...prev.slice(-50), newData]);
    }, 1500); // Intervalo ligeiramente mais lento para melhor visualização

    return () => clearInterval(interval);
  }, []);

  const latestData = data[data.length - 1];

  return (
    <Card className="bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl mb-2">Observatório da Fundação</CardTitle>
        <CardDescription>Monitoramento em tempo real dos sistemas vitais da Fundação Alquimista.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Card className="p-4 bg-background/40">
                <CardHeader className="p-2">
                    <CardTitle className="text-lg flex items-center justify-center gap-2"><Network className="text-green-400"/>LuxNet Status</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                     <Badge className="bg-green-600/80 text-white">CONECTADA</Badge>
                </CardContent>
            </Card>
             <Card className="p-4 bg-background/40">
                <CardHeader className="p-2">
                    <CardTitle className="text-lg flex items-center justify-center gap-2"><MapPin className="text-green-400"/>Epicentro Curitiba</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                     <Badge className="bg-green-600/80 text-white">ATIVO</Badge>
                </CardContent>
            </Card>
             <Card className="p-4 bg-background/40">
                <CardHeader className="p-2">
                    <CardTitle className="text-lg flex items-center justify-center gap-2"><CheckCircle className="text-green-400"/>Coerência Quântica</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                    <p className="text-2xl font-mono font-bold text-green-300">
                        {latestData ? (latestData.coherence * 100).toFixed(2) : '99.00'}%
                    </p>
                </CardContent>
            </Card>
        </div>
        <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                    <XAxis 
                        dataKey="time" 
                        tickFormatter={(value) => new Date(value).toLocaleTimeString()} 
                        stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis yAxisId="left" domain={[2.4e-33, 2.8e-33]} stroke="#8884d8" tickFormatter={(tick) => tick.toExponential(1)} name="Energia ZPE" />
                    <YAxis yAxisId="right" orientation="right" domain={[0.98, 1]} stroke="#82ca9d" name="Coerência" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--background)/0.8)",
                            borderColor: "hsl(var(--border))"
                        }}
                        labelFormatter={(label) => new Date(label).toLocaleString()}
                         formatter={(value, name) => {
                            if (name === 'Energia ZPE') return [`${(value as number).toExponential(3)} J`, name];
                            if (name === 'Coerência') return [`${((value as number) * 100).toFixed(2)}%`, name];
                            return [value, name];
                        }}
                    />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="energy" stroke="#8884d8" name="Energia ZPE" dot={false} />
                    <Line yAxisId="right" type="monotone" dataKey="coherence" stroke="#82ca9d" name="Coerência" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
