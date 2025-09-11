'use client';

import { useEffect } from 'react';

export function Portal() {
  useEffect(() => {
    // A lógica de configuração do WebRTC (sinalização, ICE, etc.) é complexa
    // e requer um servidor intermediário, que está além do escopo deste componente inicial.
    const peer = new RTCPeerConnection();
    console.log('Portal WebRTC inicializado.', peer);

    return () => {
      peer.close();
    };
  }, []);

  return (
    <div className="p-4 rounded-lg bg-background/50 border border-primary/30">
      <h3 className="font-semibold text-primary">Portal Transdimensional Ativo</h3>
      <p className="text-sm text-muted-foreground">O canal de comunicação WebRTC está aberto e aguardando conexão.</p>
    </div>
  );
}
