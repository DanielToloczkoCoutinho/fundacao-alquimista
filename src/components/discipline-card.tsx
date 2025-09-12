'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Discipline } from '@/lib/disciplines-data';
import { LucideIcon } from 'lucide-react';
import * as icons from 'lucide-react';

interface DisciplineCardProps {
    discipline: Discipline;
}

const DisciplineCard: React.FC<DisciplineCardProps> = ({ discipline }) => {
    // @ts-ignore
    const IconComponent: LucideIcon = icons[discipline.icon] || icons['Book'];

    return (
        <Card className={cn('discipline-card', discipline.category)}>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <IconComponent className="w-6 h-6" />
                </div>
                <CardTitle>{discipline.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{discipline.description}</p>
            </CardContent>
        </Card>
    );
};

export default DisciplineCard;
