const WebSocket = require('ws');
const { getStatus } = require('./stateService');

let wss;

function initializeWebSocket(server) {
  wss = new WebSocket.Server({ server });

  wss.on('connection', ws => {
    console.log('Cliente WebSocket conectado.');
    
    // Envia o estado atual ao conectar
    ws.send(JSON.stringify({ type: 'INIT_STATUS', payload: getStatus() }));

    ws.on('close', () => {
      console.log('Cliente WebSocket desconectado.');
    });

    ws.on('message', message => {
        try {
            const data = JSON.parse(message);
            if (data.type === 'PING') {
                ws.send(JSON.stringify({ type: 'PONG', timestamp: new Date().toISOString() }));
            }
        } catch (e) {
            console.error('Mensagem WebSocket inválida:', message);
        }
    });
  });
}

function broadcast(data) {
  if (!wss) return;
  
  const message = JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Emite um pulso de 'sinais vitais' periodicamente para manter a conexão viva e fornecer dados em tempo real
setInterval(() => {
    broadcast({
        type: 'vitals',
        vibration: '432Hz',
        coherence: `${(Math.random() * 5 + 95).toFixed(2)}%`,
        timestamp: new Date().toISOString(),
    });
}, 5000);


module.exports = {
  initializeWebSocket,
  broadcast
};
