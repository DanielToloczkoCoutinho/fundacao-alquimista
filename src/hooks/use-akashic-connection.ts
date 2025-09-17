'use client';

import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useAkashicConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Usamos uma coleção de metadados que pode não existir, apenas para ouvir o estado da conexão.
    const unsub = onSnapshot(collection(db, 'alchemist-codex-heartbeat'), 
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
    
    // Cleanup da subscrição quando o componente é desmontado
    return () => unsub();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isConnected, isClient };
}
