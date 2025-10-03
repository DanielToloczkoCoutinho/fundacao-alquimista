// src/hooks/useNetworkStatus.ts
'use client';
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Listener do navegador para status online/offline geral
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Listener específico do Firestore para conectividade com o backend
    // Usamos um documento de metadados que não existe para acionar o listener
    // A lógica é que, se o snapshot falhar, estamos offline para o Firestore
    const unsubscribe = onSnapshot(
      doc(db, 'internal_metadata', 'network_check'),
      () => {
        // Sucesso no snapshot, estamos online
        setIsOnline(true);
      },
      (error) => {
        // Erro no snapshot, provavelmente offline
        console.warn('Falha no listener de rede do Firestore, assumindo modo offline.', error.code);
        setIsOnline(false);
      }
    );

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      unsubscribe();
    };
  }, []);

  return isOnline;
};
