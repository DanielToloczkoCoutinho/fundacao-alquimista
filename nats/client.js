// nats/client.js
const { connect, StringCodec } = require('nats');

async function setup() {
  try {
    const natsUrl = process.env.NATS_URL || 'nats://localhost:4222';
    const nc = await connect({ servers: natsUrl });
    console.log(`📡 Conectado ao NATS em ${nc.getServer()}`);
    
    const js = nc.jetstream();
    const sc = StringCodec();

    // Publicar evento crítico
    await js.publish('module.events', sc.encode(JSON.stringify({
      module: 'M291',
      event: 'initialized',
      timestamp: Date.now(),
    })));
    console.log("📨 Evento de inicialização do M291 publicado.");

    // Assinar consumindo em alta performance
    const sub = await js.subscribe('module.events', { queue: 'workers' });
    console.log("👂 Assinatura na fila 'workers' criada. Aguardando eventos...");
    (async () => {
      for await (const msg of sub) {
        const data = JSON.parse(sc.decode(msg.data));
        console.log('→ Evento NATS recebido:', data);
        msg.ack();
      }
    })().catch(err => console.error("Erro na assinatura NATS:", err));

    // Para manter o cliente rodando, podemos adicionar um await aqui
    // await nc.closed();
  } catch (err) {
    console.error("Falha ao conectar ou operar com NATS:", err);
  }
}

setup();
