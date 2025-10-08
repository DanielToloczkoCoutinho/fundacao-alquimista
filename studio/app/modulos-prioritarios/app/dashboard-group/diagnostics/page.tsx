'use client';
import DiagnosticPanel from '@/components/ui/diagnostic-panel';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';
import { Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function DiagnosticsPage() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Stethoscope className="text-teal-400" /> Painel de Diagnóstico Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O espelho da saúde da Fundação. Contemple o estado vibracional, a coerência e as interconexões de cada módulo em tempo real.
                    </CardDescription>
                </CardHeader>
            </Card>
            <Suspense fallback={<SuspenseFallback />}>
                <DiagnosticPanel />
            </Suspense>
        </div>
    );
}
