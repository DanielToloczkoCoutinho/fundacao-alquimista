
const WebSocket = require('ws');

let wss;

function initializeWebSocket(server) {
  wss = new WebSocket.Server({ server });

  wss.on('connection', ws => {
    console.log('Cliente WebSocket conectado.');
    
    // Envia o estado atual ao conectar
    const { getStatus } = require('./stateService');
    ws.send(JSON.stringify({ type: 'INIT_STATUS', payload: getStatus() }));

    ws.on('close', () => {
      console.log('Cliente WebSocket desconectado.');
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

module.exports = {
  initializeWebSocket,
  broadcast
};
