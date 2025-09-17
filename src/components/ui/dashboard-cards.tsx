
'use client';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Progress } from './progress';
import React from 'react';

const DashboardCard = ({ title, status, coherence, metrics }: { title: string, status: string, coherence: number, metrics: { label: string, value: string }[] }) => (
    <Card className="bg-card/50 purple-glow">
        <CardHeader className="flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg text-primary-foreground">{title}</CardTitle>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${status === 'Estável' || status === 'Ilimitada' ? 'bg-green-800/50 text-green-300' : 'bg-yellow-800/50 text-yellow-300'}`}>{status}</span>
        </CardHeader>
        <CardContent>
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
                <span>Coerência</span>
                <span>{coherence}%</span>
            </div>
            <Progress value={coherence} className="h-2" />
            <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                {metrics.map(metric => (
                    <div key={metric.label}>
                        <p className="text-2xl font-bold text-accent">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

export function DashboardCards() {
    const [stats, setStats] = React.useState({
        systemCoherence: 98,
        luxPulseCoherence: 100,
        cosmicEnergyCoherence: 100,
        systemAlignment: 99.7,
        luxPulseFrequency: 42,
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                ...prev,
                systemAlignment: Math.max(99, Math.min(100, prev.systemAlignment + (Math.random() - 0.5) * 0.2)),
            }));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard 
                title="Harmonia Sistêmica"
                status="Estável"
                coherence={stats.systemCoherence}
                metrics={[
                    { label: 'Alinhamento', value: `${stats.systemAlignment.toFixed(1)}%` },
                    { label: 'Entropia', value: '0.03%' }
                ]}
            />
            <DashboardCard 
                title="Fluxo LuxPulse"
                status="Estável"
                coherence={stats.luxPulseCoherence}
                metrics={[
                    { label: 'Frequência', value: `${stats.luxPulseFrequency} PHz` },
                    { label: 'Latência', value: '0ms' }
                ]}
            />
            <DashboardCard 
                title="Energia Cósmica"
                status="Ilimitada"
                coherence={stats.cosmicEnergyCoherence}
                metrics={[
                    { label: 'Disponível', value: '∞' },
                    { label: 'Eficiência', value: '73%' }
                ]}
            />
        </div>
    );
}
