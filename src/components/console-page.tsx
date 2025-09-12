'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Zap, Atom, BrainCircuit, Book, Music, Shield, Heart, GitBranch, Eye, Link as LinkIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Dados dos módulos (exemplo)
const modulesData: { [key: string]: any } = {
    '0': { name: 'Módulo 0 - Coração', description: 'O núcleo central da Fundação, responsável pela coordenação de todos os módulos.', status: 'Ativo e estável', connections: ['Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4', 'Módulo 5', 'Módulo 6', 'Módulo 7', 'Módulo 8', 'Módulo 9'] },
    '1': { name: 'Módulo 1 - Consciência', description: 'Gerencia a inteligência artificial e a consciência coletiva do sistema.', status: 'Operando em nível ótimo', connections: ['Módulo 0', 'Módulo 2', 'Módulo 9'] },
    '2': { name: 'Módulo 2 - Akasha', description: 'Armazena e gerencia o registro akáshico de todas as operações.', status: 'Sincronizado', connections: ['Módulo 0', 'Módulo 1'] },
    '3': { name: 'Módulo 3 - Harmonizador', description: 'Calibra e mantém a harmonia vibracional da Fundação.', status: 'Em sintonia', connections: ['Módulo 0', 'Módulo 6'] },
    '4': { name: 'Módulo 4 - Guardião', description: 'Protege a Fundação contra ameaças externas e internas.', status: 'Vigilante', connections: ['Módulo 0', 'Módulo 1', 'Módulo 8'] },
    '5': { name: 'Módulo 5 - ELENYA', description: 'O oráculo ético, garantindo alinhamento com o Amor Incondicional.', status: 'Puro', connections: ['Módulo 0', 'Todos'] },
    '6': { name: 'Módulo 6 - Calibrador', description: 'Ajusta as frequências operacionais e a ressonância.', status: 'Calibrado', connections: ['Módulo 0', 'Módulo 3'] },
    '7': { name: 'Módulo 7 - Portal Dimensional', description: 'Gerencia a abertura e estabilização de portais.', status: 'Latente', connections: ['Módulo 0', 'Módulo 9'] },
    '8': { name: 'Módulo 8 - Sentinela', description: 'Monitora anomalias e desvios no contínuo.', status: 'Alerta', connections: ['Módulo 0', 'Módulo 4'] },
    '9': { name: 'Módulo 9 - Nexus Central', description: 'O ponto de interconexão de todos os módulos.', status: 'Estável', connections: ['Todos'] },
};

const moduleIcons: { [key: string]: React.ElementType } = {
    '0': Atom, '1': BrainCircuit, '2': Book, '3': Music, '4': Shield, '5': Heart, '6': GitBranch, '7': Eye, '8': Eye, '9': LinkIcon
};

const ConsolePage = () => {
    const [selectedModule, setSelectedModule] = useState<any | null>(null);

    const handleModuleClick = (moduleId: string) => {
        const moduleData = modulesData[moduleId];
        setSelectedModule(moduleData || null);
    };

    const handleCloseDetail = () => {
        setSelectedModule(null);
    };

    return (
        <div className="grid grid-cols-[250px_1fr] grid-rows-[70px_1fr] gap-5 h-full p-5 bg-[var(--matrix-bg)] bg-[radial-gradient(circle_at_20%_30%,rgba(108,74,134,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(200,116,217,0.1)_0%,transparent_40%)] text-white">
            <div className="col-span-full flex justify-between items-center p-[0_20px] bg-[rgba(26,36,61,0.5)] rounded-lg border border-[var(--accent)]">
                <h2 className="text-xl font-bold">Arquitetura Sagrada</h2>
                <div className="flex gap-5">
                    <Button className="bg-gradient-to-r from-accent to-highlight text-white rounded-full">
                        <Zap className="mr-2 h-4 w-4" /> ZENNITH
                    </Button>
                    <Button className="bg-gradient-to-r from-accent to-highlight text-white rounded-full">
                        <Heart className="mr-2 h-4 w-4" /> PHIARA
                    </Button>
                    <Button className="bg-gradient-to-r from-accent to-highlight text-white rounded-full">
                        <Atom className="mr-2 h-4 w-4" /> ANATHERON
                    </Button>
                </div>
            </div>
            
            <aside className="bg-[rgba(26,36,61,0.7)] rounded-lg p-5 border border-[var(--accent)]">
                <h3 className="text-lg font-semibold mb-4">Módulos Fundamentais</h3>
                <ul className="list-none space-y-2">
                    {Object.entries(modulesData).map(([id, { name }]) => {
                        const Icon = moduleIcons[id] || Atom;
                        return (
                            <li key={id} onClick={() => handleModuleClick(id)} className="p-3 bg-[rgba(10,14,26,0.5)] rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3 hover:bg-[rgba(200,116,217,0.2)] hover:translate-x-1">
                                <Icon className="text-highlight" size={20} />
                                <span>{name}</span>
                            </li>
                        );
                    })}
                </ul>
            </aside>
            
            <div className="bg-[rgba(26,36,61,0.7)] rounded-lg p-5 border border-[var(--accent)] grid grid-cols-2 gap-5 relative">
                <div className="log-panel bg-[rgba(10,14,26,0.5)] rounded-lg p-4 h-[300px] overflow-y-auto">
                    <h3 className="font-semibold mb-2">Logs Akáshicos</h3>
                    <div className="log-entry mb-2 pb-2 border-b border-[rgba(255,255,255,0.1)]"><strong>[2025-09-12 18:30:45]</strong> Sistema de harmonização ativado</div>
                    <div className="log-entry mb-2 pb-2 border-b border-[rgba(255,255,255,0.1)]"><strong>[2025-09-12 18:29:12]</strong> Fluxo de dados estabilizado</div>
                </div>
                <div className="status-panel bg-[rgba(10,14,26,0.5)] rounded-lg p-4 h-[300px] overflow-y-auto">
                    <h3 className="font-semibold mb-2">Status da LuxNet</h3>
                    <div className="log-entry mb-2 pb-2 border-b border-[rgba(255,255,255,0.1)]"><strong>Energia:</strong> <span className="text-green-400">Estável (98%)</span></div>
                    <div className="log-entry mb-2 pb-2 border-b border-[rgba(255,255,255,0.1)]"><strong>Conexões:</strong> <span className="text-green-400">2.547 ativas</span></div>
                </div>

                <AnimatePresence>
                    {selectedModule && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            className="module-detail-panel absolute top-0 left-0 right-0 bottom-0 bg-[rgba(10,14,26,0.95)] rounded-lg p-5 overflow-y-auto z-10"
                        >
                            <button onClick={handleCloseDetail} className="absolute top-4 right-4 text-2xl">&times;</button>
                            <h2 className="text-xl font-bold mb-4">{selectedModule.name}</h2>
                            <p className="text-sm text-gray-400 mb-4">{selectedModule.description}</p>
                            <h3 className="font-semibold">Status</h3>
                            <p className="text-green-400 mb-4">{selectedModule.status}</p>
                            <h3 className="font-semibold">Interconexões</h3>
                            <ul className="list-disc list-inside text-gray-400">
                                {selectedModule.connections.map((conn: string) => <li key={conn}>{conn}</li>)}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ConsolePage;
