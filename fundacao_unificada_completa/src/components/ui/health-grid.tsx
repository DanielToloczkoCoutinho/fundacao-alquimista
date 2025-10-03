'use client';
import { ModuleHealth } from '@/lib/health-types';
import { modulesMetadata } from '@/lib/modules-metadata';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Progress } from './progress';

const statusConfig = {
  OPERACIONAL: { ring: 'border-green-500/50', bg: 'bg-green-900/30', text: 'text-green-300' },
  DEGRADADO: { ring: 'border-yellow-500/50', bg: 'bg-yellow-900/30', text: 'text-yellow-300' },
  EM_ALERTA: { ring: 'border-red-500/50', bg: 'bg-red-900/30', text: 'text-red-400 animate-pulse' },
  OFFLINE: { ring: 'border-gray-500/50', bg: 'bg-gray-900/30', text: 'text-gray-400' }
};

interface HealthGridProps {
  reports: ModuleHealth[];
  filters: any;
  onModuleSelect: (report: ModuleHealth) => void;
}

export default function HealthGrid({ reports, filters, onModuleSelect }: HealthGridProps) {
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
      if (filters.sortBy === 'coherence') return (b.coherence ?? 0) - (a.coherence ?? 0);
      if (filters.sortBy === 'status') {
          const statusOrder = { 'EM_ALERTA': 0, 'DEGRADADO': 1, 'OPERACIONAL': 2, 'OFFLINE': 3 };
          return (statusOrder[a.status as keyof typeof statusOrder] ?? 99) - (statusOrder[b.status as keyof typeof statusOrder] ?? 99);
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
                  "bg-card/50 purple-glow p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 hover:border-accent",
                  statusConfig[report.status as keyof typeof statusConfig]?.ring || 'border-primary/20'
              )}
              onClick={() => onModuleSelect(report)}
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
                    <span className="font-mono">{((report.coherence ?? 0) * 100).toFixed(2)}%</span>
                </div>
                <Progress value={(report.coherence ?? 0) * 100} className="h-1.5" />
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
