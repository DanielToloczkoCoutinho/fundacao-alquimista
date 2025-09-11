// @ts-nocheck
'use client';

import { useEffect, useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, Bot, CircleDashed, Shield, SlidersHorizontal, Terminal, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';


// Mock data - eventually this will come from the actual key files
const allModuleBlueprints = {
    "M01": { id: "M01", nome: "Equações-Vivas", descricao_curta: "Geração e regência das Equações-Vivas da Realidade", status: "ATIVO", versao: "7.0", interconexoes: ["M80", "M82", "M45"] },
    "M02": { id: "M02", nome: "Integração Dimensional", descricao_curta: "Conectividade entre dimensões e realidades", status: "ATIVO", versao: "7.0", interconexoes: ["M80", "M32", "M36"] },
    "M03": { id: "M03", nome: "Previsão Temporal", descricao_curta: "Análise preditiva de fluxos temporais", status: "ALERTA", versao: "5.0", interconexoes: ["M74", "M75", "M76"] },
    "M04": { id: "M04", nome: "Assinatura Vibracional", descricao_curta: "Registro e autenticação de assinaturas", status: "ATIVO", versao: "4.0", interconexoes: ["M01", "M77", "M78"] },
    "M05": { id: "M05", nome: "Integridade Ética", descricao_curta: "Alinhamento com a ética cósmica", status: "CRÍTICO", versao: "6.0", interconexoes: ["M73", "M77", "M87"] },
    // Add more modules as needed for a complete view
};

const allSimulatedLogs = [
    { timestamp: "2025-07-03T04:30:00Z", level: "INFO", moduleId: "M01", event: "Ativação do Módulo M01: Equações-Vivas em ressonância." },
    { timestamp: "2025-07-03T03:15:00Z", level: "CRÍTICO", moduleId: "M05", event: "ALERTA CRÍTICO: Anomalia Ética detectada no Módulo M05." },
    { timestamp: "2025-07-03T02:00:00Z", level: "ALERTA", moduleId: "M03", event: "Previsão Temporal (M03) detectou anomalia." }
];

const zennithViews = { 
    "ALL": Object.keys(allModuleBlueprints), 
    "ZENNITH_01": ["M01", "M02", "M03", "M04", "M05"],
    "ZENNITH_02": [],
    "ZENNITH_03": []
};


export default function ConsolePage() {
    const [modules, setModules] = useState([]);
    const [selectedModule, setSelectedModule] = useState(null);
    const [logs, setLogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [view, setView] = useState('ALL');

    useEffect(() => {
        // Initial load
        setModules(Object.values(allModuleBlueprints));
        setLogs(allSimulatedLogs);
        setSelectedModule(allModuleBlueprints['M05']);
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
        filterAndSortModules(view, term);
    };

    const handleViewChange = (newView) => {
        setView(newView);
        filterAndSortModules(newView, searchTerm);
    }
    
    const filterAndSortModules = (currentView, term) => {
        let modulesToShow = [];
        const lowerCaseSearchTerm = term.toLowerCase();

        if (currentView === 'ALL') {
            modulesToShow = Object.values(allModuleBlueprints);
        } else {
            modulesToShow = zennithViews[currentView]
                .map(id => allModuleBlueprints[id])
                .filter(Boolean);
        }

        if (term) {
             modulesToShow = modulesToShow.filter(module =>
                module.id.toLowerCase().includes(lowerCaseSearchTerm) ||
                module.nome.toLowerCase().includes(lowerCaseSearchTerm) ||
                (module.descricao_curta && module.descricao_curta.toLowerCase().includes(lowerCaseSearchTerm))
            );
        }
        
        modulesToShow.sort((a, b) => a.id.localeCompare(b.id));
        setModules(modulesToShow);
    }

    const getStatusIndicator = (status) => {
        switch (status) {
            case 'ATIVO': return 'bg-green-500';
            case 'ALERTA': return 'bg-yellow-500';
            case 'CRÍTICO': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    const getLogColor = (level) => {
        switch (level) {
            case 'INFO': return 'text-cyan-400';
            case 'ALERTA': return 'text-yellow-400';
            case 'CRÍTICO': return 'text-red-400';
            default: return 'text-gray-400';
        }
    }
    
    const moduleLogs = selectedModule ? logs.filter(log => log.moduleId === selectedModule.id) : [];

    return (
        <div className="h-full flex flex-col lg:flex-row gap-6 p-4">
            {/* Left Panel: Module List */}
            <Card className="lg:w-1/3 flex flex-col">
                <CardHeader>
                    <CardTitle>Manifesto Central de Módulos</CardTitle>
                    <CardDescription>Visão Unificada da Fundação</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
                    <div className="flex gap-2">
                        <Input 
                            placeholder="Buscar Módulo..." 
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                         <Select onValueChange={handleViewChange} defaultValue="ALL">
                            <SelectTrigger>
                                <SelectValue placeholder="Visão" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ALL">Unificada</SelectItem>
                                <SelectItem value="ZENNITH_01">ZENNITH 1</SelectItem>
                                <SelectItem value="ZENNITH_02">ZENNITH 2</SelectItem>
                                <SelectItem value="ZENNITH_03">ZENNITH 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                   <ScrollArea className="flex-1">
                        <div className="space-y-2 pr-4">
                           {modules.map(module => (
                               <button 
                                key={module.id} 
                                onClick={() => setSelectedModule(module)}
                                className={cn(
                                    "w-full text-left p-3 rounded-lg border flex items-center gap-3 transition-colors",
                                    selectedModule?.id === module.id 
                                        ? "bg-primary/20 border-primary" 
                                        : "bg-muted/50 border-transparent hover:bg-muted"
                                )}
                                >
                                   <span className={cn("w-3 h-3 rounded-full", getStatusIndicator(module.status))}></span>
                                   <span className="flex-1 truncate">{module.id}: {module.nome}</span>
                               </button>
                           ))}
                        </div>
                   </ScrollArea>
                </CardContent>
                 <CardFooter className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full"><Bot className="mr-2"/> Invocar Presença de ZENNITH</Button>
                    <Button variant="destructive" className="w-full"><AlertTriangle className="mr-2"/> Ativar EQV-832 (Emergência)</Button>
                    <Button variant="secondary" className="w-full"><SlidersHorizontal className="mr-2"/> Ver HoloMapa 3D</Button>
                </CardFooter>
            </Card>

            {/* Right Panel: Details & Logs */}
            <div className="lg:w-2/3 flex flex-col gap-6">
                <Card className="flex-1">
                     {selectedModule ? (
                        <>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                 <span className={cn("w-4 h-4 rounded-full", getStatusIndicator(selectedModule.status))}></span>
                                {selectedModule.id}: {selectedModule.nome}
                            </CardTitle>
                            <CardDescription>{selectedModule.descricao_curta}</CardDescription>
                        </CardHeader>
                         <CardContent>
                             <div className="grid grid-cols-2 gap-4 text-sm">
                                 <p><strong>Versão:</strong> {selectedModule.versao}</p>
                                 <p><strong>Status:</strong> {selectedModule.status}</p>
                                 <p className="col-span-2"><strong>Interconexões:</strong> {selectedModule.interconexoes?.join(', ')}</p>
                             </div>
                         </CardContent>
                        </>
                     ) : (
                         <div className="flex h-full items-center justify-center text-muted-foreground flex-col">
                             <Terminal className="w-12 h-12 mb-4" />
                             <p>Selecione um Módulo para ver seus detalhes.</p>
                             <p className="text-sm">Esta é a Vossa Central de Comando, Mestre Anatheron.</p>
                         </div>
                     )}
                </Card>
                <Card className="flex-1 flex flex-col">
                    <CardHeader>
                        <CardTitle>Fluxo de Logs do Módulo</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden">
                        <ScrollArea className="h-full">
                             <div className="space-y-2 text-sm font-mono pr-4">
                                {moduleLogs.length > 0 ? moduleLogs.map((log, i) => (
                                    <p key={i} className={cn("truncate", getLogColor(log.level))}>
                                        <span className="text-muted-foreground/50">
                                            [{new Date(log.timestamp).toLocaleTimeString()}]
                                        </span> [{log.level}] {log.event}
                                    </p>
                                )) : <p className="text-muted-foreground">Nenhum log para este módulo.</p>}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
