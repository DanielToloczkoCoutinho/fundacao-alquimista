// nats/client.js
const { connect, StringCodec, JSONCodec } = require('nats');

class NatsMessenger {
  constructor() {
    this.nc = null;
    this.js = null;
    this.sc = StringCodec();
    this.jc = JSONCodec();
    this.connected = false;
  }

  async connect() {
    try {
      this.nc = await connect({
        servers: process.env.NATS_URL || 'nats://localhost:4222',
        timeout: 10000,
        reconnect: true,
        maxReconnectAttempts: -1 // Reconectar infinitamente
      });

      this.js = this.nc.jetstream();
      this.connected = true;

      console.log('🌌 Conectado ao servidor NATS');
      this.setupEventHandlers();
      
      return true;
    } catch (error) {
      console.error('❌ Falha na conexão NATS:', error);
      return false;
    }
  }

  setupEventHandlers() {
    this.nc.addEventListener('close', () => {
      console.log('🔌 Conexão NATS fechada');
      this.connected = false;
    });

    this.nc.addEventListener('reconnect', () => {
      console.log('🔄 Reconectando ao NATS...');
    });

    this.nc.addEventListener('connect', () => {
      console.log('✅ Reconectado ao NATS');
      this.connected = true;
    });
  }

  async publishEvent(subject, data) {
    if (!this.connected) {
      // throw new Error('Não conectado ao NATS');
      console.warn('NATS não conectado. Pulando publicação de evento.');
      return;
    }

    try {
      const pubAck = await this.js.publish(subject, this.jc.encode({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'fundacao-omega-core'
      }));

      console.log(`📤 Evento publicado: ${subject} [${pubAck.seq}]`);
      return pubAck;
    } catch (error) {
      console.error('❌ Erro ao publicar evento:', error);
      throw error;
    }
  }

  async subscribeToEvents(subject, callback) {
    if (!this.connected) {
       console.warn('NATS não conectado. Não foi possível inscrever-se em eventos.');
       return;
    }

    try {
      const sub = await this.js.subscribe(subject, {
        queue: 'omega-workers',
        config: {
          deliver_policy: 'all',
          ack_wait: 30000
        }
      });

      console.log(`📥 Inscrito em: ${subject}`);

      (async () => {
        for await (const msg of sub) {
          try {
            const data = this.jc.decode(msg.data);
            await callback(data);
            msg.ack();
          } catch (error) {
            console.error('❌ Erro ao processar mensagem:', error);
            msg.nak();
          }
        }
      })();
    } catch (error) {
      console.error('❌ Erro na inscrição:', error);
      throw error;
    }
  }

  async close() {
    if (this.nc) {
      await this.nc.close();
      this.connected = false;
    }
  }
}

// Singleton do mensageiro NATS
const natsMessenger = new NatsMessenger();

// Inicialização automática
(async () => {
  await natsMessenger.connect();
  
  // Publicar evento de inicialização
  if(natsMessenger.connected) {
      await natsMessenger.publishEvent('fundacao.omega.events', {
        type: 'system.initialized',
        module: 'M000',
        event: 'core_initialized',
        version: '1.0.0'
      });

      // Inscrever-se em eventos de módulos
      natsMessenger.subscribeToEvents('fundacao.modules.*', (data) => {
        console.log('📨 Evento de módulo recebido:', data);
        // Processar eventos de módulos aqui
      });
  }
})();

module.exports = { natsMessenger };
