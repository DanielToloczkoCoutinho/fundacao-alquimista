'use client';
import { ModuleHealth } from '@/lib/health-types';
import { modulesMetadata } from '@/lib/modules-metadata';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Progress } from '../ui/progress';

const statusConfig = {
  healthy: { ring: 'border-green-500/50', bg: 'bg-green-900/30', text: 'text-green-300' },
  warning: { ring: 'border-yellow-500/50', bg: 'bg-yellow-900/30', text: 'text-yellow-300' },
  critical: { ring: 'border-red-500/50', bg: 'bg-red-900/30', text: 'text-red-400 animate-pulse' },
};

export default function HealthGrid({ reports, filters }: { reports: ModuleHealth[], filters: any }) {

  const filteredAndSortedModules = reports
    .map(health => ({
      ...health,
      ...modulesMetadata.find(meta => meta.code === health.moduleCode)
    }))
    .filter(module => {
      const searchMatch = module.title?.toLowerCase().includes(filters.search.toLowerCase()) || module.moduleCode.toLowerCase().includes(filters.search.toLowerCase());
      const categoryMatch = filters.category === 'all' || module.category === filters.category;
      
      let statusFilter = filters.status;
      if(statusFilter === 'healthy') statusFilter = 'OPERACIONAL';
      if(statusFilter === 'warning') statusFilter = 'DEGRADADO';
      if(statusFilter === 'critical') statusFilter = 'EM_ALERTA';

      const statusMatch = statusFilter === 'all' || (module.status && module.status === statusFilter);

      return searchMatch && categoryMatch && statusMatch;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'coherence') return b.coherence - a.coherence;
      if (filters.sortBy === 'status') {
          const statusOrder = { 'critical': 0, 'warning': 1, 'healthy': 2 };
          return statusOrder[a.status as keyof typeof statusOrder] - statusOrder[b.status as keyof typeof statusOrder];
      }
      return a.title?.localeCompare(b.title || '') || 0;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredAndSortedModules.map(report => (
            <motion.div
              key={report.moduleCode}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={cn(
                  "bg-card/50 purple-glow p-4 rounded-lg border-2",
                  statusConfig[report.status as keyof typeof statusConfig]?.ring || 'border-primary/20'
              )}
            >
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold text-primary-foreground">{report.title} ({report.moduleCode})</h2>
                <span className={cn("text-xs font-bold", statusConfig[report.status as keyof typeof statusConfig]?.text)}>
                    {report.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{report.category}</p>
              <div className="mt-4 space-y-2">
                 <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Coerência</span>
                    <span className="font-mono">{report.coherence.toFixed(2)}%</span>
                </div>
                <Progress value={report.coherence} className="h-1.5" />
              </div>
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
export type { ModuleHealth } from '@/lib/health-types';
