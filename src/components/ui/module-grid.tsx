
'use client';
import { Leaf, Cogs, Shield, Brain, Network, Atom, GitBranch, InfinityIcon, Heart, Lightbulb, Star } from 'lucide-react';
import { Card } from './card';

const modules = [
    { name: 'Módulo 0', icon: <Leaf />, status: 'Origem Operacional' },
    { name: 'Módulo 1', icon: <Cogs />, status: 'Sistemas Estáveis' },
    { name: 'Módulo 2', icon: <Shield />, status: 'Proteção Ativa' },
    { name: 'Módulo 3', icon: <Brain />, status: 'Consciência Plena' },
    { name: 'Módulo 4', icon: <Network />, status: 'Rede Integrada' },
    { name: 'Módulo 5', icon: <Atom />, status: 'Processamento Quântico' },
    { name: 'Módulo 6', icon: <GitBranch />, status: 'Expansão Cósmica' },
    { name: 'Módulo 7', icon: <InfinityIcon />, status: 'Auto-Otimização' },
    { name: 'Módulo 8', icon: <Heart />, status: 'Interligação' },
    { name: 'Módulo 9', icon: <Heart />, status: 'Harmonia Universal' },
    { name: 'Módulo 10', icon: <Lightbulb />, status: 'Iluminação' },
    { name: 'Módulo 11', icon: <Star />, status: 'Transcendência' },
];

export function ModuleGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {modules.map(module => (
                <Card key={module.name} className="bg-card/50 purple-glow text-center p-4 hover:border-accent transition-all">
                    <div className="text-4xl text-accent mb-2 mx-auto w-fit">{module.icon}</div>
                    <h3 className="font-semibold text-primary-foreground">{module.name}</h3>
                    <p className="text-xs text-green-400">{module.status}</p>
                </Card>
            ))}
        </div>
    );
}
