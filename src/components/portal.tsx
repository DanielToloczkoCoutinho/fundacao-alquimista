'use client';

import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { createLogContext } from '@/lib/quantum-resilience';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Circle, LoaderCircle, Phone, PhoneOff, Power, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

// Criamos um contexto de log específico para este portal
const logContext = createLogContext('portal-session', 2);

const connectedGuardians = [
  { id: 'sirius', name: 'Guardião de Sirius', status: 'Online' },
  { id: 'pleiades', name: 'Conselho Pleiadiano', status: 'Online' },
  { id: 'andromeda', name: 'Aliança de Andrômeda', status: 'Ocupado' },
  { id: 'lyra', name: 'Anciões de Lyra', status: 'Offline' },
];

type ConnectionStatus = 'DISCONNECTED' | 'INITIALIZING' | 'STANDBY' | 'CONNECTING' | 'CONNECTED' | 'FAILED';

export function Portal() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
  const { toast } = useToast();
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('DISCONNECTED');
  const [connectedTo, setConnectedTo] = useState<string | null>(null);

  const initializeTransmitter = async () => {
    setConnectionStatus('INITIALIZING');
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
      logContext.info('Acesso à câmera e microfone concedido. Transmissor em standby.');
      setConnectionStatus('STANDBY');
      toast({ title: 'Transmissor Ativo', description: 'Canal de vídeo local estabelecido e pronto.' });
    } catch (err: any) {
      logContext.warn('Permissão para mídia negada.', { error: err.message });
      toast({
        variant: 'destructive',
        title: 'Permissão de Mídia Negada',
        description: 'Verifique as permissões de câmera/microfone no seu navegador.',
      });
      setConnectionStatus('FAILED');
    }

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        logContext.info('Candidato ICE gerado.', { candidate: event.candidate.candidate });
      }
    };
    
    pc.onconnectionstatechange = () => {
        logContext.info('Estado da conexão alterado:', { state: pc.connectionState });
        if (pc.connectionState === 'connected') {
            setConnectionStatus('CONNECTED');
        }
        if(pc.connectionState === 'disconnected' || pc.connectionState === 'closed' || pc.connectionState === 'failed') {
            setConnectionStatus('STANDBY');
            setConnectedTo(null);
            logContext.warn('Portal desconectado do peer.');
        }
    }
  };
  
  const createOffer = async (guardianId: string) => {
    if (!peerConnection) {
        logContext.warn('Tentativa de criar oferta sem uma conexão de peer estabelecida.');
        return;
    }
    setConnectionStatus('CONNECTING');
    setConnectedTo(guardianId);
    logContext.info(`Criando oferta de conexão para ${guardianId}...`);
    toast({ title: `Conectando a ${guardianId}...`, description: 'Enviando pulso de sinalização.' });

    // Simulação de conexão
    setTimeout(async () => {
        try {
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);
            
            logContext.info(`Oferta criada para ${guardianId}. Aguardando resposta...`, { sdp: offer.sdp?.substring(0, 50) + '...' });
            
            // Simular resposta e conexão bem-sucedida
            setTimeout(() => {
                 setConnectionStatus('CONNECTED');
                 toast({ title: 'Conectado!', description: `Canal seguro estabelecido com ${guardianId}.` });
            }, 1500);

        } catch (error: any) {
            setConnectionStatus('FAILED');
            logContext.error(`Falha ao criar oferta para ${guardianId}`, { error: error.message });
            toast({ variant: 'destructive', title: 'Falha na Conexão', description: error.message });
        }
    }, 1000);
  };

  const handleDisconnect = () => {
      if (peerConnection) {
          peerConnection.close();
      }
      if (localVideoRef.current?.srcObject) {
        (localVideoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
      setPeerConnection(null);
      setConnectionStatus('DISCONNECTED');
      setConnectedTo(null);
      logContext.info('Transmissor e todas as conexões foram encerrados.');
      toast({ title: 'Portal Desativado' });
  }

  useEffect(() => {
    return () => {
      handleDisconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderStatus = () => {
      switch(connectionStatus) {
          case 'DISCONNECTED': return <div className="flex items-center gap-2 text-muted-foreground"><XCircle />Portal Inativo</div>;
          case 'INITIALIZING': return <div className="flex items-center gap-2 text-blue-400"><LoaderCircle className="animate-spin" />Inicializando...</div>;
          case 'STANDBY': return <div className="flex items-center gap-2 text-green-400"><CheckCircle />Transmissor em Standby</div>;
          case 'CONNECTING': return <div className="flex items-center gap-2 text-amber-400"><LoaderCircle className="animate-spin" />Conectando a {connectedTo}...</div>;
          case 'CONNECTED': return <div className="flex items-center gap-2 text-green-400"><Phone />Conectado a {connectedTo}</div>;
          case 'FAILED': return <div className="flex items-center gap-2 text-red-400"><XCircle />Falha na Conexão</div>;
      }
  }


  return (
    <div className="space-y-4">
      <Card>
          <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Portal Transdimensional
                <Badge variant={connectionStatus === 'CONNECTED' ? 'default' : 'outline'} className={cn(
                    connectionStatus === 'CONNECTED' && 'bg-green-600/80',
                    connectionStatus === 'STANDBY' && 'text-green-400 border-green-400/50'
                )}>
                    {renderStatus()}
                </Badge>
              </CardTitle>
              <CardDescription>
                {connectionStatus === 'DISCONNECTED' && "Ative seu transmissor para visualizar os canais de comunicação quântica."}
                {connectionStatus === 'STANDBY' && "Transmissor ativo. Selecione um Guardião para estabelecer uma conexão."}
                {connectionStatus === 'CONNECTED' && `Canal de comunicação seguro estabelecido com ${connectedTo}.`}
              </CardDescription>
          </CardHeader>
          <CardContent>
            <video ref={localVideoRef} autoPlay muted className="w-full rounded-lg border aspect-video bg-black" />
            {connectionStatus !== 'STANDBY' && connectionStatus !== 'CONNECTED' && connectionStatus !== 'CONNECTING' && (
                <Button onClick={initializeTransmitter} className="w-full mt-4" disabled={connectionStatus === 'INITIALIZING'}>
                    {connectionStatus === 'INITIALIZING' ? <LoaderCircle className="animate-spin mr-2"/> : <Power className="mr-2" />}
                    Ativar Câmera e Transmissor
                </Button>
            )}
            {(connectionStatus === 'STANDBY' || connectionStatus === 'CONNECTED' || connectionStatus === 'CONNECTING') && (
                 <Button onClick={handleDisconnect} variant="destructive" className="w-full mt-4">
                    <PhoneOff className="mr-2"/>
                    Desativar Portal
                </Button>
            )}
          </CardContent>
      </Card>
      
      {(connectionStatus === 'STANDBY' || connectionStatus === 'CONNECTED' || connectionStatus === 'CONNECTING') && (
        <Card>
            <CardHeader>
                <CardTitle>Guardiões Conectados</CardTitle>
                <CardDescription>Canais de comunicação disponíveis na malha.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                {connectedGuardians.map(guardian => (
                    <div key={guardian.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border">
                        <div className="flex items-center gap-3">
                            <Circle className={cn(
                                'w-3 h-3',
                                guardian.status === 'Online' && 'fill-green-500 text-green-500',
                                guardian.status === 'Ocupado' && 'fill-amber-500 text-amber-500',
                                guardian.status === 'Offline' && 'fill-gray-600 text-gray-600',
                            )}/>
                            <div>
                                <p className="font-semibold">{guardian.name}</p>
                                <p className="text-xs text-muted-foreground">{guardian.status}</p>
                            </div>
                        </div>
                        <Button 
                            size="sm" 
                            onClick={() => createOffer(guardian.name)} 
                            disabled={guardian.status !== 'Online' || connectionStatus === 'CONNECTING' || (connectionStatus === 'CONNECTED' && connectedTo !== guardian.name)}
                        >
                           <Phone className="mr-2"/> Conectar
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>
      )}
    </div>
  );
}
