// nats/client.js
const { connect, StringCodec } = require('nats');

(async () => {
  try {
    const nc = await connect({ servers: process.env.NATS_URL });
    const js = nc.jetstream();
    const sc = StringCodec();

    // Publicar evento de inicialização
    await js.publish('module.events', sc.encode(JSON.stringify({
      module: 'M361',
      event: 'initialized',
      timestamp: Date.now(),
    })));
    console.log("📨 Evento de inicialização do M361 publicado no NATS.");


    // Assinar e processar eventos
    const sub = await js.subscribe('module.events', { queue: 'workers' });
    console.log("👂 Assinatura na fila 'workers' criada. Aguardando eventos...");
    for await (const msg of sub) {
      const data = JSON.parse(sc.decode(msg.data));
      console.log('→ Evento NATS recebido:', data);
      msg.ack();
    }
  } catch (err) {
    console.error("Falha ao conectar ou operar com NATS:", err);
  }
})();
