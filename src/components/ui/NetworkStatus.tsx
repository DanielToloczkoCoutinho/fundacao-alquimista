// src/components/ui/NetworkStatus.tsx
'use client';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { WifiOff } from 'lucide-react';

export const NetworkStatus = () => {
  const isOnline = useNetworkStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-white shadow-lg">
      <WifiOff className="h-5 w-5" />
      <div>
        <p className="font-bold">Conexão Instável</p>
        <p className="text-sm">Operando em modo offline. Seus dados serão sincronizados.</p>
      </div>
    </div>
  );
};
