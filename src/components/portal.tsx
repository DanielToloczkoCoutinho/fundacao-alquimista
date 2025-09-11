'use client';

import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { createLogContext } from '@/lib/quantum-resilience'; 

// Criamos um contexto de log específico para este portal
const logContext = createLogContext('portal-session', 2);

export function Portal() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);

  const initializePortal = async () => {
    logContext.info('Inicializando Portal Transdimensional (WebRTC)...');

    const pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });
    setPeerConnection(pc);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      stream.getTracks().forEach(track => pc.addTrack(track, stream));
      logContext.info('Acesso à câmera e microfone concedido.');
      setIsConnected(true);
    } catch (err: any) {
      logContext.warn('Permissão para mídia negada.', { error: err.message });
      toast({
        variant: 'destructive',
        title: 'Permissão de Mídia Negada',
        description: 'Verifique as permissões de câmera/microfone no seu navegador.',
      });
      setIsConnected(false);
    }

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        logContext.info('Candidato ICE gerado.', { candidate: event.candidate.candidate });
      }
    };
    
    pc.onconnectionstatechange = () => {
        if(pc.connectionState === 'disconnected' || pc.connectionState === 'closed') {
            setIsConnected(false);
            logContext.warn('Portal desconectado.');
        }
    }
  };
  
  const createOffer = async () => {
    if (!peerConnection) {
        logContext.warn('Tentativa de criar oferta sem uma conexão de peer estabelecida.');
        return;
    }
    
    logContext.info('Criando oferta de conexão...');
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    
    logContext.info('Oferta criada. Pronta para ser enviada pelo servidor de sinalização.', { sdp: offer.sdp?.substring(0, 50) + '...' });
  };
  
   const handleOpenPortal = () => {
    if (!isConnected) {
        initializePortal();
    }
  };


  useEffect(() => {
    return () => {
      if (peerConnection) {
        peerConnection.close();
      }
      if (localVideoRef.current?.srcObject) {
        (localVideoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
      logContext.info('Fechando Portal Transdimensional.');
    };
  }, [peerConnection]);

  return (
    <div className="space-y-4 p-4 rounded-lg bg-background/50 border border-primary/30">
      <h3 className="font-semibold text-primary">Portal Transdimensional Ativo</h3>
      <div className="text-sm text-muted-foreground">
        {isConnected 
          ? "O canal de comunicação WebRTC está aberto. Sua imagem está sendo transmitida para o éter."
          : "O portal está aguardando para estabelecer uma conexão."
        }
      </div>
      <video ref={localVideoRef} autoPlay muted className="w-full rounded-lg border aspect-video bg-black" />
      <button
        onClick={isConnected ? createOffer : handleOpenPortal}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors disabled:bg-gray-600"
        disabled={!isConnected && peerConnection !== null}
      >
        {isConnected ? 'Criar Oferta de Conexão' : 'Abrir Conexão do Portal'}
      </button>
    </div>
  );
}
