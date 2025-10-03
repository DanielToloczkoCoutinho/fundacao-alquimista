'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
} from 'chart.js';
import 'chart.js/auto';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface GaiaData {
  timestamp: string;
  frequency: number;
  zpeEnergy: number;
  coherence: number;
}

const MetricCard = ({ title, value, unit }: { title: string; value: React.ReactNode; unit: string; }) => (
    <Card className="bg-card/50 purple-glow text-center">
        <CardHeader className='pb-2'>
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-mono">{value} <span className="text-xl">{unit}</span></p>
        </CardContent>
    </Card>
);

export default function GaiaResonanceObservatory() {
  const [history, setHistory] = useState<GaiaData[]>([]);

  useEffect(() => {
    const fetchGaiaData = async () => {
      try {
        const res = await fetch('/api/gaia-data');
        if (!res.ok) return;
        const latest: GaiaData = await res.json();
        setHistory(prev => {
          const newHistory = [...prev, latest].slice(-50); // Keep last 50 data points
          return newHistory;
        });
      } catch (error) {
        console.error("Falha ao buscar dados de Gaia:", error);
      }
    };

    fetchGaiaData(); // Fetch initial data
    const interval = setInterval(fetchGaiaData, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval);
  }, []);
  
  const latest = history[history.length - 1] || { frequency: 7.83, zpeEnergy: 0, coherence: 0 };

  const chartData = {
    labels: history.map(h => new Date(h.timestamp).toLocaleTimeString('pt-BR')),
    datasets: [
      {
        label: 'Energia ZPE (J)',
        data: history.map(h => h.zpeEnergy),
        borderColor: '#38bdf8', // Cyan
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: 'Coerência Vibracional (%)',
        data: history.map(h => h.coherence * 100),
        borderColor: '#a3e635', // Lime
        backgroundColor: 'rgba(163, 230, 53, 0.2)',
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        ticks: { color: '#9ca3af' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: { display: true, text: 'Energia ZPE (J)', color: '#38bdf8' },
        ticks: { color: '#38bdf8' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: { display: true, text: 'Coerência (%)', color: '#a3e635' },
        ticks: { color: '#a3e635' },
        grid: { drawOnChartArea: false },
        min: 0,
        max: 100
      },
    },
    plugins: {
      legend: {
        labels: { color: '#e5e7eb' }
      }
    }
  };


  return (
    <main className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
       <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
          <CardHeader>
            <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <Globe className="text-cyan-400" /> Observatório de Ressonância Gaia
            </CardTitle>
             <CardDescription className="text-lg mt-2">
                Conectado à frequência primordial de {latest.frequency.toFixed(2)} Hz
            </CardDescription>
          </CardHeader>
        </Card>
      
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <MetricCard title="Energia ZPE" value={latest.zpeEnergy.toExponential(2)} unit="J" />
        <MetricCard title="Coerência Vibracional" value={(latest.coherence * 100).toFixed(1)} unit="%" />
      </div>

       <Card className="w-full max-w-4xl bg-card/50 purple-glow">
        <CardContent className="pt-6 h-96">
            <Line data={chartData} options={chartOptions} />
        </CardContent>
      </Card>
    </main>
  );
}