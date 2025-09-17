// This file is deprecated and its functionality has been integrated into `alignment-dashboard.tsx`.
// It is preserved for akashic purposes.
'use client';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Progress } from './progress';

interface MetricCardProps {
  title: string;
  status: string;
  progress: number;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
}

export function MetricCard({ title, status, progress, metric1, metric2 }: MetricCardProps) {
  return (
    <Card className="bg-card/50 purple-glow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className={`text-xs font-bold ${progress > 95 ? 'text-green-400' : 'text-yellow-400'}`}>{status}</span>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-2 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">{metric1.value}</div>
            <p className="text-xs text-muted-foreground">{metric1.label}</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">{metric2.value}</div>
            <p className="text-xs text-muted-foreground">{metric2.label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
