'use client';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const modules: Record<string, { name: string; color: string }> = {
  M29: { name: 'IAM', color: 'bg-blue-600' },
  M45: { name: 'CONCILIVM', color: 'bg-purple-600' },
  MΩ: { name: 'Convergência Ômega', color: 'bg-yellow-600' },
};

type Status = 'ativo' | 'conflito' | 'resolvido' | 'inativo';

export default function DecisionCore() {
  const [status, setStatus] = useState<Record<string, Status>>({
    M29: 'inativo',
    M45: 'inativo',
    MΩ: 'inativo',
  });

  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    try {
      const savedStatus = localStorage.getItem('decisionStatus');
      if (savedStatus) {
        setStatus(JSON.parse(savedStatus));
      } else {
         setStatus({ M29: 'ativo', M45: 'ativo', MΩ: 'ativo' });
      }
      const savedLogs = localStorage.getItem('decisionLogs');
      if (savedLogs) {
        setLogs(JSON.parse(savedLogs));
      }
    } catch (error) {
        console.error("Failed to parse from localStorage", error);
        setStatus({ M29: 'ativo', M45: 'ativo', MΩ: 'ativo' });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('decisionStatus', JSON.stringify(status));
  }, [status]);

   useEffect(() => {
    localStorage.setItem('decisionLogs', JSON.stringify(logs));
  }, [logs]);

  const log = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev.slice(0, 100)]);
  };

  const simulateConflict = () => {
    setStatus({ ...status, M29: 'conflito', M45: 'conflito' });
    log('Conflito detectado entre M29 e M45. Aguardando resolução de MΩ.');
    setTimeout(() => {
      setStatus(prev => ({ ...prev, M29: 'resolvido', M45: 'resolvido' }));
      log('MΩ resolveu o conflito. Sistemas retornando ao estado ativo.');
       setTimeout(() => {
         setStatus(prev => ({ ...prev, M29: 'ativo', M45: 'ativo' }));
         log('Módulos normalizados.');
       }, 2000);
    }, 2000);
  };

  const setModuleStatus = (code: string, newStatus: Status) => {
    setStatus(prev => ({ ...prev, [code]: newStatus }));
    log(`Módulo ${code} definido para: ${newStatus}`);
  };

  return (
    <Card className="w-full bg-card/50 purple-glow">
        <CardHeader>
            <CardTitle className="text-2xl text-amber-300">Tríade Decisória</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {Object.entries(modules).map(([code, { name, color }]) => (
                <div
                    key={code}
                    className={`p-4 rounded-lg shadow-inner text-center transition-all duration-300 ${
                    status[code] === 'ativo' ? color : 
                    status[code] === 'conflito' ? 'bg-red-600 animate-pulse' : 
                    status[code] === 'resolvido' ? 'bg-green-600' : 'bg-gray-700 opacity-60'
                    }`}
                >
                    <h3 className="text-xl font-semibold">{code}</h3>
                    <p className="text-sm">{name}</p>
                    <p className="mt-2 text-xs italic capitalize">Status: {status[code]}</p>
                    <div className="mt-3 space-x-2">
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setModuleStatus(code, 'ativo')}
                            className="h-6 px-2 text-xs bg-black/20 hover:bg-green-700"
                        >
                            Ativar
                        </Button>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setModuleStatus(code, 'inativo')}
                            className="h-6 px-2 text-xs bg-black/20 hover:bg-red-700"
                        >
                            Desativar
                        </Button>
                    </div>
                </div>
                ))}
            </div>

            <Button
                onClick={simulateConflict}
                className="w-full mb-6 bg-yellow-700 hover:bg-yellow-600"
            >
                Simular Conflito M29 ↔ M45
            </Button>

            <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-muted-foreground">Logs de Decisão</h4>
                <ScrollArea className="h-48">
                    <ul className="text-sm space-y-1 font-mono">
                    {logs.map((entry, idx) => (
                        <li key={idx} className="text-foreground/80">{entry}</li>
                    ))}
                    </ul>
                </ScrollArea>
            </div>
        </CardContent>
    </Card>
  );
}
