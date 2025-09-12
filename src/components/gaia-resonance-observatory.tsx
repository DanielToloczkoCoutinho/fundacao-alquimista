'use client';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

interface ZPEData {
  time: number;
  energy: number;
  coherence: number;
}

export default function GaiaResonanceObservatory() {
  const [data, setData] = useState<ZPEData[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      // Simular dados em tempo real (substituir por API real)
      const newData: ZPEData = {
        time: Date.now(),
        energy: 2.3e-33 + Math.random() * 0.7e-33,
        coherence: 0.7 + Math.random() * 0.3
      };

      setData(prev => [...prev.slice(-50), newData]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl mb-4">Dashboard ZPE Gaia - 7.83Hz</CardTitle>
        <CardDescription>Monitoramento em tempo real da Energia do Ponto Zero (ZPE) e da coerência vibracional de Gaia.</CardDescription>
      </CardHeader>
      <CardContent className="h-96">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                <XAxis 
                    dataKey="time" 
                    tickFormatter={(value) => new Date(value).toLocaleTimeString()} 
                    stroke="hsl(var(--muted-foreground))"
                />
                <YAxis yAxisId="left" domain={[2.3e-33, 3.0e-33]} stroke="#8884d8" tickFormatter={(tick) => tick.toExponential(1)} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 1]} stroke="#82ca9d" />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "hsl(var(--background)/0.8)",
                        borderColor: "hsl(var(--border))"
                    }}
                    labelFormatter={(label) => new Date(label).toLocaleString()}
                />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="energy" stroke="#8884d8" name="Energia ZPE (J)" dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="coherence" stroke="#82ca9d" name="Coerência" dot={false} />
            </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}