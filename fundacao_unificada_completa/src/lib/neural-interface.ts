'use client';

// Mock implementations to prevent breakage and align with architectural purification.
const advancedLogger = {
  info: (message: string, meta?: any) => console.log(`[Neural-INFO] ${message}`, meta),
  error: (message: string, meta?: any) => console.error(`[Neural-ERROR] ${message}`, meta),
  warn: (message: string, meta?: any) => console.warn(`[Neural-WARN] ${message}`, meta),
};

// Esta é uma implementação mock. A integração real requer hardware EEG e bibliotecas de processamento de sinais.
class NeuralInterface {
  private ws: WebSocket | null = null;
  private backendUrl: string;
  private device: 'MUSE2' | 'NeuroSky' | 'SIMULATED';

  constructor(backendUrl: string, device: 'MUSE2' | 'NeuroSky' | 'SIMULATED' = 'SIMULATED') {
    this.backendUrl = backendUrl;
    this.device = device;
  }

  connect() {
    if (this.ws) {
      advancedLogger.warn('Interface Neural já conectada.');
      return;
    }
    
    this.ws = new WebSocket(this.backendUrl);

    this.ws.onopen = () => {
      advancedLogger.info('Conexão com o backend neural estabelecida.');
      this.ws?.send(JSON.stringify({ type: 'CONNECT_DEVICE', device: this.device }));
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      advancedLogger.info('Dados neurais recebidos do backend', data);
      // Aqui, você despacharia eventos para atualizar a UI com feedback háptico/visual
    };

    this.ws.onerror = (error) => {
      advancedLogger.error('Erro na conexão WebSocket da Interface Neural', { error });
    };

    this.ws.onclose = () => {
      advancedLogger.info('Conexão com o backend neural fechada.');
      this.ws = null;
    };
  }

  sendIntention(intention: { focus: number; relaxation: number; command?: string }) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      advancedLogger.error('Não é possível enviar intenção: WebSocket não conectado.');
      return;
    }
    this.ws.send(JSON.stringify({ type: 'INTENTION_COMMAND', payload: intention }));
    advancedLogger.info('Intenção enviada para o backend neural', { intention });
  }

  disconnect() {
    this.ws?.close();
  }
}

export const neuralInterface = new NeuralInterface(
  process.env.NEXT_PUBLIC_NEURAL_BACKEND_URL || 'ws://localhost:8765'
);
