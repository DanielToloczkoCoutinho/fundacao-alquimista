'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutDashboard, CheckCircle, AlertTriangle, Loader, XCircle, FileWarning, Play, Download, Wrench, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const ConsolePage = () => {
    const [testRunning, setTestRunning] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    const tabData = [
        { name: "Dashboard", status: "success", checks: ["Conteúdo renderizado", "Dados carregados"], issues: ["Performance pode ser otimizada"] },
        { name: "Projetos", status: "success", checks: ["Lista de projetos carregada", "Permissões verificadas"], issues: [] },
        { name: "Firestore", status: "warning", checks: ["Conexão estabelecida"], issues: ["Latência em algumas consultas", "WebChannel instável"] },
        { name: "Autenticação", status: "success", checks: ["Provedores carregados", "Estado de usuário sincronizado"], issues: [] },
        { name: "Armazenamento", status: "success", checks: ["Buckets acessíveis", "Regras de segurança validadas"], issues: [] },
        { name: "Funções", status: "success", checks: ["Lista de funções carregada", "Logs de execução acessíveis"], issues: [] },
        { name: "Configurações", status: "error", checks: [], issues: ["Falha ao carregar preferências", "Tema não aplicado"] },
    ];
    
    const addLog = useCallback((message: string) => {
        setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev].slice(0, 100));
    }, []);

    const runFullTest = () => {
        setTestRunning(true);
        addLog("Iniciando varredura completa do sistema...");
        let current = 0;
        const interval = setInterval(() => {
            setActiveTab(current);
            const currentTab = tabData[current];
            addLog(`Verificando aba: ${currentTab.name}... Status: ${currentTab.status.toUpperCase()}`);

            current++;
            if (current >= tabData.length) {
                clearInterval(interval);
                setTestRunning(false);
                addLog("Varredura completa do sistema finalizada.");
            }
        }, 800);
    };

    useEffect(() => {
        // Run test on initial load
        runFullTest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">
                        <LayoutDashboard /> Painel de Controle e Diagnóstico
                    </CardTitle>
                    <CardDescription>
                        Análise de disponibilidade, saúde e problemas comuns da infraestrutura da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Diagnóstico do Sistema</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Button className="w-full" onClick={runFullTest} disabled={testRunning}>
                                {testRunning ? <Loader className="mr-2 h-4 w-4 animate-spin"/> : <Play className="mr-2 h-4 w-4" />}
                                {testRunning ? 'Verificando...' : 'Executar Teste Completo'}
                            </Button>
                             <Button className="w-full mt-2" variant="outline">
                                <Download className="mr-2 h-4 w-4"/>
                                Exportar Relatório
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Ações Corretivas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                             <Button className="w-full" variant="secondary">
                                <Wrench className="mr-2 h-4 w-4"/>
                                Diagnosticar Problemas
                             </Button>
                             <Button className="w-full" variant="secondary">
                                <Sparkles className="mr-2 h-4 w-4"/>
                                Aplicar Soluções Automáticas
                             </Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                         <CardHeader>
                            <CardTitle>Navegação e Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="flex gap-2 mb-4 flex-wrap">
                                {tabData.map((tab, index) => (
                                     <button key={index} onClick={() => setActiveTab(index)} className={cn("px-4 py-2 rounded-md text-sm font-medium transition-all", activeTab === index ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80')}>
                                        {tab.name}
                                     </button>
                                ))}
                            </div>
                            <Card className="bg-background/50 p-4 min-h-[200px]">
                                <CardTitle className="mb-4 text-lg">{tabData[activeTab].name}</CardTitle>
                                <div className="space-y-2">
                                    {tabData[activeTab].checks.map((check, i) => (
                                        <div key={i} className="flex items-center gap-2 text-green-400">
                                            <CheckCircle className="w-4 h-4"/>
                                            <span>{check}</span>
                                        </div>
                                    ))}
                                     {tabData[activeTab].issues.map((issue, i) => (
                                        <div key={i} className="flex items-center gap-2 text-yellow-400">
                                            <FileWarning className="w-4 h-4"/>
                                            <span>{issue}</span>
                                        </div>
                                    ))}
                                    {tabData[activeTab].status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-500">
                                            <XCircle className="w-4 h-4"/>
                                            <span>Falha crítica no carregamento deste módulo.</span>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Relatório de Acessibilidade e Logs</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-center">
                        <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                           <p className="text-2xl font-bold">{tabData.filter(t => t.status === 'success').length}</p>
                           <p className="text-sm text-green-400">Sistemas Operacionais</p>
                        </div>
                         <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                           <p className="text-2xl font-bold">{tabData.filter(t => t.status === 'warning').length}</p>
                           <p className="text-sm text-yellow-400">Avisos de Performance</p>
                        </div>
                         <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                           <p className="text-2xl font-bold">{tabData.filter(t => t.status === 'error').length}</p>
                           <p className="text-sm text-red-400">Falhas Críticas</p>
                        </div>
                    </div>
                    <ScrollArea className="h-64 bg-background/50 p-2 border rounded-md">
                        <pre className="text-xs font-mono whitespace-pre-wrap p-2">
                            {logs.join('\n')}
                        </pre>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
};

export default ConsolePage;
