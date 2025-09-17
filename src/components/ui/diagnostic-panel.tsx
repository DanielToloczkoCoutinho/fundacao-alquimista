'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { modulesMetadata, ModuleMetadata } from '@/lib/modules-metadata';
import { cn } from '@/lib/utils';
import { useSystem } from '@/context/SystemContext';
import { Badge } from './badge';
import SuspenseFallback from './suspense-fallback';

type ModuleState = {
  id: string;
  status: 'ativo' | 'inativo' | 'aguardando_aprovacao';
};

const getModuleStatus = (systemModules: ModuleState[], code: string) => {
    const mod = systemModules.find(m => m.id === code);
    if (!mod) return { text: 'DESCONHECIDO', color: 'bg-gray-500', pulse: false };

    switch (mod.status) {
        case 'ativo':
            return { text: 'ATIVO', color: 'bg-green-500', pulse: true };
        case 'inativo':
            return { text: 'INATIVO', color: 'bg-red-500', pulse: false };
        case 'aguardando_aprovacao':
            return { text: 'AGUARDANDO', color: 'bg-yellow-500', pulse: true };
        default:
            return { text: 'DESCONHECIDO', color: 'bg-gray-500', pulse: false };
    }
};

const ModuleCard = ({ module, status }: { module: ModuleMetadata; status: ReturnType<typeof getModuleStatus> }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-card/50 purple-glow p-4 rounded-lg border border-primary/20"
    >
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary-foreground flex items-center gap-2">
                <span className="text-2xl">{module.emoji}</span>
                {module.title}
            </h3>
            <div className="flex items-center gap-2 text-xs font-bold">
                 <div className={cn("w-2.5 h-2.5 rounded-full", status.color, status.pulse && "animate-pulse")}></div>
                 <span className={cn(status.color.replace('bg-', 'text-'))}>{status.text}</span>
            </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{module.description}</p>
        <div className="mt-4 flex justify-between items-center">
            <Badge variant="outline">{module.code}</Badge>
            <Badge variant="secondary">{module.category}</Badge>
        </div>
    </motion.div>
);

export default function DiagnosticPanel() {
    const system = useSystem();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredModules, setFilteredModules] = useState<ModuleMetadata[]>(modulesMetadata);

    useEffect(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const result = modulesMetadata.filter(
            (m) =>
                m.title.toLowerCase().includes(lowercasedTerm) ||
                m.description.toLowerCase().includes(lowercasedTerm) ||
                m.code.toLowerCase().includes(lowercasedTerm) ||
                m.category.toLowerCase().includes(lowercasedTerm)
        );
        setFilteredModules(result);
    }, [searchTerm]);

    if (!system) {
        return <SuspenseFallback />;
    }

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Filtrar módulos por nome, código ou categoria..."
                    className="w-full pl-10 bg-background/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            <AnimatePresence>
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredModules.map((module) => {
                        const status = getModuleStatus(system.modules, module.code);
                        return <ModuleCard key={module.code} module={module} status={status} />;
                    })}
                </motion.div>
            </AnimatePresence>

            {filteredModules.length === 0 && (
                <div className="text-center py-16 text-muted-foreground">
                    <p>Nenhum módulo encontrado com os filtros atuais.</p>
                </div>
            )}
        </div>
    );
}
