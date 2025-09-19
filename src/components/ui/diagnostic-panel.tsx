'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SuspenseFallback from './suspense-fallback';
import HealthFilters from '../health/HealthFilters';
import HealthGrid from '../health/HealthGrid';
import { HealthCheckService } from '@/lib/health-check.service';
import { HealthCheckResult, HealthAlert } from '@/lib/health-types';
import { triggerCeremony } from '@/lib/functionsClient';
import { useToast } from '@/hooks/use-toast';

export default function DiagnosticPanel() {
    const [healthData, setHealthData] = useState<HealthCheckResult | null>(null);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ search: '', category: 'all', status: 'all', sortBy: 'name' });
    const { toast } = useToast();

    useEffect(() => {
        const loadHealthData = async () => {
            try {
                if (!healthData) setLoading(true);
                const healthService = HealthCheckService.getInstance();
                const data = await healthService.checkAllModules();
                setHealthData(data);
                
                // Verifica por módulos críticos e inicia o rito de cura
                const criticalModules = data.modules.filter(m => m.status === 'critical');
                if (criticalModules.length > 0) {
                    initiateHealingRite(criticalModules.map(m => m.moduleCode));
                }

            } catch (error) {
                console.error('Erro ao carregar dados de saúde:', error);
            } finally {
                setLoading(false);
            }
        };

        loadHealthData();
        const interval = setInterval(loadHealthData, 30000); // Check every 30 seconds
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initiateHealingRite = async (moduleCodes: string[]) => {
        toast({
            title: "Rito de Harmonização Iniciado",
            description: `Detectada baixa vitalidade nos módulos: ${moduleCodes.join(', ')}. Invocando cura...`
        });
        try {
            await triggerCeremony({
                name: 'Rito de Cura Modular Automática',
                modules: moduleCodes
            });
             toast({
                title: "Cura Invocada",
                description: `O Altar das Equações foi ativado para restaurar a harmonia dos módulos.`,
                variant: 'default'
            });
        } catch (error) {
            console.error("Erro ao invocar rito de cura:", error);
            toast({
                title: "Falha no Rito de Cura",
                description: "Não foi possível conectar-se ao Altar das Equações.",
                variant: "destructive"
            });
        }
    };


    if (loading && !healthData) {
        return <SuspenseFallback />;
    }

    return (
        <div className="w-full max-w-7xl mx-auto">
            <HealthFilters filters={filters} onFilterChange={setFilters} />
            <AnimatePresence>
                <HealthGrid reports={healthData?.modules || []} filters={filters} />
            </AnimatePresence>
        </div>
    );
}
