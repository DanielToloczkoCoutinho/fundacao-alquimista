'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables, ChartOptions, ChartData } from 'chart.js';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Globe } from 'lucide-react';

Chart.register(...registerables);

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
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });
  const [latestZPE, setLatestZPE] = useState('0.00e+0');
  const [latestCoherence, setLatestCoherence] = useState('0.0');

  useEffect(() => {
    const freqs = Array.from({ length: 50 }, (_, i) => 7.02 + ((9 - 7.02) * i) / 49);
    const initialLabels = freqs.map(f => f.toFixed(2));
    
    const updateData = () => {
        const newZpeData = freqs.map(f => {
            const noise = (Math.random() - 0.5) * 0.02;
            return 0.5 * 1.0545718e-34 * 2 * Math.PI * f * (1 + noise);
        });
        const newCoherenceData = freqs.map(f =>
            0.5 + 0.5 * Math.sin(2 * Math.PI * (f - 7.83) * 0.1 + (Math.random() - 0.5) * 0.5)
        );

        setChartData({
            labels: initialLabels,
            datasets: [
                {
                    label: 'Energia ZPE (J)',
                    data: newZpeData,
                    borderColor: 'hsl(var(--accent))',
                    backgroundColor: 'hsla(var(--accent), 0.2)',
                    yAxisID: 'yZPE',
                    tension: 0.4
                },
                {
                    label: 'Coerência Vibracional',
                    data: newCoherenceData,
                    borderColor: 'hsl(var(--primary))',
                    backgroundColor: 'hsla(var(--primary), 0.2)',
                    yAxisID: 'yCoherence',
                    tension: 0.4
                }
            ]
        });
        setLatestZPE(newZpeData[newZpeData.length - 1].toExponential(3));
        setLatestCoherence((newCoherenceData[newCoherenceData.length - 1] * 100).toFixed(1));
    };

    updateData();
    const interval = setInterval(updateData, 2000);

    return () => clearInterval(interval);
  }, []);

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
      x: { 
        title: { display: true, text: 'Frequência (Hz)', color: 'hsl(var(--muted-foreground))' },
        ticks: { color: 'hsl(var(--muted-foreground))' },
        grid: { color: 'hsl(var(--border))' }
      },
      yZPE: { 
        type: 'logarithmic',
        position: 'left',
        title: { display: true, text: 'Energia ZPE (J)', color: 'hsl(var(--accent))' },
        ticks: { color: 'hsl(var(--accent))' },
        grid: { drawOnChartArea: false }
      },
      yCoherence: {
        type: 'linear',
        position: 'right',
        min: 0,
        max: 1,
        title: { display: true, text: 'Coerência Vibracional', color: 'hsl(var(--primary))' },
        ticks: { color: 'hsl(var(--primary))' },
        grid: { color: 'hsl(var(--border))' }
      }
    },
    plugins: {
        legend: {
            labels: {
                color: 'hsl(var(--foreground))'
            }
        }
    },
    animation: { duration: 500 }
  };

  return (
    <main className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
       <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-8 text-center">
          <CardHeader>
            <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <Globe className="text-cyan-400" /> Observatório de Ressonância Gaia
            </CardTitle>
            <CardDescription className="text-lg mt-2">
                Conectado à frequência primordial de 7.83 Hz
            </CardDescription>
          </CardHeader>
        </Card>
      
      <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 mb-6">
        <MetricCard title="Energia ZPE (Pico)" value={latestZPE} unit="J" />
        <MetricCard title="Coerência Vibracional (Pico)" value={latestCoherence} unit="%" />
      </div>

      <Card className="w-full max-w-5xl bg-card/50 purple-glow flex-grow">
          <CardHeader>
              <CardTitle>Análise Espectral em Tempo Real</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <Line data={chartData} options={options} />
          </CardContent>
      </Card>
    </main>
  );
}
