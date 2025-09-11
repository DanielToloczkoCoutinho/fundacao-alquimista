'use client';

import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/hooks/useStore';
import { createLogContext } from '@/lib/advanced-logger';
import { useToast } from '@/hooks/use-toast';

// Criamos um contexto de log específico para este portal
const logContext = createLogContext(undefined, 2);

export function Portal() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
  const { modules } = useStore();
  const currentModule = modules.find(m => m.active);
  const { toast } = useToast();

  useEffect(() => {
    logContext.info('Inicializando Portal Transdimensional (WebRTC)...');
    
    // Configuração do Peer Connection com servidores STUN do Google
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });
    setPeerConnection(pc);

    logContext.info('Solicitando acesso à câmera e microfone...');
    // Solicita acesso à câmera e microfone do Guardião
    const setupMedia = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
            }
            stream.getTracks().forEach(track => pc.addTrack(track, stream));
            logContext.info('Fluxo de mídia local anexado ao portal.');
        } catch (err: any) {
            logContext.error('Erro ao acessar mídia do dispositivo.', { error: err });
            toast({
                variant: 'destructive',
                title: 'Falha na Permissão de Mídia',
                description: 'Não foi possível acessar a câmera/microfone. Verifique as permissões do navegador.'
            })
        }
    };
    
    setupMedia();

    // Evento para lidar com candidatos ICE
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        // Em um sistema completo, este candidato seria enviado para o outro Guardião
        // através de um servidor de sinalização.
        logContext.info('Candidato ICE gerado e pronto para envio.', { candidate: event.candidate.candidate });
      }
    };

    // Cleanup ao desmontar o componente
    return () => {
      logContext.info('Fechando Portal Transdimensional.');
      pc.close();
    };
  }, [toast]);

  const createOffer = async () => {
    if (!peerConnection) {
        logContext.warn('Tentativa de criar oferta sem uma conexão de peer estabelecida.');
        return;
    }
    
    logContext.info('Criando oferta de conexão...', { module: currentModule });
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    
    // Em um sistema completo, a 'offer' seria enviada para o outro Guardião.
    logContext.info('Oferta criada. Pronta para ser enviada pelo servidor de sinalização.', { sdp: offer.sdp?.substring(0, 50) + '...' });
  };

  return (
    <div className="space-y-4 p-4 rounded-lg bg-background/50 border border-primary/30">
      <h3 className="font-semibold text-primary">Portal Transdimensional Ativo</h3>
      <p className="text-sm text-muted-foreground">O canal de comunicação WebRTC está aberto e aguardando conexão. Sua imagem está sendo transmitida para o éter.</p>
      <video ref={localVideoRef} autoPlay muted className="w-full rounded-lg border aspect-video bg-black" />
      <button onClick={createOffer} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors">
        Abrir Conexão do Portal
      </button>
    </div>
  );
}

    