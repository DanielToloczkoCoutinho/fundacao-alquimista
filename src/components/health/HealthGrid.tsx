'use client';
import { ModuleHealth } from '@/lib/health-types';
import { modulesMetadata } from '@/lib/modules-metadata';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';
import { AnimatePresence, motion } from 'framer-motion';

const statusConfig = {
  healthy: { ring: 'ring-green-500/50', bg: 'bg-green-500', text: 'text-green-300' },
  warning: { ring: 'ring-yellow-500/50', bg: 'bg-yellow-500', text: 'text-yellow-300' },
  critical: { ring: 'ring-red-500/50', bg: 'bg-red-500', text: 'text-red-300' },
};

const ConnectionStatusIndicator = ({ status }: { status: 'healthy' | 'warning' | 'critical' }) => (
  <div className={cn('w-2 h-2 rounded-full', statusConfig[status].bg)} />
);

export default function HealthGrid({ modules, filters }: { modules: ModuleHealth[], filters: any }) {

  const filteredAndSortedModules = modules
    .map(health => ({
      ...health,
      ...modulesMetadata.find(meta => meta.code === health.moduleCode)
    }))
    .filter(module => {
      const searchMatch = module.title?.toLowerCase().includes(filters.search.toLowerCase()) || module.moduleCode.toLowerCase().includes(filters.search.toLowerCase());
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
      return a.title?.localeCompare(b.title || '') || 0;
    });

  return (
    <div className="flex-1 pr-2">
        <AnimatePresence>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {filteredAndSortedModules.map(module => (
                    <motion.div layout key={module.moduleCode} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                        <Card className={cn(
                            "bg-card/50 purple-glow border-t-4",
                            statusConfig[module.status].ring.replace('ring-', 'border-')
                        )}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <span className="text-2xl">{module.emoji}</span>
                                        {module.title}
                                    </CardTitle>
                                    <span className={cn('font-bold text-sm', statusConfig[module.status].text)}>
                                        {module.status.toUpperCase()}
                                    </span>
                                </div>
                                <CardDescription>{module.category}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                        <span>Coerência</span>
                                        <span>{module.coherence.toFixed(0)}%</span>
                                    </div>
                                    <Progress value={module.coherence} className="h-2" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Conexões Críticas</h4>
                                    <div className="space-y-1 text-xs text-muted-foreground">
                                        {module.connections.map(conn => (
                                            <div key={conn.moduleCode} className="flex items-center justify-between">
                                                <span className="flex items-center gap-2">
                                                    <ConnectionStatusIndicator status={conn.status} />
                                                    {conn.moduleCode}
                                                </span>
                                                <span>{conn.latency}ms</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>
         {filteredAndSortedModules.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
                <p>Nenhum módulo corresponde aos filtros selecionados.</p>
            </div>
        )}
    </div>
  );
}
