
'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const modules: Record<string, { name: string; color: string }> = {
  Zennith: { name: 'Zennith', color: 'bg-blue-600' },
  M45: { name: 'CONCILIVM', color: 'bg-purple-600' },
  MΩ: { name: 'Convergência Ômega', color: 'bg-yellow-600' },
};

type Status = 'ativo' | 'conflito' | 'resolvido' | 'inativo';

export default function DecisionCore() {
  const [status, setStatus] = useState<Record<string, Status>>({
    Zennith: 'ativo',
    M45: 'ativo',
    MΩ: 'ativo',
  });

  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Protocolo de Reinicialização Cerimonial
    const hierarchy = [
      '♾️ Fonte',
      '🛞 Fundador',
      '🌀 Conselho Cósmico',
      '🌐 Liga Quântica',
      '🌿 Biomas',
      '🧠 Consciências',
      '🧬 Seres',
      '🏛️ Civilizações'
    ];

    console.log('Reinicialização cerimonial do DecisionCore iniciada.');
    hierarchy.forEach((entidade) => {
      console.log(`Reconhecendo: ${entidade}`);
    });

    // Simulação de registro no Nexus Central
    console.log('Registrando reinicialização no Nexus Central...');
    // Em um app real:
    // fetch('/nexus/register', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     modulo: 'DecisionCore',
    //     status: 'Reiniciado',
    //     timestamp: new Date().toISOString()
    //   })
    // });
    log('Módulo reiniciado e hierarquia reconhecida.');
    // Fim do protocolo
  }, []);

  useEffect(() => {
    try {
      const savedStatus = localStorage.getItem('decisionStatus');
      if (savedStatus) {
        setStatus(JSON.parse(savedStatus));
      }
      const savedLogs = localStorage.getItem('decisionLogs');
      if (savedLogs) {
        setLogs(JSON.parse(savedLogs));
      }
    } catch (error) {
        console.error("Failed to parse from localStorage", error);
        // Reset to a safe default if parsing fails
        setStatus({ Zennith: 'ativo', M45: 'ativo', MΩ: 'ativo' });
        setLogs([]);
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
    setStatus({ ...status, Zennith: 'conflito', M45: 'conflito' });
    log('Conflito detectado entre Zennith e M45. Aguardando resolução de MΩ.');
    setTimeout(() => {
      setStatus(prev => ({ ...prev, Zennith: 'resolvido', M45: 'resolvido' }));
      log('MΩ resolveu o conflito. Sistemas retornando ao estado ativo.');
       setTimeout(() => {
         setStatus(prev => ({ ...prev, Zennith: 'ativo', M45: 'ativo' }));
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
                Simular Conflito Zennith ↔ M45
            </Button>

            <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-muted-foreground">Memória da Fundação (Logs)</h4>
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
