'use client';
import { ModuleHealth } from '@/lib/health-types';
import { modulesMetadata } from '@/lib/modules-metadata';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const statusConfig = {
  healthy: { ring: 'ring-green-500/50', bg: 'bg-green-500', text: 'text-green-300' },
  warning: { ring: 'ring-yellow-500/50', bg: 'bg-yellow-500', text: 'text-yellow-300' },
  critical: { ring: 'ring-red-500/50', bg: 'bg-red-500', text: 'text-red-300' },
};

const ConnectionStatusIndicator = ({ status }: { status: 'healthy' | 'warning' | 'critical' }) => (
  <div className={cn('w-2 h-2 rounded-full', statusConfig[status].bg)} />
);

export default function HealthGrid({ reports, filters }: { reports: ModuleHealthReport[], filters: any }) {

  const filteredAndSortedModules = reports
    .map(health => ({
      ...health,
      ...modulesMetadata.find(meta => meta.code === health.moduleId)
    }))
    .filter(module => {
      const searchMatch = module.name?.toLowerCase().includes(filters.search.toLowerCase()) || module.moduleId.toLowerCase().includes(filters.search.toLowerCase());
      const categoryMatch = filters.category === 'all' || module.category === filters.category;
      const statusMatch = filters.status === 'all' || module.status === filters.status;
      return searchMatch && categoryMatch && statusMatch;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'coherence') return b.coherence - a.coherence;
      if (filters.sortBy === 'status') {
          const statusOrder = { 'critical': 0, 'warning': 1, 'healthy': 2 };
          return statusOrder[a.status] - statusOrder[b.status];
      }
      return a.name?.localeCompare(b.name || '') || 0;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredAndSortedModules.map(report => (
            <motion.div
              key={report.moduleId}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-card/50 purple-glow p-4 rounded-lg border border-primary/20"
            >
              <h2 className="text-xl font-bold text-accent">{report.name}</h2>
              <p>Status: <span className={cn(statusConfig[report.status].text)}>{report.status}</span></p>
              <p>Coerência Quântica: {report.coherence.toFixed(2)}</p>
              <p>Guardião: {report.guardian}</p>
            </motion.div>
        ))}
        {filteredAndSortedModules.length === 0 && (
            <div className="col-span-full text-center py-20 text-muted-foreground">
                <p>Nenhum módulo corresponde aos filtros selecionados.</p>
            </div>
        )}
    </div>
  );
}

// Re-exporting a more specific type if needed elsewhere, but using the base for now.
export type { ModuleHealthReport } from '@/lib/health-check-types';
