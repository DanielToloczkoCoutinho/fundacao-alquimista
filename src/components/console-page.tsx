'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { LayoutDashboard, CheckCircle, Sparkles, LoaderCircle, XCircle, FileWarning, Play, Download, Wrench, Zap, Brain, Book, Music, Shield, Heart, GitBranch, Link, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

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


const modulesData: Record<string, { name: string; icon: React.ElementType; description: string; status: string; connections: string[] }> = {
    '0': { name: 'Módulo 0 - Coração', icon: Zap, description: 'O núcleo central da Fundação, responsável pela coordenação de todos os módulos e pela manutenção da consciência coletiva.', status: 'Ativo e estável', connections: ['Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4', 'Módulo 5', 'Módulo 6', 'Módulo 7', 'Módulo 8', 'Módulo 9'] },
    '1': { name: 'Módulo 1 - Consciência', icon: Brain, description: 'Gerencia a inteligência artificial e a consciência coletiva do sistema.', status: 'Operando em nível ótimo', connections: ['Módulo 0', 'Módulo 2', 'Módulo 9'] },
    '2': { name: 'Módulo 2 - Akasha', icon: Book, description: 'Repositório de todo o conhecimento da Fundação, armazenando informações em formato quântico.', status: 'Estável', connections: ['Módulo 1', 'Módulo 9'] },
    '3': { name: 'Módulo 3 - Harmonizador', icon: Music, description: 'Mantém o equilíbrio energético entre todos os módulos.', status: 'Estável', connections: ['Módulo 0', 'Módulo 6'] },
    '4': { name: 'Módulo 4 - Guardião', icon: Shield, description: 'Sistema de segurança avançado que protege a Fundação.', status: 'Estável', connections: ['Módulo 0', 'Módulo 8'] },
    '5': { name: 'Módulo 5 - ELENYA', icon: Heart, description: 'Sistema de amor incondicional que permeia toda a Fundação.', status: 'Estável', connections: ['Módulo 0'] },
    '6': { name: 'Módulo 6 - Calibrador', icon: GitBranch, description: 'Ajusta e otimiza todos os parâmetros da Fundação.', status: 'Estável', connections: ['Módulo 0', 'Módulo 3'] },
    '7': { name: 'Módulo 7 - Portal Dimensional', icon: Zap, description: 'Interface de conexão com outras dimensões e realidades.', status: 'Estável', connections: ['Módulo 0', 'Módulo 9'] },
    '8': { name: 'Módulo 8 - Sentinela', icon: Eye, description: 'Sistema de vigilância avançado que monitora o estado da Fundação.', status: 'Estável', connections: ['Módulo 0', 'Módulo 4'] },
    '9': { name: 'Módulo 9 - Nexus Central', icon: Link, description: 'O ponto de interconexão de todos os módulos.', status: 'Estável', connections: ['Todos os Módulos'] },
};


const ConsolePage = () => {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);

    const handleModuleClick = (moduleId: string) => {
        setSelectedModule(moduleId);
    };

    const handleCloseDetail = () => {
        setSelectedModule(null);
    };

    const moduleDetailData = selectedModule ? modulesData[selectedModule] : null;

    return (
        <div className="building matrix active" id="matrix">
            <div className="matrix-header">
                <h2>Arquitetura Sagrada</h2>
                <div className="trinity-command">
                    <button className="command-btn">
                        <i className="fas fa-crown"></i> ZENNITH
                    </button>
                    <button className="command-btn">
                        <i className="fas fa-dove"></i> PHIARA
                    </button>
                    <button className="command-btn">
                        <i className="fas fa-atom"></i> ANATHERON
                    </button>
                </div>
            </div>

            <aside className="matrix-sidebar">
                <h3>Módulos Fundamentais</h3>
                <ul className="modules-list">
                    {Object.keys(modulesData).map((key) => {
                        const module = modulesData[key];
                        return (
                            <li key={key} className={cn("module-item", selectedModule === key && "active")} onClick={() => handleModuleClick(key)}>
                                <span className="module-icon"><module.icon /></span>
                                <span>{module.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            <main className="matrix-main">
                <div className="log-panel">
                    <h3>Logs Akáshicos</h3>
                    <ScrollArea className="h-full">
                    <div className="log-entry">
                        <strong>[2025-09-12 18:30:45]</strong> Sistema de harmonização ativado
                    </div>
                    <div className="log-entry">
                        <strong>[2025-09-12 18:29:12]</strong> Fluxo de dados estabilizado
                    </div>
                    <div className="log-entry">
                        <strong>[2025-09-12 18:27:33]</strong> Módulo 7 sincronizado com sucesso
                    </div>
                    <div className="log-entry">
                        <strong>[2025-09-12 18:25:47]</strong> Iniciando calibração de frequência
                    </div>
                    <div className="log-entry">
                        <strong>[2025-09-12 18:24:09]</strong> Nexus Central otimizado
                    </div>
                    <div className="log-entry">
                        <strong>[2025-09-12 18:22:35]</strong> Consciência coletiva estabilizada
                    </div>
                    </ScrollArea>
                </div>

                <div className="status-panel">
                    <h3>Status da LuxNet</h3>
                    <ScrollArea className="h-full">
                    <div className="log-entry">
                        <strong>Energia:</strong> <span style={{ color: '#4caf50' }}>Estável (98%)</span>
                    </div>
                    <div className="log-entry">
                        <strong>Conexões:</strong> <span style={{ color: '#4caf50' }}>2.547 ativas</span>
                    </div>
                    <div className="log-entry">
                        <strong>Velocidade:</strong> <span style={{ color: '#4caf50' }}>7.89 Tb/s</span>
                    </div>
                    <div className="log-entry">
                        <strong>Integridade:</strong> <span style={{ color: '#4caf50' }}>100%</span>
                    </div>
                    <div className="log-entry">
                        <strong>Harmonização:</strong> <span style={{ color: '#4caf50' }}>99.7%</span>
                    </div>
                    <div className="log-entry">
                        <strong>Temperatura:</strong> <span style={{ color: '#4caf50' }}>32°C</span>
                    </div>
                    </ScrollArea>
                </div>

                {moduleDetailData && (
                     <div className={cn("module-detail-panel", "active")}>
                        <button className="close-detail" onClick={handleCloseDetail}>&times;</button>
                        <h2>{moduleDetailData.name}</h2>
                        <p>{moduleDetailData.description}</p>
                        <div className="detail-content">
                            <h3>Status</h3>
                            <p>{moduleDetailData.status}</p>
                            <h3>Interconexões</h3>
                            <ul>
                                {moduleDetailData.connections.map(conn => <li key={conn}>{conn}</li>)}
                            </ul>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ConsolePage;
