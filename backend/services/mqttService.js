
const mqtt = require('mqtt');
const { updateStatus } = require('./stateService');
const { recordAudit } = require('../controllers/auditController');

const MQTT_BROKER = process.env.MQTT_BROKER || 'mqtt://broker.hivemq.com';
const client = mqtt.connect(MQTT_BROKER);

client.on('connect', () => {
  console.log('Conectado ao Broker MQTT.');
  client.subscribe('fundacao/modules/status/set', (err) => {
    if (!err) {
      console.log('Subscrito ao tópico de status dos módulos.');
    }
  });
});

client.on('message', async (topic, message) => {
  if (topic === 'fundacao/modules/status/set') {
    try {
      const { module, state, operator } = JSON.parse(message.toString());
      const currentState = require('./stateService').getStatus()[module];
      
      updateStatus(module, state);
      
      await recordAudit({
        module,
        operator: operator || 'EXTERNAL_MQTT',
        action: 'MQTT_UPDATE',
        statusBefore: currentState,
        statusAfter: state,
        reason: 'Atualização via sistema externo MQTT.'
      });

      // Broadcast da mudança para clientes WebSocket
      const { broadcast } = require('./websocketService');
      broadcast({ type: 'STATUS_UPDATE', payload: require('./stateService').getStatus() });
      broadcast({ type: 'ALERT', payload: { message: `Módulo ${module} alterado para ${state} via MQTT.` } });

    } catch (error) {
      console.error('Erro ao processar mensagem MQTT:', error);
    }
  }
});

function publishStatus(module, state) {
  client.publish('fundacao/modules/status/get', JSON.stringify({ module, state, timestamp: Date.now() }));
}

module.exports = {
  publishStatus
};
