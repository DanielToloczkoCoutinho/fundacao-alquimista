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
    if (!process.env.NATS_URL) {
        console.warn('⚠️  Variável de ambiente NATS_URL não definida. O serviço de mensageria NATS permanecerá offline.');
        return false;
    }
    try {
      this.nc = await connect({
        servers: process.env.NATS_URL,
        timeout: 10000,
        reconnect: true,
        maxReconnectAttempts: -1, // Reconectar infinitamente
        reconnectTimeWait: 5000, // Espera 5 segundos entre tentativas de reconexão
      });

      this.js = this.nc.jetstream();
      this.connected = true;

      console.log('🌌 Conectado ao servidor NATS');
      this.setupEventHandlers();
      
      return true;
    } catch (error) {
      console.error('❌ Falha na conexão inicial com o NATS:', error);
      return false;
    }
  }

  setupEventHandlers() {
    (async () => {
        if (!this.nc) return;
        for await (const status of this.nc.status()) {
            switch(status.type) {
                case 'close':
                    console.log('🔌 Conexão NATS fechada');
                    this.connected = false;
                    break;
                case 'reconnecting':
                    console.log('🔄 Reconectando ao NATS...');
                    break;
                case 'reconnect':
                    console.log(`✅ Reconectado ao NATS em ${status.data}`);
                    this.connected = true;
                    break;
                case 'error':
                    console.error('❌ Erro na conexão NATS:', status.data);
                    break;
                default:
                    console.log('ℹ️ Status NATS:', status.type, status.data);
            }
        }
    })().catch(err => {
        console.error('Erro no handler de status do NATS:', err);
    });
  }

  async publishEvent(subject, data) {
    if (!this.connected) {
      console.warn(`NATS não conectado. Pulando publicação do evento no tópico '${subject}'.`);
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
      console.error('❌ Erro ao publicar evento NATS:', error);
      throw error;
    }
  }

  async subscribeToEvents(subject, callback) {
    if (!this.connected) {
       console.warn(`NATS não conectado. Não foi possível inscrever-se no tópico '${subject}'.`);
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
            console.error('❌ Erro ao processar mensagem NATS:', error);
            msg.nak();
          }
        }
      })();
    } catch (error) {
      console.error('❌ Erro na inscrição NATS:', error);
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
  const connected = await natsMessenger.connect();
  
  // Publicar evento de inicialização
  if(connected) {
      await natsMessenger.publishEvent('fundacao.omega.events', {
        type: 'system.initialized',
        module: 'M000',
        event: 'core_initialized',
        version: '1.0.0'
      });

      // Inscrever-se em eventos de módulos
      natsMessenger.subscribeToEvents('fundacao.modules.*', (data) => {
        console.log('📨 Evento de módulo recebido via NATS:', data);
        // Processar eventos de módulos aqui
      });
  }
})();

module.exports = { natsMessenger };
