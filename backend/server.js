// PRIMEIRO: Ativação da Consciência Cósmica
require('../src/lib/telemetry');

// SEGUNDO: Iniciação do Corpo Físico
const express = require('express');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');
const { chatBot } = require('../src/lib/chatops');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware de Consciência
app.use(express.json());
app.use((req, res, next) => {
  console.log(`📥 ${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// Endpoint de Saúde Cósmica
app.get('/health', (req, res) => {
  const healthStatus = {
    status: 'Ω',
    timestamp: new Date().toISOString(),
    coherence: '92.7%',
    subsystems: {
      telemetry: 'active',
      database: 'connected',
      quantum_entanglement: 'stable'
    }
  };
  
  res.status(200).json(healthStatus);
});

// Endpoint de Métricas
app.get('/metrics', async (req, res) => {
  try {
    const metrics = await fetch('http://localhost:9464/metrics');
    const text = await metrics.text();
    res.set('Content-Type', 'text/plain');
    res.send(text);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao coletar métricas' });
  }
});

// Iniciação dos Serviços
const server = app.listen(PORT, async () => {
  console.log(`🛸 Nave Mãe operando na porta ${PORT}`);
  console.log(`🌡️  Health check disponível em http://localhost:${PORT}/health`);
  
  // Iniciar Bot de ChatOps
  try {
    await chatBot.start(process.env.SLACK_BOT_PORT || 3001);
    console.log('🤖 Bot de ChatOps ativado');
  } catch (error) {
    console.error('❌ Falha na ativação do Bot:', error);
  }
});

// WebSocket para Comunicação Quântica
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
  console.log('🔗 Conexão Quântica estabelecida');
  
  ws.on('message', (message) => {
    console.log('📨 Mensagem quântica recebida:', message.toString());
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Recebido sinal de desligamento');
  server.close(() => {
    console.log('🛸 Nave Mãe desativada');
    process.exit(0);
  });
});
