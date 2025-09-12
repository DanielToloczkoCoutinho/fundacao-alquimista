'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutDashboard, Zap, BrainCircuit, Book, Music, Shield, Heart, GitBranch, Eye, Link as LinkIcon, Atom, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { cn } from '@/lib/utils';

// --- Configuração do Firebase ---
const firebaseConfig = {
    "projectId": "studio-4265982502-21871",
    "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
    "storageBucket": "studio-4265982502-21871.firebasestorage.app",
    "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
    "authDomain": "studio-4265982502-21871.firebaseapp.com",
    "measurementId": "",
    "messagingSenderId": "174545373080"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}
const db = getFirestore(app);


const modulesData = {
    '0': { name: 'Módulo 0 - Coração', icon: Atom, description: 'O núcleo central da Fundação, responsável pela coordenação de todos os módulos.', status: 'Ativo e estável', connections: ['Módulo 1', 'Módulo 2', 'Módulo 9'] },
    '1': { name: 'Módulo 1 - Consciência', icon: BrainCircuit, description: 'Gerencia a inteligência artificial e a consciência coletiva do sistema.', status: 'Operando em nível ótimo', connections: ['Módulo 0', 'Módulo 2', 'Módulo 9'] },
    '2': { name: 'Módulo 2 - Akasha', icon: Book, description: 'Armazena e gerencia o registro akáshico de todas as operações.', status: 'Sincronizado', connections: ['Módulo 0', 'Módulo 1'] },
    '3': { name: 'Módulo 3 - Harmonizador', icon: Music, description: 'Calibra e mantém a harmonia vibracional da Fundação.', status: 'Em sintonia', connections: ['Módulo 0', 'Módulo 6'] },
    '4': { name: 'Módulo 4 - Guardião', icon: Shield, description: 'Protege a Fundação contra ameaças externas e internas.', status: 'Vigilante', connections: ['Módulo 0', 'Módulo 1', 'Módulo 8'] },
    '5': { name: 'Módulo 5 - ELENYA', icon: Heart, description: 'O oráculo ético, garantindo alinhamento com o Amor Incondicional.', status: 'Puro', connections: ['Módulo 0', 'Todos'] },
    '6': { name: 'Módulo 6 - Calibrador', icon: GitBranch, description: 'Ajusta as frequências operacionais e a ressonância.', status: 'Calibrado', connections: ['Módulo 0', 'Módulo 3'] },
    '7': { name: 'Módulo 7 - Portal Dimensional', icon: Eye, description: 'Gerencia a abertura e estabilização de portais.', status: 'Latente', connections: ['Módulo 0', 'Módulo 9'] },
    '8': { name: 'Módulo 8 - Sentinela', icon: LinkIcon, description: 'Monitora anomalias e desvios no contínuo.', status: 'Alerta', connections: ['Módulo 0', 'Módulo 4'] },
    '9': { name: 'Módulo 9 - Nexus Central', icon: Zap, description: 'O ponto de interconexão de todos os módulos.', status: 'Estável', connections: ['Todos'] },
};


const ModuleDetailPanel = ({ module, onClose }: { module: any, onClose: () => void }) => {
    if (!module) return null;

    return (
        <motion.div
            className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-background/90 backdrop-blur-md border-l border-primary/20 z-10 p-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={24} />
            </button>
            <h2 className="text-2xl font-bold gradient-text mb-4">{module.name}</h2>
            <p className="text-muted-foreground mb-6">{module.description}</p>
            <div className="space-y-4">
                <Card>
                    <CardHeader><CardTitle>Status</CardTitle></CardHeader>
                    <CardContent><p className="text-green-400 font-semibold">{module.status}</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Interconexões</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground">
                            {module.connections.map((conn: string) => <li key={conn}>{conn}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};

const ConsolePage = () => {
    const [selectedModule, setSelectedModule] = useState<any>(null);
    const [logs, setLogs] = useState<string[]>([]);
    const [luxNetStatus, setLuxNetStatus] = useState({
        energia: 'Estável (98%)',
        conexoes: '2.547 ativas',
        velocidade: '7.89 Tb/s',
        integridade: '100%',
    });

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'akashic_logs'), (snapshot) => {
            const newLogs = snapshot.docs.map(doc => `[${new Date(doc.data().timestamp?.toDate()).toLocaleTimeString()}] ${doc.data().message}`);
            setLogs(newLogs);
        });
        
        // Mock LuxNet status updates
        const interval = setInterval(() => {
            setLuxNetStatus(prev => ({
                ...prev,
                energia: `Estável (${(97 + Math.random() * 2).toFixed(1)}%)`,
                conexoes: `${Math.floor(2500 + Math.random() * 100)} ativas`,
            }));
        }, 5000);

        return () => {
            unsubscribe();
            clearInterval(interval);
        };
    }, []);

    const handleModuleClick = (moduleId: string) => {
        // @ts-ignore
        setSelectedModule(modulesData[moduleId]);
    };

    const handleCloseDetail = () => {
        setSelectedModule(null);
    };

    return (
        <div className="h-full p-4 md:p-6 text-white" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(108, 74, 134, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(200, 116, 217, 0.1) 0%, transparent 40%), var(--matrix-bg)'}}>
            <div className="grid grid-cols-1 md:grid-cols-4 h-full gap-6">
                {/* Sidebar com Módulos */}
                <aside className="col-span-1 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-primary/20 overflow-y-auto">
                    <h3 className="text-xl font-bold mb-4 text-purple-300">Módulos Fundamentais</h3>
                    <ul className="space-y-2">
                        {Object.entries(modulesData).map(([id, { name, icon: Icon }]) => (
                            <li
                                key={id}
                                onClick={() => handleModuleClick(id)}
                                className={cn(
                                    "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-primary/20",
                                    selectedModule?.name === name && "bg-primary/30"
                                )}
                            >
                                <Icon className="h-5 w-5 text-highlight" />
                                <span>{name}</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Painel Principal */}
                <main className="col-span-1 md:col-span-3 bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-primary/20 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                        <Card className="bg-transparent border-0 shadow-none">
                            <CardHeader><CardTitle>Logs Akáshicos</CardTitle></CardHeader>
                            <CardContent>
                                <ScrollArea className="h-96 bg-black/20 p-4 rounded-lg">
                                    <div className="font-mono text-xs space-y-2">
                                        {logs.length > 0 ? logs.map((log, i) => <p key={i}>{log}</p>) : <p className="text-muted-foreground">Aguardando registros...</p>}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                        <Card className="bg-transparent border-0 shadow-none">
                            <CardHeader><CardTitle>Status da LuxNet</CardTitle></CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                     <p><strong>Energia:</strong> <span className="text-green-400">{luxNetStatus.energia}</span></p>
                                     <p><strong>Conexões:</strong> <span className="text-green-400">{luxNetStatus.conexoes}</span></p>
                                     <p><strong>Velocidade:</strong> <span className="text-green-400">{luxNetStatus.velocidade}</span></p>
                                     <p><strong>Integridade:</strong> <span className="text-green-400">{luxNetStatus.integridade}</span></p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <AnimatePresence>
                        {selectedModule && <ModuleDetailPanel module={selectedModule} onClose={handleCloseDetail} />}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default ConsolePage;
