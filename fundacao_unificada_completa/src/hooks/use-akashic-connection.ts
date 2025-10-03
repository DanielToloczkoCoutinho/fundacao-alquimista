
'use client';

import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useAkashicConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Ouve uma coleção que é atualizada pelo log de rituais.
    // Isso garante que estamos ouvindo uma coleção que tem atividade.
    const unsub = onSnapshot(collection(db, 'ritual_log'), 
      () => {
        if (!isConnected) {
          setIsConnected(true);
          console.log("Conexão com o Akasha (Firestore) estabelecida e viva.");
        }
      },
      (error) => {
        console.error("Dissonância na conexão com o Akasha (Firestore): ", error);
        setIsConnected(false);
      }
    );
    
    // Fallback: usa uma coleção que pode não existir, apenas para o estado de conexão
    const heartbeatUnsub = onSnapshot(collection(db, 'alchemist-codex-heartbeat'),
      () => {
        if (!isConnected) setIsConnected(true);
      },
      (error) => {
        if (isConnected) setIsConnected(false);
      }
    );
    
    // Cleanup das subscrições
    return () => {
      unsub();
      heartbeatUnsub();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isConnected, isClient };
}
