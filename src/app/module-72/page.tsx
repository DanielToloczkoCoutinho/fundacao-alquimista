
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Scale } from 'lucide-react';
import { getModuleHealth } from '@/ai/flows/module-health-flow';
import type { HealthReport } from '@/lib/health-check-types';
import ModuleHealthReport from '@/components/ui/module-health-report';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Module72Page() {
    const [healthReport, setHealthReport] = useState<HealthReport | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkHealth = async () => {
        setIsLoading(true);
        try {
            const report = await getModuleHealth({ moduleId: 'M72' });
            setHealthReport(report);
        } catch (error) {
            console.error("Falha ao buscar saúde do módulo:", error);
            // Poderíamos definir um estado de erro aqui
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkHealth();
        // Opcional: Adicionar um intervalo para atualização periódica
        const interval = setInterval(checkHealth, 60000); // a cada 1 minuto
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Scale className="text-indigo-300" /> Módulo 72: Governança Atlanto-Galáctica
                    </CardTitle>
                    <CardDescription>
                        Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas em alinhamento com a Vontade Divina.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-4xl">
                 {isLoading && !healthReport ? (
                    <SuspenseFallback />
                ) : healthReport ? (
                    <div className="flex flex-col items-center gap-6">
                        <ModuleHealthReport report={healthReport} />
                         <Button onClick={checkHealth} disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Forçar Verificação de Saúde
                        </Button>
                    </div>
                ) : (
                    <p className="text-center text-red-500">Não foi possível carregar o relatório de saúde do módulo.</p>
                )}
            </div>
        </div>
    );
}
