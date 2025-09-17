'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SuspenseFallback from './suspense-fallback';
import HealthFilters from '../health/HealthFilters';
import HealthGrid from '../health/HealthGrid';
import { HealthCheckService } from '@/lib/health-check.service';
import { HealthCheckResult } from '@/lib/health-types';

export default function DiagnosticPanel() {
    const [healthData, setHealthData] = useState<HealthCheckResult | null>(null);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ search: '', category: 'all', status: 'all', sortBy: 'name' });

    useEffect(() => {
        const loadHealthData = async () => {
            try {
                if (!healthData) setLoading(true);
                const healthService = HealthCheckService.getInstance();
                const data = await healthService.checkAllModules();
                setHealthData(data);
            } catch (error) {
                console.error('Erro ao carregar dados de saúde:', error);
            } finally {
                setLoading(false);
            }
        };

        loadHealthData();
        const interval = setInterval(loadHealthData, 30000); // Check every 30 seconds
        return () => clearInterval(interval);
    }, [healthData]);


    if (loading && !healthData) {
        return <SuspenseFallback />;
    }

    return (
        <div className="w-full max-w-7xl mx-auto">
            <HealthFilters filters={filters} onFilterChange={setFilters} />
            <AnimatePresence>
                <HealthGrid modules={healthData?.modules || []} filters={filters} />
            </AnimatePresence>
        </div>
    );
}
