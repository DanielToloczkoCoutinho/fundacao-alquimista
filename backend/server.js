require('dotenv').config();
require('../src/lib/telemetry.js'); // Ativa a Observabilidade Fractal
const http = require('http');
const app = require('./app');
const { initializeWebSocket } = require('./services/websocketService');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

// Inicializa o WebSocket Server
initializeWebSocket(server);

server.listen(PORT, () => {
  console.log(`Servidor da Fundação Alquimista operando na porta ${PORT}`);
});
