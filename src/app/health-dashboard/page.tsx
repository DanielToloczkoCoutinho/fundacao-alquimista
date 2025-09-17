'use client';

import { useEffect, useState } from 'react';
import { HealthCheckService } from '@/lib/health-check.service';
import { HealthCheckResult } from '@/lib/health-types';
import HealthGrid from '@/components/health/HealthGrid';
import HealthSidebar from '@/components/health/HealthSidebar';
import HealthFilters from '@/components/health/HealthFilters';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function HealthDashboard() {
  const [healthData, setHealthData] = useState<HealthCheckResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [filters, setFilters] = useState({ search: '', category: 'all', status: 'all', sortBy: 'name' });

  useEffect(() => {
    loadHealthData();
    let interval: NodeJS.Timeout;
    if (autoRefresh) {
      interval = setInterval(loadHealthData, 10000); // Atualizar a cada 10 segundos
    }
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const loadHealthData = async () => {
    try {
      if (!healthData) setLoading(true); // Only show full loader on first load
      const healthService = HealthCheckService.getInstance();
      const data = await healthService.checkAllModules();
      setHealthData(data);
    } catch (error) {
      console.error('Erro ao carregar dados de saúde:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !healthData) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <SuspenseFallback />
      </div>
    );
  }

  return (
     <div className="flex flex-col lg:flex-row h-screen bg-background p-4 gap-4">
      <HealthSidebar 
        healthData={healthData}
        loading={loading}
        autoRefresh={autoRefresh}
        onAutoRefreshChange={setAutoRefresh}
        onRefresh={loadHealthData}
      />
      <main className="flex-1 flex flex-col min-h-0">
        <Card className="bg-card/50 purple-glow mb-4 text-center">
            <CardHeader>
                <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-4">
                    <Stethoscope className="text-teal-400" /> Painel de Saúde Universal
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                    A visão unificada da saúde e coerência de cada órgão da Fundação Alquimista.
                </CardDescription>
            </CardHeader>
        </Card>
        <HealthFilters filters={filters} onFilterChange={setFilters} />
        <HealthGrid 
          modules={healthData?.modules || []}
          filters={filters}
        />
      </main>
    </div>
  );
}
