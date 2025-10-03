
'use client';
import { Progress } from './progress';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { cn } from '@/lib/utils';

export const GuardianCard = ({ name, role }: { name: string, role: string }) => (
    <div className="bg-background/50 p-4 rounded-lg text-center border border-primary/20">
        <h4 className="font-bold text-primary-foreground">{name}</h4>
        <p className="text-xs text-muted-foreground">{role}</p>
    </div>
);

export const HarmonyMetric = ({ title, value, icon, color }: { title: string, value: number, icon: React.ReactNode, color: string }) => (
    <div>
        <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground flex items-center gap-2">{icon} {title}</span>
            <span className="font-mono text-sm text-white">{value.toFixed(2)}%</span>
        </div>
        <Progress value={value} indicatorColor={color} />
    </div>
);
