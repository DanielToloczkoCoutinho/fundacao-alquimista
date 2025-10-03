'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SystemState {
  modules: any[];
  vitals: any;
  status: string;
}

const SystemContext = createContext<SystemState | null>(null)

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [modules, setModules] = useState([])
  const [status, setStatus] = useState('inicializando...')
  const [vitals, setVitals] = useState({ coherence: '---', vibration: '---' })

  useEffect(() => {
    // Busca inicial de dados
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(data => {
        const moduleArray = Object.keys(data.energyStatus).map(k => ({id: k, status: data.energyStatus[k]}));
        setModules(moduleArray);
        setStatus('ativo');
      })
      .catch(err => {
        console.error("Falha ao buscar estado inicial do sistema:", err);
        setStatus('erro');
      });

    // Conexão WebSocket para atualizações em tempo real
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL || 'ws://localhost:4000');
    
    ws.onopen = () => {
        console.log("Canal vibracional conectado.");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'vitals') {
        setVitals({ coherence: data.coherence, vibration: data.vibration });
      }
      if (data.type === 'STATUS_UPDATE') {
        const updatedModules = Object.keys(data.payload).map(k => ({id: k, status: data.payload[k]}));
        setModules(updatedModules);
      }
    };
    
    ws.onclose = () => {
        console.log("Canal vibracional desconectado.");
        setStatus('desconectado');
    };

    ws.onerror = (err) => {
        console.error("Erro no canal vibracional:", err);
        setStatus('erro');
    };

    // Cleanup da conexão
    return () => {
        ws.close();
    };

  }, []);

  const value = { modules, vitals, status };

  return (
    <SystemContext.Provider value={value}>
      {children}
    </SystemContext.Provider>
  )
}

export const useSystem = () => {
    const context = useContext(SystemContext);
    if (!context) {
        throw new Error('useSystem deve ser usado dentro de um SystemProvider');
    }
    return context;
}
